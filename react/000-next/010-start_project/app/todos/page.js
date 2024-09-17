import AddNewTodo from "./AddNewTodo";

let todos = [{ title: "Learn React" }, { title: "Learn Redux" }, { title: "Learn Redux-Toolkit" }];
function Todos() {
    return (
        <>
            <div>
                <AddNewTodo />
            </div>
            <hr />
            <div>
                {todos.map((todo, index) => (
                    <div style={{ display: "flex", "justify-content": "space-between", margin: "5px" }} key={index}>
                        <input type="checkbox" name="todo" id={`HTMLTodo${index}`} />
                        <label htmlFor={`HTMLTodo${index}`}>{todo.title}</label>
                        <button id={`HTMLButtonDeleteTodo${index}`}>Delete</button>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Todos;
