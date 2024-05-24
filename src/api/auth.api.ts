import AxiosClient from './axiosClient/AxiosClient';

const AuthAPI = {
    login: (email: string, password: string) => {
        const url = 'auth/login';
        return AxiosClient.post(url, { email, password });
    },
    logout: () => {
        const url = 'auth/logout';
        return AxiosClient.post(url);
    },
    refreshToken: (refreshToken: string) => {
        const url = `auth/refresh-token`;
        return AxiosClient.post(url, { refreshToken });
    },
};

export default AuthAPI;
