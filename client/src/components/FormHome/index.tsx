import classNames from 'classnames/bind'
import ContentWrapper from '../Layouts/ContentWrapper';
import BooksRaiting from './BookRaiting';
import CardsBook from './CardsBook';
import styles from './FormHome.module.scss';
const cx = classNames.bind(styles);

export interface FormHomeProps {

}
const FormHome = () => {

    return (
       <ContentWrapper>
            <div className={cx("list-post")}>
                <CardsBook />
                <CardsBook />
                <CardsBook />
                <CardsBook />
                <CardsBook />
                <CardsBook />
            </div>
            <div className={cx("raiting")}>
                <BooksRaiting />
            </div>
       </ContentWrapper>
   )
}

export default FormHome