import React from "react";
import classes from "./OSidea.module.css";
import { Link } from "react-router-dom";
const OSidea = (props) => {
  return (
    <>
      <div className={classes.profile}>
        <div className={classes.pro}>
          <p1 className={classes.circ}>
            {" "}
            {props.user.username[0].toUpperCase()}
          </p1>
        </div>
        <div className={classes.about}>
          <p2>{props.user.name.toUpperCase()}</p2>
          <ul>
            <li>{props.user.address}</li>
            <li>{props.user.phoneNo}</li>
            <li>{props.user.email}</li>
          </ul>
        </div>
        <div className={classes.add}>
          <Link className={classes.but} to='/addcampaign'>Add Campaign</Link>
        </div>
      </div>
    </>
  );
};
export default OSidea;
