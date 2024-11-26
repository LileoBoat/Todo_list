const taskInput = document.getElementById("task-input");
const addTaskButton = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");
const clearCompletedButton = document.getElementById("clear-completed");

// Add Task
addTaskButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const li = document.createElement("li");
        li.textContent = taskText;

        // Mark as completed
        li.addEventListener("click", () => {
            li.classList.toggle("completed");
        });

        taskList.appendChild(li);
        taskInput.value = ""; // Clear the input field
    }
});

// Clear Completed Tasks
clearCompletedButton.addEventListener("click", () => {
    const completedTasks = taskList.querySelectorAll(".completed");
    completedTasks.forEach(task => task.remove());
});

// Add Task on Enter Key Press
taskInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addTaskButton.click();
    }
});