import { useState } from "react";
import { registerAuth } from "../../services/auth.service";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const navi = useNavigate();
    const [newUser, setNewUser] = useState({
        email: "sf2@mail1.net",
        passwordA: "1234567890",
        passwordB: "1234567890",
    });
    return (
        <>
            <h1>Register</h1>
            <div className="flex col gap-8">
                <label className="flex col gap-4">
                    Email:
                    <input
                        value={newUser.email}
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
                        value={newUser.passwordA}
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
                        value={newUser.passwordB}
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

            <button
                onClick={async () => {
                    (newUser.email === "" ||
                        newUser.passwordA === "" ||
                        newUser.passwordB === "") ??
                        alert("Fill in all fields");
                    newUser.passwordA !== newUser.passwordB ??
                        alert("Passwords do not match");

                    registerAuth(newUser.email, newUser.passwordA)
                        ? navi("/login")
                        : alert("Register failed");
                }}
            >
                Register
            </button>
        </>
    );
}
