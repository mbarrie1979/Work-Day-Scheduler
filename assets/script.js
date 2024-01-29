// declare and style for date display
var currentDayHeader = $('#currentDay')
currentDayHeader.addClass('display-4')

// current date and time variables
var currentDate = dayjs().format('MMMM D, YYYY');
var currentTime = dayjs().format('HH:mm:ss');

// variable for hours only to compare to timeblock IDs for color change
var hour = dayjs().hour();


// function to run once html loads
$(function () {
  var currentEntries = [];
  // function runs every second to ensure date is always updated and time is accurate
  setInterval(function () {
    currentTime = dayjs().format('HH:mm:ss');
    currentDate = dayjs().format('MMMM D, YYYY');
    // console.log(currentTime);
    currentDayHeader.text(currentDate)
  }, 1000);

  // retrieve local storage to be parsed to time blocks
  function updateScheduleEntries() {
    // console.log("Entries Updated")
    currentEntries = JSON.parse(localStorage.getItem(currentDate));
    if (JSON.parse(localStorage.getItem(currentDate)) === null) {
      currentEntries = [];
    } else {
      // writing content of JSON to affiliated text area matched by ID
      for (var i = 0; i < currentEntries.length; i++) {
        var entry = currentEntries[i];
        var idMatch = entry.time;
        var scheduleText = entry.content;
        $('#' + idMatch).find("textarea").val(scheduleText);
      }
    }
  };
  // Event listener for save button
  $('.saveBtn').on('click', function () {
    var textareaValue = $(this).closest('.time-block').find('textarea').val();
    var divId = $(this).closest('.time-block').attr('id');
    currentDate = dayjs().format('MMMM D, YYYY');

    // Check if we already have an entry for the currentDate and parse it, or initialize an empty array
    if (JSON.parse(localStorage.getItem(currentDate)) === null) {
      currentEntries = [];
    };

    var newEntry = {
      time: divId,
      content: textareaValue
    };

    var newEntryTime = newEntry.time;

    // Add the new entry to the array but overwrite if it's the same timeblock
    for (var i = 0; i < currentEntries.length; i++) {
      if (currentEntries[i].time === newEntryTime)
        currentEntries.splice([i], 1);

    }
    currentEntries.push(newEntry);


    // Save the updated array back to localStorage
    localStorage.setItem(currentDate, JSON.stringify(currentEntries));

    // Print the updated localStorage
    console.log('Updated localStorage:', JSON.parse(localStorage.getItem(currentDate)));
  });

  var timeDivs = [];
  // looping through divs via ID and placing them in an array
  for (var i = 9; i <= 17; i++) {
    var div = $('#' + i);
    timeDivs.push(div);
  }
  // logic to handle adding and removing classes depending on current hour
  function updateTimeBlocks() {
    // console.log("changed")
    for (var i = 0; i < timeDivs.length; i++) {
      if (timeDivs[i].attr('id') < hour) {
        timeDivs[i].addClass('past');
        timeDivs[i].removeClass('present future');
      } else if (timeDivs[i].attr('id') == hour) {
        timeDivs[i].addClass('present');
        timeDivs[i].removeClass('past future');
      } else {
        timeDivs[i].addClass('future');
        timeDivs[i].removeClass('present past');
      }
    };
  };
  // run on page load
  updateTimeBlocks();
  updateScheduleEntries();
  // run every 5 seconds to keep updated in real time
  setInterval(updateTimeBlocks, 5000);
  setInterval(updateScheduleEntries, 5000);


});


