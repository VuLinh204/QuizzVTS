import React from 'react';
import AuthForm from '../../../components/AuthForm';

const LoginPage = () => {
    const handleLogin = (event) => {
        event.preventDefault();
        console.log('Đăng nhập thành công!');
    };

    const fields = [
        { type: 'text', placeholder: 'Email', name: 'email', required: true },
        { type: 'password', placeholder: 'Mật khẩu', name: 'password', required: true },
    ];

    const controls = [
        {
            label: 'Đăng nhập',
            className: 'btn btn--primary',
            type: 'submit',
            onClick: handleLogin,
        },
    ];

    return (
        <AuthForm
            heading="Đăng nhập"
            fields={fields}
            controls={controls}
            isLogin={true}
            onSubmit={handleLogin}
            onSwitchMode={() => (window.location.href = '/register')}
        />
    );
};

export default LoginPage;
