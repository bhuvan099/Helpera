import React from "react";
import classes from "./CampaignComponent.module.css";
import prof from '../../Images/camp prof.jpeg'

const CampaignComponent = (props) => {
  return (
    <div className={classes.main}>
      <img src={prof} alt="loading"></img>
      <div className={classes.inf}>
        <p>{props.name}</p>
        <p>{props.org}</p>
        <p>{props.address}</p>
        <p>{props.contact}</p>
      </div>
      <div className={classes.action}>
          <button className={classes.det}>Details</button>
          <button className={classes.join}>Join</button>
      </div>
    </div>
  );
};


export default CampaignComponent;
