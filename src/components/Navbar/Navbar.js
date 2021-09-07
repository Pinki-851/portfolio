import React from "react";
import "./NavbarStyle.css";
import { useHistory } from "react-router-dom";

const Navbar = (props) => {
  const aboutHistory = useHistory();
  const homeHistory = useHistory();
  const handleListLogo = (e) => {
    let listLogo = document.querySelector(".list_logo");
    let listLogoSpeed = listLogo.getAttribute("data-list-speed");
    let X = (e.clientX * -listLogoSpeed) / 150;
    let Y = (e.clientY * listLogoSpeed) / 150;
    listLogo.style.transform = `translate(${X}px, ${Y}px)`;
  };
  const listLogoLeave = () => {
    let listLogo = document.querySelector(".list_logo");
    listLogo.style.transform = `translate(0px, 0px)`;
  };

  return (
    <>
      <ul className="navbar">
        <li
          className="list_logo"
          data-list-speed="9"
          onMouseMove={handleListLogo}
          onMouseLeave={listLogoLeave}
          onClick={() => homeHistory.push("./")}
        >
          Pinki Saroj
        </li>
        <li
          className="list_about"
          data-list-speed="7"
          onMouseMove={props.handleListAbout}
          onMouseLeave={props.listAboutLeave}
          onClick={() => aboutHistory.push("./about")}
        >
          {props.aboutText}
        </li>
      </ul>
    </>
  );
};

export default Navbar;
