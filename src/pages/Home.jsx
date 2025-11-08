import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { Search, Users, Plus, Minus, ChevronLeft, ChevronRight } from 'lucide-react';
import HeroVideoCarousel from './Herovideocarousel'; // Import the new component
import './Home.css';

// Data for Featured Destinations
const allDestinationsData = {
  Mountains: [
    { id: 1, name: 'Ooty Mountain Stay', location: 'Tamil Nadu, India', price: '₹7,500', image: 'https://images.unsplash.com/photo-1589182373954-d6688563b869?w=400&auto=format&fit=crop' },
    { id: 2, name: 'Himalayan Peak', location: 'Uttarakhand, India', price: '₹12,000', image: 'https://images.unsplash.com/photo-1525177266645-41470b4a5912?w=400&auto=format&fit=crop' },
    { id: 3, name: 'Munnar Hills', location: 'Kerala, India', price: '₹6,200', image: 'https://images.unsplash.com/photo-1593693411515-c202a012a225?w=400&auto=format&fit=crop' },
  ],
  'Water Falls': [
    { id: 4, name: 'Athirapally Falls', location: 'Kerala, India', price: '₹5,800', image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=400&auto=format&fit=crop' },
    { id: 5, name: 'Jog Falls', location: 'Karnataka, India', price: '₹6,400', image: 'https://images.unsplash.com/photo-1606800047242-a400569c73e0?w=400&auto=format&fit=crop' },
  ],
  Hiking: [
    { id: 6, name: 'Kodaikanal Trek', location: 'Tamil Nadu, India', price: '₹4,200', image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&auto=format&fit=crop' },
    { id: 7, name: 'Triund Trek', location: 'Himachal Pradesh, India', price: '₹5,100', image: 'https://images.unsplash.com/photo-1589393694191-19010f317079?w=400&auto=format&fit=crop' },
    { id: 8, name: 'Chembra Peak', location: 'Kerala, India', price: '₹4,500', image: 'https://images.unsplash.com/photo-1544198421-933391b15104?w=400&auto=format&fit=crop' },
  ],
  'Camp fire': [
    { id: 9, name: 'Rishikesh Riverside', location: 'Uttarakhand, India', price: '₹3,500', image: 'https://images.unsplash.com/photo-1500581228536-54f3d1e18701?w=400&auto=format&fit=crop' },
    { id: 10, name: 'Coorg Camping', location: 'Karnataka, India', price: '₹4,000', image: 'https://images.unsplash.com/photo-1506535992697-7c39866106e4?w=400&auto=format&fit=crop' },
  ],
  'Family Night': [
    { id: 11, name: 'Alleppey Houseboat', location: 'Kerala, India', price: '₹9,000', image: 'https://images.unsplash.com/photo-1590772517852-c69213531952?w=400&auto=format&fit=crop' },
    { id: 12, name: 'Goa Beach Villa', location: 'Goa, India', price: '₹11,500', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&auto=format&fit=crop' },
  ],
  'Corporate Corner': [
    { id: 13, name: 'Bangalore Retreat', location: 'Karnataka, India', price: '₹15,000', image: 'https://images.unsplash.com/photo-1591024694902-3f7f12f1f5f3?w=400&auto=format&fit=crop' },
    { id: 14, name: 'Lonavala Conference', location: 'Maharashtra, India', price: '₹13,000', image: 'https://images.unsplash.com/photo-1498307833015-e7b400441eb8?w=400&auto=format&fit=crop' },
  ]
};
const categories = ['All', 'Mountains', 'Water Falls', 'Hiking', 'Camp fire', 'Family Night', 'Corporate Corner'];

const Home = () => {
  const navigate = useNavigate();

  // State and ref for Services Carousel
  const servicesScrollRef = useRef(null);
  const [services, setServices] = useState([
    { 
      title: 'Travel adds up', 
      description: 'Stay 10 nights, get a reward night to use however you like.', 
      buttonText: 'How it works',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&auto=format&fit=crop'
    },
    { 
      title: 'Stays that deliver', 
      description: 'Traveller-favourite VIP Access stays come with high ratings and perks.', 
      buttonText: 'Explore stays',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&auto=format&fit=crop'
    },
    { 
      title: 'Plans change. We get it.', 
      description: 'Flexible booking options so you can adjust or cancel easily.', 
      buttonText: 'Search now',
      image: 'https://images.unsplash.com/photo-1554224311-beee2ece0e0a?w=600&auto=format&fit=crop'
    },
    { 
      title: 'Flight Up & Down', 
      description: 'Book your round-trip flights with flexible options.', 
      buttonText: 'Book Flights',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&auto=format&fit=crop'
    },
    { 
      title: '5-Star Hotels', 
      description: 'Find luxury stays with top-rated amenities.', 
      buttonText: 'See Hotels',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&auto=format&fit=crop'
    },
    { 
      title: 'Local Guides', 
      description: 'Explore like a local with our expert guides.', 
      buttonText: 'Find Guides',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&auto=format&fit=crop'
    },
    { 
      title: 'Local Travels', 
      description: 'Book cars, cabs, and transfers with ease.', 
      buttonText: 'Book Rides',
      image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&auto=format&fit=crop'
    },
    { 
      title: 'Food & Yummy Snacks', 
      description: 'Discover the best local cuisine and food tours.', 
      buttonText: 'Explore Food',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&auto=format&fit=crop'
    }
  ]);
  
  // State for Featured Destinations
  const [activeCategory, setActiveCategory] = useState('All');
  const [displayedDestinations, setDisplayedDestinations] = useState([]);
  const destinationsScrollRef = useRef(null);

  // Services Carousel Auto-scroll Effect
  useEffect(() => {
    const scrollContainer = servicesScrollRef.current;
    if (!scrollContainer) return;
    const scrollInterval = setInterval(() => {
      const cardWidth = scrollContainer.scrollWidth / services.length;
      const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
      let nextScroll = scrollContainer.scrollLeft + cardWidth;
      if (nextScroll > maxScroll) {
        nextScroll = 0;
      }
      scrollContainer.scrollTo({
        left: nextScroll,
        behavior: 'smooth',
      });
    }, 4000);
    return () => clearInterval(scrollInterval);
  }, [services.length]);

  // Services Carousel Manual Scroll Function
  const handleServiceScroll = (direction) => {
    if (servicesScrollRef.current) {
      const cardWidth = servicesScrollRef.current.scrollWidth / services.length;
      const scrollAmount = cardWidth * 3;
      if (direction === 'left') {
        servicesScrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        servicesScrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  // Effect to update displayed destinations
  useEffect(() => {
    if (activeCategory === 'All') {
      const allItems = Object.values(allDestinationsData).flat();
      setDisplayedDestinations(allItems);
    } else {
      setDisplayedDestinations(allDestinationsData[activeCategory] || []);
    }
  }, [activeCategory]);

  // Destinations Carousel Manual Scroll Function
  const handleDestinationScroll = (direction) => {
    if (destinationsScrollRef.current) {
      const card = destinationsScrollRef.current.querySelector('.destination-card');
      if (!card) return;
      const cardWidth = card.offsetWidth;
      const gap = parseInt(window.getComputedStyle(destinationsScrollRef.current).gap, 10) || 24;
      const scrollAmount = (cardWidth + gap) * 4;
      if (direction === 'left') {
        destinationsScrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        destinationsScrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  // Auto-scroll for Destinations Carousel
  useEffect(() => {
    const scrollContainer = destinationsScrollRef.current;
    if (!scrollContainer) return;
    const scrollInterval = setInterval(() => {
      const card = scrollContainer.querySelector('.destination-card');
      if (!card) return;
      const cardWidth = card.offsetWidth;
      const gap = parseInt(window.getComputedStyle(scrollContainer).gap, 10) || 24;
      const scrollAmount = cardWidth + gap;
      const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
      let nextScroll = scrollContainer.scrollLeft + scrollAmount;
      if (nextScroll > maxScroll - 1) {
        nextScroll = 0;
      }
      scrollContainer.scrollTo({
        left: nextScroll,
        behavior: 'smooth',
      });
    }, 4000);
    return () => clearInterval(scrollInterval);
  }, [displayedDestinations]);


  return (
    <div className="home">
      {/* Hero Video Carousel Section - REPLACES old hero */}
      <HeroVideoCarousel />

      {/* Services Carousel Section */}
      <section className="benefits">
        <div className="benefits-wrapper">
          <button className="scroll-arrow left" onClick={() => handleServiceScroll('left')}><ChevronLeft size={24} /></button>
          <div className="benefits-container" ref={servicesScrollRef}>
            {services.map((service, index) => (
              <div className="benefit-card" key={index} style={{ backgroundImage: `url(${service.image})` }}>
                <div className="benefit-card-overlay"></div>
                <div className="benefit-card-content">
                  <h3 className="benefit-title">{service.title}</h3>
                  <p className="benefit-text">{service.description}</p>
                  <a href="#" className="benefit-link">{service.buttonText}</a>
                </div>
              </div>
            ))}
          </div>
          <button className="scroll-arrow right" onClick={() => handleServiceScroll('right')}><ChevronRight size={24} /></button>
        </div>
      </section>

      {/* Featured Destinations Section */}
      <section className="featured">
        <div className="featured-container">
          <h2 className="featured-title">Your style. These stays. A perfect match.</h2>
          <p className="featured-subtitle">Average prices based on current calendar month</p>
          
          <div className="category-tabs">
            {categories.map((tabName) => (
              <button
                key={tabName}
                className={`tab ${activeCategory === tabName ? 'tab-active' : ''}`}
                onClick={() => setActiveCategory(tabName)}
              >
                {tabName}
              </button>
            ))}
          </div>
          
          <div className="destinations-wrapper">
            <button className="scroll-arrow left" onClick={() => handleDestinationScroll('left')}>
              <ChevronLeft size={24} />
            </button>
            <div className="destinations-grid" ref={destinationsScrollRef}>
              {displayedDestinations.map((dest) => (
                <div key={dest.id} className="destination-card">
                  <img src={dest.image} alt={dest.name} className="destination-image" />
                  <div className="destination-info">
                    <h3 className="destination-name">{dest.name}</h3>
                    <p className="destination-location">{dest.location}</p>
                    <div className="destination-price">
                      <span className="price-amount">{dest.price}</span>
                      <span className="price-label">avg per night</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="scroll-arrow right" onClick={() => handleDestinationScroll('right')}>
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* Services Features Section */}
      <section className="services-features">
        <div className="services-features-container">
          <h2 className="services-features-title">With Sastha Tour's & Travels you can get:</h2>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon-wrapper">
                <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <span className="feature-text">International Tour Package</span>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon-wrapper">
                <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
              </div>
              <span className="feature-text">Passport & Visa Assistance</span>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon-wrapper">
                <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <span className="feature-text">Domestic Tour Packages</span>
              </div>
            
            <div className="feature-item">
              <div className="feature-icon-wrapper">
                <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                </svg>
              </div>
              <span className="feature-text">Hotel Room Bookings</span>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon-wrapper">
                <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"/>
                </svg>
              </div>
              <span className="feature-text">Catering Services</span>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon-wrapper">
                <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                </svg>
              </div>
              <span className="feature-text">Flight Booking</span>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon-wrapper">
                <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/>
                </svg>
              </div>
              <span className="feature-text">Local Transport</span>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon-wrapper">
                <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
              </div>
              <span className="feature-text">Restaurant</span>
            </div>
          </div>
        </div>
      </section>

      {/* Happy Customers Section */}
      <section className="happy-customers">
        <div className="customers-container">
          {/* First Row - Scroll Right to Left */}
          <div className="customers-carousel-wrapper">
            <div className="customers-carousel scroll-right-to-left">
              {[
                'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=400&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=400&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&auto=format&fit=crop',
              ].map((img, idx) => (
                <div key={idx} className="customer-image-card">
                  <img src={img} alt={`Customer ${idx + 1}`} />
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {[
                'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=400&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=400&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&auto=format&fit=crop',
              ].map((img, idx) => (
                <div key={`dup1-${idx}`} className="customer-image-card">
                  <img src={img} alt={`Customer duplicate ${idx + 1}`} />
                </div>
              ))}
            </div>
          </div>

          {/* Title and Button in the Middle */}
          <div className="customers-middle-content">
            <h2 className="customers-title">
              <span className="customers-title-purple">Happy Customers,</span>{' '}
              <span className="customers-title-orange">Happy Stories</span>
            </h2>
            <button className="view-instagram-btn">View Instagram</button>
          </div>

          {/* Second Row - Scroll Left to Right */}
          <div className="customers-carousel-wrapper">
            <div className="customers-carousel scroll-left-to-right">
              {[
                'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop',
              ].map((img, idx) => (
                <div key={idx} className="customer-image-card">
                  <img src={img} alt={`Customer ${idx + 7}`} />
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {[
                'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop',
              ].map((img, idx) => (
                <div key={`dup2-${idx}`} className="customer-image-card">
                  <img src={img} alt={`Customer duplicate ${idx + 7}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;