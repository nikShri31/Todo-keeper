const store = {
    todos: [
        {
            id: "1",
            title: "Complete Task A",
            completed: false,
        },
        {
            id: "2",
            title: "Read Book",
            completed: true,
        },
    ],
};

const storeHandler = {
    //Get Trap
    get: function (target, prop) {
        console.log(`Getting property '${prop}'`);
        return target[prop];
    },
    // Set Trap
    set: function (target, prop, value) {
        console.log(`Setting property '${prop}' to '${value}'`);
        target[prop] = value;
        if (prop == "todos") {
            window.dispatchEvent(new Event("todosChange"))
        }
        localStorage.setItem("store", JSON.stringify(store));
        return true;
    },
}


//let proxy = new Proxy(target, handler);
const storeProxy = new Proxy(store, storeHandler);

// Add new TODO :-
function addTodo(newTodo) {
    storeProxy.todos = [...storeProxy.todos, newTodo];
}
// Delete Todo :-
function deleteTodo(id) {
    storeProxy.todos = storeProxy.todos.filter((todo) => todo.id !== id);
}

// Toggle Completed 
function toggleComplete(id, completed) {
    storeProxy.todos = storeProxy.todos.map((todo) => {
        if (todo.id === id) {
            return { ...todo, completed: completed };
        }
        else {
            return todo;
        }
    })
}

export { addTodo, deleteTodo, toggleComplete };
export default store;





