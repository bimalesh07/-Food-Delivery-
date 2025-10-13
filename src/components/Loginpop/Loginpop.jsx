import React from 'react'
import "./Loginpop.css";
import { useState } from 'react'
import { assets } from '../../assets/assets'
const Loginpop = ({ setShowlogin }) => {
  const [currState, setcurrState] = useState("Login");
  return (
    <>
      <div className="login-pop">
        <form className="login-pop-container">
          <div className="login-pop-title">
            <h2>{currState}</h2>
            <img
              onClick={() => setShowlogin(false)}
              src={assets.cross_icon}
            ></img>
          </div>
          <div className="login-pop-inputs">
            {currState === "Login" ? (
              <></>
            ) : (
              <input type="text" placeholder="Your name" required></input>
            )}

            <input type="email" placeholder="Your email" required></input>
            <input
              type="Passwords"
              placeholder="Your passwords"
              required
            ></input>
          </div>
          <button>
            {currState === "Sign Up" ? "Create accounts" : "Login"}
          </button>

          <div className="login-popup-condition">
            <input type="checkbox" required></input>
            <p>By continuing i agree to the terms of use & privacy policy </p>
          </div>
          {currState === "Login" ? (
            <p>
              Create a new accounts?{" "}
              <span onClick={() => setcurrState("Sign Up")}>Click here</span>
            </p>
          ) : (
            <p>
              Already have an accounts?{" "}
              <span onClick={() => setcurrState("Login")}>Login here</span>{" "}
            </p>
          )}
        </form>
      </div>
    </>
  );
};

export default Loginpop