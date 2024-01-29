var currentDayHeader = $('#currentDay')
currentDayHeader.addClass('display-4')
var currentDate = dayjs().format('MMMM D, YYYY');
var currentTime = dayjs().format('HH:mm:ss');
var hour = dayjs().hour();
// var hour = 14


$(function () {

  setInterval(function () {
    currentTime = dayjs().format('HH:mm:ss');
    currentDate = dayjs().format('MMMM D, YYYY');
    // console.log(currentTime);
    currentDayHeader.text(currentDate)
  }, 1000);

  var currentEntries = JSON.parse(localStorage.getItem(currentDate));
  if (JSON.parse(localStorage.getItem(currentDate)) === null) {
    currentEntries = [];
  } else {
    for (var i = 0; i < currentEntries.length; i++) {
      var entry = currentEntries[i];
      var idMatch = entry.time;
      var scheduleText = entry.content;
      $('#' + idMatch).find("textarea").val(scheduleText);
    }
  }

  $('.saveBtn').on('click', function () {
    var textareaValue = $(this).closest('.time-block').find('textarea').val();
    var divId = $(this).closest('.time-block').attr('id');
    currentDate = dayjs().format('MMMM D, YYYY');

    // Check if we already have an entry for the currentDate and parse it, or initialize an empty array
    // var currentEntries = JSON.parse(localStorage.getItem(currentDate));
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
    console.log("colors applied");
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
  updateTimeBlocks();

  setInterval(updateTimeBlocks, 60000);


});


