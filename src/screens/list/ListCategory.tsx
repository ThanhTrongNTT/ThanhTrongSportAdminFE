import { IconAdd } from "@/components/icon/Icon";
import Modal from "@/components/modal/Modal";
import { Category } from "@/data/Interface";
import { Pagination } from "flowbite-react";
import { useEffect, useState } from "react";
import DetailCategory from "../detail/DetailCategory";
import NewCategory from "../new/NewCategory";
import ModalDelete from "@/components/modal/ModalDelete";
import CategoryAPI from "@/api/category.api";
import { toast } from "react-toastify";
import { FieldValues } from "react-hook-form";

const ListCategory = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(10);
    const [isNewModal, setIsNewModal] = useState(false);
    const [modalUpdate, setModalUpdate] = useState(false);
    const [modalDelete, setModalDelete] = useState(false);
    const [idDeleted, setIdDeleted] = useState<string>("");
    const [categories, setCategories] = useState<Category[]>([]);
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

    const getData = async (page: number) => {
        await CategoryAPI.getAllCategory(
            page - 1,
            5,
            "createdDate",
            "asc"
        ).then((response) => {
            setTotalPage(response.data.totalPages);
            setCategories(response.data.content);
        });
    };

    const onCloseNew = () => {
        setIsNewModal(!isNewModal);
    };

    const handleCreateNew = (data: FieldValues) => {
        const categoryNew: Category = {
            categoryName: data.categoryName,
            description: data.categoryDescription,
            removalFlag: false,
        };
        CategoryAPI.addCategory(categoryNew).then((response) => {
            if (response.data) {
                onCloseNew();
                toast.success("Create Category success!", {
                    autoClose: 1000,
                    pauseOnHover: false,
                    draggable: true,
                    delay: 50,
                });
                getData(currentPage);
            }
        });
    };

    const onClickUpdate = (category: Category) => {
        setCategory(category);
        setModalUpdate(!modalUpdate);
    };
    const onCloseUpdate = () => {
        setModalUpdate(!modalUpdate);
    };

    const handleUpdate = (data: FieldValues) => {
        const categoryUpdate: Category = {
            ...category,
            categoryName: data.categoryName,
            description: data.categoryDescription,
        };
        if (categoryUpdate.id) {
            CategoryAPI.updateCategory(categoryUpdate, categoryUpdate.id).then(
                (response) => {
                    if (response.data) {
                        onCloseUpdate();
                        toast.success("Update Category success!", {
                            autoClose: 1000,
                            pauseOnHover: false,
                            draggable: true,
                            delay: 50,
                        });
                        getData(currentPage);
                    }
                }
            );
        }
    };

    const onCloseDelete = () => {
        setModalDelete(!modalDelete);
    };

    const handleDelete = async (id: string) => {
        setModalDelete(!modalDelete);
        await CategoryAPI.deleteCategory(id).then((response) => {
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
            <Modal isVisible={isNewModal} onClose={onCloseNew}>
                <div>
                    <NewCategory
                        handleCreateNew={handleCreateNew}
                        category={categoryNew}
                        setCategory={setCategoryNew}
                    />
                </div>
            </Modal>
            <Modal isVisible={modalUpdate} onClose={onCloseUpdate}>
                <div>
                    <DetailCategory
                        handleUpdate={handleUpdate}
                        category={category}
                    />
                </div>
            </Modal>
            <Modal isVisible={modalDelete} onClose={onCloseDelete}>
                <ModalDelete
                    id={idDeleted}
                    handleDelete={handleDelete}
                    title={"Are you sure to delete this category?"}
                    onCloseDelModal={onCloseDelete}
                />
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
                                {categories.map((category: Category, index) => (
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
                                                    onClick={() => {
                                                        setIdDeleted(
                                                            category.id ?? ""
                                                        );
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
