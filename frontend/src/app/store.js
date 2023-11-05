import { configureStore } from "@reduxjs/toolkit";
import tagsReducer from "../features/tags/tagSlice"

export const store = configureStore({
    reducer: {
        tags: tagsReducer
    },
});
