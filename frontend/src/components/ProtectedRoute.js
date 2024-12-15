import { Navigate } from 'react-router-dom';

// Giả sử bạn lưu trạng thái đăng nhập trong Redux store
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ element }) => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated); // Kiểm tra trạng thái đăng nhập trong store

    if (!isAuthenticated) {
        // Nếu chưa đăng nhập, chuyển hướng về trang đăng nhập
        return <Navigate to="/login" />;
    }

    return element;
};

export default ProtectedRoute;
