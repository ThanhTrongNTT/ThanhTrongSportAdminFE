import { Category } from "@/data/Interface";
import React from "react";

type CategoryCardProps = {
    category: Category;
};
const CategoryCard = (props: CategoryCardProps) => {
    return (
        <div className="bg-white border-sm shadow-lg h-[300px] w-1/5 p-5 m-4 rounded-md">
            <div className="flex flex-col">
                <h1>Name: {props.category.categoryName}</h1>
                <span className="font-bold">
                    Description:
                    {props.category.description}
                </span>
            </div>
            <div className="flex justify-between font-bold p-5">
                <button className="p-1 bg-blue-300  rounded-md hover:bg-blue-500">
                    Edit
                </button>
                <button className="p-1 bg-red-300  rounded-md hover:bg-red-500">
                    Delete
                </button>
            </div>
        </div>
    );
};

export default CategoryCard;
