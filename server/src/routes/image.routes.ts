import express from "express";
const router = express.Router();

import { storage } from "../utils/multer";

import { uploadSingleImageThumbnail } from "../controllers/image.controller";


router.post("/upload-single/thumbnail", storage.single("file"), uploadSingleImageThumbnail);


export default router;
