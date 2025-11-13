import React, { useState } from 'react';
import './DomesticTour.css';

const DomesticTour = () => {
  const [activePackage, setActivePackage] = useState(null);

  const packages = [
    {
      id: 1,
      name: 'Ooty & Coonoor',
      icon: '🏔️',
      image: 'https://images.unsplash.com/photo-1589182373954-d6688563b869?w=600&auto=format&fit=crop',
      description: 'Experience the Queen of Hill Stations with tea gardens, botanical gardens, and scenic train rides.',
      highlights: ['Botanical Gardens', 'Doddabetta Peak', 'Tea Estates', 'Toy Train'],
      duration: '2-3 Days',
      bestSeason: 'Year Round'
    },
    {
      id: 2,
      name: 'Kodaikanal',
      icon: '🌲',
      image: 'https://images.unsplash.com/photo-1593693411515-c202a012a225?w=600&auto=format&fit=crop',
      description: 'The Princess of Hill Stations offering serene lakes, misty valleys, and pine forests.',
      highlights: ['Kodai Lake', 'Coaker\'s Walk', 'Bryant Park', 'Pillar Rocks'],
      duration: '2-3 Days',
      bestSeason: 'Apr-Jun, Sep-Oct'
    },
    {
      id: 3,
      name: 'Munnar & Thekkady',
      icon: '☕',
      image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&auto=format&fit=crop',
      description: 'Kerala\'s tea paradise with lush green hills, waterfalls, and wildlife sanctuaries.',
      highlights: ['Tea Plantations', 'Periyar Wildlife', 'Mattupetty Dam', 'Eravikulam Park'],
      duration: '3-4 Days',
      bestSeason: 'Sep-Mar'
    },
    {
      id: 4,
      name: 'Wayanad',
      icon: '🦋',
      image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&auto=format&fit=crop',
      description: 'Nature lover\'s paradise with dense forests, coffee plantations, and ancient caves.',
      highlights: ['Edakkal Caves', 'Soochipara Falls', 'Banasura Dam', 'Wildlife Sanctuary'],
      duration: '2-3 Days',
      bestSeason: 'Oct-May'
    },
    {
      id: 5,
      name: 'Coorg',
      icon: '🌿',
      image: 'https://images.unsplash.com/photo-1580541631950-7282082b53ce?w=600&auto=format&fit=crop',
      description: 'The Scotland of India known for coffee estates, misty hills, and Kodava culture.',
      highlights: ['Abbey Falls', 'Raja\'s Seat', 'Coffee Estates', 'Dubare Elephant Camp'],
      duration: '2-3 Days',
      bestSeason: 'Oct-Mar'
    },
    {
      id: 6,
      name: 'Mysore & Bangalore',
      icon: '🏰',
      image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=600&auto=format&fit=crop',
      description: 'Royal heritage meets modern city life with palaces, gardens, and cultural experiences.',
      highlights: ['Mysore Palace', 'Chamundi Hills', 'Brindavan Gardens', 'Bangalore City'],
      duration: '3-4 Days',
      bestSeason: 'Oct-Feb'
    },
    {
      id: 7,
      name: 'Rameswaram & Kanyakumari',
      icon: '🌊',
      image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600&auto=format&fit=crop',
      description: 'Spiritual journey to the southernmost tip of India with temples and ocean views.',
      highlights: ['Ramanathaswamy Temple', 'Pamban Bridge', 'Vivekananda Rock', 'Sunset Point'],
      duration: '2-3 Days',
      bestSeason: 'Oct-Mar'
    }
  ];

  const benefits = [
    {
      icon: '📋',
      title: 'Personalized Itinerary',
      description: 'Custom travel plans tailored to your preferences and schedule'
    },
    {
      icon: '🏨',
      title: 'Verified Accommodation',
      description: 'Handpicked hotels and resorts ensuring comfort and safety'
    },
    {
      icon: '👨‍✈️',
      title: 'Trained Drivers & Guides',
      description: 'Experienced professionals for a smooth travel experience'
    },
    {
      icon: '💰',
      title: 'Flexible Pricing',
      description: 'Budget-friendly to luxury options for every traveler'
    }
  ];

  const handleWhatsAppClick = (packageName = '') => {
    const phoneNumber = '919342512112';
    const message = packageName 
      ? encodeURIComponent(`Hi, I'm interested in the ${packageName} package. Please share more details.`)
      : encodeURIComponent('Hi, I would like to know more about your domestic tour packages.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handleCallClick = () => {
    window.location.href = 'tel:+919342512112';
  };

  return (
    <div className="domestic-tour">
      {/* 3D Background Elements */}
      <div className="dt-3d-background">
        <div className="dt-3d-sphere dt-3d-sphere-1"></div>
        <div className="dt-3d-sphere dt-3d-sphere-2"></div>
        <div className="dt-3d-sphere dt-3d-sphere-3"></div>
      </div>

      {/* Hero Section with Clean Background Image */}
      <section className="dt-hero">
        <div className="dt-hero-bg" style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1600&auto=format&fit=crop)'
        }}>
          <div className="dt-hero-overlay"></div>
        </div>
        <div className="dt-hero-content">
          <div className="dt-hero-icon">🇮🇳</div>
          <h1 className="dt-hero-title">Discover India Like Never Before</h1>
          <p className="dt-hero-subtitle">
            Handpicked domestic travel experiences curated specially for you.
          </p>
        </div>
      </section>

      {/* Description Section */}
      <section className="dt-description">
        <div className="dt-container">
          <div className="dt-description-content">
            <h2 className="dt-description-title">Explore the Beauty of India</h2>
            <p className="dt-description-text">
              From snow-capped mountains to golden beaches, from royal forts to serene backwaters — 
              we bring you India's most beautiful destinations through safe, comfortable, and 
              well-planned tours.
            </p>
            <div className="dt-description-stats">
              <div className="dt-stat-item">
                <div className="dt-stat-icon">🏔️</div>
                <div className="dt-stat-number">20+</div>
                <div className="dt-stat-label">Destinations</div>
              </div>
              <div className="dt-stat-item">
                <div className="dt-stat-icon">😊</div>
                <div className="dt-stat-number">3000+</div>
                <div className="dt-stat-label">Happy Travelers</div>
              </div>
              <div className="dt-stat-item">
                <div className="dt-stat-icon">⭐</div>
                <div className="dt-stat-number">4.8/5</div>
                <div className="dt-stat-label">Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="dt-packages">
        <div className="dt-container">
          <h2 className="dt-section-title">Best-Selling Packages</h2>
          <div className="dt-packages-grid">
            {packages.map((pkg) => (
              <div 
                key={pkg.id} 
                className={`dt-package-card ${activePackage === pkg.id ? 'active' : ''}`}
                onMouseEnter={() => setActivePackage(pkg.id)}
                onMouseLeave={() => setActivePackage(null)}
              >
                <div className="dt-package-image">
                  <img src={pkg.image} alt={pkg.name} />
                  <div className="dt-package-overlay">
                    <span className="dt-package-icon">{pkg.icon}</span>
                  </div>
                </div>
                <div className="dt-package-content">
                  <h3 className="dt-package-name">{pkg.name}</h3>
                  <p className="dt-package-description">{pkg.description}</p>
                  
                  <div className="dt-package-meta">
                    <div className="dt-package-meta-item">
                      <span className="dt-meta-icon">⏱️</span>
                      <span className="dt-meta-text">{pkg.duration}</span>
                    </div>
                    <div className="dt-package-meta-item">
                      <span className="dt-meta-icon">🌤️</span>
                      <span className="dt-meta-text">{pkg.bestSeason}</span>
                    </div>
                  </div>

                  <div className="dt-package-highlights">
                    <h4 className="dt-highlights-title">Highlights:</h4>
                    <ul className="dt-highlights-list">
                      {pkg.highlights.map((highlight, index) => (
                        <li key={index}>{highlight}</li>
                      ))}
                    </ul>
                  </div>

                  <button 
                    className="dt-package-button"
                    onClick={() => handleWhatsAppClick(pkg.name)}
                  >
                    Inquire Now →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="dt-benefits">
        <div className="dt-container">
          <h2 className="dt-section-title">Why Choose Us</h2>
          <div className="dt-benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="dt-benefit-card">
                <div className="dt-benefit-icon">{benefit.icon}</div>
                <h3 className="dt-benefit-title">{benefit.title}</h3>
                <p className="dt-benefit-description">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="dt-cta">
        <div className="dt-container">
          <div className="dt-cta-card">
            <div className="dt-cta-icon">🎯</div>
            <h2 className="dt-cta-title">Book Your Domestic Holiday Now</h2>
            <p className="dt-cta-subtitle">Start planning your dream vacation today!</p>
            <div className="dt-cta-buttons">
              <button className="dt-cta-button whatsapp" onClick={() => handleWhatsAppClick()}>
                <svg className="dt-whatsapp-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Chat & Get Quote
              </button>
              <button className="dt-cta-button call" onClick={handleCallClick}>
                <svg className="dt-call-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                </svg>
                Call Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Footer */}
      <section className="dt-seo-footer">
        <div className="dt-container">
          <p className="dt-seo-text">
            Domestic travel packages available across Tamil Nadu, Kerala & Karnataka. Sastha Tours & Travels 
            specializes in customized tour packages to Ooty, Kodaikanal, Munnar, Coorg, Mysore, Wayanad, 
            Rameswaram, and Kanyakumari with comfortable accommodation, experienced drivers, and 24/7 support.
          </p>
        </div>
      </section>
    </div>
  );
};

export default DomesticTour;