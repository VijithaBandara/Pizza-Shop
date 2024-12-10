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
        }
    }
})

export const {login} =userSlice.actions;
export default userSlice.reducer;
