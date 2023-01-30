import classNames from "classnames/bind";
import styles from "./FormDesciption.module.scss";
const cx = classNames.bind(styles);

export interface FormDesciptionProps {
    description?: any
}

const FormDesciption = ({ description } : FormDesciptionProps) => {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("container")} dangerouslySetInnerHTML={{
                __html: description
            }}/>
        </div>
    );
};

export default FormDesciption;
