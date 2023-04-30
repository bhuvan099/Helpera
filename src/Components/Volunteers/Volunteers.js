import React from 'react';
import Sidea from './Sidea';
import Sideb from './Sideb';
import Sidec from './Sidec';
import classes from './Voulnteers.module.css';
const Volunteers = () =>{
    return <>
    <div><Sidea/></div>
   <div className={classes.bb}><Sideb/></div>
   <div> <Sidec/> </div>
    </>
}
export default Volunteers;