//var timeTracker = ''moment().format("dddd, MMMM Do YYYY, h:mm:ss a");''
//$("#time-tracker").text(timeTracker);

var update = function() {
    document.getElementById("time-tracker")
    .innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
}
setInterval(update, 1000);


$( function() {
    $( "#dialog" ).dialog();
  } );
var dueDateInputEl = $('#due-date-input');

// later in your script
dueDateInputEl.datepicker({ minDate: 1 });