async function addTodo(title) {
    return await postTodoToApi("http://localhost:3000/todos", { title });
}
async function getAllTodos() {
    return await getTodos("http://localhost:3000/todos");
}
async function updateTodo(todo) {
    return await putTodoToApi("http://localhost:3000/todos", { todo });
}
async function deleteTodo(todo) {
    return await deleteTodoToApi("http://localhost:3000/todos", { todo });
}
export { addTodo, getAllTodos, updateTodo, deleteTodo };

async function getTodos(url) {
    let res = await fetch(url);
    return await res.json();
}
async function postTodoToApi(url, data) {
    let res = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    return await res.json();
}
async function putTodoToApi(url, data) {
    let res = await fetch(url, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    return await res.json();
}
async function deleteTodoToApi(url, data) {
    let res = await fetch(url, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    return await res.json();
}
