import CategoryAPI from "@/api/category.api";
import MediaFileAPI from "@/api/mediaFile.api";
import DropdownCategory from "@/components/dropdown/DropdownCategory";
import Field from "@/components/field/Field";
import ImageCustom from "@/components/image/ImageCustom";
import { Image } from "@/data/Image.interface";
import { Category, initProduct, Product } from "@/data/Product.interface";
import classNames from "@/utils/classNames";
import { ProductSchema } from "@/utils/schema.resolver";
import { yupResolver } from "@hookform/resolvers/yup";
import { ChangeEvent, useEffect, useState } from "react";
import { Controller, FieldValues, get, useForm } from "react-hook-form";
import { toast } from "react-toastify";

type DetailProductProps = {
    // Props here
    product: Product;
    handleUpdate: (product: Product) => void;
    genders: Category[];
};

const DetailProduct = ({
    product,
    handleUpdate,
    genders,
}: DetailProductProps) => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [disable, setDisable] = useState<boolean>(true);
    const [images, setImages] = useState<Array<File>>([]);
    const [mediaFiles, setMediaFiles] = useState<Image[]>(
        product.subImages ?? []
    );
    const {
        handleSubmit,
        control,
        watch,
        formState: { errors },
    } = useForm<Product>({
        resolver: yupResolver(ProductSchema),
        mode: "onSubmit",
        defaultValues: {
            ...product,
        },
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            for (let i = 0; i < e.target.files.length; i++) {
                const newImage = e.target.files[i];
                setImages((images) => [...images, newImage]);
            }
        }
    };

    const uploadFiles = async () => {
        setDisable(false);
        if (images.length === 0) {
            toast.error("Please choose your images", {
                autoClose: 1000,
                pauseOnHover: false,
                draggable: true,
                delay: 50,
            });
            setDisable(true);
            return;
        }
        await MediaFileAPI.uploadFiles(images).then((response) => {
            if (response.data) {
                setImages([]);
                toast.success("Upload success", {
                    autoClose: 1000,
                    pauseOnHover: false,
                    draggable: true,
                    delay: 50,
                });
                setDisable(true);
                setMediaFiles(response.data);
            }
            setDisable(true);
        });
    };

    const formValues = watch();

    const disableUpdate = () => {
        return (
            formValues.productName === product.productName &&
            formValues.longDescription === product.longDescription &&
            formValues.freeInformation === product.freeInformation &&
            formValues.washingInformation === product.washingInformation &&
            formValues.slug === product.slug &&
            formValues.basePrice === product.basePrice
        );
    };
    const onSubmit = (data: FieldValues) => {
        console.log("data", data);
        // handleUpdate(productUpdate);
    };
    const fetchCategories = (id: string) => {
        CategoryAPI.getChildCategory(id).then((response) => {
            setCategories(response.data);
        });
    };
    useEffect(() => {
        const arrErrors = Object.values(errors);
        if (arrErrors.length > 0) {
            if (arrErrors[0]?.message) {
                const message = arrErrors[0]?.message;
                toast.error(message.toString(), {
                    autoClose: 1000,
                    pauseOnHover: false,
                    draggable: true,
                    delay: 50,
                });
            }
        }
    }, [errors]);
    useEffect(() => {
        if (product.gender?.id) {
            fetchCategories(product.gender.id);
        }
    }, []);

    const gender = watch("gender");
    useEffect(() => {
        if (gender && gender.id !== "") {
            if (gender.id) fetchCategories(gender.id);
        }
        console.log("gender", gender);
    }, [gender]);
    return (
        <div className="w-[800px]">
            <div className="bg-white mt-10 rounded-md px-10 pt-10 pb-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1 className="font-bold text-lg flex justify-center">
                        Product Infomation
                    </h1>
                    <div className="text-right mt-10">
                        <div className="grid grid-cols-2 gap-10">
                            <div className="text-left">
                                <label
                                    htmlFor=""
                                    className="text-lg font-semibold text-left"
                                >
                                    Product Name
                                </label>
                                <Field
                                    control={control}
                                    name="productName"
                                    id="product-name"
                                    placeholder="Enter product name..."
                                    error={errors.productName?.message ?? ""}
                                />
                            </div>
                            <div className="text-left">
                                <label
                                    htmlFor=""
                                    className="text-lg font-semibold text-left"
                                >
                                    Product Long Description
                                </label>
                                <Field
                                    control={control}
                                    name="longDescription"
                                    id="long-description"
                                    placeholder="Enter Long Description..."
                                    error={
                                        errors.longDescription?.message ?? ""
                                    }
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-10">
                            <div className="text-left">
                                <label
                                    htmlFor=""
                                    className="text-lg font-semibold text-left"
                                >
                                    Product Free Information
                                </label>
                                <Field
                                    control={control}
                                    name="freeInformation"
                                    id="product-name"
                                    placeholder="Enter Free Information..."
                                    error={
                                        errors.freeInformation?.message ?? ""
                                    }
                                />
                            </div>
                            <div className="text-left">
                                <label
                                    htmlFor=""
                                    className="text-lg font-semibold text-left"
                                >
                                    Product Slug
                                </label>
                                <Field
                                    control={control}
                                    name="slug"
                                    id="product-slug"
                                    placeholder="Enter Slug..."
                                    error={errors.slug?.message ?? ""}
                                >
                                    Product Slug
                                </Field>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-10 mt-10">
                            <div className="text-left">
                                <label
                                    htmlFor=""
                                    className="text-lg font-semibold text-left"
                                >
                                    Product Price
                                </label>
                                <Field
                                    control={control}
                                    name="basePrice"
                                    id="basePrice"
                                    placeholder="Enter price..."
                                    type="number"
                                    error={errors.basePrice?.message ?? ""}
                                >
                                    Price
                                </Field>
                            </div>
                            <div className="text-left">
                                <label
                                    htmlFor=""
                                    className="text-lg font-semibold text-left"
                                >
                                    Product Washing Information
                                </label>
                                <Field
                                    control={control}
                                    name="washingInformation"
                                    id="quantity"
                                    placeholder="Enter Washing Information..."
                                    error={
                                        errors.washingInformation?.message ?? ""
                                    }
                                >
                                    Product Washing Information
                                </Field>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-10 mt-10">
                            <div className="flex flex-col gap-2 text-left">
                                <label
                                    htmlFor=""
                                    className="text-lg font-semibold text-left"
                                >
                                    Product Gender
                                </label>
                                <Controller
                                    name="gender"
                                    control={control}
                                    render={({ field }) => (
                                        <DropdownCategory
                                            field={field}
                                            dropdownLabel={
                                                product.gender?.locale ||
                                                "Select Gender"
                                            }
                                            list={genders}
                                            error={errors.gender?.message ?? ""}
                                        />
                                    )}
                                />
                            </div>
                            <div className="flex flex-col gap-2 text-left">
                                <label
                                    htmlFor=""
                                    className="text-lg font-semibold text-left"
                                >
                                    Product Category
                                </label>
                                <Controller
                                    name="category"
                                    control={control}
                                    render={({ field }) => (
                                        <DropdownCategory
                                            field={field}
                                            dropdownLabel={
                                                product.category?.locale ||
                                                "Select Category"
                                            }
                                            list={categories}
                                            error={
                                                errors.category?.message ?? ""
                                            }
                                        />
                                    )}
                                />
                            </div>
                        </div>
                        <div className="mt-10 text-left flex items-center">
                            <input
                                type="file"
                                multiple
                                onChange={handleChange}
                                className="w-2/4 px-4 py-2 rounded-lg border border-c6"
                            />
                            <button
                                type="button"
                                onClick={uploadFiles}
                                className={classNames(
                                    "ml-4 h-12 w-[130px] rounded-md text-white font-semibold",
                                    disable
                                        ? "bg-gradient-to-br from-orange-500 to-pink-500"
                                        : "bg-gradient-to-br from-orange-200 to-pink-200 cursor-no-drop"
                                )}
                            >
                                {disable ? (
                                    "Upload"
                                ) : (
                                    <div className="flex items-center justify-center">
                                        <div className="w-7 h-7 bg-transparent border-[3px] border-t-[3px] border-t-transparent animate-spin border-white rounded-full"></div>
                                    </div>
                                )}
                            </button>
                        </div>
                        <div className="flex mt-2">
                            {mediaFiles.length > 0 &&
                                mediaFiles.map((image) => (
                                    <ImageCustom
                                        key={image.id}
                                        className="h-[150px] w-[150px] object-cover rounded-md"
                                        alt={image.fileName}
                                        src={image.url}
                                    />
                                ))}
                        </div>
                        <button
                            type="submit"
                            className={classNames(
                                "mt-10 font-semibold px-4 py-2 rounded-md inline-block transition-all",
                                disableUpdate()
                                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                                    : "text-white bg-gradient-to-br from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 cursor-pointer"
                            )}
                            disabled={disableUpdate()}
                        >
                            Update Product
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default DetailProduct;
