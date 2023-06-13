import React from "react";
import classes from "./Contactus.module.css";
import img from "./ce-agents-contact.png";

const Contactus = () => {
  return (
    <div>
      <div className={classes.contact}>
        <h1 className={classes.contacth}>Contact us</h1>
        <p className={classes.contactp}>
          Facing some issues or want to know more about us? Contact us through
          below information.
        </p>
      </div>

      <div className={classes.contact2}>
        <div className="row">
          <div className="col-lg-1 col-md-1 col-12"></div>
          <div className={classes.tt1}>
            <div className={classes.sp1}></div>
            <div className={classes.formdesign}>
              <div className={classes.tt}>
                <div className={classes.box}>
                  <div className={classes.icon}>
                    <i className="fa-brands fa-google"></i>
                  </div>
                  <div className={classes.text}>
                    <a href="gmail.com" type='email' >@helpera_admin@gmail.com</a>
                  </div>
                </div>
                <div className={classes.box}>
                  <div className={classes.icon}>
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <div className={classes.text}>
                    <p>08933 552288</p>
                  </div>
                </div>
                <div className={classes.box}>
                  <div className={classes.icon}>
                    <i className="fa-brands fa-facebook"></i>
                  </div>
                  <div className={classes.text}>
                    <a href="facebook.com" target="_blank">@ helpera_facebook_admin</a>
                  </div>
                </div>
                <div className={classes.box}>
                  <div className={classes.icon}>
                    <i className="fa-brands fa-twitter"></i>
                  </div>
                  <div className={classes.text}>
                  <a href="twitter.com" target="_blank">@ helpera_twitter_admin</a>
                  </div>
                </div>
                <div className={classes.box}>
                  <div className={classes.icon}>
                    <i className="fa-solid fa-map-location-dot"></i>
                  </div>
                  <div className={classes.text}>
                    <p>@MG Road, Near KV hospital, Jaipur</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.sp}></div>

            <div className="col-lg-3 col-md-3 col-12">
              <img className={classes.bgside} src={img} alt="bg-side" />
            </div>
          </div>
        </div>
      </div>

      <script
        src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
        integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"
        integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF"
        crossorigin="anonymous"
      ></script>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
        crossorigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
    </div>
  );
};

export default Contactus;
