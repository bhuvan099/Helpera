import React from 'react';
import Campaigns from '../Campaigns';
import classes from './ListCamp.module.css';
const ListCamp=()=>{
    return <>
        <div className={classes.subcls}><Campaigns text="Campaign-1"/></div>
        <div className={classes.subcls}><Campaigns text="Campaign-2"/></div>
        <div className={classes.subcls}><Campaigns text="Campaign-3"/></div>
        <div className={classes.subcls}><Campaigns text="Campaign-4"/></div>
    </>
}

export default ListCamp;


