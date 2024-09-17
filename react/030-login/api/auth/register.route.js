import express from "express";
import { registerController } from "./register.controller.js";

const router = express.Router();

router.post("/register", registerController);

export { router as registerRouter };
