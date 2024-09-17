import { createUserData, readAllUsersData } from "./user.data.js";

export async function createUserController(req, res) {
    let { email, password } = req.body;
    createUserData(email, password);
    res.status(201).send();
}
export async function readAllUsersController(req, res) {
    res.json(readAllUsersData());
}
