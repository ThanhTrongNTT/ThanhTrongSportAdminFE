import { IconAdd } from "@/components/icon/Icon";
import { Pagination } from "flowbite-react";
import React, { useState } from "react";

const ListCoupon = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);
    const onPageChange = (page: number) => {
        setCurrentPage(page);
    };
    const onCloseNew = () => {
        // history.push("/admin/coupon/new");
    };
    return (
        <>
            <div className="">
                <button
                    className="flex items-center text-black bg-white p-1 mx-8 my-2 rounded-2xl border border-gray-c4"
                    onClick={onCloseNew}
                >
                    <IconAdd />
                    <span className="flex items-center mr-2">Add New</span>
                </button>
            </div>
            <div className="">
                <div className="p-5">
                    <div className="overflow-x-auto rounded-2xl border mx-4 border-gray-c4 ">
                        <table className="bg-white w-full text-sm text-left text-gray-400">
                            <thead>
                                <tr>
                                    <th scope="col" className="py-3 px-6">
                                        Order Id
                                    </th>
                                    <th scope="col" className="px-6">
                                        User Name
                                    </th>
                                    <th scope="col" className="px-6">
                                        Total Price
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 text-center"
                                    >
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* {orders.map((order: Order, index) => (
                            <tr
                                className="bg-white border border-gray-c2 hover:bg-gray-c2 cursor-pointer"
                                key={index}
                            >
                                <th
                                    scope="row"
                                    className="py-4 px-6 font-medium text-black whitespace-nowrap"
                                >
                                    {order.id}
                                </th>
                                <th
                                    scope="row"
                                    className="py-4 px-6 font-medium text-black whitespace-nowrap"
                                >
                                    {order.user?.userName}
                                </th>
                                <th
                                    scope="row"
                                    className="py-4 px-6 font-medium whitespace-nowrap"
                                >
                                    {order.totalPrice.toLocaleString(
                                        "vi",
                                        {
                                            style: "currency",
                                            currency: "VND",
                                        }
                                    )}
                                </th>
                                <th
                                    scope="row"
                                    className="py-4 px-6 font-medium text-black whitespace-nowrap"
                                >
                                    <div className="text-center">
                                        <span
                                            className="text-white hover:bg-white hover:text-black bg-success  rounded-lg px-2 mx-2"
                                            onClick={() => {}}
                                        >
                                            View
                                        </span>
                                        <span
                                            className="text-white bg-warning rounded-lg px-2 hover:bg-white hover:text-black mx-2"
                                            onClick={() => {}}
                                        >
                                            Delete
                                        </span>
                                    </div>
                                </th>
                            </tr>
                        ))} */}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="flex justify-center">
                    <Pagination
                        showIcons={true}
                        currentPage={currentPage}
                        totalPages={totalPage}
                        onPageChange={onPageChange}
                        layout="pagination"
                    />
                </div>
            </div>
        </>
    );
};

export default ListCoupon;
