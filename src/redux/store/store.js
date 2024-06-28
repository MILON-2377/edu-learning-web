"use client";
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/Auth/authSlicer";

const store = configureStore({
    reducer:{
        authReducer
    }
});

export default store;