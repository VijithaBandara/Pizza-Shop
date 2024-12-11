import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:{
        name:"",
        password:"",
        email:"",
        position:""
    },
    reducers:{
        login:(state, action) => {
            state.name = "vijitha"
            state.email = action.payload.email
            state.password = action.payload.password
            state.position = "manager"
        },

        signUp:(state, action) => {
            state.name = action.payload.name
            state.email = action.payload.email
            state.password = action.payload.password
            state.position = "employee"
        }
    }
})

export const {login, signUp} =userSlice.actions;
export default userSlice.reducer;
