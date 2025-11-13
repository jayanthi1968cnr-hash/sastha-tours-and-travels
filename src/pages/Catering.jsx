import React, { useState, useEffect } from 'react';
import { UtensilsCrossed, Users, Truck, ChefHat, Clock, Shield, MapPin, Phone, Star, CheckCircle } from 'lucide-react';
import './Catering.css';

const Catering = () => {
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Local images from assets/images folder with Unsplash fallbacks
  const heroImages = [
    {
      src: '/assets/images/catering-1.jpeg',
      
      alt: 'Professional Catering Service'
    },
    {
      src: '/assets/images/catering-2.jpg',
      fallback: 'https://images.unsplash.com/photo-1567337710282-00832b415979?w=1600&auto=format&fit=crop',
      alt: 'Delicious Food Spread'
    },
    {
      src: '/assets/images/catering-3.jpg',
      fallback: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&auto=format&fit=crop',
      alt: 'Event Catering Setup'
    }
  ];

  // Auto-scroll carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const goToSlide = (index) => {
    setCurrentImageIndex(index);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? heroImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const menus = [
    {
      id: 1,
      IconComponent: ChefHat,
      name: 'South Indian',
      description: 'Authentic flavors with dosas, idlis, sambar, rasam, and traditional curries.',
      image: 'https://images.unsplash.com/photo-1567337710282-00832b415979?w=600&auto=format&fit=crop',
      items: ['Idli & Dosa', 'Sambar & Rasam', 'Rice Varieties', 'Traditional Curries', 'Filter Coffee'],
      color: '#dc2626'
    },
    {
      id: 2,
      IconComponent: UtensilsCrossed,
      name: 'North Indian',
      description: 'Rich and aromatic dishes including paneer, dal, roti, and biryanis.',
      image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&auto=format&fit=crop',
      items: ['Paneer Dishes', 'Dal Varieties', 'Naan & Roti', 'Biryani', 'Tandoori Items'],
      color: '#ea580c'
    },
    {
      id: 3,
      IconComponent: () => (
        <svg className="cat-menu-icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"/>
        </svg>
      ),
      name: 'Chinese',
      description: 'Popular Indo-Chinese favorites with noodles, fried rice, and manchurian.',
      image: 'https://images.unsplash.com/photo-1617196035154-0a7465be3e32?w=600&auto=format&fit=crop',
      items: ['Fried Rice', 'Noodles', 'Manchurian', 'Spring Rolls', 'Chilli Dishes'],
      color: '#d97706'
    },
    {
      id: 4,
      IconComponent: () => (
        <svg className="cat-menu-icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
        </svg>
      ),
      name: 'Continental',
      description: 'Western cuisine with pasta, sandwiches, soups, and baked dishes.',
      image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&auto=format&fit=crop',
      items: ['Pasta', 'Sandwiches', 'Soups', 'Baked Items', 'Salads'],
      color: '#059669'
    },
    {
      id: 5,
      IconComponent: Star,
      name: 'Customized Menus',
      description: 'Tell us your preferences and dietary needs - we\'ll create a special menu just for you.',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&auto=format&fit=crop',
      items: ['Special Diets', 'Fusion Menu', 'Theme-based', 'Budget Options', 'Your Choice'],
      color: '#7c3aed'
    }
  ];

  const features = [
    {
      IconComponent: Truck,
      title: 'Delivered Anywhere',
      description: 'Coonoor, Ooty, Kotagiri & surrounding areas',
      highlight: 'Wide Coverage'
    },
    {
      IconComponent: Users,
      title: 'Large & Small Batch Orders',
      description: 'From 10 to 1000+ servings with the same quality',
      highlight: 'Any Quantity'
    },
    {
      IconComponent: CheckCircle,
      title: 'Veg & Non-Veg Options',
      description: 'Extensive menu choices for all preferences',
      highlight: 'All Preferences'
    },
    {
      IconComponent: ChefHat,
      title: 'On-site Service Available',
      description: 'Professional chefs and servers at your venue',
      highlight: 'Full Service'
    }
  ];

  const occasions = [
    { IconComponent: Users, name: 'Tour Groups' },
    { IconComponent: () => (
      <svg className="cat-occasion-icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
      </svg>
    ), name: 'Film Shoots' },
    { IconComponent: () => (
      <svg className="cat-occasion-icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    ), name: 'Events & Parties' },
    { IconComponent: Users, name: 'Family Gatherings' },
    { IconComponent: Shield, name: 'Corporate Events' },
    { IconComponent: () => (
      <svg className="cat-occasion-icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
      </svg>
    ), name: 'Weddings' }
  ];

  const handleWhatsAppClick = (menuType = '') => {
    const phoneNumber = '919342512112';
    const message = menuType 
      ? encodeURIComponent(`Hi, I'm interested in ${menuType} catering. Please share the menu and pricing.`)
      : encodeURIComponent('Hi, I would like to inquire about your catering services.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handleCallClick = () => {
    window.location.href = 'tel:+919342512112';
  };

  // Handle image error and fallback
  const handleImageError = (e, fallbackUrl) => {
    e.target.src = fallbackUrl;
  };

  return (
    <div className="catering">
      {/* 3D Background Elements */}
      <div className="cat-3d-background">
        <div className="cat-3d-sphere cat-3d-sphere-1"></div>
        <div className="cat-3d-sphere cat-3d-sphere-2"></div>
        <div className="cat-3d-sphere cat-3d-sphere-3"></div>
      </div>

      {/* Hero Section with Image Carousel */}
      <section className="cat-hero">
        <div className="cat-hero-carousel">
          <div className="cat-hero-carousel-inner">
            {heroImages.map((image, index) => (
              <div
                key={index}
                className={`cat-hero-carousel-slide ${index === currentImageIndex ? 'active' : ''}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  onError={(e) => handleImageError(e, image.fallback)}
                  className="cat-hero-carousel-img"
                />
                <div className="cat-hero-overlay"></div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button className="cat-hero-carousel-arrow cat-hero-carousel-prev" onClick={goToPrevious}>
            ‹
          </button>
          <button className="cat-hero-carousel-arrow cat-hero-carousel-next" onClick={goToNext}>
            ›
          </button>

          {/* Dots Indicator */}
          <div className="cat-hero-carousel-dots">
            {heroImages.map((_, index) => (
              <button
                key={index}
                className={`cat-hero-carousel-dot ${index === currentImageIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>

        <div className="cat-hero-content">
          <div className="cat-hero-icon-group">
            <UtensilsCrossed className="cat-utensils-icon" />
          </div>
          <h1 className="cat-hero-title">Delicious Food, Delivered to Your Event</h1>
          <p className="cat-hero-subtitle">
            Fresh, Hygienic & Flavorful Catering Services
          </p>
        </div>
      </section>

      {/* Description Section */}
      <section className="cat-description">
        <div className="cat-container">
          <div className="cat-description-content">
            <h2 className="cat-description-title">Catering Excellence</h2>
            <p className="cat-description-text">
              Our catering team brings you fresh, hygienic, and flavorful food cooked by experienced 
              chefs — perfect for tours, groups, film shoots, events, gatherings, or home functions.
            </p>
            <div className="cat-description-stats">
              <div className="cat-stat-item-small">
                <UtensilsCrossed className="cat-stat-icon-svg" />
                <div className="cat-stat-number-small">1000+</div>
                <div className="cat-stat-label-small">Events Catered</div>
              </div>
              <div className="cat-stat-item-small">
                <Users className="cat-stat-icon-svg" />
                <div className="cat-stat-number-small">50K+</div>
                <div className="cat-stat-label-small">Meals Served</div>
              </div>
              <div className="cat-stat-item-small">
                <Star className="cat-stat-icon-svg" />
                <div className="cat-stat-number-small">5-Star</div>
                <div className="cat-stat-label-small">Quality Service</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Occasions Section */}
      <section className="cat-occasions">
        <div className="cat-container">
          <h3 className="cat-occasions-title">Perfect For</h3>
          <div className="cat-occasions-grid">
            {occasions.map((occasion, index) => {
              const IconComponent = occasion.IconComponent;
              return (
                <div key={index} className="cat-occasion-item">
                  <div className="cat-occasion-icon-wrapper">
                    <IconComponent className="cat-occasion-icon-svg" />
                  </div>
                  <span className="cat-occasion-name">{occasion.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Menus Section */}
      <section className="cat-menus">
        <div className="cat-container">
          <h2 className="cat-section-title">Our Menus</h2>
          <div className="cat-menus-grid">
            {menus.map((menu) => {
              const IconComponent = menu.IconComponent;
              return (
                <div 
                  key={menu.id} 
                  className={`cat-menu-card ${selectedMenu === menu.id ? 'active' : ''}`}
                  onMouseEnter={() => setSelectedMenu(menu.id)}
                  onMouseLeave={() => setSelectedMenu(null)}
                >
                  <div className="cat-menu-image">
                    <img src={menu.image} alt={menu.name} />
                    <div className="cat-menu-image-overlay">
                      <div className="cat-menu-icon-wrapper">
                        <IconComponent className="cat-menu-icon-svg" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="cat-menu-content">
                    <h3 className="cat-menu-name">{menu.name}</h3>
                    <p className="cat-menu-description">{menu.description}</p>
                    
                    <div className="cat-menu-items">
                      <h4 className="cat-items-title">Popular Items:</h4>
                      <ul className="cat-items-list">
                        {menu.items.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <button 
                      className="cat-menu-button"
                      style={{background: menu.color}}
                      onClick={() => handleWhatsAppClick(menu.name)}
                    >
                      Get Menu & Pricing →
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="cat-features">
        <div className="cat-container">
          <h2 className="cat-section-title">Why Choose Our Catering</h2>
          <div className="cat-features-grid">
            {features.map((feature, index) => {
              const IconComponent = feature.IconComponent;
              return (
                <div key={index} className="cat-feature-card">
                  <div className="cat-feature-icon-wrapper">
                    <IconComponent className="cat-feature-icon-svg" />
                  </div>
                  <div className="cat-feature-badge">{feature.highlight}</div>
                  <h3 className="cat-feature-title">{feature.title}</h3>
                  <p className="cat-feature-description">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section - Dark Gradient */}
      <section className="cat-cta">
        <div className="cat-container">
          <div className="cat-cta-card">
            <div className="cat-cta-icon">🎯</div>
            <h2 className="cat-cta-title">Talk to Us for Today's Catering Availability</h2>
            <p className="cat-cta-subtitle">Get instant quotes and custom menu recommendations</p>
            <div className="cat-cta-buttons">
              <button className="cat-cta-button whatsapp" onClick={() => handleWhatsAppClick()}>
                <svg className="cat-whatsapp-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Chat & Get Quote
              </button>
              <button className="cat-cta-button call" onClick={handleCallClick}>
                <svg className="cat-call-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                </svg>
                Call Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Footer */}
      <section className="cat-seo-footer">
        <div className="cat-container">
          <p className="cat-seo-text">
            Catering services for tours, events, and shoots in The Nilgiris. Sastha Tours & Travels offers 
            comprehensive catering services including South Indian, North Indian, Chinese, and Continental cuisines 
            with experienced chefs, hygienic preparation, on-site service, and delivery across Ooty, Coonoor, and 
            Kotagiri for tour groups, film shoots, weddings, corporate events, and family gatherings.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Catering;