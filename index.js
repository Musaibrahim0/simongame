var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = []
function NewSequence (){
  var randomNumber = Math.floor(Math.random() * 4)
 var randomChoseColor = buttonColors[randomNumber];

 gamePattern.push(randomChoseColor)

 $("#" + randomChosenColor).fadeOut(100).fadeIn(100);
}
