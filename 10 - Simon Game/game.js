var buttonColours = ["red","blue","green","yellow"];

var gamePattern=[];
var userClickedPattern=[];

var level=0;
var gameStarted = false;

$(document).keydown(function() {
  if (!gameStarted){
  console.log("Key pressed");
  nextSequence();
  gameStarted = true;
}
})


$(".btn").on("click", function(){
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  animatePress(userChosenColour);
  playSound(userChosenColour);
  console.log(userClickedPattern);

  checkAnswer((userClickedPattern.length)-1);

})


function checkAnswer(currentLevel){
  if(userClickedPattern[currentLevel]===gamePattern[currentLevel])
  {
    console.log("Success")
    if(userClickedPattern.length===gamePattern.length)
    {
      setTimeout(nextSequence,1000);
    }
  }
  else
  {
    console.log("Wrong")
    playSound("wrong");
    $("body").addClass("game-over")
    setTimeout(function(){$("body").removeClass("game-over")}, 200);
    $("h1").text("Game Over, Press Any Key to Restart");
    startOver();
  }


}

function nextSequence() {
  userClickedPattern=[];
  level++;
  $("h1").text("Level "+level);

  var randomNumber = (Math.floor(Math.random()*4));
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  var buttonChosen= $("#"+randomChosenColour);
  buttonChosen.fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

function startOver(){
  level=0;
  gamePattern=[];
  gameStarted=false;
}

function playSound(name) {
  var audio = new Audio("sounds/"+name+".mp3");
  audio.volume=0.2;
  audio.play();
}

function animatePress(currentColour) {
  $("#"+currentColour).addClass("pressed");
  setTimeout(function(){$("#"+currentColour).removeClass("pressed")}, 100);
}
