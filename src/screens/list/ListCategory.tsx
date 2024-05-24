import { Pagination } from 'flowbite-react';
import { useState } from 'react';
import CategoryCard from '@/components/itemCard/categoryCard/CategoryCard';

const ListCategory = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoaded, setIsLoaded] = useState(true);
    const onPageChange = (page: number) => {
        setCurrentPage(page);
    };
    return (
        <>
            <div className='p-2 h-screen'>
                <div className='flex flex-wrap'>
                    {isLoaded ? (
                        <>
                            {Array.from({ length: 6 }).map((_, index) => (
                                <CategoryCard />
                            ))}
                        </>
                    ) : (
                        <>
                            {Array.from({ length: 6 }).map((_, index) => (
                                <CategoryCard />
                            ))}
                        </>
                    )}
                </div>
                <div className='flex justify-center'>
                    <Pagination
                        showIcons={true}
                        currentPage={1}
                        totalPages={1}
                        onPageChange={onPageChange}
                        layout='pagination'
                    />
                </div>
            </div>
        </>
    );
};

export default ListCategory;
