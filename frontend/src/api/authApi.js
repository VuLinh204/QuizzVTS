import axiosClient from './axiosClient';

const authApi = {
    login: async (data) => {
        try {
            const EmailOrUsername = data.email ? data.email : data.username;
            const response = await axiosClient.post('login', {
                password: data.password,
                EmailOrUsername,
            });
            return response.data;
        } catch (err) {
            throw data;
        }
    },

    register: async (data) => {
        try {
            const response = await axiosClient.post('register', {
                email: data.email,
                username: data.username,
                password: data.password,
            });
            return response.data;
        } catch (err) {
            throw err;
        }
    },
};

export default authApi;
