import classNames from "classnames/bind";
import { NextPage } from "next";
import ContentWrapper from "../Layouts/ContentWrapper";
import BooksRaiting from "./BookRaiting";
import CardsBook from "./CardsBook";
import styles from "./FormHome.module.scss";
const cx = classNames.bind(styles);

export interface FormHomeProps {
    books?: any;
}
const FormHome: NextPage<FormHomeProps> = ({ books }: any) => {
    let ContentListBookHead = null;
    // if (books) {
    //     ContentListBookHead = (

    //     );
    // }

    console.log(books);

    return (
        <ContentWrapper>
            <div className={cx("list-post")}>
                {books ? (
                    <>
                        {books.map((book: any) => {
                            return <CardsBook data={book} key={book.id}/>;
                        })}
                    </>
                ) : (
                    <p>Không có</p>
                )}

                {/* <CardsBook />
                <CardsBook />
                <CardsBook />
                <CardsBook />
                <CardsBook />
                <CardsBook /> */}
            </div>
            <div className={cx("raiting")}>
                <BooksRaiting />
            </div>
        </ContentWrapper>
    );
};

export default FormHome;
