import express from "express";
const router = express.Router();

import { uploadSingleImage } from "../controllers/image.controller";

import multer from "multer";
import path from "path";

const storage = multer({
    storage: multer.diskStorage({}),
    fileFilter: (_req, file : any, cb : any) => {
        let ext = path.extname(file.originalname);
        if (
            ext !== ".jpg" &&
            ext !== ".JPG" &&
            ext !== ".png" &&
            ext !== ".PNG"
        ) {
            cb(new Error("File type is not supported"), false);
            return;
        }
        cb(null, true);
    },
});

// const uploadMiddleware = storage.single("image");

router.post("/upload-single", storage.single("file"), uploadSingleImage);

export default router;
