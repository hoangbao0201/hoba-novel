import { Request, Response } from "express";
import argon2 from "argon2";
import { createUser, getUser } from "../services/user.service";


// Register User
export const registerUser = async (req: Request, res: Response) => {
    try {
        const { name, username, email, password } = req.body;

        const hashedPassword = await argon2.hash(password);

        const newUser = await createUser({
            name,
            username,
            email,
            password: hashedPassword,
        });

        return res.json({
            code: 200,
            message: "Register successful",
            user: newUser,
        });
    } catch (error) {
        return {
            code: 500,
            message: `Internal server error ${error}`,
        };
    }
};

// Login User
export const loginUser = async (req: Request, res: Response) => {
    try {
        const { accout, password } = req.body;

        const exitingUser = await getUser(accout);

        if (!exitingUser) {
            return res.json({
                code: 400,
                message: "Username or email incorrect",
            });
        }

        const passwordValid = await argon2.verify(
            exitingUser.password,
            password
        );
        if (!passwordValid) {
            return {
                code: 400,
                message: "Username or email incorrect",
            };
        }

        return res.json({
            code: 200,
            message: "Login successful",
            user: exitingUser,
        });
    } catch (error) {
        return {
            code: 500,
            message: `Internal server error ${error}`,
        };
    }
};
