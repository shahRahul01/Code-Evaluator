import express, { Request, Response } from "express";
import { v4 } from "uuid";
import jwt from "jsonwebtoken";

import { signinInput, signupInput } from "../../types/inputtypes";
import { comparePassword, hashPassword } from "../../utils/password";
import { createUser, getUser } from "../../repositories/user.repository";
import { parser } from "../../utils/fileupload";
import serverConfig from "../../config/serverConfig";

const userRouter = express.Router();

userRouter.post(
    "/signup",
    parser.single("profilePic"),
    async (req: Request, res: Response): Promise<void> => {
        try {
            const data = req.body;
            console.log("data is", data);

            if (!req.file) {
                res.status(400).json({ success: false, message: "Profile picture is required" });
                return;
            }

            const profilePic = req.file.path;

            data.profilePic = profilePic;
            console.log(data.profilePic);

            const { success } = signupInput.safeParse(data);

            if (!success) {
                res.status(411).json({ success: false, message: "Input is invalid" });
                return;
            }

            const isUser = await getUser(data.email);
            if(isUser) {
                res.status(400).json({
                    success: false,
                    error: "User already exist with this emailId",
                });
                return;
            }

            data.password = hashPassword(data.password);
            console.log("Hashed password is", data.password);

            const response = await createUser(data);

            res.status(200).json({
                success: true,
                message: "Sign up successfully",
                data: {
                    id: response.id,
                    email: response.email,
                    name: response.name,
                    profilePic: response.profilePic
                },
            });

        } catch (error: any) {
            console.error(error);
            res.status(500).json({
                success: false,
                error: error.message || "An unexpected error occurred",
            });
        }
    }
);

userRouter.post(
    "/signin",
    async (req: Request, res: Response): Promise<void> => {
        try {
            const data = req.body;

            const { success } = signinInput.safeParse(data);

            if (!success) {
                res.status(411).json({ success: false, message: "Input is invalid" });
                return;
            }

            const user = await getUser(data.email);

            if (!user) {
                res.status(400).json({
                    success: false,
                    message: "User not found"
                });
                return;
            }

            if (!comparePassword(data.password, user.password)) {
                res.status(400).json({
                    success: false,
                    message: "Password is incorrect"
                });
                return;
            }


            const token = jwt.sign({
                id: user.id,
                email: user.email,
            }, serverConfig.JWT_SECRET as string, { expiresIn: '30d' });

            res.status(200).json({
                success: true,
                message: "Sign in successfully",
                data: {
                    id: user.id,
                    email: user.email,
                    name: user.name,
                    profilePic: user.profilePic,
                    token: token,
                    role: user.role
                },
            });

        } catch (error: any) {
            console.error(error);
            res.status(500).json({
                success: false,
                error: error.message || "An unexpected error occurred",
            });
        }
    }
);

export default userRouter;
