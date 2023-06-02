import React from 'react';
import classes from './Sideb.module.css';
import { LogoutAction } from '../../Auth/Auth';
import { Link } from 'react-router-dom';

const Sideb=(props)=>{
    const handlePersonal=()=>{
        props.onCollectInd(1)
    };

    const handleCampaigns=()=>{
        props.onCollectInd(2)
    };

    const handleApplied=()=>{
        props.onCollectInd(3)
    };

    const handleApproved=()=>{

        props.onCollectInd(4)
    };

    const handleFeedback=()=>{
        props.onCollectInd(5)
    };

    const LogoutHandler=()=>{
       LogoutAction();
    }
    return <>

        <div className={classes.pers}>

            <div className={classes.item}><button className={classes.but} onClick={handlePersonal}>Personal Info.</button></div>

            <div className={classes.item}><button className={classes.but} onClick={handleCampaigns}>Campaigns</button></div>

            <div className={classes.item}><button className={classes.but} onClick={handleApplied}>Applied</button></div>

            <div className={classes.item}><button className={classes.but} onClick={handleApproved}>Approved</button></div>

            <div className={classes.item}><button className={classes.but} onClick={handleFeedback}>Feedback</button></div>

            <div className={classes.item}><button className={classes.but} onClick={LogoutHandler}>Logout</button></div>

       
        </div>

</>
}
export default Sideb;

