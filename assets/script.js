var currentDayHeader = $('#currentDay')
currentDayHeader.addClass('display-4')

$(function () {
  setInterval(function () {
    var currentTime = dayjs().format('hh:mm:ss');
    var currentDate = dayjs().format('MMMM D, YYYY');
    console.log(currentTime);
    currentDayHeader.text(currentDate)
  }, 1000);


  $('.saveBtn').on('click', function () {
    var textareaValue = $(this).closest('.time-block').find('textarea').val();
    var divId = $(this).closest('.time-block').attr('id');
    var currentDate = dayjs().format('MMMM D, YYYY');

    // Check if we already have an entry for the currentDate and parse it, or initialize an empty array
    var currentEntries = JSON.parse(localStorage.getItem(currentDate));
    if (JSON.parse(localStorage.getItem(currentDate)) === null) {
      currentEntries = [];
    };

    var newEntry = {
      time: divId,
      content: textareaValue
    };

    // Add the new entry to the array
    currentEntries.push(newEntry);

    // Save the updated array back to localStorage
    localStorage.setItem(currentDate, JSON.stringify(currentEntries));

    // Print the updated localStorage
    console.log('Updated localStorage:', JSON.parse(localStorage.getItem(currentDate)));
  });


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});


