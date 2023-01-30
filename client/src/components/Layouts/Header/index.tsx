import Link from "next/link";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
const cx = classNames.bind(styles);

import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useRef, useState } from "react";
import useClickOutSide from "@/hooks/useClickOutSide";
import { logoutUser } from "@/redux/userSlice";

export interface HeaderProps {}

const Header = () => {
    const refDropdown = useRef<any>()
    const [isShowDropdown, setIsShowDropdown] = useState(false);
    const { currentUser, isAuthenticated } = useSelector(
        (state: any) => state.user
    );
    const dispatch = useDispatch()

    const eventHiddentDropdownAccout = () => {
        setIsShowDropdown(false)
    }

    const eventLogoutUser = (e : any) => {
        e.preventDefault();
        dispatch(logoutUser());
    }

    useClickOutSide(refDropdown, eventHiddentDropdownAccout);

    return (
        <div className={cx("wrapper")}>
            <div className={cx("container")}>
                <div className={cx("content-item")}>
                    <Navbar />
                    <Link className={cx("logo")} href="/">
                        HOBA NOVEL
                    </Link>
                </div>

                <div className={cx("content-search")}>
                    {/* <label className={cx("grid-icon")} htmlFor="inputSearch">{iconSearch}</label> */}
                    <input
                        id="inputSearch"
                        className={cx("input-search")}
                        type="input"
                        placeholder="Tìm kiếm"
                    />
                </div>

                <div className={cx("content-accout")}>
                    {isAuthenticated ? (
                        <>
                            <div className={cx("accout-user")} onClick={() => setIsShowDropdown(true)}>
                                <div className={cx("avatar")}>
                                    <img
                                        className={cx("image")}
                                        src="/images/avatar-default.png"
                                    />
                                </div>
                                <div className={cx("name")}>
                                    {currentUser.name}
                                </div>
                            </div>
                            <div ref={refDropdown} className={cx("accout-dropdown", `${isShowDropdown && "show"}`)}>
                                <div className={cx("dropdown-header")}>
                                    <div className={cx("dropdown-avatar")}>
                                        <img
                                            className={cx("image")}
                                            src="/images/avatar-default.png"
                                        />
                                    </div>
                                    <div className={cx("dropdown-name")}>
                                        {currentUser.name}
                                    </div>
                                </div>
                                <div className={cx("dropdown-container")}>
                                    <Link href={`/user/${currentUser.username}`}>
                                        <div className={cx("dropdown-item")}>
                                            Hồ sơ
                                        </div>
                                    </Link>
                                    <Link href="/">
                                        <div className={cx("dropdown-item")}>
                                            Tủ truyện
                                        </div>
                                    </Link>
                                    <Link href="/">
                                        <div className={cx("dropdown-item")}>
                                            Cài đặt
                                        </div>
                                    </Link>
                                    <Link href="/" onClick={eventLogoutUser}>
                                        <div className={cx("dropdown-item")}>
                                            Đăng xuất
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <Link href="/auth/login">
                                <div
                                    className={cx(
                                        "accout-button",
                                        "button-login"
                                    )}
                                >
                                    Đăng nhập
                                </div>
                            </Link>
                            <Link href="/auth/register">
                                <div
                                    className={cx(
                                        "accout-button",
                                        "button-register"
                                    )}
                                >
                                    Đăng kí
                                </div>
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;
