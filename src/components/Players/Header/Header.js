import React from "react";
import "./Header.css";
import logo from "../../../../src/images/BPLLogo.png";

const Header = () => {
  return (
    <div className="bpl-logo">
      <img className="logo-style" src={logo} alt="" />
    </div>
  );
};

export default Header;
