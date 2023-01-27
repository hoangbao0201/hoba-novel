import { Request, Response } from "express";
import { createBookHandle, getAllBooksHandle, getMyBooksHandle } from "../services/book.service";


export const createBook = async (req: Request, res: Response) => {
    try {
        const exitingBook = await createBookHandle(req.body, res.locals.user!)

        return res.json({
            code: 200,
            success: true,
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
            success: false,
            message: `Internal server error ${error}`,
        };
    }
};

export const getAllBooks = async (_req: Request, res: Response) => {
    try {
        const allBooks = await getAllBooksHandle();

        return res.json({
            code: 200,
            success: true,
            message: "Create book successful",
            books: allBooks
        });
    } catch (error) {
        return {
            code: 500,
            success: false,
            message: `Internal server error ${error}`,
        };
    }
};

export const getMyBooks = async (_req: Request, res: Response) => {
    try {
        const myBooks = await getMyBooksHandle(res.locals.user.id);

        return res.json({
            code: 200,
            success: true,
            message: "Create book successful",
            books: myBooks
        });
    } catch (error) {
        return {
            code: 500,
            success: false,
            message: `Internal server error ${error}`,
        };
    }
};

