import React, { useState } from 'react';
import Modal from 'react-modal';
import CreateClassForm from './CreateClassForm';
import ClassPreview from './ClassPreview';
import '../css/ClassContent.css';

// Đảm bảo modal được gắn vào root app
Modal.setAppElement('#root');

const ClassroomContent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [classes, setClasses] = useState([]);

  const handleCreateClass = (newClass) => {
    setClasses([...classes, newClass]);
    setIsModalOpen(false);
  };

  const modalStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding: 0,
      border: 'none',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)'
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)'
    }
  };

  return (
    <div className="DashboardPage-primaryContents">
      <div className="DashboardPage-main">
        <div className="UIContainer">
          <div className="ProfilePage-content">
            <div className="ProfileClassesPage">
              <div className="UIDiv ClassesFeed">
                {classes.length > 0 ? (
                  // Hiển thị danh sách lớp học nếu có
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
                  // Hiển thị empty state nếu chưa có lớp học
                  <div className="empty-state">
                    <img
                      alt="Không tìm thấy lớp học nào trong thư viện"
                      src="https://assets.quizlet.com/_next/static/media/classes_empty.7bc6c171.svg"
                    />
                    <div className="title" style={{color: 'white', fontSize: '24px'}}>
                      Bạn chưa tạo hoặc tham gia lớp học nào
                    </div>
                    <div className="description" style={{color: 'white'}}>
                      Tạo một lớp học để giúp bạn sắp xếp học phần của mình và
                      chia sẻ chúng với học sinh
                    </div>
                    <div className="button-container">
                      <button
                        type="button"
                        aria-label="Tạo lớp học"
                        className="create-class-button"
                        onClick={() => setIsModalOpen(true)}
                      >
                        <span>Tạo lớp học</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Form */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        style={modalStyles}
        contentLabel="Tạo lớp học"
      >
        <CreateClassForm 
          onCreateClass={handleCreateClass}
          onClose={() => setIsModalOpen(false)}
        />
      </Modal>
    </div>
  );
};

export default ClassroomContent; 