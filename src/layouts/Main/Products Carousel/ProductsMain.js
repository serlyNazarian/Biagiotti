import React from "react";
import ProductsTitle from "../Products Title/ProductsTitle";
import ProductsCarousel from "./ProductsCarousel";
import "./ProductsMain.css";

const ProductsMain = () => {
  return (
    <div className="Products-Main">
      <ProductsTitle Text="perfect shades" Title="Find your beauty match" Description="At vero eos et accusamus et iusto" />
      <ProductsCarousel />
    </div>
  );
};

export default ProductsMain;
