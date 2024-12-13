import React from 'react';
import PropTypes from 'prop-types';
import './AuthForm.css';

const AuthForm = ({ heading, isLogin = true, isForgotPassword = false, onSwitchMode, onSubmit }) => {
    return (
        <div className="auth-form">
            <div className="auth-form__container">
                <div className="auth-form__header">
                    <h3 className="auth-form__heading">{heading}</h3>
                    {!isForgotPassword && (
                        <span className="auth-form__switch-btn" onClick={onSwitchMode}>
                            {isLogin ? 'Đăng ký' : 'Đăng nhập'}
                        </span>
                    )}
                </div>

                {/* Form */}
                <div className="auth-form__form">
                    <div className="auth-form__group">
                        <label className="auth-form__label" htmlFor="email">
                            Email
                        </label>
                        <input type="text" className="auth-form__input" placeholder="Email" />
                    </div>
                    {isLogin && (
                        <div className="auth-form__group">
                            <label className="auth-form__label" htmlFor="password">
                                Mật khẩu
                            </label>
                            <input type="password" className="auth-form__input" placeholder="Mật khẩu" />
                        </div>
                    )}
                </div>

                {/* Aside */}
                {!isForgotPassword && (
                    <div className="auth-form__aside">
                        <div className="auth-form__help">
                            <a href="/forgot_password" className="auth-form__help-link auth-form__help-forgot">
                                Quên mật khẩu
                            </a>
                            <span className="auth-form__help-separate"></span>
                            <a href="/help" className="auth-form__help-link">
                                Cần trợ giúp?
                            </a>
                        </div>
                    </div>
                )}

                {/* Controls */}
                <div className="auth-form__controls">
                    <button className="btn btn--normal auth-form__controls-back" onClick={() => window.history.back()}>
                        TRỞ LẠI
                    </button>
                    <button className="btn btn--secondary" onClick={onSubmit}>
                        {isForgotPassword ? 'GỬI YÊU CẦU' : isLogin ? 'ĐĂNG NHẬP' : 'ĐĂNG KÝ'}
                    </button>
                </div>
            </div>

            {/* Social Logins */}
            {!isForgotPassword && (
                <div className="auth-form__socials">
                    <a href="/auth/facebook" className="auth-form__socials--facebook btn btn--size-s btn--with-icon">
                        <i className="auth-form__socials-icon fa-brands fa-square-facebook"></i>
                        <span className="auth-form__socials-title">Kết nối với Facebook</span>
                    </a>
                    <a href="/auth/google" className="auth-form__socials--google btn btn--size-s btn--with-icon">
                        <i className="auth-form__socials-icon fa-brands fa-google"></i>
                        <span className="auth-form__socials-title auth-form__socials-title--google">
                            Kết nối với Google
                        </span>
                    </a>
                </div>
            )}
        </div>
    );
};

AuthForm.propTypes = {
    heading: PropTypes.string.isRequired,
    isLogin: PropTypes.bool,
    isForgotPassword: PropTypes.bool,
    onSwitchMode: PropTypes.func,
    onSubmit: PropTypes.func.isRequired,
};

export default AuthForm;
