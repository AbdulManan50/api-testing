import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./LoginSlice"

export const store = configureStore({
    reducer: {
        auth: authReducer,
    }
});
