import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/PracticeTestContent.css';

const PracticeTestContent = () => {
  const navigate = useNavigate();

  const handleSearchTest = () => {
    navigate('/search'); // Điều hướng đến trang tìm kiếm bài kiểm tra
  };

  return (
    <div className="DashboardPage-primaryContents">
      <div className="DashboardPage-main">
        <div className="UIContainer">
          <div className="ProfilePage-content">
            <div className="icon-practice-test">
              <svg 
                aria-label="Bài kiểm tra thử" 
                className="AssemblyIcon AssemblyIcon--xxxlarge" 
                role="img"
              >
                <use xlinkHref="#brand-practice-tests"></use>
              </svg>
              <div className="title-practice-test">
                Tìm và làm các bài kiểm tra thử dựa trên những gì bạn đang học
              </div>
              <div className="button-practice-test">
                <button
                  type="button"
                  aria-label="Tìm kiếm bài kiểm tra thử"
                  className="create-practice-button"
                  onClick={handleSearchTest}
                >
                  <span>Tìm kiếm bài kiểm tra thử</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PracticeTestContent; 