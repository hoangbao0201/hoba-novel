import { Request } from "express";
import multer from "multer";
import path from "path"
multer({
    storage: multer.diskStorage({}),
    fileFilter: (_req: Request, file: Express.Multer.File, cb: any) => {
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

export default multer;

// const multer = require("multer");
// const path = require("path");


// module.exports = multer({
//     storage: multer.diskStorage({}),
//     fileFilter: (_req : any, file: any, cb : any) => {
//         let ext = path.extname(file.originalname);
//         if (
//             ext !== ".jpg" &&
//             ext !== ".JPG" &&
//             ext !== ".png" &&
//             ext !== ".PNG"
//         ) {
//             cb(new Error("File type is not supported"), false);
//             return;
//         }
//         cb(null, true);
//     },
// });
