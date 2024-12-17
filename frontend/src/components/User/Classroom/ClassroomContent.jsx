import React from 'react';
import ClassPreview from './ClassPreview';

const ClassroomContent = ({ username }) => {
  const classes = [];

  return (
    <div className="DashboardPage-primaryContents">
      <div className="DashboardPage-main">
        <div className="UIContainer">
          <div className="ProfilePage-content">
            <div className="ProfileClassesPage">
              <div className="UIDiv ClassesFeed">
                {classes.length > 0 ? (
                  classes.map((classItem, index) => (
                    <ClassPreview
                      key={index}
                      className={classItem.className}
                      school={classItem.school}
                      membersCount={1}
                      setsCount={0}
                    />
                  ))
                ) : (
                  <div className="empty-state">
                    <img
                      alt="Không tìm thấy lớp học nào trong thư viện"
                      src="https://assets.quizlet.com/_next/static/media/classes_empty.7bc6c171.svg"
                    />
                    <div className="title" style={{ color: 'white', fontSize: '24px' }}>
                      {username} [abc] chưa tạo lớp học nào
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassroomContent; 