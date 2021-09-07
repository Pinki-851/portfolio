import React, { useEffect } from "react";
import "./Cursor.css";
const Cursor = () => {
  useEffect(() => {
    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  const moveCursor = (e) => {
    let cursor = document.querySelector(".cursor");
    let X = e.pageX;
    let Y = e.pageY;
    cursor.style.transform = `translate(${X}px, ${Y}px)`;
  };

  return <div className="cursor"></div>;
};

export default Cursor;
