import React from "react";
import classes from "./Banner.module.css";
import { Link } from "react-router-dom";
const Banner=()=>
{
    return <>
        <div className={classes.banner}>
            <p>Connecting Volunteers</p>
            <p>to Organizations</p>
            <span>Volunteers don't just do the work, they make it work. Volunteers make each day brighter. Volunteers make the world go round.</span>
            <Link to='/aboutus' className={classes.but}>Learn More....</Link>
        </div>
    </>
}
export default Banner;