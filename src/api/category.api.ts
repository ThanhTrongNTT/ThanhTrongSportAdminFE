import { Category } from "@/data/Interface";
import AxiosClient from "./axiosClient/AxiosClient";

const CategoryAPI = {
    getAllCategory: (
        pageNo: number,
        pageSize: number,
        sortBy: string,
        sortDir: string
    ) => {
        const url = `categories?pageNo=${pageNo}&pageSize=${pageSize}&sortBy=${sortBy}&sortDir=${sortDir}`;
        return AxiosClient.get(url);
    },
    getCategoryById: (id: string) => {
        const url = `categroies/${id}`;
        return AxiosClient.get(url);
    },
    addCategory: (category: Category) => {
        const url = `category`;
        return AxiosClient.post(url, category);
    },
    updateCategory: (category: Category, id: string) => {
        const url = `category/${id}`;
        return AxiosClient.put(url, category);
    },
    deleteCategory: (id: string) => {
        const url = `category/${id}`;
        return AxiosClient.delete(url);
    },
};
export default CategoryAPI;
