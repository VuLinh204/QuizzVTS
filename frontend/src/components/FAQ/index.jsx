import React, { useState } from "react";
import style from "./FAQ.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "Các lời giải sách giáo khoa Quizlet tốt chứ?",
            answer:
                "Đúng vậy! Theo phản hồi của sinh viên, các lời giải sách giáo khoa của Quizlet được xem là các câu trả lời và giải thích có chất lượng cao nhất hiện nay. Điều này là do các lời giải được biên soạn và xác minh bởi các chuyên gia về chủ đề tương ứng. Mỗi lời giải được chia thành các bước để học sinh có thể học từng khái niệm cốt lõi trước khi chuyển sang lời giải tiếp theo, giúp giảm sự choáng ngợp, cải thiện khả năng hiểu và sự tự tin. Để đạt điểm tốt, độ tin cậy của các lời giải do chuyên gia biên soạn là yếu tố then chốt.",
        },
        {
            question: "Quizlet rẻ hơn lời giải sách giáo khoa của Chegg?",
            answer: "Đúng vậy! Các lời giải sách giáo khoa hiện có trên Quizlet Plus với giá 7,99 US$/tháng, trong khi homework help của Chegg được quảng cáo là có giá từ 15,95 USD/tháng. Quizlet Plus giúp bạn đạt điểm cao hơn trong thời gian ngắn hơn với các chế độ học cao cấp thông minh và hiệu quả, tiếp cận hàng triệu lời giải sách giáo khoa, cùng trải nghiệm không có quảng cáo.",
        },
        {
            question: "Lời giải sách giáo khoa của Quizlet có miễn phí?",
            answer: "Quizlet cung cấp một số lời giải sách giáo khoa miễn phí để bạn có thể thử chất lượng và khả năng của sản phẩm trước khi đăng ký toàn quyền truy cập Quizlet Plus.",
        },
        {
            question: "Tôi có thể tìm câu trả lời sách giáo khoa ở đâu?",
            answer: "Bạn có thể duyệt tìm các lời giải sách giáo khoa theo chương, hoặc chỉ cần nhập tên sách giáo khoa, mã ISBN, hoặc câu hỏi của bạn vào thanh tìm kiếm. Lập tức xem hàng triệu lời giải đã được xác minh từ những bộ sách giáo khoa phổ biến nhất",
        },
    ];

    return (
        <div className={cx("faq-section")}>
            <h1 className={cx("faq-title")}>Hỏi đáp</h1>
            <div className={cx("faq-list")}>
                {faqs.map((faq, index) => (
                    <details key={index} className={cx("faq-item")}>
                        <summary
                            className={cx("faq-question")}
                            onClick={() => toggleFAQ(index)}
                        >
                            {faq.question}
                            <span className="toggle-icon">{activeIndex === index ? "\u25BC" : "\u25B6"}</span>                        </summary>
                        <p className={cx("faq-answer")}>{faq.answer}</p>
                    </details>
                ))}
            </div>
        </div>
    );
};

export default FAQ;

/* CSS in App.css */
/* Replace this comment with the CSS for styling */
