import React from "react";
import { BsFacebook } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import {
  BsInstagram,
  BsYoutube,
  BsGithub,
  BsLinkedin,
  BsFillPhoneFill,
  BsFillTelephonePlusFill,
} from "react-icons/bs";
import { FaDiscord, FaHome } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { AiOutlineCopyright } from "react-icons/ai";
const Footer = () => {
  return (
    <>
      <div className="footer-main-wrapper">
        <div id="social-media-wrapper">
          <div>
            <span>Get connected with us on social networks!</span>
          </div>
          <div className="social-icons-wrapper">
            <span>
              <BsFacebook id="fb" />
            </span>
            <span>
              <IoLogoWhatsapp id="wt" />
            </span>
            <span>
              <BsInstagram id="in" />
            </span>
            <span>
              <BsYoutube id="yt" />
            </span>
            <span>
              <BsGithub id="gh" />
            </span>
            <span>
              <FaDiscord id="dc" />
            </span>
            <span>
              <BsLinkedin id="lk" />
            </span>
          </div>
        </div>
        <div id="sec-wrapper-footer">
          <div id="about-wrapper">
            <span>About My Journey</span>
            <p>
              My Journey is a place where you can share all your good/bad experience that happens
              with your on your travel to let others know about the problems which you faced so that
              they know what to do before going there.
            </p>
            <div className="newsletter-wrapper">
              <span>Subscribe to our Newsletter!</span>
              <input type="text" placeholder="Enter your email" />
              <button>Subscribe</button>
            </div>
          </div>
          <div id="links-wrapper">
            <span>Useful Links</span>
            <p>Your Account</p>
            <p>Privacy Policy</p>
            <p>Help!</p>
            <p>Settings</p>
          </div>
          <div id="address-wrapper">
            <span>Contact</span>
            <p>
              <FaHome id="home" /> Jammu JK 182201, IN
            </p>
            <p>
              <HiMail id="mail" /> info@gmail.com
            </p>
            <p>
              <BsFillPhoneFill id="mob" />
              +91-6006040193
            </p>
            <p>
              <BsFillTelephonePlusFill id="phone" />
              +91-6006040193
            </p>
          </div>
        </div>
        <div id="copyright-wrapper">
          <AiOutlineCopyright id="copyright" /> 2022 Copyright myjourney.com
        </div>
      </div>
    </>
  );
};

export default Footer;
