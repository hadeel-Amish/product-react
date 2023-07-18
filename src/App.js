// import logo from './logo.svg';
import "./App.css";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Register from "./component/Register";
import { BrowserRouter, Routes, Router, Route } from "react-router-dom";
// import { Route, Switch } from "react-router";
import Products from "./component/Products";
import ProductId from "./component/ProductId ";
import Cart from "./component/Cart";
import Contact from "./component/Contact";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/product/:id" element={<ProductId />} />

        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
