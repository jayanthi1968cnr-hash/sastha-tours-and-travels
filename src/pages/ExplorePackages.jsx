import React, { useState } from 'react';
import { Globe, MapPin, Mountain, Heart, Users, Building2, Hotel, Sparkles, Calendar } from 'lucide-react';
import './ExplorePackages.css';

const ExplorePackages = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const packageCategories = [
    {
      id: 1,
      IconComponent: Globe,
      title: 'International Tour Packages',
      description: 'See the world with tailor-made itineraries. We handle visa, passport, flights, stay, city tours, transfers, guides — everything.',
      destinations: ['Dubai', 'Singapore', 'Malaysia', 'Thailand', 'Bali', 'Europe'],
      buttonText: 'View Packages',
      color: '#667eea',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      link: '/international-tour',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&auto=format&fit=crop'
    },
    {
      id: 2,
      IconComponent: MapPin,
      title: 'Domestic Tour Packages',
      description: 'Discover India\'s unforgettable beauty. From mountains to beaches, temples to wildlife — choose from our expertly crafted routes.',
      destinations: ['Ooty', 'Kodaikanal', 'Kerala', 'Coorg', 'Mysore', 'Bangalore', 'Kanyakumari'],
      buttonText: 'Explore Packages',
      color: '#f97316',
      gradient: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
      link: '/domestic-tour',
      image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&auto=format&fit=crop'
    },
    {
      id: 3,
      IconComponent: Mountain,
      title: 'Ooty & Coonoor Local Packages',
      description: 'Perfect for day trips, sightseeing, and weekend escapes.',
      destinations: ['Rose Garden', 'Boat House', 'Doddabetta Peak', 'Tea Factory', 'Lamb\'s Rock', 'Dolphins Nose'],
      buttonText: 'View Local Plans',
      color: '#059669',
      gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
      link: '/local-packages',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&auto=format&fit=crop'
    },
    {
      id: 4,
      IconComponent: Heart,
      title: 'Honeymoon Special Packages',
      description: 'Romantic moments + premium stays + unforgettable memories.',
      destinations: ['Ooty', 'Munnar', 'Goa', 'Bali', 'Maldives'],
      features: ['Decorated Room', 'Candlelight Dinner', 'Private Cab'],
      buttonText: 'Explore Honeymoon',
      color: '#ec4899',
      gradient: 'linear-gradient(135deg, #ec4899 0%, #db2777 100%)',
      link: '/honeymoon-packages',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&auto=format&fit=crop'
    },
    {
      id: 5,
      IconComponent: Users,
      title: 'Family Tour Packages',
      description: 'Safe, comfortable, and fun for all age groups.',
      features: ['Flexible Itineraries', 'Child-Friendly Activities', 'Verified Hotels'],
      buttonText: 'View Family Options',
      color: '#0891b2',
      gradient: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
      link: '/family-packages',
      image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&auto=format&fit=crop'
    },
    {
      id: 6,
      IconComponent: Building2,
      title: 'Group & Corporate Packages',
      description: 'Designed for office teams, school/college tours, and large groups. We arrange transport, meals, accommodation, sightseeing, and activity planning.',
      buttonText: 'Explore Group Tours',
      color: '#2563eb',
      gradient: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
      link: '/group-packages',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&auto=format&fit=crop'
    },
    {
      id: 7,
      IconComponent: Hotel,
      title: 'Hotel + Tour Combo Packages',
      description: 'Stay + Sightseeing included = One simple price. Premium cottages, family villas, resorts, and hotel packages with complete city tours.',
      buttonText: 'View Combos',
      color: '#8b5cf6',
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
      link: '/combo-packages',
      image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&auto=format&fit=crop'
    },
    {
      id: 8,
      IconComponent: Sparkles,
      title: 'Luxury & Premium Experiences',
      description: 'For travellers who want the best. Private car, 4–5 star stays, curated meals, unique activities, and personal assistance.',
      buttonText: 'View Luxury Trips',
      color: '#d97706',
      gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
      link: '/luxury-packages',
      image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=600&auto=format&fit=crop'
    },
    {
      id: 9,
      IconComponent: Calendar,
      title: 'Seasonal & Festival Packages',
      description: 'Special packages created for different seasons.',
      features: ['Summer Hill-Station Getaways', 'Monsoon Retreats', 'Winter Special', 'Pongal / Diwali Tours'],
      buttonText: 'Explore Seasonal Offers',
      color: '#dc2626',
      gradient: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
      link: '/seasonal-packages',
      image: 'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?w=600&auto=format&fit=crop'
    }
  ];

  const whyChooseUs = [
    { 
      IconComponent: () => (
        <svg className="exp-why-svg-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
        </svg>
      ), 
      text: 'Personalized itineraries' 
    },
    { 
      IconComponent: () => (
        <svg className="exp-why-svg-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>
        </svg>
      ), 
      text: 'Passport & Visa Assistance' 
    },
    { 
      IconComponent: () => (
        <svg className="exp-why-svg-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
        </svg>
      ), 
      text: 'Experienced drivers' 
    },
    { 
      IconComponent: () => (
        <svg className="exp-why-svg-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
        </svg>
      ), 
      text: 'Verified hotels & cottages' 
    },
    { 
      IconComponent: () => (
        <svg className="exp-why-svg-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
        </svg>
      ), 
      text: '24/7 travel support' 
    },
    { 
      IconComponent: () => (
        <svg className="exp-why-svg-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      ), 
      text: 'Affordable pricing' 
    },
    { 
      IconComponent: () => (
        <svg className="exp-why-svg-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      ), 
      text: '100% transparent service' 
    }
  ];

  const handleWhatsAppClick = () => {
    const phoneNumber = '919342512112';
    const message = encodeURIComponent('Hi, I would like to explore your travel packages and get a quote.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handleCallClick = () => {
    window.location.href = 'tel:+919342512112';
  };

  return (
    <div className="explore-packages">
      {/* 3D Background Elements */}
      <div className="exp-3d-background">
        <div className="exp-3d-sphere exp-3d-sphere-1"></div>
        <div className="exp-3d-sphere exp-3d-sphere-2"></div>
        <div className="exp-3d-sphere exp-3d-sphere-3"></div>
        <div className="exp-3d-cube exp-3d-cube-1"></div>
        <div className="exp-3d-cube exp-3d-cube-2"></div>
      </div>

      {/* Hero Section with Banner */}
      <section className="exp-hero">
        <div className="exp-hero-bg" style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1600&auto=format&fit=crop)'
        }}>
          <div className="exp-hero-overlay"></div>
        </div>
        <div className="exp-hero-content">
          <div className="exp-hero-badge">
            <Sparkles className="exp-badge-icon" />
            Explore With Confidence
          </div>
          <h1 className="exp-hero-title">Explore Our Best Travel Packages</h1>
          <p className="exp-hero-subtitle">Where Every Journey Begins with Trust & Comfort</p>
          <div className="exp-hero-icons">
            <div className="exp-hero-icon-wrapper">
              <Globe className="exp-hero-icon-svg" />
            </div>
            <div className="exp-hero-icon-wrapper">
              <Mountain className="exp-hero-icon-svg" />
            </div>
            <div className="exp-hero-icon-wrapper">
              <Heart className="exp-hero-icon-svg" />
            </div>
            <div className="exp-hero-icon-wrapper">
              <Users className="exp-hero-icon-svg" />
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="exp-intro">
        <div className="exp-container">
          <div className="exp-intro-content">
            <h2 className="exp-intro-title">Welcome to the Curated World of Sastha Tours & Travels</h2>
            <p className="exp-intro-text">
              Whether you're dreaming of international adventures, peaceful hill-station escapes, 
              romantic getaways, or budget-friendly family trips — we've created packages for every 
              kind of traveller.
            </p>
            <div className="exp-intro-highlight">
              <Sparkles className="exp-highlight-icon-svg" />
              <span className="exp-highlight-text">
                All our tours are fully customizable based on your dates, group size, budget, and travel style.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Package Categories Section */}
      <section className="exp-categories">
        <div className="exp-container">
          <h2 className="exp-section-title">Explore by Category</h2>
          <div className="exp-categories-grid">
            {packageCategories.map((category) => {
              const IconComponent = category.IconComponent;
              return (
                <div
                  key={category.id}
                  className={`exp-category-card ${hoveredCard === category.id ? 'hovered' : ''}`}
                  onMouseEnter={() => setHoveredCard(category.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{ '--card-color': category.color }}
                >
                  {/* Header Image */}
                  {category.image && (
                    <div className="exp-card-image">
                      <img src={category.image} alt={category.title} />
                      <div className="exp-card-image-overlay" style={{ background: category.gradient }}></div>
                      <div className="exp-card-icon-absolute">
                        <IconComponent className="exp-card-icon-svg" />
                      </div>
                    </div>
                  )}

                  <div className="exp-card-content">
                    <h3 className="exp-card-title">{category.title}</h3>
                    <p className="exp-card-description">{category.description}</p>

                    {category.destinations && (
                      <div className="exp-card-destinations">
                        <div className="exp-destinations-label">
                          {category.id === 1 ? 'Popular Destinations:' : 
                           category.id === 2 ? 'Top Picks:' : 
                           category.id === 3 ? 'Includes:' :
                           'Destinations:'}
                        </div>
                        <div className="exp-destinations-tags">
                          {category.destinations.map((dest, index) => (
                            <span key={index} className="exp-destination-tag">
                              {dest}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {category.features && (
                      <div className="exp-card-features">
                        {category.features.map((feature, index) => (
                          <div key={index} className="exp-feature-item">
                            <svg className="exp-feature-check-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/>
                            </svg>
                            <span className="exp-feature-text">{feature}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    <button 
                      className="exp-card-button"
                      style={{ background: category.gradient }}
                      onClick={() => window.location.href = category.link}
                    >
                      {category.buttonText}
                      <svg className="exp-button-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                      </svg>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="exp-why-choose">
        <div className="exp-container">
          <h2 className="exp-section-title">Why Choose Sastha Tours & Travels?</h2>
          <div className="exp-why-grid">
            {whyChooseUs.map((item, index) => {
              const IconComponent = item.IconComponent;
              return (
                <div key={index} className="exp-why-item">
                  <div className="exp-why-icon-wrapper">
                    <IconComponent />
                  </div>
                  <span className="exp-why-text">{item.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Easy Booking Section */}
      <section className="exp-booking">
        <div className="exp-container">
          <div className="exp-booking-card">
            <div className="exp-booking-icon-wrapper">
              <svg className="exp-booking-svg-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h2 className="exp-booking-title">Ready to Book Your Trip?</h2>
            <p className="exp-booking-text">
              We'll plan everything for you — travel, stay, food, sightseeing, and more.
            </p>
            <div className="exp-booking-buttons">
              <button className="exp-booking-button whatsapp" onClick={handleWhatsAppClick}>
                <svg className="exp-button-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Chat & Get Quote
              </button>
              <button className="exp-booking-button call" onClick={handleCallClick}>
                <svg className="exp-button-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                </svg>
                Call Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Footer */}
      <section className="exp-seo-footer">
        <div className="exp-container">
          <p className="exp-seo-text">
            Sastha Tours & Travels offers customized tour packages across Tamil Nadu, Kerala, Karnataka, 
            and top international destinations. Based in Coonoor, The Nilgiris, we specialize in family trips, 
            honeymoon packages, group tours, corporate travel solutions, and luxury vacation planning.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ExplorePackages;