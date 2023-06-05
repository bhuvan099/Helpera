import React from "react";
import Campaigns from "./OCampaigns";
import classes from "./OSidec.module.css";
import { useSelector } from "react-redux";
import CampaignComponent from "../CampDesc/CampaignComponent";

const OSidec = (props) => {
  const campaigns = props.camp;
  const CAMPAIGNS_ADDED=useSelector(state=>state.campaign.campaignsCreated);
  console.log(CAMPAIGNS_ADDED)
  return (
    <>
      <div className={classes.maincls}>
        <div className={classes.subcls}>
          {CAMPAIGNS_ADDED.map((item) => (
            <Campaigns campaign={item} />
          ))}
        </div>
      </div>
    </>
  );
};
export default OSidec;
