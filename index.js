var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

$(document).keydown(function () {
  if (!started) {
    $("#level-title").text("Level " + level); 
    newSequence();
    started = true;
  }
});

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
  userClickedPattern = []; 

  level++; 
  $("#level-title").text("Level " + level); 

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];

  gamePattern.push(randomChosenColor);

  $("#" + randomChosenColor).fadeOut(100).fadeIn(100);
  playSound(randomChosenColor);
  animatePress(randomChosenColor);
}

$(".btn").click(function () {
  var userChosenColor = $(this).attr("id");

  userClickedPattern.push(userChosenColor);
  console.log("User Clicked Pattern:", userClickedPattern);

  playSound(userChosenColor);
  animatePress(userChosenColor);
});
