import { Pagination } from "flowbite-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import userApi from "@/api/user.api";
import UserCard from "@/components/itemCard/userCard/UserCard";
import { User } from "@/data/Interface";
import Modal from "@/components/modal/Modal";
import DetailUser from "../detail/DetailUser";

const List = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [users, setUsers] = useState<User | []>([]);
    const [totalPages, setTotalPages] = useState(1);
    const [isEditModal, setIsEditModal] = useState(false);
    const [isDelModal, setIsDelModal] = useState(false);
    const [idDelete, setIdDelete] = useState("");
    const navigate = useNavigate();

    const getData = async (page: number) => {
        // await userApi.getUsers(page - 1).then((users) => {
        //     setResponse(users);
        //     setUsers(users.data);
        // });
    };
    const onPageChange = (page: number) => {
        setCurrentPage(page);
    };

    const onCloseDelModal = () => {
        setIsDelModal(!isDelModal);
    };

    const onCloseEditModal = () => {
        setIsEditModal(!isEditModal);
    };

    const handleDelete = async (id: string) => {
        setIsDelModal(!isDelModal);
        // Delete User
        await userApi.deleteUser(id).then((response) => {
            if (response.status === 200)
                toast.success("Delete Success!", {
                    autoClose: 500,
                    delay: 50,
                    draggable: true,
                    pauseOnHover: false,
                });
        });
        getData(currentPage);
    };

    const handleEdit = async (id: string, user: User) => {
        await userApi.update(id, user).then((response) => {
            if (response.status === 200)
                toast.success("Edit Success!", {
                    autoClose: 500,
                    delay: 50,
                    draggable: true,
                    pauseOnHover: false,
                });
        });
    };

    useEffect(() => {
        getData(1);
    }, []);
    useEffect(() => {
        getData(currentPage);
    }, [currentPage]);

    return (
        <>
            <Modal isVisible={isDelModal} onClose={onCloseDelModal}>
                <div className="text-center p-10">
                    <h3 className="mb-5 text-lg font-bold text-gray-500 dark:text-gray-400">
                        Are you sure you want to delete this user?
                    </h3>
                    <div className="flex justify-center gap-4">
                        <button
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
                            color="failure"
                            // onClick={() => handleDelete(idDelete)}
                            onClick={() => onCloseDelModal()}
                        >
                            Yes, I'm sure
                        </button>
                        <button
                            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full"
                            color="gray"
                            onClick={onCloseDelModal}
                        >
                            No, cancel
                        </button>
                    </div>
                </div>
            </Modal>
            <Modal isVisible={isEditModal} onClose={onCloseEditModal}>
                <div className="p-10">
                    <DetailUser
                        isEditModal={isEditModal}
                        onCloseEdit={onCloseEditModal}
                    />
                </div>
            </Modal>
            <div className="p-2">
                <div className="flex flex-wrap">
                    <UserCard
                        onCloseDel={onCloseDelModal}
                        onCloseEdit={onCloseEditModal}
                    />
                    <UserCard
                        onCloseDel={onCloseDelModal}
                        onCloseEdit={onCloseEditModal}
                    />
                    <UserCard
                        onCloseDel={onCloseDelModal}
                        onCloseEdit={onCloseEditModal}
                    />
                    <UserCard
                        onCloseDel={onCloseDelModal}
                        onCloseEdit={onCloseEditModal}
                    />
                    <UserCard
                        onCloseDel={onCloseDelModal}
                        onCloseEdit={onCloseEditModal}
                    />
                    <UserCard
                        onCloseDel={onCloseDelModal}
                        onCloseEdit={onCloseEditModal}
                    />
                    <UserCard
                        onCloseDel={onCloseDelModal}
                        onCloseEdit={onCloseEditModal}
                    />
                    <UserCard
                        onCloseDel={onCloseDelModal}
                        onCloseEdit={onCloseEditModal}
                    />
                </div>
                <div className="flex items-center justify-center text-center">
                    <Pagination
                        showIcons={true}
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={onPageChange}
                    />
                </div>
            </div>
        </>
    );
};

export default List;
