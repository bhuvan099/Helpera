import React from 'react';
import Campaigns from './Campaigns';
import classes from './Sidec.module.css';

const Sidec = () =>{
    return <>

    <div className={classes.maincls}>
        <div className={classes.subcls}><Campaigns text="Campaign-1"/></div>
        <div className={classes.subcls}><Campaigns text="Campaign-2"/></div>
        <div className={classes.subcls}><Campaigns text="Campaign-3"/></div>
        <div className={classes.subcls}><Campaigns text="Campaign-4"/></div>
    </div>

    </>
}
export default Sidec;