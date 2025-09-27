import React, { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import {StoreContext} from '../../context/StoreContext'

const FoodItem = ({id, name, price, descrption, image}) => {

const { CartItems, addtocart, removeFromCart } = useContext(StoreContext);

  return (
    <div className='food-item'>
        <div className="food-item-img-container">
            <img className='food-item-image' src={image}></img>
           {
            !CartItems[id]? <img className='add' onClick={()=>addtocart(id)} src={assets.add_icon_white}></img>
            :<div className='food-itmes-counter'>
                <img onClick={()=> removeFromCart (id)} src={assets.remove_icon_red}></img>
                <p>{CartItems[id]}</p>
                <img onClick={()=> addtocart(id)} src={assets.add_icon_green}></img>
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