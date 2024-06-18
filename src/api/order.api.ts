import { AxiosResponse } from "axios";
import AxiosClient from "./axiosClient/AxiosClient";
import { Order, PageResponse } from "@/data/Interface";

const OrderAPI = {
    getAllOrders: (
        pageNo: number,
        pageSize: number,
        sortBy: string,
        sortDir: string
    ): Promise<AxiosResponse<PageResponse<Order>>> => {
        const url = `orders?pageNo=${pageNo}&pageSize=${pageSize}&sortBy=${sortBy}&sortDir=${sortDir}`;
        return AxiosClient.get(url);
    },
    getOrderByUserId: (email: string) => {
        const url = `orders/${email}`;
        return AxiosClient.get(url);
    },
};
export default OrderAPI;
