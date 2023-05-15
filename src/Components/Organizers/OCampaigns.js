import React from "react";
import classes from "./OCampaigns.module.css";

const OCampaigns = (props) => {
  return (
    <>
      <div className={classes.camps}>
        <p className={classes.para}>{props.text}</p>
        <button className={classes.but}>Details</button>
      </div>
    </>
  );
};

export default OCampaigns;
