import Head from "next/head";
import { useRouter } from "next/router";
import useBreadcrumbs from "@/hooks/useBreadcrumbs";

import FormCreatorBook from "@/components/FormCreatorBook";
import ContentFormEditBook from "@/components/FormCreatorBook/ContentFormEditBook";
import { GetServerSideProps, NextPage } from "next";
import { checkToken, getBook } from "@/lib/api";
import axios from "axios";
import { useDispatch } from "react-redux";
import { bookUserEditHandle } from "@/redux/bookSlice";

export interface CreatorEditBookProps {
    book?: any;
}

const CreatorEditBook: NextPage<CreatorEditBookProps> = ({ book }) => {
    const router = useRouter();
    const newRouter = useBreadcrumbs(router);
    const dispatch = useDispatch()

    // if(book) {
    //     dispatch(bookUserEditHandle(book))
    // }

    return (
        <>
            <Head>
                <title>{newRouter[newRouter.length - 1].title} - HoBa</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <FormCreatorBook
                    title="Sửa truyện"
                    description="Dù báo lỗi đúng hay sai nhớ đều phải trả lời để BTV có thể đóng báo lỗi"
                >
                    {book ? <ContentFormEditBook book={book}/> : <p>Không tìm thấy thông tin</p>}
                </FormCreatorBook>
            </main>
        </>
    );
};

export const getServerSideProps : GetServerSideProps<CreatorEditBookProps> = async (context) => {
    
    const token = context.req?.headers.cookie?.split("A_token=")[1];
    const isToken = await checkToken(token as string);

    if(!isToken) {
        return {
            props: {
                book: null
            }
        }
    }

    const book = await getBook(context.params?.id as string);

    if (book.data.success) {
        return {
            props: {
                book: book.data.book
            }
        };
    } else {
        return {
            props: {
                book: null
            }
        };
    }
};

export default CreatorEditBook;
