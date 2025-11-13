import React, { useState } from 'react';
import { Globe, Plane, Shield, HeadphonesIcon, Calendar, MapPin, ChevronRight } from 'lucide-react';
import './InternationalTour.css';

const InternationalTour = () => {
  const [hoveredDestination, setHoveredDestination] = useState(null);

  const destinations = [
    { 
      name: 'Dubai', 
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&auto=format&fit=crop',
      description: 'Modern marvels & luxury'
    },
    { 
      name: 'Singapore', 
      image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=600&auto=format&fit=crop',
      description: 'Garden city of Asia'
    },
    { 
      name: 'Malaysia', 
      image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=600&auto=format&fit=crop',
      description: 'Cultural diversity & beauty'
    },
    { 
      name: 'Thailand', 
      image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=600&auto=format&fit=crop',
      description: 'Land of smiles'
    },
    { 
      name: 'Bali', 
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&auto=format&fit=crop',
      description: 'Island paradise'
    },
    { 
      name: 'Europe', 
      image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&auto=format&fit=crop',
      description: 'Historic wonders'
    }
  ];

  const highlights = [
    { 
      IconComponent: Calendar,
      title: 'Fully Customized Itineraries',
      description: 'Tailored to your preferences and travel style'
    },
    { 
      IconComponent: Shield,
      title: 'Visa & Documentation Assistance',
      description: 'Complete support for passports and visas'
    },
    { 
      IconComponent: Globe,
      title: 'All Package Types',
      description: 'Luxury, budget & group-friendly options'
    },
    { 
      IconComponent: MapPin,
      title: 'Guided Tours',
      description: 'Expert local guides and verified partners'
    },
    { 
      IconComponent: HeadphonesIcon,
      title: '24/7 Travel Support',
      description: 'Always here when you need us'
    }
  ];

  const handleWhatsAppClick = () => {
    const phoneNumber = '919342512112';
    const message = encodeURIComponent('Hi, I would like to inquire about international tour packages.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handleCallClick = () => {
    window.location.href = 'tel:+919342512112';
  };

  return (
    <div className="international-tour">
      {/* 3D Background Elements */}
      <div className="intl-3d-background">
        <div className="intl-3d-sphere intl-3d-sphere-1"></div>
        <div className="intl-3d-sphere intl-3d-sphere-2"></div>
        <div className="intl-3d-sphere intl-3d-sphere-3"></div>
        <div className="intl-3d-cube intl-3d-cube-1"></div>
        <div className="intl-3d-cube intl-3d-cube-2"></div>
      </div>

      {/* Hero Section */}
      <section className="intl-hero">
        <div className="intl-hero-bg" style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1600&auto=format&fit=crop)'
        }}>
          <div className="intl-hero-overlay"></div>
        </div>
        <div className="intl-hero-content">
          <div className="intl-hero-badge">
            <Globe className="intl-badge-icon" />
            International Travel Experts
          </div>
          <h1 className="intl-hero-title">Explore the World with Sastha Tours & Travels</h1>
          <p className="intl-hero-subtitle">
            Discover unforgettable international holidays crafted with care, comfort, and expert planning.
          </p>
          <div className="intl-hero-icons">
            <div className="intl-hero-icon-wrapper">
              <Plane className="intl-hero-icon-svg" />
            </div>
            <div className="intl-hero-icon-wrapper">
              <Globe className="intl-hero-icon-svg" />
            </div>
            <div className="intl-hero-icon-wrapper">
              <MapPin className="intl-hero-icon-svg" />
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="intl-intro">
        <div className="intl-container">
          <div className="intl-intro-content">
            <h2 className="intl-intro-title">Your Gateway to Global Adventures</h2>
            <p className="intl-intro-text">
              At Sastha, we design seamless international travel experiences tailored for families, 
              couples, solo travelers, corporate groups, and adventure lovers. From visas to flights, 
              hotels to sightseeing — we take care of every detail so you can simply enjoy your journey.
            </p>
            <div className="intl-intro-stats">
              <div className="intl-stat-item">
                <div className="intl-stat-number">50+</div>
                <div className="intl-stat-label">Countries</div>
              </div>
              <div className="intl-stat-item">
                <div className="intl-stat-number">5000+</div>
                <div className="intl-stat-label">Happy Travelers</div>
              </div>
              <div className="intl-stat-item">
                <div className="intl-stat-number">100%</div>
                <div className="intl-stat-label">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="intl-highlights">
        <div className="intl-container">
          <h2 className="intl-section-title">Why Choose Us for International Travel</h2>
          <div className="intl-highlights-grid">
            {highlights.map((highlight, index) => {
              const IconComponent = highlight.IconComponent;
              return (
                <div key={index} className="intl-highlight-card">
                  <div className="intl-highlight-icon">
                    <IconComponent className="intl-highlight-icon-svg" />
                  </div>
                  <h3 className="intl-highlight-title">{highlight.title}</h3>
                  <p className="intl-highlight-description">{highlight.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular Destinations Section */}
      <section className="intl-destinations">
        <div className="intl-container">
          <h2 className="intl-section-title">Popular Destinations</h2>
          <p className="intl-section-subtitle">Handpicked destinations for unforgettable experiences</p>
          <div className="intl-destinations-grid">
            {destinations.map((destination, index) => (
              <div 
                key={index} 
                className={`intl-destination-card ${hoveredDestination === index ? 'hovered' : ''}`}
                onMouseEnter={() => setHoveredDestination(index)}
                onMouseLeave={() => setHoveredDestination(null)}
              >
                <div className="intl-destination-image">
                  <img src={destination.image} alt={destination.name} />
                  <div className="intl-destination-overlay">
                    <div className="intl-destination-content">
                      <h3 className="intl-destination-name">{destination.name}</h3>
                      <p className="intl-destination-description">{destination.description}</p>
                      <button className="intl-destination-button">
                        Explore
                        <ChevronRight className="intl-button-arrow" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="intl-cta">
        <div className="intl-container">
          <div className="intl-cta-card">
            <div className="intl-cta-icon-wrapper">
              <svg className="intl-cta-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h2 className="intl-cta-title">Plan Your International Holiday Today</h2>
            <p className="intl-cta-subtitle">Get a personalized quote and start your dream journey</p>
            <div className="intl-cta-buttons">
              <button className="intl-cta-button whatsapp" onClick={handleWhatsAppClick}>
                <svg className="intl-whatsapp-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Chat & Get Quote
              </button>
              <button className="intl-cta-button call" onClick={handleCallClick}>
                <svg className="intl-call-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                </svg>
                Call Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Footer */}
      <section className="intl-seo-footer">
        <div className="intl-container">
          <p className="intl-seo-text">
            Sastha Tours & Travels offers trusted international holiday packages from Coonoor, Ooty, 
            Coimbatore, and across Tamil Nadu. We specialize in customized international tours to Dubai, 
            Singapore, Malaysia, Thailand, Bali, Europe, and 50+ destinations worldwide with complete 
            visa assistance, flight bookings, and 24/7 support.
          </p>
        </div>
      </section>
    </div>
  );
};

export default InternationalTour;