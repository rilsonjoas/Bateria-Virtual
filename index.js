//Parte que está de olho nos cliques do mouse

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

//Parte que está de olho nos cliques do teclado

document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

//Função de áudio chamada pelos dois

function makeSound(key) {
  switch (key) {
    case "y":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "x":
      var kickBass = new Audio("sounds/bombo.wav");
      kickBass.play();
      break;
    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "g":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "h":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "j":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    default:
      console.log(buttonInnerHTML);
      break;
  }
}

//Animação chamada pelos dois

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 200);
}
