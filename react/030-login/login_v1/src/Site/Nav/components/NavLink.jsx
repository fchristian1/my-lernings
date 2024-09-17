import { Link } from "react-router-dom";
export default function NavLink({ to, children }) {
    return (
        <Link className="uppercase" to={to}>
            {children}
        </Link>
    );
}
