import router from "express";

import { loginController } from "./login.controller.js";
import { tokenController } from "./login.controller.js";
import { logoutController } from "./login.controller.js";
import { authMiddleware } from "./auth.middleware.js";

const loginRouter = router();

loginRouter.post("/login", loginController);
loginRouter.post("/logout", authMiddleware, logoutController);
loginRouter.post("/token", authMiddleware, tokenController);

export { loginRouter };
