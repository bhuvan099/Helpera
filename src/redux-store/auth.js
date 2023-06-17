import { createSlice } from "@reduxjs/toolkit";

const authSlice=createSlice({
    name:'auth',
    initialState:{user:null,authError:null,modal:null},
    reducers:{
        setUser(state,action){
            state.user=action.payload;
        },
        setAuthError(state,action){
            state.authError=action.payload;
        },
        setModal(state,action){
            state.modal=action.payload;
        },
        clearAuthStates(state){
            state.user=null;
            state.authError=null;
            state.token=null;
        }
    }
})

export const authActions=authSlice.actions;
export default authSlice;