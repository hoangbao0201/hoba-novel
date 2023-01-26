import classNames from "classnames/bind";
import styles from "./FormBookDetail.module.scss";

import ContentWrapper from "../Layouts/ContentWrapper";
import FormDesciption from "./FormDescription";

const cx = classNames.bind(styles);

export interface FormBookDetailProps {}
const FormBookDetail = () => {
    return (
        <ContentWrapper>
            <div className={cx("head")}>
                <div className={cx("thumbnail")}>
                    <img
                        className={cx("image")}
                        src="https://static.cdnno.com/poster/quang-am-chi-ngoai/300.jpg?1655013821"
                    />
                </div>
                <div className={cx("detail")}>
                    <div className={cx("grid-name")}>
                        <h2 className={cx("title")}>
                            Vừa Thành Tiên Thần Con Cháu Cầu Ta Xuất Sơn
                        </h2>
                    </div>
                    <div className={cx("category")}>
                        <div className={cx("item")}>Nhâm Ngã Tiếu</div>
                        <div className={cx("item")}>Tiên Hiệp</div>
                        <div className={cx("item")}>Điền Đạm</div>
                        <div className={cx("item")}>
                            Đông Phương Huyền Huyễn
                        </div>
                        <div className={cx("item")}>Vô Địch</div>
                        <div className={cx("item")}>Góc Nhìn Nam</div>
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
                        <FormDesciption />
                    </div>
                </div>
            </div>
        </ContentWrapper>
    );
};

export default FormBookDetail;
