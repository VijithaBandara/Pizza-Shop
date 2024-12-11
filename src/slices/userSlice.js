import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = 'http://localhost:4000/user';

export const signup = createAsyncThunk('user/signup', async (user) => {
    const response = await axios.post(API_URL,user);
    return response.data;
  });

const userSlice = createSlice({
    name:"user",
    initialState:{
        name:"",
        password:"",
        email:"",
        position:""
    },
    extraReducers:(builder) =>{
        builder
          .addCase(signup.pending, (state) => {
            
          })
          .addCase(signup.fulfilled, (state, action) => {
            console.log(action.payload)
            state.name = action.payload.user.name;
            state.password = action.payload.user.password;
            state.email = action.payload.user.email;
            state.position = action.payload.user.position;
          })
          .addCase(signup.rejected, (state, action) => {
            
          });
    },
    reducers:{
        login:(state, action) => {
            state.name = "vijitha"
            state.email = action.payload.email
            state.password = action.payload.password
            state.position = "manager"
        }
    }
})

export const {login} =userSlice.actions;
export default userSlice.reducer;
