import { AppDataSource } from "../utils/data-source";
import { Image } from "../entities/Image";
import { Book } from "../entities/Book";

const imageRepository = AppDataSource.getRepository(Image);

export const createImageBookHandle: any = async (
    input: Partial<Image>,
    book: Book
) => {
    try {

        let image = await imageRepository
            .createQueryBuilder("image")
            .where("image.bookId = :bookId", { bookId: book.id })
            .getOne();

        if (!image) {
            image = imageRepository.create({ ...input, book });
        } else {
            image.publicId = input.publicId as string;
            image.url = input.url as string;
        }
        return await imageRepository.save(image);

        // const newImage = new Image();
        // newImage.publicId = input.publicId as string;
        // newImage.url = input.url as string;
        // newImage.book = book;

        // await imageRepository.save(newImage);

        // return image;

    } catch (error) {
        console.error(error);
        return null;
    }
};
