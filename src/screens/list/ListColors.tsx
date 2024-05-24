import { Button, Pagination } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { IconAdd } from '~/components/icon/Icon';
import InputDefault from '~/components/input/InputDefault';
import Modal from '~/components/modal/Modal';
import classNames from '~/utils/classNames';

const ListColors = () => {
    const [modalNew, setModalNew] = useState(false);
    const [name, setName] = useState('');
    const [code, setCode] = useState('');
    const [modalUpdate, setModalUpdate] = useState(false);
    const [modalDelete, setModalDelete] = useState(false);
    const [colors, setColors] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [totalElement, setTotalElement] = useState(0);
    const [totalPages, setTotalPages] = useState(2);
    const [isLoadData, setIsLoadData] = useState(true);
    const [colorCurrent, setColorCurrent] = useState({
        id: 1,
        colorName: 'Black',
        colorValue: '#000000',
        isDelete: false,
    });
    const size = 5;
    const onPageChange = (currentPage: number) => {
        setPageNumber(currentPage);
        getAllColor(currentPage);
    };
    const getAllColor = (currentPage: number) => {
        setIsLoadData(false);
        const orders: string[] = [];
        const filter: string[] = [];
        const data = { orders, filter, size, totalElement, pageNumber: currentPage };
        // productColorApi.getAllProductColor(data).then((res: any) => {
        //     setTotalElement(Number(res.result.page.totalElement));
        //     setColors(res.result.data);
        //     setIsLoadData(true);
        // });
    };
    const onCloseNew = () => {
        setModalNew(!modalNew);
    };
    const newColorHandler = (values: any) => {
        //* Excute Logic create new Color
        // productColorApi.createProductColor(values).then((res: any) => {
        //     if (res.result) {
        //         toast.success(`Create Color ${res.result.colorName} success!`);
        //         getAllColor(pageNumber);
        //     } else {
        //         toast.error(res.message);
        //     }
        // });
        setModalNew(!modalNew);
    };
    const onCloseUpdate = async (color?: any) => {
        if (color) {
            await setColorCurrent(color);
        }
        setModalUpdate(!modalUpdate);
    };
    const updateColorHandle = (values: any) => {
        // productColorApi.updateProductColor(colorCurrent.id, values).then((res: any) => {
        //     if (res.result === null) {
        //         toast.error(res.message);
        //         getAllColor(pageNumber);
        //     } else {
        //         toast.success('Update Color success!');
        //         getAllColor(pageNumber);
        //     }
        //     setModalUpdate(!modalUpdate);
        // });
    };
    const handleDeleteColor = () => {
        // productColorApi.deleteProductColor(colorCurrent.id).then((res: any) => {
        //     if (res.result === null) {
        //         toast.error('Delete Color unsuccess!');
        //         getAllColor(pageNumber);
        //     } else {
        //         toast.success('Delete Color Success!');
        //         getAllColor(pageNumber);
        //     }
        //     setModalDelete(!modalDelete);
        // });
    };
    const onCloseDelete = (color?: any) => {
        if (color) {
            setColorCurrent(color);
        }
        setModalDelete(!modalDelete);
    };
    useEffect(() => {
        getAllColor(pageNumber);
    }, []);
    useEffect(() => {
        setTotalPages(Math.ceil(totalElement / size));
    }, [isLoadData]);

    return (
        <>
            <div className='p-2 h-screen'>
                <div>
                    <button
                        className='flex items-center text-black bg-white p-1 mx-8 my-2 rounded-2xl border border-gray-c4'
                        onClick={() => {
                            setModalNew(true);
                        }}
                    >
                        <IconAdd />
                        <span className='flex items-center mr-2'>Add New</span>
                    </button>
                </div>
                <Modal isVisible={modalNew} onClose={onCloseNew}>
                    <div>
                        <span className='flex justify-center items-center font-semibold text-xl p-4'>
                            Add New Color
                        </span>
                        <NewProductColor onSubmit={newColorHandler} onCancel={onCloseNew} />
                    </div>
                </Modal>
                {/* <Modal/>
                {modalUpdate ? (
                    <Modal
                        show={modalUpdate}
                        size='7xl'
                        position='center'
                        popup={true}
                        onClose={onCloseUpdate}
                    >
                        <Modal.Header />
                        <Modal.Body></Modal.Body>
                    </Modal>
                ) : (
                    ''
                )}
                <Modal
                    show={modalDelete}
                    size='2xl'
                    position='center'
                    popup={true}
                    onClose={onCloseDelete}
                >
                    <Modal.Header />
                    <Modal.Body>
                        <div>
                            <span className='flex justify-center items-center font-semibold text-xl p-4'>
                                Do you want to delete Color with name: {colorCurrent.colorName}?
                            </span>
                            <div className='flex justify-center gap-4 p-5'>
                                <Button color='success' onClick={handleDeleteColor}>
                                    Yes, I'm sure
                                </Button>
                                <Button color='failure' onClick={onCloseDelete}>
                                    No, cancel
                                </Button>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal> */}
                <div className='overflow-x-auto rounded-2xl border mx-4 border-gray-c4'>
                    <table className='bg-white  w-full text-sm text-left text-gray-400'>
                        <thead>
                            <tr>
                                <th scope='col' className='py-3 px-6'>
                                    Color Name
                                </th>
                                <th scope='col' className='px-6'>
                                    Color Value
                                </th>
                                <th scope='col' className='px-6 text-center'>
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {colors.map((color: any, index) => (
                                <tr
                                    className='bg-white border-gray-c4 hover:bg-gray-c2 cursor-pointer'
                                    key={index}
                                >
                                    <th
                                        scope='row'
                                        className='py-4 px-6 font-medium text-black whitespace-nowrap'
                                    >
                                        {color.colorName}
                                    </th>
                                    <th
                                        scope='row'
                                        className='py-4 px-6 font-medium whitespace-nowrap'
                                    >
                                        <span style={{ backgroundColor: color.colorValue }}>
                                            {color.colorValue.toUpperCase()}
                                        </span>
                                    </th>
                                    <th
                                        scope='row'
                                        className='py-4 px-6 font-medium text-black whitespace-nowrap'
                                    >
                                        <div className='text-center'>
                                            <span
                                                className='text-white hover:bg-white hover:text-black bg-success  rounded-lg px-2 mx-2'
                                                onClick={() => onCloseUpdate(color)}
                                            >
                                                Update
                                            </span>
                                            <span
                                                className='text-white bg-warning rounded-lg px-2 hover:bg-white hover:text-black mx-2'
                                                onClick={() => onCloseDelete(color)}
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
                <div className='flex justify-center'>
                    <Pagination
                        showIcons={true}
                        currentPage={1}
                        totalPages={totalPages}
                        onPageChange={onPageChange}
                    />
                </div>
            </div>
        </>
    );
};

export default ListColors;
