import store from './store.js';

function render() {
    const todoo = document.querySelector(".todos");
    const { todos } = store;
  
                                     // todos.map().join("");
    const todoElements = todos.map(
        (todo) =>
            `<li class = 'todo' data-id= ${todo.id}>
                    <span  class = 'todo-title ${todo.completed ? "completed" : ""}' >
                        ${todo.title}
                    </span>
                    <div class="toggle-delete">
                        <input
                          type="checkbox"
                          name="completed"
                          class="todo-checkbox"
                          ${todo.completed ? "checked" : ""}
                        />
                    
                        <button class = "delete-todo-button"> X <button/>
                    </div>
            </li>`
    ) .join("");
    todoo.innerHTML = todoElements;
}
export default render;