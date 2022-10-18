import React from "react";
import "./DarkHeader.css";
import { FaUser } from "react-icons/fa";

const DarkHeader = () => {
  return (
    <div className="DarkHeaderContainer">
      <div className="EmailInfo">
        <a href="/">biagiottitheme@gmail.com</a>
      </div>
      <div className="SpecialOffer">
        Free shipping on international orders of $150+
      </div>
      <div className="Login">
        <a href="/">Log in</a>
        <FaUser className="user-icon" />
      </div>
    </div>
  );
};

export default DarkHeader;
