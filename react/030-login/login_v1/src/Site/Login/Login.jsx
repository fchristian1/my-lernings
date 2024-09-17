import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginAuth } from "../../services/auth.service";

export function Login({ user, setUser }) {
    const [loginUser, setLoginUser] = useState({
        email: "fc1@gmx.net",
        password: "26094809",
    });
    const navi = useNavigate();
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
                        value={loginUser.password}
                        onChange={(e) =>
                            setLoginUser({
                                ...loginUser,
                                password: e.target.value,
                            })
                        }
                        type="password"
                        placeholder="Password"
                        id="HTMLpassword"
                    />
                </label>
            </div>
            <br />

            <button
                onClick={async () => {
                    let logindata = await loginAuth(
                        loginUser.email,
                        loginUser.password
                    );
                    if (logindata.login) {
                        setUser(logindata);
                        //return to "/"
                        navi("/");
                    }
                }}
            >
                Login
            </button>
        </>
    );
}
