import { Size } from "@/data/Interface";
import AxiosClient from "./axiosClient/AxiosClient";

const SizeAPI = {
    async getAllSizes(
        pageNo: number,
        pageSize: number,
        sortBy: string,
        sortDir: string
    ) {
        const url = `/sizes?pageNo=${pageNo}&pageSize=${pageSize}&sortBy=${sortBy}&sortDir=${sortDir}`;
        return await AxiosClient.get(url);
    },
    async getListSize() {
        const url = `/sizes/list`;
        return await AxiosClient.get(url);
    },
    async getSizeById(id: string) {
        const url = `/sizes/${id}`;
        return await AxiosClient.get(url);
    },
    async createSize(size: Size) {
        const url = `/size`;
        return await AxiosClient.post(url, size);
    },
    async updateSize(size: Size) {
        const url = `/size/${size.id}`;
        return await AxiosClient.put(url, size);
    },
    async deleteSize(id: string) {
        const url = `/size/${id}`;
        return await AxiosClient.delete(url);
    },
};

export default SizeAPI;
