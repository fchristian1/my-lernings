import { User } from "./user/user.js";

let users = [];
createUserData("fc1@gmx.net", "26094809");

export function createUserData(email, password) {
    let user = new User(email, password);
    users.push(user);
}
export function readAllUsersData() {
    return users.map((user) => {
        return { id: user.id, email: user.email, createDate: user.createDate };
    });
}

export function readUserData(id) {
    let user = users.find((user) => user.id === id);
    if (user) {
        return { id: user.id, email: user.email, createDate: user.createDate };
    }
    return null;
}

export function checkPasswordData(email, password) {
    let user = users.find((user) => user.email === email);
    if (user) {
        return user.checkPassword(password);
    }
    return false;
}
export function setTokenData(email, token) {
    let user = users.find((user) => user.email === email);
    if (user) {
        user.setToken(token);
    }
}
export function logoutTokenData(token) {
    let user = users.find((user) => user.token === token);
    if (user) {
        user.setToken("");
    }
}
export function checkTokenData(token) {
    let user = users.find((user) => user.token === token);
    return user ? true : false;
}
