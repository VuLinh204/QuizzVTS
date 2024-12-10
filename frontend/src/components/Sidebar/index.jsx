import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul className="sidebar__menu">
                <li className="sidebar__item active">
                    <i className="fa-solid fa-house"></i>
                </li>
                <li className="sidebar__item">
                    <i className="fa-solid fa-folder"></i>
                </li>
                <li className="sidebar__item">
                    <i className="fa-solid fa-bell"></i>
                </li>
                <hr className="sidebar__divider" />
                <li className="sidebar__item">
                    <i className="fa-solid fa-book-open"></i>
                </li>
                <li className="sidebar__item">
                    <i className="fa-solid fa-book"></i>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
