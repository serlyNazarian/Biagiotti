import React from "react";
import ProductsTitle from "../Products Title/ProductsTitle";
import ProductsCarousel from "./ProductsCarousel";

const ProductsMain = () => {
  return (
    <div className="Products-Main">
      <ProductsTitle />
      <ProductsCarousel />
    </div>
  );
};

export default ProductsMain;
