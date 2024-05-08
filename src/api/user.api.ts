import { Address, ChangePasswordRequest, User } from '~/data/Interface';
import AxiosClient from './axiosClient/AxiosClient';

const userApi = {
    getMe: (email: string) => {
        const url = `user/${email}`;
        return AxiosClient.get(url);
    },
    getUsers: (pageNo: number, pageSize: number, sortBy: string, sortDir: string) => {
        const url = `users/paging?pageNo=${pageNo}&pageSize=${pageSize}&sortBy=${sortBy}&sortDir=${sortDir}`;
        return AxiosClient.get(url);
    },
    getUserByName: (name: string) => {
        const url = `users/name/${name}`;
        return AxiosClient.get(url);
    },
    getById: (id: string) => {
        const url = `user/${id}`;
        return AxiosClient.get(url);
    },
    updateProfile: (user: User, email: string) => {
        const url = `user/${email}`;
        return AxiosClient.put(url, user);
    },
    deleteUser: (id: string) => {
        const url = `user/${id}`;
        return AxiosClient.delete(url);
    },
    searchUser: (
        search: string,
        pageNo: number,
        pageSize: number,
        sortBy: string,
        sortDir: string,
    ) => {
        const url = `users/search-by-name?keyword=${search}&pageNo=${pageNo}&pageSize=${pageSize}&sortBy=${sortBy}&sortDir=${sortDir}`;
        return AxiosClient.get(url);
    },
    // updateAvatar: (email: string, avatar: string) => {
    //     const url = `user/avt/${email}`;
    //     return AxiosClient.put(url, avatar);
    // },
    changePassword: (changePasswordRequest: ChangePasswordRequest) => {
        const url = `user/change-password`;
        return AxiosClient.post(url, changePasswordRequest);
    },
};
export default userApi;
