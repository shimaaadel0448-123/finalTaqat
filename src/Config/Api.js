import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL || "http://localhost:5000";

const Api = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});

export default Api;
