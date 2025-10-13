import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Placeorder from "./pages/Placeorder/Placeorder";
import Cart from "./pages/Cart/Cart";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import Loginpop from "./components/Loginpop/Loginpop";
function App() {
  const [Showlogin, setShowlogin] = useState(false)
  return (
    <>
      {Showlogin ? <Loginpop setShowlogin={setShowlogin} /> : <></>}
      <div className="app">
        <Navbar setShowlogin={setShowlogin} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/order" element={<Placeorder />}></Route>
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
