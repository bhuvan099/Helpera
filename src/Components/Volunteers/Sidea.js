import React from 'react';
import classes from './Sidea.module.css';

const Sidea = (props)=>{

    let Charx=props.data.username.toUpperCase();
return <>
<div className={classes.profile}>
            <p className={classes.circ}> {Charx} </p>
            <p className={classes.name}>{props.data.username}</p>
            <p>{props.data.email}</p>
</div>
    </>
}
export default Sidea;


