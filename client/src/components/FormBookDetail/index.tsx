import classNames from "classnames/bind";
import styles from "./FormBookDetail.module.scss";

import ContentWrapper from "../Layouts/ContentWrapper";
import FormDesciption from "./FormDescription";
import { NextPage } from "next";

const cx = classNames.bind(styles);

export interface FormBookDetailProps {
    book?: any
}
const FormBookDetail : NextPage<FormBookDetailProps> = ({ book }) => {
    return (
        <ContentWrapper>
            <div className={cx("head")}>
                <div className={cx("thumbnail")}>
                    <img
                        className={cx("image")}
                        src={book.image.url || "/images/book-default.png"}
                    />
                </div>
                <div className={cx("detail")}>
                    <div className={cx("grid-name")}>
                        <h2 className={cx("title")}>
                            {book.title}
                        </h2>
                    </div>
                    <div className={cx("category")}>
                        <div className={cx("item")}>{book.author}</div>
                        <div className={cx("item")}>{book.category}</div>
                        <div className={cx("item")}>{book.personality}</div>
                        <div className={cx("item")}>{book.scene}</div>
                        <div className={cx("item")}>{book.classify}</div>
                        <div className={cx("item")}>{book.viewFrame}</div>
                    </div>

                    <div className={cx("grid-number")}>
                        <div className={cx("detail-number", "number-chapter")}>
                            <div>312</div>
                            Chương
                        </div>
                        <div
                            className={cx(
                                "detail-number",
                                "number-chapter-week"
                            )}
                        >
                            <div>13</div>
                            Chương/tuần
                        </div>
                        <div className={cx("detail-number", "number-reads")}>
                            <div>1.6M</div>
                            Lượt đọc
                        </div>
                        <div className={cx("detail-number", "number-store")}>
                            <div>3249</div>
                            Cất giữ
                        </div>
                    </div>

                    <div className={cx("action")}>
                        <div className={cx("grid-button")}>
                            <button className={cx("button-action", "reading")}>
                                Đọc tiếp
                            </button>
                            <button className={cx("button-action", "bookmark")}>
                                Đánh dấu
                            </button>
                            <button
                                className={cx("button-action", "suggest-book")}
                            >
                                Đề cử
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx("page-content")}>
                <div className={cx("content-page")}>
                    <div className={cx("list-tab")}>
                        <button className={cx("button-tab", "active")}>
                            <div className={cx("item")}>Giới thiệu</div>
                        </button>
                        <button className={cx("button-tab")}>
                            <div className={cx("item")}>Đánh giá</div>
                        </button>
                        <button className={cx("button-tab")}>
                            <div className={cx("item")}>D.s chương</div>
                        </button>
                        <button className={cx("button-tab")}>
                            <div className={cx("item")}>Bình luận</div>
                        </button>
                        <button className={cx("button-tab")}>
                            <div className={cx("item")}>Hâm mộ</div>
                        </button>
                    </div>
                    <div className={cx("tab-content")}>
                        <FormDesciption description={book.description} />
                    </div>
                </div>
            </div>
        </ContentWrapper>
    );
};

export default FormBookDetail;
