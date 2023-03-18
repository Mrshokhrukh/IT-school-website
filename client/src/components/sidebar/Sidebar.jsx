import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import "./sidebar.scss";
const Sidebar = (props) => {
  const closeSidebar = () => {
    props.toggleSidebar(false);
  };

  return (
    <div className={props.isOpen ? "sidebar openSidebar" : "sidebar"}>
      <div className="line-1"></div>
      <div className="line-2"></div>
      <div className="line-3"></div>
      <div className="line-4"></div>
      <div className="line-5"></div>

      <span className="close">
        <IoClose onClick={closeSidebar} />
      </span>
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
