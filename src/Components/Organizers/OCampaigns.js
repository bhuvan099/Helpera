import React from "react";
import classes from "./OCampaigns.module.css";

const OCampaigns = (props) => {
  return (
    <>
      <div class={classes.camps}>
        <p class={classes.para}>{props.text}</p>
        <button class={classes.but}>Details</button>
      </div>
    </>
  );
};

export default OCampaigns;
