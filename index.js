var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function newSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber]; 

  gamePattern.push(randomChosenColor);

  $("#" + randomChosenColor).fadeOut(100).fadeIn(100); 

  playSound(randomChosenColor); // ✅ using function
}

$(".btn").click(function () {
  var userChosenColor = $(this).attr("id");
  console.log("User clicked:", userChosenColor);

  userClickedPattern.push(userChosenColor);
  console.log("User Clicked Pattern:", userClickedPattern);

  playSound(userChosenColor); // ✅ using function
});
