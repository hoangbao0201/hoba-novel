import { useState } from "react";
import classNames from "classnames/bind";
import styles from "./FormCreatorBook.module.scss";
const cx = classNames.bind(styles);

import Sidebar from "./Sidebar";
import { iconBars } from "public/icons";
import ContentFormDraftsNew from "./ContentFormDraftsNew";
import ContentFormNewBook from "./ContentFormNewBook";
import ContentFormMyBooks from "./ContentFormMyBooks";

export interface FormCreatorBookProps {
    tab?: any;
    route?: any;
}

function handleToggleContentForm(tab: FormCreatorBookProps) {
    switch (tab) {
        case "drafts-new":
            return (
                <div className={cx("content")}>
                    <div className={cx("content-header")}>
                        <h2 className={cx("title")}>Thêm bản thảo</h2>
                        <h4 className={cx("description")}>
                            Bạn có thể thêm bản thảo và xuất bản nó ngay lập tức
                            ở đây, hoặc đơn giản chỉ muốn viết một đoạn và để nó
                            tự lưu lại
                        </h4>
                    </div>

                    <div className={cx("content-form")}>
                        <ContentFormDraftsNew />
                    </div>
                </div>
            );
        case "drafts":
            return (
                <div className={cx("content")}>
                    <div className={cx("content-header")}>
                        <h2 className={cx("title")}>Các bản thảo</h2>
                        <h4 className={cx("description")}>
                            Đây là tập hợp danh sách các bản thảo chưa xuất bản
                            của bạn
                        </h4>
                    </div>

                    <div className={cx("content-form")}>
                        <p>Tính năng đang cập nhật</p>
                    </div>
                </div>
            );
        case "books-new":
            return (
                <div className={cx("content")}>
                    <div className={cx("content-header")}>
                        <h2 className={cx("title")}>Thêm truyện mới</h2>
                        <h4 className={cx("description")}>
                            Bắt đầu sáng tạo thế giới của riêng bạn
                        </h4>
                    </div>

                    <div className={cx("content-form")}>
                        <ContentFormNewBook />
                    </div>
                </div>
            );
        case "books":
            return (
                <div className={cx("content")}>
                    <div className={cx("content-header")}>
                        <h2 className={cx("title")}>Truyện của tôi</h2>
                        <h4 className={cx("description")}>
                            Danh sách các truyện bạn đã đăng
                        </h4>
                    </div>

                    <div className={cx("content-form")}>
                        <ContentFormMyBooks />
                    </div>
                </div>
            );
        case "books-issues":
            return (
                <div className={cx("content")}>
                    <div className={cx("content-header")}>
                        <h2 className={cx("title")}>Báo lỗi</h2>
                        <h4 className={cx("description")}>
                            Dù báo lỗi đúng hay sai nhớ đều phải trả lời để BTV
                            có thể đóng báo lỗi
                        </h4>
                    </div>

                    <div className={cx("content-form")}>
                        <p>Tính năng đang cập nhật</p>
                    </div>
                </div>
            );
        case "books-statistics":
            return (
                <div className={cx("content")}>
                    <div className={cx("content-header")}>
                        <h2 className={cx("title")}>Thống kê</h2>
                        <h4 className={cx("description")}>
                            Bạn có thể xem tất tần tật các loại thống kê của
                            truyện mình ở đây
                        </h4>
                    </div>

                    <div className={cx("content-form")}>
                        <p>Tính năng đang cập nhật</p>
                    </div>
                </div>
            );
        case "books-documents":
            return (
                <div className={cx("content")}>
                    <div className={cx("content-header")}>
                        <h2 className={cx("title")}>Tư liệu</h2>
                        <h4 className={cx("description")}>
                            Lưu trữ các tư liệu phục vụ cho việc viết truyện của
                            bạn
                        </h4>
                    </div>

                    <div className={cx("content-form")}>
                        <p>Tính năng đang cập nhật</p>
                    </div>
                </div>
            );
    }

    // if( route == "/creator/book" ) {
    return (
        <div className={cx("content")}>
            <div className={cx("content-header")}>
                <h2 className={cx("title")}>Tin tức mới</h2>
                {/* <h4 className={cx("description")}>
                        Thông báo
                    </h4> */}
            </div>

            <div className={cx("content-form")}>
                <p>Tính năng đang cập nhật</p>
            </div>
        </div>
    );
    // }

    // else {
    //     <div className={cx("content")}>
    //         <div className={cx("content-header")}>
    //             <h2 className={cx("title")}>Tải lại trang</h2>
    //             {/* <h4 className={cx("description")}>
    //                 Thông báo
    //             </h4> */}
    //         </div>
    //     </div>
    // }
}

const FormCreatorBook = ({ tab, route }: FormCreatorBookProps) => {
    const [isNavbar, setIsNavbar] = useState<boolean>(false);

    const handleCloseSidebar = () => {
        setIsNavbar(false);
    };

    return (
        <div className={cx("wrapper")}>
            <div className={cx("container")}>
                <Sidebar
                    tab={tab}
                    route={route}
                    isShow={isNavbar}
                    handleToggle={handleCloseSidebar}
                />

                <div className={cx("header")}>
                    <div className={cx("container")}>
                        <button
                            className={cx("button-show")}
                            onClick={() => setIsNavbar(true)}
                        >
                            {iconBars}
                        </button>
                    </div>
                </div>

                {handleToggleContentForm(tab)}

                <div className={cx("footer")}>
                    <div className={cx("footer-container")}>
                        © hobanovel.vervel.app 2023
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormCreatorBook;
