import { useState } from "react";

export default function Register() {
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
                    console.log("Register", newUser);
                }}
            >
                Register
            </button>
        </>
    );
}
