import React, { useEffect } from "react";
import { connect } from "react-redux";
import Navbar from "../Navbar/Navbar";
import ScrollDown from "../Scrolldown/ScrollDown";
import { lightModeValue } from "../../store/action/Action";
import "./Home.css";

const Home = (props) => {
  // console.log(props);
  useEffect(() => {
    window.addEventListener("scroll", moveHomeContent);
    return () => {
      window.removeEventListener("scroll", moveHomeContent);
    };
  }, []);
  const showLightMode = () => {
    props.lightModeValue(false);
    document.body.classList.remove("dark_theme");
  };
  const showDarkMode = () => {
    props.lightModeValue(true);
    document.body.classList.add("dark_theme");
  };
  const moveHomeContent = () => {
    let y = window.pageYOffset;
    let lineFirst = document.querySelector(".line_first");
    let lineSecond = document.querySelector(".line_second");
    if (y > 0 && y < 1000) {
      lineFirst.style.transform = `translateX(${-y / 2}px)`;
      lineSecond.style.transform = `translateX(${y / 2}px)`;
      // console.log(lineFirst.style.transform, lineSecond.style.transform);
    }
    // else {
    //   lineFirst.style.transform = `translateX(0px)`;
    //   lineSecond.style.transform = `translateX(0px)`;
    // }
  };
  const handleListScroll = (e) => {
    let listScroll = document.querySelector(".list_scroll");
    let listScrollSpeed = listScroll.getAttribute("data-list-speed");
    let X = (e.clientX * -listScrollSpeed) / 1000;
    let Y = (e.clientY * -listScrollSpeed) / 1000;
    listScroll.style.transform = `translate(${X}px, ${Y}px)`;
    // console.log(listScroll.style.transform);
    // console.log("scroll");
  };
  const listScrollLeave = () => {
    let listScroll = document.querySelector(".list_scroll");
    listScroll.style.transform = `translate(0px, 0px)`;
  };
  const handleListMode = (e) => {
    let listMode = document.querySelector(".list_mode");
    let listModeSpeed = listMode.getAttribute("data-list-speed");
    let X = (e.clientX * -listModeSpeed) / 150;
    let Y = (e.clientY * listModeSpeed) / 1000;
    listMode.style.transform = `translate(${X}px, ${Y}px)`;
  };
  const listModeLeave = () => {
    let listMode = document.querySelector(".list_mode");
    listMode.style.transform = `translate(0px, 0px)`;
  };
  const handleListAbout = (e) => {
    let listAbout = document.querySelector(".list_about");
    let listAboutSpeed = listAbout.getAttribute("data-list-speed");
    let X = (e.clientX * -listAboutSpeed) / 1000;
    let Y = (e.clientY * listAboutSpeed) / 150;
    listAbout.style.transform = `translate(${X}px, ${Y}px)`;
  };
  const listAboutLeave = () => {
    let listAbout = document.querySelector(".list_about");
    listAbout.style.transform = `translate(0px, 0px)`;
  };

  return (
    <>
      <div className="home_container">
        <Navbar
          handleListAbout={handleListAbout}
          listAboutLeave={listAboutLeave}
          aboutText="about"
        />
        <h2 className="home_content">
          <span className="line_first">FRONT-END</span>
          <br />
          <span className="line_second">DEVELOPER</span>
        </h2>
        <ul className="home_nav">
          <li
            className="list_mode"
            data-list-speed="-6"
            onMouseMove={handleListMode}
            onMouseLeave={listModeLeave}
          >
            {props.lightMode ? (
              <div onClick={showLightMode}>Light Mode</div>
            ) : (
              <div onClick={showDarkMode}>Dark Mode</div>
            )}
          </li>
          <li
            className="list_scroll"
            data-list-speed="7"
            onMouseMove={handleListScroll}
            onMouseLeave={listScrollLeave}
          >
            <ScrollDown />
          </li>
        </ul>
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return { lightMode: state.cardReducer.lightMode };
};
const mapDispatchToProps = (dispatch) => {
  return {
    lightModeValue: (modeValue) => dispatch(lightModeValue(modeValue)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
