import React from "react";
import classes from "./Campa.module.css";
import PropTypes from "prop-types";
const Cama=(props)=>{
    return <>
        <div className={classes.c1div}>
            <p className={classes.c1p1}>{props.CampaignNo}</p>
            <div className={classes.c1div2}>
            <button className={classes.c1b1}>Details</button>
            <button className={classes.c1b2}>Join</button>
            </div>
        </div>  
    </>
}
export default Cama;
