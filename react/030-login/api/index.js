import express from "express";
import cors from "cors";
import { userRouter } from "./users/user.router.js";
import { loginRouter } from "./auth/login.router.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/auth", loginRouter);
app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(3000, () => {
    console.log("Server started on http://localhost:3000");
});
