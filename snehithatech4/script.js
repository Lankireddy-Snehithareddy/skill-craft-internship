document.getElementById('task-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const taskInput = document.getElementById('task-input');
    const dateInput = document.getElementById('task-date');
    const timeInput = document.getElementById('task-time');
    const taskList = document.getElementById('task-list');
  
    const taskText = taskInput.value;
    const taskDate = dateInput.value;
    const taskTime = timeInput.value;
  
    const li = document.createElement('li');
    li.className = 'task-item';
  
    const taskContent = document.createElement('span');
    taskContent.innerHTML = `${taskText} - ${taskDate} ${taskTime}`;
  
    const actions = document.createElement('div');
    actions.className = 'task-actions';
  
    const completeBtn = document.createElement('button');
    completeBtn.textContent = '✔️';
    completeBtn.onclick = () => li.classList.toggle('completed');
  
    const editBtn = document.createElement('button');
    editBtn.textContent = '✏️';
    editBtn.onclick = () => {
      const newTask = prompt('Edit task:', taskText);
      if (newTask) {
        taskInput.value = newTask;
        taskContent.innerHTML = `${newTask} - ${taskDate} ${taskTime}`;
      }
    };
  
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '🗑️';
    deleteBtn.onclick = () => taskList.removeChild(li);
  
    actions.appendChild(completeBtn);
    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);
  
    li.appendChild(taskContent);
    li.appendChild(actions);
    taskList.appendChild(li);
  
    // Clear inputs
    taskInput.value = '';
    dateInput.value = '';
    timeInput.value = '';
  });
  