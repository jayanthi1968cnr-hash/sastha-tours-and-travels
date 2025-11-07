// src/App.jsx

import React from 'react';
import { Routes, Route } from 'react-router-dom'; // 1. Import Routes and Route
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';

export default function App() {
  // 2. We no longer need useState or renderPage()

  return (
    <div className="app">
      {/* 3. Remove the setPage prop */}
      <Navbar /> 
      
      <main className="main-content">
        {/* 4. Use Routes to define your pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
}