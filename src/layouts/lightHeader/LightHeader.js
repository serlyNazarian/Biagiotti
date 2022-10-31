import React from "react";
import HeaderIcons from "./headerIcons/HeaderIcons";
import HeaderNav from "./headerNav/HeaderNav";
import HeaderWishlist from "./headerWishlist/HeaderWishlist";
import "./LightHeader.css";

const LightHeader = () => {
  return (
    <div className="lightHeader">
      <HeaderWishlist />
      <HeaderNav />
      <HeaderIcons />
    </div>
  );
};

export default LightHeader;
