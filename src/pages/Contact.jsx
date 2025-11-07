import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-subtitle">Contact Us</h2>
          <p className="contact-title">Get in touch</p>
          <p className="contact-intro">
            Have questions or feedback? We'd love to hear from you.
          </p>
        </div>
        
        <div className="contact-grid">
          {/* Contact Form */}
          <div className="contact-form-wrapper">
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input type="text" id="name" className="form-input" placeholder="Your Name" />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input type="email" id="email" className="form-input" placeholder="you@example.com" />
              </div>
              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea id="message" rows="4" className="form-textarea" placeholder="How can we help you?"></textarea>
              </div>
              <div>
                <button type="submit" className="submit-btn">
                  Send Message
                </button>
              </div>
            </form>
          </div>
          
          {/* Contact Info (UPDATED) */}
          <div className="contact-info-wrapper">
            <div className="info-card">
              <h3 className="info-title">Our Office</h3>
              <p className="info-text">
                Sastha Hotels, Blue Hills<br />
                Opp. Govt Hospital, Mount Road<br /> 
                Coonoor, The Nilgiris - 643 102<br />
                Tamil Nadu
              </p>
            </div>
            <div className="info-card">
              <h3 className="info-title">Contact Details</h3>
              <p className="info-text">
                <strong>Phone:</strong> 
                <a href="tel:9342512112" className="contact-link"> 9342512112</a>
                <br />
                <strong>Email:</strong> 
                <a href="mailto:Support@sasthatoursandtravels" className="contact-link"> Support@sasthatoursandtravels</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;