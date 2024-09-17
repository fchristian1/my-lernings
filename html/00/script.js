let todos = [];
const renderTodos = () => {
    todosContainer.innerHTML = "";
    todos.forEach((todo, index) => {
        let todoElement = document.createElement("div");
        todoElement.innerHTML = `<li>
            <input id="${todo.id}" name="todo" type="checkbox" ${todo.done ? "checked" : ""} onchange="toggleDone('${todo.id}')">
            <span>${todo.text}</span>
            <button onclick="removeTodo('${todo.id}')">Löschen</button>
        </li>`;
        todosContainer.appendChild(todoElement);
    });
};

const addTodo = () => {
    let newTodo = {
        id: crypto.randomUUID(),
        text: newTodoInput.value,
        done: false,
        date: Date.now(),
    };
    todos.push(newTodo);
    renderTodos();
};

const removeTodo = (id) => {
    todos = todos.filter((todo) => todo.id !== id);
    renderTodos();
};

const toggleDone = (id) => {
    todos = todos.map((todo) => {
        if (todo.id === id) {
            todo.done = !todo.done;
        }
        return todo;
    });
    renderTodos();
};
renderTodos();
