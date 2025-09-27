import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">

        <div className="left">
          <img src={assets.logo}></img>
          <p className="p">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
          </p>
          <div className="footer-social">
            <img src={assets.facebook_icon} alt=""></img>
            <img src={assets.twitter_icon} alt=""></img>
            <img src={assets.linkedin_icon} alt=""></img>
          </div>
        </div>
        <div className="center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div className="right">
          <h2>Get in Touch </h2>
          <ul>
            <li>+9648264859</li>
            <li>Contact@tomato</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2025 @tomatp.com -All rights{" "}
      </p>
    </div>
  );
}

export default Footer