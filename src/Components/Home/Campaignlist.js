import React from "react"
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
const Campaignlist=()=>{
    const clist=DUMMY_CAMP.map(item=><CampaignComponent key={item.id} name={item.name} org={item.org} contact={item.contact} address={item.address}/>)
    return <div className={classes.main}>
     <div className={classes.action}>
     <button>All Campaigns</button>
    <button>Filtered for you</button>
     </div>
    {clist}
    </div>
}
export default Campaignlist;