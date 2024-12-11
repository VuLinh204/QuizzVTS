import React, { useState } from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = ({ onMenuClick }) => {
    const [activeItem, setActiveItem] = useState('home');
    const [isExpanded, setIsExpanded] = useState(false);

    const handleItemClick = (item) => {
        setActiveItem(item);
    };

    const toggleSidebar = () => {
        setIsExpanded(!isExpanded);
        onMenuClick();
    };

    return (
        <div className={`sidebar ${isExpanded ? 'sidebar--expanded' : ''}`} id="sidebar">
            <div className=" menu-toggle menu__bar-icon" onClick={toggleSidebar}>
                <i className="fa fa-bars"></i>
            </div>
            <ul className="sidebar__menu">
                <Link
                    className={`sidebar__item ${activeItem === 'home' ? 'active' : ''}`}
                    onClick={() => handleItemClick('home')}
                    to="/"
                >
                    <i className="fa-solid fa-house"></i>
                    <span className="sidebar__text">Trang chủ</span>
                </Link>
                <Link
                    className={`sidebar__item ${activeItem === 'library' ? 'active' : ''}`}
                    onClick={() => handleItemClick('library')}
                    to="/"
                >
                    <i className="fa-solid fa-folder"></i>
                    <span className="sidebar__text">Thư viện</span>
                </Link>
                <Link
                    className={`sidebar__item ${activeItem === 'notifications' ? 'active' : ''}`}
                    onClick={() => handleItemClick('notifications')}
                    to="/"
                >
                    <i className="fa-solid fa-bell"></i>
                    <span className="sidebar__text">Thông báo</span>
                </Link>
                <hr className="sidebar__divider" />
                <Link
                    className={`sidebar__item ${activeItem === 'notes' ? 'active' : ''}`}
                    onClick={() => handleItemClick('notes')}
                    to="/Course-unit"
                >
                    <i className="fa-solid fa-book-open"></i>
                    <span className="sidebar__text">Thẻ ghi nhớ</span>
                </Link>
                <Link
                    className={`sidebar__item ${activeItem === 'advice' ? 'active' : ''}`}
                    onClick={() => handleItemClick('advice')}
                    to="/"
                >
                    <i className="fa-solid fa-book"></i>
                    <span className="sidebar__text">Lời khuyên</span>
                </Link>
            </ul>
        </div>
    );
};

export default Sidebar;
