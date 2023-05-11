
// access the html elements
let milliseconds = document.getElementById('ms');
let seconds= document.getElementById('second');
let minutes= document.getElementById('minute');
let hours=document.getElementById('hour');
// varaibles
let msVal=0;
let secondVal=0;
let minuteVal=0;
let hourVal=0;
let int = null;
// start function;
document.getElementById('startTimer').addEventListener('click', ()=>{
    if(int!==null){
        clearInterval(int);
    }
    int = setInterval(displayTimer,10);
});
//pouse function
document.getElementById('pauseTimer').addEventListener('click', ()=>{
    clearInterval(int);
});
// reset function
document.getElementById('resetTimer').addEventListener('click', ()=>{
    clearInterval(int);
    msVal=0;
    secondVal=0;
    minuteVal=0;
    hourVal=0;
    hours.innerHTML="00";
    minutes.innerHTML="00";
    seconds.innerHTML="00";
    milliseconds.innerHTML="00";
});
//display function;
function displayTimer(){
    msVal+=10;
    if(msVal == 1000){
        msVal = 0;
        secondVal++;
        if(secondVal == 60){
            secondVal = 0;
            minuteVal++;
            if(minuteVal == 60){
                minuteVal = 0;
                hourVal++;
            }
        }
    }

 let h = hourVal < 10 ? "0" + hourVal : hourVal;
 let m = minuteVal < 10 ? "0" + minuteVal : minuteVal;
 let s = secondVal < 10 ? "0" + secondVal : secondVal;
 let ms = msVal < 10 ? "00" + msVal : msVal < 100 ? "0" + msVal : msVal;


 hours.innerHTML=h;
 minutes.innerHTML=m;
 seconds.innerHTML=s;
 milliseconds.innerHTML=ms;
 
}