import React from 'react'
import './ExploreMenu.css'
import { menu_list } from "../../assets/assets";
const ExploreMenu = () => {

  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'Choose from a diverse menu featuring a delectable array of></p>
        <div className='explore-menu-list'>
            {menu_list.map((menu,index)=>(
                <div className='explore-menu-items'></div>
            ))}

        </div>


    </div>
  )
}

export default ExploreMenu