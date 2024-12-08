// Nhập các module cần thiết từ React và ReactDOM
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

// Nhập các style toàn cục
import './assets/Base.css';
import './assets/App.css';

// Nhập các module từ react-router-dom để xử lý routing
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { Toaster } from 'react-hot-toast';

// Nhập component gốc của ứng dụng
import App from './App';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Nhập các trang cho routing
import Home from './pages/Home';
import PlayQuiz from './pages/PlayQuiz';
import MyQuizzes from './pages/MyQuizzes';
import CreateQuiz from './pages/CreateQuiz';
import EditQuiz, { loader as editQuizLoader } from './pages/EditQuiz';
import ViewQuiz, { loader as viewQuizLoader } from './pages/ViewQuiz';
import ErrorPage from './pages/ErrorPage';
import LoginPage from './pages/auth/Login/index';
import ProtectedRoute from './components/ProtectedRoute';
import RegisterPage from './pages/auth/Register';
import ForgotPasswordPage from './pages/auth/ForgotPassword';

// Tạo router với các route và các component
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage message="404 | Trang không tìm thấy" />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/login',
                element: <LoginPage />,
            },
            {
                path: '/register',
                element: <RegisterPage />,
            },
            {
                path: '/forgot_password',
                element: <ForgotPasswordPage />,
            },
            {
                path: '/play-quiz',
                element: <PlayQuiz />,
            },
            {
                path: '/create-quiz',
                element: <ProtectedRoute element={<CreateQuiz />} />,
            },
            {
                path: '/my-quizzes',
                element: <ProtectedRoute element={<MyQuizzes />} />,
            },
            {
                path: '/view-quiz',
                element: <ViewQuiz />,
                errorElement: <ErrorPage message="Quiz không tìm thấy" />,
                loader: viewQuizLoader,
            },
            {
                path: '/edit-quiz',
                element: <ProtectedRoute element={<EditQuiz />} />,
                errorElement: <ErrorPage message="Quiz không tìm thấy" />,
                loader: editQuizLoader,
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

// Render ứng dụng trong Provider Redux và RouterProvider
root.render(
    <StrictMode>
        <Provider store={store}>
            {/* Thêm thông báo toaster với các tùy chọn tùy chỉnh */}
            <Toaster
                toastOptions={{
                    duration: 3000,
                    style: { borderRadius: '10px', background: '#2c3030', color: '#fff' },
                }}
                position="top-center"
            />

            {/* Cung cấp router cho việc routing trong ứng dụng */}
            <RouterProvider router={router} />
        </Provider>
    </StrictMode>,
);
