import React, { useState } from 'react'
import { assets } from '../assets/assets';
import "./Navbar.css";


const Navbar = () => {
  const [menu, setMenu] = useState(home)

  return (
    <div className="navbar">
      <img src={assets.logo} className="logo"></img>
      <ul className="navbar-menu">
        <li className={menu==='home'?"active":" "}>Home</li>
        <li className={menu==="menu"?"active":""}>menu</li>
        <li className={menu===mo}>Mobile-app</li>
        <li className=''>Contact us</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon}></img>
        <div className="navbar-search-icon">
          <img src={assets.basket_icon}></img>
          <div className="dot"></div>
        </div>
        <button className=''>Sign in</button>
      </div>
    </div>
  );
}

export default Navbar