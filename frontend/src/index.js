import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import './assets/Base.css';
import './assets/App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import App from './App';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import LoginPage from './pages/auth/Login/index';
import RegisterPage from './pages/auth/Register';
import ForgotPasswordPage from './pages/auth/ForgotPassword';
import CoursePage from './pages/CoursePage';
import CourseInput from './components/CourseInput';
import CourseUnit from './components/CourseUnit';
import Library from './components/Librarys';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <StrictMode>
        <Toaster
            toastOptions={{
                duration: 3000,
                style: { borderRadius: '10px', background: '#2c3030', color: '#fff' },
            }}
            position="top-center"
        />
        <BrowserRouter>
            <Routes>
                <Route path="login" element={<LoginPage />} />
                <Route path="register" element={<RegisterPage />} />
                <Route path="forgot_password" element={<ForgotPasswordPage />} />

                <Route path="/" element={<App />}>
                    <Route index element={<Home />} />
                    <Route path="course-input" element={<CourseInput />} />
                    <Route path="course-unit" element={<CourseUnit />} />
                    <Route path="library" element={<Library />} />
                    <Route path="course-detail/:courseId" element={<CoursePage />} />
                </Route>

                <Route path="*" element={<ErrorPage message="404 | Trang không tìm thấy" />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>,
);
