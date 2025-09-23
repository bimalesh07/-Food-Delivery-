import React from 'react'
import { assets } from '../assets/assets';
import "./Navbar.css";

const Navbar = () => {

  return (
    <div className="navbar">
      <img src={assets.logo}></img>
      <ul className="navbar-menu">
        <li>Home</li>
        <li>menu</li>
        <li>Mobile-app</li>
        <li>Contact us</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon}></img>
      </div>
      <div className="navbar-search-icon">
        <img src={assets.basket_icon}></img>
        <div className='dot'></div>
      </div>
      <button className='btn'>Sign in</button>
    </div>
  );
}

export default Navbar