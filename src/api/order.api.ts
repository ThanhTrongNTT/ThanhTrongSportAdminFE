import AxiosClient from './axiosClient/AxiosClient';

const OrderAPI = {
    getAllOrders: (pageNo: number, pageSize: number, sortBy: string, sortDir: string) => {
        const url = `orders?pageNo=${pageNo}&pageSize=${pageSize}&sortBy=${sortBy}&sortDir=${sortDir}`;
        return AxiosClient.get(url);
    },
    getOrderByUserId: (email: string) => {
        const url = `orders/${email}`;
        return AxiosClient.get(url);
    },
};
export default OrderAPI;
