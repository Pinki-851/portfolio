import React from "react";
import "./ScrollDownStyle.css";
import { CgArrowLongDown } from "react-icons/cg";

const ScrollDown = () => {
  const scrollcard = () => {
    let card = document.getElementById("work_card");
    card.scrollIntoView();
  };

  return (
    <div className="scroll_container" onClick={scrollcard}>
      <CgArrowLongDown className="down-arrow" />
      Scroll
    </div>
  );
};

export default ScrollDown;
