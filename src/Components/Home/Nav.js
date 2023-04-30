import React from 'react';
import classes from './Nav.module.css';
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className={classes.main}>
      <p>Helpera.in</p>
      <input placeholder='Search Campaigns' type='text'/>
      <Link href='google.com'>raghavs124</Link>
    </div>
  )
}

export default Nav
