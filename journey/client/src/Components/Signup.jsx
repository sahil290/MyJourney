import React from "react";
import { ImCross } from "react-icons/im";

const Signup = ({ setSignup }) => {
  return (
    <>
      <div id="register-wrapper">
        <div className="login-signup-wrapper">
          <ImCross id="cross" onClick={() => setSignup(false)} />
          <div className="top-login-wrapper signup-img">
            <img src={"/assets/signup.png"} alt="Top Login Logo" />
          </div>
          <div id="login-wrapper">
          <div className="login">Signup</div>
            <div>
              <label htmlFor="name">Fullname</label>
              <input type="text" placeholder="Enter your fullname" />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="text" placeholder="Enter your email" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input type="text" placeholder="Enter password" />
            </div>
            <div id="signup-button">
              <button>Signup</button>
            </div>
            <div id="signup-link">
              Already have an account? <span>Login!</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
