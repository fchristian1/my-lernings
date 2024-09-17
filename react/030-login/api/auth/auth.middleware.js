import { checkTokenData } from "../users/user.data.js";

export async function authMiddleware(req, res, next) {
    let { authorization } = req.headers;
    if (!authorization) {
        res.status(401).send({ token: false });
        return;
    }
    let token = authorization.split(" ")[1];
    let check = checkTokenData(token);
    if (!check) {
        res.status(401).send({ token: false });
        return;
    }
    next();
}
