let EndTime = "4 augest  2024 10:00:00 PM";

let timerPara = document.getElementById("endTime").innerText = EndTime;
let inputs  = document.querySelectorAll("input");

const fun = () => {
   let endDate = new Date(EndTime);
   let nowTime = new Date()
   let diff = endDate-nowTime;

   inputs[0].value = Math.floor((diff /( 24*60*60*1000)));
   inputs[1].value = Math.floor((diff% (24*60*60*1000))/(1000*60*60));
   inputs[2].value = Math.floor(diff%(1000*60*60)/(1000*60));
   inputs[3].value = Math.floor(diff%(1000*60)/(1000));
}
setInterval(() => {
    fun()
}, 1000)
