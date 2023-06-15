import React,{Fragment} from 'react';
import {Fade} from 'react-reveal';
import BackEnd from './BackEnd';
import classes from './BackEndFade.module.css'
const BackEndFade=()=>{
    return<Fragment>
        <Fade bottom cascade>
            <h2 className={classes.hd}>Meet Our BackEnd Team</h2>
        <div className={classes.MainDivBrBa}>
            <div><BackEnd dev='Gaurav Tiwari'/></div>
            <div><BackEnd dev='Abhinav Yadav'/></div>
            <div><BackEnd dev='Priyanshi Chaturvedi'/></div>
          </div>
        </Fade>
    </Fragment>
};

export default BackEndFade;