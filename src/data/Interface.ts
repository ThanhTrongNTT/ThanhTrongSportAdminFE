export interface User {
    id: string;
    userName: string;
    email: string;
    password: string;
    activeFlag: boolean;
    removalFlag: boolean;
    userProfile: UserProfile;
}

export interface UserProfile {
    id: string;
    firstName: string;
    lastName: string;
    avatar: MediaFile;
    removalFlag: boolean;
}

export interface MediaFile {
    id: string;
    fileName: string;
    fileType: string;
    url: string;
    removalFlag: boolean;
}

export interface Product {
    id: string;
    productName: string;
    description: string;
    price: number;
    size: Size;
    quantity: number;
    category: Category;
    images: MediaFile[];
    removalFlag: boolean;
}

export interface Size {
    id: string;
    name: string;
    value: string;
    description: string;
    removalFlag?: boolean;
}

export interface Category {
    id: string;
    categoryName: string;
    description: string;
    removalFlag: boolean;
}

export interface CartDetail {
    id: string;
    product: Product;
    quantity: number;
    removalFlag: boolean;
}
export interface Cart {
    id: string;
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

export interface Role {
    id: string;
    roleName: string;
}

export interface Pagination {
    pageNo: number;
    pageSize: number;
    sortBy: string;
    sortDir: string;
}

export interface JWTType {
    admin: boolean;
    sub: string;
    exp: number;
    iat: number;
}

export interface ChangePasswordRequest {
    email: string;
    oldPassword: string;
    newPassword: string;
}

export interface SearchParams {
    keyWord: string;
    pageNo: number;
    pageSize: number;
    sortBy: string;
    sortDir: string;
}

export interface LoginData {
    accessToken: string;
    refreshToken: string;
    isAdmin: boolean;
}

export interface DataPageResponse<T> {
    content: T[];
    last: boolean;
    totalElements: number;
    totalPages: number;
    size: number;
    number: number;
    first: boolean;
    numberOfElements: number;
    empty: boolean;
}
export interface PageResponse<T> {
    result: boolean;
    message: string;
    code: number;
    data: DataPageResponse<T>;
}
