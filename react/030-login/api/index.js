import express from "express";
import cors from "cors";
import { userRouter } from "./users/user.router.js";
import { loginRouter } from "./auth/login.router.js";
import { authMiddleware } from "./auth/auth.middleware.js";
import { registerRouter } from "./auth/register.route.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/auth", loginRouter);
app.use("/api/auth/", registerRouter);
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.get("/geheim", authMiddleware, (req, res) => {
    res.send({
        message: "Geheime Daten: 37235aa4-d44a-4e03-9e6c-e6c1dfd468a7",
    });
});

app.listen(3000, () => {
    console.log("Server started on http://localhost:3000");
});
