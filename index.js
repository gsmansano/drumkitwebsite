var nDrums = document.querySelectorAll(".drum").length;

//Drums on click

for (i = 0; i < nDrums; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    let btnInnerHTML = this.innerHTML;
    makeSound(btnInnerHTML);
    drumAnimation(btnInnerHTML);
  });
}

//Drums on key press

document.addEventListener("keydown", function() {
  makeSound(event.key);
  drumAnimation(event.key);
});

// Sound function

function makeSound(key) {
  switch (key) {
    case "w":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      let kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "d":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "j":
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "k":
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "l":
      let tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    default:
      console.log("What?");
  }
}

// Button animation

function drumAnimation(currentkey) {

let activeBtn = document.querySelector("." + currentkey);
 activeBtn.classList.add("pressed");
 setTimeout(function() {
    activeBtn.classList.remove("pressed");
 }, 100)

}
