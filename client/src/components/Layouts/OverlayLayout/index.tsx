import { ReactNode } from "react";
import classNames from "classnames/bind";
import styles from "./OverlayLayout.module.scss";
const cx = classNames.bind(styles);

export interface OverlayLayoutProps {
    children: ReactNode;
    active: boolean | undefined;
}
const OverlayLayout = ({ children, active }: OverlayLayoutProps) => {
    return (
        <>
            <div className={cx("overlay", `${active ? "active" : ""}`)}></div>
            <div className={cx("content")}>{children}</div>
        </>
    );
};

export default OverlayLayout;
