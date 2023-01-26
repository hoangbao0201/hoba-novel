// import { Request } from "express"
import { User } from "../entities/User";
import { Book } from "../entities/Book";
import { AppDataSource } from "../utils/data-source";


const postRepository = AppDataSource.getRepository(Book);

export const createBookHandle = async (input: Partial<Book>, user: User) => {
    return await postRepository.save(postRepository.create({ ...input, user }));
};

export const getAllBooksHandle = async () => {
    return await Book.find({});
};

// export const findPost = async (req : Request) => {
//     const builder = Book.createQueryBuilder("post");

//     if (req.query.search) {
//         builder.where("post.title LIKE :search OR post.content LIKE :search", {
//             search: `%${req.query.search}%`,
//         });
//     }

//     if (req.query.sort) {
//         const sortQuery = req.query.sort === "-price" ? "DESC" : "ASC";
//         builder.orderBy("post.title", sortQuery);
//     }

//     return await builder.getMany();
// };

// export const getPostUserHandle = async (user: User) => {
//     const allPosts = await Book.find({ where: { user } });
//     return allPosts;
// };
