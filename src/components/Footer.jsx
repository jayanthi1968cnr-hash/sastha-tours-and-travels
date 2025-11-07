import React from 'react';
// 1. Import 'Link' from react-router-dom
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Smartphone, MessageSquare, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Column 1 */}
          <div className="footer-column">
            <h3 className="footer-title">Company</h3>
            <ul className="footer-links">
              {/* 2. Changed <a> to <Link> for internal navigation */}
              <li><Link to="/about" className="footer-link">About us</Link></li>
              <li><Link to="/careers" className="footer-link">Careers</Link></li>
              <li><Link to="/press" className="footer-link">Press</Link></li>
              <li><Link to="/blog" className="footer-link">Blog</Link></li>
            </ul>
          </div>
          {/* Column 2 */}
          <div className="footer-column">
            <h3 className="footer-title">Support</h3>
            <ul className="footer-links">
              <li><Link to="/help" className="footer-link">Help Centre</Link></li>
              <li><Link to="/contact" className="footer-link">Contact Us</Link></li>
              <li><Link to="/faq" className="footer-link">FAQs</Link></li>
              <li><Link to="/booking-status" className="footer-link">Booking status</Link></li>
            </ul>
          </div>
          {/* Column 3 */}
          <div className="footer-column">
            <h3 className="footer-title">Policies</h3>
            <ul className="footer-links">
              <li><Link to="/policy/privacy" className="footer-link">Privacy Policy</Link></li>
              <li><Link to="/policy/terms" className="footer-link">Terms of Use</Link></li>
              <li><Link to="/policy/cookie" className="footer-link">Cookie Policy</Link></li>
            </ul>
          </div>
          {/* Column 4 (Social & Actions) */}
          <div className="footer-column footer-social-column">
            <h3 className="footer-title">Follow & Contact Us</h3>
            <div className="social-links">
              <a href="#" className="social-link" title="Facebook" target="_blank" rel="noopener noreferrer">
                <span className="sr-only">Facebook</span>
                <Facebook className="social-icon" />
              </a>
              {/* 3. Updated Instagram Link */}
              <a 
                href="https://www.instagram.com/sasth_a03?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                className="social-link" 
                title="Instagram" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <span className="sr-only">Instagram</span>
                <Instagram className="social-icon" />
              </a>
              {/* 4. Updated WhatsApp Link */}
              <a 
                href="https://wa.me/919342512112" 
                className="social-link" 
                title="WhatsApp" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <span className="sr-only">WhatsApp</span>
                <MessageSquare className="social-icon" />
              </a>
              {/* 5. Updated Phone Link */}
              <a href="tel:9342512112" className="social-link" title="Call Us">
                <span className="sr-only">Phone</span>
                <Smartphone className="social-icon" />
              </a>
              <a href="https://maps.app.goo.gl/YOUR_MAP_LINK" target="_blank" rel="noopener noreferrer" className="social-link" title="Our Location">
                <span className="sr-only">Location</span>
                <MapPin className="social-icon" />
              </a>
            </div>

            {/* --- Action Buttons Updated --- */}
            <div className="footer-actions">
              {/* 6. Updated Call Button Link */}
              <a href="tel:9342512112" className="footer-button">Call</a>
              {/* 7. Updated Enquire Button Link */}
              <a 
                href="https://wa.me/919342512112" 
                className="footer-button enquire" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Enquire
              </a>
            </div>

          </div>
        </div>

        {/* --- Map Section --- */}
        <div className="footer-map-section">
          <h3 className="footer-title">Our Location</h3>
          <div className="map-embed">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3906.666114488339!2d76.82021087481977!3d11.353787788931086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8950f28c55555%3A0x83f062e2a7cfcfb6!2sSastha%20Tours%20%26%20Travels!5e0!3m2!1sen!2sin!4v1730925721369!5m2!1sen!2sin" 
              width="100%" 
              height="250" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="copyright">&copy; 2025 StathsTour's&Travels. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;