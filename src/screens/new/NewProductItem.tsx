import MediaFileAPI from "@/api/mediaFile.api";
import DropdownColor from "@/components/dropdown/DropdownColor";
import DropdownSize from "@/components/dropdown/DropdownSize";
import Field from "@/components/field/Field";
import { Image } from "@/data/Image.interface";
import { Color, initProductItem, ProductItem } from "@/data/Product.interface";
import classNames from "@/utils/classNames";
import { productItemSchema } from "@/utils/schema.resolver";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { ChangeEvent, useEffect, useState } from "react";
import { Controller, FieldValues, useForm } from "react-hook-form";
import { toast } from "react-toastify";

interface NewProductItemProps {
    productItem: ProductItem;
    setProductItem: (productItem: ProductItem) => void;
    handleCreateNew: (data: FieldValues) => void;
    colors: Color[];
}

const sizes = ["S", "M", "L", "XL", "XXL"];

const NewProductItem = ({
    productItem,
    setProductItem,
    handleCreateNew,
    colors,
}: NewProductItemProps) => {
    const [isUploading, setIsUploading] = useState(false);
    const [image, setImage] = useState<File | null>(null);
    const [mediaFile, setMediaFile] = useState<Image | null>(null);
    const {
        handleSubmit,
        control,
        reset,
        setValue,
        formState: { errors },
    } = useForm<ProductItem>({
        resolver: yupResolver(productItemSchema),
        mode: "onSubmit",
        defaultValues: {
            color: productItem.color,
            size: productItem.size,
            stock: productItem.stock,
            mainImage: productItem.mainImage,
            product: productItem.product,
        },
    });

    const resetValues = () => {
        reset(initProductItem);
        setProductItem(initProductItem);
    };

    const submit = async (data: FieldValues) => {
        if (image) {
            await uploadFiles();
        }
        const productItem = { ...data, mainImage: mediaFile };
        await handleCreateNew(productItem);
        resetValues();
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            for (let i = 0; i < e.target.files.length; i++) {
                const newImage = e.target.files[i];
                setImage(newImage);
            }
        }
    };

    const uploadFiles = async () => {
        if (!image) {
            return;
        } else {
            setIsUploading(true);
            await MediaFileAPI.upload(image)
                .then((response) => {
                    if (response.result) {
                        setImage(null);
                        setMediaFile(response.data);
                        toast.success("Tải lên thành công!", {
                            position: "top-center",
                            autoClose: 1000,
                            pauseOnHover: true,
                            draggable: true,
                            delay: 50,
                        });
                    }
                })
                .catch((error) => {
                    toast.error("Tải lên thất bại!", {
                        position: "top-center",
                        autoClose: 1000,
                        pauseOnHover: false,
                        draggable: true,
                        delay: 50,
                    });
                })
                .finally(() => {
                    setIsUploading(false);
                });
        }
    };

    useEffect(() => {
        reset({
            color: productItem.color,
            size: productItem.size,
            stock: productItem.stock,
            mainImage: productItem.mainImage,
            product: productItem.product,
        });
    }, [productItem, reset]);

    useEffect(() => {
        const arrErrors = Object.values(errors);
        if (arrErrors.length > 0) {
            if (arrErrors[0]?.message) {
                const message = arrErrors[0]?.message;
                toast.error(message.toString(), {
                    position: "top-center",
                    autoClose: 1000,
                    pauseOnHover: false,
                    draggable: true,
                    delay: 50,
                });
            }
        }
    }, [errors]);

    return (
        <>
            <div className="w-[800px]">
                <div className="bg-white mt-10 rounded-md px-10 pt-10 pb-5">
                    {/* <form onSubmit={handleSubmit(onSubmit)}> */}
                    <form onSubmit={handleSubmit(submit)}>
                        <h1 className="font-bold text-2xl text-center">
                            Tạo mới sản phẩm con
                        </h1>
                        <div className="text-right mt-10">
                            <div className="grid grid-cols-2 gap-10">
                                <div className="text-left">
                                    <label
                                        htmlFor=""
                                        className="text-lg font-semibold text-left"
                                    >
                                        Màu sắc{" "}
                                        <span className="text-red-500">
                                            (*)
                                        </span>
                                    </label>
                                    <Controller
                                        name="color"
                                        control={control}
                                        render={({ field }) => (
                                            <DropdownColor
                                                field={field}
                                                dropdownLabel={
                                                    "Lựa chọn màu sắc"
                                                }
                                                list={colors}
                                                error={
                                                    errors.color?.message ?? ""
                                                }
                                            />
                                        )}
                                    />
                                </div>
                                <div className="text-left">
                                    <label
                                        htmlFor=""
                                        className="text-lg font-semibold text-left"
                                    >
                                        Kích cỡ{" "}
                                        <span className="text-red-500">
                                            (*)
                                        </span>
                                    </label>
                                    <Controller
                                        name="size"
                                        control={control}
                                        render={({ field }) => (
                                            <DropdownSize
                                                field={field}
                                                dropdownLabel={
                                                    "Lựa chọn kích cỡ"
                                                }
                                                list={sizes}
                                                error={
                                                    errors.size?.message ?? ""
                                                }
                                            />
                                        )}
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-10">
                                <div className="text-left">
                                    <label
                                        htmlFor=""
                                        className="text-lg font-semibold text-left"
                                    >
                                        Số lượng{" "}
                                        <span className="text-red-500">
                                            (*)
                                        </span>
                                    </label>
                                    <Field
                                        control={control}
                                        type="number"
                                        name="stock"
                                        id="productItem-stock"
                                        placeholder="Nhập só lượng..."
                                        error={errors.stock?.message ?? ""}
                                    />
                                </div>
                            </div>
                            <div className="mt-10 text-left items-center">
                                <label
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    htmlFor="file_input"
                                >
                                    Upload file
                                </label>
                                <div className="flex">
                                    <input
                                        type="file"
                                        onChange={handleChange}
                                        className="w-full text-gray-500 font-medium text-sm bg-gray-100 file:cursor-pointer cursor-pointer file:h-full file:border-0 file:py-2 file:px-4 file:mr-4 file:bg-gray-800 file:hover:bg-gray-700 file:text-white rounded"
                                    />
                                    <button
                                        type="button"
                                        onClick={uploadFiles}
                                        className={classNames(
                                            "ml-4 h-12 w-[130px] rounded-md text-white font-semibold",
                                            !image
                                                ? "cursor-no-drop bg-gradient-to-br from-orange-200 to-pink-200"
                                                : isUploading
                                                  ? "cursor-wait bg-gradient-to-br from-gray-400 to-gray-500"
                                                  : "bg-gradient-to-br from-orange-500 to-pink-500"
                                        )}
                                        disabled={image === null || isUploading}
                                    >
                                        {isUploading ? (
                                            <div className="flex items-center justify-center">
                                                <div className="w-7 h-7 bg-transparent border-[3px] border-t-[3px] border-t-transparent animate-spin border-white rounded-full"></div>
                                            </div>
                                        ) : (
                                            "Upload"
                                        )}
                                    </button>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="mt-10 font-semibold text-white bg-gradient-to-br from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 px-4 py-2 rounded-md inline-block transition-all"
                            >
                                Thêm mới
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default NewProductItem;
