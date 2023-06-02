import React from 'react';
import classes from './Sidec.module.css';
import ListCamp from './VolunteersSubComponents/ListCamp'
import Personal from './VolunteersSubComponents/Personal';
import Feedback from './VolunteersSubComponents/Feedback';
import Logout from './VolunteersSubComponents/Logout';
import Applied from './VolunteersSubComponents/Applied';
import Approved from './VolunteersSubComponents/Approved';

const Sidec = (props) =>{
  
    const CampArr=[<Personal/>,<ListCamp/>,<Applied/>,<Approved/>,<Feedback/>,<Logout/>];
    return <>
    <div className={classes.maincls}>
      {CampArr[props.onSentInd]}
    </div>

    </>
}
export default Sidec;

