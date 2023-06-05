import React from 'react';
import classes from './Sidecc.module.css';

const Sidecc = (props)=>
{
    return <>
<div className={classes.three}>
    <div className={classes.items}><b>CampHeadName:</b> {props.data.CampHeadName}</div>
    <div className={classes.items}><b>CampaignType:</b> {props.data.CampaignType[0]}</div>
    <div className={classes.items}><b>StartDate:</b> {props.data.StartDate}</div>
    <div className={classes.items}><b>EndDate:</b> {props.data.EndDate}</div>
    <div className={classes.items}><b>VoluntersNeeded:</b> {props.data.VoluntersNeeded}</div>
    <div className={classes.items}><b>Address:</b> {props.data.Address}</div>
</div>

    </>
}
export default Sidecc;