import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

const Layout = () => {

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
    <div>
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
