import React from 'react';
import ClassroomContent from '../Classroom/ClassroomContent';
import CourseUnitContent from '../CourseUnitLib/content/CourseUnitContent';
import PracticeTestContent from '../PracticeTest/content/PracticeTestContent';
import LearningContent from '../LearningGuides/content/LearningContent';
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
      case 'LEARNING_GUIDES':
        return <LearningContent />;
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