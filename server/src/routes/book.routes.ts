import express from "express";
import { deserializeUser } from "../middleware/deserializeUser";
import { createBook, getAllBooks } from "../controllers/book.controller";

const router = express.Router();


// router.use()
router.post("/create", deserializeUser, createBook);
router.get("/", getAllBooks);

export default router;
