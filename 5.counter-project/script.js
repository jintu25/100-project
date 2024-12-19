const decrement = document.querySelector("#decrement-btn")
const increment = document.querySelector("#increment-btn")
const counterValue = document.querySelector("#counter-value")
const reset = document.querySelector("#reset")

let counter = 0
increment.addEventListener("click", () => {
    counter++;
    counterValue.innerHTML = counter
})
decrement.addEventListener("click", () => {
    counter--;
    counterValue.innerHTML = counter
})

reset.addEventListener("click", () => {
    counter = 0;
    counterValue.innerHTML = counter
})