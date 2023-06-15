import React,{Fragment} from 'react';
import {Fade} from 'react-reveal';
import FrontEnd from './FrontEnd';
import classes from './FrontEndFade.module.css'
const FrontEndFade=()=>{
    return<Fragment>
        <Fade bottom cascade>
            <h2 className={classes.hd}>Meet Our FrontEnd Team</h2>
            <div className={classes.MainDivFrFa}>
            <div><FrontEnd dev='Aditya Shinde'/></div>
            <div><FrontEnd dev='Bhuvan'/></div>
            <div><FrontEnd dev='Manoj'/></div>
          </div>
        </Fade>
    </Fragment>
};

export default FrontEndFade;