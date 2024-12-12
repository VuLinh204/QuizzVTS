import React from 'react';

const VocabularyCard = () => {
    return (
        <>
            <div className="vocabulary-card">
                <h2 className="vocabulary-card-title">abuse</h2>
            </div>
            <div className="vocabulary-card-controls">
                <button className="control-button">
                    <i className="fa-solid fa-arrow-left"></i>
                </button>
                <span>1 / 880</span>
                <button className="control-button">
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
            <div className="vocabulary-card-footer">
                <div className="author-info">
                    <img src="https://via.placeholder.com/40" alt="Author" className="author-avatar" />
                    <span className="author-name">VuLFn111 (Giáo Viên)</span>
                    <span className="creation-date">Đã tạo 8 tháng trước</span>
                </div>

                <div className="action-buttons">
                    <button className="action-button">
                        <i className="fa-solid fa-share"></i> Chia sẻ
                    </button>
                    <button className="action-button">
                        <i className="fa-solid fa-bookmark"></i> Lưu
                    </button>
                    <button className="action-button">
                        <i className="fa-solid fa-ellipsis-h"></i>
                    </button>
                </div>
            </div>
        </>
    );
};

export default VocabularyCard;
