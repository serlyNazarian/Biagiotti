import React from "react";
import "./ProductsTitle.css";

const ProductsTitle = (props) => {
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
    <div className="ProductsDiv">
      <p className="ProductsText TuesdayNight-font-face">{props.Text}</p>
      <h2 className="ProductsTitle">{props.Title}</h2>
      <h5 className="ProductsDescription">{props.Description}</h5>
    </div>
  );
};

export default ProductsTitle;
