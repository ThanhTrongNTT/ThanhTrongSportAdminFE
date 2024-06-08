import React from "react";
import ImageCustom from "@/components/image/ImageCustom";

type UserCardProps = {
    // Props here
    onCloseDel: () => void;
    onCloseEdit: () => void;
};
const UserCard = (props: UserCardProps) => {
    return (
        <div className="bg-white border-sm shadow-lg h-[400px] w-1/5 p-5 m-4 rounded-md">
            <ImageCustom
                alt={"Test"}
                src={"https://hd-book-store.vercel.app/images/db_bg.jpeg"}
            />
            <div className="flex flex-col pt-5 pl-5 font-bold">
                <h1>
                    User Name: <span className="font-normal">ThanhTrong</span>
                </h1>
                <span>
                    Email: <span className="font-normal">ThanhTrong</span>
                </span>
                <span>
                    Active: <span className="font-normal">ThanhTrong</span>
                </span>
                <span>
                    Full Name: <span className="font-normal">ThanhTrong</span>
                </span>
            </div>
            <div className="flex justify-between font-bold p-5">
                <button
                    className="p-1 bg-blue-300  rounded-md hover:bg-blue-500"
                    onClick={() => props.onCloseEdit()}
                >
                    Edit
                </button>
                <button
                    className="p-1 bg-red-300  rounded-md hover:bg-red-500"
                    onClick={() => props.onCloseDel()}
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default UserCard;
