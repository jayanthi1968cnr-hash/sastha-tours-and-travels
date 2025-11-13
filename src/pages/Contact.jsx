import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, MessageSquare } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // WhatsApp integration
    const phoneNumber = '919342512112';
    const message = encodeURIComponent(
      `*New Contact Form Submission*\n\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Subject: ${formData.subject}\n` +
      `Message: ${formData.message}`
    );
    
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const contactInfo = [
    {
      IconComponent: MapPin,
      title: 'Our Office',
      details: [
        'Sastha Hotels, Blue Hills',
        'Opp. Govt Hospital, Mount Road',
        'Coonoor, The Nilgiris - 643 102',
        'Tamil Nadu, India'
      ],
      color: '#2563eb'
    },
    {
      IconComponent: Phone,
      title: 'Call Us',
      details: ['+91 9342512112'],
      link: 'tel:+919342512112',
      color: '#10b981'
    },
    {
      IconComponent: Mail,
      title: 'Email Us',
      details: ['Support@sasthatoursandtravels.com'],
      link: 'mailto:Support@sasthatoursandtravels.com',
      color: '#f59e0b'
    },
    {
      IconComponent: Clock,
      title: 'Business Hours',
      details: [
        'Monday - Sunday',
        '24/7 Support Available',
        'Quick Response Guaranteed'
      ],
      color: '#8b5cf6'
    }
  ];

  const quickLinks = [
    { label: 'WhatsApp Chat', action: () => window.open('https://wa.me/919342512112', '_blank') },
    { label: 'Call Now', action: () => window.location.href = 'tel:+919342512112' },
    { label: 'Email Us', action: () => window.location.href = 'mailto:Support@sasthatoursandtravels.com' }
  ];

  return (
    <div className="contact-page">
      {/* 3D Background Elements */}
      <div className="contact-3d-background">
        <div className="contact-3d-sphere contact-3d-sphere-1"></div>
        <div className="contact-3d-sphere contact-3d-sphere-2"></div>
        <div className="contact-3d-sphere contact-3d-sphere-3"></div>
      </div>

      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-bg" style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600&auto=format&fit=crop)'
        }}>
          <div className="contact-hero-overlay"></div>
        </div>
        <div className="contact-hero-content">
          <div className="contact-hero-icon-group">
            <MessageSquare className="contact-message-icon" />
          </div>
          <h1 className="contact-hero-title">Get In Touch With Us</h1>
          <p className="contact-hero-subtitle">
            We're Here to Help You Plan Your Perfect Trip
          </p>
        </div>
      </section>

      <div className="contact-container">
        {/* Quick Contact Buttons */}
        <section className="contact-quick-actions">
          <div className="quick-actions-grid">
            {quickLinks.map((link, index) => (
              <button
                key={index}
                className="quick-action-btn"
                onClick={link.action}
              >
                {link.label}
              </button>
            ))}
          </div>
        </section>

        {/* Main Content Grid */}
        <div className="contact-grid">
          {/* Contact Form */}
          <div className="contact-form-section">
            <div className="contact-form-wrapper">
              <div className="form-header">
                <h2 className="form-title">Send us a Message</h2>
                <p className="form-description">
                  Fill out the form below and we'll get back to you as soon as possible
                </p>
              </div>

              {submitted ? (
                <div className="success-message">
                  <CheckCircle className="success-icon" />
                  <h3>Message Sent Successfully!</h3>
                  <p>We'll get back to you soon.</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-input"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-input"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone" className="form-label">Phone Number *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="form-input"
                        placeholder="+91 XXXXX XXXXX"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="subject" className="form-label">Subject *</label>
                      <select
                        id="subject"
                        name="subject"
                        className="form-input"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select Subject</option>
                        <option value="Hotel Booking">Hotel Booking</option>
                        <option value="Flight Booking">Flight Booking</option>
                        <option value="Local Transport">Local Transport</option>
                        <option value="Tour Package">Tour Package</option>
                        <option value="Catering Service">Catering Service</option>
                        <option value="Restaurant">Restaurant</option>
                        <option value="General Inquiry">General Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">Your Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="6"
                      className="form-textarea"
                      placeholder="Tell us how we can help you..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="submit-btn">
                    <Send className="btn-icon" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Info Cards */}
          <div className="contact-info-section">
            <div className="contact-info-wrapper">
              {contactInfo.map((info, index) => {
                const IconComponent = info.IconComponent;
                return (
                  <div key={index} className="info-card">
                    <div 
                      className="info-icon-wrapper"
                      style={{ background: `linear-gradient(135deg, ${info.color}, ${info.color}dd)` }}
                    >
                      <IconComponent className="info-icon" />
                    </div>
                    <h3 className="info-title">{info.title}</h3>
                    <div className="info-details">
                      {info.details.map((detail, idx) => (
                        info.link ? (
                          <a key={idx} href={info.link} className="info-link">
                            {detail}
                          </a>
                        ) : (
                          <p key={idx} className="info-text">{detail}</p>
                        )
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Map Section */}
        <section className="contact-map-section">
          <div className="map-wrapper">
            <iframe
              title="Sastha Tours & Travels Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3911.2891234567890!2d76.7963!3d11.3567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDIxJzI0LjEiTiA3NsKwNDcnNDYuNyJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="map-overlay-card">
            <MapPin className="map-overlay-icon" />
            <h3>Visit Our Office</h3>
            <p>Sastha Hotels, Blue Hills, Mount Road, Coonoor</p>
            <a
              href="https://maps.google.com/?q=Sastha+Hotels+Coonoor"
              target="_blank"
              rel="noopener noreferrer"
              className="map-link-btn"
            >
              Get Directions
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;