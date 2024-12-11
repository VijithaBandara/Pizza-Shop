import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { pizzas } from "../services/pizzas"
import axios from 'axios';

const API_URL = 'http://localhost:4000/products';

export const fetchProducts = createAsyncThunk('product/fetchProducts', async () => {
    const response = await axios.get(API_URL);
    return response.data;
  });

const productSlice = createSlice({
    name:'product',
    initialState:{
        cartItems:[],
        quantityCount:0,
        products:[],
        loading: false,
        error: null,
      },
      extraReducers: (builder) => {
        builder
          .addCase(fetchProducts.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(fetchProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload;
          })
          .addCase(fetchProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = 'Failed to fetch products';
          });
      },
    reducers:{
        /*getProducts:(state, action) => {
            state.products = [...pizzas];
        },*/
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

export const { getProducts, addProduct, quantityChange, removeProduct, quantityCount } = productSlice.actions;
export default productSlice.reducer;
