import React from "react";
import classes from "./OSidea.module.css";
import PropTypes from "prop-types";

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
          <p2>{props.user.username}</p2>
          <ul>
            <li>{props.user.address}</li>
            <li>{props.user.phoneNo}</li>
            <li>{props.user.email}</li>
          </ul>
        </div>
        <div className={classes.add}>
          <button className={classes.but}>Add Campaign</button>
        </div>
      </div>
    </>
  );
};
export default OSidea;
