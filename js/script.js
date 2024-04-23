let hour = document.getElementById("hour")
let minute = document.getElementById("minute")
let seconds = document.getElementById("seconds")

setInterval(() => {
    let time = new Date()
    let hourValue = time.getHours()
    let minuteValue = time.getMinutes()
    let secondValue = time.getSeconds()

    if(hourValue < 10) {
        hour.innerHTML = `0${hourValue}`
    } else {
        hour.innerHTML = `${hourValue}`
    }

    if(minuteValue < 10) {
        minute.innerHTML = `0${minuteValue}`
    } else {
        minute.innerHTML = `${minuteValue}`
    }

    if(secondValue < 10) {
        seconds.innerHTML = `0${secondValue}`
    } else {
        seconds.innerHTML = `${secondValue}`
    }

}, 1000)