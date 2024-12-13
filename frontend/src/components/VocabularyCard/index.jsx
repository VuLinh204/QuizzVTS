import React, { useState } from 'react';

const VocabularyCard = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleCardFlip = () => {
        setIsFlipped(!isFlipped);
    };
    return (
        <>
            <div className="vocabulary-cards">
                <div className={`vocabulary-card ${isFlipped ? 'flipped' : ''}`} onClick={handleCardFlip}>
                    <div className="vocabulary-card-question" style={{ visibility: isFlipped ? 'hidden' : 'visible' }}>
                        <div className="vocabulary-card-icons">
                            <div>
                                <i className="fas fa-lightbulb icon-hint" title="Gợi ý"></i>
                                Hiển thị gợi ý
                            </div>
                            <div>
                                <i className="fas fa-volume-up icon-sound" title="Âm thanh"></i>
                                <i className="fas fa-star icon-star" title="Yêu thích"></i>
                            </div>
                        </div>
                        <h2 className="vocabulary-card-title">1 + 2</h2>
                        <img src="./assets/images/answer.png" alt="Answer" className="vocabulary-card-image" />
                    </div>

                    <div className="vocabulary-card-result" style={{ visibility: isFlipped ? 'visible' : 'hidden' }}>
                        <div className="vocabulary-card-icons">
                            <div>
                                <i className="fas fa-volume-up icon-sound" title="Âm thanh"></i>
                                <i className="fas fa-star icon-star" title="Yêu thích"></i>
                            </div>
                        </div>
                        <h2 className="vocabulary-card-title">3</h2>
                        <img src="./assets/images/answer.png" alt="Answer" className="vocabulary-card-image" />
                    </div>
                </div>
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
