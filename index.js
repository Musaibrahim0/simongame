var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

function playSound(name) {
  if (buttonColors.includes(name)) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
  } else {
    console.warn("Invalid sound name:", name);
  }
}

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");

  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

function newSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber]; 

  gamePattern.push(randomChosenColor);

  $("#" + randomChosenColor).fadeOut(100).fadeIn(100);

  playSound(randomChosenColor);
  animatePress(randomChosenColor); // ✅ animation added for game turn
}

$(".btn").click(function () {
  var userChosenColor = $(this).attr("id");
  console.log("User clicked:", userChosenColor);

  userClickedPattern.push(userChosenColor);
  console.log("User Clicked Pattern:", userClickedPattern);

  playSound(userChosenColor);
  animatePress(userChosenColor); // ✅ animation added for user click
});
