import Navbar from './Component/Navbar';
import React from 'react';
import './App.css';
import Home from './Component/Home';
import { Route, Routes } from 'react-router-dom';
import Products from './Component/Products';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
      </Routes>
    </>
  );
}

export default App;
