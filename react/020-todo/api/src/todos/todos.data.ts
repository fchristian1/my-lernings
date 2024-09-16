import { Todo } from "./todo/todo.class";
import { Todos } from "./todos.type";

const todos: Todos = [];

export async function createTodoData(title: string): Promise<Todo> {
    const todo = new Todo(title);
    todos.push(todo);
    return todo;
}
export async function readTodosData(): Promise<Todos> {
    return todos;
}
export async function readTodoByIdData(id: string): Promise<Todo> {
    return todos.filter((todo) => todo.id === id)[0];
}
export async function updateTodoData(todo: Todo): Promise<boolean> {
    const index = todos.findIndex((t) => t.id === todo.id);
    todos[index] = todo;
    return index === -1 ? false : true;
}

export async function deleteTodoData(todo: Todo): Promise<boolean> {
    const index = todos.findIndex((t) => t.id === todo.id);
    index === -1 ? null : todos.splice(index, 1);
    return index === -1 ? false : true;
}
