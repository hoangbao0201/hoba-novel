import express from "express";
import { deserializeUser } from "../middleware/deserializeUser";
import { createBook, getAllBooks, getMyBooks } from "../controllers/book.controller";

const router = express.Router();


// router.use()
router.post("/create", deserializeUser, createBook);

router.get("/my-books", deserializeUser, getMyBooks)

router.get("/", getAllBooks);

export default router;