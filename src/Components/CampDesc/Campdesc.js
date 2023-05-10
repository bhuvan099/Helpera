import React from "react";
import Sideaa from './Sideaa';
import Sidebb from './Sidebb';
import Sidecc from './Sidecc';
import classes from './Campdesc.module.css';
 const Campdesc =()=>{
    return <>
    <div className="main">
            <div className={classes.step1}>
            <Sideaa/>
            <Sidebb/>
            </div>
           <div className={classes.step1}><Sidecc/></div>
   </div>
    </>
 }
 export default Campdesc;