// Importing styles and required components
import './headerStyles.css';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import ThemeToggleSwitch from './ThemeToggleSwitch';
import { useEffect, useState } from 'react';

// Header Component
export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/search?query=${encodeURIComponent(searchQuery.trim())}`);
            setSearchQuery('');
            closeMenuWhenLinkOpened();
        }
    };

    const getInitialDarkMode = () => {
        const storedDarkMode = localStorage.getItem('darkMode');
        return storedDarkMode ? JSON.parse(storedDarkMode) : true;
    };
    const [darkMode, setDarkMode] = useState(getInitialDarkMode);

    useEffect(() => {
        document.body.classList.toggle('dark-mode', darkMode);
    }, [darkMode]);

    const location = useLocation();

    const toggleDarkMode = () => {
        setDarkMode((prev) => {
            const newDarkMode = !prev;
            localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
            return newDarkMode;
        });
    };

    const handleMenuToggle = () => {
        setMenuOpen((prev) => !prev);

        if (!menuOpen) {
            document.body.classList.add('menu-open');
        } else {
            document.body.classList.remove('menu-open');
        }
    };

    const closeMenuWhenLinkOpened = () => {
        setMenuOpen(false);
        document.body.classList.remove('menu-open');
    };

    return (
        <header className="header">
            <Link to="/" className="logo" onClick={closeMenuWhenLinkOpened}>
                Q
            </Link>

            <nav className="nav">
                <form className="search-form" onSubmit={handleSearchSubmit}>
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Tìm thẻ ghi nhớ..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button type="submit" className="search-button">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </form>
                <div className="buttons" style={{ display: 'flex' }}>
                    <ThemeToggleSwitch darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                </div>

                <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
                    <li>
                        <NavLink
                            to="/login"
                            onClick={closeMenuWhenLinkOpened}
                            className={({ isActive }) => (isActive ? 'active-link' : '')}
                        >
                            Login
                        </NavLink>
                        <span>|</span>
                        <NavLink
                            to="/register"
                            onClick={closeMenuWhenLinkOpened}
                            className={({ isActive }) => (isActive ? 'active-link' : '')}
                        >
                            Register
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
