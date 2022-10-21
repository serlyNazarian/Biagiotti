import React from "react";
import "./HeaderNav.css";

const HeaderNav = () => {
  const HeaderImage =
    "https://biagiotti.qodeinteractive.com/wp-content/themes/biagiotti/assets/img/logo.png";
  return (
    <nav className="Nav">
      <ul className="Ul">
        <li className="special-li">
          <a className="effect-3" href="/">
            Home
          </a>
        </li>
        <li className="special-li">
          <a className="effect-3" href="/">
            Pages
          </a>
        </li>
        <li className="special-li">
          <a className="effect-3" href="/">
            Blog
          </a>
        </li>
        <li className="special-li">
          <img src={HeaderImage} alt="alt header logo" height={50} />
        </li>
        <li className="special-li">
          <a className="effect-3" href="/">
            Shop
          </a>
        </li>
        <li className="special-li">
          <a className="effect-3" href="/">
            Portfolio
          </a>
        </li>
        <li className="special-li">
          <a className="effect-3" href="/">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNav;
