require("dotenv").config();
import "reflect-metadata";
import { DataSource } from "typeorm";

import { User } from "../entities/User";
import { Post } from "../entities/Post";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    synchronize: true,
    logging: true,
    entities: [User, Post],
    username: process.env.DB_USERNAME_DEV,
    database: process.env.DB_NAME_DEV,
    password: process.env.DB_PASSWORD_DEV,
});
