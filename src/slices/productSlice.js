import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name:'product',
    initialState:{
        cartItems:[],
        quantityCount:0,
    },
    reducers:{
        addProduct:(state, action) => {
            const cartItem = state.cartItems.find(Item => Item.id === action.payload.item.id);
            if (cartItem) {
                cartItem.quantity += 1; 
            }else{
                state.cartItems.push({
                    name:action.payload.item.name,
                    id:action.payload.item.id,
                    price:action.payload.item.price,
                    quantity:1,
                    image:action.payload.item.image
                })
            }
        },
        quantityChange:(state, action) => {
            const cartItem = state.cartItems.find(item => item.id === action.payload.id);

            if (cartItem) {
                cartItem.quantity += action.payload.change; 
            }
        },
        removeProduct:(state, action) => {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id);
        },
        quantityCount:(state) => {
            state.quantityCount = state.cartItems.reduce((total, item) => total + item.quantity, 0)
        }
    }
});

export const { addProduct, quantityChange, removeProduct, quantityCount } = productSlice.actions;
export default productSlice.reducer;
