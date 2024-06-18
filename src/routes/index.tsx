import LayoutDefault from "@/layouts/LayoutDefault";
import PrivateRoute from "@/routes/privateRoute";
import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const Home = lazy(() => import("@/screens/home/Home"));
const ListCategory = lazy(() => import("@/screens/list/ListCategory"));
const ListOrder = lazy(() => import("@/screens/list/ListOrder"));
const ListProduct = lazy(() => import("@/screens/list/ListProduct"));
const ListUser = lazy(() => import("@/screens/list/ListUser"));
const ListSize = lazy(() => import("@/screens/list/ListSize"));
const Login = lazy(() => import("@/screens/login/Login"));
const NotFound = lazy(() => import("@/screens/notFound/NotFound"));
const ProfilePage = lazy(() => import("@/screens/profile/ProfilePage"));

const DeclareRouter = () => {
    return (
        <div className="bg-gradient-to-t from-orange-400 via-red-500 to-pink-500">
            <Routes>
                <Route path="/" element={<Navigate to="/admin" />} />
                <Route path="/login" element={<Login />} />
                <Route path="profile" element={<ProfilePage />} />
                <Route path="/admin" element={<PrivateRoute />}>
                    <Route element={<LayoutDefault />}>
                        <Route path="" element={<Home />} />
                        <Route path="user">
                            <Route index element={<ListUser />} />
                        </Route>
                        <Route path="category">
                            <Route index element={<ListCategory />} />
                        </Route>
                        <Route path="order">
                            <Route index element={<ListOrder />} />
                        </Route>
                        <Route path="product">
                            <Route index element={<ListProduct />} />
                        </Route>
                        <Route path="size">
                            <Route index element={<ListSize />} />
                        </Route>
                    </Route>
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
};

export default DeclareRouter;
