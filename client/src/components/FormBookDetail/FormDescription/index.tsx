import classNames from "classnames/bind";
import styles from "./FormDesciption.module.scss";
const cx = classNames.bind(styles);

export interface FormDesciptionProps {}
const FormDesciption = () => {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("container")}>
            </div>
        </div>
    );
};

export default FormDesciption;
