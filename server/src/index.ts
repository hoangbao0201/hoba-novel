require("dotenv").config();
import express from "express";
import "reflect-metadata";
import { AppDataSource } from "./utils/data-source";

import authRouter from "./routes/auth.routes";
import bookRouter from "./routes/book.routes";

import cors from "cors";

const main = async () => {
    const app = express();
    const PORT = 4000;

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
    app.use("/api/book", bookRouter);

    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`);
    });
};

main().catch((error) => console.log(`server error ${error}`));
