import React, { useState, useEffect } from "react";
import Comment from "./Components/Comment";
import Navbar from "./Components/Navbar";
import NewlyAdded from "./Components/NewlyAdded";
import TopSection from "./Components/TopSection";
import Footer from "./Components/Footer";
import "./css/Main.css";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import axios from "axios";
function App() {
  const [login, setLogin] = useState(false);
  const [signup, setSignup] = useState(false);
  const handleRegistermodal = (value) => {
    if (value === "login") {
      setLogin(!login);
    } else if (value === "signup") {
      setSignup(!signup);
    }
  };
  useEffect(() => {
    getHotelsData();
  }, []);
  const getHotelsData = () => {
   console.log("no API Found bro")
  };
  return (
    <>
      <Navbar handleRegistermodal={handleRegistermodal} />
      <TopSection />
      <NewlyAdded />
      <Comment />
      <Footer />
      {login && <Login setLogin={setLogin} />}
      {signup && <Signup setSignup={setSignup} />}
    </>
  );
}

export default App;
