import { IconAdd } from "@/components/icon/Icon";
import Modal from "@/components/modal/Modal";
import { Size } from "@/data/Interface";
import React, { useState } from "react";

const ListSize = () => {
    const sizes: Size[] = [
        {
            id: "1",
            name: "S",
            value: "S",
            description: "Size S",
        },
        {
            id: "1",
            name: "M",
            value: "M",
            description: "Size S",
        },
        {
            id: "1",
            name: "L",
            value: "L",
            description: "Size S",
        },
        {
            id: "1",
            name: "XL",
            value: "XL",
            description: "Size S",
        },
        {
            id: "1",
            name: "XXL",
            value: "XXL",
            description: "Size S",
        },
    ];

    const [modalNew, setModalNew] = useState(false);
    const [modalUpdate, setModalUpdate] = useState(false);
    const [modalDelete, setModalDelete] = useState(false);

    const onCloseNew = () => {
        setModalNew(!modalNew);
    };

    const onCloseUpdate = () => {
        setModalUpdate(!modalUpdate);
    };

    const onCloseDelete = () => {
        setModalDelete(!modalDelete);
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
            <Modal isVisible={modalNew} onClose={onCloseNew}>
                <div>New Size</div>
            </Modal>
            <Modal isVisible={modalUpdate} onClose={onCloseUpdate}>
                <div>Update Size</div>
            </Modal>
            <Modal isVisible={modalDelete} onClose={onCloseDelete}>
                <div>Delete Size</div>
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
                                                onClick={() => onCloseUpdate()}
                                            >
                                                Update
                                            </span>
                                            <span
                                                className="text-white bg-warning rounded-lg px-2 hover:bg-white hover:text-black mx-2"
                                                onClick={() => onCloseDelete()}
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
        </>
    );
};

export default ListSize;
