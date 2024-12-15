import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../../../components/AuthForm';
import authApi from '../../../api/authApi';

const RegisterPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        // birthdate: '',
        // termsAccepted: false,
    });

    const handleRegister = (e) => {
        // Gọi API đăng ký
        authApi
            .register(formData)
            .then((response) => {
                console.log('Đăng ký thành công', response.data);
                navigate('/login');
            })
            .catch((error) => {
                console.error('Đăng ký thất bại', error);
            });
    };

    const handleChange = (e) => {
        const { name, value, checked, type } = e.target;
        if (type === 'checkbox') {
            setFormData({
                ...formData,
                [name]: checked,
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    return (
        <AuthForm
            heading="Đăng ký"
            isLogin={false}
            formData={formData}
            onSubmit={handleRegister}
            onChange={handleChange}
            onSwitchMode={() => (window.location.href = '/login')}
        />
    );
};

export default RegisterPage;
