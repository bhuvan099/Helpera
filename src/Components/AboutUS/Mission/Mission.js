import React,{Fragment} from 'react';
import FadeAni from '../Faders/FadeAni';
const Mission=()=>{
    let data=  `We aim to enhance the success and impact of events while fostering a sense of community and purpose among our volunteers. We firmly believe that everyone has something unique to offer and that small acts of kindness and service can create a ripple effect of positive change in the world.`;

    return <Fragment>
        <FadeAni text={data}/>
    </Fragment>

};

export default Mission;