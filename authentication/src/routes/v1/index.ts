import express from "express";

import userRouter from "./user.route";
import authenticate from "../../middlewares/auth.middleware";
import verifyRoutes from "./verify.route";
const v1Routes = express.Router();

v1Routes.use("/user", userRouter);

v1Routes.use(authenticate);

v1Routes.use("/verify", verifyRoutes);

export default v1Routes;
