// import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import React, { useEffect, useState, ChangeEvent } from "react";
import { FieldValues, useForm } from "react-hook-form";
import Dropdown from "@/components/dropdown/Dropdown";
import Field from "@/components/field/Field";
import Label from "@/components/label/Label";
import classNames from "@/utils/classNames";

const NewProduct = () => {
    const { handleSubmit, control, setValue } = useForm();
    const [images, setImages] = useState<Array<string | File>>([]);
    // const [percent, setPercent] = useState(0);
    // const [urls, setUrls] = useState<Array<string>>([]);
    const [disable, setDisable] = useState<boolean>(true);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            for (let i = 0; i < e.target.files.length; i++) {
                const newImage = e.target.files[i];
                setImages((images) => [...images, newImage]);
            }
        }
    };

    const onSubmit = (data: FieldValues) => {
        console.log(data);
    };
    // const uploadFireBase = () => {
    //     const promises: Array<any> = [];
    //     // eslint-disable-next-line array-callback-return
    //     images.map((image: any) => {
    //         const imageRef = ref(storage, `images/${image.name}`);
    //         const uploadTask = uploadBytesResumable(imageRef, image);
    //         promises.push(uploadTask);
    //         uploadTask.on(
    //             'state_changed',
    //             (snaphot: any) => {
    //                 const percent = 0;
    //                 setPercent(percent);
    //             },
    //             (err: any) => console.log(err),
    //             () => {
    //                 getDownloadURL(uploadTask.snapshot.ref).then((url: string) => {
    //                     setUrls((prev) => [...prev, url]);
    //                 });
    //             },
    //         );
    //     });
    //     Promise.all(promises)
    //         .then(() => {
    //             toast.success('Upload success', {
    //                 autoClose: 500,
    //             });
    //         })
    //         .catch((err) => console.log(err));
    // };
    // const onSubmit = ({ beginningLocation, destinationLocation, type, ...values }: any) => {
    //     // const tour = {
    //     //     tourDetail: {
    //     //         ...values,
    //     //         beginningLocation: {
    //     //             locationName: beginningLocation,
    //     //             locationType: 'BEGINNING',
    //     //         },
    //     //         destinationLocation: {
    //     //             locationName: destinationLocation,
    //     //             locationType: 'DESTINATION',
    //     //         },
    //     //         images: urls,
    //     //     },
    //     //     type,
    //     // };
    //     // console.log('TCL: NewTour -> tour', tour);
    //     // tourApi
    //     //     .saveTour(tour)
    //     //     .then((response) => {
    //     //         console.log(response);
    //     //     })
    //     //     .catch((errr) => console.log(errr));
    // };
    useEffect(() => {
        // const getData = async () => {
        //     await locationApi.getLocationByType('BEGINNING').then((reponse) => {
        //         reponse.data.map((item: Location) => {
        //             setBeginning((prev: any) => [...prev, item.locationName]);
        //         });
        //     });
        //     await locationApi.getLocationByType('DESTINATION').then((reponse) => {
        //         reponse.data.map((item: Location) => {
        //             setDestination((prev: any) => [...prev, item.locationName]);
        //         });
        //     });
        // };
        // getData();
    }, []);

    return (
        <div className="w-[800px]">
            <div className="bg-white mt-10 rounded-md px-10 pt-10 pb-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1 className="font-bold text-lg">Product Infomation</h1>
                    <div className="text-right mt-10">
                        <div className="grid grid-cols-2 gap-10">
                            <Field
                                control={control}
                                name="productName"
                                id="product-name"
                                placeholder="Enter product name..."
                            >
                                Product Name
                            </Field>
                            <Field
                                control={control}
                                name="productDes"
                                id="product-des"
                                placeholder="Enter destination..."
                            >
                                Product Description
                            </Field>
                        </div>
                        <div className="grid grid-cols-2 gap-10 mt-10">
                            <Field
                                control={control}
                                name="price"
                                id="price"
                                placeholder="Enter price..."
                            >
                                Price
                            </Field>
                            <Field
                                control={control}
                                name="quantity"
                                id="quantity"
                                placeholder="Enter quantity..."
                            >
                                Quantity
                            </Field>
                        </div>
                        <div className="grid grid-cols-2 gap-10 mt-10">
                            <div className="flex flex-col gap-2 text-left">
                                <Label htmlFor="" className="">
                                    Size
                                </Label>
                                <Dropdown
                                    className=""
                                    control={control}
                                    setValue={setValue}
                                    dropdownLabel="Select Size"
                                    name="size"
                                    list={["S", "M", "L", "XL", "XXL"]}
                                />
                            </div>
                            <div className="flex flex-col gap-2 text-left">
                                <Label htmlFor="" className="">
                                    Category
                                </Label>
                                <Dropdown
                                    className=""
                                    control={control}
                                    setValue={setValue}
                                    dropdownLabel="Select category"
                                    name="category"
                                    list={[
                                        "category1",
                                        "category2",
                                        "category3",
                                    ]}
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
                                // onClick={uploadFireBase}
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
                        <button
                            type="submit"
                            className="mt-10 font-semibold text-white bg-gradient-to-br from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 px-4 py-2 rounded-md inline-block transition-all"
                        >
                            Add Product
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default NewProduct;
