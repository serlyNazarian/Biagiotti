import React from "react";
import "./HeaderNav.css";

const HeaderNav = () => {
  const HeaderImage =
    "https://biagiotti.qodeinteractive.com/wp-content/themes/biagiotti/assets/img/logo.png";
  return (
    <nav className="Nav">
      <ul className="Ul">
        <li className="special-li">
          <img src={HeaderImage} alt="alt header logo" height={50} />
        </li>
        <li className="special-li">
          <div className="right-menu">
            <a className="effect-3" href="/">
              SHOP
            </a>
          </div>
        </li>
        <li className="special-li">
          <div className="right-menu">
            <a className="effect-3" href="/">
              PORTFOLIO
            </a>
          </div>
        </li>
        <li className="special-li">
          <div className="right-menu">
            <a className="effect-3" href="/">
              CONTACT
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNav;
