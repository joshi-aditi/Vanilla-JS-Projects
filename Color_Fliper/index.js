const color = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.querySelector(".color-btn");
const text = document.getElementById("color-text");

btn.addEventListener("click",function (){
    const randomNo = getRandomNumber();
    document.body.style.backgroundColor = color[randomNo];
    text.textContent = (color[randomNo]);
})

function getRandomNumber(){
    return Math.floor(Math.random()*color.length);
}