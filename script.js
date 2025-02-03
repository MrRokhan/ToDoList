const enter = document.getElementById("enterbtn");
const textInput = document.getElementById("myInput"); // Select the input field

// code for when the text is empty "alert comes up"
enter.addEventListener('click', () => { 
    if (textInput.value.trim() === "") { 
        alert('Please enter text!');
    } else {
        console.log("Task Added:", textInput.value);
        textInput.value = ""; 
    }
});
