import { Request, Response } from "express";
import { createBookHandle, getAllBooksHandle } from "../services/book.service";


export const createBook = async (req: Request, res: Response) => {
    try {
        const exitingBook = await createBookHandle(req.body, res.locals.user!)

        return res.json({
            code: 200,
            message: "Create book successful",
            // title: req.body.title
            post: exitingBook,
            // user: user,
            // valuesBook: valuesBook
            // exitingBook: exitingBook
        });
    } catch (error) {
        return {
            code: 500,
            message: `Internal server error ${error}`,
        };
    }
};

export const getAllBooks = async (_req: Request, res: Response) => {
    try {
        const allBooks = await getAllBooksHandle();

        return res.json({
            code: 200,
            message: "Create book successful",
            books: allBooks
        });
    } catch (error) {
        return {
            code: 500,
            message: `Internal server error ${error}`,
        };
    }
};
