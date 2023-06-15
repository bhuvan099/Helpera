import React,{Fragment,useState} from 'react';
import DropDownMenu from './DropDownMenu';
import DropDownDisplay from './DropDownDisplay';
const AboutHead=()=>{
    const [val,setval]=useState(0)
    const getVal=(num)=>{
        setval(num);
    }
    return <Fragment>
        <DropDownMenu onCollectVal={getVal}/>
        <DropDownDisplay data={val}/>
    </Fragment>
};
export default AboutHead;