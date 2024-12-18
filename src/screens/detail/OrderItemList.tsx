import OrderAPI from "@/api/order.api";
import { OrderItem } from "@/data/Order.interface";
import React, { useEffect, useState } from "react";

interface OrderItemProps {
    id: string;
}
const OrderItemList = ({ id }: OrderItemProps) => {
    const [orderItem, setOrderItem] = useState<OrderItem[]>([]);
    const getData = async () => {
        await OrderAPI.getOrderItems(id).then((res) => {
            if (res.data) {
                setOrderItem(res.data);
            }
        });
    };
    useEffect(() => {
        getData();
    }, []);
    return (
        <div className="bg-white mt-10 rounded-md px-10 pt-10 pb-5">
            <div className="overflow-x-auto rounded-2xl border mx-4 border-gray-c4 ">
                <table className="bg-white w-full text-sm text-left text-gray-400">
                    <thead>
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                Tên sản phẩm
                            </th>
                            <th scope="col" className="px-6">
                                Màu sắc
                            </th>
                            <th scope="col" className="px-6">
                                Kích thước
                            </th>
                            <th scope="col" className="px-6">
                                Số lượng
                            </th>
                            <th scope="col" className="px-6 text-center">
                                Tổng giá
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {orderItem.map((item) => (
                            <tr className="bg-gray-100 border border-gray-c2 hover:bg-gray-c2 cursor-pointer">
                                <td className="py-3 px-6">
                                    {item.product?.product?.productName}
                                </td>
                                <td className="py-3 px-6">
                                    {item.product?.color?.name}
                                </td>
                                <td className="py-3 px-6">
                                    {item.product?.size}
                                </td>
                                <td className="py-3 px-6">{item.quantity}</td>
                                <td className="py-3 px-6 text-center">
                                    {item.subTotal?.toLocaleString("it-IT", {
                                        style: "currency",
                                        currency: "VND",
                                    })}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrderItemList;
