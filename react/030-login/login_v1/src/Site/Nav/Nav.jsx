import NavLink from "./components/NavLink";
export default function Nav({ user }) {
    return (
        <>
            <div className="nav flex space-between">
                <div className="flex gap-4">
                    <NavLink to={"/"} children={"Home"}></NavLink>
                </div>
                <div>
                    {user === null ? (
                        <NavLink to={"/login"} children={"Login"}></NavLink>
                    ) : (
                        <>
                            <NavLink
                                to={"/profile"}
                                children={"Profile"}
                            ></NavLink>{" "}
                            |{" "}
                            <NavLink
                                to={"/logout"}
                                children={"Logout"}
                            ></NavLink>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}
