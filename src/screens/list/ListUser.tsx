import { Modal, Pagination } from "flowbite-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import userApi from "@/api/user.api";
import UserCard from "@/components/itemCard/userCard/UserCard";
import { User } from "@/data/Interface";

const List = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [users, setUsers] = useState<User | []>([]);
    const [totalPages, setTotalPages] = useState(1);
    const [response, setResponse] = useState<any>();
    const [isModal, setIsModal] = useState(false);
    const [isDelete, setIsDelete] = useState(false);
    const [idDelete, setIdDelete] = useState("");
    const navigate = useNavigate();

    const getData = async (page: number) => {
        // await userApi.getUsers(page - 1).then((users) => {
        //     setResponse(users);
        //     setUsers(users.data);
        // });
    };
    const onPageChange = (page: number) => {
        // userApi.getUsers(page - 1).then((users) => {
        //     setUsers(users.data);
        // });
        // setCurrentPage(page);
    };

    if (response) {
        if (response.totalPages !== totalPages) {
            setTotalPages(response.totalPages);
        }
    }

    const onClose = () => {
        setIsModal(!isModal);
    };
    const deleteClose = () => {
        setIsDelete(!isDelete);
    };
    const handleDelete = (id: string) => {
        setIsDelete(!isDelete);
        setIdDelete(id);
    };
    const handleDeleteSuccess = async (id: string) => {
        await userApi.deleteUser(id).then((response) => {
            if (response.status === 200)
                toast.success("Delete Success!", {
                    autoClose: 500,
                    delay: 50,
                    draggable: true,
                    pauseOnHover: false,
                });
        });
        setIsDelete(!isDelete);
        getData(currentPage);
    };
    const handleEdit = (id: string) => {
        navigate(`${id}`);
        toast.success("Edit View!", {
            delay: 50,
            draggable: false,
            pauseOnHover: false,
        });
    };
    useEffect(() => {
        getData(currentPage);
    }, []);

    return (
        <>
            <div className="p-2">
                <Modal
                    show={isDelete}
                    size="lg"
                    popup={true}
                    onClose={deleteClose}
                >
                    <Modal.Header />
                    <Modal.Body>
                        <div className="text-center">
                            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                                Are you sure you want to delete this user?
                            </h3>
                            <div className="flex justify-center gap-4 text-warning">
                                <button
                                    color="failure"
                                    onClick={() =>
                                        handleDeleteSuccess(idDelete)
                                    }
                                >
                                    Yes, I'm sure
                                </button>
                                <button color="gray" onClick={deleteClose}>
                                    No, cancel
                                </button>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
                <div className="flex flex-wrap">
                    <UserCard />
                    <UserCard />
                    <UserCard />
                    <UserCard />
                    <UserCard />
                    <UserCard />
                    <UserCard />
                    <UserCard />
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
