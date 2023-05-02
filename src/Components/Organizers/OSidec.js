import React from "react";
import Campaigns from "./OCampaigns";
import classes from "./OSidec.module.css";

const OSidec = () => {
  return (
    <>
      <div className={classes.maincls}>
        <div className={classes.subcls}>
          <Campaigns text="Campaign-1" />
        </div>
        <div className={classes.subcls}>
          <Campaigns text="Campaign-2" />
        </div>
        <div className={classes.subcls}>
          <Campaigns text="Campaign-3" />
        </div>
        <div className={classes.subcls}>
          <Campaigns text="Campaign-4" />
        </div>
      </div>
    </>
  );
};
export default OSidec;
