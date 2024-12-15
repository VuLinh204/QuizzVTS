import React, { useState } from 'react';
import AuthForm from '../../../components/AuthForm';
import authApi from '../../../api/authApi';

const LoginPage = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e) => {
        // e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await authApi.login(formData);
            console.log('Đăng nhập thành công', response);
            window.location.href = '/';
        } catch (err) {
            setLoading(false);
            setError('Đăng nhập thất bại. Vui lòng thử lại');
            console.error('Lỗi đăng nhập', err);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <AuthForm
            heading="Đăng nhập"
            isLogin={true}
            formData={formData}
            onSubmit={handleLogin}
            onSwitchMode={() => (window.location.href = '/register')}
            error={error}
            loading={loading}
            onChange={handleChange}
        />
    );
};

export default LoginPage;
