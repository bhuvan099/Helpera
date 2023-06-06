import React from "react";
import Achieve from "./Achieve.js";
import Banner from "./Banner.js";
import Fotter from "./Footer.js";
import classes from './Home.module.css';
import { useSelector } from "react-redux";

const Home=()=>{
    const modalForLogout=useSelector(state=>state.auth.modal);
   if(modalForLogout && modalForLogout.type==="LOGOUT"){
    window.location.reload();
   }
    return <div className={classes.main}> 
        <Banner></Banner>
        <Achieve></Achieve>
         <Fotter></Fotter>
    </div>

}
export default Home;