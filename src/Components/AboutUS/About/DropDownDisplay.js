import React,{Fragment} from 'react';
import FrontEndFade from '../FrontEnd/FrontEndFade';
import BackEndFade from '../BackEnd/BackEndFade';
import TestingFade from '../TestIng/TestingFade'

const DropDownDisplay=(props)=>{
    const comps=[<FrontEndFade/>,<BackEndFade/>,<TestingFade/>]
    return <Fragment>
        {comps[props.data]}
    </Fragment>
};

export default DropDownDisplay;