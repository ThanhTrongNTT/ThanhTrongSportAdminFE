import { Pagination } from "flowbite-react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import userApi from "@/api/user.api";
import UserCard from "@/components/itemCard/userCard/UserCard";
import { User } from "@/data/Interface";
import Modal from "@/components/modal/Modal";
import ModalDelete from "@/components/modal/ModalDelete";

const List = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [isDelModal, setIsDelModal] = useState(false);
    const [users, setUsers] = useState<User[]>([]);
    const [idDelete, setIdDelete] = useState<string>("");

    const getData = async (page: number) => {
        await userApi.getUsers(page - 1, 5, "id", "asc").then((response) => {
            setUsers(response.data.content);
            setTotalPages(response.data.totalPages);
        });
    };
    const onPageChange = (page: number) => {
        setCurrentPage(page);
    };

    const onCloseDelModal = () => {
        setIsDelModal(!isDelModal);
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

    const handleActive = async (user: User) => {
        if (user.activeFlag) {
            await userApi.deactiveUser(user).then((response) => {
                if (response.data)
                    toast.success("Deactive User success!", {
                        autoClose: 500,
                        delay: 50,
                        draggable: true,
                        pauseOnHover: false,
                    });
            });
        } else {
            await userApi.activeUser(user).then((response) => {
                if (response.data)
                    toast.success("Active User success!", {
                        autoClose: 500,
                        delay: 50,
                        draggable: true,
                        pauseOnHover: false,
                    });
            });
        }
        getData(currentPage);
    };
    useEffect(() => {
        getData(currentPage);
    }, [currentPage]);

    return (
        <>
            <Modal isVisible={isDelModal} onClose={onCloseDelModal}>
                <ModalDelete
                    id={idDelete}
                    handleDelete={handleDelete}
                    title="Are you sure you want to delete this user?"
                    onCloseDelModal={onCloseDelModal}
                />
            </Modal>
            <div className="">
                <div className="flex flex-wrap">
                    {users.map((user) => (
                        <UserCard
                            key={user.id}
                            user={user}
                            id={user.id}
                            setIdDelete={setIdDelete}
                            onCloseDel={onCloseDelModal}
                            handleActive={handleActive}
                        />
                    ))}
                </div>
                <div className="flex justify-center">
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
