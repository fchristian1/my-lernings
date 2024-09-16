import { checkPasswordData, checkTokenData, logoutTokenData, setTokenData } from "../users/user.data.js";

export async function loginController(req, res) {
    let { email, passwordA, passwordB } = req.body;
    if (passwordA !== passwordB) {
        res.status(400).send("Passwords do not match");
        return;
    }
    if (email === "" || passwordA === "") {
        res.status(400).send("Email and password must not be empty");
        return;
    }
    let check = checkPasswordData(email, passwordA);
    if (!check) {
        res.status(401).send("Email or password is incorrect");
        return;
    }
    let token = crypto.randomUUID();
    setTokenData(email, token);
    res.status(200).json({ login: true, token: token });
}
export async function logoutController(req, res) {
    let { token } = req.body;
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
