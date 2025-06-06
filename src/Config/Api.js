import axios from 'axios';

export const ApiLink = "/api"; // تغيير إلى مسار نسبي
export const LocalApi = "http://localhost:5000";

const Api = axios.create({
    baseURL: ApiLink,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});

export default Api;