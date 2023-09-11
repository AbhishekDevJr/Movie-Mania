import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "../components/features/searchSlice";

const store = configureStore({
    reducer : {
        search : searchSlice
    }
});

export default store;