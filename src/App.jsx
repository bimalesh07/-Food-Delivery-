import './App.css'
import Navbar from './components/Navbar'
import { useState } from 'react'
import {  Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Placeorder from './pages/Placeorder/Placeorder';
import Cart from './pages/Cart/Cart';
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/order' element={<Placeorder/>}></Route>
    </Routes>

    </>
  )
}

export default App
