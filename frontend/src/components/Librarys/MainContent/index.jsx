import React from 'react';
import ClassroomContent from '../Classroom/ClassroomContent';
import CourseUnitContent from '../CourseUnitLib/CourseUnitContent';

const MainContent = ({ activeTab }) => {
  const renderContent = () => {
    switch(activeTab) {
      case 'CLASSES':
        return <ClassroomContent />;
      case 'SETS':
        return <CourseUnitContent />;
      case 'PRACTICE_TESTS':
        return <div style={{color: 'white'}}>Nội dung Bài kiểm tra thử</div>;
      case 'EXPLANATIONS':
        return <div style={{color: 'white'}}>Nội dung Lời giải chuyên gia</div>;
      case 'FOLDERS':
        return <div style={{color: 'white'}}>Nội dung Thư mục</div>;
      default:
        return null;
    }
  };

  return (
    <div className="DashboardPage">
      {renderContent()}
    </div>
  );
};

export default MainContent; 