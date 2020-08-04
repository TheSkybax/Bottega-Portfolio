const todos = document.querySelectorAll('.todoItem');
const completedTodos = document.querySelector('.completed');
const completedTodoWrapper = document.querySelector('.completedTodoWrapper');

todos.forEach(todo => todo.addEventListener('click', (event) => {
    let completedTodo = document.createElement('li');
    let todoContent = document.createTextNode(todo.textContent);
    completedTodo.appendChild(todoContent);
    completedTodoWrapper.insertBefore(completedTodo, completedTodos);
    todo.remove();
}));