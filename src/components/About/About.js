import React, { useEffect } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./About.css";

const About = () => {
  useEffect(() => {
    let name = document.querySelectorAll(".name");
    let scrollOption = {
      threshold: 0,
      root: null,
      rootMargin: "0px 0px 0px 0px",
    };
    const showName = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show_name");
          appearOnLoad.unobserve(entry.target);
        }
      });
    };
    let appearOnLoad = new IntersectionObserver(showName, scrollOption);
    name.forEach((name) => {
      appearOnLoad.observe(name);
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="about_container">
        <div className="about_me_text" id="about_me_text">
          Hi! i'm <span>Pinki Saroj,</span> a Frontend Web Developer CSS
          ENTHUSIAST AND i like to build user interface.
          <br />
          <br />I have completed my graduation in
          <span> Computer Science.</span> I belong to Raipur. I use
          <span> HTML, CSS, JavaScript, Redux and React</span> to produce
          responsive websites. I like to learn new things in my day to day life.
          <br />
          <br />
          when I start my college I don't find that much interest on coding but{" "}
          <span>
            when I introduced to CSS I literally started enjoy coding, that was
            my starting point in this field.
          </span>
          <br />
          <br />
          Personally, I love to listen some cool music when I'm getting bore. I
          like to go outside and have some fun.
        </div>
        <Footer />
      </div>
    </>
  );
};

export default About;
