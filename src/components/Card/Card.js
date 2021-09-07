import React, { useEffect } from "react";
import Button from "../Button/Button";
import "./Card.css";

const Card = (props) => {
  useEffect(() => {
    let work_card_container = document.querySelectorAll(".work_card_container");

    let scrollOption = {
      threshold: 0.3,
      root: null,
      rootMargin: "0px 0px 0px 0px",
    };
    let appearOnScroll = new IntersectionObserver(revealCard, scrollOption);

    work_card_container.forEach((work_card_container) => {
      appearOnScroll.observe(work_card_container);
    });
    if (window.innerWidth < 769) {
      let cardNumber = document.querySelectorAll(".card_number");
      let scrollOptionForCardNumber = {
        threshold: 0.9,
        root: null,
        rootMargin: "0px 0px 0px 0px",
      };
      let appearCardNumberOnScroll = new IntersectionObserver(
        revealCardNumber,
        scrollOptionForCardNumber
      );

      cardNumber.forEach((cardNumber) => {
        appearCardNumberOnScroll.observe(cardNumber);
      });
    }
  }, []);
  const { cardData } = props;
  const revealCard = (entries, appearOnScroll) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal");
        appearOnScroll.unobserve(entry.target);
      }
    });
  };
  const revealCardNumber = (entries, appearCardNumberOnScroll) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // console.log("reveal");
        entry.target.classList.add("reveal_card_number");
      } else {
        // console.log("elseReveal");
        entry.target.classList.remove("reveal_card_number");
      }
    });
  };

  return (
    <div className="work_card_container">
      <div className="work_card_wrapper">
        <div className="card_wrapper">
          <div
            className="card"
            style={{
              backgroundImage: `url(${cardData.cardImage})`,
            }}
          ></div>
          <div className="card_text_section">
            <h2 className="title">{cardData.cardTitle}</h2>
            <h3 className="subtitle">{cardData.cardSubTitle}</h3>
            <a href={cardData.cardLink} target="_blank">
              <Button text="visit site" />
            </a>
          </div>
          <div className="card_number">{cardData.cardNumber}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
