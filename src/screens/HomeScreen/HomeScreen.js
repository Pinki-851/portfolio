import React, { useState, useEffect } from "react";
import Card from "../../components/Card/Card";
import { connect } from "react-redux";
import Home from "../../components/Home/Home";
import "./HomeScreen.css";
import "./HomeScreen.css";
import Cursor from "../../components/Cursor/Cursor";
import Footer from "../../components/Footer/Footer";
const HomeScreen = (props) => {
  return (
    <>
      <div className="homescreen_container">
        <Cursor />

        <Home />
        <div className="whole_work_card_container" id="work_card">
          {props.cardData.map((cardData) => {
            return <Card cardData={cardData} key={cardData.id} />;
          })}
        </div>
        <Footer />
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return { cardData: state.cardReducer.cardData };
};
export default connect(mapStateToProps)(HomeScreen);
