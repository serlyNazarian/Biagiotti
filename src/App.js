import React from "react";
import "./App.css";
import MainContent from "./components/mainContentSlideShow/MainContent";
import DarkHeader from "./layouts/darkHeader/DarkHeader";
import LightHeader from "./layouts/lightHeader/LightHeader";
import About from "./layouts/Main/About/About";
import Benefits from "./layouts/Main/Benefits Section/Benefits";
import ClientsCarousel from "./layouts/Main/Clients Carousel/ClientsCarousel";
import LatestProducts from "./layouts/Main/Latest Products/LatestProducts";
import ProductTestimonials from "./layouts/Main/Product Testimonials/ProductTestimonials";
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
      <ProductTestimonials />
      <Benefits />
      <About />
      <LatestProducts />
    </div>
  );
}

export default App;
