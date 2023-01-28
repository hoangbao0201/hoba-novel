import Link from "next/link";
import { useRef } from "react";
import styles from "./Sidebar.module.scss";
import classNames from "classnames/bind";

import useClickOutSide from "@/hooks/useClickOutSide";
import OverlayLayout from "@/components/Layouts/OverlayLayout";

const cx = classNames.bind(styles);

export interface SidebarProps {
    tab?: any;
    route?: string;
    isShow?: boolean;
    handleToggle?: any;
}

const dataContentSide = [
    {
        title: "Thêm Bản Thảo",
        children: [
            {
                item: "Thêm Bản Thảo",
                linkItem: "/creator/drafts/new",
            },
            {
                item: "Các Bản Thảo",
                linkItem: "/creator/drafts",
            },
            {
                item: "Thêm Truyện Mới",
                linkItem: "/creator/books/new",
            },
            {
                item: "Truyện Của Tôi",
                linkItem: "/creator/books",
            },
            {
                item: "Báo Lỗi",
                linkItem: "/creator/books/issues",
            },
            {
                item: "Thống Kê",
                linkItem: "/creator/books/statistics",
            },
            {
                item: "Tư Liệu",
                linkItem: "/creator/books/documents",
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
                                        className={cx(
                                            "side-item",
                                            `${
                                                item.linkItem.split(
                                                    "/creator/"
                                                )[1] === tab && "active"
                                            }`
                                        )}
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
                            <Link href="/">
                                <h2 className={cx("logo")}>HOBA NOVEL</h2>
                            </Link>
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
