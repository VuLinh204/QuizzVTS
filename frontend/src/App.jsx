import Header from './components/Header';

import { Outlet } from 'react-router-dom';

import Footer from './components/Footer';

export default function App() {
    return (
        <>
            <Header />

            {/* Main container for rendering the content of the application */}
            <main className="main-container">
                {/* Outlet component is used for rendering nested routes */}
                <Outlet />
            </main>

            {/* Rendering the Footer component at the bottom of the application */}
            <Footer />
        </>
    );
}
