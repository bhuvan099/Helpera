import React, { useState } from 'react';
import classes from './PreReg.module.css';
import { Link } from 'react-router-dom';

const PreReg = (props) => {
  const [Role,setRole]=useState(0);
  const changeRoleToVol=(e)=>{
     if(Role===0){
      setRole(16);
     }else if(Role===8){
      setRole(16);
     }else if(Role===16){
      setRole(0);
     }
  }
  const changeRoleToOrg=(e)=>{
     if(Role===0){
      setRole(8);
     }else if(Role===16){
      setRole(8);
     }else if(Role===8){
      setRole(0);
     }
  }
  const SubmitRole=()=>{
    props.changePage(Role);
  }
  
  return (
    <div className={classes.main}>
     <div className={classes.card}>
     <h1>Register Yourself as</h1>
      <div>
       <p><input type='checkbox' name='vol' id='vol' onChange={changeRoleToVol} checked={Role===16} /><label htmlFor='vol'>A Volunteer</label></p>
       <p><input type='checkbox' name='org' id='org' onChange={changeRoleToOrg} checked={Role===8}/><label htmlFor='org'>An Organization</label></p>
      </div>
     <button disabled={Role===0} onClick={SubmitRole}>Submit</button>
     </div>
    </div>
  )
}

export default PreReg;
