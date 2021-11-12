const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secsEl = document.getElementById('secs');
const yearsEl = document.getElementById('years');
const monthsEl = document.getElementById('months');

const love='17 july 2020';

const mon = [31,30,31,30,31,31,28,31,30,31,30,31];
const daypass = [];
function day(days) {
    let i = 7;
    while(days>mon[i]){
        days = days - mon[i];
        if(i===11){
            i=0
        }
        else{
            i++;
        }
    }
    return days;
}
function mons(days){
    let i = 0;
    while(days>mon[i]){
        days = days - mon[i];
        i++;
    }
    return i;
}
function count() {
    const loveDate = new Date(love);
    const currentDate = new Date();

    const totalSecs = (currentDate-loveDate) / 1000;

    const years = Math.floor(totalSecs / 31556926);
    let days = Math.floor(totalSecs / 3600 / 24);
    const hours = Math.floor(totalSecs / 3600) % 24;
    const mins = Math.floor(totalSecs / 60) % 60;
    const secs = Math.floor(totalSecs) % 60;
    const months = mons(days - 14 - years * 365);
    document.getElementById('allday').innerHTML = days;
    days=day(parseInt(days));
    yearsEl.innerHTML = formatTime(years);
    monthsEl.innerHTML = formatTime(months);
    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secsEl.innerHTML = formatTime(secs);
    
}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}


count();

setInterval(count,1000);