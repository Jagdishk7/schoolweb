import React from "react";
import CardSlider from "../../cardslider/CardSlider";
import Carouselcomp from "../../carousel/Carouselcomp";
import Category from "../../category/Category";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="home-section">
        <Carouselcomp />
        <div className="main-container">
          <div className="ad-section-left ad-section"></div>
          <div className="main-content">
            <Category />
            <hr />
            <CardSlider heading={"Play Schools"} />
            <CardSlider heading={"Boarding Schools"} />
          </div>
          <div className="ad-section-right ad-section"></div>
        </div>
      </div>
    </>
  );
};

export default Home;
