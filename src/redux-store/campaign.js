import { createSlice } from "@reduxjs/toolkit";

const campaignSlice=createSlice({
    name:'campaign',
    initialState:{allCampaings:[],filteredCampaigns:[]},
    reducers:{
        setAllCampaigns(state,action){
            state.allCampaings=action.payload;
        },
        setFilteredCampaigns(state,action){
            state.filteredCampaigns=action.payload;
        }
    }
})

export const campaignActions=campaignSlice.actions;
export default campaignSlice;