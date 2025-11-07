import React from 'react';
// 1. Import useLocation to receive the navigation state
import { useLocation } from 'react-router-dom';
import { Star, Wifi, Coffee, Wind, Bath, Car, Trees } from 'lucide-react';
import './Rooms.css';

const Rooms = () => {
  // 2. Get the location object and extract the state
  const location = useLocation();
  const { checkIn, checkOut, travelers } = location.state || {
    // Provide default values in case the page is visited directly
    checkIn: null,
    checkOut: null,
    travelers: null
  };

  // 3. Helper function to format the traveler text
  const formatTravelerText = () => {
    if (!travelers) return 'Any travelers';
    let text = `${travelers.adults} adult${travelers.adults !== 1 ? 's' : ''}`;
    if (travelers.children > 0) {
      text += `, ${travelers.children} child${travelers.children !== 1 ? 'ren' : ''}`;
    }
    text += `, ${travelers.rooms} room${travelers.rooms !== 1 ? 's' : ''}`;
    return text;
  };

  // Mock data (unchanged)
  const mockRooms = [
    { id: 1, name: 'Luxury Beachfront Villa', price: '₹25,000', rating: 4.8, image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&auto=format&fit=crop', amenities: [Wifi, Coffee, Wind, Bath] },
    { id: 2, name: 'Cozy City Apartment', price: '₹8,500', rating: 4.5, image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&auto=format&fit=crop', amenities: [Wifi, Coffee, Car] },
    { id: 3, name: 'Mountain View Cabin', price: '₹12,000', rating: 4.9, image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&auto=format&fit=crop', amenities: [Coffee, Trees] },
    { id: 4, name: 'Modern Downtown Loft', price: '₹10,200', rating: 4.7, image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&auto=format&fit=crop', amenities: [Wifi, Bath] },
  ];

  return (
    <div className="rooms-page">
      <div className="rooms-container">
        
        {/* 4. NEW: Search Summary Box */}
        {/* This box will only show if data was passed from the home page */}
        {location.state && (
          <div className="search-summary">
            <p>Showing rooms for: <strong>{checkIn || 'any date'}</strong> to <strong>{checkOut || 'any date'}</strong></p>
            <p>Guests: <strong>{formatTravelerText()}</strong></p>
          </div>
        )}

        <h1 className="rooms-title">Available Rooms & Stays</h1>
        <div className="rooms-layout">
          {/* Filters Sidebar */}
          <aside className="filters-sidebar">
            <div className="filters-card">
              <h3 className="filters-title">Filter by</h3>
              <div className="filter-group">
                <label className="filter-label">Price Range</label>
                <input type="range" min="0" max="50000" className="price-slider" />
                <div className="price-range-labels">
                  <span>₹0</span>
                  <span>₹50,000+</span>
                </div>
              </div>
              <div className="filter-group">
                <h4 className="filter-subtitle">Amenities</h4>
                <div className="checkbox-group">
                  <label className="checkbox-label">
                    <input type="checkbox" className="checkbox" />
                    <span>Free WiFi</span>
                  </label>
                  <label className="checkbox-label">
                    <input type="checkbox" className="checkbox" />
                    <span>Parking</span>
                  </label>
                  <label className="checkbox-label">
                    <input type="checkbox" className="checkbox" />
                    <span>Air Conditioning</span>
                  </label>
                </div>
              </div>
              <button className="apply-filters-btn">Apply Filters</button>
            </div>
          </aside>
          
          {/* Room Listings */}
          <main className="rooms-list">
            {mockRooms.map(room => (
              <div key={room.id} className="room-card">
                <img src={room.image} alt={room.name} className="room-image" />
                <div className="room-details">
                  <div className="room-info">
                    <h3 className="room-name">{room.name}</h3>
                    <div className="room-rating">
                      <span className="rating-stars">
                        <Star className="star-icon" />
                        <span className="rating-value">{room.rating}</span>
                      </span>
                      <span className="rating-count">(120 reviews)</span>
                    </div>
                    <div className="room-amenities">
                      {room.amenities.map((Amenity, index) => (
                        <Amenity key={index} className="amenity-icon" />
                      ))}
                    </div>
                    <p className="room-description">A description of the room, its features, and why it's a great choice for your stay.</p>
                  </div>
                  <div className="room-booking">
                    <div className="room-price-section">
                      <span className="room-price">{room.price}</span>
                      <span className="price-per-night">/ night</span>
                    </div>
                    <button className="book-now-btn">Book Now</button>
                  </div>
                </div>
              </div>
            ))}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Rooms;