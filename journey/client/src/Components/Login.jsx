import React from "react";
import {ImCross} from "react-icons/im"
const Login = ({setLogin}) => {
  return (
    <>
      <div id="register-wrapper">
        <div className="login-signup-wrapper">
        <ImCross id="cross" onClick={()=>setLogin(false)}/>
          <div className="top-login-wrapper">
            <img
              src={
                "https://cdni.iconscout.com/illustration/premium/thumb/login-page-4468581-3783954.png"
              }
              alt="Top Login Logo"
            />
          </div>
          <div id="login-wrapper">
          <div className="login">Login</div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="text" placeholder="Enter your email" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input type="text" placeholder="Enter password" />
            </div>
            <span id="f">Frogot password?</span>
            <div id="login-button">
              <button>Login</button>
            </div>
            <div id="signup-link">
              New Here? <span>Signup!</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
