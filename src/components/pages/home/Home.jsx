import React from "react";
import CardSlider from "../../cardslider/CardSlider";
import Carouselcomp from "../../carousel/Carouselcomp";
import Category from "../../category/Category";
import "./Home.css";
import AdCard from "../../Cards/AdCard";

const Home = () => {
  return (
    <>
      <div className="home-section">
        <Carouselcomp />
        <div className="main-container">
          <div className="ad-section-left ad-section">
              <AdCard/>
              <AdCard/>
              <AdCard/>
              <AdCard/>
              <AdCard/>
          </div>
          <div className="main-content">
            <div className="mtb-53">
            <Category/>
            </div>
            <hr />
            <div className="mtb-4">
            <CardSlider heading={"Play Schools"} />
            </div>
            <div className="mtb-4">
            <CardSlider heading={"Boarding Schools"} />
            </div>
          </div>
          <div className="ad-section-right ad-section">
              <AdCard/>
              <AdCard/>
              <AdCard/>
              <AdCard/>
              <AdCard/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
