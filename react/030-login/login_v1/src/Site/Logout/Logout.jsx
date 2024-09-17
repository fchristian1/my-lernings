import { useNavigate } from "react-router-dom";
import { deleteUserDataOnClientAuth } from "../../services/auth.service";

export default function Logout({ setUser }) {
    const navi = useNavigate();
    return (
        <>
            <h1>Logout</h1>

            <button
                onClick={async () => {
                    await deleteUserDataOnClientAuth();
                    setUser(null);
                    navi("/");
                }}
            >
                Logout
            </button>
        </>
    );
}
