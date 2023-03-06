import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoMdLogIn } from "react-icons/io";
import logo from "../../images/rakhmonov.png";
import "./head.scss";
const Head = (props) => {
  



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
        </div>
      </div>
    </div>
  );
};

export default Head;
