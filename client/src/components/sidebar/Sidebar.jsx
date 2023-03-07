import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.scss";
const Sidebar = (props) => {

  const [width, setWidth] = useState();
  useEffect(() => {
    const handleWindowResize = () => {
      setWidth(window.innerWidth);
      if (width < 768) {
        
      } 
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [width]);

  
  return (
    <div className={props.isOpen ? "sidebar openSidebar" : " sidebar"}>
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
