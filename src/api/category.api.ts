import { Category, PageResponse } from "@/data/Interface";
import AxiosClient from "./axiosClient/AxiosClient";
import { AxiosResponse } from "axios";

const CategoryAPI = {
    getAllCategory: (
        pageNo: number,
        pageSize: number,
        sortBy: string,
        sortDir: string
    ): Promise<AxiosResponse<PageResponse<Category>>> => {
        const url = `categries?pageNo=${pageNo}&pageSize=${pageSize}&sortBy=${sortBy}&sortDir=${sortDir}`;
        return AxiosClient.get(url);
    },
    getCategoryById: (id: string) => {
        const url = `categries/${id}`;
        return AxiosClient.get(url);
    },
    addCategory: (category: Category) => {
        const url = `categry`;
        return AxiosClient.post(url, category);
    },
    updateCategory: (category: Category, id: string) => {
        const url = `categry/${id}`;
        return AxiosClient.put(url, category);
    },
    deleteCategory: (id: string) => {
        const url = `categry/${id}`;
        return AxiosClient.delete(url);
    },
};
export default CategoryAPI;
