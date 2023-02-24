import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <Link to="/auth/login">login</Link>
    </div>
  );
};

export default Header;
