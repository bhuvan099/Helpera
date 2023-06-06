import React from 'react';
import Campaigns from '../Campaigns';
import { useSelector } from "react-redux";

const ListCamp=()=>{
    const JOINED_CAMPAIGNS=useSelector(state=>state.campaign.campaignsJoined);
    return <>
           {JOINED_CAMPAIGNS ? JOINED_CAMPAIGNS.map((item) => (
            <Campaigns campaign={item} />
          )):"FAILED TO LOAD CAMPAIGNS"}
    </>
}

export default ListCamp;


