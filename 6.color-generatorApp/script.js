function colorGenerate() {
    const letters = "0123456789abcdf";
    let colors = "#"
    for (i = 0; i < 6; i++) {
        let index = colors += letters[Math.floor(Math.random() * 16)]
        console.log(index)
    }
    return colors
}
document.getElementById("generateColor").addEventListener("click", () => {
    const randomColor = colorGenerate()
    const colorDisplay = document.getElementById("colorDisplay")
    const colorCode = document.getElementById("colorCode")

    colorDisplay.style.backgroundColor = randomColor;
    colorCode.innerText = randomColor
})
