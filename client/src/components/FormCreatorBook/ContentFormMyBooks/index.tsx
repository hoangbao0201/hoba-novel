import axios from "axios";
import Link from "next/link";
import classNames from "classnames/bind";
import styles from "./ContentFormMyBooks.module.scss";

import {
    iconChartLine,
    iconInbox,
    iconList,
    iconPenToSquare,
    iconPlus,
    iconUpload,
} from "public/icons";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyBooks } from "@/redux/bookSlice";

const cx = classNames.bind(styles);

export interface ContentFormMyBooksProps {
    books?: any
}

const ContentFormMyBooks = ({ books } : ContentFormMyBooksProps) => {

    // console.log(books)

    // const { bookLoading, booksUser } = useSelector((state: any) => state.book);
    // const dispatch = useDispatch();

    // const eventGetMyBooks = async () => {
    //     const resMyBooks = await axios.get("/api/books/my-books");

    //     if (resMyBooks.data.success) {
    //         dispatch(getMyBooks(resMyBooks.data.books));
    //     }

    // };

    // useEffect(() => {
    //     eventGetMyBooks();
    // }, []);

    // if (bookLoading) {
    //     return null;
    // } else if (!booksUser) { 
        // return null;
    // }

    return (
        <div className={cx("wrapper")}>
            <div className={cx("content")}>
                {books.map((book: any) => {
                    return (
                        <div key={book.id} className={cx("card")}>
                            <div className={cx("container")}>
                                <div className={cx("head")}>
                                    <h2 className={cx("title")}>
                                        {book.title}
                                    </h2>
                                </div>

                                <div className={cx("status", "warning")}>
                                    <p className={cx("text")}>
                                        Tình trạng: Chưa xuất bản
                                    </p>
                                </div>

                                <div className={cx("description")}>
                                    <p className={cx("text")}>
                                        Opps! Truyện này của bạn chưa có chương
                                        nào. Ấn vào dấu + bên dưới để bắt đầu
                                        thêm chương cho truyện thôi nào, nếu
                                        chưa biết phải viết gì thì ghé qua mục
                                        Kiến Thức Cơ Bản để tham khảo nhé
                                    </p>
                                </div>

                                <div className={cx("action")}>
                                    <div className={cx("list-button")}>
                                        <Link href="#" className={cx("button")}>
                                            {iconPlus}
                                        </Link>
                                        <Link href="#" className={cx("button")}>
                                            {iconList}
                                        </Link>
                                        <Link href="#" className={cx("button")}>
                                            {iconUpload}
                                        </Link>
                                        <Link href={`/creator/books/edit/${book.id}`} className={cx("button")}>
                                            {iconPenToSquare}
                                        </Link>
                                        <Link href="#" className={cx("button")}>
                                            {iconChartLine}
                                        </Link>
                                        <Link href="#" className={cx("button")}>
                                            {iconInbox}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ContentFormMyBooks;
