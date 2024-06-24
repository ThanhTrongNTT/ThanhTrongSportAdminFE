import { IconAdd } from "@/components/icon/Icon";
import Modal from "@/components/modal/Modal";
import { Size } from "@/data/Interface";
import React, { useEffect, useState } from "react";
import NewSize from "../new/NewSize";
import DetailSize from "../detail/DetailSize";
import ModalDelete from "@/components/modal/ModalDelete";
import SizeAPI from "@/api/size.api";
import { Pagination } from "flowbite-react";
import { toast } from "react-toastify";
import { FieldValues } from "react-hook-form";

const ListSize = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(10);
    const [modalNew, setModalNew] = useState(false);
    const [modalUpdate, setModalUpdate] = useState(false);
    const [modalDelete, setModalDelete] = useState(false);
    const [sizes, setSizes] = useState<Size[]>([]);
    const [selectedSize, setSelectedSize] = useState<Size>({
        name: "",
        value: "",
        description: "",
        id: "",
        removalFlag: false,
    });
    const [idDelete, setIdDelete] = useState<string>("");
    const [sizeNew, setSizeNew] = useState<Size>({
        name: "",
        value: "",
        description: "",
        id: "",
        removalFlag: false,
    });

    const getData = async (page: number) => {
        // Get data here
        await SizeAPI.getAllSizes(page - 1, 5, "createdDate", "asc").then(
            (res) => {
                setSizes(res.data.content);
                setTotalPage(res.data.totalPages);
            }
        );
    };

    const onCloseNew = () => {
        setModalNew(!modalNew);
    };

    const handleCreateNew = async (data: FieldValues) => {
        const sizeNew = {
            name: data.sizeName,
            value: data.sizeValue,
            description: data.sizeDescription,
        };
        await SizeAPI.createSize(sizeNew).then((response) => {
            if (response.data) {
                onCloseNew();
                toast.success("Create Success!", {
                    autoClose: 500,
                    delay: 50,
                    draggable: true,
                    pauseOnHover: false,
                });
                getData(currentPage);
            }
        });
    };

    const onCloseUpdate = () => {
        setModalUpdate(!modalUpdate);
    };

    const handleUpdate = async (data: FieldValues) => {
        const sizeUpdate = {
            ...selectedSize,
            name: data.sizeName,
            value: data.sizeValue,
            description: data.sizeDescription,
        };
        setModalUpdate(!modalUpdate);
        await SizeAPI.updateSize(sizeUpdate).then((response) => {
            if (response.data) {
                toast.success("Update Success!", {
                    autoClose: 500,
                    delay: 50,
                    draggable: true,
                    pauseOnHover: false,
                });
                getData(currentPage);
            }
        });
    };

    const onCloseDelete = () => {
        setModalDelete(!modalDelete);
    };

    const handleDelete = async (id: string) => {
        setModalDelete(!modalDelete);
        await SizeAPI.deleteSize(id).then((response) => {
            if (response.data) {
                toast.success("Delete Success!", {
                    autoClose: 500,
                    delay: 50,
                    draggable: true,
                    pauseOnHover: false,
                });
                getData(currentPage);
            }
        });
    };

    const onPageChange = (page: number) => {
        setCurrentPage(page);
    };
    useEffect(() => {
        getData(currentPage);
    }, [currentPage]);

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
            <Modal isVisible={modalNew} onClose={onCloseNew}>
                <div>
                    <NewSize
                        size={sizeNew}
                        setSize={setSizeNew}
                        handleCreateNew={handleCreateNew}
                    />
                </div>
            </Modal>
            <Modal isVisible={modalUpdate} onClose={onCloseUpdate}>
                <div>
                    <DetailSize
                        size={selectedSize}
                        handleUpdate={handleUpdate}
                    />
                </div>
            </Modal>
            <Modal isVisible={modalDelete} onClose={onCloseDelete}>
                <ModalDelete
                    id={idDelete}
                    handleDelete={handleDelete}
                    title={"Are you sure to delete this size?"}
                    onCloseDelModal={onCloseDelete}
                />
            </Modal>
            <div className="p-5">
                <div className="overflow-x-auto rounded-2xl border mx-4 border-gray-c4 ">
                    <table className="bg-white w-full text-sm text-left text-gray-400">
                        <thead>
                            <tr>
                                <th scope="col" className="py-3 px-6">
                                    Size Id
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Size Name
                                </th>
                                <th scope="col" className="px-6">
                                    Size Value
                                </th>
                                <th scope="col" className="px-6">
                                    Size Description
                                </th>
                                <th scope="col" className="px-6 text-center">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {sizes.map((size: Size, index) => (
                                <tr
                                    className="bg-white border border-gray-c2 hover:bg-gray-c2 cursor-pointer"
                                    key={index}
                                >
                                    <th
                                        scope="row"
                                        className="py-4 px-6 font-medium text-black whitespace-nowrap"
                                    >
                                        {size.id}
                                    </th>
                                    <th
                                        scope="row"
                                        className="py-4 px-6 font-medium text-black whitespace-nowrap"
                                    >
                                        {size.name}
                                    </th>
                                    <th
                                        scope="row"
                                        className="py-4 px-6 font-medium text-black whitespace-nowrap"
                                    >
                                        {size.value}
                                    </th>
                                    <th
                                        scope="row"
                                        className="py-4 px-6 font-medium whitespace-nowrap"
                                    >
                                        {size.description}
                                    </th>
                                    <th
                                        scope="row"
                                        className="py-4 px-6 font-medium text-black whitespace-nowrap"
                                    >
                                        <div className="text-center">
                                            <span
                                                className="text-white hover:bg-white hover:text-black bg-success  rounded-lg px-2 mx-2"
                                                onClick={() => {
                                                    setSelectedSize(size);
                                                    onCloseUpdate();
                                                }}
                                            >
                                                Update
                                            </span>
                                            <span
                                                className="text-white bg-warning rounded-lg px-2 hover:bg-white hover:text-black mx-2"
                                                onClick={() => {
                                                    setIdDelete(size.id ?? "");
                                                    onCloseDelete();
                                                }}
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

export default ListSize;
