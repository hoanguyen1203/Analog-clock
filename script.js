var hour = document.getElementById("hour");
var minute = document.getElementById("minute");
var second = document.getElementById("second");

// Get current time
function currentTime() {
    var date = new Date();
    var currentHour = date.getHours();
    var currentMinute = date.getMinutes();
    var currentSecond = date.getSeconds();

    hour.style.transform = "rotate(" + ((currentMinute / 60 + currentHour) * 30) + "deg)";
    minute.style.transform = "rotate(" + ((currentSecond / 60 + currentMinute) * 6) + "deg)";
    second.style.transform = "rotate(" + (currentSecond * 6) + "deg)";
}

setInterval(currentTime, 1000);