import { Request, Response } from "express";
import { findUserById } from "../services/user.service";
import { createBookHandle } from "../services/book.service";


export const createBook = async (req: Request, res: Response) => {
    try {
        // console.log("userid: ", res.locals)

        // const { title, content } = req.body;

        // console.log(title, content)

        const user = await findUserById(res.locals.user.id as number);
        // const valuesBook = { ...req.body, user }
        const exitingBook = await createBookHandle(req.body, user!)

        return res.json({
            code: 200,
            message: "Create book successful",
            // post: exitingBook,
            // user: user,
            // valuesBook: valuesBook
            exitingBook: exitingBook
        });
    } catch (error) {
        return {
            code: 500,
            message: `Internal server error ${error}`,
        };
    }
};
