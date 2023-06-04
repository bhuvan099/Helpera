import React from "react";
import Campaigns from "./OCampaigns";
import classes from "./OSidec.module.css";

const OSidec = (props) => {
  const campaigns = props.camp;
  return (
    <>
      <div className={classes.maincls}>
        <div className={classes.subcls}>
          {campaigns.map((item) => (
            <Campaigns text={item} />
          ))}
        </div>
      </div>
    </>
  );
};
export default OSidec;
