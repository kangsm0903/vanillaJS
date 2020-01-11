const clockContainer = document.querySelector(".js-clockContainer");
const clock = clockContainer.querySelector(".js-clock");

function loadDate(){
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    clock.innerHTML = `${
        hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}` : minutes}:${
        seconds < 10 ? `0${seconds}` : seconds}`;
}

function init(){
    loadDate();
    setInterval(loadDate, 1000);
}

init();