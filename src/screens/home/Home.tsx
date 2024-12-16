import userApi from "@/api/user.api";
import {
    IconClient,
    IconGlobalUser,
    IconMoney,
    IconSale,
} from "@/components/icon/Icon";
import Widget from "@/components/widget/Widget";
import { getNewClient, getProducts, getTodayMoney, getTodayOrders } from "@/redux/appSlice";
import { RootState, useAppDispatch } from "@/redux/store";
import { useEffect } from "react";
import { useSelector } from "react-redux";



const Home = () => {
    const dispatch = useAppDispatch();
    const todayMoney = useSelector((state: RootState) => state.app.todayMoney);
    const todayOrders = useSelector((state: RootState) => state.app.todayOrders);
    const newClient = useSelector((state: RootState) => state.app.newClient);
    const products = useSelector((state: RootState) => state.app.products);
    const widgets = [
        {
            title: `Total Revenue`,
            content: (todayMoney || 0).toLocaleString(
                "it-IT",
                {
                    style: "currency",
                    currency: "VND",
                }
            ),
            percent: 55,
            icon: <IconMoney />,
        },
        {
            title: `Total Orders`,
            content: (todayOrders || 0).toString(),
            percent: 3,
            icon: <IconSale />,
        },
        {
            title: `Total Users`,
            content: (newClient || 0).toString(),
            percent: 2,
            icon: <IconGlobalUser />,
        },
        { title: `Total Products`, content: (products || 0).toString(), percent: 5, icon:  <IconClient />},
    ];
    useEffect(() => {
        userApi.getInformationAdmin().then((response) => {
            dispatch(getTodayMoney(response.data.totalMoney));
            dispatch(getTodayOrders(response.data.totalOrders));
            dispatch(getNewClient(response.data.totalClient));
            dispatch(getProducts(response.data.totalProduct));
        });
    }, [dispatch]);
    return (
        <>
            <div className="bg-transparent h-screen">
                <div className="flex p-4 bg-transparent m-2 rounded-lg">
                    <div className="flex">
                        {widgets.map((widget) => (
                            <Widget
                                key={widget.title}
                                title={widget.title}
                                content={widget.content}
                                percent={widget.percent}
                                icon={widget.icon}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
