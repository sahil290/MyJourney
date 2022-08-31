import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
const Navbar = ({ handleRegistermodal }) => {
  return (
    <>
      <div className="navWrapper-main">
        <span className="logo-main-wrapper">
          <span id="img-span">
            <img src="/assets/MyJourney.png" alt="Website Main Logo" id="Logo" />
          </span>
          <span id="sec-wrapper">
            <span>y Journey</span>
          </span>
        </span>
        <div className="other-nav-options-wrapper">
          <span>Destinations</span>
          <span>Share your Travel Story</span>
          <span onClick={() => handleRegistermodal("login")}>Login</span>
          <span onClick={() => handleRegistermodal("signup")}>Signup</span>
          <span className="search-wrapper">
            <input className="search" type="text" placeholder="Search Country" />
            <span className="search-icon">
              <BiSearchAlt2 id="svg" />
            </span>
          </span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
