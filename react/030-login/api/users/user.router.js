import Router from "express";
import { readAllUsersController } from "./user.controller.js";

const router = Router();

router.get("/", readAllUsersController);

export { router as userRouter };
