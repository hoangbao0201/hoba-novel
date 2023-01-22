import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./ContentFormDraftsNew.module.scss";

// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";

const cx = classNames.bind(styles);

export interface ContentFormDraftsNewProps {}

const QuillNoSSRWrapper = dynamic(import("react-quill"), {
    ssr: false,
    loading: () => <p>Loading ...</p>,
});

const modules = {
    toolbar: null,
};

const ContentFormDraftsNew = () => {
    let titleBook;
    const [textContent, setTextContent] = useState<string>("");
    const [numberWords, setNumberWords] = useState<number>(0)

    const eventOnChangeTextContent = (value: any) => {
        setTextContent(value);
    };

    useEffect(() => {
        setNumberWords(textContent.split(" ").length - 1)
    }, [textContent])

    if(textContent.length > 0 && textContent.split("<p>").length == 2) {
        titleBook = textContent.split("p>")[1].split("</")[0]
        // console.log(textContent.split("<p>").length)
    }

    return (
        <div className={cx("wrapper")}>
            <QuillNoSSRWrapper
                modules={modules}
                placeholder="Nếu để tên chương nằm ở dòng đầu tiên, hệ thống sẽ tự tách tên chương cho bạn"
                className="customize-quill-new-drafts"
                onChange={eventOnChangeTextContent}
            />

            <div className={cx("number-words")}>{numberWords} từ - tự động lưu</div>
        </div>
    );
};

export default ContentFormDraftsNew;
