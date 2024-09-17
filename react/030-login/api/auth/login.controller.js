import {
    checkPasswordData,
    checkTokenData,
    logoutTokenData,
    readAllUsersData,
    setTokenData,
} from "../users/user.data.js";

export async function loginController(req, res) {
    let { email, password } = req.body;

    if (email === "" || password === "") {
        res.status(400).send({
            error: "Email and password must not be empty",
        });
        return;
    }
    let check = checkPasswordData(email, password);
    if (!check) {
        res.status(401).send({ error: "Email or password is incorrect" });
        return;
    }
    let token = crypto.randomUUID();
    setTokenData(email, token);
    res.status(200).json({ login: true, token: token });
}
export async function logoutController(req, res) {
    let { email } = req.body;
    let authorization = req.headers.authorization;
    let token = authorization.split(" ")[1];

    let user = readAllUsersData().find((user) => user.email === email);
    if (!user) {
        res.status(401).send({ logout: false });
        return;
    }

    let check = checkTokenData(token);
    if (!check) {
        res.status(401).send({ logout: false });
        return;
    }
    logoutTokenData(token);
    res.status(200).json({ logout: true });
}

export async function tokenController(req, res) {
    let { token } = req.body;
    let check = checkTokenData(token);
    if (!check) {
        res.status(401).send({ token: false });
        return;
    }
    res.status(200).json({ token: token });
}
