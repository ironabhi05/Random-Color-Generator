let btn = document.querySelector("button");

btn.addEventListener("click", opeartion);
// btn.addEventListener("click", alertMsg);

function getRandomColor(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

    let color = `rgb(${red},${green},${blue})`;
    return color;
}

function opeartion(){
    let h3 = document.querySelector("h3");
    let h2 = document.querySelector("h2");
    let randomColor = getRandomColor();
    h2.innerText = randomColor;
    h3.innerText = "color updated";

    let div = document.querySelector("div");
    div.style.background = randomColor;
}

// function alertMsg(){
//     let h2 = document.querySelector("h2");
//     h2.innerText = "Color Updated!";
// }