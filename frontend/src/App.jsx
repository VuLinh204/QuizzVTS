import Header from './components/Header';

import { Outlet } from 'react-router-dom';

import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

export default function App() {
    return (
        <>
            <Header />
            <Sidebar />
            <main className="main-container">
                <Outlet />
            </main>

            <Footer />
        </>
    );
}
