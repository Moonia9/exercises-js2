let images = ["images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg"];
let img = document.querySelector(".carousel img");

let i = 0;
postMyImages();

function postMyImages() {
  img.src = images[i];
}

let buttonAutoBack = document.getElementById("auto-back");
let buttonBack = document.getElementById("back");
let buttonStop = document.getElementById("stop");
let buttonForward = document.getElementById("forward");
let buttonAutoForward = document.getElementById("auto-forward");

buttonForward.addEventListener("click", moveForward);
buttonBack.addEventListener("click", moveBackwards);
buttonAutoForward.addEventListener("click", moveAutoForward);
buttonAutoBack.addEventListener("click", moveAutoBackwards);
buttonStop.addEventListener("click", justStop);

function move(direction) {
  i = (i + direction + images.length) % images.length;
  postMyImages(i);
}

function moveForward() {
  justStop();
  move(1);
}

function moveBackwards() {
  justStop();
  move(-1);
}

let slideshowIntervalID = 0;
let currentDirection = 0;

function play(direction) {
  if (direction !== currentDirection) {
    justStop();
    currentDirection = direction;
  }
  if (slideshowIntervalID === 0) {
    slideshowIntervalID = setInterval(move, 2000, direction);
  }
}

function moveAutoForward() {
  play(1);
}

function moveAutoBackwards() {
  play(-1);
}

function justStop() {
  clearInterval(slideshowIntervalID);
  slideshowIntervalID = 0;
}
