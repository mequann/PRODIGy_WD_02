let startTime;
let isRunning = false;
let lapCounter = 1;

function startStopwatch() {
  if (!isRunning) {
    startTime = new Date().getTime();
    isRunning = true;
    updateStopwatch();
  }
}

function pauseStopwatch() {
  isRunning = false;
}

function resetStopwatch() {
  isRunning = false;
  document.getElementById("display").innerHTML = "00:00:00";
  lapCounter = 1;
  document.getElementById("laps").innerHTML = "";
}

function recordLapTime() {
  if (isRunning) {
    const currentTime = new Date().getTime();
    const elapsedTime = currentTime - startTime;
    const formattedTime = formatTime(elapsedTime);

    const lapItem = document.createElement("li");
    lapItem.innerText = `Lap ${lapCounter}: ${formattedTime}`;
    document.getElementById("laps").appendChild(lapItem);

    lapCounter++;
  }
}

function updateStopwatch() {
  if (isRunning) {
    const currentTime = new Date().getTime();
    const elapsedTime = currentTime - startTime;
    const formattedTime = formatTime(elapsedTime);
    document.getElementById("display").innerHTML = formattedTime;

    setTimeout(updateStopwatch, 10);
  }
}

function formatTime(milliseconds) {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const millis = Math.floor((milliseconds % 1000) / 10);

  return `${pad2(minutes)}:${pad2(seconds)}:${pad2(millis)}`;
}

function pad2(number) {
  return (number < 10 ? '0' : '') + number;
}

// Initial state
resetStopwatch();