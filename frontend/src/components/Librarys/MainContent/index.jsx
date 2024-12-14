import React from 'react';
import ClassroomContent from '../Classroom/content/ClassroomContent';
import CourseUnitContent from '../CourseUnitLib/content/CourseUnitContent';
import PracticeTestContent from '../PracticeTest/content/PracticeTestContent';
import ExpertContent from '../ExpertSolution/content/ExpertContent';
import FolderContent from '../Folder/content/FolderContent';

const MainContent = ({ activeTab }) => {
  const renderContent = () => {
    switch(activeTab) {
      case 'CLASSES':
        return <ClassroomContent />;
      case 'SETS':
        return <CourseUnitContent />;
      case 'PRACTICE_TESTS':
        return <PracticeTestContent />;
      case 'EXPLANATIONS':
        return <ExpertContent />;
      case 'FOLDERS':
        return <FolderContent />;
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