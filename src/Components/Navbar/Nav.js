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

  return (
    <div className={classes.main}>
      <div>
      <img src={logo} alt='Logo' /><Link to='/' className={classes.title}>Helpera.in</Link>
      </div>
      <div className={classes.action}>
      <Link to='/' className={classes.abt}>Home</Link>
      <Link to='/campaigns' className={classes.abt}>Campaigns</Link>
      <Link href='google.com' className={classes.abt}>Contact Us</Link>
      <Link href='google.com' className={classes.abt}>Help?</Link>
      </div>
     {!user ? <Link to='/login' className={classes.login}>Login/Signup</Link> :<Link to={`volunteer/${user.username}`} className={classes.username}><FaUserCircle size='1.8rem'/>{user.username}<AiOutlineDownCircle size='1.8rem'/></Link>}
    </div>
  )
}

export default Nav
