import render from "./render.js";
import store, { addTodo, deleteTodo, toggleComplete } from "./store.js";

window.addEventListener("todosChange", () => {
  render();
});

//  store from local storage 

const storeLocalStorage = JSON.parse(localStorage.getItem(store));
if (storeLocalStorage?.todos.length > 0) {
  store.todos = storeLocalStorage.todos;
  console.log(storeLocalStorage)
}
else {
  localStorage.setItem('store', JSON.stringify(store));
  render();
}

//form and addTodo
const form = document.querySelector('#form');
const todoTitleInput = document.querySelector('.todo-title-input');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const todoTitle = todoTitleInput.value;

  const newTodo = {
    id: crypto.randomUUID(),
    title: todoTitle,
    completed: false
  };
  addTodo(newTodo);
  todoTitle = " ";
});

const todos = document.querySelector(".todos");

// Delete TODO
todos.addEventListener('click', (e) => {
  const target = e.target;
  if (target.classList.contains("delete-todo-button")) {
    console.log('you clicked on cross Button');
    const id = target.closest('.todo').dataset.id;           /**Target k closest todo ki ID */
    deleteTodo(id);
  }
});

// Toggle Complete
todos.addEventListener('change', (e) => {
  const target = e.target;
  if (target.classList.contains("todo-checkbox")) {
    const id = target.closest('.todo').dataset.id;
    const completed = target.checked;
    toggleComplete(id, completed);
  }
});