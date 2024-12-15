import axios from 'axios';

const baseURL = 'http://localhost:5025/api/account';

const axiosClient = axios.create({
    baseURL: `${baseURL}/`,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosClient;
