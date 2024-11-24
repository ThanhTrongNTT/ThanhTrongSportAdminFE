import { Image } from "./Image.interface";

export interface Product {
    id?: string;
    freeInformation?: string;
    longDescription?: string;
    washingInformation?: string;
    productName?: string;
    slug?: string;
    basePrice?: number;
    promoPrice?: number | null;
    gender?: Category | null;
    category?: Category | null;
    sales?: Sales | null;
    subImages?: Image[];
}

export const initProduct: Product = {
    id: "",
    productName: "",
    freeInformation: "",
    longDescription: "",
    washingInformation: "",
    slug: "",
    basePrice: 0,
    promoPrice: null,
    gender: null,
    category: null,
    sales: null,
    subImages: [],
};

export interface ProductItem {
    id: string;
    color: Color;
    size: Size;
    stock: Stock;
    mainImage: Image;
    product: Product;
}

export interface Category {
    id?: string;
    categoryName?: string;
    level?: number;
    locale?: string;
    parentCategory: Category | null;
}

export interface Size {
    code: string;
    displayCode: string;
    name: string;
}

export interface Color {
    code: string;
    displayCode: string;
    name: string;
}

export interface Stock {
    statusCode: string;
    quantity: number;
}

export interface Sales {
    id: string;
    name: string;
    description: string;
    code: string;
    discount: number;
    startDate: string;
    endDate: string;
}
