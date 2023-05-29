import { configureStore } from "@reduxjs/toolkit";
import userMethods from './storeSlices/logoutSlice';

const store = configureStore({
    reducer:
    {
       logout: userMethods.reducer
    }
});
export default store;