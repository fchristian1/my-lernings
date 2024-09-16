import crypto from "crypto";
export class User {
    constructor(email, password) {
        this.id = crypto.randomUUID();
        this.email = email;
        this.createDate = Date.now();
        this.passwordHash = passwordHash(password, this.createDate.toString());
        this.token = "";
    }

    getName() {
        return this.name;
    }
    checkPassword(password) {
        return this.passwordHash === passwordHash(password, this.createDate.toString());
    }
    setPassword(password) {
        this.passwordHash = passwordHash(password, this.createDate.toString());
    }
    getToken() {
        return this.token;
    }
    setToken(token) {
        this.token = token;
    }
}
function passwordHash(password, salt) {
    let hmac = crypto.createHmac("sha256", "secret");
    hmac.update(password + salt);
    return hmac.digest("hex");
}
