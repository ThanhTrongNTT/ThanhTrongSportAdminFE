import { IconAdd } from "@/components/icon/Icon";
import ProductCard from "@/components/itemCard/productCard/ProductCard";
import Modal from "@/components/modal/Modal";
import { Pagination } from "flowbite-react";
import { useEffect, useState } from "react";
import NewProduct from "../new/NewProduct";

const ListProduct = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [isNewModal, setIsNewModal] = useState(false);
    const [isDelModal, setIsDelModal] = useState(false);
    // const [isDelete, setIsDelete] = useState(false);
    // const [idDelete, setIdDelete] = useState("");
    // const navigate = useNavigate();

    // Fetch data ngay khi vào trang
    // const getData = async (page: number) => {
    //     // await locationApi.getLocation(page - 1).then((reponse) => {
    //     //     setResponse(reponse);
    //     //     setLocations(reponse.data);
    //     // });
    // };

    // Đóng modal
    const onClose = () => {
        setIsNewModal(!isNewModal);
    };
    const onCloseDel = () => {
        setIsDelModal(!isDelModal);
    };

    // Đóng cửa sổ delete
    // const deleteClose = () => {
    //     setIsDelete(!isDelete);
    // };

    // Thực hiện thay đổi khi có sự thay đổi trang
    const onPageChange = (page: number) => {
        // locationApi.getLocation(page - 1).then((reponse) => {
        //     setLocations(reponse.data);
        // });
        setCurrentPage(page);
    };

    // Thực hiện chức năng xóa
    // const handleDelete = (id: string) => {
    //     setIsDelete(!isDelete);
    //     setIdDelete(id);
    // };
    // const handleDeleteSuccess = async (id: string) => {
    //     // await locationApi.delete(id).then((response) => {
    //     //     if (response.status === 200)
    //     //         toast.success('Delete Success!', {
    //     //             autoClose: 500,
    //     //             delay: 50,
    //     //             draggable: true,
    //     //             pauseOnHover: false,
    //     //         });
    //     // });
    //     setIsDelete(!isDelete);
    //     getData(currentPage);
    // };

    // Thực hiện chức năng edit
    // const handleEdit = async (id: string) => {
    //     navigate(`${id}`);
    //     toast.success("Edit View!", {
    //         delay: 50,
    //         draggable: false,
    //         pauseOnHover: false,
    //     });
    // };
    useEffect(() => {
        // getData(currentPage);
    }, [currentPage]);

    return (
        <>
            <div className="p-2">
                <div className="mx-5">
                    <button
                        className="flex items-center text-black bg-white p-1 mx-8 my-2 rounded-2xl border border-gray-c4"
                        onClick={() => {
                            setIsNewModal(true);
                        }}
                    >
                        <IconAdd />
                        <span className="flex items-center mr-2">Add New</span>
                    </button>
                </div>
                <Modal isVisible={isNewModal} onClose={onClose}>
                    <div>
                        <NewProduct />
                    </div>
                </Modal>
                <Modal isVisible={isDelModal} onClose={onCloseDel}>
                    <div className="m-10 w-[300px] flex flex-col">
                        <label
                            htmlFor=""
                            className="p-10 font-bold text-2xl mx-auto"
                        >
                            Delete Product
                        </label>
                        <div className="flex justify-between w-full mt-5">
                            <button className="p-1 bg-green-300 text-xl font-bold rounded-md hover:bg-red-500">
                                Delete
                            </button>
                            <button
                                className="p-1 bg-red-300 text-xl font-bold rounded-md hover:bg-red-500"
                                onClick={onCloseDel}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </Modal>
                <div className="flex flex-wrap ml-10">
                    <ProductCard
                        isDelModal={isDelModal}
                        onCloseDel={onCloseDel}
                    />
                    <ProductCard
                        isDelModal={isDelModal}
                        onCloseDel={onCloseDel}
                    />
                    <ProductCard
                        isDelModal={isDelModal}
                        onCloseDel={onCloseDel}
                    />
                    <ProductCard
                        isDelModal={isDelModal}
                        onCloseDel={onCloseDel}
                    />
                    <ProductCard
                        isDelModal={isDelModal}
                        onCloseDel={onCloseDel}
                    />
                    <ProductCard
                        isDelModal={isDelModal}
                        onCloseDel={onCloseDel}
                    />
                    <ProductCard
                        isDelModal={isDelModal}
                        onCloseDel={onCloseDel}
                    />
                    <ProductCard
                        isDelModal={isDelModal}
                        onCloseDel={onCloseDel}
                    />
                </div>
                <div className="flex justify-center">
                    <Pagination
                        showIcons={true}
                        layout="pagination"
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={onPageChange}
                    />
                </div>
            </div>
        </>
    );
};

export default ListProduct;
