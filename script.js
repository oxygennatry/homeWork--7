function saleTime(){
let endDate = new Date(2024,6,31);
let nowDate = new Date();
let finish = endDate - nowDate

let day = Math.floor(finish/(24*60*60*1000))
let hours = Math.floor((finish % (24*60*60*1000))/(60*60*1000))

let minuts = Math.floor((finish % (60*60*1000))/(60*1000))
let seconds = Math.floor((finish%(60*1000))/1000)

let timerValue = document.getElementsByClassName("timetitle")

timerValue[0].innerHTML = day
timerValue[1].innerHTML = hours
timerValue[2].innerHTML = minuts
timerValue[3].innerHTML = seconds


console.log(day,hours,minuts,seconds);
if (finish <= 0){
    timerValue[0].innerHTML = "00"
    timerValue[1].innerHTML = "00"
    timerValue[2].innerHTML = "00"
    timerValue[3].innerHTML = "00"
}
}
saleTime()

setInterval(()=>saleTime(),1000)

