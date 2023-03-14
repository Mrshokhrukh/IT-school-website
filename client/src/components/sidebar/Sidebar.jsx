import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.scss";
const Sidebar = (props) => {
  // const [width, setWidth] = useState();
  // useEffect(() => {
  //   const handleWindowResize = () => {
  //     setWidth(window.innerWidth);
  //     if (width < 768) {

  //     }
  //   };
  //   window.addEventListener("resize", handleWindowResize);
  //   return () => {
  //     window.removeEventListener("resize", handleWindowResize);
  //   };
  // }, [width]);

  return (
    <div className={props.isOpen ? "sidebar openSidebar" : "sidebar"}>
      <div className="line-1"></div>
      <div className="line-2"></div>
      <div className="line-3"></div>
      <div className="line-4"></div>
      <div className="line-5"></div>

      <ul>
        <li>
          <Link to="">Kurslarimiz</Link>
        </li>
        <li>
          <Link to="">Biz haqimizda</Link>
        </li>
        <li>
          <Link to="">odatiy ta'lim</Link>
        </li>
        <li>
          <Link to="">intensive ta'lim</Link>
        </li>
        <li>
          <Link to="">aloqa uchun</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
