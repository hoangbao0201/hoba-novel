import { CookieOptions, Request, Response } from "express";
import argon2 from "argon2";
import { createUser, getUser, signTokens } from "../services/user.service";

const cookiesOptions: CookieOptions = {
    httpOnly: true,
    sameSite: "lax",
};

if (process.env.NODE_ENV === "production") cookiesOptions.secure = true;

const accessTokenCookieOptions: CookieOptions = {
    ...cookiesOptions,
    expires: new Date(Date.now() + 15 * 60 * 1000),
    maxAge: 7 * 60 * 1000,
};

const refreshTokenCookieOptions: CookieOptions = {
    ...cookiesOptions,
    expires: new Date(Date.now() + 15 * 60 * 1000),
    maxAge: 7 * 60 * 1000,
};

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

        // Sign access and refresh token
        const { accessToken, refreshToken } = await signTokens(exitingUser);
        console.log("ACCESS TOKEN: ", accessToken);
        console.log("REFRESH TOKEN: ", refreshToken);

        // 5. Add Cookies
        res.cookie("access_token", accessToken, accessTokenCookieOptions);
        res.cookie("refresh_token", refreshToken, refreshTokenCookieOptions);
        res.cookie("logged_in", true, {
            ...accessTokenCookieOptions,
            httpOnly: false,
        });

        return res.json({
            code: 200,
            message: "Login successful",
            user: exitingUser,
            accessToken: accessToken
        });
    } catch (error) {
        return {
            code: 500,
            message: `Internal server error ${error}`,
        };
    }
};
