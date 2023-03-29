import Navbar from './Component/Navbar';
import React from 'react';
import './App.css';
import Home from './Component/Home';
import { Route, Routes } from 'react-router-dom';
import Products from './Component/Products';
import Product from './Component/Product';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/products/:id" element={<Product />} />
      </Routes>
    </>
  );
}

export default App;
