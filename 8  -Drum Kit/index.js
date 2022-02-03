var drums = document.querySelectorAll(".drum")

for (var i=0; i<drums.length; i++)
{
  //Detecting when clicking the buttons
  drums[i].addEventListener("click", function(){

    var keyLetter = this.innerHTML;
    makeSound(keyLetter);
    buttonAnimation(keyLetter);
   })
}

   //Detecting when pressing the keys
   document.addEventListener("keydown", function(event){

     makeSound(event.key);
     buttonAnimation(event.key);
   })


//Definicion funcion
function makeSound(key) {
  switch (key) {

      case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;

      case "a":
        var tom2 = new Audio('sounds/tom-2.mp3');
        tom2.play();
        break;

      case "s":
        var tom3 = new Audio('sounds/tom-3.mp3');
        tom3.play();
        break;

      case "d":
        var tom4 = new Audio('sounds/tom-4.mp3');
        tom4.play();
        break;

      case "j":
        var kick = new Audio('sounds/kick-bass.mp3');
        kick.play();
        break;

      case "k":
        var crash = new Audio('sounds/snare.mp3');
        crash.play();
        break;

      case "l":
        var snare = new Audio('sounds/crash.mp3');
        snare.play();
        break;

    default: console.log(key);
  }
 }


 function buttonAnimation(key) {

   var activeButton = document.querySelector("." + key);
   activeButton.classList.add("pressed");

   document.addEventListener("keyup", function(event){
      activeButton.classList.remove("pressed");

   })
 }
