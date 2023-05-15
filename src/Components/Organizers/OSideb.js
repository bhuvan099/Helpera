import React from "react";
import classes from "./OSideb.module.css";

const OSideb = () => {
  return (
    <>
      <div className={classes.pers}>
        <div className={classes.item}>
          <a href="Personal_Info.html">Organization Info.</a>
        </div>

        <div className={classes.item}>
          <a href="Campaigns.html">Campaigns</a>
        </div>

        <div className={classes.item}>
          <a href="Applied.html">Volunteers</a>
        </div>

        <div className={classes.item}>
          <a href="Approved.html">Announcements</a>
        </div>

        <div className={classes.item}>
          <a href="Feedback.html">Feedback</a>
        </div>

        <div className={classes.item}>
          <a href="Logout.html">Logout</a>
        </div>

        <div className={classes.item}>
          <a href="Logout.html">Rating: 4.7</a>
        </div>
      </div>
    </>
  );
};
export default OSideb;
