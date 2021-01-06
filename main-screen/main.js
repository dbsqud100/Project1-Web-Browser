const clockContainer = document.querySelector(".clock_div_cl");
const clockTitle = clockContainer.querySelector(".clock_h1_cl");
const body = document.querySelector("body");

function getTime() {
    const date = new Date();
    const houre = date.getHours();
    const minutes = date.getMinutes();
    const second = date.getSeconds();
    clockTitle.innerText = `${houre<10 ? `0${houre}`: houre} : ${minutes<10 ? `0${minutes}`: minutes} : ${second < 10 ? `0${second}` : second}`;
}

function paintBackground(number){
    const image = new Image();
    image.src = `image/${number+1}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image)
}

function getRandom(){
    const number = Math.floor(Math.random()*6);
    return number;
}

function init(){
    //clock
    getTime();
    setInterval(getTime, 1000); 
    //background
    const random = getRandom();
    paintBackground(random);
}

init();