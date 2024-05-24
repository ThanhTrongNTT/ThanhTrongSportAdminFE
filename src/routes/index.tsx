import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import LayoutDefault from '~/layouts/LayoutDefault';
import PrivateRoute from '~/routes/privateRoute';

const DetailLocation = lazy(() => import('~/screens/detail/DetailLocation'));
const DetailTour = lazy(() => import('~/screens/detail/DetailTour'));
const DetailUser = lazy(() => import('~/screens/detail/DetailUser'));
const Home = lazy(() => import('~/screens/home/Home'));
const ListCategory = lazy(() => import('~/screens/list/ListCategory'));
const ListOrder = lazy(() => import('~/screens/list/ListOrder'));
const ListProduct = lazy(() => import('~/screens/list/ListProduct'));
const ListUser = lazy(() => import('~/screens/list/ListUser'));
const Login = lazy(() => import('~/screens/login/Login'));
const NewLocation = lazy(() => import('~/screens/new/NewLocation'));
const NewTour = lazy(() => import('~/screens/new/NewTour'));
const NotFound = lazy(() => import('~/screens/notFound/NotFound'));
const ProfilePage = lazy(() => import('~/screens/profile/ProfilePage'));
const ListColors = lazy(() => import('~/screens/list/ListColors'));

const DeclareRouter = () => {
    return (
        <div className='bg-gradient-to-t from-orange-400 via-red-500 to-pink-500'>
            <Routes>
                <Route path='/' element={<Navigate to='/admin' />} />
                <Route path='/login' element={<Login />} />
                <Route path='profile' element={<ProfilePage />} />
                <Route path='/admin' element={<PrivateRoute />}>
                    <Route element={<LayoutDefault />}>
                        <Route path='' element={<Home />} />
                        <Route path='user'>
                            <Route index element={<ListUser />} />
                            <Route path=':userId' element={<DetailUser />} />
                        </Route>
                        <Route path='category'>
                            <Route index element={<ListCategory />} />
                            <Route path=':categoryId' element={<DetailLocation />} />
                            <Route path='new' element={<NewLocation />} />
                        </Route>
                        <Route path='order'>
                            <Route index element={<ListOrder />} />
                            <Route path=':orderId' element={<DetailTour />} />
                            <Route path='new' element={<NewTour />} />
                        </Route>
                        <Route path='product'>
                            <Route index element={<ListProduct />} />
                            <Route path=':productId' element={<DetailTour />} />
                            <Route path='new' element={<NewTour />} />
                        </Route>
                        <Route path='colors'>
                            <Route index element={<ListColors />} />
                            <Route path=':colorId' element={<DetailTour />} />
                            <Route path='new' element={<NewTour />} />
                        </Route>
                    </Route>
                </Route>
                <Route path='*' element={<NotFound />} />
            </Routes>
        </div>
    );
};

export default DeclareRouter;
