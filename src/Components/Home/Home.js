import React from "react";
import Achieve from "./Achieve.js";
import Banner from "./Banner.js";
import Camplist from "./Campaignlist.js";
import Fotter from "./Footer.js";
import Nav from "./Nav.js";
import classes from './Home.module.css';

const Home=()=>{

    return <div className={classes.main}> 
        <Nav></Nav>
        <Banner></Banner>
        <Camplist/>
        <Achieve></Achieve>
         <Fotter></Fotter>
    </div>

}
export default Home;