import React from "react";
import { useHistory } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const homeHistory = useHistory();

  return (
    <div className="footer_container">
      <ul className="footer">
        <li>
          <a href="mailto:pinkisaroj942@gmail.com" target="_blank">
            mail
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/pinki-saroj-5649b221a"
            target="_blank"
          >
            linkedin
          </a>
        </li>
        <li>
          <a href="/images/resume.pdf" target="_blank">
            resume
          </a>
        </li>
      </ul>
      <p className="footer_text">
        developed by ©
        <span onClick={() => homeHistory.push("./")}>pinki saroj</span>
      </p>
    </div>
  );
};

export default Footer;
