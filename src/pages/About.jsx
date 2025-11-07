import React from 'react';
import './About.css';
// Import the image you just saved to your assets folder
import aboutImage from '../assets/sastha-about.jpg'; 

const About = () => {
  return (
    <div className="about-page">
      <div className="about-container">
        <div className="about-header">
          <h2 className="about-subtitle">Welcome to Sastha</h2>
          <p className="about-title">
            Sastha Tours & Travels
          </p>
          <p className="about-intro">
            Founded by <strong>S. Praveen Kumar</strong> and based in the heart of <strong>Coonoor, The Nilgiris</strong>, our mission is to provide a true <strong>"A to Z Service"</strong> for your every travel need. We are a passionate local team dedicated to making your journey unforgettable.
          </p>
        </div>

        <div className="about-content">
          <div className="about-grid">
            <div className="about-text">
              <h3 className="section-title">Our Services</h3>
              <p className="section-paragraph">
                We specialize in creating tailor-made experiences. From local sightseeing in <strong>Ooty (Rose Garden, Boat House, Tea Factory)</strong> to multi-day <strong>Tour Packages</strong> across <strong>Tamilnadu, Kerala, and Karnataka</strong>, we handle it all. We arrange everything from <strong>International Tours</strong> and <strong>Passport/Visa</strong> assistance to booking <strong>Cottages, Resorts & Star Hotels</strong>.
              </p>
              <p className="section-paragraph">
                Our 'A to Z' promise extends to specialized services like <strong>Travel Arrangements</strong> (Innova, Tempo Traveller, mini bus), <strong>Shooting Locations</strong>, and <strong>Vehicles for film shoots</strong> (including Vintage Cars & Caravans). We also provide full <strong>Catering Services</strong> (South Indian, North Indian, Chinese, and more) delivered directly to your location. With our experienced, friendly drivers, we guarantee a budget-friendly and memorable experience.
              </p>
            </div>
            <div className="about-image-wrapper">
              <img 
                className="about-image" 
                src={aboutImage} 
                alt="Sastha Tours & Travels"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;