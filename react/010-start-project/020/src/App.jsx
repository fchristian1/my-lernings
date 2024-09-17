import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ToggleOne from "./toggle/ToggleOne";
import ToggleTwo from "./toggle/ToggleTwo";

function App() {
    const [count, setCount] = useState(0);
    const [toggle, setToggle] = useState(false);
    const setCountBind = (c) => setCount((c) => c + 1);
    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCountBind()}>count is {count}</button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
                <button onClick={() => setToggle(!toggle)}>{toggle ? "ToggleOne" : "ToggleTwo"}</button>
                {toggle ? <ToggleOne data={count} /> : <ToggleTwo data={count} setCountBind={setCountBind} />}
            </div>
            <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
        </>
    );
}

export default App;
