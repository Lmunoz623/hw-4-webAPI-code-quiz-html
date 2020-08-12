// 
var timer = document.getElementById("timer");


// Timer
var secondsLeft = 60;

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent = secondsLeft + " seconds";

        if (secondsLeft === 0) {
        clearInterval(timerInterval);
        }

    }, 1000);
}


setTime();