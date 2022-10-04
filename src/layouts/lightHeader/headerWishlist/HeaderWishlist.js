import React from "react";
import "./HeaderWishlist.css";
import { FaRegHeart } from "react-icons/fa";

const HeaderWishlist = () => {
  return (
    <div className="Wishlist-header">
      <FaRegHeart className="WishlistIcon" />
      <span>Wishlist</span>
    </div>
  );
};

export default HeaderWishlist;
