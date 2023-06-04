import React from "react";
import classes from "./OCampaigns.module.css";

const OCampaigns = (props) => {
  return (
    <>
      <div>
        <br />
      </div>
      <div className={classes.camps}>
        <p className={classes.para}>Campaign id: {props.text}</p>
        <button className={classes.but}>Details</button>
      </div>
    </>
  );
};

export default OCampaigns;
