import React,{Fragment} from 'react';
import classes from './About.module.css';
import FadeAni from '../Faders/FadeAni';
import FadeImg from '../Faders/FadeImg';
import Mission from '../Mission/Mission';
import Vision from '../Mission/Vision';

const About=()=>{
    let data1=`About us`;
    let data=`There are many organizations which lack volunteers when it comes to organize any event or campaigns. It is really difficult to find people who are actually willing to volunteer for something heartfully. They may struggle to accomplish their goals or meet their objectives without the necessary support.Ultimately, having a strong volunteer base can be a key factor in the success of an organization.organizations can achieve their goals and make a meaningful difference in the world. We come up with a solution providing a web-based application called the **Helpera** which tries to link volunteers with organizations and events that require volunteers. The platform enables organizations to post and manage their volunteer opportunities while also enabling volunteers to browse and apply to opportunities based on their interests and availability.`;
    return<Fragment>
        <div className={classes.MainDivAb}>
            <FadeImg/>
            <div className={classes.itemAb}><p><FadeAni text={data1}/></p></div>
        </div>
       <div className={classes.subDivAb}><FadeAni text={data}/></div> 
    <div className={classes.MaindivMis}>
       <div className={classes.MissionAb}>
        <h3 className={classes.titl}>Our Mission</h3>
        <Mission/>
       </div>
       <div className={classes.MissionAb}>
        <h3 className={classes.titl}>Our Vision</h3>
        <Vision/>
       </div>
    </div>
    </Fragment>
};

export default About;