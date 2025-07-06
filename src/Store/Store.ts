import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../features/studentSlice'

export const loginStore=configureStore({
    reducer:{
    user:userReducer
    }
});

export type Mainstate=ReturnType<typeof loginStore.getState>
export type AppDispatch=typeof loginStore.dispatch