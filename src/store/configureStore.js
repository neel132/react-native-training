import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../reducers/counterReducer";

export const store = configureStore({
    reducer: {
        counter: counterSlice,
    }
})