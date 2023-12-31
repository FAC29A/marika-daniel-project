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

    if (taskInput.value.trim().length > 0) {
        const inputValue = taskInput.value.trim().toLowerCase();

        if (todoList.some((task) => task.title.toLowerCase() === inputValue)) {
            alert("You already have this task");
        } else {
            addTask();
        }

        notStartedContainer.innerHTML = '';
        inProgressContainer.innerHTML = '';
        completeContainer.innerHTML = '';
        upDateDom();
    }
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
        const iconCon = todoTemplate.querySelector('.task-tile #icon-container');
        templateTitle.textContent = item.title;
        notStartedContainer.appendChild(todoTemplate)

        menuOptions(option1, option2, option3, option4, iconCon)

        
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
        const iconCon = todoTemplate.querySelector('.task-tile #icon-container');
        templateTitle.textContent = item.title;
        inProgressContainer.appendChild(todoTemplate)
        
        menuOptions(option1, option2, option3, option4, iconCon)
        
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
        const iconCon = todoTemplate.querySelector('.task-tile #icon-container');
        templateTitle.textContent = item.title;
        completeContainer.appendChild(todoTemplate)
        
        menuOptions(option1, option2, option3, option4, iconCon)
    })
    
    // Find and append the length of the different sections

    document.getElementById("not-started-count").textContent = todoList.filter(item => item.state == "not-started").length
    document.getElementById("in-progress-count").textContent = todoList.filter(item => item.state == "in-progress").length
    document.getElementById("complete-count").textContent = todoList.filter(item => item.state == "completed").length

    saveTodoList()
}


function menuOptions(target1, target2, target3, target4, target5) {
    // Target for opening the drop down menu

    let checker = false
    target5.addEventListener('click', (e) => {
        checker = !checker
        if(checker == true) {
            const dropMenu = e.target.closest('.task-tile').querySelector('#drop-menu');
            dropMenu.style.visibility = 'visible'
        }else{
            const dropMenu = e.target.closest('.task-tile').querySelector('#drop-menu');
            dropMenu.style.visibility = 'hidden'
        }
    })

    target5.addEventListener("keypress", (e) => {
        console.log("1");
        if (e.key === "Enter") {
            target5.click()
        }
    }); 

    // Target for reseting a task

    target1.addEventListener("click", (e) => {
        const textSpan = e.target.closest('.task-tile').querySelector('#text-field');
        
        console.log(textSpan.textContent);
    
        const clickIndex = todoList.findIndex(item => item.title === textSpan.textContent);
        todoList[clickIndex]["state"] = "not-started"

        notStartedContainer.innerHTML = '';
        inProgressContainer.innerHTML = '';
        completeContainer.innerHTML = '';
        upDateDom()
    });


    target1.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            target1.click()
        }
    }); 

    // Target for 'in-progressing' a task

    target2.addEventListener("click", (e) => {
        const textSpan = e.target.closest('.task-tile').querySelector('#text-field');
        
        console.log(textSpan.textContent);
    
        const clickIndex = todoList.findIndex(item => item.title === textSpan.textContent);
        todoList[clickIndex]["state"] = "in-progress"

        notStartedContainer.innerHTML = '';
        inProgressContainer.innerHTML = '';
        completeContainer.innerHTML = '';
        upDateDom()
    });
    
    target2.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            target2.click()
        }
    }); 

    // Target for 'completing' a task

    target3.addEventListener("click", (e) => {
        const textSpan = e.target.closest('.task-tile').querySelector('#text-field');
        
        console.log(textSpan.textContent);
    
        const clickIndex = todoList.findIndex(item => item.title === textSpan.textContent);
        todoList[clickIndex]["state"] = "completed"

        notStartedContainer.innerHTML = '';
        inProgressContainer.innerHTML = '';
        completeContainer.innerHTML = '';
        upDateDom()
    });

    target3.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            target3.click()
        }
    }); 

    // Target for deleting a task

    target4.addEventListener("click", (e) => {
        const textSpan = e.target.closest('.task-tile').querySelector('#text-field');
        
        console.log(textSpan.textContent);
    
        const clickIndex = todoList.findIndex(item => item.title === textSpan.textContent);
        todoList.splice(clickIndex,1)

        notStartedContainer.innerHTML = '';
        inProgressContainer.innerHTML = '';
        completeContainer.innerHTML = '';
        upDateDom()
    });

    target4.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            target4.click()
        }
    }); 
}


// Using Enter to submit task

taskInput.addEventListener("keypress", (e) => {
    if(e.key === "Enter"){
        addButton.click()
    }
})




// Saving todoList

function saveTodoList() {
    localStorage.clear('todoList')
    localStorage.setItem('todoList', JSON.stringify(todoList));
}


// Loading todoList to the page


function loadTodoList() {
    const savedTodoList = localStorage.getItem('todoList');
    if (savedTodoList) {
        todoList = JSON.parse(savedTodoList);
        upDateDom();
    }
}

loadTodoList()