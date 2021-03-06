import React, { Fragment, useEffect } from "react";
import classes from "./Thirdback.module.css";
import Aos from "aos";
import logo1 from "../../../assets/AP5.png";
import "aos/dist/aos.css";

const Thirdback = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, disable: "mobile" });
  }, []);
  return (
    <Fragment>
      <div className={classes["back"]}>
        <div className={classes["img"]}>
          <img className={classes["image"]} src={logo1} alt="logo" />
        </div>
        <div className={classes["head2"]}>
          <h1>
            Living, learning, & leveling up
            <br /> one day at a time.
          </h1>
        </div>

        <div className={classes["icon"]}>
          <a
            href="https://www.linkedin.com/in/aaditya-pal-7903"
            target="_blank"
            rel="noreferrer"
            className={classes["anc"]}
          >
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a
            href="https://github.com/NinjaAadi"
            target="_blank"
            rel="noreferrer"
            className={classes["anc"]}
          >
            <i class="fab fa-github"></i>
          </a>
          <a
            href="https://www.instagram.com/____aaditya001____/"
            target="_blank"
            rel="noreferrer"
            className={classes["anc"]}
          >
            <i class="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.codechef.com/users/ninjaaadi7903"
            target="_blank"
            rel="noreferrer"
            className={classes["anc"]}
          >
            <span
              className="iconify"
              data-icon="simple-icons:codechef"
              data-inline="false"
              style={{ height: "auto" }}
            ></span>
          </a>
          <a
            href="mailto:aadityapal.info@gmail.com"
            target="_blank"
            rel="noreferrer"
            className={classes["anc"]}
          >
            <i class="far fa-envelope"></i>
          </a>
        </div>
        <div className={classes["madewith"]}>
          <p>
            Made with react <i class="fab fa-react"></i>
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default Thirdback;
