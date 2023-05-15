import React from "react";
import classes from "./OSidea.module.css";

const OSidea = () => {
  return (
    <>
      <div className={classes.profile}>
        <div className={classes.pro}>
          <p1 className={classes.circ}> S </p1>
          <p1>sahyadripratishthan</p1>
        </div>
        <div className={classes.about}>
          <p2>Sahyadri Pratishthan</p2>
          <ul>
            <li>Pune,India,Maharastra</li>
            <li>073874 94500</li>
            <li>info.sahyadripratishthan@gmail.com</li>
            <li>sahyadripratishthanhindustan.com</li>
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
