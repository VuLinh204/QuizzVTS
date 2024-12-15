import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './AuthForm.css';

const AuthForm = ({ isLogin, formData, onSubmit, onSwitchMode, onChange }) => {
    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (!isLogin && !formData.termsAccepted) {
            // Hiển thị cảnh báo nếu người dùng chưa đồng ý với điều khoản dịch vụ
            alert('Bạn cần đồng ý với điều khoản và chính sách bảo mật để tiếp tục.');
            return;
        }
        onSubmit(formData);
    };

    return (
        <div className="auth-form">
            <div className="auth-form__container">
                {/* Header */}
                <div className="auth-form__header">
                    <h3 className={`auth-form__tab ${isLogin ? 'active' : ''}`} onClick={onSwitchMode}>
                        Đăng nhập
                    </h3>
                    <h3 className={`auth-form__tab ${!isLogin ? 'active' : ''}`} onClick={onSwitchMode}>
                        Đăng ký
                    </h3>
                </div>

                {/* Social Login */}
                <div className="auth-form__socials">
                    <a href="#" className="auth-form__social-btn auth-form__social-btn--google">
                        <i className="fa-brands fa-google"></i>
                        Đăng nhập bằng Google
                    </a>
                    <a href="#" className="auth-form__social-btn auth-form__social-btn--facebook">
                        <i className="fa-brands fa-facebook"></i>
                        Đăng nhập bằng Facebook
                    </a>
                </div>

                <div className="auth-form__divider">
                    <span>hoặc email</span>
                </div>

                {/* Form */}
                <div className="auth-form__form">
                    {/* Conditional Fields */}
                    {!isLogin && (
                        <div className="auth-form__group">
                            <label className="auth-form__label" htmlFor="birthdate">
                                Ngày sinh
                            </label>
                            <input
                                type="date"
                                id="birthdate"
                                name="birthdate"
                                className="auth-form__input"
                                value={formData.birthdate || ''}
                                onChange={onChange}
                            />
                        </div>
                    )}

                    {!isLogin && (
                        <div className="auth-form__group">
                            <label className="auth-form__label" htmlFor="username">
                                Tên người dùng
                            </label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                className="auth-form__input"
                                placeholder="Nhập tên người dùng"
                                value={formData.username || ''}
                                onChange={onChange}
                            />
                        </div>
                    )}

                    <div className="auth-form__group">
                        <label className="auth-form__label" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            className="auth-form__input"
                            placeholder="Nhập địa chỉ email"
                            value={formData.email || ''}
                            onChange={onChange}
                        />
                    </div>

                    <div className="auth-form__group">
                        <label className="auth-form__label" htmlFor="password">
                            Mật khẩu
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="auth-form__input"
                            placeholder="Nhập mật khẩu"
                            value={formData.password || ''}
                            onChange={onChange}
                        />
                        {!isLogin && (
                            <div className="auth-form__terms">
                                <input
                                    type="checkbox"
                                    name="termsAccepted"
                                    checked={formData.termsAccepted || ''}
                                    onChange={onChange}
                                />
                                <label htmlFor="termsAccepted">
                                    Tôi đồng ý với{' '}
                                    <a href="#" className="auth-form__link">
                                        Điều khoản dịch vụ
                                    </a>{' '}
                                    và{' '}
                                    <a href="#" className="auth-form__link">
                                        Chính sách bảo mật
                                    </a>
                                </label>
                            </div>
                        )}
                    </div>
                </div>

                {/* Controls */}
                <div className="auth-form__controls">
                    <button className="auth-form__submit-btn" onClick={handleFormSubmit}>
                        {isLogin ? 'Đăng nhập' : 'Đăng ký'}
                    </button>
                </div>

                <div className="auth-form__footer">
                    {isLogin ? (
                        <p>
                            Lần đầu bạn sử dụng?{' '}
                            <a href="#" className="auth-form__link" onClick={onSwitchMode}>
                                Tạo tài khoản
                            </a>
                        </p>
                    ) : (
                        <p>
                            Đã có tài khoản?{' '}
                            <a href="#" className="auth-form__link" onClick={onSwitchMode}>
                                Đăng nhập
                            </a>
                        </p>
                    )}
                    {isLogin && (
                        <a href="#" className="auth-form__magic-link">
                            Đăng nhập bằng liên kết nhanh
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

AuthForm.propTypes = {
    isLogin: PropTypes.bool,
    formData: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onSwitchMode: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default AuthForm;
