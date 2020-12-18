var buttons = $(".click")
var input = $(".fill")
var currentTime = moment().hours()
var displayDate
console.log($(this))

input.each(function() {
  var inputTime = $(this).attr("id")
  if(inputTime < currentTime) {
    $(this).addClass("past")
  } else if (inputTime === currentTime) {
    $(this).addClass("present")
  } else if (inputTime > currentTime) {
    $(this).addClass("future")
  }
})
  
var h3Tag = $("<h3>").text(moment().format("dddd, MMMM Do YYYY"))
var displayBox = $("#displayBox")
displayBox.append(h3Tag)



if(currentTime < 9 || currentTime > 17) {
  var h4Tag = $("<h4>").text(`The Current Time, ${moment().format("h:mm:ss a")}, Is Outside Of Scheduable Hours`)
var displayBox = $("#displayBox")
displayBox.append(h4Tag)
  var h6Tag = $("<h6>").text("You really like to plan ahead!")
var displayBox = $("#displayBox")
displayBox.append(h6Tag)
} else {
  var h5Tag = $("<h5>").text(`The Current Time, ${moment().format("h:mm:ss a")}, Is Within Scheduable Hours`)
var displayBox = $("#displayBox")
displayBox.append(h5Tag)
}


  $("button").click(function(){
    var thisHour = $(this).attr("data-hour");
    var hourText = $(`#${thisHour}`).val()
    console.log(hourText)
    console.log(thisHour);
    localStorage.setItem(thisHour, hourText)
  })

  // go into the coding quiz assignment and utilize the counter and counter + function
  $(`#9`).val(localStorage.getItem("9"))
  $(`#10`).val(localStorage.getItem("10"))
  $(`#11`).val(localStorage.getItem("11"))
  $(`#12`).val(localStorage.getItem("12"))
  $(`#13`).val(localStorage.getItem("13"))
  $(`#14`).val(localStorage.getItem("14"))
  $(`#15`).val(localStorage.getItem("15"))
  $(`#16`).val(localStorage.getItem("16"))
  $(`#17`).val(localStorage.getItem("17"))
 
  // also use the pTag targeter for targeting buttons