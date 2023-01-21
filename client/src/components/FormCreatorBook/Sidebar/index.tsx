import useClickOutSide from "@/hooks/useClickOutSide";
import classNames from "classnames/bind";
import Link from "next/link";
import { useRef } from "react";

import styles from "./Sidebar.module.scss";
const cx = classNames.bind(styles);

export interface SidebarProps {
    isShow?: boolean
    handleToggle?: Function
}

const Sidebar = ({ isShow, handleToggle } : SidebarProps) => {
    const sidebar = useRef<HTMLDivElement>(null);

    // const handleCloseNavbar = () => {
    //     // setIsNavbar(false);
    // };
    useClickOutSide(sidebar, handleToggle);

    return (
        <div ref={sidebar} className={cx("wrapper", `${isShow && "show"}`)}>
            <div className={cx("container")}>
                <div className={cx("side-header")}>
                    <Link href="/">HOBA NOVEL</Link>
                </div>
                <div className={cx("side-content")}>
                    <div className={cx("side-title")}>Bản thảo</div>
                    <div className={cx("side-item", "active")}>
                        <Link href="/" className={cx("link-item")}>
                            Thêm Bản Thảo
                        </Link>
                    </div>
                    <div className={cx("side-item")}>
                        <Link href="/" className={cx("link-item")}>
                            Các Bản Thảo
                        </Link>
                    </div>

                    <div className={cx("side-title")}>Sách truyện</div>
                    <div className={cx("side-item")}>
                        <Link href="/" className={cx("link-item")}>
                            Thêm Truyện Mới
                        </Link>
                    </div>
                    <div className={cx("side-item")}>
                        <Link href="/" className={cx("link-item")}>
                            Truyện Của Tôi
                        </Link>
                    </div>
                    <div className={cx("side-item")}>
                        <Link href="/" className={cx("link-item")}>
                            Báo Lỗi
                        </Link>
                    </div>
                    <div className={cx("side-item")}>
                        <Link href="/" className={cx("link-item")}>
                            Thống Kê
                        </Link>
                    </div>
                    <div className={cx("side-item")}>
                        <Link href="/" className={cx("link-item")}>
                            Tư Liệu
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
