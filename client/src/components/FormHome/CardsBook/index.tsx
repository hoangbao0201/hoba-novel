import classNames from 'classnames/bind'
import Link from 'next/link';
import { iconAuthor } from 'public/icons';
import styles from './CardsBook.module.scss';
const cx = classNames.bind(styles);

export interface CardsBookProps {

}
const CardsBook = () => {

    return (
       <div className={cx("wrapper")}>
            <div className={cx("container")}>
                <Link href="/book/vua-thanh-tien-than-con-chau-cau-ta-xuat-son" className={cx('grid-image')}>
                    <img className={cx("thumbnail")} src="https://static.cdnno.com/poster/ban-tien/150.jpg?1623342325"/>
                </Link>
                <div className={cx("detail")}>
                    <Link className={cx("title-link")} href='/book/vua-thanh-tien-than-con-chau-cau-ta-xuat-son'>
                        <h3 className={cx("title")}>Vừa thành tiên thần con cháu cầu ta xuất sơn</h3>
                    </Link>
                    <div className={cx("description")}>
                        Đầu thai trở thành Cảnh triều lập quốc vị thứ nhất Thái Tử, Khương Trường Sinh vừa ra đời liền bị gian nhân đánh tráo, sau được đưa đến một đạo quan bên trong, trở thành một tên bình thường tiểu đạo sĩ.
                    </div>
                    <div className={cx("detail-bottom")}>
                        <div className={cx("grid-author")}>
                            {iconAuthor} <h4 className={cx("author")}>Nhâm Ngã Tiếu</h4>
                        </div>
                        <div className={cx("catagory")}>Tiên hiệp</div>
                    </div>
                </div>
            </div>
       </div>
   )
}

export default CardsBook