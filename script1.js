const newTaskInput = document.getElementById('new-task');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

addBtn.addEventListener('click', function() {
  const newTask = newTaskInput.value.trim();
  if (newTask) {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <label for="${newTask}">
        <input type="checkbox" id="${newTask}">
        <span>${newTask}</span>
      </label>
      <button class="delete-btn">Delete</button>
    `;
    todoList.appendChild(listItem);
    newTaskInput.value = '';
  }
});

todoList.addEventListener('click', function(event) {
  const target = event.target;
  if (target.type === 'checkbox') {
    target.parentElement.parentElement.classList.toggle('completed');
  } else if (target.classList.contains('delete-btn')) {
    target.parentElement.remove();
  }
});