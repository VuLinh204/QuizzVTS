import React, { useState } from 'react';
import './Notifications.css';

const Notifications = ({ isSidebarExpanded }) => {
    return (
        <div
            className={`notifications-container ${
                isSidebarExpanded ? 'notifications--expanded' : 'notifications--collapsed'
            }`}
        >
            <div className="notifications-panel">
                <div className="notification">
                    <div className="icon">
                        <i className="fa-solid fa-trophy"></i>
                    </div>
                    <div className="content">
                        <p>
                            Bạn đã đạt được danh hiệu mới! <a href="#">Xem ngay</a>
                        </p>
                        <span>5 phút trước</span>
                    </div>
                </div>
                <div className="notification">
                    <div className="icon">
                        <i className="fa-solid fa-graduation-cap"></i>
                    </div>
                    <div className="content">
                        <p>
                            Chúc mừng bạn hoàn thành khóa học! <a href="#">Xem thành tựu</a>
                        </p>
                        <span>1 giờ trước</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Notifications;
