import Link from "next/link";
import { useRef, useState } from "react";

import classNames from "classnames/bind";
import styles from "./Navbar.module.scss";
const cx = classNames.bind(styles);

// import { useDispatch, useSelector } from "react-redux";
// import { logoutUser } from "@/redux/userSlice";
import useClickOutSide from "@/hooks/useClickOutSide";
import { iconBars, iconLogin, iconRegister } from "public/icons";
import OverlayLayout from "../../OverlayLayout";

export interface NavbarProps {
    tab?: string
}

const Navbar = () => {
    const navbarRef = useRef<HTMLDivElement>(null);
    const [isNavbar, setIsNavbar] = useState(false);
    // const dispatch = useDispatch();
    // const { isAuthenticated } = useSelector((state : any) => state.user);

    const handleCloseNavbar = () => {
        // console.log(123)
        setIsNavbar(false);
    };
    useClickOutSide(navbarRef, handleCloseNavbar);

    const eventLogoutUser = (e : any) => {
        e.preventDefault()
        // dispatch(logoutUser());
    }

    return (
        <>
            <button
                className={cx("button-show")}
                onClick={() => setIsNavbar(true)}
            >
                {iconBars}
            </button>
            <OverlayLayout active={isNavbar}>
                <div
                    ref={navbarRef}
                    className={cx("navbar", `${isNavbar && "active"}`)}
                >
                    <div className={cx("container")}>
                        <div className={cx("header")}>Navbar</div>

                        <div className={cx("content")}>
                            {false ? (
                                <Link href="/" onClick={eventLogoutUser}>
                                    <div className={cx("navbar-item")} >
                                        {iconLogin}Đăng xuất
                                    </div>
                                </Link>
                            ) : (
                                <>
                                    <Link href="/auth/login">
                                        <div className={cx("navbar-item")}>
                                            {iconLogin}Đăng nhập
                                        </div>
                                    </Link>
                                    <Link href="/auth/register">
                                        <div className={cx("navbar-item")}>
                                            {iconRegister}Đăng kí
                                        </div>
                                    </Link>
                                </>
                            )}

                            <Link href="/posts/detail/nguyen-hoang-bao">
                                <div className={cx("navbar-item")}>
                                    {iconRegister}Bài viết
                                </div>
                            </Link>
                            <Link href="/user/hoangbao0201">
                                <div className={cx("navbar-item")}>
                                    {iconRegister}hoangbao0201
                                </div>
                            </Link>
                            <Link href="/creator" target="_blank">
                                <div className={cx("navbar-item")}>
                                    {iconRegister}Create Book
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </OverlayLayout>
        </>
    );
};

export default Navbar;
