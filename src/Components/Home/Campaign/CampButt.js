import React from "react";
import classes from "./CampButt.module.css";
const Campmain=()=>{
    return <>
    <div className={classes.main}>
    <button id="f1" className={classes.but1} >All campaigns</button>
    <button id="f2" className={classes.but2} >Filtered for you</button>
  </div>
    </>
}
export default Campmain;