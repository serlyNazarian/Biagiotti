import React from "react";
import "./ViewMoreButton.css";

const ViewMoreButton = (props) => {
  return (
    <div className="btn-div">
      <button className="view-more-btn">{props.text}</button>
    </div>
  );
};

export default ViewMoreButton;
