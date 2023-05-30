import { configureStore } from "@reduxjs/toolkit";
import userMethods from './storeSlices/logoutSlice';
import Chats from "./storeSlices/chatsSlice";

const store = configureStore({
    reducer:
    {
       logout: userMethods.reducer,
       chats:Chats.reducer
    }
});
export default store;