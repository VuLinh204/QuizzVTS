import React from 'react';
import AuthForm from '../../../components/AuthForm';

const RegisterPage = () => {
    const handleRegister = (event) => {
        event.preventDefault();
        console.log('Đăng ký với email thành công!');
    };

    const fields = [{ type: 'text', placeholder: 'Email', name: 'email', required: true }];

    const controls = [
        {
            label: 'Đăng ký',
            className: 'btn btn--primary',
            type: 'submit',
            onClick: handleRegister,
        },
    ];

    return (
        <AuthForm
            heading="Đăng ký"
            fields={fields}
            controls={controls}
            isLogin={false}
            onSwitchMode={() => (window.location.href = '/login')}
            onSubmit={handleRegister}
        />
    );
};

export default RegisterPage;
