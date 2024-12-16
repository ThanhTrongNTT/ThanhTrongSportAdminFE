// Don't add any asynchronous logic or other "side effects" in reducer
// For example, logging a value to the console, ajax
// Just keep it simple
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface AppState {
    todayMoney: number;
    todayOrders: number;
    newClient: number;
    products: number;
}
const initialState: AppState = {
    todayMoney: 0,
    todayOrders: 0,
    newClient: 0,
    products: 0,
};

export const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        getTodayMoney: (state, action: PayloadAction<number>) => {
            state.todayMoney = action.payload;
        },
        getTodayOrders: (state, action: PayloadAction<number>) => {
            state.todayOrders = action.payload;
        },
        getNewClient: (state, action: PayloadAction<number>) => {
            state.newClient = action.payload;
        },
        getProducts: (state, action: PayloadAction<number>) => {
            state.products = action.payload;
        },
    },
});
export const { getTodayMoney, getTodayOrders, getNewClient, getProducts } = appSlice.actions;

export default appSlice.reducer;
