import { useState } from "react";
import { readUserDataOnClientAuth } from "../../services/auth.service";

export default function Home() {
    const [data, setData] = useState(null);
    return (
        <>
            <h1>Home</h1>
            <button
                className="mb-4"
                onClick={async () => {
                    let message = "";
                    let data = await fetch("http://localhost:3000/geheim", {
                        headers: {
                            authorization:
                                "Bearer " + readUserDataOnClientAuth()?.token,
                        },
                    });
                    if (data.status === 401) {
                        message = { message: "Du bist nicht angemeldet!" };
                    } else {
                        let dataJson = await data.json();
                        message = dataJson;
                    }
                    setData(message);
                }}
            >
                Empfange geheime Daten
            </button>
            <hr className="mb-4" />
            {data && <p>{data.message}</p>}
        </>
    );
}
