const body = document.querySelector("body");

function paintBackground(){
    const image = new Image();
    image.src = `image/1.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
}

function init(){
    //background 
    paintBackground();
}

init();