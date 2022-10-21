import React from "react";
import "./App.css";
import MainContent from "./components/mainContentSlideShow/MainContent";
import DarkHeader from "./layouts/darkHeader/DarkHeader";
import LightHeader from "./layouts/lightHeader/LightHeader";
import ClientsCarousel from "./layouts/Main/Clients Carousel/ClientsCarousel";
import ProductsMain from "./layouts/Main/Products Carousel/ProductsMain";
import ShowCase from "./layouts/Main/Showcase/ShowCase";

function App() {
  return (
    <div className="App">
      <DarkHeader />
      <LightHeader />
      <MainContent />
      <ProductsMain />
      <ShowCase />
      <ClientsCarousel />
    </div>
  );
}

export default App;
