import React from "react";
import HeaderIcons from "./headerIcons/HeaderIcons";
import HeaderNav from "./headerNav/HeaderNav";
import HeaderWishlist from "./headerWishlist/HeaderWishlist";
import "./LightHeader.css";

const LightHeader = () => {
  return (
    <header className="lightHeader">
      <HeaderWishlist />
      <HeaderNav />
      <HeaderIcons />
    </header>
  );
};

export default LightHeader;
