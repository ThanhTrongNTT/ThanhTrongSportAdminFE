import React from 'react';

const CategoryCard = () => {
    return (
        <div className='bg-white border-sm shadow-lg h-[300px] w-1/5 p-5 m-4 rounded-md'>
            <div className='flex flex-col'>
                <h1>Name: Category name</h1>
                <span>
                    Description: Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Veritatis, impedit animi mollitia molestiae nemo beatae perferendis dolor hic.
                    Expedita, eligendi? Sint ullam itaque accusamus adipisci delectus recusandae
                    voluptatum voluptas voluptates.
                </span>
            </div>
            <div className='flex justify-between font-bold p-5'>
                <button className='p-1 bg-blue-300  rounded-md hover:bg-blue-500'>Edit</button>
                <button className='p-1 bg-red-300  rounded-md hover:bg-red-500'>Delete</button>
            </div>
        </div>
    );
};

export default CategoryCard;
