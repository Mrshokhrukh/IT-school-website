import React from "react";
import { Link } from "react-router-dom";
import { IoMdLogIn } from "react-icons/io";
import logo from "../../images/rakhmonov.png";
import "./header.style.scss";
const Header = () => {
  return (
    <div className="head">
      <div className="header">
        <div className="head-rt">
          <span className="logo">
            <img src={logo} alt="" />
          </span>
        </div>
        <div className="head-lf">
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
  );
};

export default Header;
