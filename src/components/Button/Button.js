import React from "react";
import "./Button.css";
import { CgArrowLongRight } from "react-icons/cg";
const Button = (props) => {
  return (
    <div className="button">
      <span className="btn_text">{props.text}</span>
      <CgArrowLongRight className="rightArrow" />
      <div className="button_mask"></div>
    </div>
  );
};

export default Button;
