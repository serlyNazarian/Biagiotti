import React from "react";
import "./ProductsTitle.css";

const ProductsTitle = () => {
  // const productsTitle = [
  //   { text: "perfect shades" },
  //   { title: "FIND YOUR BEAUTY MATCH" },
  //   { description: "AT VERO EOS ET ACCUSAMUS ET IUSTO" },
  // ];
  //   productsTitle.map((title) => {
  //     return (
  //       <div className="ProductsTitle">
  //         <span>{title.text}</span>
  //         <h2>{title.title}</h2>
  //         <h5>{title.description}</h5>
  //       </div>
  //     );
  //   });
  return (
    <div className="ProductsTitle">
      <p className="ProductsText TuesdayNight-font-face">perfect shades</p>
      <h2 className="ProductsTitle">FIND YOUR BEAUTY MATCH</h2>
      <h5 className="ProductsDescription">at vero eos et accusamus et iusto</h5>
    </div>
  );
};

export default ProductsTitle;
