import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const deserializeUser = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const authHeader = req.headers.authorization;
        const token = authHeader && authHeader.split(" ")[1];

        if (!token) {
            // return next(new AppError(401, `Invalid token or session has expired`));
            res.json({
                code: 400,
                success: false,
                message: "Access token not found"
            })
        }

        const decodes = jwt.verify(token as string, process.env.SECRET_TOKEN as string);

        res.locals.userId = decodes;
        next();
    } catch (error) {
        next(error);
    }
};
