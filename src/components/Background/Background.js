import React from "react";
import { IoLogoCss3 } from "react-icons/io";
import { SiRedux, SiJavascript, SiHtml5 } from "react-icons/si";
import { DiReact } from "react-icons/di";
import "./Background.css";

const Background = () => {
  return (
    <div id="background">
      <div className="icon_container i1">
        <SiRedux className="icon" />
        <p className="icon_label">Redux</p>
      </div>
      <div className="icon_container i2">
        <SiJavascript className="icon" />
        <p className="icon_label">JavaScript</p>
      </div>
      <div className="icon_container i3">
        <SiHtml5 className="icon" />
        <p className="icon_label">Html</p>
      </div>
      <div className="icon_container i4">
        <IoLogoCss3 className="icon" />
        <p className="icon_label">Css</p>
      </div>

      <div className="icon_container i5">
        <DiReact className="icon react_icon_size" />
        <p className="icon_label">React.js</p>
      </div>
      <div className="icon_container i6">
        <SiRedux className="icon" />
        <p className="icon_label">Redux</p>
      </div>

      <div className="icon_container i7">
        <SiJavascript className="icon" />
        <p className="icon_label">JavaScript</p>
      </div>

      <div className="icon_container i8">
        <SiHtml5 className="icon" />
        <p className="icon_label">Html</p>
      </div>

      <div className="icon_container i9">
        <IoLogoCss3 className="icon" />
        <p className="icon_label">Css</p>
      </div>
      <div className="icon_container i10">
        <DiReact className="icon react_icon_size" />
        <p className="icon_label">React.js</p>
      </div>
    </div>
  );
};

export default Background;
