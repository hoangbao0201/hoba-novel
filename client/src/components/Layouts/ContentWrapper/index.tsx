import { ReactNode } from 'react';
import classNames from 'classnames/bind'
import styles from './ContentWrapper.module.scss';
const cx = classNames.bind(styles);

export interface ContentWrapperProps {
    children?: ReactNode
}
const ContentWrapper = ({ children } : ContentWrapperProps) => {

    return (
       <div className={cx("wrapper")}>
            <div className={cx("container")}>
                <div className={cx("content")}>
                    {children}
                </div>
            </div>
       </div>
   )
}

export default ContentWrapper