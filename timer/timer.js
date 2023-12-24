const hourElem = document.getElementById('hour');
const minuteElem = document.getElementById('min');
const secondElem = document.getElementById('sec');

function updateTime() {
    const xmasDate = new Date(2023, 12, 24, 20, 40);
    const d = new Date();
    d.setMinutes(d.getMinutes() + d.getTimezoneOffset()); // Setting to Greenwich time
    d.setMinutes(d.getMinutes() + 5.5 * 60); // Setting to Filipino time

    const timeLeft = xmasDate - d;
    // const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    
    // hourElem.textContent = (days * 24 + hours < 10 ? '0' : '') + (days * 24 + hours);
    hourElem.textContent = (hours < 10 ? '0' : '') + hours;
    minuteElem.textContent = (minutes < 10 ? '0' : '') + minutes;
    secondElem.textContent = (seconds < 10 ? '0' : '') + seconds;

    return timeLeft;
}

function mainLoop() {
    const timeLeft = updateTime();
    if (timeLeft < 0) {
        clearInterval(clockLoop);
        window.location.replace('something something');
    }
}

updateTime();
const clockLoop = setInterval(mainLoop, 1000);