import React from "react";
import logo from "./assets/logo.svg";

const NavbarHead = () => {
  return (
    <>
      <div className="topnav">
        <img className="logo-img" src={logo} alt="logo" />
          <button className="log-btn">LOGIN</button>
      </div>
    </>
  );
};

export default NavbarHead;
