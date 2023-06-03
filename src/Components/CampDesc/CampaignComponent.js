import React from "react";
import classes from "./CampaignComponent.module.css";
import prof from '../../Images/camp prof.jpeg';
import { Link } from "react-router-dom";

const CampaignComponent = (props) => {
  console.log(props.id)
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
          <Link className={classes.det} to={props.id}>Details</Link>
          <button className={classes.join}>Join</button>
      </div>
    </div>
  );
};


export default CampaignComponent;
