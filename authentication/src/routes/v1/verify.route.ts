import express, { Request, Response } from "express";
import { AuthRequest } from "../../middlewares/auth.middleware";
import { getUser } from "../../repositories/user.repository";

const verifyRoutes = express.Router();

verifyRoutes.get("/", async (req: AuthRequest, res: Response) => {
    try {
        const userEmail = req.email;

        const user = await getUser(userEmail as string);

        res.status(200).json({
            success: true,
            message: "User verified successfully",
            data: {
                id: user?.id,
                email: user?.email,
                profilePic: user?.profilePic,
                name: user?.name,
                role: user?.role
            }
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Internal server error",
            data: {},
            error
        });
    }
});

export default verifyRoutes;