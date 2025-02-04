const enter = document.getElementById("enterbtn");
const textInput = document.getElementById("myInput");
const taskList = document.createElement("ul"); // Create task list
document.body.appendChild(taskList); // Append to body

// Event listener for button click
enter.addEventListener("click", addTask);

// Event listener for pressing "Enter" key
textInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});

function addTask() {
    let taskText = textInput.value.trim(); // Get input value and remove spaces

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create list item
    const li = document.createElement("li");
    li.textContent = taskText;

    // Create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌"; // Small 'X' as delete icon
    deleteBtn.style.marginLeft = "10px"; // Add spacing

    // Attach event listener to delete the task
    deleteBtn.addEventListener("click", () => {
        taskList.removeChild(li);
    });

    // Append delete button to list item
    li.appendChild(deleteBtn);

    // Append task to list
    taskList.appendChild(li);

    textInput.value = ""; // Clear input field
}
