import Navbar from './Component/Navbar';
import React from 'react';
import './App.css';
import Home from './Component/Home';
import { Route, Routes } from 'react-router-dom';
import Products from './Component/Products';
import Product from './Component/Product';
import About from './Component/About';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/products/:id" element={<Product />} />
      </Routes>
    </>
  );
}

export default App;
