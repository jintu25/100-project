
const taskInput = document.querySelector("#taskInput")
const addTaskBtn = document.querySelector("#addTaskBtn")
const taskList = document.querySelector("#taskList")

function addTask() {
    const inputValue = taskInput.value.trim()
    if (inputValue === ""){
        alert("please provide valid text")
        return
    }
    let li = document.createElement("li")
    li.innerHTML = `
        <span>${inputValue}</span>
        <button class="deleteBtn">Delete</button>
    `;
    li.querySelector("span").addEventListener("click", () => {
        li.querySelector("span").classList.toggle("complete")
        console.log("input value is: ", inputValue)
    })
    li.querySelector("button").addEventListener("click", () =>{
        li.remove()
    })

    taskList.appendChild(li)

    taskInput.value = ""
}

addTaskBtn.addEventListener("click", addTask)

taskInput.addEventListener('keydown',  (e) => {
    if (e.key === 'Enter') {
        addTask()
    }
});



























































// // Get DOM elements
// const taskInput = document.getElementById('taskInput');
// const addTaskBtn = document.getElementById('addTaskBtn');
// const taskList = document.getElementById('taskList');

// // Function to add a new task
// function addTask() {
//     const taskText = taskInput.value.trim();

//     if (taskText === '') {
//         alert('Please enter a task!');
//         return;
//     }

//     // Create a new list item
//     const li = document.createElement('li');
//     li.innerHTML = `
//     <span>${taskText}</span>
//     <button class="deleteBtn">Delete</button>
//   `;

//     // Add event listener to mark task as complete
//     li.querySelector('span').addEventListener('click', () => {
//         li.querySelector('span').classList.toggle('complete');
//     });

//     // Add event listener to delete the task
//     li.querySelector('.deleteBtn').addEventListener('click', () => {
//         li.remove();
//     });

//     // Append the task to the list
//     taskList.appendChild(li);

//     // Clear the input field
//     taskInput.value = '';
// }

// // Add event listener to the "Add Task" button
// addTaskBtn.addEventListener('click', addTask);

// // Add task when pressing Enter
// taskInput.addEventListener('keydown', (e) => {
//     if (e.key === 'Enter') {
//         addTask();
//     }
// });
