import axios from 'axios';
import { getCookie } from '../utils';

const apiClient = axios.create({
  headers: { 'Content-Type': 'application/json' },
});

apiClient.interceptors.request.use((config) => {
  if (!config?.headers) {
    throw new Error("Expected 'config' and 'config.headers' not to be undefined");
  }
  config.headers.Authorization = `Bearer ${getCookie('access_token')}`;
  return config;
});

export const clearAxios = axios.create();

export default apiClient;
