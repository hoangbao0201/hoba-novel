import { NextFunction, Request, Response } from "express";

export const requireUser = (
    _req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const user = res.locals.user;

        if (!user) {
            return next();
        }

        next();
    } catch (err: any) {
        next(err);
    }
};
