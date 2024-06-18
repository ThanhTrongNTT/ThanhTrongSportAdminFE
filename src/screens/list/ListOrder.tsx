import { Order } from "@/data/Interface";
import { Pagination } from "flowbite-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ListOrder = () => {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [isModal, setIsModal] = useState(false);
    const [isDelete, setIsDelete] = useState(false);
    const [idDelete, setIdDelete] = useState("");

    const orders: Order[] = [
        {
            id: "1",
            totalPrice: 100,
        },
    ];
    // Thực hiện lấy data khi vừa khởi tạo
    const getData = async (page: number) => {
        // await tourApi.getTours(page - 1).then((reponse) => {
        //     setResponse(reponse);
        //     setTours(reponse.data);
        // });
    };

    // Thực hiện show modal xem chi tiết người dùng
    const onClose = () => {
        setIsModal(!isModal);
    };

    // Thực hiện đóng modal
    const deleteClose = () => {
        setIsDelete(!isDelete);
    };

    // Thực hiện chức năng chuyển trang
    const onPageChange = (page: number) => {
        // tourApi.getTours(page - 1).then((reponse) => {
        //     setTours(reponse.data);
        // });
        // setCurrentPage(page);
    };

    // Thực hiện chức năng xóa
    const handleDeleteSuccess = async (id: string) => {
        // await tourApi.deleteTour(id).then((response) => {
        //     if (response.status === 200)
        //         toast.success('Delete Success!', {
        //             autoClose: 500,
        //             delay: 50,
        //             draggable: true,
        //             pauseOnHover: false,
        //         });
        // });
        getData(currentPage);
    };

    // Thực hiện chức năng chỉnh sửa
    const handleEdit = async (id: string) => {
        navigate(`${id}`);
        toast.success("Edit View!", {
            delay: 50,
            draggable: false,
            pauseOnHover: false,
        });
    };

    // fetch lại data khi có thay đổi về trang
    useEffect(() => {
        getData(currentPage);
    }, [currentPage]);

    return (
        <>
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
                                {orders.map((order: Order, index) => (
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
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="flex justify-center">
                    <Pagination
                        showIcons={true}
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={onPageChange}
                        layout="pagination"
                    />
                </div>
            </div>
        </>
    );
};

export default ListOrder;
