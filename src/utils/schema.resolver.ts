import { Category, Product } from "@/data/Product.interface";
import * as Yup from "yup";
export const ProductSchema = Yup.object<Product>({
    id: Yup.string().optional(),
    freeInformation: Yup.string().required(
        "Please enter your Product free information!"
    ),
    longDescription: Yup.string().required(
        "Please enter your Product long description!"
    ),
    washingInformation: Yup.string().required(
        "Please enter your Product washing information!"
    ),
    productName: Yup.string().required("Please enter your Product name!"),
    slug: Yup.string().required("Please enter your Product description!"),
    basePrice: Yup.number()
        .min(50000, "Please input value over 50000")
        .required(),
    gender: Yup.mixed<Category>().required(
        "Please choose your Product gender!"
    ),
    category: Yup.mixed<Category>().required(
        "Please choose your Product category!"
    ),
    subImages: Yup.array()
        .min(1, "Please provide at least one image!")
        .required("Please provide images!"),
});
