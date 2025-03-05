import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import serverConfig from "../config/serverConfig"; 
import { getUser } from "../repositories/user.repository";


export interface AuthRequest extends Request {
    user?: string;
    email?: string;
}

const verifyToken = (token: string): JwtPayload | null => {
    try {
        return jwt.verify(token, serverConfig.JWT_SECRET as string) as JwtPayload;
    } catch (err) {
        console.log("Token not verified");
        return null;
    }
};

const authenticate = async (req: AuthRequest, res: Response, next: NextFunction): Promise<void> => {
    const token = req.headers["x-access-token"] as string | undefined;

    if (!token) {
        res.status(401).json({
            success: false,
            message: "Sign in to interact with the system",
        });
        return;
    }

    const decodedToken = verifyToken(token);

    if (!decodedToken || !decodedToken.email) {
        res.status(401).json({
            success: false,
            message: "Token is not verified, login again",
        });
        return;
    }

    try {
        const user = await getUser(decodedToken.email);

        if (!user) {
            res.status(401).json({
                success: false,
                message: "User not found, login again",
            });
            return;
        }

        req.user = user.id;
        req.email = user.email;

        next(); 
    } catch (error) {
        console.error("Error fetching user:", error);
        res.status(400).json({
            success: false,
            message: "Something went wrong!!",
        });
    }
};
export default authenticate;
