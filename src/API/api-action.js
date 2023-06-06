import { getAuthToken } from "../Auth/Auth";
import { authActions } from "../redux-store/auth";
import { campaignActions } from "../redux-store/campaign";


export const addCampaignApi=(newCampaign)=>{
    return async(dispatch)=>{
        const addCampaign=async(newCampaign)=>{
            const token=getAuthToken();
            const authToken="Bearer "+token;
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
                const modal={
                    type:"ADD_CAMPAIGN",
                    title:"Successful!!",
                    message:"Your campaign has been added successfully.",
                    accept:"Add New",
                    reject:"Return Home"
                }
                dispatch(authActions.setModal(modal));
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

export const joinCampaignApi=(Id)=>{
    return async(dispatch)=>{
        const joinCampaign=async(Id)=>{
            const token=getAuthToken();
            const authToken="Bearer "+token;
            const response=await fetch(process.env.REACT_APP_HELPERA_JOIN_CAMPAIGN_URL,{
                method:'POST',
                headers:{
                        'Content-Type':'application/json',
                        'Authorization':authToken,
                },
                body:JSON.stringify({campaignId:Id})
                });
            let data=await response.json()
            if (response.status===200) {
                const modal={
                    type:"JOINED",
                    title:"Successful...!!",
                    message:"Successfully joined for the camaign",
                    accept:"Return to Home",
                    reject:"OK,fine"
                }
                dispatch(authActions.setModal(modal)); 
            }else if(response.status===403){
                const modal={
                    type:"JOIN_ERROR",
                    title:"UNABLE TO JOIN",
                    message:data.message,
                    accept:"Return to Home",
                    reject:"OK,fine"
                }
                dispatch(authActions.setModal(modal)); 
            }
        }
        try{
            await joinCampaign(Id);
           }catch(error){}
    }
}
export const getCampaignByCreatorIDApi=()=>{
    return async(dispatch)=>{
        const getCampaignByCreatorID=async()=>{
            const token=getAuthToken();
            const authToken="Bearer "+token;
            const response=await fetch("http://127.0.0.1:5000/organisation/getCampaignByCreatorID",{
                method:'POST',
                headers:{
                        'Content-Type':'application/json',
                        'Authorization':authToken,
                }
                    });
            let data=await response.json()
            if (response.status===200) {
                dispatch(campaignActions.setCampaignsCreated(data))
            }else if(response.status===404){
                alert(data.message)
            }
        }
        try{
            await getCampaignByCreatorID();
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
export const getJoinedCampaigsApi=()=>{
    return async(dispatch)=>{
        const getJoinedCampaigs=async()=>{
            const token=getAuthToken();
            const authToken="Bearer "+token;
            const response=await fetch(process.env.REACT_APP_HELPERA_GET_JOINED_CAMPAIGN_URL,{
                method:'GET',
                headers:{
                        'Content-Type':'application/json',
                        'Authorization':authToken,
                }
                    });
            let data=await response.json();
            if (response.status===200) {
                dispatch(campaignActions.setCampaignsJoined(data))
            }else if(response.status===404){
                alert(data.message)
            }
        }
        try{
            await getJoinedCampaigs();
           }catch(error){}
    }
}