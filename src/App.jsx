import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Placeorder from "./pages/Placeorder/Placeorder";
import Cart from "./pages/Cart/Cart";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/order" element={<Placeorder />}></Route>
        </Routes>
      </div>
      <Footer/>
    </>
  );
}

export default App;
