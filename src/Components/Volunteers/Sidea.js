import React from 'react';
import classes from './Sidea.module.css';

const Sidea = (props)=>{

    let Charx=props.data.username[0].toUpperCase();
return <>
<div className={classes.profile}>
            <p className={classes.circ}> {Charx} </p>
            <p className={classes.name}>{props.data.name.toUpperCase()}</p>
            <p>{props.data.email}</p>
</div>
    </>
}
export default Sidea;


