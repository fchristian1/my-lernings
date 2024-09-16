import {
    BrowserRouter as Router,
    Routes,
    Route,
    Outlet,
} from "react-router-dom";
import Nav from "./Nav/Nav";
import { Login } from "./Login/Login";
import Home from "./Home/Home";
import { useState } from "react";
import Logout from "./Logout/Logout";
import Profile from "./Profile/Profile";
function App() {
    const [user, setUser] = useState(null);
    return (
        <>
            <Router>
                <Routes>
                    <Route path={"/"} element={<Layout user={user} />}>
                        <Route path={"/"} element={<Home />} />
                        <Route
                            path={"/login"}
                            element={<Login user={user} setUser={setUser} />}
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
