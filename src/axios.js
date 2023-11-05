import axios from 'axios';
import Cookies from 'js-cookie';
import config from './config.js';

const instance = axios.create({
  baseURL: `${config.API_BASE_URL}`,
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = Cookies.get('accessToken');
  return config;
});

export default instance;
