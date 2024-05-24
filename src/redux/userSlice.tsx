import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userApi from '~/api/user.api';

export const userLogin = createAsyncThunk('user/login', async (loginRequest: string) => {
    //thunkAPI.dispatch();
    try {
        // const result = await userApi.login(user.email, user.password);
        const result = { data: 1231231 };
        return result.data;
    } catch (err) {
        console.log(err);
    }
});

export const userGetMe = createAsyncThunk('user/getMe', async (email: any) => {
    try {
        const result = await userApi.getMe(email);
        if (result.data) return result.data;
        return result;
    } catch (err) {
        console.log('getMe error$', err);
    }
});

interface Role {
    id: string;
    roleName: string;
}
interface User {
    id: string;
    email: string;
    fullName: string;
    phoneNumber: string;
    gender: string;
    role: Role[] | null;
    avatar: string;
}
interface UserSlice {
    accessToken: string;
    refreshToken: string;
    userInfo: User;
    error: string;
    message: string;
}
const accessToken = localStorage.getItem('accessToken');
const refreshToken = localStorage.getItem('refreshToken');
const initialState: UserSlice = {
    accessToken: accessToken || '',
    refreshToken: refreshToken || '',
    userInfo: {
        id: '',
        email: '',
        fullName: '',
        phoneNumber: '',
        gender: '',
        role: null,
        avatar: '',
    },
    error: '',
    message: '',
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        clearUser: (state) => {
            state.userInfo = initialState.userInfo;
        },
        update: (state, action) => {
            state.userInfo = action.payload;
        },
        setMessage: (state, action) => {
            state.message = action.payload;
        },
        resetUserState: (state) => {
            console.log('resetState');
            state.message = '';
            state.error = '';
        },
    },
});

export default userSlice.reducer;
export const { clearUser, update, setMessage, resetUserState } = userSlice.actions;
