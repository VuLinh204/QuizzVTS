import Header from './components/Header';

import { Outlet } from 'react-router-dom';

import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import { useState } from 'react';

export default function App() {
    const [isMenuClicked, setIsMenuClicked] = useState(false);

    const handleMenuClick = () => {
        setIsMenuClicked((prevState) => !prevState);
    };

    return (
        <>
            <Header />
            <Sidebar onMenuClick={handleMenuClick} />
            <div className={`main-container ${isMenuClicked ? 'menu-clicked' : ''}`}>
                <Outlet />
            </div>

            <Footer />
        </>
    );
}
