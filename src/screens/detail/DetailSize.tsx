import Field from "@/components/field/Field";
import { Size } from "@/data/Interface";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as Yup from "yup";

const schame = Yup.object({
    sizeName: Yup.string().required("Please enter your Size name!"),
    sizeValue: Yup.string().required("Please enter your Size value!"),
    sizeDescription: Yup.string().required(
        "Please enter your Size description!"
    ),
});

type DetailSizeProps = {
    size: Size;
    handleUpdate: (data: FieldValues) => void;
};

const DetailSize = ({ size, handleUpdate }: DetailSizeProps) => {
    const {
        handleSubmit,
        control,
        setValue,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schame),
        mode: "onSubmit",
    });
    setValue("sizeName", size.name);
    setValue("sizeValue", size.value);
    setValue("sizeDescription", size.description);

    const submit = (data: FieldValues) => {
        handleUpdate(data);
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
        <>
            <div className="w-[800px]">
                <div className="bg-white mt-10 rounded-md px-10 pt-10 pb-5">
                    {/* <form onSubmit={handleSubmit(onSubmit)}> */}
                    <form onSubmit={handleSubmit(submit)}>
                        <h1 className="font-bold text-lg">Size Infomation</h1>
                        <div className="text-right mt-10">
                            <div className="grid grid-cols-2 gap-10">
                                <Field
                                    control={control}
                                    name="sizeName"
                                    id="size-name"
                                    placeholder="Enter size name..."
                                >
                                    Size Name
                                </Field>
                                <Field
                                    control={control}
                                    name="sizeValue"
                                    id="size-value"
                                    placeholder="Enter Size Value..."
                                >
                                    Size Value
                                </Field>
                            </div>
                            <div className="grid gap-10 mt-10">
                                <Field
                                    control={control}
                                    name="sizeDescription"
                                    id="size-description"
                                    placeholder="Enter size Description..."
                                >
                                    Size Descriptions
                                </Field>
                            </div>
                            <button
                                type="submit"
                                className="mt-10 font-semibold text-white bg-gradient-to-br from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 px-4 py-2 rounded-md inline-block transition-all"
                            >
                                Update Size
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default DetailSize;
