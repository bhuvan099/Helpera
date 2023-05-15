import { createSlice } from "@reduxjs/toolkit";

const authSlice=createSlice({
    name:'auth',
    initialState:{token:null,user:null,authError:null},
    reducers:{
        setToken(state,action){
            state.token=action.payload;
        },
        setUser(state,action){
            state.user=action.payload;
        },
        setAuthError(state,action){
            state.authError=action.payload;
        }
    }
})

export const authActions=authSlice.actions;
export default authSlice;