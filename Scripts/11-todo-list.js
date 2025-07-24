const todoList = [{
  name: 'make dinner',
  dueDate: '2026-1-20'
},{
  name: 'wash dishes',
  dueDate: '2025-12-10'
}];

renderTodoList();

function renderTodoList () {
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {     // Generating the HTML with js...
    const todoObject = todoList[i];
    /*
    const name = todoObject.name;
    const dueDate = todoObject.dueDate;
    --below is the shortcut for this code--
    */
    const { name, dueDate } = todoObject;
    
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick="
        todoList.splice(${i}, 1);
        renderTodoList();
      " class="delete-todo-button">Delete</button>
    `;

    todoListHTML += html;
  }

  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input')
  const dueDate = dateInputElement.value;

  todoList.push({
    // name: name,
    // dueDate: dueDate
    // --shortcut for the code is below called (short-hand property syntax)--
    name,
    dueDate
  });

  inputElement.value = '';

  renderTodoList();
}

