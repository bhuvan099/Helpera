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
          {CAMPAIGNS_ADDED && CAMPAIGNS_ADDED.length===0 && <p>NO CAMPAIGNS ADDED BY YOU !!!</p>}
        </div>
      </div>
    </>
  );
};
export default OSidec;
