import React,{useState} from 'react';
import Sidea from './Sidea';
import Sideb from './Sideb';
import Sidec from './Sidec';
import classes from './Voulnteers.module.css';
import { useSelector } from 'react-redux';

const Volunteers = () =>{
    const [Index,setIndex]=useState(0)
    const user=useSelector(state=>state.auth.user)
    console.log(user)

    const getInd=(val)=>{
        setIndex(val-1)
    }
    return <>
    <div className={classes.main}>

        <div>
            <Sidea data={user}/>
            <Sideb onCollectInd={getInd}/>
        </div>
        <Sidec onSentInd={Index} data={user}/>
    </div>
    </>
}
export default Volunteers;


