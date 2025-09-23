import React from 'react'
import { assets } from '../assets/assets';
import "./Navbar.css";
import { useEffect } from 'react';
const Navbar = ({Theme,setTheme}) => {

useEffect(() => {
    if(Theme==='dark'){
      document.body.classList.add('dark')
    }else{
        document.body.classList.remove('dark')
    }
    localStorage.setItem('theme',Theme)

}, [Theme])


  return (

    <div className='navbar'>
        <img src={assets.logo}></img>
        <ul className='ul'>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>Contact</a></li>
            <li><a href='#'>Servies</a></li>
            <li><a href='#'>Home</a></li>
        </ul>
        <button onClick={()=>setTheme('dark')}>SETDARK</button>
        <button onClick={()=>setTheme('light')}>SETLIGHT</button>
    </div>
  )
}

export default Navbar