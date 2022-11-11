/* Buttons group */
const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const restartBtn = document.querySelector('.restart');
/* Display */
const hours = document.querySelector('.hour');
const mins = document.querySelector('.mins');
const secs = document.querySelector('.secs');

function updateDisplay() {
    hours.innerText = `${add0(currentMin)}${currentMin}`;
    mins.innerText = `${add0(currentSec)}${currentSec}`;
    secs.innerText = `${add0(currentMiliSec)}${currentMiliSec}`;
    function add0(x) {
        return x / 10 >= 1 ? "" : "0";
    }
}

let startTimerId = null;

let currentMin = 0;
let currentSec = 0;
let currentMiliSec = 8;

function start() {
    clearInterval(startTimerId);
    console.log('start!')
    startTimerId = setInterval(() => {
        if (currentSec === 59 && currentMiliSec === 99) {
            ++currentMin;
            currentSec = 0;
            currentMiliSec = 0
        } else if (currentMiliSec === 99) {
            ++currentSec;
            currentMiliSec = 0;
        } else {
            ++currentMiliSec;
        }
        // Stop in case time goes over 60 mins
        if (currentMin === 60) stop();
        updateDisplay();
    }, 10);
}

function stop() {
    console.log('stop!');
    clearInterval(startTimerId);
}

function restart() {
    console.log('restart!');
    clearInterval(startTimerId);
    currentMin = 0;
    currentSec = 0;
    currentMiliSec = 0;
    updateDisplay();
}


startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);
restartBtn.addEventListener('click', restart)