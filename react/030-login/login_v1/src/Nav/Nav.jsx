import NavLink from "./components/NavLink";
export default function Nav({ user }) {
    console.log(user);
    return (
        <>
            <div>
                <NavLink to={"/"} children={"Home"}></NavLink> |{" "}
                {user === null ? (
                    <NavLink to={"/login"} children={"Login"}></NavLink>
                ) : (
                    <>
                        <NavLink to={"/profile"} children={"Profile"}></NavLink>{" "}
                        |<NavLink to={"/logout"} children={"Logout"}></NavLink>
                    </>
                )}
            </div>
        </>
    );
}
