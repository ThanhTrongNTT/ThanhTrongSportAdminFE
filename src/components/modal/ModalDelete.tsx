import React from "react";

type ModalDeleteProps = {
    onCloseDelModal: () => void;
    title: string;
    handleDelete?: (id: string) => void;
};
const ModalDelete = ({ title, onCloseDelModal }: ModalDeleteProps) => {
    return (
        <div className="text-center p-10">
            <h3 className="mb-5 text-lg font-bold text-gray-500 dark:text-gray-400">
                {title}
            </h3>
            <div className="flex justify-center gap-4">
                <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
                    color="failure"
                    // onClick={() => handleDelete(idDelete)}
                    onClick={() => onCloseDelModal()}
                >
                    Yes, I'm sure
                </button>
                <button
                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full"
                    color="gray"
                    onClick={onCloseDelModal}
                >
                    No, cancel
                </button>
            </div>
        </div>
    );
};

export default ModalDelete;
