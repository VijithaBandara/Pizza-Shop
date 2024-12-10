import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name:'product',
    initialState:0,
    reducers:{
        addProduct:() => {},
        increaseQuantity:() => {},
        decreaseQuantity:() => {},
        removeProduct:() => {},
    }
});

export const { addProduct, increaseQuantity, decreaseQuantity, removeProduct } = productSlice.actions;
export default productSlice.reducer;
