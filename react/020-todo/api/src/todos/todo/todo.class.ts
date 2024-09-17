import { ITodo } from "./todo.type";

export class Todo implements ITodo {
    id: string;
    title: string;
    completed: boolean;
    constructor(title: string) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.completed = false;
    }
}
