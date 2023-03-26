const startStopBtn = document.querySelector("#startStopBtn");
const resetBtn = document.querySelector("#resetBtn");

// varibles for time values

let seconds = 0;
let minutes = 0;
let hours = 0;

// varibles for windows zero

let leadingSeconds = 0;
let leadingMinutus = 0;
let leadingHours = 0;

// varibles for set interval and timerstatus
let timeInterval = null;
let timerstatus = "stopped";

// stoop watch function

function stopWatch() {
    seconds++;
    if (seconds / 60 === 1) {
        seconds = 0;
        minutes++;
        if (minutes / 60 === 1) {
            minutes = 0;
            hours++;
        }
    }

    if (seconds < 10) {
        leadingSeconds = "0" + seconds;
    } else {
        leadingSeconds = seconds;
    }

    if (minutes < 10) {
        leadingMinutus = "0" + minutes;
    } else {
        leadingMinutus = minutes;
    }

    if (hours < 10) {
        leadingHours = "0" + hours;
    } else {
        leadingHours = hours;
    }

   document.getElementById('timer').innerText = leadingHours + ":" + leadingMinutus + ":" + leadingSeconds;

}


startStopBtn.addEventListener('click', function () {

    if(timerstatus==="stopped"){
        timeInterval = window.setInterval(stopWatch, 1000);
        document.getElementById("startStopBtn").innerHTML = `<i class="fa-solid fa-pause" id="pause"></i>`;
        timerstatus="started"
    }else{
        window.clearInterval(timeInterval);
        document.getElementById("startStopBtn").innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
        timerstatus="stopped";
    }

});

resetBtn.addEventListener('click', function () {
    window.clearInterval(timeInterval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById('timer').innerText='00:00:00';
    document.getElementById("startStopBtn").innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;

});

