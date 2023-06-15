import React,{Fragment, useState} from 'react';
import { BrowserRouter as Router,Routes,Route,NavLink } from 'react-router-dom';
import About from './About';
import AboutHead from './AboutHead';
import classes from './MainHeader.module.css';
const MainHeader=()=>{
    const [about,setAbout]=useState(true);
    
    return <Fragment>
            <div className={classes.MainDivHea}>
                <div className={classes.itemHea}>
                    <NavLink onClick={()=>{setAbout(true)}} style={(isActive)=>({color:isActive?'black':'black',textDecoration:isActive?'none':'none'})} className={about && classes.un}>About us</NavLink>
                </div>
                <div className={classes.itemHea}>
                    <NavLink onClick={()=>{setAbout(false)}} style={(isActive)=>({color:isActive?'black':'black',textDecoration:isActive?'none':'none'})} className={!about && classes.un}>Team</NavLink>
                </div>
            </div>
            {about ? <About/>:<AboutHead/>}
    </Fragment>
};
export default MainHeader;