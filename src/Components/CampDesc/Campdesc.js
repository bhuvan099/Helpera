import React from "react";
import Sideaa from './Sideaa';
import Sidebb from './Sidebb';
import Sidecc from './Sidecc';
import classes from './Campdesc.module.css';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getCampaignByCampaignIdApi } from "../../API/api-action";
 const Campdesc =()=>{
       const campaign=useSelector(state=>state.campaign.currentCampaign);
       const {id}=useParams();
       const dispatch=useDispatch();
       useEffect(()=>{
        dispatch(getCampaignByCampaignIdApi(id));
       })
    return <>
    {campaign ?<div className={classes.main}>
            <div className={classes.step1}>
            <Sideaa/>
            <Sidebb data={campaign}/>
            </div>
           <div className={classes.step1}><Sidecc data={campaign}/></div>
   </div>:
    <div className={classes.spin}>
    <div className={classes.loader}></div> <p>Loading Profile Details....</p>
    </div>}
    </>
 }
 export default Campdesc;