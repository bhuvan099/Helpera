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
      <Sideb />
      <Sidec />
    </div>
  );
};
export default Organizer;
