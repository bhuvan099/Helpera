import React from 'react';
import classes from './Sideb.module.css';
import { LogoutAction } from '../../Auth/Auth';
import { Link } from 'react-router-dom';

const Sideb=()=>{
    const LogoutHandler=()=>{
       LogoutAction();
    }
    return <>

<div className={classes.pers}>

<div className={classes.item}><a href="Personal_Info.html">Personal Info.</a></div>

<div className={classes.item}><a href="Campaigns.html">Campaigns</a></div>

<div className={classes.item}><a href="Applied.html">Applied</a></div>

<div className={classes.item}><a href="Approved.html">Approved</a></div>

<div className={classes.item}><a href="Feedback.html">Feedback</a></div>

<div className={classes.item}><Link onClick={LogoutHandler}>Logout</Link></div>

</div>

</>
}
export default Sideb;