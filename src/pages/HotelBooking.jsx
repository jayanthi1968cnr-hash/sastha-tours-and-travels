import React, { useState } from 'react';
import './HotelBooking.css';

const HotelBooking = () => {
  const [selectedType, setSelectedType] = useState(null);

  const accommodationTypes = [
    {
      id: 1,
      icon: '',
      name: 'Budget Hotels',
      description: 'Comfortable and affordable stays perfect for budget-conscious travelers.',
      features: ['Clean Rooms', 'Basic Amenities', 'Prime Locations', 'Value for Money'],
      priceRange: '₹800 - ₹2,000',
      image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&auto=format&fit=crop'
    },
    {
      id: 2,
      icon: '',
      name: 'Premium Hotels',
      description: 'Upscale accommodations with modern facilities and excellent service.',
      features: ['AC Rooms', 'Room Service', 'Wi-Fi', 'TV & Amenities'],
      priceRange: '₹2,000 - ₹5,000',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&auto=format&fit=crop'
    },
    {
      id: 3,
      icon: '',
      name: 'Luxury Resorts',
      description: 'Five-star experience with world-class amenities and hospitality.',
      features: ['Spa & Pool', 'Fine Dining', 'Concierge', 'Premium Service'],
      priceRange: '₹5,000+',
      image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&auto=format&fit=crop'
    },
    {
      id: 4,
      icon: '',
      name: 'Private Cottages',
      description: 'Secluded cottages offering privacy and tranquility in nature.',
      features: ['Private Space', 'Kitchen', 'Garden Area', 'Peaceful Setting'],
      priceRange: '₹3,000 - ₹7,000',
      image: 'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=600&auto=format&fit=crop'
    },
    {
      id: 5,
      icon: '',
      name: 'Heritage Stays',
      description: 'Experience history and culture in beautifully restored heritage properties.',
      features: ['Historic Ambiance', 'Traditional Decor', 'Cultural Experience', 'Unique Architecture'],
      priceRange: '₹4,000 - ₹10,000',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&auto=format&fit=crop'
    },
    {
      id: 6,
      icon: '',
      name: 'Hill-view Villas',
      description: 'Stunning mountain views with luxurious villa accommodations.',
      features: ['Scenic Views', 'Spacious Rooms', 'Private Balcony', 'Modern Facilities'],
      priceRange: '₹5,000 - ₹12,000',
      image: 'https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?w=600&auto=format&fit=crop'
    }
  ];

  const features = [
    {
      icon: '✓',
      title: 'Verified Properties',
      description: 'All accommodations are personally verified for quality and safety'
    },
    {
      icon: '✓',
      title: 'Clean & Safe Rooms',
      description: 'Hygiene standards maintained with regular sanitization'
    },
    {
      icon: '✓',
      title: 'Breakfast & Meal Add-ons',
      description: 'Flexible meal plans including breakfast, lunch, and dinner options'
    },
    {
      icon: '✓',
      title: 'Discounted Group Rates',
      description: 'Special pricing for family trips and group bookings'
    }
  ];

  const handleWhatsAppClick = (accommodationType = '') => {
    const phoneNumber = '919342512112';
    const message = accommodationType 
      ? encodeURIComponent(`Hi, I'm interested in booking ${accommodationType}. Please share availability and rates.`)
      : encodeURIComponent('Hi, I would like to inquire about hotel room bookings.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handleCallClick = () => {
    window.location.href = 'tel:+919342512112';
  };

  return (
    <div className="hotel-booking">
      {/* 3D Background Elements */}
      <div className="hb-3d-background">
        <div className="hb-3d-sphere hb-3d-sphere-1"></div>
        <div className="hb-3d-sphere hb-3d-sphere-2"></div>
        <div className="hb-3d-sphere hb-3d-sphere-3"></div>
      </div>

      {/* Hero Section with Clean Background */}
      <section className="hb-hero">
        <div className="hb-hero-bg" style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&auto=format&fit=crop)'
        }}>
          <div className="hb-hero-overlay"></div>
        </div>
        <div className="hb-hero-content">
          <div className="hb-hero-icon">🏨</div>
          <h1 className="hb-hero-title">Find Your Perfect Stay</h1>
          <p className="hb-hero-subtitle">Hotels, Resorts & Cottages</p>
        </div>
      </section>

      {/* Description Section */}
      <section className="hb-description">
        <div className="hb-container">
          <div className="hb-description-content">
            <h2 className="hb-description-title">Your Comfort, Our Priority</h2>
            <p className="hb-description-text">
              We partner with verified hotels, homestays, resorts, luxury villas, and cottages to 
              offer the best stay options for every budget. Whether you're looking for a simple room 
              or a premium resort, we arrange everything.
            </p>
            <div className="hb-description-stats">
              <div className="hb-stat-item-small">
                <div className="hb-stat-icon-small">🏨</div>
                <div className="hb-stat-number-small">500+</div>
                <div className="hb-stat-label-small">Partner Hotels</div>
              </div>
              <div className="hb-stat-item-small">
                <div className="hb-stat-icon-small">😊</div>
                <div className="hb-stat-number-small">10K+</div>
                <div className="hb-stat-label-small">Happy Guests</div>
              </div>
              <div className="hb-stat-item-small">
                <div className="hb-stat-icon-small">📍</div>
                <div className="hb-stat-number-small">50+</div>
                <div className="hb-stat-label-small">Destinations</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accommodation Types Section */}
      <section className="hb-accommodation">
        <div className="hb-container">
          <h2 className="hb-section-title">Options We Offer</h2>
          <div className="hb-accommodation-grid">
            {accommodationTypes.map((type) => (
              <div
                key={type.id}
                className={`hb-accommodation-card ${selectedType === type.id ? 'active' : ''}`}
                onMouseEnter={() => setSelectedType(type.id)}
                onMouseLeave={() => setSelectedType(null)}
              >
                <div className="hb-card-image">
                  <img src={type.image} alt={type.name} />
                  <div className="hb-card-image-overlay">
                    <span className="hb-card-icon">{type.icon}</span>
                  </div>
                  <div className="hb-card-badge">{type.priceRange}</div>
                </div>
                
                <div className="hb-card-content">
                  <h3 className="hb-card-title">{type.name}</h3>
                  <p className="hb-card-description">{type.description}</p>
                  
                  <div className="hb-card-features">
                    {type.features.map((feature, index) => (
                      <div key={index} className="hb-feature-tag">
                        <span className="hb-feature-check">✓</span>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <button 
                    className="hb-card-button"
                    onClick={() => handleWhatsAppClick(type.name)}
                  >
                    Check Availability →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="hb-features">
        <div className="hb-container">
          <h2 className="hb-section-title">Why Book With Us</h2>
          <div className="hb-features-grid">
            {features.map((feature, index) => (
              <div key={index} className="hb-feature-card">
                <div className="hb-feature-icon-wrapper">
                  <span className="hb-feature-icon">{feature.icon}</span>
                </div>
                <h3 className="hb-feature-title">{feature.title}</h3>
                <p className="hb-feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="hb-cta">
        <div className="hb-container">
          <div className="hb-cta-card">
            <div className="hb-cta-icon">🎯</div>
            <h2 className="hb-cta-title">Contact Us for Room Availability & Special Rates</h2>
            <p className="hb-cta-subtitle">Get instant quotes and personalized recommendations</p>
            <div className="hb-cta-buttons">
              <button className="hb-cta-button whatsapp" onClick={() => handleWhatsAppClick()}>
                <svg className="hb-whatsapp-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Chat & Get Quote
              </button>
              <button className="hb-cta-button call" onClick={handleCallClick}>
                <svg className="hb-call-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                </svg>
                Call Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Footer */}
      <section className="hb-seo-footer">
        <div className="hb-container">
          <p className="hb-seo-text">
            Hotel booking services for Ooty, Coonoor, and all major tourist locations. Sastha Tours & Travels 
            provides comprehensive hotel and accommodation booking services including budget hotels, premium hotels, 
            luxury resorts, private cottages, heritage stays, and hill-view villas with verified properties and 24/7 support.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HotelBooking;