import Field from "@/components/field/Field";
import { Size } from "@/data/Interface";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { ChangeEvent, useEffect } from "react";
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

type NewSizeProps = {
    setSize: (size: Size) => void;
    size: Size;
    handleCreateNew: (data: FieldValues) => void;
};

const NewSize = ({ size, setSize, handleCreateNew }: NewSizeProps) => {
    const {
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schame),
        mode: "onSubmit",
    });

    const resetValues = () => {
        reset({
            sizeName: "",
            sizeValue: "",
            sizeDescription: "",
        });
        setSize({
            name: "",
            value: "",
            description: "",
            id: "",
            removalFlag: false,
        });
    };

    useEffect(() => {
        reset({
            sizeName: size.name,
            sizeDescription: size.description,
            sizeValue: size.value,
        });
    }, [size, reset]);

    const submit = async (data: FieldValues) => {
        await handleCreateNew(data);
        resetValues();
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
                                    onChange={(
                                        e: ChangeEvent<HTMLInputElement>
                                    ) => {
                                        setSize({
                                            ...size,
                                            name: e.target.value,
                                        });
                                    }}
                                >
                                    Size Name
                                </Field>
                                <Field
                                    control={control}
                                    name="sizeValue"
                                    id="size-value"
                                    placeholder="Enter Size Value..."
                                    onChange={(
                                        e: ChangeEvent<HTMLInputElement>
                                    ) => {
                                        setSize({
                                            ...size,
                                            value: e.target.value,
                                        });
                                    }}
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
                                    onChange={(
                                        e: ChangeEvent<HTMLInputElement>
                                    ) => {
                                        setSize({
                                            ...size,
                                            description: e.target.value,
                                        });
                                    }}
                                >
                                    Size Description
                                </Field>
                            </div>
                            <button
                                type="submit"
                                className="mt-10 font-semibold text-white bg-gradient-to-br from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 px-4 py-2 rounded-md inline-block transition-all"
                            >
                                Create Size
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default NewSize;
