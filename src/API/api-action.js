import { getAuthToken } from "../Auth/Auth";

const token=getAuthToken();
const authToken="Bearer "+token;

export const addCampaignHandler=(newCampaign)=>{
    return async(dispatch)=>{
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
            if (response.status===200) {
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