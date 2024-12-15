import React from 'react';

const Navigation = () => {
    const navItems = [
        { name: 'Thẻ ghi nhớ', icon: 'fa-regular fa-lightbulb' },
        { name: 'Học', icon: 'fa-solid fa-book' },
        { name: 'Kiểm tra', icon: 'fa-regular fa-check-circle' },
        { name: 'Ghép thẻ', icon: 'fa-solid fa-puzzle-piece' },
        { name: 'Khối hộp', icon: 'fa-solid fa-cube' },
    ];

    return (
        <nav className="navigation">
            {navItems.map((item, index) => (
                <button key={index} className="nav-button">
                    <i className={item.icon}></i>
                    {item.name}
                </button>
            ))}
        </nav>
    );
};

export default Navigation;
