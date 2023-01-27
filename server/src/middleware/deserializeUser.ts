import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { findUserById } from "../services/user.service";

export const deserializeUser = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {

        const authHeader = req.headers.authorization;
        const token = authHeader && authHeader.split(" ")[1];

        if (!token) {
            res.status(400).json({
                code: 400,
                success: false,
                message: "Access token not found",
            });
            return;
        }

        await jwt.verify(
            token as string,
            process.env.SECRET_TOKEN as string,
            async (error: any, user : any ) => {
                if (error) {
                    res.json({
                        code: 400,
                        success: false,
                        error: "decodes",
                        message: "Invalid token or user doesn't exist",
                    });
                    return;
                }

                const exitingUser = await findUserById(user.userId);
                if(!exitingUser) {
                    res.json({
                        code: 400,
                        success: false,
                        message: "User not found"
                    })
                    return;
                }

                res.locals.user = exitingUser;

                next();
            }
        );
    } catch (error) {
        next(error);
    }
};
