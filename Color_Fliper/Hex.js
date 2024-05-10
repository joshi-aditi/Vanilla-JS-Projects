const colors = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

const colorbtn = document.querySelector(".color-btn");
const colortext = document.getElementById("color-text");

colorbtn.addEventListener("click",function(){
    let color = "#";
    for (let i=0;i<6;i++){
        const randomNo = getRandomNumber();
        color+=colors[randomNo];
    }
    document.body.style.backgroundColor = color;
    colortext.textContent = color;
})

function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}