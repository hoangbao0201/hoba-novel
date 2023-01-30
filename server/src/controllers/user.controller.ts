import { Request, Response } from "express";

// User
export const getMeHandle = async (_req: Request, res: Response) => {
    try {

        return res.json({
            code: 200,
            success: true,
            message: "Get User successful",
            user: res.locals.user,
        });

    } catch (error) {
        return {
            code: 500,
            success: false,
            message: `Internal server error ${error}`,
        };
    }
};

export const checkToken = async (_req: Request, res: Response) => {
    try {

        return res.json({
            code: 200,
            success: true,
            message: "Token valid",
        });

    } catch (error) {
        return {
            code: 500,
            success: false,
            message: `Internal server error ${error}`,
        };
    }
};