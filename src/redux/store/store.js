"use client";
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/Auth/authSlicer";

export const store = configureStore({
    reducer:{
        authReducer
    }
});