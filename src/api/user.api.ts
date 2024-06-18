import { ChangePasswordRequest, SearchParams, User } from "@/data/Interface";
import AxiosClient from "./axiosClient/AxiosClient";
import { AxiosResponse } from "axios";

const userApi = {
    getMe: (email: string): Promise<AxiosResponse<User>> => {
        const url = `user/${email}`;
        return AxiosClient.get(url);
    },
    getUsers: (
        pageNo: number,
        pageSize: number,
        sortBy: string,
        sortDir: string
    ) => {
        const url = `users/paging?pageNo=${pageNo}&pageSize=${pageSize}&sortBy=${sortBy}&sortDir=${sortDir}`;
        return AxiosClient.get(url);
    },
    getById: (id: string) => {
        const url = `users/${id}`;
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
    searchUser: (searchParam: SearchParams) => {
        const url = `users/search-by-name?keyword=${searchParam.keyWord}&pageNo=${searchParam.pageNo}&pageSize=${searchParam.pageSize}&sortBy=${searchParam.sortBy}&sortDir=${searchParam.sortDir}`;
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
    update: (id: string, user: User) => {
        const url = `user/${id}`;
        return AxiosClient.put(url, user);
    },
};
export default userApi;
