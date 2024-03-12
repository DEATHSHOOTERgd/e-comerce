import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./states/user.state";
import { productsSlice } from "./states/product.state";
import { Product, User } from "@/models";

export interface AppStore{
    user:User;
    products:Product[];
}

export default configureStore<AppStore>({
    reducer:{
        user: userSlice.reducer,
        products: productsSlice.reducer
    }
});