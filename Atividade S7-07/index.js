const div = document.createElement("div");
div.id = "box";
const body = document.querySelector("body");

body.appendChild(div);

let boxTop = 200;
let boxLeft = 200;



body.addEventListener('keydown', (event) => {
    const keyName = event.key;
    console.log(event)
    
    if(keyName == "ArrowDown"){
        boxTop = boxTop + 10;
    }
    if(keyName == "ArrowUp"){
        boxTop = boxTop - 10;
    }
    
    if(keyName == "ArrowRight"){
        boxLeft = boxLeft + 10;
    }
    if(keyName == "ArrowLeft"){
        boxLeft = boxLeft -10;
    }
    document.getElementById("box").style.top  = boxTop + "px";
    document.getElementById("box").style.left = boxLeft + "px";
});

const figure = document.createElement("figure");
const img   = document.createElement("img");
figure.appendChild(img);
div.appendChild(figure);

img.src = "imagem para s7-07.png";
img.id  = "carro";
