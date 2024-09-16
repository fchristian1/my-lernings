import express from "express";
import cors from "cors";
import { config } from "dotenv";
import { todosRouter } from "./todos/todos.router";

config();

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(cors());

app.use("/todos", todosRouter);

app.get("/", (req, res) => {
    res.json({ message: "Hello World" });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
