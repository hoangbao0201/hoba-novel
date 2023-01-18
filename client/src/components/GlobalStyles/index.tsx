import { ReactNode } from 'react';
import classNames from 'classnames/bind'
const cx = classNames.bind(styles);

import styles from './GlobalStyles.module.scss';
import Header from '../Layouts/Header';
import Footer from '../Layouts/Footer';

export interface GlobalStylesProps {
    children: ReactNode
}
const GlobalStyles = ({ children } : GlobalStylesProps ) => {

    return (
       <>
            <Header />

            <div className={cx("content")}>{children}</div>

            <Footer />
       </>
   )
}

export default GlobalStyles