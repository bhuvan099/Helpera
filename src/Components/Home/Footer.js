import React from 'react';
import classes from "./Footer.module.css";
const Footer=()=>{
    return <>
        <div className={classes.logdiv}>
            <div className={classes.wr}>
            <ul>
                <li><a href="About Us">About us</a></li>
                <li><a href="Contact Us">Contact us</a></li>
            </ul>
            </div>
            <div className={classes.log}>
               <p className={classes.pr}>logo</p> 
            </div>
            <p className={classes.las}>All rights reserved @ helpera.in</p>
        </div>
    </>
}
export default Footer;