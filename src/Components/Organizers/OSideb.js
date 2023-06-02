import React, { useState } from "react";
import classes from "./OSideb.module.css";
import PropTypes from "prop-types";

const OSideb = (props) => {
  function set1() {
    props.settoggle(() => ({
      t1: true,
    }));
  }
  function set2() {
    props.settoggle(() => ({
      t2: true,
    }));
  }
  function set3() {
    props.settoggle(() => ({
      t3: true,
    }));
  }
  return (
    <>
      <div className={classes.pers}>
        <div className={classes.item}>
          <button
            className={classes.but1}
            href="Personal_Info.html"
            onClick={() => set1()}
          >
            Organization Info.
          </button>
        </div>

        <div className={classes.item}>
          <button
            className={classes.but1}
            href="Applied.html"
            onClick={() => set2()}
          >
            Campaigns
          </button>
        </div>

        <div className={classes.item}>
          <button
            className={classes.but1}
            href="Applied.html"
            onClick={() => set3()}
          >
            Volunteers
          </button>
        </div>

        <div className={classes.item}>
          <button className={classes.but1} href="Approved.html">
            Announcements
          </button>
        </div>

        <div className={classes.item}>
          <button className={classes.but1} href="Feedback.html">
            Feedback
          </button>
        </div>

        <div className={classes.item}>
          <button className={classes.but1} href="Logout.html">
            Logout
          </button>
        </div>

        <div className={classes.item}>
          <button className={classes.but1} href="Logout.html">
            Rating: 4.7
          </button>
        </div>
      </div>
    </>
  );
};
export default OSideb;
