import React,{Fragment} from 'react';
import {Fade} from 'react-reveal';
import TestIng from './TestIng';
import classes from './TestIngFade.module.css'
const TestIngFade=()=>{
    
    return<Fragment>
        <Fade bottom cascade>
            <h2 className={classes.hd}>Meet Out Testing Team</h2>
        <div className={classes.MainDivTrTa}>
            <div><TestIng dev='Jean Joseph'/></div>
            <div><TestIng dev='Kunal Rajour'/></div>
            <div><TestIng dev='Venu Madhavan'/></div>
          </div>
        </Fade>
    </Fragment>
};

export default TestIngFade;