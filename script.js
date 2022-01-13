const heleeBdy="15 Jan 2022";

const daysEl=document.getElementById('days');
const hoursEl=document.getElementById('hours');
const minsEl=document.getElementById('minutes');
const secondsEl=document.getElementById('seconds');
function countdown(){
    const currentDate=new Date();
    const heleeBdyDate=new Date(heleeBdy);
    const totalseconds=(heleeBdyDate-currentDate)/1000;
    const days=Math.floor(totalseconds/3600/24);

    const hours=Math.floor(totalseconds/3600)%24;
    const mins=Math.floor(totalseconds/60)%60;
    const seconds=Math.floor(totalseconds)%60;
    console.log(days,hours,mins,seconds);

daysEl.innerHTML=days;
console.log("ok");
hoursEl.innerHTML=hours;
console.log("ok1");
secondsEl.innerHTML=formatTime(seconds);
console.log("ok3");
minsEl.innerHTML=formatTime(mins);
console.log("ok2");

    console.log(days,hours,mins,seconds);
  //  const days=Math.floor(seconds/3600/24);

}

function formatTime(time){
    return time<10?`0${time}`:time;
}

countdown();

setInterval(countdown,1000);