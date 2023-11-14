// ================= DOM ELEMENTS =================
const addButton = document.getElementById('addTask');
const taskInput = document.getElementById('taskInput');
const notStartedContainer = document.getElementById('not-started-container')
const inProgressContainer = document.getElementById('in-progress-container')
const completeContainer = document.getElementById('complete-container')


// ================= DATA STORAGE =================
let todoList = [];

// ================= EVENT LISTENERS =================
// Event listener for the 'Add' button click event
addButton.addEventListener('click', () => {
    if(taskInput.value.length > 0 ){
        addTask()
    }
    notStartedContainer.innerHTML = '';
    inProgressContainer.innerHTML = '';
    completeContainer.innerHTML = '';
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

    // Filter the todoList to find tasks with the 'not-started' state
      
    todoList.filter(item => item.state == "not-started").forEach(item => {
        const template = document.getElementById('todo-template');
        const todoTemplate = template.content.cloneNode(true);
        const templateTitle = todoTemplate.querySelector(".task-text #text-field");
        const option1 = todoTemplate.querySelector('.task-tile #start');
        const option2 = todoTemplate.querySelector('.task-tile #in-prog');
        const option3 = todoTemplate.querySelector('.task-tile #done');
        const option4 = todoTemplate.querySelector('.task-tile #delete');
        const svg1 = todoTemplate.querySelector('.task-tile #svg');
        templateTitle.textContent = item.title;
        notStartedContainer.appendChild(todoTemplate)

        testing1(option1, option2, option3, option4, svg1)
    })


    // Filter the todoList to find tasks with the 'in-progress' state


    todoList.filter(item => item.state == "in-progress").forEach(item => {
        const template = document.getElementById('todo-template');
        const todoTemplate = template.content.cloneNode(true);
        const templateTitle = todoTemplate.querySelector(".task-text #text-field");
        const option1 = todoTemplate.querySelector('.task-tile #start');
        const option2 = todoTemplate.querySelector('.task-tile #in-prog');
        const option3 = todoTemplate.querySelector('.task-tile #done');
        const option4 = todoTemplate.querySelector('.task-tile #delete');
        const svg1 = todoTemplate.querySelector('.task-tile #svg');
        templateTitle.textContent = item.title;
        inProgressContainer.appendChild(todoTemplate)
        
        testing1(option1, option2, option3, option4, svg1)
        
    })
    
    // Filter the todoList to find tasks with the 'completed' state

    todoList.filter(item => item.state == "completed").forEach(item => {
        const template = document.getElementById('todo-template');
        const todoTemplate = template.content.cloneNode(true);
        const templateTitle = todoTemplate.querySelector(".task-text #text-field");
        const option1 = todoTemplate.querySelector('.task-tile #start');
        const option2 = todoTemplate.querySelector('.task-tile #in-prog');
        const option3 = todoTemplate.querySelector('.task-tile #done');
        const option4 = todoTemplate.querySelector('.task-tile #delete');
        const svg1 = todoTemplate.querySelector('.task-tile #svg');
        templateTitle.textContent = item.title;
        completeContainer.appendChild(todoTemplate)
        
        testing1(option1, option2, option3, option4, svg1)
    })
    
}


function testing1(tar1, tar2, tar3, tar4, tar5) {
    let checker = false
    tar5.addEventListener('click', (e) => {
        checker = !checker
        if(checker == false) {
            const dropMenu = e.target.closest('.task-tile').querySelector('#drop-menu');
            dropMenu.style.visibility = 'visible'
        }else{
            const dropMenu = e.target.closest('.task-tile').querySelector('#drop-menu');
            dropMenu.style.visibility = 'hidden'
        }
    })

    // Target for reseting a task

    tar1.addEventListener("click", (e) => {
        const textSpan = e.target.closest('.task-tile').querySelector('#text-field');
        
        console.log(textSpan.textContent);
    
        const clickIndex = todoList.findIndex(item => item.title === textSpan.textContent);
        todoList[clickIndex]["state"] = "not-started"

        notStartedContainer.innerHTML = '';
        inProgressContainer.innerHTML = '';
        completeContainer.innerHTML = '';
        upDateDom()
    });

    // Target for 'in-progressing' a task

    tar2.addEventListener("click", (e) => {
        const textSpan = e.target.closest('.task-tile').querySelector('#text-field');
        
        console.log(textSpan.textContent);
    
        const clickIndex = todoList.findIndex(item => item.title === textSpan.textContent);
        todoList[clickIndex]["state"] = "in-progress"

        notStartedContainer.innerHTML = '';
        inProgressContainer.innerHTML = '';
        completeContainer.innerHTML = '';
        upDateDom()
    });

    // Target for 'completing' a task

    tar3.addEventListener("click", (e) => {
        const textSpan = e.target.closest('.task-tile').querySelector('#text-field');
        
        console.log(textSpan.textContent);
    
        const clickIndex = todoList.findIndex(item => item.title === textSpan.textContent);
        todoList[clickIndex]["state"] = "completed"

        notStartedContainer.innerHTML = '';
        inProgressContainer.innerHTML = '';
        completeContainer.innerHTML = '';
        upDateDom()
    });

    // Target for deleting a task

    tar4.addEventListener("click", (e) => {
        const textSpan = e.target.closest('.task-tile').querySelector('#text-field');
        
        console.log(textSpan.textContent);
    
        const clickIndex = todoList.findIndex(item => item.title === textSpan.textContent);
        todoList.splice(clickIndex,1)

        notStartedContainer.innerHTML = '';
        inProgressContainer.innerHTML = '';
        completeContainer.innerHTML = '';
        upDateDom()
    });
}
