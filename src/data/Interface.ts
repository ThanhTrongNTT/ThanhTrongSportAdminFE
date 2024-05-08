export interface User {
    id: string;
    userName: string;
    email: string;
    password: string;
    activeFlag: Address;
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

export interface Role {
    id: string;
    roleName: string;
}

export interface Address {
    street: string;
    district: string;
    city: string;
}

export interface Tour {
    id?: string;
    hotelRoom?: number;
    flightClass?: number;
    tourDetail?: TourDetail;
    type?: string;
}
export interface TourDetail {
    tourName?: string;
    tourDes?: string;
    price?: number;
    images?: string[];
    startDay?: string;
    endDay?: string;
    beginningLocation?: {
        locationName: string;
        locationType: 'BEGINNING';
    };
    destinationLocation?: {
        locationName: string;
        locationType: 'DESTINATION';
    };
}
export interface Location {
    id?: string;
    locationName: string;
    locationType: string;
}
export interface Booking {
    id: string;
    user: User;
    tour: Tour;
    enable: boolean;
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
