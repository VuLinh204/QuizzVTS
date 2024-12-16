import { useEffect, useState } from 'react';

const useFBSDK = () => {
    const [fbUserInfo, setFbUserInfo] = useState(null);
    const [fbStatus, setFbStatus] = useState(null);

    useEffect(() => {
        // Khởi tạo Facebook SDK khi document được load
        window.fbAsyncInit = function () {
            window.FB.init({
                appId: '1140022837557482',
                cookie: true,
                xfbml: true,
                version: 'v16.0',
            });

            console.log('Facebook SDK initialized successfully');
        };

        // Tải Facebook SDK
        (function (d, s, id) {
            let js;
            let fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s);
            js.id = id;
            js.src = 'https://connect.facebook.net/en_US/sdk.js';
            fjs.parentNode.insertBefore(js, fjs);
        })(document, 'script', 'facebook-jssdk');

        const checkFBAvailability = setTimeout(() => {
            if (window.FB) {
                console.log('Facebook SDK is available.');
            } else {
                console.error('Facebook SDK not loaded.');
            }
        }, 5000);

        return () => {
            if (window.FB) {
                window.FB.getLoginStatus((response) => {
                    if (response.status === 'connected') {
                        window.FB.logout();
                    }
                });
            }
            clearTimeout(checkFBAvailability);
        };
    }, []);

    const handleLogin = () => {
        window.FB.login(
            (response) => {
                if (response.status === 'connected') {
                    const accessToken = response.authResponse.accessToken;
                    window.FB.api('/me', { fields: 'id,name,email' }, (userInfo) => {
                        setFbUserInfo(userInfo);
                        setFbStatus('success');
                        console.log('Thông tin người dùng từ Facebook:', userInfo);
                    });
                } else {
                    setFbStatus('failed');
                    console.log('Facebook login failed');
                }
            },
            { scope: 'public_profile,email' },
        );
    };

    return {
        fbUserInfo,
        fbStatus,
        handleLogin,
    };
};

export default useFBSDK;
