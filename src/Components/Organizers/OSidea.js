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
          <p1 className={classes.pp}>{props.user.username}</p1>
        </div>
        <div className={classes.about}>
          <p2>{props.user.username}</p2>
          <ul>
            <li>{props.user.address}</li>
            <li>{props.user.phoneno}</li>
            <li>{props.user.email}</li>
            <li>{props.user.email}</li>
            <li>Always open</li>
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
