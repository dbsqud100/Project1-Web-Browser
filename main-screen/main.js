const clockContainer = document.querySelector(".clock_div_cl");
const clockTitle = clockContainer.querySelector(".clock_h1_cl");

function getTime() {
    const date = new Date();
    const houre = date.getHours();
    const minutes = date.getMinutes();
    const second = date.getSeconds();
    clockTitle.innerText = `${houre<10 ? `0${houre}`: houre} : ${minutes<10 ? `0${minutes}`: minutes} : ${second < 10 ? `0${second}` : second}`;
}

function init() {
    getTime();
    setInterval(getTime, 1000);
}

init();