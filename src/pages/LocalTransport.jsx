import React, { useState } from 'react';
import { Car, Users, Zap, Shield, Clock, CheckCircle, MapPin, Phone } from 'lucide-react';
import './LocalTransport.css';

const LocalTransport = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const vehicles = [
    {
      id: 1,
      name: 'Innova / Crysta',
      IconComponent: () => (
        <svg className="lt-vehicle-icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
        </svg>
      ),
      image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600&auto=format&fit=crop',
      capacity: '6-7 Seaters',
      description: 'Premium comfort SUV perfect for families and small groups.',
      features: ['AC', 'Spacious', 'Luggage Space', 'Comfortable Seats'],
      bestFor: 'Family Tours',
      priceRange: '₹14-18/km',
      category: 'suv'
    },
    {
      id: 2,
      name: 'Etios / Dzire',
      IconComponent: Car,
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&auto=format&fit=crop',
      capacity: '4 Seaters',
      description: 'Compact sedans ideal for couples and small families.',
      features: ['AC', 'Fuel Efficient', 'City Friendly', 'Budget Option'],
      bestFor: 'Airport Pickup',
      priceRange: '₹10-13/km',
      category: 'sedan'
    },
    {
      id: 3,
      name: 'Tempo Traveller',
      IconComponent: Users,
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&auto=format&fit=crop',
      capacity: '12-17 Seaters',
      description: 'Spacious vehicle for large groups and tour parties.',
      features: ['AC', 'Push-back Seats', 'Music System', 'Large Capacity'],
      bestFor: 'Group Tours',
      priceRange: '₹22-28/km',
      category: 'tempo'
    },
    {
      id: 4,
      name: 'Mini Bus',
      IconComponent: () => (
        <svg className="lt-vehicle-icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
        </svg>
      ),
      image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=600&auto=format&fit=crop',
      capacity: '20-35 Seaters',
      description: 'Perfect for corporate groups and large tour parties.',
      features: ['AC', 'Comfortable Seating', 'PA System', 'Ample Space'],
      bestFor: 'Corporate Events',
      priceRange: '₹35-45/km',
      category: 'bus'
    },
    {
      id: 5,
      name: 'Caravans',
      IconComponent: () => (
        <svg className="lt-vehicle-icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
        </svg>
      ),
      image: 'https://images.unsplash.com/photo-1527786356703-4b100091cd2c?w=600&auto=format&fit=crop',
      capacity: '4-6 Seaters',
      description: 'Luxury travel experience with home-like amenities.',
      features: ['Beds', 'Kitchen', 'Washroom', 'Living Space'],
      bestFor: 'Road Trips',
      priceRange: 'Custom Pricing',
      category: 'caravan'
    },
    {
      id: 6,
      name: 'Vintage Cars',
      IconComponent: () => (
        <svg className="lt-vehicle-icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
        </svg>
      ),
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&auto=format&fit=crop',
      capacity: '2-4 Seaters',
      description: 'Classic vintage cars for photo shoots and special occasions.',
      features: ['Classic Look', 'Photo Shoots', 'Events', 'Unique Style'],
      bestFor: 'Film Shoots',
      priceRange: 'Custom Pricing',
      category: 'vintage'
    }
  ];

  const benefits = [
    {
      IconComponent: Shield,
      title: 'Trained Drivers',
      description: 'Experienced and courteous drivers with local knowledge',
      highlight: 'Professional'
    },
    {
      IconComponent: CheckCircle,
      title: 'Clean & Comfortable',
      description: 'Well-maintained and sanitized vehicles for your safety',
      highlight: 'Hygienic'
    },
    {
      IconComponent: Clock,
      title: '24×7 Availability',
      description: 'Round-the-clock service for all your travel needs',
      highlight: 'Always Ready'
    },
    {
      IconComponent: MapPin,
      title: 'Hill-Station Expert',
      description: 'Skilled in navigating mountain roads and ghat sections',
      highlight: 'Local Expert'
    }
  ];

  const services = [
    { IconComponent: MapPin, name: 'Sightseeing Tours', icon: '🏞️' },
    { IconComponent: Phone, name: 'Airport Transfers', icon: '✈️' },
    { IconComponent: Users, name: 'Family Tours', icon: '👨‍👩‍👧‍👦' },
    { IconComponent: Shield, name: 'Corporate Travel', icon: '🏢' },
    { IconComponent: Zap, name: 'Film Shoots', icon: '🎬' },
    { IconComponent: Car, name: 'Outstation Trips', icon: '🛣️' }
  ];

  const handleWhatsAppClick = (vehicleType = '') => {
    const phoneNumber = '919342512112';
    const message = vehicleType 
      ? encodeURIComponent(`Hi, I would like to book ${vehicleType}. Please share availability and pricing.`)
      : encodeURIComponent('Hi, I would like to inquire about local transport services.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handleCallClick = () => {
    window.location.href = 'tel:+919342512112';
  };

  const filteredVehicles = activeTab === 'all' 
    ? vehicles 
    : vehicles.filter(v => v.category === activeTab);

  return (
    <div className="local-transport">
      {/* 3D Background Elements */}
      <div className="lt-3d-background">
        <div className="lt-3d-sphere lt-3d-sphere-1"></div>
        <div className="lt-3d-sphere lt-3d-sphere-2"></div>
        <div className="lt-3d-sphere lt-3d-sphere-3"></div>
      </div>

      {/* Hero Section with Clean Background */}
      <section className="lt-hero">
        <div className="lt-hero-bg" style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1600&auto=format&fit=crop)'
        }}>
          <div className="lt-hero-overlay"></div>
        </div>
        <div className="lt-hero-content">
          <div className="lt-hero-icon-group">
            <Car className="lt-car-icon" />
            <span className="lt-car-trail">- - - - -</span>
          </div>
          <h1 className="lt-hero-title">Comfortable Transport for Every Trip</h1>
          <p className="lt-hero-subtitle">
            Safe & Reliable Local Transport Services
          </p>
        </div>
      </section>

      {/* Description Section */}
      <section className="lt-description">
        <div className="lt-container">
          <div className="lt-description-content">
            <h2 className="lt-description-title">Your Journey, Our Priority</h2>
            <p className="lt-description-text">
              We provide reliable and safe local transport across Ooty, Coonoor, Kotagiri, 
              Coimbatore, and nearby districts. Suitable for sightseeing, airport pickups, 
              family tours, and outstation trips.
            </p>
            <div className="lt-description-stats">
              <div className="lt-stat-item-small">
                <Car className="lt-stat-icon-svg" />
                <div className="lt-stat-number-small">50+</div>
                <div className="lt-stat-label-small">Vehicles</div>
              </div>
              <div className="lt-stat-item-small">
                <Users className="lt-stat-icon-svg" />
                <div className="lt-stat-number-small">10K+</div>
                <div className="lt-stat-label-small">Happy Customers</div>
              </div>
              <div className="lt-stat-item-small">
                <MapPin className="lt-stat-icon-svg" />
                <div className="lt-stat-number-small">100+</div>
                <div className="lt-stat-label-small">Destinations</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="lt-services">
        <div className="lt-container">
          <h3 className="lt-services-title">Our Services</h3>
          <div className="lt-services-grid">
            {services.map((service, index) => {
              const IconComponent = service.IconComponent;
              return (
                <div key={index} className="lt-service-item">
                  <div className="lt-service-icon-wrapper">
                    <IconComponent className="lt-service-icon-svg" />
                  </div>
                  <span className="lt-service-name">{service.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vehicles Section */}
      <section className="lt-vehicles">
        <div className="lt-container">
          <h2 className="lt-section-title">Vehicles Available</h2>
          
          <div className="lt-vehicles-grid">
            {vehicles.map((vehicle) => {
              const IconComponent = vehicle.IconComponent;
              return (
                <div 
                  key={vehicle.id} 
                  className={`lt-vehicle-card ${selectedVehicle === vehicle.id ? 'active' : ''}`}
                  onMouseEnter={() => setSelectedVehicle(vehicle.id)}
                  onMouseLeave={() => setSelectedVehicle(null)}
                >
                  <div className="lt-vehicle-image">
                    <img src={vehicle.image} alt={vehicle.name} />
                    <div className="lt-vehicle-image-overlay">
                      <div className="lt-vehicle-icon-wrapper">
                        <IconComponent className="lt-vehicle-icon-svg" />
                      </div>
                    </div>
                  </div>
                  <div className="lt-vehicle-content">
                    <div className="lt-vehicle-header">
                      <h3 className="lt-vehicle-name">{vehicle.name}</h3>
                      <div className="lt-vehicle-capacity">{vehicle.capacity}</div>
                    </div>
                    <p className="lt-vehicle-description">{vehicle.description}</p>
                    
                    <div className="lt-vehicle-badges">
                      <span className="lt-vehicle-badge best-for">{vehicle.bestFor}</span>
                      <span className="lt-vehicle-badge price">{vehicle.priceRange}</span>
                    </div>

                    <div className="lt-vehicle-features">
                      <h4 className="lt-features-title">Features:</h4>
                      <div className="lt-features-tags">
                        {vehicle.features.map((feature, index) => (
                          <span key={index} className="lt-feature-tag">{feature}</span>
                        ))}
                      </div>
                    </div>

                    <button 
                      className="lt-vehicle-button"
                      onClick={() => handleWhatsAppClick(vehicle.name)}
                    >
                      Book Now →
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="lt-benefits">
        <div className="lt-container">
          <h2 className="lt-section-title">Why Choose Our Transport</h2>
          <div className="lt-benefits-grid">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.IconComponent;
              return (
                <div key={index} className="lt-benefit-card">
                  <div className="lt-benefit-icon-wrapper">
                    <IconComponent className="lt-benefit-icon-svg" />
                  </div>
                  <div className="lt-benefit-badge">{benefit.highlight}</div>
                  <h3 className="lt-benefit-title">{benefit.title}</h3>
                  <p className="lt-benefit-description">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section - Dark Gradient */}
      <section className="lt-cta">
        <div className="lt-container">
          <div className="lt-cta-card">
            <div className="lt-cta-icon">🎯</div>
            <h2 className="lt-cta-title">Book a Vehicle</h2>
            <p className="lt-cta-subtitle">Contact us now for instant booking and best rates</p>
            <div className="lt-cta-buttons">
              <button className="lt-cta-button whatsapp" onClick={() => handleWhatsAppClick()}>
                <svg className="lt-whatsapp-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Chat & Get Quote
              </button>
              <button className="lt-cta-button call" onClick={handleCallClick}>
                <svg className="lt-call-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                </svg>
                Call Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Footer */}
      <section className="lt-seo-footer">
        <div className="lt-container">
          <p className="lt-seo-text">
            Local cab and transport services in Ooty & Coonoor. Sastha Tours & Travels offers comprehensive 
            vehicle rental services including Innova Crysta, sedans, tempo travellers, mini buses, caravans, 
            and vintage cars with experienced drivers, 24/7 availability, and competitive rates for sightseeing, 
            airport transfers, and outstation trips.
          </p>
        </div>
      </section>
    </div>
  );
};

export default LocalTransport;