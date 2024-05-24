import { Product, SearchParams } from '@/data/Interface';
import AxiosClient from './axiosClient/AxiosClient';

const ProductAPI = {
    getAllProducts: (pageNo: number, pageSize: number, sortBy: string, sortDir: string) => {
        const url = `products?pageNo=${pageNo}&pageSize=${pageSize}&sortBy=${sortBy}&sortDir=${sortDir}`;
        return AxiosClient.get(url);
    },
    searchProductByName: (searchParam: SearchParams) => {
        const url = `products/search-by-name?keyword=${searchParam.keyWord}&pageNo=${searchParam.pageNo}&pageSize=${searchParam.pageSize}&sortBy=${searchParam.sortBy}&sortDir=${searchParam.sortDir}`;
        return AxiosClient.get(url);
    },
    serachProductByCategory: (
        categoryname: string,
        pageNo: number,
        pageSize: number,
        sortBy: string,
        sortDir: string,
    ) => {
        const url = `products/search-by-category?categoryname=${categoryname}&pageNo=${pageNo}&pageSize=${pageSize}&sortBy=${sortBy}&sortDir=${sortDir}`;
        return AxiosClient.get(url);
    },
    searchProductByPrice: (
        minPrice: number,
        maxPrice: number,
        pageNo: number,
        pageSize: number,
        sortBy: string,
        sortDir: string,
    ) => {
        const url = `products/search-by-price?minPrice=${minPrice}&maxPrice=${maxPrice}&pageNo=${pageNo}&pageSize=${pageSize}&sortBy=${sortBy}&sortDir=${sortDir}`;
        return AxiosClient.get(url);
    },
    getProductById: (id: string) => {
        const url = `products/${id}`;
        return AxiosClient.get(url);
    },
    addProduct: (product: Product) => {
        const url = `product`;
        return AxiosClient.post(url, product);
    },
    updateProduct: (product: Product, id: string) => {
        const url = `product/${id}`;
        return AxiosClient.put(url, product);
    },
    deleteProduct: (id: string) => {
        const url = `product/${id}`;
        return AxiosClient.delete(url);
    },
};
export default ProductAPI;
