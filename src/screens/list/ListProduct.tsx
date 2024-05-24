import { Modal, Pagination } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import locationApi from '~/api/order.api';
import { IconAdd } from '~/components/icon/Icon';
import NewLocation from '../new/NewLocation';
import ProductCard from '~/components/itemCard/productCard/ProductCard';

const ListProduct = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [locations, setLocations] = useState<any>([]);
    const [totalPages, setTotalPages] = useState(1);
    const [isModal, setIsModal] = useState(false);
    const [isDelete, setIsDelete] = useState(false);
    const [idDelete, setIdDelete] = useState('');
    const navigate = useNavigate();

    // Fetch data ngay khi vào trang
    const getData = async (page: number) => {
        // await locationApi.getLocation(page - 1).then((reponse) => {
        //     setResponse(reponse);
        //     setLocations(reponse.data);
        // });
    };

    // Đóng modal
    const onClose = () => {
        setIsModal(!isModal);
    };

    // Đóng cửa sổ delete
    const deleteClose = () => {
        setIsDelete(!isDelete);
    };

    // Thực hiện thay đổi khi có sự thay đổi trang
    const onPageChange = (page: number) => {
        // locationApi.getLocation(page - 1).then((reponse) => {
        //     setLocations(reponse.data);
        // });
        // setCurrentPage(page);
    };

    // Thực hiện chức năng xóa
    const handleDelete = (id: string) => {
        setIsDelete(!isDelete);
        setIdDelete(id);
    };
    const handleDeleteSuccess = async (id: string) => {
        // await locationApi.delete(id).then((response) => {
        //     if (response.status === 200)
        //         toast.success('Delete Success!', {
        //             autoClose: 500,
        //             delay: 50,
        //             draggable: true,
        //             pauseOnHover: false,
        //         });
        // });
        setIsDelete(!isDelete);
        getData(currentPage);
    };

    // Thực hiện chức năng edit
    const handleEdit = async (id: string) => {
        navigate(`${id}`);
        toast.success('Edit View!', {
            delay: 50,
            draggable: false,
            pauseOnHover: false,
        });
    };
    useEffect(() => {
        getData(currentPage);
    }, [currentPage]);

    return (
        <>
            <div className='p-2'>
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
                        <NewLocation />
                    </Modal.Body>
                </Modal>
                <Modal show={isDelete} size='lg' popup={true} onClose={deleteClose}>
                    <Modal.Header />
                    <Modal.Body>
                        <div className='text-center'>
                            <h3 className='mb-5 text-lg font-normal text-gray-500 dark:text-gray-400'>
                                Are you sure you want to delete this location?
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
                <div className='flex flex-wrap ml-10'>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
                <div className='flex justify-center'>
                    <Pagination
                        showIcons={true}
                        layout='pagination'
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
