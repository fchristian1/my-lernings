export default function Logout({ setUser }) {
    return (
        <>
            <h1>Logout</h1>
            <button onClick={() => setUser(null)}>Logout</button>
        </>
    );
}
