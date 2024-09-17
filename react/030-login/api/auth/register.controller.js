import { createUserData } from "../users/user.data.js";

export async function registerController(req, res) {
    const { email, password } = req.body;
    const user = createUserData(email, password);
    if (user) {
        res.status(400).json({ success: false });
        return;
    }

    res.status(201).json({ success: true });
}
