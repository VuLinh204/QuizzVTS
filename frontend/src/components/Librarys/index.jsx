import React, { useState } from 'react';
import MainContent from './MainContent';
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
          <MainContent activeTab={activeTab} />
        </div>
      </section>
    </div>
  );
};

export default Library;
