import React from 'react';
import classes from './Sidecc.module.css';

const Sidecc = (props)=>
{
    return <>
<div className={classes.three}>
    <div className={classes.items}><b>Campaign Head:</b> {props.data.CampHeadName}</div>
    <div className={classes.items}><b>Based On:</b> {props.data.CampaignType[0]}</div>
    <div className={classes.items}><b>Commence From:</b> {props.data.StartDate}</div>
    <div className={classes.items}><b>Final Day:</b> {props.data.EndDate}</div>
    <div className={classes.items}><b>Volunters Needed:</b> {props.data.VoluntersNeeded}</div>
    <div className={classes.items}><b>Address:</b> {props.data.Address}</div>
</div>

    </>
}
export default Sidecc;