import React from 'react';
import ImageCustom from '~/components/image/ImageCustom';

const ProductCard = () => {
    return (
        <div className='bg-white border-sm shadow-lg h-[400px] w-1/5 p-5 m-4 rounded-md'>
            <ImageCustom alt={'Test'} src={'https://hd-book-store.vercel.app/images/db_bg.jpeg'} />
            <div className='flex flex-col'>
                <h1>Product Name: </h1>
                <span>Description: </span>
                <span>Price: </span>
                <span>Quantity: </span>
                <span>Colors: </span>
                <span>Category: </span>
            </div>
            <div className='flex justify-between font-bold p-5'>
                <button className='p-1 bg-blue-300  rounded-md hover:bg-blue-500'>Edit</button>
                <button className='p-1 bg-red-300  rounded-md hover:bg-red-500'>Delete</button>
            </div>
        </div>
    );
};

export default ProductCard;
