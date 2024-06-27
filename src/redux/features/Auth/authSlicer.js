'use client';

const { createSlice } = require("@reduxjs/toolkit")


const initialState = {
    value:{
        userName: "",
        Role: "",
        photo: "",
    }
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        // registe user with and password
        userRegister: (state, action) => {

        }
    }
});

export const {userRegister} = authSlice.actions;
export default authSlice.reducer;