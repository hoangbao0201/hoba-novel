import styles from "./BookRaiting.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

import {
    iconBook,
    iconGlasses,
    iconShowEye,
    iconTopOne,
    iconTopThree,
    iconTopTwo,
    iconUserEdit,
} from "public/icons";
import { ConvertNumber } from "@/hooks/useConvertNumber";
import { useState } from "react";
import Link from "next/link";

export interface BooksRaitingProps {}

const DataListBooksRaiting = [
    {
        title: "Đọc nhiều",
        content: [
            {
                name: "Linh Khí Khôi Phục, Trọng Sinh Cháu Gái Hướng Ta Ngả Bài",
                view: 325876,
                author: "Hải Lạc Thiên Lam",
                status: ["Huyền Huyễn", "Tiên Hiệp"],
                thumbnail: {
                    url: "https://static.cdnno.com/poster/linh-khi-khoi-phuc-trong-sinh-chau-gai-huong-ta-nga-bai/150.jpg?1671477682",
                },
            },
            {
                name: "Vạn Cổ Thần Đế",
                view: 28735926,
                author: "DarkHero",
                status: ["Huyền Huyễn", "Tiên Hiệp"],
                thumbnail: {
                    url: "https://static.cdnno.com/poster/van-co-than-de/150.jpg?1585205583",
                },
            },
            {
                name: "Đỉnh Cấp Khí Vận, Lặng Lẽ Tu Luyện Ngàn Năm",
                view: 29145894,
                author: "Nhâm Ngã Tiếu",
                status: ["Huyền Huyễn", "Tiên Hiệp"],
                thumbnail: {
                    url: "https://static.cdnno.com/poster/dinh-cap-khi-van-lang-le-tu-luyen-ngan-nam/150.jpg?1614159439",
                },
            },
            {
                name: "Đế Bá",
                view: 9845962,
                author: "Yếm Bút Tiêu Sinh",
                status: ["Huyền Huyễn", "Tiên Hiệp"],
                thumbnail: {
                    url: "https://static.cdnno.com/poster/de-ba/150.jpg?1585205580",
                },
            },
            {
                name: "Cửu Tinh Bá Thể Quyết",
                view: 8812389,
                author: "Bình Phàm Ma Thuật Sư",
                status: ["Huyền Huyễn", "Tiên Hiệp"],
                thumbnail: {
                    url: "https://static.cdnno.com/poster/cuu-tinh-ba-the-quyet/150.jpg?1634010296",
                },
            },
            {
                name: "Vừa Thành Tiên Thần, Con Cháu Cầu Ta Xuất Sơn",
                view: 810692,
                author: "Nhâm Ngã Tiếu",
                status: ["Huyền Huyễn", "Tiên Hiệp"],
                thumbnail: {
                    url: "https://static.cdnno.com/poster/vua-thanh-tien-than-con-chau-cau-ta-dang-co/150.jpg?1665195835",
                },
            },
            {
                name: "Toàn Dân Chuyển Chức: Điên Rồi, Ngươi Quản Cái Này Gọi Hộ Thuẫn?",
                view: 823589,
                author: "Lạc Lạc Vô Minh",
                status: ["Huyền Huyễn", "Tiên Hiệp"],
                thumbnail: {
                    url: "https://static.cdnno.com/poster/toan-dan-chuyen-chuc-dien-roi-nguoi-quan-cai-nay-goi-ho-thuan/150.jpg?1671908656",
                },
            },
            {
                name: "Vô Thượng Thần Đế",
                view: 17369456,
                author: "Oa Ngưu Cuồng Bôn",
                status: ["Huyền Huyễn", "Tiên Hiệp"],
                thumbnail: {
                    url: "https://static.cdnno.com/poster/than-de-vo-thuong/150.jpg?1596110562",
                },
            },
            {
                name: "Bắt Đầu Thu Hoạch Được Trùng Đồng, Cưới Tuyệt Sắc Nữ Đế!",
                view: 105489,
                author: "Phong Mật Phối Khổ Qua",
                status: ["Huyền Huyễn", "Tiên Hiệp"],
                thumbnail: {
                    url: "https://static.cdnno.com/poster/bat-dau-thu-hoach-duoc-trung-dong-cuoi-tuyet-sac-nu-de/150.jpg?1671679414",
                },
            },
            {
                name: "Ta Là Tham Quan, Các Nàng Lại Nói Ta Là Trung Thần!",
                view: 946234,
                author: "Thanh Chưng",
                status: ["Huyền Huyễn", "Tiên Hiệp"],
                thumbnail: {
                    url: "https://static.cdnno.com/poster/ta-la-tham-quan-cac-nang-lai-noi-ta-la-trung-than/150.jpg?1670033247",
                },
            },
        ],
    },
    {
        title: "Thịnh hành",
        content: [
            {
                name: "Vừa Thành Tiên Thần, Con Cháu Cầu Ta Xuất Sơn",
                view: 835946,
                author: "Xuân Phong Yếu Khai Tâm",
                status: ["Huyền Huyễn", "Tiên Hiệp"],
                thumbnail: {
                    url: "https://static.cdnno.com/poster/vua-thanh-tien-than-con-chau-cau-ta-dang-co/300.jpg?1665195835",
                },
            },
            {
                name: "Toàn Dân Chuyển Chức: Điên Rồi, Ngươi Quản Cái Này Gọi Hộ Thuẫn?",
                view: 823589,
                author: "Lạc Lạc Vô Minh",
                status: ["Huyền Huyễn", "Tiên Hiệp"],
                thumbnail: {
                    url: "https://static.cdnno.com/poster/toan-dan-chuyen-chuc-dien-roi-nguoi-quan-cai-nay-goi-ho-thuan/150.jpg?1671908656",
                },
            },
            {
                name: "Vô Thượng Thần Đế",
                view: 17369456,
                author: "Oa Ngưu Cuồng Bôn",
                status: ["Huyền Huyễn", "Tiên Hiệp"],
                thumbnail: {
                    url: "https://static.cdnno.com/poster/than-de-vo-thuong/150.jpg?1596110562",
                },
            },
            {
                name: "Bắt Đầu Thu Hoạch Được Trùng Đồng, Cưới Tuyệt Sắc Nữ Đế!",
                view: 105489,
                author: "Phong Mật Phối Khổ Qua",
                status: ["Huyền Huyễn", "Tiên Hiệp"],
                thumbnail: {
                    url: "https://static.cdnno.com/poster/bat-dau-thu-hoach-duoc-trung-dong-cuoi-tuyet-sac-nu-de/150.jpg?1671679414",
                },
            },
            {
                name: "Ta Là Tham Quan, Các Nàng Lại Nói Ta Là Trung Thần!",
                view: 946234,
                author: "Thanh Chưng",
                status: ["Huyền Huyễn", "Tiên Hiệp"],
                thumbnail: {
                    url: "https://static.cdnno.com/poster/ta-la-tham-quan-cac-nang-lai-noi-ta-la-trung-than/150.jpg?1670033247",
                },
            },
            {
                name: "Vạn Cổ Thần Đế",
                view: 28735926,
                author: "DarkHero",
                status: ["Huyền Huyễn", "Tiên Hiệp"],
                thumbnail: {
                    url: "https://static.cdnno.com/poster/van-co-than-de/150.jpg?1585205583",
                },
            },
            {
                name: "Đỉnh Cấp Khí Vận, Lặng Lẽ Tu Luyện Ngàn Năm",
                view: 29145894,
                author: "Nhâm Ngã Tiếu",
                status: ["Huyền Huyễn", "Tiên Hiệp"],
                thumbnail: {
                    url: "https://static.cdnno.com/poster/dinh-cap-khi-van-lang-le-tu-luyen-ngan-nam/150.jpg?1614159439",
                },
            },
            {
                name: "Đế Bá",
                view: 9845962,
                author: "Yếm Bút Tiêu Sinh",
                status: ["Huyền Huyễn", "Tiên Hiệp"],
                thumbnail: {
                    url: "https://static.cdnno.com/poster/de-ba/150.jpg?1585205580",
                },
            },
            {
                name: "Cửu Tinh Bá Thể Quyết",
                view: 8812389,
                author: "Bình Phàm Ma Thuật Sư",
                status: ["Huyền Huyễn", "Tiên Hiệp"],
                thumbnail: {
                    url: "https://static.cdnno.com/poster/cuu-tinh-ba-the-quyet/150.jpg?1634010296",
                },
            },
            {
                name: "Vừa Thành Tiên Thần, Con Cháu Cầu Ta Xuất Sơn",
                view: 810692,
                author: "Nhâm Ngã Tiếu",
                status: ["Huyền Huyễn", "Tiên Hiệp"],
                thumbnail: {
                    url: "https://static.cdnno.com/poster/vua-thanh-tien-than-con-chau-cau-ta-dang-co/150.jpg?1665195835",
                },
            },
        ],
    },
    {
        title: "Đề cử",
        content: [
            {
                name: "Người Tại Tu Tiên Thế Giới, Cùng Ai Đều Có Thể Chia Năm Năm",
                view: 491658,
                author: "Xuân Phong Yếu Khai Tâm",
                status: ["Huyền Huyễn", "Tiên Hiệp"],
                thumbnail: {
                    url: "https://static.cdnno.com/poster/nguoi-tai-tu-tien-the-gioi-cung-ai-deu-co-the-chia-nam-nam/300.jpg?1661965828",
                },
            },
            {
                name: "Toàn Dân Chuyển Chức: Điên Rồi, Ngươi Quản Cái Này Gọi Hộ Thuẫn?",
                view: 823589,
                author: "Lạc Lạc Vô Minh",
                status: ["Huyền Huyễn", "Tiên Hiệp"],
                thumbnail: {
                    url: "https://static.cdnno.com/poster/toan-dan-chuyen-chuc-dien-roi-nguoi-quan-cai-nay-goi-ho-thuan/150.jpg?1671908656",
                },
            },
            {
                name: "Vô Thượng Thần Đế",
                view: 17369456,
                author: "Oa Ngưu Cuồng Bôn",
                status: ["Huyền Huyễn", "Tiên Hiệp"],
                thumbnail: {
                    url: "https://static.cdnno.com/poster/than-de-vo-thuong/150.jpg?1596110562",
                },
            },
            {
                name: "Bắt Đầu Thu Hoạch Được Trùng Đồng, Cưới Tuyệt Sắc Nữ Đế!",
                view: 105489,
                author: "Phong Mật Phối Khổ Qua",
                status: ["Huyền Huyễn", "Tiên Hiệp"],
                thumbnail: {
                    url: "https://static.cdnno.com/poster/bat-dau-thu-hoach-duoc-trung-dong-cuoi-tuyet-sac-nu-de/150.jpg?1671679414",
                },
            },
            {
                name: "Ta Là Tham Quan, Các Nàng Lại Nói Ta Là Trung Thần!",
                view: 946234,
                author: "Thanh Chưng",
                status: ["Huyền Huyễn", "Tiên Hiệp"],
                thumbnail: {
                    url: "https://static.cdnno.com/poster/ta-la-tham-quan-cac-nang-lai-noi-ta-la-trung-than/150.jpg?1670033247",
                },
            },
            {
                name: "Vạn Cổ Thần Đế",
                view: 28735926,
                author: "DarkHero",
                status: ["Huyền Huyễn", "Tiên Hiệp"],
                thumbnail: {
                    url: "https://static.cdnno.com/poster/van-co-than-de/150.jpg?1585205583",
                },
            },
            {
                name: "Đỉnh Cấp Khí Vận, Lặng Lẽ Tu Luyện Ngàn Năm",
                view: 29145894,
                author: "Nhâm Ngã Tiếu",
                status: ["Huyền Huyễn", "Tiên Hiệp"],
                thumbnail: {
                    url: "https://static.cdnno.com/poster/dinh-cap-khi-van-lang-le-tu-luyen-ngan-nam/150.jpg?1614159439",
                },
            },
            {
                name: "Đế Bá",
                view: 9845962,
                author: "Yếm Bút Tiêu Sinh",
                status: ["Huyền Huyễn", "Tiên Hiệp"],
                thumbnail: {
                    url: "https://static.cdnno.com/poster/de-ba/150.jpg?1585205580",
                },
            },
            {
                name: "Cửu Tinh Bá Thể Quyết",
                view: 8812389,
                author: "Bình Phàm Ma Thuật Sư",
                status: ["Huyền Huyễn", "Tiên Hiệp"],
                thumbnail: {
                    url: "https://static.cdnno.com/poster/cuu-tinh-ba-the-quyet/150.jpg?1634010296",
                },
            },
            {
                name: "Vừa Thành Tiên Thần, Con Cháu Cầu Ta Xuất Sơn",
                view: 810692,
                author: "Nhâm Ngã Tiếu",
                status: ["Huyền Huyễn", "Tiên Hiệp"],
                thumbnail: {
                    url: "https://static.cdnno.com/poster/vua-thanh-tien-than-con-chau-cau-ta-dang-co/150.jpg?1665195835",
                },
            },
        ]
    }
];

const BoxContainerRaiting = ({ indexTabItem } : any) => {
    return (
        <div className={cx("list-box", `${indexTabItem}`)}>
            {DataListBooksRaiting.map((box, indexBox) => {
                return (
                    <div className={cx("grid-box")} key={indexBox}>
                        <div className={cx("box")}>
                            <h3 className={cx("box-title")}>{box.title}</h3>

                            <div className={cx("list-top-raiting")}>
                                {box.content.map((item: any, indexItem) => {
                                    const checkTopOne = indexItem === 0;
                                    const convertNumber = ConvertNumber(
                                        item.view
                                    );

                                    return (
                                        <div
                                            className={cx("box-row")}
                                            key={indexItem}
                                        >
                                            <div
                                                className={cx(
                                                    "icon-rank",
                                                    `${checkTopOne && "topOne"}`
                                                )}
                                            >
                                                {indexItem === 0 ? (
                                                    iconTopOne
                                                ) : indexItem === 1 ? (
                                                    iconTopTwo
                                                ) : indexItem === 2 ? (
                                                    iconTopThree
                                                ) : (
                                                    <span>{indexItem + 1}</span>
                                                )}
                                            </div>
                                            <div
                                                className={cx(
                                                    "detail-book",
                                                    `${!checkTopOne && "line"}`
                                                )}
                                            >
                                                <h3 className={cx("name-book")}>
                                                    <Link
                                                        className={cx(
                                                            "name-book-link"
                                                        )}
                                                        href="/"
                                                    >
                                                        {item.name}
                                                    </Link>
                                                </h3>
                                                <div
                                                    className={cx("view-book")}
                                                >
                                                    {convertNumber}
                                                    {checkTopOne && iconShowEye}
                                                </div>
                                                {checkTopOne && (
                                                    <>
                                                        <div
                                                            className={cx(
                                                                "author-book"
                                                            )}
                                                        >
                                                            {iconUserEdit}
                                                            {item.author}
                                                        </div>
                                                        <div
                                                            className={cx(
                                                                "category-book"
                                                            )}
                                                        >
                                                            {iconBook}
                                                            {item.status[1]}
                                                        </div>
                                                    </>
                                                )}
                                            </div>
                                            {checkTopOne && (
                                                <div
                                                    className={cx("grid-book")}
                                                >
                                                    <div className={cx("book")}>
                                                        <Link
                                                            className={cx(
                                                                "book-link"
                                                            )}
                                                            href="/"
                                                        >
                                                            <img
                                                                className={cx(
                                                                    "thumbnail-book"
                                                                )}
                                                                alt="thumbnail-book"
                                                                src={
                                                                    item
                                                                        .thumbnail
                                                                        .url
                                                                }
                                                            />
                                                        </Link>
                                                        <div
                                                            className={cx(
                                                                "book-cover-shadow"
                                                            )}
                                                        ></div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

const BooksRaiting = () => {
    const [indexTabItem, setIndexTabItem] = useState("tab1");

    const handleClickTabItem = (e: any) => {
        setIndexTabItem(e.target.id);
    };

    return (
        <div className={cx("container")}>
            <h2 className={cx("title")}>Xếp hạng sách</h2>
            <div className={cx("tablist", `${indexTabItem}`)}>
                <div
                    id="tab1"
                    className={cx("item")}
                    onClick={handleClickTabItem}
                >
                    Đọc nhiều
                </div>
                <div
                    id="tab2"
                    className={cx("item")}
                    onClick={handleClickTabItem}
                >
                    Thịnh hành
                </div>
                <div
                    id="tab3"
                    className={cx("item")}
                    onClick={handleClickTabItem}
                >
                    Đề cử
                </div>
                <div className={cx("devider")}></div>
            </div>
            <div className={cx("container-box")}>
                <BoxContainerRaiting indexTabItem={indexTabItem}/>
            </div>
        </div>
    );
};

export default BooksRaiting;