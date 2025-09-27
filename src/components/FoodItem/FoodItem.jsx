import React from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { useState } from 'react'

const FoodItem = ({id,name,price,descrption,image}) => {

const [itemcount, setitemcount] = useState(0)

  return (
    <div className='food-item'>
        <div className="food-item-img-container">
            <img className='food-item-image' src={image}></img>
           {
            !itemcount? <img className='add' onClick={()=>setitemcount(prev=>prev+1)} src={assets.add_icon_white}></img>
            :<div className='food-itmes-counter'>
                <img onClick={()=> setitemcount(prev=>prev-1)} src={assets.remove_icon_red}></img>
                <p>{itemcount}</p>
                <img onClick={()=> setitemcount(prev=>prev+1)} src={assets.add_icon_green}></img>
            </div>
           }
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts}></img>
            </div>
            <p className='food-item-des'>{descrption}</p>
            <p className='food-item-price'>${price}</p>
        </div>

    </div>
  )
}

export default FoodItem