import { Product } from "@/data/Product.interface";
import React from "react";
import { useNavigate } from "react-router-dom";
interface ProductTableProps {
    products: Product[];
    onCloseUpdate: (product: Product) => void;
    onCloseDelete: () => void;
    setIdDeleted: (id: string) => void;
}
const ProductTable = ({
    products,
    onCloseUpdate,
    onCloseDelete,
    setIdDeleted,
}: ProductTableProps) => {
    const navigate = useNavigate();
    return (
        <div>
            <table className="bg-white w-full text-sm text-left text-gray-400">
                <thead>
                    <tr>
                        <th scope="col" className="py-3 px-6">
                            Product Name
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Long Description
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Free Information
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Washing Information
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Slug
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Price
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Sale
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Type
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Category
                        </th>
                        <th scope="col" className="px-6 text-center">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr
                            className="bg-white border border-gray-c2 hover:bg-gray-c2 "
                            key={product.id}
                        >
                            <td
                                scope="row"
                                className="py-4 px-6 font-medium text-black whitespace-nowrap"
                            >
                                {product.productName}
                            </td>
                            <td
                                scope="row"
                                className="py-4 px-6 font-medium text-black whitespace-nowrap"
                            >
                                {product.longDescription}
                            </td>
                            <td
                                scope="row"
                                className="py-4 px-6 font-medium text-black whitespace-nowrap"
                            >
                                {product.freeInformation}
                            </td>
                            <td
                                scope="row"
                                className="py-4 px-6 font-medium text-black whitespace-nowrap"
                            >
                                {product.washingInformation}
                            </td>
                            <td
                                scope="row"
                                className="py-4 px-6 font-medium text-black whitespace-nowrap"
                            >
                                {product.slug}
                            </td>
                            <td
                                scope="row"
                                className="py-4 px-6 font-medium text-black whitespace-nowrap"
                            >
                                {product.basePrice}
                            </td>
                            <td
                                scope="row"
                                className="py-4 px-6 font-semibold text-red-500 whitespace-nowrap"
                            >
                                {product.sales?.description ?? "No sale"}
                            </td>
                            <td
                                scope="row"
                                className="py-4 px-6 font-medium text-black whitespace-nowrap"
                            >
                                {product.gender?.locale}
                            </td>
                            <td
                                scope="row"
                                className="py-4 px-6 font-medium text-black whitespace-nowrap"
                            >
                                {product.category?.locale}
                            </td>
                            <td>
                                <div className="text-center font-bold">
                                    <span
                                        className="cursor-pointer text-white hover:bg-white hover:text-black bg-blue-500  rounded-lg px-2 mx-2 duration-300"
                                        onClick={() =>
                                            navigate(`detail/${product.slug}`)
                                        }
                                    >
                                        View
                                    </span>
                                    <span
                                        className="cursor-pointer text-white hover:bg-white hover:text-black bg-success  rounded-lg px-2 mx-2 duration-300"
                                        onClick={() => onCloseUpdate(product)}
                                    >
                                        Update
                                    </span>
                                    <span
                                        className="cursor-pointer text-white bg-red-500 rounded-lg px-2 hover:bg-white hover:text-black mx-2 duration-300"
                                        onClick={() => {
                                            setIdDeleted(product?.id ?? "");
                                            onCloseDelete();
                                        }}
                                    >
                                        Delete
                                    </span>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductTable;
