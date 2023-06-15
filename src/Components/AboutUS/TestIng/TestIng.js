import React,{Fragment} from 'react';
import classes from './TestIng.module.css';
const TestIng=(props)=>{
    return <Fragment>
        <div className={classes.MainDivTeTa}>  
        <div className={classes.itemTeTa}><p style={{fontWeight:'bold',fontSize:'1.2em',textAlign:'center'}}>{props.dev}</p></div>
        <div className={classes.itemTeTa}>
        {props.dev} is a detail-oriented professional with a keen eye for identifying even the most subtle defects. They possess a strong understanding of testing methodologies, tools, and best practices, allowing them to create comprehensive test plans and execute systematic test cases.
    With their methodical approach, {props.dev} meticulously uncovers potential issues and ensures that our software meets the highest standards. They perform functional, regression, performance, and usability testing, covering all aspects of our applications to guarantee optimal performance and user satisfaction.`
        </div>
        </div>
    </Fragment>
};

export default TestIng;