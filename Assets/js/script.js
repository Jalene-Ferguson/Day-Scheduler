// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {

var dateNow = dayjs().format("MMM DD, YYYY");
$("#currentDay").text(dateNow);

$("#hour-9, #hour-10, #hour-11").remove();

var timeStart = 9;
var timeEnd = 17;
var timeNow = dayjs().hour()


for(var i = timeStart; i <= timeEnd; i++) {
  var timeBlock = $("<div>").addClass("row time-block").attr("id", "hour-" +i);
var rowTime = $("<div>").addClass("col-2 col-md-1 hour text-center py-3");
var textContent = $("<textarea>").addClass("col-8 col-md-10 description").attr("rows", 3);
var saver = $("<button>").addClass("btn saveBtn col-2 col-md-1").attr("aria-label", "save");
var buttonShower = $("<i>").addClass("fas fa-save").attr("aria-hidden", "true").appendTo(saver);

if(i < timeNow) {
  timeBlock.addClass("past");
}else if ( i === timeNow) {
  timeBlock.addClass("present");
}else if ( i > timeNow) {
  timeBlock.addClass("future");
}

if( i < 12) {
  rowTime.text(i + "am");
}else if (i === 12) {
  rowTime.text(i + "pm");
}else if (i > 12) {
  rowTime.text((i - 12) + "pm");

  timeBlock.append(rowTime, textContent, saver);
$(".container-fluid").append(timeBlock);


textContent.val(localStorage.getItem("hour-" + i));
console.log(localStorage.getItem("hour-" + i));
}

$(".saveBtn").on("click", function( ) {
  var content = $(this).parent().attr("id");
  var info = $(this).parent().find("info").val();
  localStorage.setItems(content, info);
});

};

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
