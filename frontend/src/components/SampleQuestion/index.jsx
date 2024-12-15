import React from 'react';

const SampleQuestion = () => {
    return (
        <>
            <h3 className="sample-question-title ">Câu hỏi mẫu cho học phần này</h3>
            <div className="sample-question">
                <div className="question">
                    <div className="sample-question-header">
                        <p className="sample-question-header-title">
                            <i className="fa-solid fa-book"></i>
                            Học
                        </p>
                        <p className="sample-question-header-page">1 / 7</p>
                        <button className="sample-question-header-btn">Dùng chế độ học</button>
                    </div>
                    <p className="sample-question-content">(N, V) เบียดี</p>
                    <h4 className="sample-question-text ">Chọn câu trả lời đúng</h4>
                    <div className="options">
                        {['worried', 'explorer', 'learn', 'institution'].map((option, index) => (
                            <button key={index} className="option">
                                {option}
                            </button>
                        ))}
                    </div>
                    <button className="unknown-section">Bạn không biết?</button>
                </div>
            </div>
        </>
    );
};

export default SampleQuestion;
