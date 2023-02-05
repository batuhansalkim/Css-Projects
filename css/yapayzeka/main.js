const todoList = [];

function addTodo(todoText) {
    const todo = {
        todoText,
        completed: false
    };
    todoList.push(todo);
    renderTodos();
}

function renderTodos() {
    let todoListHTML = '<ul>';
    todoList.forEach((todo, index) => {
        todoListHTML += `
      <li ${todo.completed ? 'style="text-decoration: line-through"' : ''}>
        ${todo.todoText}
        <button onclick="toggleCompleted(${index})">Toggle Completed</button>
        <button onclick="removeTodo(${index})">Remove</button>
      </li>
    `;
    });
    todoListHTML += '</ul>';
    document.querySelector('#todo-list').innerHTML = todoListHTML;
}

function toggleCompleted(index) {
    todoList[index].completed = !todoList[index].completed;
    renderTodos();
}

function removeTodo(index) {
    todoList.splice(index, 1);
    renderTodos();
}

document.querySelector('#add-todo').addEventListener('click', event => {
    event.preventDefault();
    const todoText = document.querySelector('#new-todo').value;
    addTodo(todoText);
    document.querySelector('#new-todo').value = '';
});

renderTodos();
