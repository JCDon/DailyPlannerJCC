// first we define our variables
var buttons = $(".click")
var input = $(".fill")
// track the current time on page load
var currentTime = moment().hours()

// create a function that reads the current time, and decides if each textarea row is past, present, or future
input.each(function() {
  var inputTime = $(this).attr("id")
  if(inputTime < currentTime) {
    // change the color respectively with a different class
    $(this).addClass("past")
  } else if (inputTime === currentTime) {
    $(this).addClass("present")
  } else if (inputTime > currentTime) {
    $(this).addClass("future")
  }
})
  
// create a h3 element to display the date in day name, month, date numeral, and year
var h3Tag = $("<h3>").text(moment().format("dddd, MMMM Do YYYY"))
var displayBox = $("#displayBox")
// append the element to the header
displayBox.append(h3Tag)


// create an if statement to check if time is within the hours visible on the calender
if(currentTime < 9 || currentTime > 17) {
  // if not, the tag `outside of hours` appear and dark theme
  var bodyDisplay = $("body")
  // these set the colors darker via class and id changes
  displayBox.addClass("displayNight")
  bodyDisplay.attr("id", "bodyNight")
  var h4Tag = $("<h4>").text(`The Current Time, ${moment().format("h:mm:ss a")}, Is Outside Of Scheduable Hours`)
var displayBox = $("#displayBox")
displayBox.append(h4Tag)
  var h6Tag = $("<h6>").text("You really like to plan ahead!")
var displayBox = $("#displayBox")
displayBox.append(h6Tag)
} else {
  // if so, the tag `within hours` will appear and light theme
  var h5Tag = $("<h5>").text(`The Current Time, ${moment().format("h:mm:ss a")}, Is Within Scheduable Hours`)
var displayBox = $("#displayBox")
displayBox.append(h5Tag)
}

// this event listener is watching all the buttons for a click
// when the button is clicked it will...
  $("button").click(function(){
    // take the data-hour value
    var thisHour = $(this).attr("data-hour");
    // take the input value
    var hourText = $(`#${thisHour}`).val()
    console.log(hourText)
    console.log(thisHour);
    // store them both to local storage
    localStorage.setItem(thisHour, hourText)
  })

  // this is my retrieval stack for each row of inputs
  $(`#9`).val(localStorage.getItem("9"))
  $(`#10`).val(localStorage.getItem("10"))
  $(`#11`).val(localStorage.getItem("11"))
  $(`#12`).val(localStorage.getItem("12"))
  $(`#13`).val(localStorage.getItem("13"))
  $(`#14`).val(localStorage.getItem("14"))
  $(`#15`).val(localStorage.getItem("15"))
  $(`#16`).val(localStorage.getItem("16"))
  $(`#17`).val(localStorage.getItem("17"))