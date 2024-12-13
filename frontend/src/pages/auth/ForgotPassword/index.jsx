import React from 'react';
import AuthForm from '../../../components/AuthForm';

const ForgotPasswordPage = () => {
    const handleForgotPassword = (event) => {
        event.preventDefault();
        console.log('Yêu cầu lấy lại mật khẩu đã được gửi!');
    };

    const fields = [{ type: 'text', placeholder: 'Email', name: 'email', required: true }];

    const controls = [
        {
            label: 'Gửi yêu cầu',
            className: 'btn btn--primary',
            type: 'submit',
            onClick: handleForgotPassword,
        },
        {
            label: 'Quay lại',
            className: 'btn btn--normal',
            type: 'button',
            onClick: () => (window.location.href = '/login'),
        },
    ];

    return (
        <AuthForm
            heading="Quên mật khẩu"
            fields={fields}
            controls={controls}
            isLogin={false}
            onSwitchMode={() => (window.location.href = '/login')}
            onSubmit={handleForgotPassword}
        />
    );
};

export default ForgotPasswordPage;
