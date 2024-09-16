import { Request, Response } from "express";
import { createTodoData, deleteTodoData, readTodoByIdData, readTodosData, updateTodoData } from "./todos.data";

// crud

export async function createTodoController(req: Request, res: Response) {
    let { title } = req.body;
    const todo = await createTodoData(title);
    res.json(todo);
}
export async function readTodosController(req: Request, res: Response) {
    let todos = await readTodosData();
    res.json(todos);
}
export async function readTodoByIdController(req: Request, res: Response) {
    const id = req.params.id;
    let todo = await readTodoByIdData(id);
    res.json(todo);
}
export async function updateTodoController(req: Request, res: Response) {
    const { todo } = req.body;
    let status = await updateTodoData(todo);
    res.json(status ? todo : { status });
}
export async function deleteTodoController(req: Request, res: Response) {
    const { todo } = req.body;
    let status = await deleteTodoData(todo);
    res.json(status ? todo : { status });
}
