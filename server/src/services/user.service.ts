import { User } from "../entities/User";
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

// export const signTokens = async (user: User) => {
//     // 1. Create Session
//     redisClient.set(user.id, JSON.stringify(user));

//     // 2. Create Access and Refresh tokens
//     const access_token = signJwt({ sub: user.id }, "accessTokenPrivateKey", {
//         expiresIn: `${config.get<number>("accessTokenExpiresIn")}m`,
//     });

//     const refresh_token = signJwt({ sub: user.id }, "refreshTokenPrivateKey", {
//         expiresIn: `${config.get<number>("refreshTokenExpiresIn")}m`,
//     });

//     return { access_token, refresh_token };
// };  
