import React from "react";
import { FaSearch, FaShoppingBag, FaBars } from "react-icons/fa";
import './HeaderIcons.css';
const HeaderIcons = () => {
  return (
    <div className="IconsContainer">
      <FaSearch className="icon" />
      <FaShoppingBag className="icon" />
      <FaBars className="icon" />
    </div>
  );
};

export default HeaderIcons;
