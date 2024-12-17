import React, { useState } from 'react';
import MainContent from './MainContent';
import './UserNonInfo.css';

const UserInfo = () => {
  const [activeTab, setActiveTab] = useState('CLASSES');
  
  const tabs = [
    { label: 'Lớp học', key: 'CLASSES', path: '', selected: activeTab === 'CLASSES' },
    { label: 'Học phần', key: 'SETS', path: '/sets', selected: activeTab === 'SETS' },
    { label: 'Bài kiểm tra thử', key: 'PRACTICE_TESTS', path: '/practice-tests', selected: activeTab === 'PRACTICE_TESTS' },
    { label: 'Hướng dẫn học', key: 'LEARNING_GUIDES', path: '/learning-guides', selected: activeTab === 'LEARNING_GUIDES' },
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
              <div className="user-profile">
                <div className="user-avatar">
                  <img 
                    src="https://assets.quizlet.com/static/i/animals/113.e4b7e1c4ed27afa.jpg" 
                    alt="User avatar"
                    className="avatar-image"
                  />
                </div>
                <div className="user-name">
                  <h2>abc</h2>
                </div>
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
          <MainContent activeTab={activeTab} />
        </div>
      </section>
    </div>
  );
};

export default UserInfo;
