import axios from 'axios';

export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL
});

let bearerInterceptor: number | undefined;

// Adds bearer token to requests
export const addTokenToAxios = (token: string) => {
  bearerInterceptor = api.interceptors.request.use(
    (config) => {

      config.headers['Authorization'] = `Bearer ${token}`;
      return config;
    });
};

// Removes bearer token from requests
export const removeTokenFromAxios = () => {
  if (bearerInterceptor)
    api.interceptors.request.eject(bearerInterceptor);
};
