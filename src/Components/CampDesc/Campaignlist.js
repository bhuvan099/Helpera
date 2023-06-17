import React, { useRef, useState } from "react"
import CampaignComponent from "./CampaignComponent";
import classes from "./Campaignlist.module.css";
import { useDispatch, useSelector } from "react-redux";
import { searchCampaignApi } from "../../API/api-action";

const Campaignlist=()=>{
    const [isFiltered,setIsFiltered]=useState(false);
    const dispatch=useDispatch();
    const ALL_CAMPAINGS=useSelector(state=>state.campaign.allCampaings);
    const FILTERED_CAMPAINGS=useSelector(state=>state.campaign.filteredCampaigns);
    // const typeRef=useRef();
    const queryRef=useRef();
    const changeListToFilter=()=>{
        setIsFiltered(true);
    }
    const changeListToAll=()=>{
        setIsFiltered(false);
    }
    const searchFunc=async(e)=>{
         e.preventDefault();
        changeListToFilter();
         console.log(queryRef.current.value)
         console.log(queryRef.current.value.length)
         if(queryRef.current.value.length===0){
            changeListToAll();
            return;
         }
       await dispatch(searchCampaignApi(queryRef.current.value));
    }
    const clist=ALL_CAMPAINGS.map(item=><CampaignComponent key={item._id} campaign={item}  />);
    const clistFilt=FILTERED_CAMPAINGS.map(item=><CampaignComponent key={item._id} campaign={item} />);
    return <div className={classes.main}>
       {/* <div>
       <h1>Upcoming Campaigns</h1>{user && user.role===8 && <button>Add Campaign</button>}
       </div> */}
       {/* <h1>Upcoming Campaigns</h1> */}
      <form className={classes.form}>
       <div>
       <input type='search' placeholder="Search Campaigns by name" ref={queryRef} />
      {/* <label for="search">Search For:</label> */}
{/* <select name="search" id="search" ref={typeRef}>
  <option value="campaign" defaultValue>Campaigns</option>
  <option value="org">Organizations</option>
</select> */}
       </div>
      <button onClick={searchFunc}>Search</button>
      </form>
     <div className={classes.action}>
     <button onClick={changeListToAll} className={!isFiltered && classes.On}>All Campaigns</button>
    <button onClick={changeListToFilter} className={isFiltered && classes.On}>Filtered for you</button>
     </div>
    {!isFiltered && <div>
        {ALL_CAMPAINGS.length===0?<div className={classes.spin}>
    <div className={classes.loader}></div> <p>Loading All Campaigns...</p>
    </div>:<div>{clist}</div>}
    </div> }
    {isFiltered && <div>
        {FILTERED_CAMPAINGS.length===0?<div className={classes.spin}>
            No Campaigns Found ....<br/>
            Please Enter valid search query...
    </div>:<div>{clistFilt}</div>}
    </div> }
    </div>
}
export default Campaignlist;