import React from "react";
import classes from "./OCampaigns.module.css";
import { getCampaignByCampaignIdApi } from "../../API/api-action";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const OCampaigns = (props) => {
  const dispatch=useDispatch();
const showCampDetails=async()=>{
  await dispatch(getCampaignByCampaignIdApi(props.campaign._id));
}
const redirectUrl="/campaigns/"+props.campaign._id;
  return (
      <div className={classes.camps}>
       <div>
       <p className={classes.name}>{props.campaign.CampaignName}</p>
       <p className={classes.p}>Campaign Head: <span className={classes.org}>{props.campaign.CampHeadName}</span></p>
       <span className={classes.org}>{props.campaign.Email}</span>
       </div>
        <Link className={classes.det} to={redirectUrl} onClick={showCampDetails}>Details</Link>
      </div>
  );
};

export default OCampaigns;
