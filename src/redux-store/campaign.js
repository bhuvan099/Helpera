import { createSlice } from "@reduxjs/toolkit";

const campaignSlice=createSlice({
    name:'campaign',
    initialState:{allCampaings:[],filteredCampaigns:[],currentCampaign:null},
    reducers:{
        setAllCampaigns(state,action){
            state.allCampaings=action.payload;
        },
        setFilteredCampaigns(state,action){
            state.filteredCampaigns=action.payload;
        },
        setCurrentCampaign(state,action){
            state.currentCampaign=action.payload;
        }
    }
})

export const campaignActions=campaignSlice.actions;
export default campaignSlice;