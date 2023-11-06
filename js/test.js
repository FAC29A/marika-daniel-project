// ================= TESTS ================= 
// Resets the todoList to an empty array before each test
function beforeEachTest() {
    todoList.length = 0; // Clear the global todoList
}

// Test to check if the new task is added to the todoList array
test('should add a new task object to the todoList array', () => {
    beforeEachTest(); 
    taskInput.value = 'Test Task'; // Simulate user input
    addTask(); 
    const newTodoListLength = todoList.length; // Get the new length of todoList
  
    equal(newTodoListLength, 1, 'todoList should have one new task');
    
    // Test that the last item in the array is the task we just added
    const addedTask = todoList[0]; // It should be at index 0 because we reset the list
    equal(addedTask.title, 'Test Task', 'The last task in the array should have the title "Test Task"');
});

// Test to check if the new task object has the correct title property
test('should assign the correct title to the new task object', () => {
    beforeEachTest(); 
    const expectedTitle = 'Another Test Task';
    taskInput.value = expectedTitle; // Simulate user input
    addTask(); 
    
    // Test that the new task's title is the one entered in the input
    const addedTask = todoList[0]; 
    equal(addedTask.title, expectedTitle, `New task title should be "${expectedTitle}"`);
});

  