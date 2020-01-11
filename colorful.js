const title = document.querySelector(".main");

const CLICKED = 'clicked';

function colorChange(){
    const standard = title.classList.contains(CLICKED);
    if (standard === false){
        title.classList.add(CLICKED);
    } else {
        title.classList.remove(CLICKED);
    }
}

function init(){
    title.addEventListener("click", colorChange);
}

init();