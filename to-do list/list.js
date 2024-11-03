// Getting the list container and input box elements by their IDs
let listcontainer = document.getElementById('list-container');
let inputbox = document.getElementById('input-box');

// Function to add a task to the list
function addTask() {
    if (inputbox.value === '') {
        alert('Add your task');
    } else {
        // Corrected tag name from 'il' to 'li'
        let task = document.createElement('li');
        task.textContent = inputbox.value;
        listcontainer.appendChild(task);

        // Creating a span element for the delete button
        let span = document.createElement('span');
        span.textContent = '\u00d7'; // Unicode for '×'
        span.className = 'close'; // Optional: add a class for styling
        task.appendChild(span);
    }
    inputbox.value = '';
    saveData();
}

// Event listener for marking tasks as checked or removing them
listcontainer.addEventListener('click', (el) => {
    if (el.target.tagName === 'LI') {
        el.target.classList.toggle('checked');
        saveData();
    } else if (el.target.tagName === 'SPAN') { // Fixed condition to check for 'SPAN' tag
        el.target.parentElement.remove();
        saveData();
    }
});

// Function to save tasks to local storage
function saveData() {
    localStorage.setItem("tasks", listcontainer.innerHTML);
}

// Function to load saved tasks from local storage
function showData() {
    listcontainer.innerHTML = localStorage.getItem('tasks') || '';
}

// Load tasks when the page is opened
showData();
