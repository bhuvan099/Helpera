import React from "react";
import classes from "./Banner.module.css";
import { Link } from "react-router-dom";
const Banner=()=>
{
    return <>
        <div class={classes.d3}>
            <Link to='/login'>login/signup</Link>
        </div>
    </>
}
export default Banner;