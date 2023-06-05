import React, { useState } from "react"
import CampaignComponent from "./CampaignComponent";
import classes from "./Campaignlist.module.css";
import { useSelector } from "react-redux";

const Campaignlist=()=>{
    const [isFiltered,setIsFiltered]=useState(false);
    const ALL_CAMPAINGS=useSelector(state=>state.campaign.allCampaings);
    const user=useSelector(state=>state.auth.user);
    const changeListToFilter=()=>{
        setIsFiltered(true);
    }
    const changeListToAll=()=>{
        setIsFiltered(false);
    }
    const clist=ALL_CAMPAINGS.map(item=><CampaignComponent key={item._id} id={item._id} name={item.CampaignName} org={item.OrgName} contact={item.ContactNo} address={item.Address}/>)
    // const clistFilt=DUMMY_CAMP_FILT.map(item=><CampaignComponent key={item.id} name={item.name} org={item.org} contact={item.contact} address={item.address}/>)
    return <div className={classes.main}>
       {/* <div>
       <h1>Upcoming Campaigns</h1>{user && user.role===8 && <button>Add Campaign</button>}
       </div> */}
       <h1>Upcoming Campaigns</h1>
     <div className={classes.action}>
     <button onClick={changeListToAll} className={!isFiltered && classes.On}>All Campaigns</button>
    <button onClick={changeListToFilter} className={isFiltered && classes.On}>Filtered for you</button>
     </div>
    {clist}
    </div>
}
export default Campaignlist;