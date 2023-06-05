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
                alert(data.message);
            }else{
                alert(data.message)
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
        const getJoinedCampaigns=async()=>{
            const response=await fetch(process.env.REACT_APP_HELPERA_GET_JOINED_CAMPAIGN_URL,{
                method:'GET',
                headers:{
                        'Content-Type':'application/json',
                        'Authorization':authToken,
                }
                });
            let data=await response.json()
            if (response.status===201) {
                console.log("successfully found all campaigns")
                dispatch(campaignActions.setAllCampaigns(data))
            }else{
                alert("Unable to find All Campaings")
            }
        }
        try{
            await getJoinedCampaigns();
           }catch(error){}
    }
}
export const joinCampaignApi=(Id)=>{
    return async()=>{
        const joinCampaign=async(Id)=>{
            const response=await fetch(process.env.REACT_APP_HELPERA_JOIN_CAMPAIGN_URL,{
                method:'POST',
                headers:{
                        'Content-Type':'application/json',
                        'Authorization':authToken,
                },
                body:JSON.stringify({campaignId:Id})
                });
            let data=await response.json()
            console.log(response.status);
            if (response.status===200) {
                console.log(data.message)
                window.alert(data.message);
            }else if(response.status===403){
                console.log(data.message)
            }
        }
        try{
            await joinCampaign(Id);
           }catch(error){}
    }
}
export const getCampaignByCampaignIdApi=(Id)=>{
    return async(dispatch)=>{
        const getCampaignByCampaignId=async(Id)=>{
            const url="http://127.0.0.1:5000/organisation/getCampaignsByCid/"+Id;
            console.log(url);
            const response=await fetch(url,{
                method:'GET',
                headers:{
                        'Content-Type':'application/json',
                }
                    });
            let data=await response.json()
            console.log(data);
            if (response.status===200) {
                dispatch(campaignActions.setCurrentCampaign(data))
            }else if(response.status===404){
                alert(data.message)
            }
        }
        try{
            await getCampaignByCampaignId(Id);
           }catch(error){}
    }
}
