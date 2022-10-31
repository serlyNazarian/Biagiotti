import React from "react";
import "./HeaderNav.css";
import { Link } from "react-router-dom";

const HeaderNav = () => {
  const HeaderImage =
    "https://biagiotti.qodeinteractive.com/wp-content/themes/biagiotti/assets/img/logo.png";
  return (
    <>
      <nav className="Nav">
        <ul className="Ul">
          <li className="special-li">
            <Link to="/">Home</Link>
          </li>
          <li className="special-li">
            <Link to="about-us">About</Link>
          </li>
          <li className="special-li">
            <Link to="blog">Blog</Link>
          </li>
          <li className="special-li">
            <img src={HeaderImage} alt="alt header logo" height={50} />
          </li>
          <li className="special-li">
            <Link to="shop">Shop</Link>
          </li>
          <li className="special-li">
            <Link to="portfolio">Portfolio</Link>
          </li>
          <li className="special-li">
            <Link to="contact-us">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default HeaderNav;
