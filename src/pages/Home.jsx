import React, { useState, useRef, useEffect } from 'react';
// 1. Import useNavigate to handle the navigation
import { useNavigate } from 'react-router-dom'; 
import { Search, Users, Plus, Minus, ChevronLeft, ChevronRight } from 'lucide-react';
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

// Data for App Download Slideshow
const internationalSlides = [
  { id: 1, image: 'https://images.unsplash.com/photo-1502602898657-3e91760c0339?w=500&auto=format&fit=crop', alt: 'Eiffel Tower, Paris' },
  { id: 2, image: 'https://images.unsplash.com/photo-1529655683826-1c5c5e69b6c0?w=500&auto=format&fit=crop', alt: 'Big Ben, London' },
  { id: 3, image: 'https://images.unsplash.com/photo-1520542312613-c3c1b8f10114?w=500&auto=format&fit=crop', alt: 'Pyramids of Giza' },
  { id: 4, image: 'https://images.unsplash.com/photo-1513022415121-861c8f1b622c?w=500&auto=format&fit=crop', alt: 'Colosseum, Rome' },
];

// Background images for hero section
const backgroundImages = [
  'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1400',
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1400',
  'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1400',
  'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1400',
  'https://images.unsplash.com/photo-1504150558240-0b4fd8946624?auto=format&fit=crop&w=1400'
];

const Home = () => {
  // 2. Initialize the navigate function
  const navigate = useNavigate();

  // State for background image transitions
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  // State for Search Bar
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [travelers, setTravelers] = useState({ adults: 2, children: 0, rooms: 1 });
  const [isTravelerDropdownOpen, setIsTravelerDropdownOpen] = useState(false);
  const [showCustomTravelers, setShowCustomTravelers] = useState(false);
  const travelerDropdownRef = useRef(null);

  // State and ref for Services Carousel
  const servicesScrollRef = useRef(null);
  const [services, setServices] = useState([
    { title: 'Travel adds up', description: 'Stay 10 nights, get a reward night to use however you like.', buttonText: 'How it works' },
    { title: 'Stays that deliver', description: 'Traveller-favourite VIP Access stays come with high ratings and perks.', buttonText: 'Explore stays' },
    { title: 'Plans change. We get it.', description: 'Flexible booking options so you can adjust or cancel easily.', buttonText: 'Search now' },
    { title: 'Flight Up & Down', description: 'Book your round-trip flights with flexible options.', buttonText: 'Book Flights' },
    { title: '5-Star Hotels', description: 'Find luxury stays with top-rated amenities.', buttonText: 'See Hotels' },
    { title: 'Local Guides', description: 'Explore like a local with our expert guides.', buttonText: 'Find Guides' },
    { title: 'Local Travels', description: 'Book cars, cabs, and transfers with ease.', buttonText: 'Book Rides' },
    { title: 'Food & Yummy Snacks', description: 'Discover the best local cuisine and food tours.', buttonText: 'Explore Food' }
  ]);
  
  // State for Featured Destinations
  const [activeCategory, setActiveCategory] = useState('All');
  const [displayedDestinations, setDisplayedDestinations] = useState([]);
  const destinationsScrollRef = useRef(null);

  // State for App Download Slideshow
  const [currentSlide, setCurrentSlide] = useState(0);

  // --- Background Image Rotation Effect ---
  useEffect(() => {
    const bgInterval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(bgInterval);
  }, []);

  // --- Search Bar Functions ---
  const formatTravelerText = () => {
    let text = `${travelers.adults} adult${travelers.adults !== 1 ? 's' : ''}`;
    if (travelers.children > 0) {
      text += `, ${travelers.children} child${travelers.children !== 1 ? 'ren' : ''}`;
    }
    text += `, ${travelers.rooms} room${travelers.rooms !== 1 ? 's' : ''}`;
    return text;
  };

  // 3. Update handleSearch to navigate and pass state
  const handleSearch = (e) => {
    e.preventDefault();
    // Navigate to the /rooms page and pass the search data in the 'state' object
    navigate('/rooms', {
      state: {
        checkIn: checkIn,
        checkOut: checkOut,
        travelers: travelers
      }
    });
  };

  const handleCustomTravelerChange = (type, operation) => {
    setTravelers((prev) => {
      const newValue = operation === 'increment' ? prev[type] + 1 : prev[type] - 1;
      if (type === 'children' && newValue < 0) return prev;
      if ((type === 'adults' || type === 'rooms') && newValue < 1) return prev;
      return { ...prev, [type]: newValue };
    });
  };

  const handlePresetClick = (preset) => {
    if (preset === 'single') {
      setTravelers({ adults: 1, children: 0, rooms: 1 });
    } else if (preset === 'couple') {
      setTravelers({ adults: 2, children: 0, rooms: 1 });
    } else if (preset === 'family') {
      setTravelers({ adults: 2, children: 1, rooms: 1 });
    }
    setIsTravelerDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (travelerDropdownRef.current && !travelerDropdownRef.current.contains(event.target)) {
        setIsTravelerDropdownOpen(false);
        setShowCustomTravelers(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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

  // Effect for App Download Slideshow
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev === internationalSlides.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(slideInterval);
  }, []);

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
      {/* Hero Section */}
      <section className="hero" style={{ 
        backgroundImage: `url(${backgroundImages[currentBgIndex]})`,
        transition: 'background-image 1.5s ease-in-out'
      }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="company-name">Sastha Tour's & Travels</div>
          <h1 className="hero-title">Your next trip starts here</h1>
          {/* Form now calls the updated handleSearch */}
          <form className="search-box" onSubmit={handleSearch}>
            <div className="search-field dates-field">
              <div className="date-input-group">
                <label className="search-label">Check-in</label>
                <input type="date" className="search-input" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} required />
              </div>
              <div className="date-input-group">
                <label className="search-label">Check-out</label>
                <input type="date" className="search-input" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} required />
              </div>
            </div>
            <div className="search-field travelers-field" ref={travelerDropdownRef}>
              <label className="search-label">Travellers</label>
              <div className="input-wrapper" onClick={() => setIsTravelerDropdownOpen(!isTravelerDropdownOpen)}>
                <Users className="input-icon" />
                <input type="text" className="search-input traveler-input" value={formatTravelerText()} readOnly />
              </div>
              {isTravelerDropdownOpen && (
                <div className="traveler-dropdown">
                  {!showCustomTravelers ? (
                    <>
                      <div className="traveler-option" onClick={() => handlePresetClick('single')}>Single <span>1 adult, 1 room</span></div>
                      <div className="traveler-option" onClick={() => handlePresetClick('couple')}>2 Persons <span>2 adults, 1 room</span></div>
                      <div className="traveler-option" onClick={() => handlePresetClick('family')}>Family <span>2 adults, 1 child, 1 room</span></div>
                      <div className="traveler-option" onClick={() => setShowCustomTravelers(true)}>More <span>Custom travellers, rooms...</span></div>
                    </>
                  ) : (
                    <div className="custom-traveler-inputs">
                      <div className="input-row">
                        <span>Adults</span>
                        <div className="counter">
                          <button type="button" className="counter-btn" onClick={() => handleCustomTravelerChange('adults', 'decrement')}><Minus size={16} /></button>
                          <span>{travelers.adults}</span>
                          <button type="button" className="counter-btn" onClick={() => handleCustomTravelerChange('adults', 'increment')}><Plus size={16} /></button>
                        </div>
                      </div>
                      <div className="input-row">
                        <span>Children</span>
                        <div className="counter">
                          <button type="button" className="counter-btn" onClick={() => handleCustomTravelerChange('children', 'decrement')}><Minus size={16} /></button>
                          <span>{travelers.children}</span>
                          <button type="button" className="counter-btn" onClick={() => handleCustomTravelerChange('children', 'increment')}><Plus size={16} /></button>
                        </div>
                      </div>
                      <div className="input-row">
                        <span>Rooms</span>
                        <div className="counter">
                          <button type="button" className="counter-btn" onClick={() => handleCustomTravelerChange('rooms', 'decrement')}><Minus size={16} /></button>
                          <span>{travelers.rooms}</span>
                          <button type="button" className="counter-btn" onClick={() => handleCustomTravelerChange('rooms', 'increment')}><Plus size={16} /></button>
                        </div>
                      </div>
                      <button type="button" className="done-btn" onClick={() => setIsTravelerDropdownOpen(false)}>Done</button>
                    </div>
                  )}
                </div>
              )}
            </div>
            <button type="submit" className="search-btn"><Search className="btn-icon" />Search</button>
          </form>
        </div>
      </section>

      {/* Services Carousel Section */}
      <section className="benefits">
        <div className="benefits-wrapper">
          <button className="scroll-arrow left" onClick={() => handleServiceScroll('left')}><ChevronLeft size={24} /></button>
          <div className="benefits-container" ref={servicesScrollRef}>
            {services.map((service, index) => (
              <div className="benefit-card" key={index}>
                <h3 className="benefit-title">{service.title}</h3>
                <p className="benefit-text">{service.description}</p>
                <a href="#" className="benefit-link">{service.buttonText}</a>
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

      {/* App Download Section */}
      <section className="app-download">
        <div className="app-container">
          <div className="app-content">
            <h2 className="app-title">With Sastha Tour's & Travels you can get:</h2>
            <ul className="app-features">
              <li className="app-feature">
                <div className="feature-icon"><svg className="checkmark" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></div>
                International Tour Package
              </li>
              <li className="app-feature">
                <div className="feature-icon"><svg className="checkmark" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></div>
                Passport & Visa Assistance
              </li>
              <li className="app-feature">
                <div className="feature-icon"><svg className="checkmark" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></div>
                Domestic Tour Packages
              </li>
              <li className="app-feature">
                <div className="feature-icon"><svg className="checkmark" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></div>
                Hotel Room Bookings
              </li>
              <li className="app-feature">
                <div className="feature-icon"><svg className="checkmark" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></div>
                Catering Services
              </li>
              <li className="app-feature">
                <div className="feature-icon"><svg className="checkmark" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></div>
                Flight Booking
              </li>
               <li className="app-feature">
                <div className="feature-icon"><svg className="checkmark" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></div>
                Local Transport
              </li>
            </ul>
            <p className="qr-text">Scan the QR code with your device camera and download our app</p>
            <div className="qr-code">QR Code</div>
          </div>
          
          <div className="app-slideshow">
            <div className="slideshow-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {internationalSlides.map((slide) => (
                <div className="slide" key={slide.id}>
                  <img src={slide.image} alt={slide.alt} />
                </div>
              ))}
            </div>
            <div className="slideshow-overlay">
              Around the world with Sastha
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;