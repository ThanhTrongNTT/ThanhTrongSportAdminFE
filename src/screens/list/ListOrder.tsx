import { Modal, Pagination } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import tourApi from '~/api/category.api';
import { IconAdd } from '~/components/icon/Icon';
import NewTour from '../new/NewTour';
import OrderCard from '~/components/itemCard/OrderCard/OrderCard';

const ListOrder = () => {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const [tours, setTours] = useState<any>([]);
    const [totalPages, setTotalPages] = useState(1);
    const [isModal, setIsModal] = useState(false);
    const [isDelete, setIsDelete] = useState(false);
    const [idDelete, setIdDelete] = useState('');
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
        toast.success('Edit View!', {
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
            <div className='p-2 h-screen'>
                <div>
                    <button
                        className='flex items-center text-black bg-white p-1 mx-8 my-2 rounded-2xl border border-gray-c4'
                        onClick={() => {
                            setIsModal(true);
                        }}
                    >
                        <IconAdd />
                        <span className='flex items-center mr-2'>Add New</span>
                    </button>
                </div>
                <Modal show={isModal} size='lg' popup={true} onClose={onClose}>
                    <Modal.Header />
                    <Modal.Body>
                        <NewTour />
                    </Modal.Body>
                </Modal>
                <Modal show={isDelete} size='lg' popup={true} onClose={deleteClose}>
                    <Modal.Header />
                    <Modal.Body>
                        <div className='text-center'>
                            <h3 className='mb-5 text-lg font-normal text-gray-500 dark:text-gray-400'>
                                Are you sure you want to delete this tour?
                            </h3>
                            <div className='flex justify-center gap-4 text-warning'>
                                <button
                                    color='failure'
                                    onClick={() => handleDeleteSuccess(idDelete)}
                                >
                                    Yes, I'm sure
                                </button>
                                <button color='gray' onClick={deleteClose}>
                                    No, cancel
                                </button>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
                <div className='flex flex-wrap'>
                    <OrderCard />
                    <OrderCard />
                    <OrderCard />
                    <OrderCard />
                </div>
                <div className='flex justify-center'>
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

export default ListOrder;
