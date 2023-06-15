import React,{Fragment} from 'react';
import FadeAni from '../Faders/FadeAni';
const Mission=()=>{
    let data=  `Our vision to build a vibrant volunteer community, where individuals come together to support events that matter, transform lives, and create lasting memories. Together, we can make a difference, one event at a time`;
    return <Fragment>
        <FadeAni text={data}/>
    </Fragment>

};

export default Mission;