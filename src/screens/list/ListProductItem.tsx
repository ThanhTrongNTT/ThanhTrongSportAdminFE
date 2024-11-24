import ProductAPI from "@/api/product.api";
import { IconAdd } from "@/components/icon/Icon";
import ImageCustom from "@/components/image/ImageCustom";
import { Image } from "@/data/Image.interface";
import { initProduct, Product, ProductItem } from "@/data/Product.interface";
import { Pagination } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination as PaginationSwiper, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";

const ListProductItem = () => {
    const pathname = window.location.pathname;
    const slug = pathname.split("/").pop();
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);
    const [product, setProduct] = useState<Product>(initProduct);
    const [productItems, setProductItems] = useState<ProductItem[]>([]);

    const onCloseNew = () => {
        // history.push("/admin/product/new");
    };
    const onPageChange = (page: number) => {
        setCurrentPage(page);
    };
    useEffect(() => {
        const getProduct = (slug: string) => {
            ProductAPI.getProductBySlug(slug).then((response) => {
                setProduct(response.data);
            });
        };
        if (slug) getProduct(slug);
    }, []);

    return (
        <>
            {/* Show Product Information */}
            <div className="flex flex-col items-centers bg-white p-5 m-10 rounded-2xl">
                <div className="flex items-center justify-center p-5">
                    <h1 className="text-3xl font-bold">Product Information</h1>
                </div>
                <div className="w-1/2 mx-auto">
                    <Swiper
                        navigation={true}
                        pagination={{
                            type: "fraction",
                        }}
                        modules={[Navigation, PaginationSwiper]}
                        spaceBetween={50}
                        slidesPerView={3}
                    >
                        {/* {Array.from({ length: 5 }, (_, index) => index + 1).map(
                            (number) => (
                                <SwiperSlide>
                                    <ImageCustom
                                        key={number}
                                        alt={"Test"}
                                        className="h-48 w-48"
                                        src={
                                            "https://hd-book-store.vercel.app/images/db_bg.jpeg"
                                        }
                                    />{" "}
                                </SwiperSlide>
                            )
                        )} */}
                        {product.subImages && product.subImages.length > 0 ? (
                            product.subImages.map((image: Image) => (
                                <SwiperSlide key={image.id}>
                                    <ImageCustom
                                        key={image.id}
                                        className="h-full w-full object-cover rounded-md"
                                        alt={image.fileName}
                                        src={
                                            image.url ??
                                            "https://hd-book-store.vercel.app/images/db_bg.jpeg"
                                        }
                                    />
                                </SwiperSlide>
                            ))
                        ) : (
                            <SwiperSlide>
                                <ImageCustom
                                    alt={"Test"}
                                    className="h-full w-full"
                                    src={
                                        "https://hd-book-store.vercel.app/images/db_bg.jpeg"
                                    }
                                />
                            </SwiperSlide>
                        )}
                    </Swiper>
                </div>
                <div className=" text-left">
                    <div className="p-5">
                        <div className="ml-5">
                            <h2 className="text-lg font-semibold">
                                {product.productName}
                            </h2>
                            <p className="text-gray-400">
                                {product.priceBase?.toLocaleString("it-IT", {
                                    style: "currency",
                                    currency: "VND",
                                })}
                            </p>
                        </div>
                        <h2 className="text-lg font-semibold">
                            Long Description
                        </h2>
                        <p className="text-gray-400">
                            {product.longDescription}
                        </p>
                    </div>
                </div>
            </div>
            <div className="">
                <button
                    className="flex items-center text-black bg-white p-1 mx-8 my-2 rounded-2xl border border-gray-c4"
                    onClick={onCloseNew}
                >
                    <IconAdd />
                    <span className="flex items-center mr-2">Add New</span>
                </button>
            </div>
            <div className="">
                <h2 className="flex flex-col items-center font-bold text-2xl">
                    Product Items
                </h2>
                <div className="p-5">
                    <div className="overflow-x-auto rounded-2xl border mx-4 border-gray-c4 ">
                        <table className="bg-white w-full text-sm text-left text-gray-400">
                            <thead>
                                <tr>
                                    <th scope="col" className="py-3 px-6">
                                        Image
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        Color
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        Size
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        Stock
                                    </th>
                                    <th scope="col" className="px-6">
                                        Price Base
                                    </th>
                                    <th scope="col" className="px-6">
                                        Sales
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 text-center"
                                    >
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {Array.from(
                                    { length: 5 },
                                    (_, index) => index + 1
                                ).map((number) => (
                                    <tr
                                        className="bg-white border border-gray-c2 hover:bg-gray-c2 cursor-pointer"
                                        key={number}
                                    >
                                        <th
                                            scope="row"
                                            className="py-4 px-6 font-medium text-black whitespace-nowrap"
                                        >
                                            <ImageCustom
                                                alt={"Test"}
                                                className="h-20 w-20 rounded-full border-4 border-gray-c4"
                                                src={
                                                    "https://hd-book-store.vercel.app/images/db_bg.jpeg"
                                                }
                                            />
                                        </th>
                                        <th
                                            scope="row"
                                            className="py-4 px-6 font-medium text-black whitespace-nowrap"
                                        >
                                            {number}
                                        </th>
                                        <th
                                            scope="row"
                                            className="py-4 px-6 font-medium text-black whitespace-nowrap"
                                        >
                                            {"item.size.name"}
                                        </th>
                                        <th
                                            scope="row"
                                            className="py-4 px-6 font-medium text-black whitespace-nowrap"
                                        >
                                            {"item.stock.quantity"}
                                        </th>
                                        <th
                                            scope="row"
                                            className="py-4 px-6 font-medium whitespace-nowrap"
                                        >
                                            {(100000).toLocaleString("vi-VN") +
                                                " VND"}
                                        </th>
                                        <th
                                            scope="row"
                                            className="py-4 px-6 font-medium text-black whitespace-nowrap"
                                        >
                                            {"item.sales.name"}
                                        </th>
                                        <th
                                            scope="row"
                                            className="py-4 px-6 font-medium text-black whitespace-nowrap"
                                        >
                                            <div className="text-center">
                                                <span
                                                    className="text-white hover:bg-white hover:text-black bg-success  rounded-lg px-2 mx-2"
                                                    onClick={() => {}}
                                                >
                                                    View
                                                </span>
                                                <span
                                                    className="text-white bg-warning rounded-lg px-2 hover:bg-white hover:text-black mx-2"
                                                    onClick={() => {}}
                                                >
                                                    Delete
                                                </span>
                                            </div>
                                        </th>
                                    </tr>
                                ))}

                                {/* {productItems.map((item, index) => (
                                    <tr
                                        className="bg-white border border-gray-c2 hover:bg-gray-c2 cursor-pointer"
                                        key={index}
                                    >
                                        <th
                                            scope="row"
                                            className="py-4 px-6 font-medium text-black whitespace-nowrap"
                                        >
                                            {item.mainImage.url}
                                        </th>
                                        <th
                                            scope="row"
                                            className="py-4 px-6 font-medium text-black whitespace-nowrap"
                                        >
                                            {item.color.name}
                                        </th>
                                        <th
                                            scope="row"
                                            className="py-4 px-6 font-medium text-black whitespace-nowrap"
                                        >
                                            {item.size.name}
                                        </th>
                                        <th
                                            scope="row"
                                            className="py-4 px-6 font-medium text-black whitespace-nowrap"
                                        >
                                            {item.stock.quantity}
                                        </th>
                                        <th
                                            scope="row"
                                            className="py-4 px-6 font-medium whitespace-nowrap"
                                        >
                                            {item.priceBase.toLocaleString(
                                                "vi",
                                                {
                                                    style: "currency",
                                                    currency: "VND",
                                                }
                                            )}
                                        </th>
                                        <th
                                            scope="row"
                                            className="py-4 px-6 font-medium text-black whitespace-nowrap"
                                        >
                                            {item.sales.name}
                                        </th>
                                        <th
                                            scope="row"
                                            className="py-4 px-6 font-medium text-black whitespace-nowrap"
                                        >
                                            <div className="text-center">
                                                <span
                                                    className="text-white hover:bg-white hover:text-black bg-success  rounded-lg px-2 mx-2"
                                                    onClick={() => {}}
                                                >
                                                    View
                                                </span>
                                                <span
                                                    className="text-white bg-warning rounded-lg px-2 hover:bg-white hover:text-black mx-2"
                                                    onClick={() => {}}
                                                >
                                                    Delete
                                                </span>
                                            </div>
                                        </th>
                                    </tr>
                                ))} */}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="flex justify-center pb-5 mb-5">
                    <Pagination
                        showIcons={true}
                        currentPage={currentPage}
                        totalPages={totalPage}
                        onPageChange={onPageChange}
                        layout="pagination"
                    />
                </div>
            </div>
        </>
    );
};

export default ListProductItem;
