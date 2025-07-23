document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
  
    // Load tasks from localStorage
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    renderTasks();
  
    // Add task event
    addTaskBtn.addEventListener('click', addTask);
  
    // Add task
    function addTask() {
      const taskText = taskInput.value.trim();
      if (taskText !== '') {
        tasks.push(taskText);
        updateLocalStorage();
        renderTasks();
        taskInput.value = '';
      }
    }
  
    // Remove task
    function removeTask(index) {
      tasks.splice(index, 1);
      updateLocalStorage();
      renderTasks();
    }
  
    // Update localStorage
    function updateLocalStorage() {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  
    // Render tasks
    function renderTasks() {
      taskList.innerHTML = '';
      tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
          <span>${task}</span>
          <button onclick="removeTask(${index})">Remove</button>
        `;
        taskList.appendChild(li);
      });
    }
  
    // Make removeTask accessible globally
    window.removeTask = removeTask;
  });
  