import { Router } from "express";
import { createTodoController, deleteTodoController, readTodoByIdController, readTodosController, updateTodoController } from "./todos.controller";

const router = Router();

export { router as todosRouter };

router.get("/", readTodosController);
router.get("/:id", readTodoByIdController);
router.post("/", createTodoController);
router.put("/", updateTodoController);
router.delete("/", deleteTodoController);
