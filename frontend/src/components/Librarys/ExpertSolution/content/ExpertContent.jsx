import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/ExpertContent.css';

const ExpertContent = () => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate('/explanations');
  };

  return (
    <div className="DashboardPage-primaryContents">
      <div className="DashboardPage-main">
        <div className="UIContainer">
          <div className="ProfilePage-content">
            <div className="expert-solution-empty">
              <img 
                src="https://assets.quizlet.com/_next/static/media/explanations_empty.1c466e33.svg"
                alt="Không tìm thấy lời giải chuyên gia nào trong thư viện"
              />
              <div className="solution-text">
                Tìm lời giải chuyên gia từng bước
              </div>
              <button 
                type="button"
                onClick={handleLearnMore}
                aria-label="Tìm hiểu thêm" 
                className="solution-button"
              >
                <span>Tìm hiểu thêm</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpertContent;