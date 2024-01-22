function addTask() {
    const newTaskInput = document.getElementById('newTask');
    const taskList = document.getElementById('taskList');
    
    if (newTaskInput.value.trim() === '') {
      alert('Please enter a task.');
      return;
    }

    // Create a new task item
    const taskItem = document.createElement('li');
    const taskText = document.createTextNode(newTaskInput.value);
    const deleteButton = document.createElement('button');
    
    taskItem.appendChild(taskText);
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);

    // Reset input value
    newTaskInput.value = '';

    // Configure delete button
    deleteButton.innerHTML = 'Delete';
    deleteButton.onclick = function() {
      taskList.removeChild(taskItem);
    };

    // Toggle completed status on click
    taskItem.onclick = function() {
      taskItem.classList.toggle('completed');
    };

    // Animation on task addition
    taskItem.style.opacity = '0';
    taskItem.style.marginTop = '-20px';
    setTimeout(() => {
      taskItem.style.opacity = '1';
      taskItem.style.marginTop = '0';
    }, 10);
  }