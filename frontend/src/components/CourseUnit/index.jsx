// Courseunit.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CourseUnit.css';

const CourseUnit = () => {
    const [terms, setTerms] = useState([1]);
    const navigate = useNavigate();

    const handleAddTerm = () => {
        setTerms([...terms, terms.length + 1]);
    };

    const handleNavigateToInput = () => {
        navigate('/course-input');
    };

    return (
        <div className="course-unit-container">
            <div className="header">
                <h2>Tạo một học phần mới</h2>
                <div className="header-actions">
                    <button className="create-button">Tạo</button>
                </div>
            </div>

            <input
                type="text"
                className="title-input"
                placeholder="Nhập tiêu đề, ví dụ 'Sinh học - Chương 22: Tiến hóa'"
            />

            <textarea className="description-textarea" rows="2" placeholder="Thêm mô tả..."></textarea>

            <div className="actions">
                <button className="secondary-button" onClick={handleNavigateToInput}>
                    <i className="fa-solid fa-plus icon"></i>
                    Nhập
                </button>
                <button className="secondary-button">
                    <i className="fa-solid fa-plus"></i>
                    Thêm sơ đồ
                </button>
                <button className="secondary-button">
                    <i className="fa-solid fa-wand-magic-sparkles"></i>
                    Tạo từ ghi chú
                </button>
            </div>

            <div className="terms-section">
                {terms.map((index) => (
                    <div className="term-item" key={index}>
                        <span>{index}</span>

                        <div className="definition">
                            <input type="text" className="term-input" />
                            <label htmlFor="term" className="term-label">
                                Thuật ngữ
                            </label>
                        </div>
                        <div className="definition">
                            <input type="text" className="definition-input" />
                            <label htmlFor="definition" className="definition-label">
                                Định nghĩa
                            </label>
                        </div>

                        <button className="add-image-button">
                            <i className="fa-solid fa-image"></i>Hình ảnh
                        </button>
                    </div>
                ))}
                <button className="add-term-button" onClick={handleAddTerm}>
                    THÊM THẺ
                </button>
            </div>

            <div className="footer-actions">
                <button className="create-button">Tạo</button>
            </div>
        </div>
    );
};

export default CourseUnit;
