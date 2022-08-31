import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

const Register = () => {
  const [selected, setSelected] = useState(1);
  const handleSelected = (value) => {
    setSelected(value);
  };
  return (
    <>
      <div id="register-wrapper">
       
      </div>
    </>
  );
};

export default Register;
