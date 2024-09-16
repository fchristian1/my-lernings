import { useState } from "react";
import { Link } from "react-router-dom";

export function Login({ user, setUser }) {
    const [loginUser, setLoginUser] = useState({
        email: "",
        passwordA: "",
        passwordB: "",
    });
    return (
        <>
            <h1>Login</h1>
            <div className="flex col gap-8">
                <label className="flex col gap-4">
                    Email:
                    <input
                        value={loginUser.email}
                        onChange={(e) =>
                            setLoginUser({
                                ...loginUser,
                                email: e.target.value,
                            })
                        }
                        type="text"
                        placeholder="Email"
                    />
                </label>
                <label className="flex col gap-4">
                    Password:
                    <input
                        value={loginUser.passwordA}
                        onChange={(e) =>
                            setLoginUser({
                                ...loginUser,
                                passwordA: e.target.value,
                            })
                        }
                        type="password"
                        placeholder="Password"
                        id="HTMLpasswordA"
                    />
                </label>
                <label className="flex col gap-4">
                    Password:
                    <input
                        value={loginUser.passwordB}
                        onChange={(e) =>
                            setLoginUser({
                                ...loginUser,
                                passwordB: e.target.value,
                            })
                        }
                        type="password"
                        placeholder="Password"
                        id="HTMLpasswordB"
                    />
                </label>
            </div>
            <br />
            <Link to={"/"}>
                <button
                    onClick={() => {
                        setLoginUser({
                            email: "",
                            passwordA: "",
                            passwordB: "",
                        });
                        setUser(loginUser);
                    }}
                >
                    Login
                </button>
            </Link>
        </>
    );
}
