import React, { createContext } from "react";
import {food_list} from "../assets/assets"
import { useState,useEffect } from "react";

export const StoreContext = createContext(null);


const StoreContextProvider = (props) => {
  const [CartItems, setCartItems] = useState({})

  const addtocart = (itemId)=>{

    if(!CartItems[itemId]){
      setCartItems((prev)=>({...prev,[itemId]:1}))

    }else{
      setCartItems((prev=>({...prev,[itemId]:prev[itemId]+1})))
    }

  }

const removeFromCart = (itemId) =>{
  setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))

}
useEffect(() => {
  console.log (CartItems)
  

 
}, [CartItems])


  const contextValue = {
    food_list,
    CartItems,
    addtocart,
    setCartItems,
    removeFromCart,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
