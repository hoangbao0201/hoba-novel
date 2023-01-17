import { Request, Response } from "express";

export const createBook = async (_req: Request, res: Response) => {
    try {
        // const { accout, password } = req.body;
        console.log("REQ: ", res.locals)
        return res.json({
            code: 200,
            message: "Create book successful",
        });
    } catch (error) {
        return {
            code: 500,
            message: `Internal server error ${error}`,
        };
    }
};
