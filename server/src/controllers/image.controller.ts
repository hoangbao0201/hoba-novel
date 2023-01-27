import { Request, Response } from "express";
import cloudinary from "../utils/cloudinary";


export const uploadSingleImageThumbnail = async (req: Request, res: Response) => {
    try {
        const thubnail = await cloudinary.uploader.upload(req.file?.path, {
            public_id: `${Date.now()}`,
            resource_type: "auto",
            folder: "hobanovel/book/thumbnail",
        });

        return res.json({
            code: 200,
            message: "Upload image successful",
            image: thubnail
        });
    } catch (error) {
        return {
            code: 500,
            message: `Internal server error ${error}`,
        };
    }
};
