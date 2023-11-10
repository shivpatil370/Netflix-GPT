import {configureStore} from "@reduxjs/toolkit";
import { addUser } from "./userSlice";

const appStore=configureStore({
     reducer:{
        user:addUser,
     }
});

export default appStore;