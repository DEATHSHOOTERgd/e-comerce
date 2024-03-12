import { Product} from '@models/index';
import { createSlice } from '@reduxjs/toolkit';

export const ProductsEmptyState:Product[]=[];
/*
{
    id:0,
    title:'',
    price:0,
    description:'',
    category:'',
    image:'',
    rating:{
        rate:0,
        count:0
    }
}
*/

export const productsSlice = createSlice(
    {
        name: 'products',
        initialState: ProductsEmptyState,
        reducers:{
            createProducts:(state, action)=> action.payload,
            modifyProducts:(state, action)=> ({...state, ...action.payload}),
            resetProducts:()=>ProductsEmptyState
        }
    }
);

export const {createProducts, modifyProducts, resetProducts} = productsSlice.actions;

export default productsSlice.reducer;