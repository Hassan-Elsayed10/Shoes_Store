import { configureStore } from "@reduxjs/toolkit";
import { productsSlice } from "./productsSlice";
import { cartSclice } from "./cartSlice";
import { userSlice } from "./userSlice";
import {authSlice} from './authSlice'
export const store = configureStore({
    reducer: {
        products: productsSlice.reducer,
        cart: cartSclice.reducer,
        users: userSlice.reducer,
        auths: authSlice.reducer,
    }
});