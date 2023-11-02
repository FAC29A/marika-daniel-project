// ================= EVENT LISTENERS =================
document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('addTask');
    const taskInput = document.getElementById('taskInput');
    const todoList = document.querySelector('.column.todo'); // The 'Todo' column container

    // Event listener for the 'Add' button for the click event
    addButton.addEventListener('click', () => {
        const taskContent = taskInput.value.trim();

        if (taskContent) {
            const task = document.createElement('div');
            task.textContent = taskContent;
            todoList.appendChild(task);
            taskInput.value = '';
            taskInput.focus(); // Set focus back to the input field
        } else {
            shakeInputField(); // Call utility function to shake the input field
        }
    });

    // Event listener to remove shake class if the user starts typing again
    taskInput.addEventListener('input', () => {
        taskInput.classList.remove('shake');
        addButton.disabled = !taskInput.value.trim(); // Update the button state based on input
    });
});

// ================= UTILITY FUNCTIONS =================
// Function to add shake class 
function shakeInputField() {
    taskInput.classList.add('shake');
    taskInput.focus(); // Set focus to the input field
    setTimeout(() => taskInput.classList.remove('shake'), 500); // Remove the shake class after the animation
}

