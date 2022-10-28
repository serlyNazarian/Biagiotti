import React from "react";
import "./App.css";
import MainContent from "./components/mainContentSlideShow/MainContent";
import TopBtn from "./components/To Top Btn/TopBtn";
import DarkHeader from "./layouts/darkHeader/DarkHeader";
import Footer from "./layouts/Footer/Footer";
import LightHeader from "./layouts/lightHeader/LightHeader";
import About from "./layouts/Main/About/About";
import BackgroundRow from "./layouts/Main/Background Row/BackgroundRow";
import Benefits from "./layouts/Main/Benefits Section/Benefits";
import Blog from "./layouts/Main/Blog/Blog";
import ClientsCarousel from "./layouts/Main/Clients Carousel/ClientsCarousel";
import LatestProducts from "./layouts/Main/Latest Products/LatestProducts";
import ProductTestimonials from "./layouts/Main/Product Testimonials/ProductTestimonials";
import ProductsMain from "./layouts/Main/Products Carousel/ProductsMain";
import ShowCase from "./layouts/Main/Showcase/ShowCase";
import Subscribe from "./layouts/Main/Subscribe/Subscribe";

function App() {
  return (
    <div className="App">
      <TopBtn />
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
      <BackgroundRow />
      <Blog />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
