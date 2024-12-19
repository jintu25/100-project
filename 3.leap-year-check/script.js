
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0)
}

document.querySelector("#checkYear").addEventListener("click", () => {
    const year = parseInt(document.querySelector("#yearInput").value)
    const resultShow = document.querySelector("#result")

    if (isNaN(year)) {
        alert("please provide valid input")
        return
    }
    if (isLeapYear(year)) {
        resultShow.textContent = `${year} is a Leap Year`
    } else {
        resultShow.textContent = `${year} is not a Leap Year`
    }
})