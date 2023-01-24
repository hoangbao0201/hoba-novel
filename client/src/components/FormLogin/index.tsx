import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useState } from "react";

import classNames from "classnames/bind";
import styles from "./FormLogin.module.scss";
const cx = classNames.bind(styles);

import useBreadcrumbs from "@/hooks/useBreadcrumbs";
import BreadcrumbLayout from "../Layouts/BreadcrumbLayout";
import { iconFacebook, iconGithub, iconGoogle } from "public/icons";
import axios from "axios";
import { loginUser } from "@/redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie"

export interface FormLoginProps {}

const FormLogin = () => {
    const [dataForm, setDataForm] = useState({
        accout: "",
        password: "",
    });
    const dispatch = useDispatch();
    const { userLoading, isAuthenticated } = useSelector((state : any) => state.user);

    const router = useRouter();
    const newRouter = useBreadcrumbs(router);

    const eventChangeValueInput = (e: ChangeEvent<HTMLInputElement>) => {
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value,
        });
    };

    const handleSignIn = async (e: any) => {
        e.preventDefault();
    };

    const handleSubmitFormLoginUser = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const resLoginUser = await axios.post("/api/auth/login", dataForm);
            
            Cookies.set('A_token', resLoginUser.data.accessToken)
            dispatch(loginUser(resLoginUser.data.user));

            router.push("/");

        } catch (error) {
            console.log(error);
        }
    };

    // ---

    if(userLoading) {
        return <div></div>
    }
    else {
        if(isAuthenticated) {
            router.push("/");
        }
    }

    // console.log(currentUser)

    return (
        <>
            <div className={cx("wrapper")}>
                <div className={cx("container")}>
                    <BreadcrumbLayout data={newRouter} />

                    <div className={cx("content-auth")}>
                        <div className={cx("grid-form")}>
                            <form
                                className={cx("form-login")}
                                onSubmit={handleSubmitFormLoginUser}
                            >
                                <div className={cx("form-header")}>
                                    <div className={cx("header-title")}>
                                        <span
                                            className={cx("header-under-line")}
                                        ></span>{" "}
                                        <h3>Đăng nhập</h3>
                                    </div>
                                </div>

                                <div className={cx("form-group")}>
                                    <label
                                        htmlFor="input-login-username"
                                        className={cx("form-title")}
                                    >
                                        Tài khoản
                                    </label>
                                    <div className={cx("form-input")}>
                                        <input
                                            id="input-login-username"
                                            name="accout"
                                            onChange={eventChangeValueInput}
                                        />
                                    </div>
                                </div>
                                <div className={cx("form-group")}>
                                    <label
                                        htmlFor="input-login-password"
                                        className={cx("form-title")}
                                    >
                                        Mật khẩu
                                    </label>
                                    <div className={cx("form-input")}>
                                        <input
                                            id="input-login-password"
                                            type="password"
                                            name="password"
                                            onChange={eventChangeValueInput}
                                        />
                                    </div>
                                </div>

                                <div className={cx("form-action")}>
                                    <input id="inputMemo" type="checkbox" />
                                    <label
                                        className={cx("text-checkInput")}
                                        htmlFor="inputMemo"
                                    >
                                        Ghi nhớ đăng nhập
                                    </label>
                                </div>

                                <div className={cx("form-group-button")}>
                                    <button
                                        className={cx(
                                            "button-auth",
                                            "auth-submit-form"
                                        )}
                                    >
                                        Đăng nhập
                                    </button>
                                </div>
                            </form>
                            <div className={cx("form-devider")}>
                                <div className={cx("text")}>Đăng nhập bằng</div>
                                <div className={cx("devider-line")}></div>
                            </div>
                            <div
                                className={cx(
                                    "form-group-button",
                                    "login-with-social"
                                )}
                            >
                                <button
                                    className={cx("button-auth", "auth-google")}
                                    onClick={handleSignIn}
                                    name="google"
                                >
                                    <span className={cx("grid-icon")}>
                                        {iconGoogle}
                                    </span>
                                    Google
                                </button>
                                <button
                                    className={cx(
                                        "button-auth",
                                        "auth-facebook"
                                    )}
                                    name="facebook"
                                >
                                    <span className={cx("grid-icon")}>
                                        {iconFacebook}
                                    </span>
                                    Facebook
                                </button>
                                <button
                                    className={cx("button-auth", "auth-github")}
                                    name="github"
                                >
                                    <span className={cx("grid-icon")}>
                                        {iconGithub}
                                    </span>
                                    Github
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={cx("content-side")}></div>
                </div>
            </div>
        </>
    );
};

export default FormLogin;