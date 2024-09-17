import { useState } from "react";
import { Login } from "./Login";
import Register from "./Register";

export default function LoginRegisterMenu({ user, setUser }) {
    const [loginRegister, setLoginRegister] = useState("login");
    return (
        <>
            <button onClick={() => setLoginRegister("login")}>Login</button>
            <button onClick={() => setLoginRegister("register")}>
                Register
            </button>
            {loginRegister === "login" ? (
                <Login setUser={setUser} />
            ) : (
                <Register />
            )}
        </>
    );
}
