import logo from "./logo.svg";
import "./App.css";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <ul>
                    {getItems().map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <p>
                    <button
                        onClick={async () => {
                            for (let i = 0; i < 100; i++) {
                                const json = fetchJson((data) => console.log(data));
                            }
                        }}
                    >
                        Fetch JSON
                    </button>
                </p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;

function getItems() {
    return ["item2", "item2", "item3"];
}
function fetchJson(callback) {
    return fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((response) => response.json())
        .then((json) => callback(json));
}
