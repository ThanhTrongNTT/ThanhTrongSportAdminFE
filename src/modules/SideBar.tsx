import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    IconBlog,
    IconCategory,
    IconCourse,
    IconDashboard,
    IconUser,
} from '~/components/icon/Icon';
import LogoDefault from '~/components/logo/LogoDefault';

const SideBar = () => {
    const Menus = [
        { title: 'Dashboard', link: '/admin' },
        { title: 'Users', link: 'users', icon: <IconUser /> },
        {
            title: 'Locations',
            link: 'locations',
            icon: <IconBlog />,
        },
        { title: 'Tours', link: 'tours', icon: <IconCourse /> },
        { title: 'Bookings', link: 'bookings', icon: <IconCategory /> },
    ];
    return (
        <div className='bg-white h-fit rounded-xl m-4 w-20 lg:w-60 fixed top-0'>
            <div className='flex justify-center p-10'>
                {/* <Logo /> */}
                <LogoDefault />
            </div>
            <hr className='mx-6 border-1.5 border-gray-c2' />
            <div className='px-6'>
                <ul className='pt-2'>
                    {Menus.map((menu, index) => (
                        <>
                            <li
                                key={index}
                                className='text-black text-sm flex font-OpenSans items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-c2 rounded-md mt-2 justify-between'
                            >
                                <Link to={menu.link} className='flex items-center'>
                                    <span className='text-2l block float-left'>
                                        {menu.icon ? menu.icon : <IconDashboard />}
                                    </span>
                                    <span className='text-base font-OpenSans font-medium flex-1 duration-200'>
                                        {menu.title}
                                    </span>
                                </Link>
                            </li>
                        </>
                    ))}
                </ul>
            </div>
            <hr className='mx-6 border-1.5 border-gray-c2' />
            <div className='p-6 flex flex-col'></div>
        </div>
    );
};

export default SideBar;
