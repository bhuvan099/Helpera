import React from 'react';
import classes from './Campaigns.module.css';

const Campaigns = (props) =>
{
    return <>
    <div className={classes.camps}>
        <p className={classes.para}>{props.text}</p>
        <button className={classes.but}>Details</button>
    </div>
    </>
}

export default Campaigns;