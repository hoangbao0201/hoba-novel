import classNames from "classnames/bind";
import { useState } from "react";
import styles from "./ContentFormNewBook.module.scss";
const cx = classNames.bind(styles);

export interface ContentFormNewBookProps {}
const ContentFormNewBook = () => {

    const [dataForm, setDataForm] = useState({
        title: "",
        description: "",
        category: "Tiên Hiệp",
        personality: "Điềm Đạm",
        scene: "Đông Phương Huyền Huyễn",
        classify: "Hệ Thống",
        viewFrame: "Góc Nhìn Nam",
    })

    const eventOnChangeValueForm = (e : any) => {
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        })
    }

    console.log(dataForm)

    return (
        <div className={cx("wrapper")}>
            <div className={cx("container")}>
                <div className={cx("form")}>
                    <div className={cx("form-group")}>
                        <label className={cx("form-title")}>Tên truyện</label>
                        <input className={cx("form-input")} placeholder="" name="title" value={dataForm.title} onChange={eventOnChangeValueForm}/>
                    </div>

                    <div className={cx("form-group")}>
                        <label className={cx("form-title")}>Giới thiệu</label>
                        <textarea className={cx("form-text")} placeholder="" name="description" value={dataForm.description} onChange={eventOnChangeValueForm}/>
                    </div>

                    <div className={cx("form-group")}>
                        <label className={cx("form-title")}>Thể loại</label>

                        <select className={cx("form-input")} name="category" value={dataForm.category} onChange={eventOnChangeValueForm}>
                            <option value="Tiên Hiệp">Tiên Hiệp</option>
                            <option value="Huyền Huyễn">Huyền Huyễn</option>
                            <option value="Khoa Huyễn">Khoa Huyễn</option>
                            <option value="Võng Du">Võng Du</option>
                            <option value="Đô Thị">Đô Thị</option>
                            <option value="Đồng Nhân">Đồng Nhân</option>
                            <option value="Dã Sử">Dã Sử</option>
                            <option value="Cạnh Kỹ">Cạnh Kỹ</option>
                            <option value="Huyền Nghi">Huyền Nghi</option>
                            <option value="Kiếm Hiệp">Kiếm Hiệp</option>
                            <option value="Kỳ Ảo">Kỳ Ảo</option>
                        </select>
                    </div>

                    <div className={cx("form-group")}>
                        <label className={cx("form-title")}>
                            Tính cách nhân vật chính
                        </label>
                        <select className={cx("form-input")} name="personality" value={dataForm.personality} onChange={eventOnChangeValueForm}>
                            <option value="Điềm Đạm">Điềm Đạm</option>
                            <option value="Nhiệt Huyết">Nhiệt Huyết</option>
                            <option value="Vô Sỉ">Vô Sỉ</option>
                            <option value="Thiết Huyết">Thiết Huyết</option>
                            <option value="Nhẹ Nhàng">Nhẹ Nhàng</option>
                            <option value="Cơ Trí">Cơ Trí</option>
                            <option value="Lãnh Khốc">Lãnh Khốc</option>
                            <option value="Kiêu Ngạo">Kiêu Ngạo</option>
                            <option value="Ngu Ngốc">Ngu Ngốc</option>
                            <option value="Giảo Hoạt">Giảo Hoạt</option>
                        </select>
                    </div>

                    <div className={cx("form-group")}>
                        <label className={cx("form-title")}>
                            Bối cảnh thế giới
                        </label>
                        <select className={cx("form-input")} name="scene" value={dataForm.scene} onChange={eventOnChangeValueForm}>
                            <option value="Đông Phương Huyền Huyễn">Đông Phương Huyền Huyễn</option>
                            <option value="Dị Thế Đại Lục">Dị Thế Đại Lục</option>
                            <option value="Vương Triều Tranh Bá">Vương Triều Tranh Bá</option>
                            <option value="Cao Võ Thế Giới">Cao Võ Thế Giới</option>
                            <option value="Tây Phương Kỳ Huyễn">Tây Phương Kỳ Huyễn</option>
                            <option value="Hiện Đại Ma Pháp">Hiện Đại Ma Pháp</option>
                            <option value="Hắc Ám Huyễn Tưởng">Hắc Ám Huyễn Tưởng</option>
                            <option value="Lịch Sử Thần Thoại">Lịch Sử Thần Thoại</option>
                            <option value="Võ Hiệp Huyễn Tưởng">Võ Hiệp Huyễn Tưởng</option>
                            <option value="Cổ Võ Tương Lai">Cổ Võ Tương Lai</option>
                            <option value="Tu Chân Văn Minh">Tu Chân Văn Minh</option>
                            <option value="Huyễn Tưởng Tu Tiên">Huyễn Tưởng Tu Tiên</option>
                            <option value="Hiện Đại Tu Chân">Hiện Đại Tu Chân</option>
                            <option value="Thần Thoại Tu Chân">Thần Thoại Tu Chân</option>
                            <option value="Cổ Điển Tiên Hiệp">Cổ Điển Tiên Hiệp</option>
                            <option value="Viễn Cổ Hồng Hoang">Viễn Cổ Hồng Hoang</option>
                            <option value="Đô Thị Sinh Hoạt">Đô Thị Sinh Hoạt</option>
                            <option value="Đô Thị Dị Năng">Đô Thị Dị Năng</option>
                            <option value="Thanh Xuân Vườn Trường">Thanh Xuân Vườn Trường</option>
                            <option value="Ngu Nhạc Minh Tinh">Ngu Nhạc Minh Tinh</option>
                            <option value="Thương Chiến Chức Tràng">Thương Chiến Chức Tràng</option>
                            <option value="Giá Không Lịch Sử">Giá Không Lịch Sử</option>
                            <option value="Lịch Sử Quân Sự">Lịch Sử Quân Sự</option>
                            <option value="Dân Gian Truyền Thuyết">Dân Gian Truyền Thuyết</option>
                            <option value="Lịch Sử Quan Trường">Lịch Sử Quan Trường</option>
                            <option value="Hư Nghĩ Võng Du">Hư Nghĩ Võng Du</option>
                            <option value="Du Hí Dị Giới">Du Hí Dị Giới</option>
                            <option value="Điện Tử Cạnh Kỹ">Điện Tử Cạnh Kỹ</option>
                            <option value="Thể Dục Cạnh Kỹ">Thể Dục Cạnh Kỹ</option>
                            <option value="Cổ Võ Cơ Giáp">Cổ Võ Cơ Giáp</option>
                            <option value="Thế Giới Tương Lai">Thế Giới Tương Lai</option>
                            <option value="Tinh Tế Văn Minh">Tinh Tế Văn Minh</option>
                            <option value="Tiến Hóa Biến Dị">Tiến Hóa Biến Dị</option>
                            <option value="Mạt Thế Nguy Cơ">Mạt Thế Nguy Cơ</option>
                            <option value="Thời Không Xuyên Toa">Thời Không Xuyên Toa</option>
                            <option value="Quỷ Bí Huyền Nghi">Quỷ Bí Huyền Nghi</option>
                            <option value="Kỳ Diệu Thế Giới">Kỳ Diệu Thế Giới</option>
                            <option value="Trinh Tham Thôi Lý">Trinh Tham Thôi Lý</option>
                            <option value="Thám Hiểm Sinh Tồn">Thám Hiểm Sinh Tồn</option>
                            <option value="Cung Vi Trạch Đấu">Cung Vi Trạch Đấu</option>
                            <option value="Kinh Thương Chủng Điền">Kinh Thương Chủng Điền</option>
                            <option value="Tiên Lữ Kỳ Duyên">Tiên Lữ Kỳ Duyên</option>
                            <option value="Hào Môn Thế Gia">Hào Môn Thế Gia</option>
                            <option value="Dị Tộc Luyến Tình">Dị Tộc Luyến Tình</option>
                            <option value="Ma Pháp Huyễn Tình">Ma Pháp Huyễn Tình</option>
                            <option value="Tinh Tế Luyến Ca">Tinh Tế Luyến Ca</option>
                            <option value="Linh Khí Khôi Phục">Linh Khí Khôi Phục</option>
                            <option value="Chư Thiên Vạn Giới">Chư Thiên Vạn Giới</option>
                        </select>
                    </div>

                    <div className={cx("form-group")}>
                        <label className={cx("form-title")}>Lưu phái</label>
                        <select className={cx("form-input")} name="classify" value={dataForm.classify} onChange={eventOnChangeValueForm}>
                            <option value="Hệ Thống">Hệ Thống</option>
                            <option value="Lão Gia">Lão Gia</option>
                            <option value="Bàn Thờ">Bàn Thờ</option>
                            <option value="Tùy Thân">Tùy Thân</option>
                            <option value="Phàm Nhân">Phàm Nhân</option>
                            <option value="Vô Địch">Vô Địch</option>
                            <option value="Xuyên Qua">Xuyên Qua</option>
                            <option value="Nữ Cường">Nữ Cường</option>
                            <option value="Khế Ước">Khế Ước</option>
                            <option value="Trọng Sinh">Trọng Sinh</option>
                            <option value="Hồng Lâu">Hồng Lâu</option>
                            <option value="Học Viện">Học Viện</option>
                            <option value="Biến Thân">Biến Thân</option>
                            <option value="Cổ Ngu">Cổ Ngu</option>
                            <option value="Chuyển Thế">Chuyển Thế</option>
                            <option value="Xuyên Sách">Xuyên Sách</option>
                            <option value="Đàn Xuyên">Đàn Xuyên</option>
                            <option value="Phế Tài">Phế Tài</option>
                            <option value="Dưỡng Thành">Dưỡng Thành</option>
                            <option value="Cơm Mềm">Cơm Mềm</option>
                            <option value="Vô Hạn">Vô Hạn</option>
                            <option value="Mary Sue">Mary Sue</option>
                            <option value="Cá Mặn">Cá Mặn</option>
                            <option value="Xây Dựng">Xây Dựng Thế Lực</option>
                            <option value="Xuyên Nhanh">Xuyên Nhanh</option>
                            <option value="Nữ Phụ">Nữ Phụ</option>
                            <option value="Vả Mặt">Vả Mặt</option>
                            <option value="Sảng Văn">Sảng Văn</option>
                            <option value="Xuyên Không">Xuyên Không</option>
                            <option value="Ngọt Sủng">Ngọt Sủng</option>
                            <option value="Ngự Thú">Ngự Thú</option>
                            <option value="Điền Viên">Điền Viên</option>
                            <option value="Toàn Dân">Toàn Dân</option>
                            <option value="Mỹ Thực">Mỹ Thực</option>
                            <option value="Phản Phái">Phản Phái</option>
                            <option value="Sau Màn">Sau Màn</option>
                        </select>
                    </div>

                    <div className={cx("form-group")}>
                        <label className={cx("form-title")}>Thị giác</label>
                        <select className={cx("form-input")} name="viewFrame" value={dataForm.viewFrame} onChange={eventOnChangeValueForm}>
                            <option value="Góc Nhìn Nam">Góc Nhìn Nam</option>
                            <option value="Góc Nhìn Nữ">Góc Nhìn Nữ</option>
                            <option value="Ngôi Thứ Nhất">Ngôi Thứ Nhất</option>
                        </select>
                    </div>


                    <div className={cx("group-button")}>
                        <button className={cx("button-create-book")}>Thêm truyện</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContentFormNewBook;
