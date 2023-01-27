import classNames from 'classnames/bind'
import styles from './Loading.module.scss';
const cx = classNames.bind(styles);

export interface LoadingProps {
    type?: string
    size?: string
}

const Loading = ({ type, size } : LoadingProps) => {

    let bodyLoad = <span className={cx("loading-button")}></span>;
    if(type == "overlay") {
        bodyLoad = <span className={cx("loading-overlay")}></span>
    }

    return (
       <span className={cx("content", `${size || "sm" }`)}>
            {bodyLoad}
       </span>
    )
}

export default Loading