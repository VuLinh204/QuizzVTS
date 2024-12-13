import React, { useState } from 'react';

const WordList = () => {
    const words = [
        { id: 1, word: 'abuse', definition: '(N) การใช้ในทางที่ผิด', image: 'abc.jpg' },
        { id: 2, word: 'comfort', definition: '(N) ความสบาย/ผ่อนคลาย' },
        { id: 3, word: 'lesson', definition: '(N) บทเรียน' },
    ];

    const [showDefinition, setShowDefinition] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedMode, setSelectedMode] = useState('Chọn chế độ học');

    const handleModeChange = (mode) => {
        setSelectedMode(mode);
        setIsDropdownOpen(false);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const toggleDefinition = () => {
        setShowDefinition(!showDefinition);
    };

    return (
        <div className="word-list-container">
            <h3 className="word-list-title">Thuật ngữ trong học phần này (3)</h3>
            <div className="word-list">
                {words.map((item) => (
                    <div key={item.id} className="word-item">
                        <div className="word-index">{item.id}</div>
                        <div className="word-details">
                            <span className="word-name">{item.word}</span>
                            <hr className="custom-hr" />
                            <span className="word-definition">{item.definition}</span>
                        </div>
                        {item.image ? <img src={item.image} alt={item.word} className="word-image" /> : null}
                        <div className="word-actions">
                            <button className="action-btn favorite-btn">
                                <i className="fas fa-star"></i>
                            </button>
                            <button className="action-btn audio-btn">
                                <i className="fas fa-volume-up"></i>
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="special-item">
                <div className="special-definition">
                    <button onClick={toggleDefinition} className="toggle-definition-btn">
                        {showDefinition ? 'Ẩn định nghĩa' : 'Hiển thị định nghĩa'}
                    </button>
                    {/* {showDefinition && (
                        <div className="definition-content">Đây là phần định nghĩa đầy đủ được hiển thị.</div>
                    )} */}
                </div>
                <div className="special-mode">
                    <div className="mode-select" onClick={toggleDropdown}>
                        <div className="selected-mode">
                            {selectedMode}{' '}
                            <i className={`fas ${isDropdownOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`} />
                        </div>
                        {isDropdownOpen && (
                            <div className="mode-options">
                                <div className="mode-option" onClick={() => handleModeChange('Thẻ ghi nhớ')}>
                                    <i className="fas fa-tags"></i> Thẻ ghi nhớ
                                </div>
                                <div className="mode-option" onClick={() => handleModeChange('Học')}>
                                    <i className="fas fa-book-open"></i> Học
                                </div>
                                <div className="mode-option" onClick={() => handleModeChange('Kiểm tra')}>
                                    <i className="fas fa-check-circle"></i> Kiểm tra
                                </div>
                                <div className="mode-option" onClick={() => handleModeChange('Ghép thẻ')}>
                                    <i className="fas fa-puzzle-piece"></i> Ghép thẻ
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WordList;
