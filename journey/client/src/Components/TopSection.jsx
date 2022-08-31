import React from "react";

const TopSection = () => {
  return (
    <>
      <div className="main-top-section-wrapper">
        <div id="first-wrapper">
          <h1>
            
            <span id="hi">Hi! My Journey,</span>
            <br />
            <span id="share">
              Lets people share their stories and experiences with others about their travel to let
              them know more about the place they went in and makes it easier for you to know about that
              place, before you visit.
            </span>
          </h1>
          <button id="explore">Know More</button>
        </div>
        <div id="second-wrapper">
          <img
            src="/assets/travel.png"
            alt="Main logo of Top Section"
            className="top-section-image"
          />
        </div>
      </div>
    </>
  );
};

export default TopSection;
