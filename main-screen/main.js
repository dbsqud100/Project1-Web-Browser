const clockContainer = document.querySelector(".clock_div_cl");
const clockTitle = clockContainer.querySelector(".clock_h1_cl");
const body = document.querySelector("body");
const greeting = document.querySelector(".greeting_cl");
const greetingWord = greeting.querySelector(".greetingWord_cl");
const menuOpen = document.getElementById("manu_open_btn_id");
const hideMenu = document.getElementById("manu_id");

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

function getRandomNumber(){
    const number = Math.floor(Math.random()*6);
    return number;
}

const wordText = [`Happy New Year`,`Have a good time`,`Welcom My Browser`];
function writeGreeting(){
    for(let i in wordText){
        //클로저:내부함수가 외부함수에 접근할 수 있게 하는 것 
        (function(ii){
            setTimeout(function(){
                greetingWord.innerText = `${wordText[i]}`;
            }, 5000*ii); 
            greetingWord.classList.add("greetingword");
        })(i);
    }
}

function open_menu(){
    menuOpen.style[`display`] = "none";
    hideMenu.style[`transform`] = "translate(0px, 0px)";
}

function closeMenu(){
    menuOpen.style[`display`] = "block";
    hideMenu.removeAttribute("style");
}

function init(){
    //clock
    getTime();
    setInterval(getTime, 1000); 
    //background
    const randomBg = getRandomNumber();
    paintBackground(randomBg);
    //Greetin
    writeGreeting();
    setInterval(writeGreeting, 5000*wordText.length);
}

init();