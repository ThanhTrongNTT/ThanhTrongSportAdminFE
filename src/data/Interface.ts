export interface User {
    id: string;
    userName: string;
    email: string;
    password: string;
    activeFlag: boolean;
    removalFlag: boolean;
    role: Role[];
    userProfile: UserProfile;
}

export interface UserProfile {
    id: string;
    firstName: string;
    lastName: string;
    avatar: string;
    removalFlag: boolean;
}

export interface Product {
    id: string;
    productName: string;
    description: string;
    price: number;
    quantity: number;
    category: Category;
    removalFlag: boolean;
}

export interface Category {
    id: string;
    categoryName: string;
    description: string;
    removalFlag: boolean;
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
