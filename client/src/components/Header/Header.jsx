import React, { useEffect, useState } from "react";
import Head from "../head/head";
import Sidebar from "../sidebar/Sidebar";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidth] = useState();

  useEffect(() => {
    const handleWindowResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [width]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Head toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
    </div>
  );
};

export default Header;
