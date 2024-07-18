import { configureStore } from "@reduxjs/toolkit";
import cartProductReducer from "./cartSlice";
import productItemReducer from "./productSlice";
import userReducer from "./userSlice";

export default configureStore({
    reducer : {
        user : userReducer,
        productItem : productItemReducer,
        cartProduct : cartProductReducer   
    }
})
