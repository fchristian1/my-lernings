// authMiddleware.js
function authMiddelware(req, res, next) {
    const authHeader = req.headers["authorization"];
    if (authHeader && authHeader === "Bearer mysecrettoken") {
        console.log(JSON.stringify({ headers: [{ authorization: authHeader }] }));
        next();
    } else {
        res.sendStatus(403);
    }
}

module.exports = authMiddelware;
