import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoMdLogIn } from "react-icons/io";
import logo from "../../images/rakhmonov.png";
import "./header.style.scss";
const Header = () => {
  const [width, setWidth] = useState();
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleWindowResize = () => {
      setWidth(window.innerWidth);
      if (width < 768) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [width]);

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

{/* 
            <div className="sidebar">
              <div className="hamburger">
                <div className="hamburger__container">
                  <div className="hamburger__inner"></div>
                  <div className="hamburger__hidden"></div>
                </div>
              </div>
            </div> */}
          
        </div>
      </div>
    </div>
  );
};

export default Header;
