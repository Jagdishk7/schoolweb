import React from "react";
import Carouselcomp from "../../carousel/Carouselcomp";
import Category from "../../category/Category";
import "./Home.css";
import AdCard from "../../Cards/AdCard";
import SchoolTabs from "../../tabs/SchoolTabs";
import Statistics from "../../tabs/Statistics";

import { useLocation } from "react-router-dom";
import CardSliderPlay from "../../cardslider/CardSliderPlay";
import CardSliderBoarding from "../../cardslider/CardSliderBoarding";

const Home = () => {

  const location = useLocation();

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
            {/* <div className=" sub-section">
            Hello {location.state.id} welcome to the home
            </div> */}
            <div className=" sub-section">
            <Category/>
            </div>
            <div className=" sub-section">
            <CardSliderPlay heading={"Play Schools"} />
            </div>
            <div className=" sub-section">
            <CardSliderBoarding heading={"Boarding Schools"} />
            </div>
            <div className=" sub-section">
            <SchoolTabs/>
            </div>
            <div className=" sub-section">
            <Statistics/>
            </div>
            {/* <div className=" sub-section">
            <CallbackForm/>
            </div> */}
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
