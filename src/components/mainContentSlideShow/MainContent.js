import React from "react";
import "./MainContent.css";
import HomeCarousel from "./SlideShow/SlideShow";

const MainContent = () => {
  //   const SlideShowImage =
  //     "https://biagiotti.qodeinteractive.com/wp-content/uploads/2019/08/m-h-slider-img-3.jpg";
  return (
    <main className="MainContent">
      {/* <img src={SlideShowImage} height={700} alt="slideshow" /> */}
      <div className="slide-show">
        <HomeCarousel />
      </div>
    </main>
  );
};

export default MainContent;
