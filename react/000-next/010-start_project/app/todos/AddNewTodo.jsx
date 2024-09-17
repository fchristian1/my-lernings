"use client";
export default function AddNewTodo() {
    return (
        <div style={{ display: "flex", "justify-content": "space-between", margin: "5px" }}>
            <input type="text" name="newTodo" id="HTMLNewTodo" />
            <button
                onClick={() => {
                    console.log("123");
                }}
                id="HTMLButtonAddTodo"
            >
                Add
            </button>
        </div>
    );
}
