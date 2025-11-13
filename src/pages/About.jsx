import React from 'react';
import { Award, Heart, MapPin, Users, Quote } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section with Premium Image */}
      <div className="about-hero">
        {/* Team/Travel related hero image */}
        <div className="about-hero-bg" style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=1920&auto=format&fit=crop&q=80)'}}>
          <div className="about-hero-overlay"></div>
        </div>
        <div className="hero-content">
          <div className="hero-icon-group">
            <Heart className="hero-heart-icon" />
          </div>
          <h1 className="hero-title">Welcome to Sastha Tours & Travels</h1>
          <p className="hero-tagline"></p>
          <div className="hero-stats">
            <div className="hero-stat-item">
              <Award className="stat-icon" />
              <div className="stat-content">
                <span className="stat-number">15+</span>
                <span className="stat-label">Years Experience</span>
              </div>
            </div>
            <div className="hero-stat-item">
              <Users className="stat-icon" />
              <div className="stat-content">
                <span className="stat-number">10K+</span>
                <span className="stat-label">Happy Travelers</span>
              </div>
            </div>
            <div className="hero-stat-item">
              <MapPin className="stat-icon" />
              <div className="stat-content">
                <span className="stat-number">100+</span>
                <span className="stat-label">Destinations</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="about-container">
        <div className="story-section">
          <div className="story-content">
            <p className="story-text">
              In the misty mountains of <strong>Coonoor</strong>, nestled deep in the heart of <strong>The Nilgiris</strong>, 
              Sastha Tours & Travels was founded by <strong>Praveen Kumar</strong> with a simple idea —
              to create travel experiences that feel <em>personal, effortless, and unforgettable</em>.
            </p>
            <p className="story-text">
              What started as a small local service has grown into a complete <strong>"A to Z Travel Solution"</strong>, 
              trusted by families, tourists, filmmakers, and adventurers across India.
            </p>
            <p className="story-highlight">
              Because for us, travel is not just about reaching a destination —<br />
              it's about <strong>crafting memories that stay with you for a lifetime</strong>.
            </p>
          </div>
        </div>

        {/* Founder Section */}
        <div className="founder-section">
          <h2 className="section-heading">👨‍💼 Meet Our Founder</h2>
          <div className="founder-card">
            <div className="founder-image-wrapper">
              <img 
                className="founder-image" 
                src="/assets/images/founder.jpg"
                alt="Praveen Kumar - Founder"
                onError={(e) => {
                  e.target.src = '';
                }}
              />
              <div className="founder-badge">
                <Quote className="quote-icon" />
              </div>
            </div>
            <div className="founder-content">
              <h3 className="founder-name">Praveen Kumar</h3>
              <p className="founder-designation">Founder & Managing Director</p>
              <div className="founder-quote">
                <Quote className="quote-icon-large" />
                <p className="founder-message">
                  "My vision has always been simple – to create travel experiences that feel like home, 
                  where every guest is treated like family. With over 15 years of passion and dedication, 
                  Sastha Tours & Travels has become a trusted name in The Nilgiris. We don't just plan trips; 
                  we craft memories that last a lifetime."
                </p>
              </div>
              <div className="founder-achievements">
                <div className="achievement-item">
                  <Award className="achievement-icon" />
                  <span>15+ Years of Excellence</span>
                </div>
                <div className="achievement-item">
                  <Users className="achievement-icon" />
                  <span>10,000+ Happy Customers</span>
                </div>
                <div className="achievement-item">
                  <Heart className="achievement-icon" />
                  <span>Local Expert & Guide</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="philosophy-section">
          <h2 className="section-heading">✨ Our Story & Philosophy</h2>
          <div className="philosophy-grid">
            <div className="philosophy-text">
              <p className="philosophy-belief">
                Sastha was built with one belief:<br />
                <strong>Every guest deserves a journey that feels premium, yet personal.</strong>
              </p>
              <p className="section-paragraph">
                We are not just a travel service.<br />
                We are <strong>locals who know every curve of the hills</strong>, every quiet viewpoint, 
                every hidden waterfall, and every sunrise worth chasing.
              </p>
              <p className="section-paragraph">
                With years of experience, passion, and genuine hospitality, our team ensures that 
                every trip — whether a short Coonoor visit or a long international vacation — 
                feels <strong>smooth, safe, and carefully curated</strong>.
              </p>
            </div>
            <div className="philosophy-image-wrapper">
              <img 
                className="philosophy-image" 
                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&auto=format&fit=crop&q=80"
                alt="Tea gardens in Nilgiris"
              />
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="services-section">
          <h2 className="section-heading">🌍 What We Do</h2>
          
          {/* Travel Experiences */}
          <div className="service-block">
            <h3 className="service-title">Tailor-Made Travel Experiences</h3>
            <p className="service-intro">
              We design journeys that fit your style — honeymoon, family vacation, group trip, 
              luxury getaway, or adventure travel.
            </p>
            <div className="service-grid">
              <div className="service-card">
                <h4 className="card-title">🏔️ Ooty & Coonoor Sightseeing</h4>
                <p className="card-text">
                  Rose Garden, Boat House, Doddabetta Peak, Tea Factory & more
                </p>
              </div>
              <div className="service-card">
                <h4 className="card-title">🌴 Tamil Nadu, Kerala & Karnataka Tours</h4>
                <p className="card-text">
                  From temples to beaches to hill stations
                </p>
              </div>
              <div className="service-card">
                <h4 className="card-title">✈️ Premium International Tours</h4>
                <p className="card-text">
                  Visa, passport, flight booking, itinerary planning — everything done for you
                </p>
              </div>
            </div>
          </div>

          {/* Accommodation */}
          <div className="service-block">
            <h3 className="service-title">🏨 Stay, Comfort & Luxury</h3>
            <p className="service-intro">We arrange stays across all categories:</p>
            <div className="amenities-list">
              <div className="amenity-item">✓ Cozy cottages</div>
              <div className="amenity-item">✓ Premium resorts</div>
              <div className="amenity-item">✓ Luxury & star hotels</div>
              <div className="amenity-item">✓ Heritage properties in the Nilgiris</div>
            </div>
            <p className="service-note">
              Every stay is verified for quality, comfort, and safety.
            </p>
          </div>

          {/* Transport */}
          <div className="service-block">
            <h3 className="service-title">🚗 Travel Made Easy</h3>
            <p className="service-intro">Our fleet includes:</p>
            <div className="fleet-grid">
              <div className="fleet-item">Innova & Crysta</div>
              <div className="fleet-item">Tempo Traveller</div>
              <div className="fleet-item">Mini Bus</div>
              <div className="fleet-item">Sedan & SUV options</div>
              <div className="fleet-item">Vintage cars for photo shoots</div>
              <div className="fleet-item">Caravans for film crews</div>
            </div>
            <p className="service-note">
              All driven by <strong>experienced, friendly drivers</strong> who know every shortcut and scenic route.
            </p>
          </div>

          {/* Film Support */}
          <div className="service-block">
            <h3 className="service-title">🎬 Film & Shooting Support</h3>
            <p className="service-intro">
              From travel to location scouting, we offer complete support for:
            </p>
            <div className="support-list">
              <span className="support-tag">Film crews</span>
              <span className="support-tag">Commercial shoots</span>
              <span className="support-tag">Pre-wedding shoots</span>
              <span className="support-tag">Ad films</span>
            </div>
            <p className="service-note">
              We also provide vintage cars, caravans, and special-purpose vehicles exclusively for shoot requirements.
            </p>
          </div>

          {/* Catering */}
          <div className="service-block">
            <h3 className="service-title">🍽️ Catering – Delivered Anywhere</h3>
            <p className="service-intro">Our professional catering team offers:</p>
            <div className="cuisine-list">
              <span className="cuisine-tag">South Indian</span>
              <span className="cuisine-tag">North Indian</span>
              <span className="cuisine-tag">Chinese</span>
              <span className="cuisine-tag">Continental</span>
              <span className="cuisine-tag">Special requests</span>
            </div>
            <p className="service-note">
              Perfect for tours, events, shoots, group travel, or on-location service.
            </p>
          </div>
        </div>

        {/* Promise Section */}
        <div className="promise-section">
          <h2 className="section-heading">🧭 Our Promise – "A to Z Service"</h2>
          <p className="promise-intro">
            At Sastha Tours & Travels, we don't just arrange trips —<br />
            <strong>we take care of everything:</strong>
          </p>
          <div className="promise-grid">
            <div className="promise-item">✔ Travel planning</div>
            <div className="promise-item">✔ Transport</div>
            <div className="promise-item">✔ Stays</div>
            <div className="promise-item">✔ Food</div>
            <div className="promise-item">✔ Permits</div>
            <div className="promise-item">✔ On-site assistance</div>
            <div className="promise-item">✔ Personalized support</div>
          </div>
          <p className="promise-closing">
            So you can <strong>relax, explore, and enjoy your journey</strong> without a single worry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;