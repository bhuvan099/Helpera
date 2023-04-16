import React from "react"
import CampButt from "./Campaign/CampButt";
import Campa from "./Campaign/Campa";
import Campb from "./Campaign/Campb";
import Campc from "./Campaign/Campc";
import classes from "./Campaignlist.module.css";
const Campaignlist=()=>{
    return <>
    <div className={classes.buut1}><CampButt/></div>
    <br></br>
    <div className={classes.flexcontainer}>
    
    <div><Campa CampaignNo="no1"/></div>
    <div><Campa CampaignNo="no2"/></div>
    <div><Campa CampaignNo="no3"/></div>
    </div>
    </>
}
export default Campaignlist;