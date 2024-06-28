'use client';

const { createSlice } = require("@reduxjs/toolkit")


const initialState = {
    authData: null,
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        // userData
        userData: (state, action) => {
            state.authData = action.payload;
        }
    }
});

export const {userData} = authSlice.actions;
export default authSlice.reducer;