import React from "react";
import "./HeaderNav.css";
import BlogItem from "./ListItems/BlogItem";
// import HomeItem from "./ListItems/HomeItem";
// import PagesItem from "./ListItems/PagesItem";

const HeaderNav = () => {
  const HeaderImage =
    "https://biagiotti.qodeinteractive.com/wp-content/themes/biagiotti/assets/img/logo.png";
  return (
    <nav className="Nav">
      <ul className="Ul">
        {/* <HomeItem title="HOME" /> */}
        {/* <PagesItem title="PAGES" /> */}
        <BlogItem />
        <li className="special-li">
          <img src={HeaderImage} alt="alt header logo" height={50} />
        </li>
        <li className="special-li">
          <div className="right-menu">
            <a className="effect-3" href="/">
              SHOP
            </a>
            {/* <div className="large-dropdown-menu">
              <div className="Product-type">
                <a className="whitelink" href="/">
                  <h5>Product Types</h5>
                </a>
                <a className="whitelink" href="/">
                  test
                </a>
                <a className="whitelink" href="/">
                  test
                </a>
                <a className="whitelink" href="/">
                  test
                </a>
                <a className="whitelink" href="/">
                  test
                </a>
              </div>
              <div className="Product-type">
                <a className="whitelink" href="/">
                  <h5>Shop Lists</h5>
                </a>
                <a className="whitelink" href="/">
                  test
                </a>
                <a className="whitelink" href="/">
                  test
                </a>
                <a className="whitelink" href="/">
                  test
                </a>
                <a className="whitelink" href="/">
                  test
                </a>
              </div>
              <div className="Product-type">
                <a className="whitelink" href="/">
                  test
                </a>
                <a className="whitelink" href="/">
                  test
                </a>
                <a className="whitelink" href="/">
                  test
                </a>
                <a className="whitelink" href="/">
                  test
                </a>
                <a className="whitelink" href="/">
                  test
                </a>
              </div>
              <div className="Product-type">
                <a className="whitelink" href="/">
                  test
                </a>
                <a className="whitelink" href="/">
                  test
                </a>
                <a className="whitelink" href="/">
                  test
                </a>
                <a className="whitelink" href="/">
                  test
                </a>
                <a className="whitelink" href="/">
                  test
                </a>
              </div>
            </div> */}
          </div>
        </li>
        <li className="special-li">
          <div className="right-menu">
            <a className="effect-3" href="/">
              PORTFOLIO
            </a>
            <div className="dropdown-menu">
              <a href="/">Gallery</a>
              <a href="/">Standard</a>
              <a href="/">Layout</a>
              <a href="/">Singles</a>
            </div>
          </div>
        </li>
        <li className="special-li">
          <div className="right-menu">
            <a className="effect-3" href="/">
              CONTACT
            </a>
            <div className="dropdown-menu">
              <a href="/">Contact Us</a>
              <a href="/">Get In Touch</a>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNav;
