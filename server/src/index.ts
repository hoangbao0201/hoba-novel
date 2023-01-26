require("dotenv").config();
import express from "express";
import "reflect-metadata";
import cookieParser from "cookie-parser";

import { AppDataSource } from "./utils/data-source";
import authRouter from "./routes/auth.routes";
import bookRouter from "./routes/book.routes";
import userRouter from "./routes/user.routes";
import imageRouter from "./routes/image.routes";

import cors from "cors";

const main = async () => {

    
    const app = express();
    const PORT = 4000;


    app.use(cookieParser())
    app.use(
        cors({
            origin: "http://localhost:3000",
            credentials: true,
        })
    );

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    AppDataSource.initialize();

    // Routes
    app.use("/api/auth", authRouter);
    app.use("/api/books", bookRouter);
    app.use("/api/users", userRouter);
    app.use("/api/images", imageRouter);

    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`);
    });
};

main().catch((error) => console.log(`server error ${error}`));
