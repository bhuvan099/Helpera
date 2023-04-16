import React from "react";
import classes from "./Login.module.css";
import img from "./img1.png";

const Login = () => {
  return (
    <>
      <div className={classes.b}>
        <div className={classes.i}>
          <img src={img} alt="Logo" />
        </div>
        <div className={classes.c}>
          <h1 className={classes.ch1}>Login</h1>
          <form className={classes.cf} method="post">
            <div className={classes.txt_field}>
              <input type="text" required />
              <span></span>
              <label>Username</label>
            </div>
            <div className={classes.txt_field}>
              <input type="password" required />
              <span></span>
              <label>Password</label>
            </div>
            <div className={classes.pass}>Forgot Password?</div>
            <div className={classes.check}>
              <input type="checkbox" id="rem" name="Remember" value="rem" />
              <label for="rem"> Remember password</label>
              <br />
            </div>
            <input className={classes.in} type="submit" value="Login" />
            <div className={classes.r1}>
              <div className="row1">
                <div className="col-md-3">
                  <a
                    className="btn btn-outline-dark"
                    href="/users/googleauth"
                    role="button"
                    //style="text-transform: none"
                  >
                    <img
                      width="20px"
                      //style="margin-bottom: 3px; margin-right: 5px"
                      alt="Google sign-in"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
                    />
                    Continue with Google
                  </a>
                </div>
              </div>
            </div>
            <link
              rel="stylesheet"
              href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
              integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
              crossorigin="anonymous"
            />
            <br />
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
