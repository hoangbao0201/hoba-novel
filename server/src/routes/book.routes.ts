import express from "express";
import { deserializeUser } from "../middleware/deserializeUser";
import { createBook } from "../controllers/book.controller";

const router = express.Router();


// router.use()
router.post("/create", deserializeUser, createBook);

export default router;
