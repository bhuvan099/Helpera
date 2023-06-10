import React,{useState} from 'react';
import Sidea from './Sidea';
import Sideb from './Sideb';
import Sidec from './Sidec';
import classes from './Voulnteers.module.css';
import { useSelector } from 'react-redux';

const Volunteers = () =>{
    const [Index,setIndex]=useState(0)
    const user=useSelector(state=>state.auth.user)

    const getInd=(val)=>{
        setIndex(val-1)
    }
    return <>
   {user ? <div className={classes.main}>
        <div>
            <Sidea data={user}/>
            <Sideb onCollectInd={getInd} user={user}/>
        </div>
        <Sidec onSentInd={Index} data={user}/>
    </div>:
     <div className={classes.spin}>
     <div className={classes.loader}></div> <p>Loading Profile Details....</p>
     </div>}
    </>
}
export default Volunteers;


