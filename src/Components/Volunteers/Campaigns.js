import React from 'react';
import classes from './Campaigns.module.css';

const Campaigns = (props) =>
{
    return <>
    <div class={classes.camps}>
        <p class={classes.para}>{props.text}</p>
        <button class={classes.but}>Details</button>
    </div>
    </>
}

export default Campaigns;