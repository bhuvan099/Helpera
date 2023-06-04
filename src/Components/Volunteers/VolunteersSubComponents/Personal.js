import React from 'react';
import classes from './Personal.module.css'
const Personal=(props)=>{
    return <>

    <div className={classes.MainDiv}>
        <div><h1>{props.personalData.name}'s</h1></div>
            <div className={classes.items}>
                <div className={classes.subItems} style={{fontWeight:"bold",fontSize:"1.2em"}} >Name:</div>
                <div className={classes.subItems} style={{fontSize:"1.2em"}}>{props.personalData.name}</div>
            </div>
            
            <div className={classes.items}>
                <div className={classes.subItems} style={{fontWeight:"bold",fontSize:"1.2em"}}>UserName:</div>
                <div className={classes.subItems} style={{fontSize:"1.2em"}}>{props.personalData.username}</div>
            </div>

            <div className={classes.items}>
                <div className={classes.subItems} style={{fontWeight:"bold",fontSize:"1.2em"}}>Date of birth:</div>
                <div className={classes.subItems} style={{fontSize:"1.2em"}}>{props.personalData.dob}</div>
            </div>

            <div className={classes.items}>
                <div className={classes.subItems} style={{fontWeight:"bold",fontSize:"1.2em"}}>Email:</div>
                <div className={classes.subItems} style={{fontSize:"1.2em"}}>{props.personalData.email}</div>
            </div>

            <div className={classes.items}>
                <div className={classes.subItems} style={{fontWeight:"bold",fontSize:"1.2em"}}>Phone:</div>
                <div className={classes.subItems} style={{fontSize:"1.2em"}}>{props.personalData.phoneNo}</div>
            </div>

            <div className={classes.items}>
                <div className={classes.subItems} style={{fontWeight:"bold",fontSize:"1.2em"}}>Rating:</div>
                <div className={classes.subItems} style={{fontSize:"1.2em"}}>{props.personalData.rating}</div>
            </div>

            <div className={classes.items}>
                <div className={classes.subItems} style={{fontWeight:"bold",fontSize:"1.2em"}}>ReviewCount:</div>
                <div className={classes.subItems} style={{fontSize:"1.2em"}}>{props.personalData.reviewCount}</div>
            </div>

	</div>
    </>
}

export default Personal;


