import React from "react";
import Achieve from "./Achieve.js";
import Banner from "./Banner.js";
import Fotter from "./Footer.js";
import classes from './Home.module.css';
import { useSelector } from "react-redux";

const Home=()=>{
    const CAMPAIGNS_ADDED=useSelector(state=>state.campaign.campaignsCreated);
    console.log(CAMPAIGNS_ADDED);

    return <div className={classes.main}> 
        <Banner></Banner>
        <Achieve></Achieve>
         <Fotter></Fotter>
    </div>

}
export default Home;