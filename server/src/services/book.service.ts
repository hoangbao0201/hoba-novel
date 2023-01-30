// import { Request } from "express"
import { User } from "../entities/User";
import { Book } from "../entities/Book";
import { AppDataSource } from "../utils/data-source";
import { convertTextRemoveAccents } from "../utils/convertTextRemoveAccents";

const postRepository = AppDataSource.getRepository(Book);

export const createBookHandle = async (input: Partial<Book>, user: User) => {

    const convertTitle = convertTextRemoveAccents(input.title as string);

    return await postRepository.save(postRepository.create({ ...input, link: convertTitle, user }));
};

export const getAllBooksHandle = async () => {
    return await Book.find({});
};

export const getBookById = async (id : string) => {
    const book = await Book
        .createQueryBuilder("book")
        .leftJoinAndSelect('book.image', 'image')
        .where("book.id = :id", { id: id })
        .getOne();

    return book;
}

export const getMyBooksHandle = async (userId: User) => {
    const books = await Book
        .createQueryBuilder("book")
        .leftJoinAndSelect('book.image', 'image')
        .where("book.userId = :id", { id: userId })
        .getMany();

    return books;
};
