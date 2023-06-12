import React from 'react';
import Campaigns from '../Campaigns';
import { useSelector } from "react-redux";

const ListCamp=()=>{
    const JOINED_CAMPAIGNS=useSelector(state=>state.campaign.campaignsJoined);
    return <>
           {JOINED_CAMPAIGNS ? JOINED_CAMPAIGNS.map((item) => (
            <Campaigns campaign={item} />
          )):"FAILED TO LOAD CAMPAIGNS"}
          {JOINED_CAMPAIGNS && JOINED_CAMPAIGNS.length===0 && <p>NO CAMPAIGNS JOINED BY YOU !!!</p>}
    </>
}

export default ListCamp;


