import axios, { AxiosInstance } from 'axios';

const baseURL = 'http://172.20.100.22:3000';

const instance: AxiosInstance = axios.create({
    baseURL,
    timeout: 10000, // Timeout after 10 seconds
    headers: {
        'Content-Type': 'application/json',
    },
});

export default instance;
