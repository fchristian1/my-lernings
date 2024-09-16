import { Link } from "react-router-dom";
export default function NavLink({ to, children }) {
    return <Link to={to}>{children}</Link>;
}
