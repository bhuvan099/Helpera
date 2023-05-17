import React from "react";
import Sidea from "./OSidea";
import Sideb from "./OSideb";
import Sidec from "./OSidec";
import classes from "./Organizer.module.css";
const Organizer = () => {
  return (
    <div className={classes.main}>
      <div>
        <Sidea />
      </div>
      <div className={classes.in}></div>
      <div>
        <Sideb />
      </div>
      <div>
        <Sidec />
      </div>
    </div>
  );
};
export default Organizer;
