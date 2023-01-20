const clockTime = document.querySelector(".clock .time");
const clockDate = document.querySelector(".clock .date");
/*
function hello() {
    console.log("tiktok");
}
setInterval(hello, 1000);
setTimeout(hello, 1000);
*/
function monthGen(i) {
    if (i === 0) {
        return "JAN";
    }
    if (i === 1) {
        return "FEB";
    }
    if (i === 2) {
        return "MAR";
    }
    if (i === 3) {
        return "APR";
    }
    if (i === 4) {
        return "MAY";
    }
    if (i === 5) {
        return "JUN";
    }
    if (i === 6) {
        return "JUL";
    }
    if (i === 7) {
        return "AUG";
    }
    if (i === 8) {
        return "SEP";
    }
    if (i === 9) {
        return "OCT";
    }
    if (i === 10) {
        return "NOV";
    }
    if (i === 11) {
        return "DEC";
    } 
}

function showTime() {
    const time = new Date();
    const hour = String(time.getHours()).padStart(2, "0");
    const minute = String(time.getMinutes()).padStart(2, "0");
    const monthCode = time.getMonth();
    const month = monthGen(monthCode);
    const second = String(time.getSeconds()).padStart(2, "0");
    const date = String(time.getDate());
    clockTime.innerText = `${hour}:${minute}:${second}`;
    clockDate.innerText = `${month} ${date}`;
}

showTime();
setInterval(showTime, 1000);