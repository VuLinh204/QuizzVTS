import React, { useState } from 'react';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import CourseUnitPreview from './CourseUnitPreview';
import './CourseUnitContent.css';

// Đảm bảo modal được gắn vào root app
Modal.setAppElement('#root');

const CourseUnitContent = () => {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [courseUnits, setCourseUnits] = useState([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState('Gần đây');

    const handleCreateClick = () => {
        navigate('/course-unit');
    };

    const handleCreateCourseUnit = (newCourseUnit) => {
        setCourseUnits([...courseUnits, newCourseUnit]);
        setIsModalOpen(false);
    };

    const filters = [
        { id: 'recent', label: 'Gần đây' },
        { id: 'created', label: 'Đã tạo' },
        { id: 'studied', label: 'Đã học' }
    ];

    const handleFilterSelect = (filter) => {
        setSelectedFilter(filter.label);
        setIsDropdownOpen(false);
        // Thêm logic lọc ở đây
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
                        <div className="ProfileRecentPage">
                            <div className="ProfileRecentFeed">
                                <div className="p1vmf404">
                                    <div data-overlay-container="true" className="dropdown-container">
                                        <button
                                            type="button"
                                            aria-haspopup="true"
                                            aria-expanded={isDropdownOpen}
                                            aria-label="Lọc học phần"
                                            className="AssemblyButtonBase AssemblySecondaryButton AssemblyButtonBase--medium AssemblyButtonBase--padding"
                                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                        >
                                            <span>{selectedFilter}</span>
                                            <svg
                                                aria-label="dấu mũ chỉ xuống"
                                                className="AssemblyIcon AssemblyIcon--small"
                                                role="img"
                                                viewBox="0 0 24 24"
                                                width="24"
                                                height="24"
                                            >
                                                <path d="M7 10l5 5 5-5z" fill="currentColor" />
                                            </svg>
                                        </button>

                                        {isDropdownOpen && (
                                            <div className="dropdown-menu">
                                                {filters.map((filter) => (
                                                    <button
                                                        key={filter.id}
                                                        className="dropdown-item"
                                                        onClick={() => handleFilterSelect(filter)}
                                                    >
                                                        {filter.label}
                                                    </button>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                {courseUnits.length > 0 ? (
                                    // Hiển thị danh sách học phần nếu có
                                    courseUnits.map((unit, index) => (
                                        <CourseUnitPreview
                                            key={index}
                                            unitName={unit.unitName}
                                            description={unit.description}
                                            termsCount={0}
                                        />
                                    ))
                                ) : (
                                    // Hiển thị empty state nếu chưa có học phần
                                    <div className="empty-state">
                                        <img
                                            alt="Không tìm thấy học phần nào trong thư viện"
                                            src="https://assets.quizlet.com/_next/static/media/sets_empty.e06b562c.svg"
                                        />
                                        <div className="title" style={{ color: 'white' }}>
                                            Bạn chưa có học phần nào
                                        </div>
                                        <div className="description">
                                            Các học phần bạn tạo hoặc học sẽ hiển thị ở đây.
                                        </div>
                                        <div className="button-container">
                                            <button
                                                type="button"
                                                aria-label="Tạo học phần"
                                                className="AssemblyButtonBase"
                                                onClick={handleCreateClick}
                                            >
                                                <span>Tạo học phần</span>
                                            </button>
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

export default CourseUnitContent;