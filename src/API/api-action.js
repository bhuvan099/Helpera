import { getAuthToken } from "../Auth/Auth";
import { campaignActions } from "../redux-store/campaign";

const token=getAuthToken();
const authToken="Bearer "+token;

export const addCampaignApi=(newCampaign)=>{
    return async()=>{
        const addCampaign=async(newCampaign)=>{
            const response=await fetch(process.env.REACT_APP_HELPERA_ADDCAMPAIGN_URL,{
                method:'POST',
                headers:{
                        'Content-Type':'application/json',
                        'Authorization':authToken,
                },
                body:JSON.stringify(newCampaign)
                });
            let data=await response.json()
            if (response.status===201) {
                console.log("Campaign added successfully");
            }else{
                alert("Something went wrong!!!")
            }
        }
        try{
            await addCampaign(newCampaign);
            
           }catch(error){}
    }
}
export const findAllCampaignApi=()=>{
    return async(dispatch)=>{
        const findAllCampaigns=async()=>{
            const response=await fetch(process.env.REACT_APP_HELPERA_FIND_ALL_CAMPAIGN_URL,{
                method:'GET',
                headers:{
                        'Content-Type':'application/json',
                }
                });
            let data=await response.json()
            if (response.status===201) {
                console.log("successfully found all campaigns")
                dispatch(campaignActions.setAllCampaigns(data))
            }else{
                console.log("Unable to find All Campaings")
            }
        }
        try{
            await findAllCampaigns();
           }catch(error){}
    }
}
export const getJoinedCampaignApi=()=>{
    return async(dispatch)=>{
        const findAllCampaigns=async()=>{
            const response=await fetch(process.env.REACT_APP_HELPERA_FIND_ALL_CAMPAIGN_URL,{
                method:'GET',
                headers:{
                        'Content-Type':'application/json',
                }
                });
            let data=await response.json()
            if (response.status===201) {
                console.log("successfully found all campaigns")
                dispatch(campaignActions.setAllCampaigns(data))
            }else{
                console.log("Unable to find All Campaings")
            }
        }
        try{
            await findAllCampaigns();
           }catch(error){}
    }
}
