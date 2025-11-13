import React, { useState } from 'react';
import { UtensilsCrossed, Clock, Shield, DollarSign, Users, Phone, MapPin, ChefHat, Star } from 'lucide-react';
import './Restaurant.css';

const Restaurant = () => {
  const [activeCategory, setActiveCategory] = useState('south-indian');

  // Local images from assets/images folder
  const restaurantImages = {
    hero: '/assets/images/restaurant-food-1.jpeg',
    secondary: '/assets/images/restaurant-food-2.jpeg',
    tertiary: '/assets/images/restaurant-food-3.jpeg'
  };

  const menuCategories = [
    {
      id: 'south-indian',
      name: 'South Indian Meals',
      IconComponent: ChefHat,
      description: 'Authentic South Indian flavors with traditional recipes',
      image: 'https://images.unsplash.com/photo-1567337710282-00832b415979?w=600&auto=format&fit=crop',
      items: [
        { name: 'Meals (Rice + Sambar + Rasam + Curries)', price: '₹120-180' },
        { name: 'Dosa Varieties (Plain, Masala, Ghee)', price: '₹40-80' },
        { name: 'Idli + Vada Combo', price: '₹50-70' },
        { name: 'Pongal + Sambar', price: '₹60-90' },
        { name: 'Curd Rice', price: '₹40-60' }
      ],
      popular: true
    },
    {
      id: 'north-indian',
      name: 'North Indian',
      IconComponent: UtensilsCrossed,
      description: 'Rich and aromatic North Indian delicacies',
      image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&auto=format&fit=crop',
      items: [
        { name: 'Paneer Butter Masala + Roti', price: '₹150-200' },
        { name: 'Dal Tadka + Jeera Rice', price: '₹130-170' },
        { name: 'Butter Chicken + Naan', price: '₹180-250' },
        { name: 'Chole Bhature', price: '₹100-140' },
        { name: 'Biryani (Veg/Chicken)', price: '₹150-220' }
      ],
      popular: true
    },
    {
      id: 'chinese',
      name: 'Chinese',
      IconComponent: () => (
        <svg className="rest-menu-icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"/>
        </svg>
      ),
      description: 'Popular Indo-Chinese favorites',
      image: 'https://images.unsplash.com/photo-1617196035154-0a7465be3e32?w=600&auto=format&fit=crop',
      items: [
        { name: 'Veg/Chicken Fried Rice', price: '₹120-180' },
        { name: 'Hakka Noodles', price: '₹110-170' },
        { name: 'Gobi/Paneer Manchurian', price: '₹130-160' },
        { name: 'Chilli Chicken/Paneer', price: '₹150-200' },
        { name: 'Spring Rolls', price: '₹80-120' }
      ],
      popular: false
    },
    {
      id: 'snacks',
      name: 'Snacks & Starters',
      IconComponent: () => (
        <svg className="rest-menu-icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
        </svg>
      ),
      description: 'Quick bites and appetizers',
      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&auto=format&fit=crop',
      items: [
        { name: 'Samosa + Chutney', price: '₹30-50' },
        { name: 'Pakoda Platter', price: '₹80-120' },
        { name: 'Sandwich (Veg/Grill)', price: '₹60-100' },
        { name: 'French Fries', price: '₹70-100' },
        { name: 'Masala Papad', price: '₹40-60' }
      ],
      popular: false
    },
    {
      id: 'combo',
      name: 'Travel Group Combos',
      IconComponent: Users,
      description: 'Special combo meals for tour groups',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&auto=format&fit=crop',
      items: [
        { name: 'Mini Meal Box (10+ pax)', price: '₹100/person' },
        { name: 'Deluxe Meal Box (20+ pax)', price: '₹150/person' },
        { name: 'Snack Pack (Group)', price: '₹80/person' },
        { name: 'Breakfast Combo', price: '₹90/person' },
        { name: 'Custom Group Orders', price: 'On Request' }
      ],
      popular: true
    }
  ];

  const highlights = [
    {
      IconComponent: Clock,
      title: 'Quick Delivery',
      description: 'Fast and timely delivery to your location',
      highlight: 'Fast Service'
    },
    {
      IconComponent: Shield,
      title: 'Hygienic Packing',
      description: 'Safe, clean, and secure food packaging',
      highlight: 'Safe & Clean'
    },
    {
      IconComponent: DollarSign,
      title: 'Budget-Friendly',
      description: 'Affordable pricing for quality food',
      highlight: 'Best Rates'
    },
    {
      IconComponent: Users,
      title: 'Custom Group Orders',
      description: 'Special arrangements for large groups',
      highlight: 'Group Special'
    }
  ];

  const deliveryAreas = [
    'Ooty', 'Coonoor', 'Kotagiri', 'Wellington', 
    'Ketti', 'Gudalur', 'Hill Stations', 'Tourist Spots'
  ];

  const handleWhatsAppClick = (category = '') => {
    const phoneNumber = '919342512112';
    const message = category 
      ? encodeURIComponent(`Hi, I would like to order ${category}. Please share the menu and details.`)
      : encodeURIComponent('Hi, I would like to order food. Please share the menu.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handleCallClick = () => {
    window.location.href = 'tel:+919342512112';
  };

  return (
    <div className="restaurant">
      {/* 3D Background Elements */}
      <div className="rest-3d-background">
        <div className="rest-3d-sphere rest-3d-sphere-1"></div>
        <div className="rest-3d-sphere rest-3d-sphere-2"></div>
        <div className="rest-3d-sphere rest-3d-sphere-3"></div>
      </div>

      {/* Hero Section with Clean Background */}
      <section className="rest-hero">
        <div className="rest-hero-bg" style={{ 
          backgroundImage: `url(${restaurantImages.hero})` 
        }}>
          <div className="rest-hero-overlay"></div>
        </div>
        <div className="rest-hero-content">
          <div className="rest-hero-icon-group">
            <UtensilsCrossed className="rest-utensils-icon" />
          </div>
          <h1 className="rest-hero-title">Fresh, Homely & Flavorful Food</h1>
          <p className="rest-hero-subtitle">
            Delicious Meals Delivered to Your Doorstep
          </p>
        </div>
      </section>

      {/* Description Section with Stats */}
      <section className="rest-description">
        <div className="rest-container">
          <div className="rest-description-content">
            <h2 className="rest-description-title">Delicious Food Delivered to You</h2>
            <p className="rest-description-text">
              Craving a meal during your travel? We deliver tasty, hot food straight from our 
              partner restaurants and kitchen team — ideal for tourists, groups, and families.
            </p>
            <div className="rest-description-stats">
              <div className="rest-stat-item-small">
                <UtensilsCrossed className="rest-stat-icon-svg" />
                <div className="rest-stat-number-small">500+</div>
                <div className="rest-stat-label-small">Menu Items</div>
              </div>
              <div className="rest-stat-item-small">
                <Users className="rest-stat-icon-svg" />
                <div className="rest-stat-number-small">5000+</div>
                <div className="rest-stat-label-small">Happy Customers</div>
              </div>
              <div className="rest-stat-item-small">
                <MapPin className="rest-stat-icon-svg" />
                <div className="rest-stat-number-small">8+</div>
                <div className="rest-stat-label-small">Delivery Areas</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Areas Section */}
      <section className="rest-delivery-section">
        <div className="rest-container">
          <h3 className="rest-delivery-title">We Deliver To</h3>
          <div className="rest-delivery-grid">
            {deliveryAreas.map((area, index) => (
              <div key={index} className="rest-delivery-item">
                <MapPin className="rest-delivery-icon" />
                <span className="rest-delivery-name">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Categories Section */}
      <section className="rest-menu">
        <div className="rest-container">
          <h2 className="rest-section-title">What We Offer</h2>
          
          <div className="rest-menu-grid">
            {menuCategories.map((category) => {
              const IconComponent = category.IconComponent;
              return (
                <div key={category.id} className="rest-menu-card">
                  <div className="rest-menu-image">
                    <img src={category.image} alt={category.name} />
                    <div className="rest-menu-image-overlay">
                      <div className="rest-menu-icon-wrapper">
                        <IconComponent className="rest-menu-icon-svg" />
                      </div>
                    </div>
                    {category.popular && (
                      <div className="rest-popular-badge">
                        <Star className="rest-star-icon" />
                        <span>Popular</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="rest-menu-content">
                    <h3 className="rest-menu-name">{category.name}</h3>
                    <p className="rest-menu-description">{category.description}</p>
                    
                    <div className="rest-menu-items">
                      {category.items.map((item, index) => (
                        <div key={index} className="rest-menu-item">
                          <div className="rest-item-info">
                            <span className="rest-item-name">{item.name}</span>
                          </div>
                          <span className="rest-item-price">{item.price}</span>
                        </div>
                      ))}
                    </div>

                    <button 
                      className="rest-menu-button"
                      onClick={() => handleWhatsAppClick(category.name)}
                    >
                      Order Now →
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="rest-benefits">
        <div className="rest-container">
          <h2 className="rest-section-title">Why Order From Us</h2>
          <div className="rest-benefits-grid">
            {highlights.map((highlight, index) => {
              const IconComponent = highlight.IconComponent;
              return (
                <div key={index} className="rest-benefit-card">
                  <div className="rest-benefit-icon-wrapper">
                    <IconComponent className="rest-benefit-icon-svg" />
                  </div>
                  <div className="rest-benefit-badge">{highlight.highlight}</div>
                  <h3 className="rest-benefit-title">{highlight.title}</h3>
                  <p className="rest-benefit-description">{highlight.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section - Dark Gradient */}
      <section className="rest-cta">
        <div className="rest-container">
          <div className="rest-cta-card">
            <div className="rest-cta-icon">🎯</div>
            <h2 className="rest-cta-title">Order Now</h2>
            <p className="rest-cta-subtitle">Get fresh, delicious food delivered to you</p>
            <div className="rest-cta-buttons">
              <button className="rest-cta-button whatsapp" onClick={() => handleWhatsAppClick()}>
                <svg className="rest-whatsapp-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Chat & Get Menu
              </button>
              <button className="rest-cta-button call" onClick={handleCallClick}>
                <svg className="rest-call-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                </svg>
                Call Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Footer */}
      <section className="rest-seo-footer">
        <div className="rest-container">
          <p className="rest-seo-text">
            Restaurant delivery for tour groups, hotels, and travelers in The Nilgiris. Sastha Tours & Travels 
            offers comprehensive food delivery services including South Indian meals, North Indian cuisine, Chinese, 
            snacks, and custom group combos with hygienic packing, quick delivery, and affordable rates across 
            Ooty, Coonoor, and nearby hill stations.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Restaurant;