import React from "react";
import About from "../../components/About/About";
import Background from "../../components/Background/Background";
import Cursor from "../../components/Cursor/Cursor";
import "./AboutScreen.css";
const AboutScreen = () => {
  return (
    <>
      <div className="about_screen_container">
        <Cursor />
        <Background />
        <About />
      </div>
    </>
  );
};

export default AboutScreen;
