import { Request, Response } from "express";
import { Book } from "../entities/Book";
import { createBookHandle, getBookById, getMyBooksHandle } from "../services/book.service";
import { createImageBookHandle } from "../services/image.service";
import cloudinary from "../utils/cloudinary";


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

export const getBooks = async (req: Request, res: Response) => {
    try {
        const { page } = req.query;
        
        if(!page) {

            const books = await Book
                .createQueryBuilder("book")
                .leftJoinAndSelect('book.image', 'image')
                .orderBy("book.createAt", "DESC")
                .skip(0)
                .take(5)
                .getMany()

            return res.json({
                code: 200,
                success: true,
                message: "Get successful",
                books: books || null
            })
        }
        else {

            const books = await Book
                .createQueryBuilder("book")
                .leftJoinAndSelect('book.image', 'image')
                .orderBy("book.createAt", "DESC")
                .skip(0)
                .take(5)
                .getMany()


            return res.json({
                code: 200,
                success: true,
                message: "Create book successful",
                books: books || null
            });
        }
        
    } catch (error) {
        return {
            code: 500,
            success: false,
            message: `Internal server error ${error}`,
        };
    }
};

export const getBookByLink = async (req: Request, res: Response) => {
    try {
        const { link } = req.params;

        const book = await Book
            .createQueryBuilder("book")
            .orderBy("book.createAt", "DESC")
            .leftJoinAndSelect('book.image', 'image')
            .where("book.link = :link", { link: link })
            .getOne()
        
        return res.json({
            code: 200,
            success: true,
            message: "Create book successful",
            book: book,
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

export const getBook = async (req: Request, res: Response) => {
    try {
        const book = await getBookById(req.params.id);

        return res.json({
            code: 200,
            success: true,
            message: "Create book successful",
            book: book || null
        });
    } catch (error) {
        return {
            code: 500,
            success: false,
            message: `Internal server error ${error}`,
        };
    }
};

export const editBook = async (req: Request, res: Response) => {
    try {
        // const myBooks = await getMyBooksHandle(res.locals.user.id);

        return res.json({
            code: 200,
            success: true,
            message: "Edit book successful",
            bookId: req.params
            // books: myBooks
        });
    } catch (error) {
        return {
            code: 500,
            success: false,
            message: `Internal server error ${error}`,
        };
    }
};

export const uploadThumbnailBook = async (req: Request, res: Response) => {
    try {

        const book = await getBookById(req.params.id);
        if(!book) {
            return res.json({
                code: 400,
                success: false,
                message: "Book not found",
            });
        }

        const thumbnail = await cloudinary.uploader.upload(req.file?.path, {
            public_id: `${Date.now()}`,
            resource_type: "auto",
            folder: "hobanovel/book/thumbnail",
        });
        if(!thumbnail) {
            return res.json({
                code: 400,
                success: false,
                message: "Upload image error",
            });
        }

        const dataImage = {
            publicId: thumbnail.public_id,
            url: thumbnail.url
        }

        // const dataImage = {
        //     publicId: "123",
        //     url: "345"
        // }
        
        const newImage = await createImageBookHandle(dataImage, book);

        return res.json({
            code: 200,
            success: true,
            message: "Upload image successful",
            image: newImage
            // book: book || null
        });

    } catch (error) {
        return {
            code: 500,
            success: false,
            message: `Internal server error ${error}`,
        };
    }
};
