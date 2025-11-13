// src/App.jsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Import all pages
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import About from './pages/About';
import Contact from './pages/Contact';

// Import new service pages
import InternationalTour from './pages/InternationalTour';
import DomesticTour from './pages/DomesticTour';
import PassportVisa from './pages/PassportVisa';
import HotelBooking from './pages/HotelBooking';
import Catering from './pages/Catering';
import FlightBooking from './pages/FlightBooking';
import LocalTransport from './pages/LocalTransport';
import Restaurant from './pages/Restaurant';
import ExplorePackages from './pages/ExplorePackages';

import './App.css';

export default function App() {
  return (
    <div className="app">
      <Navbar /> 
      
      <main className="main-content">
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Service Pages */}
          <Route path="/international-tour" element={<InternationalTour />} />
          <Route path="/domestic-tour" element={<DomesticTour />} />
          <Route path="/passport-visa" element={<PassportVisa />} />
          <Route path="/hotel-booking" element={<HotelBooking />} />
          <Route path="/catering" element={<Catering />} />
          <Route path="/flight-booking" element={<FlightBooking />} />
          <Route path="/local-transport" element={<LocalTransport />} />
          <Route path="/restaurant" element={<Restaurant />} />
          <Route path="/explore-packages" element={<ExplorePackages />} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
}