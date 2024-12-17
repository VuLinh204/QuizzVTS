import React from 'react';
import '../css/LearningContent.css';

const LearningContent = ({ username }) => {
  return (
    <div className="DashboardPage-primaryContents">
      <div className="DashboardPage-main">
        <div className="UIContainer">
          <div className="ProfilePage-content">
            <div className="icon-learning">
              <svg 
                aria-label="Hướng dẫn học" 
                className="AssemblyIcon AssemblyIcon--xxxlarge" 
                role="img"
              >
                <use xlinkHref="#brand-learning"></use>
              </svg>
              <div className="title-learning" style={{ color: 'white', fontSize: '24px' }}>
                {username} [abc] chưa tạo bất kỳ hướng dẫn học nào
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningContent; 