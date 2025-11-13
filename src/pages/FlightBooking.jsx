import React, { useState } from 'react';
import { Plane, Globe, MapPin, Calendar, Users, Shield, Clock, CheckCircle } from 'lucide-react';
import './FlightBooking.css';

const FlightBooking = () => {
  const [activeTab, setActiveTab] = useState('domestic');

  const bookingTypes = [
    {
      id: 1,
      IconComponent: Plane,
      name: 'One-Way',
      description: 'Single journey from origin to destination',
      bestFor: 'Solo trips',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&auto=format&fit=crop'
    },
    {
      id: 2,
      IconComponent: () => (
        <svg className="fb-booking-icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
        </svg>
      ),
      name: 'Round-Trip',
      description: 'Return journey with both flights booked together',
      bestFor: 'Save up to 20%',
      image: 'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=600&auto=format&fit=crop'
    },
    {
      id: 3,
      IconComponent: MapPin,
      name: 'Multi-City',
      description: 'Visit multiple destinations in one trip',
      bestFor: 'Complex itineraries',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&auto=format&fit=crop'
    },
    {
      id: 4,
      IconComponent: Users,
      name: 'Group Booking',
      description: 'Special rates for 10+ passengers',
      bestFor: 'Family & groups',
      image: 'https://images.unsplash.com/photo-1556388158-158ea5ccacbd?w=600&auto=format&fit=crop'
    }
  ];

  const flightCategories = [
    {
      id: 'domestic',
      title: 'Domestic Flights',
      icon: '🇮🇳',
      description: 'Travel anywhere within India with competitive fares',
      features: [
        'All major Indian cities',
        'Budget & premium airlines',
        'Flexible scheduling',
        'Quick booking process'
      ],
      popular: ['Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Kolkata', 'Hyderabad'],
      image: 'https://images.unsplash.com/photo-1569629743817-70d8db6c323b?w=800&auto=format&fit=crop'
    },
    {
      id: 'international',
      title: 'International Flights',
      icon: '🌍',
      description: 'Fly to any global destination with best rates',
      features: [
        'Worldwide destinations',
        'Multiple airline options',
        'Transit assistance',
        'Visa support available'
      ],
      popular: ['Dubai', 'Singapore', 'Malaysia', 'USA', 'UK', 'Australia'],
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&auto=format&fit=crop'
    }
  ];

  const benefits = [
    {
      IconComponent: Shield,
      title: 'Transparent Pricing',
      description: 'No hidden charges. What you see is what you pay.',
      highlight: 'Honest Fares'
    },
    {
      IconComponent: CheckCircle,
      title: 'Secure Payment Handling',
      description: 'Safe and encrypted payment processing for peace of mind.',
      highlight: '100% Safe'
    },
    {
      IconComponent: Clock,
      title: 'Instant Ticket Confirmation',
      description: 'Get your e-ticket immediately after successful booking.',
      highlight: 'Fast Delivery'
    },
    {
      IconComponent: () => (
        <svg className="fb-benefit-icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
        </svg>
      ),
      title: 'Refund & Reschedule Support',
      description: 'Flexible options for cancellations and date changes.',
      highlight: 'Full Support'
    }
  ];

  // Airlines with reliable logo URLs using alternative sources
  const airlines = [
    { 
      name: 'Air India', 
      logo: 'https://logos-world.net/wp-content/uploads/2023/01/Air-India-Logo.png',
      alt: 'Air India Logo'
    },
    { 
      name: 'IndiGo', 
      logo: 'https://logos-world.net/wp-content/uploads/2023/01/IndiGo-Logo.png',
      alt: 'IndiGo Logo'
    },
    { 
      name: 'SpiceJet', 
      logo: 'https://logos-world.net/wp-content/uploads/2023/01/SpiceJet-Logo.png',
      alt: 'SpiceJet Logo'
    },
    { 
      name: 'Vistara', 
      logo: 'https://logos-world.net/wp-content/uploads/2023/01/Vistara-Logo.png',
      alt: 'Vistara Logo'
    },
    { 
      name: 'Emirates', 
      logo: 'https://logos-world.net/wp-content/uploads/2020/03/Emirates-Logo.png',
      alt: 'Emirates Logo'
    },
    { 
      name: 'Singapore Airlines', 
      logo: 'https://logos-world.net/wp-content/uploads/2023/01/Singapore-Airlines-Logo.png',
      alt: 'Singapore Airlines Logo'
    },
    { 
      name: 'Air Asia', 
      logo: 'https://logos-world.net/wp-content/uploads/2023/01/AirAsia-Logo.png',
      alt: 'Air Asia Logo'
    },
    { 
      name: 'Qatar Airways', 
      logo: 'https://logos-world.net/wp-content/uploads/2023/01/Qatar-Airways-Logo.png',
      alt: 'Qatar Airways Logo'
    },
    { 
      name: 'British Airways', 
      logo: 'https://logos-world.net/wp-content/uploads/2020/03/British-Airways-Logo.png',
      alt: 'British Airways Logo'
    },
    { 
      name: 'Etihad Airways', 
      logo: 'https://logos-world.net/wp-content/uploads/2023/01/Etihad-Airways-Logo.png',
      alt: 'Etihad Airways Logo'
    },
    { 
      name: 'Lufthansa', 
      logo: 'https://logos-world.net/wp-content/uploads/2020/03/Lufthansa-Logo.png',
      alt: 'Lufthansa Logo'
    },
    { 
      name: 'Thai Airways', 
      logo: 'https://logos-world.net/wp-content/uploads/2023/01/Thai-Airways-Logo.png',
      alt: 'Thai Airways Logo'
    }
  ];

  const handleWhatsAppClick = (flightType = '') => {
    const phoneNumber = '919342512112';
    const message = flightType 
      ? encodeURIComponent(`Hi, I would like to book ${flightType} flights. Please help me with the best fares.`)
      : encodeURIComponent('Hi, I would like to check flight availability and fares.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handleCallClick = () => {
    window.location.href = 'tel:+919342512112';
  };

  return (
    <div className="flight-booking">
      {/* 3D Background Elements */}
      <div className="fb-3d-background">
        <div className="fb-3d-sphere fb-3d-sphere-1"></div>
        <div className="fb-3d-sphere fb-3d-sphere-2"></div>
        <div className="fb-3d-sphere fb-3d-sphere-3"></div>
      </div>

      {/* Hero Section with Clean Background */}
      <section className="fb-hero">
        <div className="fb-hero-bg" style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600&auto=format&fit=crop)'
        }}>
          <div className="fb-hero-overlay"></div>
        </div>
        <div className="fb-hero-content">
          <div className="fb-hero-icon-group">
            <Plane className="fb-plane-icon" />
            <span className="fb-plane-trail">- - - - -</span>
          </div>
          <h1 className="fb-hero-title">Easy & Affordable Flight Bookings</h1>
          <p className="fb-hero-subtitle">
            Your Trusted Partner for Domestic & International Travel
          </p>
        </div>
      </section>

      {/* Description Section */}
      <section className="fb-description">
        <div className="fb-container">
          <div className="fb-description-content">
            <h2 className="fb-description-title">Why Book Flights With Us?</h2>
            <p className="fb-description-text">
              We book domestic and international flights at the best available fares. Let us handle 
              the searching, comparing, and ticketing — while you enjoy a stress-free travel experience.
            </p>
            <div className="fb-description-stats">
              <div className="fb-stat-item-small">
                <Plane className="fb-stat-icon-svg" />
                <div className="fb-stat-number-small">1000+</div>
                <div className="fb-stat-label-small">Flights Booked</div>
              </div>
              <div className="fb-stat-item-small">
                <Users className="fb-stat-icon-svg" />
                <div className="fb-stat-number-small">5000+</div>
                <div className="fb-stat-label-small">Happy Travelers</div>
              </div>
              <div className="fb-stat-item-small">
                <Globe className="fb-stat-icon-svg" />
                <div className="fb-stat-number-small">50+</div>
                <div className="fb-stat-label-small">Destinations</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Types Section */}
      <section className="fb-booking-types">
        <div className="fb-container">
          <h2 className="fb-section-title">Booking Options</h2>
          <div className="fb-booking-grid">
            {bookingTypes.map((type) => {
              const IconComponent = type.IconComponent;
              return (
                <div key={type.id} className="fb-booking-card">
                  <div className="fb-booking-image">
                    <img src={type.image} alt={type.name} />
                    <div className="fb-booking-image-overlay">
                      <div className="fb-booking-icon-wrapper">
                        <IconComponent className="fb-booking-icon-svg" />
                      </div>
                    </div>
                  </div>
                  <div className="fb-booking-content">
                    <h3 className="fb-booking-name">{type.name}</h3>
                    <p className="fb-booking-description">{type.description}</p>
                    <div className="fb-booking-badge">{type.bestFor}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Flight Categories Section */}
      <section className="fb-categories">
        <div className="fb-container">
          <h2 className="fb-section-title">Flight Categories</h2>
          
          {/* Tab Navigation */}
          <div className="fb-tabs">
            {flightCategories.map((category) => (
              <button
                key={category.id}
                className={`fb-tab ${activeTab === category.id ? 'active' : ''}`}
                onClick={() => setActiveTab(category.id)}
              >
                <span className="fb-tab-icon">{category.icon}</span>
                <span className="fb-tab-label">{category.title}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="fb-tab-content">
            {flightCategories.map((category) => (
              <div
                key={category.id}
                className={`fb-category-panel ${activeTab === category.id ? 'active' : ''}`}
              >
                <div className="fb-category-card">
                  <div className="fb-category-image">
                    <img src={category.image} alt={category.title} />
                    <div className="fb-category-image-overlay"></div>
                  </div>
                  <div className="fb-category-info">
                    <div className="fb-category-header">
                      <span className="fb-category-icon">{category.icon}</span>
                      <h3 className="fb-category-title">{category.title}</h3>
                    </div>
                    <p className="fb-category-description">{category.description}</p>
                    
                    <div className="fb-category-features">
                      <h4 className="fb-features-title">Features:</h4>
                      <ul className="fb-features-list">
                        {category.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="fb-popular-destinations">
                      <h4 className="fb-popular-title">Popular Destinations:</h4>
                      <div className="fb-destination-tags">
                        {category.popular.map((destination, index) => (
                          <span key={index} className="fb-destination-tag">
                            {destination}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button 
                      className="fb-category-button"
                      onClick={() => handleWhatsAppClick(category.title)}
                    >
                      Get Best Fares →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Airlines Section with Real Logos */}
      <section className="fb-airlines">
        <div className="fb-container">
          <h3 className="fb-airlines-title">We Book with All Major Airlines</h3>
          <div className="fb-airlines-grid">
            {airlines.map((airline, index) => (
              <div key={index} className="fb-airline-item">
                <div className="fb-airline-logo-wrapper">
                  <img 
                    src={airline.logo} 
                    alt={airline.alt} 
                    className="fb-airline-logo"
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = `<div style="font-size: 2rem;">✈️</div>`;
                    }}
                  />
                </div>
                <span className="fb-airline-name">{airline.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="fb-benefits">
        <div className="fb-container">
          <h2 className="fb-section-title">Why Choose Us</h2>
          <div className="fb-benefits-grid">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.IconComponent;
              return (
                <div key={index} className="fb-benefit-card">
                  <div className="fb-benefit-icon-wrapper">
                    <IconComponent className="fb-benefit-icon-svg" />
                  </div>
                  <div className="fb-benefit-badge">{benefit.highlight}</div>
                  <h3 className="fb-benefit-title">{benefit.title}</h3>
                  <p className="fb-benefit-description">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section - Dark Gradient */}
      <section className="fb-cta">
        <div className="fb-container">
          <div className="fb-cta-card">
            <div className="fb-cta-icon">🎯</div>
            <h2 className="fb-cta-title">Check Flight Availability</h2>
            <p className="fb-cta-subtitle">Get instant quotes and book your tickets now</p>
            <div className="fb-cta-buttons">
              <button className="fb-cta-button whatsapp" onClick={() => handleWhatsAppClick()}>
                <svg className="fb-whatsapp-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Chat & Get Quote
              </button>
              <button className="fb-cta-button call" onClick={handleCallClick}>
                <svg className="fb-call-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                </svg>
                Call Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Footer */}
      <section className="fb-seo-footer">
        <div className="fb-container">
          <p className="fb-seo-text">
            Flight booking assistance from Coonoor & Nilgiris area. Sastha Tours & Travels offers comprehensive 
            domestic and international flight booking services with competitive fares, instant confirmation, 
            and 24/7 support for all major airlines including Air India, IndiGo, SpiceJet, Vistara, Emirates, 
            Singapore Airlines, and more.
          </p>
        </div>
      </section>
    </div>
  );
};

export default FlightBooking;