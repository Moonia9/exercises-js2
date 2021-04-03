function setAlarm() {
  const setAlarmValue = parseInt(document.getElementById("alarmSet")).value.trim();
  outputValue(setAlarmValue);
}

function outputValue (time) {
  const remainingTime = document.getElementById("timeRemaining");
  remainingTime.innerText = "Time Remaining: 00" + time
  if (time >= 0){
    setTimeout(() => { outputValue(--time)
      
    }, 1000);
  } else {
    playAlarm();
  }
}




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
