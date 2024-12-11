// Courseunits.js
import React from 'react';
import './CourseInput.css';
import { Navigate, useNavigate } from 'react-router-dom';

const CourseInput = () => {
    const navigate = useNavigate();

    const handleCancel = () => {
        navigate(-1);
    };

    return (
        <div className="input-format-container">
            <h4>Nhập dữ liệu</h4>
            <p>Chép và dán dữ liệu ở đây (từ Word, Excel, Google Docs, v.v.)</p>
            <textarea
                className="input-textarea"
                rows="6"
                placeholder="Từ 1 Định nghĩa 1\nTừ 2 Định nghĩa 2\nTừ 3 Định nghĩa 3"
            ></textarea>

            <div className="separator-options">
                <div className="separator-group">
                    <h5>Giữa thuật ngữ và định nghĩa</h5>
                    <label>
                        <input type="radio" name="separator" defaultChecked /> Tab
                    </label>
                    <label>
                        <input type="radio" name="separator" /> Phẩy
                    </label>
                    <label>
                        <input type="radio" name="separator" />
                        <input type="text" placeholder="-" className="custom-input" />
                    </label>
                </div>
                <div className="separator-group">
                    <h5>Giữa các thẻ</h5>
                    <label>
                        <input type="radio" name="tag-separator" defaultChecked /> Dòng mới
                    </label>
                    <label>
                        <input type="radio" name="tag-separator" /> Chấm phẩy
                    </label>
                    <label>
                        <input type="radio" name="tag-separator" />
                        <input type="text" placeholder="\n\n" className="custom-input" />
                    </label>
                </div>
            </div>

            <div className="preview-section">
                <h6>Xem trước</h6>
                <div className="preview-items">
                    {['Run - Chạy', 'Talk - Nói'].map((item, index) => {
                        const [term, definition] = item.split(' - ');
                        return (
                            <div className="preview-item" key={index}>
                                <span>{index + 1}</span>
                                <input type="text" value={term} readOnly />
                                <input type="text" value={definition} readOnly />
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="actions">
                <button className="cancel-button" onClick={handleCancel}>
                    Hủy nhập
                </button>
                <button className="submit-button">Nhập</button>
            </div>
        </div>
    );
};

export default CourseInput;
