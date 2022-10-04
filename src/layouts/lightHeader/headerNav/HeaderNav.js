import React from "react";
import "./HeaderNav.css";

const HeaderNav = () => {
  const HeaderImage =
    "https://biagiotti.qodeinteractive.com/wp-content/themes/biagiotti/assets/img/logo.png";
  return (
    <nav className="Nav">
      <ul className="Ul">
        <li className="special-li">
          <div className="right-menu">
            <a className="effect-3" href="/">
              HOME
            </a>
            <div className="dropdown-menu">
              <a href="/">Main Home</a>
              <a href="/">Grid Home</a>
              <a href="/">Cosmetics Home</a>
              <a href="/">Product Gallery</a>
              <a href="/">Fullscreen Slider</a>
              <a href="/">Skincare Home</a>
              <a href="/">Landing</a>
            </div>
          </div>
        </li>
        <li className="special-li">
          <div className="right-menu">
            <a className="effect-3" href="/">
              PAGES
            </a>
            <div className="dropdown-menu">
              <a href="/">About Us</a>
              <a href="/">Our Team</a>
              <a href="/">FAQ Page</a>
              <a href="/">Coming Soon</a>
              <a href="/">Pricing Plans</a>
            </div>
          </div>
        </li>
        <li className="special-li">
          <div className="right-menu">
            <a className="effect-3" href="/">
              BLOG
            </a>
            <div className="dropdown-menu">
              <a href="/">Standard</a>
              <a href="/">Centered</a>
              <a href="/">No Sidebar</a>
              <a href="/">Post Types</a>
            </div>
          </div>
        </li>
        <li className="special-li">
          <img src={HeaderImage} alt="alt header logo" height={50} />
        </li>
        <li className="special-li">
          <div className="right-menu">
            <a className="effect-3" href="/">
              SHOP
            </a>
            <div className="dropdown-menu">{/* <a href="/"></a> */}</div>
          </div>
        </li>
        <li className="special-li">
          <a className="effect-3" href="/">
            PORTFOLIO
          </a>
        </li>
        <li className="special-li">
          <a className="effect-3" href="/">
            CONTACT
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNav;
