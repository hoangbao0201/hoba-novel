require("dotenv").config();
import { User } from "../entities/User";
import jwt from "jsonwebtoken";

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

    const existingUser = await User
        .createQueryBuilder("user")
        .where( "user.id = :id", { id: userId })
        .getOne()

    // return await User.findOneBy({ id: userId });
    return existingUser;
};

export const findUser = async (query: Object) => {
    return await User.findOneBy(query);
};

export const signTokens = async (user: User) => {
    const accessToken = jwt.sign(
        { userId: user.id },
        process.env.SECRET_TOKEN as string,
        { expiresIn: "1h" }
    );

    const refreshToken = jwt.sign(
        { userId: user.id },
        process.env.SECRET_TOKEN as string,
        { expiresIn: "7d" }
    );

    return { accessToken, refreshToken };
};
