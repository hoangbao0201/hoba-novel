import express from "express";
import { deserializeUser } from "../middleware/deserializeUser";
import {
    createBook,
    editBook,
    getBook,
    getBookByLink,
    getBooks,
    getMyBooks,
    uploadThumbnailBook,
} from "../controllers/book.controller";
import { storage } from "../utils/multer";

const router = express.Router();

// router.use()
router.post("/create", deserializeUser, createBook);

router.get("/my-books", deserializeUser, getMyBooks);

router.post("/edit/:id", deserializeUser, editBook);

// Image
router.post( "/upload-thumbnail/:id", deserializeUser, storage.single("file"), uploadThumbnailBook );

// Get Book
router.get("/get-by-link/:link", getBookByLink)
router.get("/:id", getBook);
router.get("/", getBooks);

export default router;
