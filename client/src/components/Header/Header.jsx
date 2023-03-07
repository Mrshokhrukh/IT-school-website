import React, { useState } from "react";
import Head from "../head/head";
import Sidebar from "../sidebar/Sidebar";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Head toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={{ sidebar: isOpen, toggleSidebar: toggleSidebar }} />
    </div>
  );
};

export default Header;
