import { configureStore } from "@reduxjs/toolkit";
import titleSlice from "./reducers/titleSlice";

export const store = configureStore({
    reducer: {
        titleSLice:titleSlice
    }
})