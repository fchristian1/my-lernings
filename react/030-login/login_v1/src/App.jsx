import {
    BrowserRouter as Router,
    Routes,
    Route,
    Outlet,
} from "react-router-dom";
import Nav from "./Site/Nav/Nav";
import { Login } from "./Site/Login/Login";
import Home from "./Site/Home/Home";
import { useEffect, useState } from "react";
import Logout from "./Site/Logout/Logout";
import Profile from "./Site/Profile/Profile";
import {
    readUserDataOnClientAuth,
    tokenCheckAuth,
} from "./services/auth.service";
import LoginRegisterMenu from "./Site/Login/LoginRegisterMenu";
function App() {
    const [user, setUser] = useState(null);
    useEffect(() => {
        let userData = readUserDataOnClientAuth();
        setUser(userData);
        tokenCheckAuth(userData?.token);
    }, []);

    return (
        <>
            <Router>
                <Routes>
                    <Route path={"/"} element={<Layout user={user} />}>
                        <Route path={"/"} element={<Home />} />
                        <Route
                            path={"/login"}
                            element={
                                <LoginRegisterMenu
                                    user={user}
                                    setUser={setUser}
                                />
                            }
                        />
                        <Route
                            path={"/logout"}
                            element={<Logout setUser={setUser} />}
                        />
                        <Route
                            path={"/profile"}
                            element={<Profile user={user}></Profile>}
                        />
                        <Route path={"*"} element={<h1>Not Found</h1>} />
                    </Route>
                </Routes>
            </Router>
        </>
    );
}

export default App;

function Layout({ user }) {
    return (
        <>
            <Nav user={user} />
            <Outlet />
        </>
    );
}
