import React, { useState } from "react";
import Sidea from "./OSidea";
import Sideb from "./OSideb";
import Sidec from "./OSidec";
import Odefault from "./Odefault";
import classes from "./Organizer.module.css";
import Org_info from "./Org_info";
import Volenteer_info from "./Volenteer_info";
import { useSelector } from "react-redux";

const Organizer = () => {
  const user = useSelector((state) => state.auth.user);
  console.log(user);
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
        <Sidea user={user} />
      </div>
      <div className={classes.in}></div>
      <div>
        <Sideb settoggle={istoggle} user={user} />
      </div>
      <div>
        {toggle.t1 ? <Org_info user={user} /> : <Odefault />}
        {toggle.t2 ? <Sidec camp={user.campaigns} /> : <Odefault />}
        {toggle.t3 ? <Volenteer_info /> : <Odefault />}
        {/* {toggle.t2 && <Odefault />} */}
        {/* <Sidec /> */}
      </div>
    </div>
  );
};
export default Organizer;
