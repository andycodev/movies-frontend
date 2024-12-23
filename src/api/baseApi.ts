
import axios from 'axios';

const baseApi = axios.create({
    baseURL: import.meta.env.VITE_BASE_API_URL as string,
});

export default baseApi;
