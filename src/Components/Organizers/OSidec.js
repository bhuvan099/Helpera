import React from "react";
import Campaigns from "./OCampaigns";
import classes from "./OSidec.module.css";
import { useSelector } from "react-redux";

const OSidec = (props) => {
  const CAMPAIGNS_ADDED=useSelector(state=>state.campaign.campaignsCreated);
  return (
    <>
      <div className={classes.maincls}>
        <div className={classes.subcls}>
          {CAMPAIGNS_ADDED ? CAMPAIGNS_ADDED.map((item) => (
            <Campaigns campaign={item} />
          )):"FAILED TO LOAD CAMPAIGNS"}
        </div>
      </div>
    </>
  );
};
export default OSidec;
