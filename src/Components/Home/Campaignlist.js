import React, { useState } from "react"
import CampaignComponent from "./CampaignComponent";
import classes from "./Campaignlist.module.css";

const DUMMY_CAMP=[
    { id:1,
        name:"Culture Preservation Camp",
     org:"Sahyadri Pratishthan",
     address:"Pune, India, Maharashtra",
    contact:"073874 94500"},
    { id:2,
        name:"Culture Preservation Camp",
     org:"Sahyadri Pratishthan",
     address:"Pune, India, Maharashtra",
    contact:"073874 94500"},
    { id:3,
        name:"Culture Preservation Camp",
     org:"Sahyadri Pratishthan",
     address:"Pune, India, Maharashtra",
    contact:"073874 94500"},
]
const DUMMY_CAMP_FILT=[
    { id:1,
        name:"Culture Preservation Camp",
     org:"Sahyadri Pratishthan",
     address:"Pune, India, Maharashtra",
    contact:"073874 94500"},
]
const Campaignlist=()=>{
    const [isFiltered,setIsFiltered]=useState(false);
    const changeListToFilter=()=>{
        setIsFiltered(true);
    }
    const changeListToAll=()=>{
        setIsFiltered(false);
    }
    const clist=DUMMY_CAMP.map(item=><CampaignComponent key={item.id} name={item.name} org={item.org} contact={item.contact} address={item.address}/>)
    const clistFilt=DUMMY_CAMP_FILT.map(item=><CampaignComponent key={item.id} name={item.name} org={item.org} contact={item.contact} address={item.address}/>)
    return <div className={classes.main}>
     <div className={classes.action}>
     <button onClick={changeListToAll}>All Campaigns</button>
    <button onClick={changeListToFilter}>Filtered for you</button>
     </div>
    {isFiltered ? clistFilt : clist}
    </div>
}
export default Campaignlist;