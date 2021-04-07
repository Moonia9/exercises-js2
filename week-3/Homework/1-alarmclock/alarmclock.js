function setAlarm() {
  let alarmValue = parseInt(document.getElementById("alarmSet").value);
  changeOutputText(alarmValue);
}

function changeOutputText(time) {
  const outputText = document.getElementById("timeRemaining");
  outputText.innerText =
    "Time Remaining: 00:" + (time < 10 ? `0${time}` : time);

  if (time > 0) {
    setTimeout(() => changeOutputText(--time), 1000);
  } else {
    playAlarm();
  }
}

/* OR
let alarmTime = document.querySelector("#alarmSet").valueAsNumber;
let text = document.querySelector("#timeRemaining");
let currentTime = alarmTime;

timerID = setInterval ( //here we are storing the ID interval that JS gives us by default
  function (num) {
    if(currentTime === 0) {
      //stop the timer
      clearInterval(timerID);
      
      //Change the background color
      document.body.style.backgroundColor = "red";
      
      //play alarm
      playAlarm();
    }
    if(currentTime >= 0) {
     text.innerText = "Time Remaining: 00:" + currentTime;
     console.log(currentTime);
    }
    
    currentTime = currentTime - 1;
  },
  1000,
  alarmTime);
}*/

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
