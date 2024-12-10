import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name:'product',
    initialState:{
        cartItems:[
            { id: 1, name: 'Margherita Pizza', price: 12.99, quantity: 1, image: 'https://images.unsplash.com/photo-1601925187747-6e810dad6c1c' },
            { id: 2, name: 'Pepperoni Pizza', price: 15.49, quantity: 2, image: 'https://images.unsplash.com/photo-1576395031799-b5f1918c4a22' },
            { id: 3, name: 'BBQ Chicken Pizza', price: 18.99, quantity: 1, image: 'https://images.unsplash.com/photo-1600628422596-c9c0b45f6c43' },
          ]
    },
    reducers:{
        addProduct:() => {},
        quantityChange:(state, action) => {
            const cartItem = state.cartItems.find(item => item.id === action.payload.id);

            if (cartItem) {
                cartItem.quantity += action.payload.change; 
            }
        },
        removeProduct:(state, action) => {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id);
        },
    }
});

export const { addProduct, quantityChange, removeProduct } = productSlice.actions;
export default productSlice.reducer;
