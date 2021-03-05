var modalEl = $("#project-modal");
var addProjectBtn = $("#addProjectBtn");


//Display Current Time in Header
var update = function() {
    $("#time-tracker")
    .innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
}
setInterval(update, 1000);



function init() {

  // Opens modal/dialog box
  $(function () {
    $("#dialog").dialog( {
      modal: true,
      autoOpen: false,
      title: "Add Project Information:",
    })
    $("#addProjectBtn").click(function () {
      $('#dialog').dialog('open');
    })
  })

//create elements to match the fields from the input form
var projectEl = $("#project-name")
var typeEl = $("#project-type")

//receive the value from input and store in new variables


//append that information to the table


//figure out the x button








};



// Code for date picker in form
var dueDateInputEl = $('#due-date-input');

// later in your script
dueDateInputEl.datepicker({ minDate: 1 });

init();