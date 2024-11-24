import { Product } from "./Product.interface";
import { User } from "./User.interface";

export interface CartDetail {
    id?: string;
    product: Product;
    quantity: number;
    removalFlag: boolean;
}
export interface Cart {
    id?: string;
    user: User;
    total: number;
    cartDetails: CartDetail[];
    removalFlag: boolean;
}
export interface OrderDetail {
    id: string;
    cart: Cart;
    total: number;
    removalFlag: boolean;
}
export interface Order {
    id: string;
    orderDate?: string;
    totalPrice: number;
    user?: User;
    orderDetails?: OrderDetail;
}
