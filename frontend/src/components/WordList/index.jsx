import React, { useState } from 'react';

const WordList = () => {
    const words = [
        { id: 1, word: 'abuse', definition: '(N) การใช้ในทางที่ผิด' },
        { id: 2, word: 'comfort', definition: '(N) ความสบาย/ผ่อนคลาย' },
        { id: 3, word: 'lesson', definition: '(N) บทเรียน' },
    ];

    const [showDefinition, setShowDefinition] = useState(false);
    const [selectedMode, setSelectedMode] = useState('Chọn chế độ học');

    const toggleDefinition = () => {
        setShowDefinition(!showDefinition);
    };

    const handleModeChange = (event) => {
        setSelectedMode(event.target.value);
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
                            <span className="word-definition">{item.definition}</span>
                        </div>
                        <div className="word-actions">
                            <button className="action-btn favorite-btn">★</button>
                            <button className="action-btn audio-btn">🔊</button>
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
                    <div id="mode-select" value={selectedMode} onChange={handleModeChange} className="mode-select">
                        <select>
                            <option value="Chọn chế độ học">Chọn chế độ học</option>
                            <option value="Thẻ ghi nhớ">Thẻ ghi nhớ</option>
                            <option value="Học">Học</option>
                            <option value="Kiểm tra">Kiểm tra</option>
                            <option value="Ghép thẻ">Ghép thẻ</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WordList;
