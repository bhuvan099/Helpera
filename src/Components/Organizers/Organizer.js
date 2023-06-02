import React, { useState } from "react";
import Sidea from "./OSidea";
import Sideb from "./OSideb";
import Sidec from "./OSidec";
import Odefault from "./Odefault";
import classes from "./Organizer.module.css";
import Org_info from "./Org_info";
import Volenteer_info from "./Volenteer_info";
import PropTypes from "prop-types";

const Organizer = () => {
  const ORG_TEST = {
    username: "Abishek Chowdary",
    email: "org@gmail.com",
    password: "password",
    confirmPassword: "conpassword",
    firstName: "fname",
    lastName: "lname",
    dob: "dob",
    address: "street-401,MG rod,oposite KG",
    phoneno: "789456123",
    role: 8,
    securityQuestion: "ntg",
  };
  const [toggle, istoggle] = useState({
    t1: false,
    t2: false,
    t3: false,
    t4: false,
  });
  //const [t2, istoggle2] = useState(false);
  console.log(toggle.t1);

  return (
    <div className={classes.main}>
      <div>
        <Sidea user={ORG_TEST} />
      </div>
      <div className={classes.in}></div>
      <div>
        <Sideb settoggle={istoggle} />
      </div>
      <div>
        {toggle.t1 ? <Org_info /> : <Odefault />}
        {toggle.t2 ? <Sidec /> : <Odefault />}
        {toggle.t3 ? <Volenteer_info /> : <Odefault />}
        {/* {toggle.t2 && <Odefault />} */}
        {/* <Sidec /> */}
      </div>
    </div>
  );
};
export default Organizer;
