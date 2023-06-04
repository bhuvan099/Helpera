import React from "react";
import classes from "./CampaignComponent.module.css";
import prof from "../../Images/camp prof.jpeg";
import { Link } from "react-router-dom";

const CampaignComponent = (props) => {
  console.log(props.id);
  return (
    <div className={classes.main}>
      <img src={prof} alt="loading"></img>
      <div className={classes.sp}></div>
      <div className={classes.inf}>
        <p>
          <b>Campaign: </b>
          {props.name}
        </p>
        <p>
          <b>Organization: </b>
          {props.org}
        </p>
        <p>
          <b>Address: </b>
          {props.address}
        </p>
        <p>
          <b>Contact: </b>
          {props.contact}
        </p>
      </div>
      <div className={classes.action}>
        <Link className={classes.det} to={props.id}>
          Details
        </Link>
        <button className={classes.join}>Join</button>
      </div>
      <div className={classes.ac2}></div>
    </div>
  );
};

export default CampaignComponent;
