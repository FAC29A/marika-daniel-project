// ================= DOM ELEMENTS =================
const addButton = document.getElementById('addTask');
const taskInput = document.getElementById('taskInput');
const notStartedContainer = document.getElementById('not-started-container')
const inProgressContainer = document.getElementById('in-progress-container')
const completeContainer = document.getElementById('complete-container')


// ================= DATA STORAGE =================
const todoList = [];

// ================= EVENT LISTENERS =================
// Event listener for the 'Add' button click event
    addButton.addEventListener('click', () => {
        if(taskInput.value.length > 0){
            addTask();
        }
        upDateDom()
    }); 

// ================= TASK MANIPULATION =================
// Function to add a new task to the todoList array
function addTask() {
    const newTask = new Object()
    newTask.title = taskInput.value;
    newTask.state = "not-started";
    todoList.push(newTask);
    taskInput.value = "";
}

// ================= DOM UPDATES =================
function upDateDom() {
    notStartedContainer.innerHTML = '';  // Clear it before appending new tasks

    // Filter the todoList to find tasks with the 'not-started' state
    const notStartedTasks = todoList.filter(item => item.state === "not-started");
    

    // Iterate over the filtered tasks and append them to the DOM
    notStartedTasks.forEach(item => {
        const todoTile = document.createElement("div");
        todoTile.innerHTML = item.title;
        notStartedContainer.appendChild(todoTile); // Append the new task div to the notStartedContainer
    });
}

