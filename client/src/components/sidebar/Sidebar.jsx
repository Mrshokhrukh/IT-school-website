import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.scss";
const Sidebar = () => {
  return (
    <div className="sidebar">
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
