let count = 0;

const cnt_text = document.getElementById("cnt-text");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn){//In JavaScript, forEach is an array method that executes a provided function once for each array element. 
    btn.addEventListener("click",function (e){
        if(e.currentTarget.classList.contains("decrease")){
            count--;
        }
        else if(e.currentTarget.classList.contains("reset")){
            count = 0;
        }
        else{
            count++;
        }

        if(count<0){
            cnt_text.style.color = "red";
        }
        if(count>0){
            cnt_text.style.color = "green";
        }
        if(count==0){
            cnt_text.style.color= "black";
        }

        cnt_text.textContent = count;
    })
});

/*
get that text and get the buttons 

and then on that buttons we add the eventlistner...

for each element of the array we want to apply the eventlistner.....
and this for each takes a callback function which will be executed on each of the array element.
so we take one one btn and see what is the currenttarget button and based on that we apply the logic to inc, dec or reset the count
and based on value of that count +ve,-ve,0 we change the color of the button.

*/