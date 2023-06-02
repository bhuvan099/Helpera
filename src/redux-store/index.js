import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth";
import campaignSlice from "./campaign";

const store=configureStore({
    reducer:{auth:authSlice.reducer,campaign:campaignSlice.reducer}
});

export default store;