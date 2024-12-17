import React from 'react';
import CourseUnitPreview from './CourseUnitPreview';
import '../css/CourseUnitContent.css';

const CourseUnitContent = ({ username }) => {
    const courseUnits = [];

    return (
        <div className="DashboardPage-primaryContents">
            <div className="DashboardPage-main">
                <div className="UIContainer">
                    <div className="ProfilePage-content">
                        <div className="ProfileRecentPage">
                            <div className="ProfileRecentFeed">
                                {courseUnits.length > 0 ? (
                                    courseUnits.map((unit, index) => (
                                        <CourseUnitPreview
                                            key={index}
                                            unitName={unit.unitName}
                                            description={unit.description}
                                            termsCount={0}
                                        />
                                    ))
                                ) : (
                                    <div className="empty-state">
                                        <img
                                            alt="Không tìm thấy học phần nào trong thư viện"
                                            src="https://assets.quizlet.com/_next/static/media/sets_empty.e06b562c.svg"
                                        />
                                        <div className="title" style={{ color: 'white', fontSize: '24px' }}>
                                            {username} [abc] chưa tạo bất cứ học phần nào.
                                        </div>
                                        <div className="description" style={{ color: 'white' }}>
                                            Các học phần người này tạo sẽ xuất hiện ở đây
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