import React from 'react';
import Sidea from './Sidea';
import Sideb from './Sideb';
import Sidec from './Sidec';
import classes from './Voulnteers.module.css';
const Volunteers = () =>{
    return <div className={classes.main}>
    <div>
    <Sidea/>
    <Sideb/>
    </div>
    <Sidec/>
    </div>
}
export default Volunteers;