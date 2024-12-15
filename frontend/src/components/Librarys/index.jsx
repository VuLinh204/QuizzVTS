import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Library.css';

const Library = () => {
  const [activeTab, setActiveTab] = useState('CLASSES');
  
  const tabs = [
    { label: 'Lớp học', key: 'CLASSES', path: '', selected: activeTab === 'CLASSES' },
    { label: 'Học phần', key: 'SETS', path: '/sets', selected: activeTab === 'SETS' },
    { label: 'Bài kiểm tra thử', key: 'PRACTICE_TESTS', path: '/practice-tests', selected: activeTab === 'PRACTICE_TESTS' },
    { label: 'Lời giải chuyên gia', key: 'EXPLANATIONS', path: '/explanations', selected: activeTab === 'EXPLANATIONS' },
    { label: 'Thư mục', key: 'FOLDERS', path: '/folders', selected: activeTab === 'FOLDERS' }
  ];

  const handleTabClick = (tabKey) => {
    setActiveTab(tabKey);
  };

  return (
    <div className="DashboardLayout-container">
      <section className="DashboardLayout-main" role="contentinfo">
        <div className="DashboardPage">
          {/* Header */}
          <div className="DashboardPage-header">
            <div className="header-container">
              <div className="header-title">
                <h2>Thư viện của bạn</h2>
              </div>
              
              {/* Tabs */}
              <div className="tabs-container">
                <div className="AssemblyTabs" role="tablist" aria-orientation="horizontal">
                  {tabs.map((tab) => (
                    <div
                      key={tab.key}
                      aria-label={tab.label}
                      tabIndex={tab.selected ? "0" : "-1"}
                      aria-selected={tab.selected}
                      role="tab"
                      className={`AssemblyTab ${tab.selected ? 'selected' : ''}`}
                      onClick={() => handleTabClick(tab.key)}
                    >
                      {tab.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="DashboardPage-primaryContents">
            <div className="DashboardPage-main">
              <div className="UIContainer">
                <div className="ProfilePage-content">
                  <div className="ProfileClassesPage">
                    <div className="UIDiv ClassesFeed">
                      <div className="empty-state">
                        <img
                          alt="Không tìm thấy lớp học nào trong thư viện"
                          src="https://assets.quizlet.com/_next/static/media/classes_empty.7bc6c171.svg"
                        />
                        <div className="title">
                          Bạn chưa tạo hoặc tham gia lớp học nào
                        </div>
                        <div className="description">
                          Tạo một lớp học để giúp bạn sắp xếp học phần của mình và
                          chia sẻ chúng với học sinh
                        </div>
                        <div className="button-container">
                          <button
                            type="button"
                            aria-label="Tạo lớp học"
                            className="AssemblyButtonBase"
                          >
                            <span>Tạo lớp học</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Library;
