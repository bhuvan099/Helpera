import React from 'react';
import classes from './Sideb.module.css';

const Sideb=()=>{
    return <>

<div class={classes.pers}>

<div class={classes.item}><a href="Personal_Info.html">Personal Info.</a></div>

<div class={classes.item}><a href="Campaigns.html">Campaigns</a></div>

<div class={classes.item}><a href="Applied.html">Applied</a></div>

<div class={classes.item}><a href="Approved.html">Approved</a></div>

<div class={classes.item}><a href="Feedback.html">Feedback</a></div>

<div class={classes.item}><a href="Logout.html">Logout</a></div>

</div>

</>
}
export default Sideb;