import Link from "next/link";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
const cx = classNames.bind(styles);

import Navbar from "./Navbar";

export interface HeaderProps {}

const Header = () => {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("container")}>

                <div className={cx("content-item")}>
                    <Navbar />
                    <Link className={cx("logo")} href="/">
                        Logo
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
                    <Link href="/auth/login">
                        <div className={cx("accout-button", "button-login")}>
                            Đăng nhập
                        </div>
                    </Link>
                    <Link href="/auth/register">
                        <div className={cx("accout-button", "button-register")}>
                            Đăng kí
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
