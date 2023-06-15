import React from 'react';
import classes from './Nav.module.css';
import { Link } from "react-router-dom";
import logo from '../../Images/HELPERA_ROUND_1.png';
import { useSelector } from "react-redux";
import {AiOutlineDownCircle} from 'react-icons/ai';
import {FaUserCircle} from 'react-icons/fa';


const Nav = () => {
const user=useSelector(state=>state.auth.user);
console.log(user);
let profileUrl=""
if (user) {
   profileUrl=`volunteer/${user.username}`;
if(user.role===8){
  profileUrl=`organization/${user.username}`
}
}

  return (
    <div className={classes.main}>
      <div>
      <img src={logo} alt='Logo' /><Link to='/' className={classes.title}>Helpera.in</Link>
      </div>
      <div className={classes.action}>
      <Link to='/' className={classes.abt}>Home</Link>
      <Link to='/campaigns' className={classes.abt}>Campaigns</Link>
      <Link to='/contactus' className={classes.abt}>Contact Us</Link>
      <Link to='/aboutus' className={classes.abt}>About Us</Link>
      </div>
     {!user ? <Link to='/login' className={classes.login}>Login/Signup</Link> :<Link to={profileUrl} className={classes.username}><FaUserCircle size='1.8rem'/>{user.username}</Link>}
    </div>
  )
}
{/* <AiOutlineDownCircle size='1.8rem'/> */}
export default Nav
