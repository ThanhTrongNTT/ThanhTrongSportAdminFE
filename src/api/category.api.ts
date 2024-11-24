import { Category } from "@/data/Interface";
import AxiosClient from "./axiosClient/AxiosClient";
import { ApiResponse } from "@/data/payload";

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
    getAllFromLevel: (
        level: number,
        pageNo: number,
        pageSize: number,
        sortBy: string,
        sortDir: string
    ) => {
        const url = `categories/level/${level}?pageNo=${pageNo}&pageSize=${pageSize}&sortBy=${sortBy}&sortDir=${sortDir}`;
        return AxiosClient.get(url);
    },
    getCategoriesList: () => {
        const url = `categories/list`;
        return AxiosClient.get(url);
    },
    getCategoryById: (id: string) => {
        const url = `categories/${id}`;
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
    deleteCategory: (id: string): Promise<ApiResponse> => {
        const url = `category/${id}`;
        return AxiosClient.delete(url);
    },
    getChildCategory: (id: string) => {
        const url = `categories/child-categories/${id}`;
        return AxiosClient.get(url);
    },
    getCategoriesListByLevel: (level: number) => {
        const url = `categories/list/${level}`;
        return AxiosClient.get(url);
    }
};
export default CategoryAPI;
