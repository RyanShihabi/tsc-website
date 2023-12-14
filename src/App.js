import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Home";
import Golf from "./Golf";
import CardCarousel from './CardCarousel';
import { FaSearch } from 'react-icons/fa';
import Logo from "./transparent.png"
import Grid from "./Grid"

import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/golf" element={<Golf />} />
      </Routes>
    </Router>
  );
}

export default App;
