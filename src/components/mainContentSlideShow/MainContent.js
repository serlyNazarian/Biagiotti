import React from "react";
import "./MainContent.css";
import HomeCarousel from "./SlideShow/SlideShow";

const MainContent = () => {
  return (
    <main className="MainContent">
      <div className="slide-show">
        <HomeCarousel />
      </div>
    </main>
  );
};

export default MainContent;
