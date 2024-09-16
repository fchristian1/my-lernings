import { useEffect, useState } from "react";
import { addTodo, deleteTodo, getAllTodos, updateTodo } from "./todos.service";
export default function Todos() {
    const [todos, setTodos] = useState([]);
    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
        const init = async () => {
            if (!isInitialized) {
                setTodos([...(await getAllTodos())]);
                setIsInitialized(true); // Setzt den Zustand, dass die Initialisierung abgeschlossen ist
            }
        };
        init();
    }, [isInitialized]);
    return (
        <>
            <input className="border-radius-left" type="text" name="newTodo" id="HTMLInputNewTodo" />
            <button
                className="border-radius-right"
                onClick={async () => {
                    let title = HTMLInputNewTodo.value;
                    HTMLInputNewTodo.value = "";
                    await addTodo(title);
                    setTodos([...(await getAllTodos())]);
                }}
            >
                Add
            </button>
            <hr />
            <div>
                {todos.map((todo) => (
                    <div key={todo.id} className="flex flex-space-between">
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={async () => {
                                todo.completed = !todo.completed;
                                await updateTodo(todo);
                                setTodos([...(await getAllTodos())]);
                            }}
                        />
                        <div className="w-100 text-left" key={todo.id}>
                            {todo.completed ? <span className="text-through">{todo.title}</span> : <span>{todo.title}</span>}
                        </div>
                        {todo.completed ? (
                            <div
                                onClick={async () => {
                                    await deleteTodo(todo);
                                    setTodos([...(await getAllTodos())]);
                                }}
                                className="pointer no-select"
                            >
                                ❌
                            </div>
                        ) : (
                            <div className="pointer no-select">✖️</div>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
}
