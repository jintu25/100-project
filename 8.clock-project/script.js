function updateDate() {
    const date = new Date()
    const clock = document.getElementById("clock")
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()

    hours = hours < 10 ? "0" + hours : hours
    minutes = minutes < 10 ? "0" + minutes : minutes
    seconds = seconds < 10 ? "0" + seconds : seconds
    console.log(date)
    clock.textContent = `${hours} : ${minutes} : ${seconds}`
}

setInterval(updateDate, 1000)
updateDate()