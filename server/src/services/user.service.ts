require("dotenv").config();
import { User } from "../entities/User";
import jwt from "jsonwebtoken";
// import redisClient from "../utils/connectRedis";

export const createUser = async (input: Partial<User>) => {
    return await User.save(User.create(input));
};

export const getUser = async (accout: string) => {
    const checkAccout = accout.includes("@")
        ? { email: accout }
        : { username: accout };
    return await User.findOne({ where: checkAccout });
};

export const findUserByEmail = async (email: string) => {
    return await User.findOneBy({ email });
};

export const findUserById = async (userId: number) => {
    return await User.findOneBy({ id: userId });
};

export const findUser = async (query: Object) => {
    return await User.findOneBy(query);
};

export const signTokens = async (user: User) => {
    // 1. Create Session
    // redisClient.set(user.id, JSON.stringify(user), {
    //     EX: config.get<number>("redisCacheExpiresIn") * 60,
    // });

    // 2. Create Access and Refresh tokens
    const accessToken = jwt.sign(
        { userId: user.id },
        process.env.SECRET_TOKEN as string,
        { expiresIn: "15m" }
    );

    const refreshToken = jwt.sign(
        { userId: user.id },
        process.env.SECRET_TOKEN as string,
        { expiresIn: "7d" }
    );

    return { accessToken, refreshToken };
};
