import { useState } from "react";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

import Sidebar from "./Sidebar";
import { iconBars } from "public/icons";
import ContentFormDraftsNew from "./ContentFormDraftsNew";
import styles from "./FormCreatorBook.module.scss";
import OverlayLayout from "../Layouts/OverlayLayout";

export interface FormCreatorBookProps {
    tab?: any;
}
const FormCreatorBook = ({ tab }: FormCreatorBookProps) => {
    const [isNavbar, setIsNavbar] = useState<boolean>(false);

    const handleCloseSidebar = () => {
        setIsNavbar(false);
    };

    return (
        <div className={cx("wrapper")}>
            <div className={cx("container")}>
                <OverlayLayout active={isNavbar}>
                    <Sidebar
                        isShow={isNavbar}
                        handleToggle={handleCloseSidebar}
                    />
                </OverlayLayout>
                <Sidebar isShow={isNavbar} />

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
