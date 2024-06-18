import Field from "@/components/field/Field";
import { Category } from "@/data/Interface";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as Yup from "yup";

type DetailCategoryProps = {
    // Props here
    category: Category;
    onCloseUpdate: () => void;
};

const schame = Yup.object({
    categoryName: Yup.string().required("Please enter your Category name!"),
    categoryDescription: Yup.string().required(
        "Please enter your Category description!"
    ),
});
const DetailCategory = ({ category, onCloseUpdate }: DetailCategoryProps) => {
    const {
        handleSubmit,
        control,
        setValue,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schame),
        mode: "onSubmit",
    });
    setValue("categoryName", category.categoryName);
    setValue("categoryDescription", category.description);

    const submit = (data: FieldValues) => {
        console.log(data);
        onCloseUpdate();
        toast.success("Update Category success!", {
            autoClose: 1000,
            pauseOnHover: false,
            draggable: true,
            delay: 50,
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

    return (
        <div className="w-[800px]">
            <div className="bg-white mt-10 rounded-md px-10 pt-10 pb-5">
                {/* <form onSubmit={handleSubmit(onSubmit)}> */}
                <form onSubmit={handleSubmit(submit)}>
                    <h1 className="font-bold text-lg">Category Infomation</h1>
                    <div className="text-right mt-10">
                        <div className="grid grid-cols-2 gap-10">
                            <Field
                                control={control}
                                name="categoryName"
                                id="category-name"
                                placeholder="Enter Category name..."
                            >
                                Category Name
                            </Field>
                            <Field
                                control={control}
                                name="categoryDescription"
                                id="category-description"
                                placeholder="Enter Description..."
                            >
                                Description
                            </Field>
                        </div>
                        <button
                            type="submit"
                            className="mt-10 font-semibold text-white bg-gradient-to-br from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 px-4 py-2 rounded-md inline-block transition-all"
                        >
                            Update Category
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default DetailCategory;
