import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoMdLogIn } from "react-icons/io";
import logo from "../../images/rakhmonov.png";
import "./head.scss";
import "../../style/humburger.scss";
const Head = (props) => {
  const handleClick = () => {
    props.toggleSidebar(true);
  };

  return (
    <div className="head">
      <div className="container">
        <div className="header">
          <div className="head-lf">
            <span className="logo">
              <img src={logo} alt="" />
            </span>
          </div>

          <div className="head-rt">
            <Link to="/" className="link-to-courses">
              bootcamp
            </Link>
            <Link to="/courses" className="link-to-courses">
              Kurslarimiz
            </Link>
            <div className="login">
              <span className="login-icon">
                <IoMdLogIn />
              </span>
              <span>kirish</span>
            </div>
          </div>

          <div class="hamburger" onClick={handleClick}>
            <div class="hamburger__container">
              <div class="hamburger__inner"></div>
              <div class="hamburger__hidden"></div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Head;
