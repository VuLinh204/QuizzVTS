import axiosClient from './axiosClient';

const authApi = {
    login: (data) => {
        return axiosClient.post(`/auth/login`, data);
    },
    getUser: (data) => {
        return axiosClient.get(`/auth/user`, data);
    },
    logout: () => {
        return axiosClient.post(`/auth/logout`);
    },
};

export default authApi;
