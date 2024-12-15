// Courseunits.js
import React, { useState } from 'react';
import './CourseInput.css';
import { Navigate, useNavigate } from 'react-router-dom';

const CourseInput = () => {
    const navigate = useNavigate();
    const [terms, setTerms] = useState([1]);

    const handleAddTerm = () => {
        setTerms([...terms, terms.length + 1]);
    };

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
                placeholder="Từ 1 Định nghĩa 1
Từ 2 Định nghĩa 2
Từ 3 Định nghĩa 3"
            ></textarea>

            <div className="separator-options">
                <div className="separator-group">
                    <h5>Giữa thuật ngữ và định nghĩa</h5>
                    <label>
                        <input type="radio" name="separator" defaultChecked />
                        <p>Tab</p>
                    </label>
                    <label>
                        <input type="radio" name="separator" />
                        <p>Phẩy</p>
                    </label>
                    <label>
                        <input type="radio" name="separator" />
                        <input type="text" placeholder="-" className="custom-input" />
                    </label>
                </div>
                <div className="separator-group">
                    <h5>Giữa các thẻ</h5>
                    <label>
                        <input type="radio" name="tag-separator" defaultChecked />
                        <p>Dòng mới</p>
                    </label>
                    <label>
                        <input type="radio" name="tag-separator" />
                        <p> Chấm phẩy</p>
                    </label>
                    <label>
                        <input type="radio" name="tag-separator" />
                        <input type="text" placeholder="\n\n" className="custom-input" />
                    </label>
                </div>
            </div>

            <div className="terms-section">
                {terms.map((index) => (
                    <div className="term-item" key={index}>
                        <span>{index}</span>

                        <div className="definition">
                            <input type="text" className="term-input" disabled />
                            <label htmlFor="term" className="term-label">
                                Thuật ngữ
                            </label>
                        </div>
                        <div className="definition">
                            <input type="text" className="definition-input" disabled />
                            <label htmlFor="definition" className="definition-label">
                                Định nghĩa
                            </label>
                        </div>
                    </div>
                ))}
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
