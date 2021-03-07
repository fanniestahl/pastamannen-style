const jumbotronImgs = document.querySelector(".jumbotron-imgs");

const btnRight = document.querySelector("#jumbotron-right");
const btnLeft = document.querySelector("#jumbotron-left");

let current = 0;
let jumbotronLength = 0;


function setUpJumbotron (){
    let imgs = document.querySelectorAll(".jumbotron-imgs img");
    jumbotronLength = imgs.length;
}

if(btnLeft){
    btnLeft.addEventListener('click', ()=> slide(-1));
}

if(btnRight){
    btnRight.addEventListener('click', ()=> slide(1));
}


function slide(step){
    //Går Höger
    current = (current + step) % jumbotronLength;

    //Går Vänster
    if(current < 0){
        current = jumbotronLength - 1;
    }

    console.log(current);

    jumbotronImgs.style.transform = `translateX(${-100 * current}%)`;
}

setUpJumbotron();
