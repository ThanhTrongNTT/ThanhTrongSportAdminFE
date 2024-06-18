import { IconAdd } from "@/components/icon/Icon";
import Modal from "@/components/modal/Modal";
import { Category } from "@/data/Interface";
import { Pagination } from "flowbite-react";
import { useState } from "react";
import DetailCategory from "../detail/DetailCategory";
import NewCategory from "../new/NewCategory";

const ListCategory = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(10);
    const [isNewModal, setIsNewModal] = useState(false);
    const [modalUpdate, setModalUpdate] = useState(false);
    const [modalDelete, setModalDelete] = useState(false);
    const [categoryNew, setCategoryNew] = useState<Category>({
        categoryName: "",
        description: "",
        id: "",
        removalFlag: false,
    });
    const [category, setCategory] = useState<Category>({
        categoryName: "",
        description: "",
        id: "",
        removalFlag: false,
    });

    const onCloseNew = () => {
        setIsNewModal(!isNewModal);
    };

    const onClickUpdate = (category: Category) => {
        setCategory(category);
        setModalUpdate(!modalUpdate);
    };
    const onCloseUpdate = () => {
        setModalUpdate(!modalUpdate);
    };

    const onCloseDelete = () => {
        setModalDelete(!modalDelete);
    };

    const categorys: Category[] = [
        {
            categoryName: "Category Trong",
            description: "Description",
            id: "1",
            removalFlag: false,
        },
        {
            categoryName: "Category Thanh",
            description: "Description",
            id: "2",
            removalFlag: false,
        },
        {
            categoryName: "Category Nguyen",
            description: "Description",
            id: "3",
            removalFlag: false,
        },
        {
            categoryName: "Category Test",
            description: "Description",
            id: "4",
            removalFlag: false,
        },
    ];

    // setTotalPage(categorys.length);

    const onPageChange = (page: number) => {
        setCurrentPage(page);
    };
    return (
        <>
            <Modal isVisible={isNewModal} onClose={onCloseNew}>
                <div>
                    <NewCategory
                        category={categoryNew}
                        setCategory={setCategoryNew}
                        onCloseNew={onCloseNew}
                    />
                </div>
            </Modal>
            <Modal isVisible={modalUpdate} onClose={onCloseUpdate}>
                <div>
                    <DetailCategory
                        onCloseUpdate={onCloseUpdate}
                        category={category}
                    />
                </div>
            </Modal>
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
                                        Category Id
                                    </th>
                                    <th scope="col" className="px-6">
                                        Category Name
                                    </th>
                                    <th scope="col" className="px-6">
                                        Category Description
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
                                {categorys.map((category: Category, index) => (
                                    <tr
                                        className="bg-white border border-gray-c2 hover:bg-gray-c2 cursor-pointer"
                                        key={index}
                                    >
                                        <th
                                            scope="row"
                                            className="py-4 px-6 font-medium text-black whitespace-nowrap"
                                        >
                                            {category.id}
                                        </th>
                                        <th
                                            scope="row"
                                            className="py-4 px-6 font-medium text-black whitespace-nowrap"
                                        >
                                            {category.categoryName}
                                        </th>
                                        <th
                                            scope="row"
                                            className="py-4 px-6 font-medium whitespace-nowrap"
                                        >
                                            {category.description}
                                        </th>
                                        <th
                                            scope="row"
                                            className="py-4 px-6 font-medium text-black whitespace-nowrap"
                                        >
                                            <div className="text-center">
                                                <span
                                                    className="text-white hover:bg-white hover:text-black bg-success  rounded-lg px-2 mx-2"
                                                    onClick={() =>
                                                        onClickUpdate(category)
                                                    }
                                                >
                                                    Update
                                                </span>
                                                <span
                                                    className="text-white bg-warning rounded-lg px-2 hover:bg-white hover:text-black mx-2"
                                                    onClick={() =>
                                                        onCloseDelete()
                                                    }
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
                        totalPages={totalPage}
                        onPageChange={onPageChange}
                        layout="pagination"
                    />
                </div>
            </div>
        </>
    );
};

export default ListCategory;
