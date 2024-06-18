import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "@/api/user.api";
import { User } from "@/data/Interface";

// export const userGetMe = createAsyncThunk("user/getMe", async (email: any) => {
//     try {
//         const result = await userApi.getMe(email);
//         if (result.data) return result.data;
//         return result;
//     } catch (err) {
//         console.log("getMe error$", err);
//     }
// });

interface UserSlice {
    accessToken: string;
    refreshToken: string;
    userInfo: User;
    error: string;
    message: string;
}
const accessToken = sessionStorage.getItem("accessToken");
const refreshToken = sessionStorage.getItem("refreshToken");
const initialState: UserSlice = {
    accessToken: accessToken || "",
    refreshToken: refreshToken || "",
    userInfo: {
        id: "",
        userName: "",
        email: "",
        password: "",
        activeFlag: false,
        removalFlag: false,
        userProfile: {
            id: "",
            firstName: "",
            lastName: "",
            avatar: {
                id: "",
                fileName: "",
                fileType: "",
                url: "",
                removalFlag: false,
            },
            removalFlag: false,
        },
    },
    error: "",
    message: "",
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        clearUser: (state) => {
            state.userInfo = initialState.userInfo;
        },
        updateToken: (state, action) => {
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
        },
        update: (state, action) => {
            state.userInfo = action.payload;
        },
        setMessage: (state, action) => {
            state.message = action.payload;
        },
        resetUserState: (state) => {
            console.log("resetState");
            state.accessToken = "";
            state.refreshToken = "";
            state.userInfo = initialState.userInfo;
            state.message = "";
            state.error = "";
        },
    },
});

export default userSlice.reducer;
export const { clearUser, updateToken, update, setMessage, resetUserState } =
    userSlice.actions;
