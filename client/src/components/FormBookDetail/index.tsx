import classNames from "classnames/bind";
import styles from "./FormBookDetail.module.scss";

import ContentWrapper from "../Layouts/ContentWrapper";

const cx = classNames.bind(styles);

export interface FormBookDetailProps {}
const FormBookDetail = () => {
    return (
        <ContentWrapper>
            <div className={cx("head")}>
                <div className={cx("thumbnail")}>
                    <img className={cx("image")} src="https://static.cdnno.com/poster/quang-am-chi-ngoai/300.jpg?1655013821"/>
                </div>
                <div className={cx("detail")}>
                    <div className={cx("grid-name")}>
                        <h2 className={cx("title")}>Vừa Thành Tiên Thần Con Cháu Cầu Ta Xuất Sơn</h2>
                    </div>
                    <div className={cx("category")}>
                        <div className={cx("item")}>Tiên Hiệp</div>
                    </div>
                    <div className={cx("action")}>
                        <div className={cx("grid-button")}>
                            <button>Đọc truyện</button>
                            <button>Đánh dấu</button>
                            <button>Đề cử</button>
                        </div>
                    </div>
                </div>
            </div>
        </ContentWrapper>
    );
};

export default FormBookDetail;
