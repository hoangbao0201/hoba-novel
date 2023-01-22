import Link from "next/link";
import { useRef } from "react";
import styles from "./Sidebar.module.scss";
import classNames from "classnames/bind";

import useClickOutSide from "@/hooks/useClickOutSide";
import OverlayLayout from "@/components/Layouts/OverlayLayout";

const cx = classNames.bind(styles);

export interface SidebarProps {
    tab?: any;
    route?: string
    isShow?: boolean;
    handleToggle?: any;
}

const dataContentSide = [
    {
        title: "Thêm Bản Thảo",
        children: [
            {
                item: "Thêm Bản Thảo",
                linkItem: "/creator/book?tab=drafts-new",
            },
            {
                item: "Các Bản Thảo",
                linkItem: "/creator/book?tab=drafts",
            },
            {
                item: "Thêm Truyện Mới",
                linkItem: "/creator/book?tab=books-new",
            },
            {
                item: "Truyện Của Tôi",
                linkItem: "/creator/book?tab=books",
            },
            {
                item: "Báo Lỗi",
                linkItem: "/creator/book?tab=books-issues",
            },
            {
                item: "Thống Kê",
                linkItem: "/creator/book?tab=books-statistics",
            },
            {
                item: "Tư Liệu",
                linkItem: "/creator/book?tab=books-documents",
            },
        ],
    },
];

const Sidebar = ({ tab, isShow, handleToggle }: SidebarProps) => {
    const refSide = useRef<HTMLDivElement>(null);

    useClickOutSide(refSide, handleToggle);

    const bodyContentSide = (
        <>
            {dataContentSide.map((itemTitle, indexTitle) => {
                return (
                    <div key={indexTitle}>
                        <div className={cx("side-title")}>
                            {itemTitle.title}
                        </div>
                        <>
                            {itemTitle.children.map((item, index) => {
                                return (
                                    <div
                                        className={cx("side-item", `${item.linkItem.split("tab=")[1] === tab && "active"}`)}
                                        key={index}
                                        onClick={() => handleToggle()}
                                    >
                                        <Link
                                            href={item.linkItem}
                                            className={cx("link-item")}
                                        >
                                            {item.item}
                                        </Link>
                                    </div>
                                );
                            })}
                        </>
                    </div>
                );
            })}
        </>
    );

    return (
        <>
            <OverlayLayout active={isShow}>
                <div
                    ref={refSide}
                    className={cx("wrapper", `${isShow && "show"}`)}
                >
                    <div className={cx("container")}>
                        <div className={cx("side-header")}>
                            <Link href="/">HOBA NOVEL</Link>
                        </div>
                        <div className={cx("side-content")}>
                            {bodyContentSide}
                        </div>
                    </div>
                </div>
            </OverlayLayout>
        </>
    );
};

export default Sidebar;

{
    /* <div className={cx("side-title")}>Bản thảo</div>
    <div className={cx("side-item", "active")}>
        <Link
            href="/creator/book?tab=drafts-new"
            className={cx("link-item")}
        >
            Thêm Bản Thảo
        </Link>
    </div>
    <div className={cx("side-item")}>
        <Link
            href="/creator/book?tab=drafts"
            className={cx("link-item")}
        >
            Các Bản Thảo
        </Link>
    </div>

    <div className={cx("side-title")}>Sách truyện</div>
    <div className={cx("side-item")}>
        <Link
            href="/creator/book?tab=books-new"
            className={cx("link-item")}
        >
            Thêm Truyện Mới
        </Link>
    </div>
    <div className={cx("side-item")}>
        <Link
            href="/creator/book?tab=books"
            className={cx("link-item")}
        >
            Truyện Của Tôi
        </Link>
    </div>
    <div className={cx("side-item")}>
        <Link
            href="/creator/book?tab=books-issues"
            className={cx("link-item")}
        >
            Báo Lỗi
        </Link>
    </div>
    <div className={cx("side-item")}>
        <Link
            href="/creator/book?tab=books-statistics"
            className={cx("link-item")}
        >
            Thống Kê
        </Link>
    </div>
    <div className={cx("side-item")}>
        <Link
            href="/creator/book?tab=books-documents"
            className={cx("link-item")}
        >
            Tư Liệu
        </Link>
    </div> */
}
