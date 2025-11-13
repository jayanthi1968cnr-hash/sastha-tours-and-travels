import React, { useState, useEffect } from 'react';
import { Shield, FileText, Plane, Briefcase, GraduationCap, Users, Camera, Check, ChevronRight } from 'lucide-react';
import './PassportVisa.css';

const PassportVisa = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=1600&auto=format&fit=crop'
  ];

  // Auto-scroll hero images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const services = [
    {
      IconComponent: FileText,
      title: 'Passport Application & Renewal',
      description: 'Complete assistance with new passport applications and renewals for all ages.',
    },
    {
      IconComponent: Plane,
      title: 'Tourist Visa',
      description: 'Get tourist visas for popular destinations worldwide with ease.',
    },
    {
      IconComponent: Briefcase,
      title: 'Business Visa',
      description: 'Fast-track business visa processing for international meetings and conferences.',
    },
    {
      IconComponent: Briefcase,
      title: 'Work Visa',
      description: 'Work permit and employment visa assistance for overseas opportunities.',
    },
    {
      IconComponent: GraduationCap,
      title: 'Student Visa',
      description: 'Student visa support for higher education abroad with document guidance.',
    },
    {
      IconComponent: Users,
      title: 'Family Visit Visa',
      description: 'Family reunion and visit visas to meet your loved ones abroad.',
    },
    {
      IconComponent: Camera,
      title: 'Documentation & Photo Correction',
      description: 'Professional document verification and passport photo services.',
    },
  ];

  const features = [
    'Document Preparation',
    'Application Submission',
    'Appointment Scheduling',
    'Progress Tracking',
  ];

  const processSteps = [
    {
      number: '1',
      title: 'Consultation',
      description: 'Discuss your requirements',
    },
    {
      number: '2',
      title: 'Documentation',
      description: 'Prepare necessary documents',
    },
    {
      number: '3',
      title: 'Submission',
      description: 'Submit your application',
    },
    {
      number: '4',
      title: 'Approval',
      description: 'Receive your passport/visa',
    },
  ];

  const handleWhatsAppClick = () => {
    const phoneNumber = '919342512112';
    const message = encodeURIComponent('Hi, I need help with passport/visa services.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handleCallClick = () => {
    window.location.href = 'tel:+919342512112';
  };

  return (
    <div className="passport-visa">
      {/* 3D Background Elements */}
      <div className="pv-3d-background">
        <div className="pv-3d-sphere pv-3d-sphere-1"></div>
        <div className="pv-3d-sphere pv-3d-sphere-2"></div>
        <div className="pv-3d-sphere pv-3d-sphere-3"></div>
      </div>

      {/* Hero Section with Auto-Scrolling Images */}
      <section className="pv-hero">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`pv-hero-slide ${index === currentImageIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
        <div className="pv-hero-overlay"></div>
        <div className="pv-hero-content">
          <div className="pv-hero-badge">
            <Shield className="pv-badge-icon" />
            Trusted Documentation Services
          </div>
          <h1 className="pv-hero-title">Hassle-Free Passport & Visa Assistance</h1>
          <p className="pv-hero-subtitle">
            Your travel documentation handled by experts with care and precision.
          </p>
          <div className="pv-hero-indicators">
            {heroImages.map((_, index) => (
              <button
                key={index}
                className={`pv-indicator ${index === currentImageIndex ? 'active' : ''}`}
                onClick={() => setCurrentImageIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="pv-description">
        <div className="pv-container">
          <div className="pv-description-content">
            <h2 className="pv-description-title">Why Choose Our Services?</h2>
            <p className="pv-description-text">
              Getting visas and passports can feel confusing — leave it to us. Sastha Tours & 
              Travels provides end-to-end support for preparing documents, submitting applications, 
              scheduling appointments, and tracking progress.
            </p>
            
            <div className="pv-description-features">
              {features.map((feature, index) => (
                <div key={index} className="pv-feature-item">
                  <Check className="pv-feature-icon-svg" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="pv-services">
        <div className="pv-container">
          <h2 className="pv-section-title">Our Services</h2>
          <div className="pv-services-grid">
            {services.map((service, index) => {
              const IconComponent = service.IconComponent;
              return (
                <div key={index} className="pv-service-card">
                  <div className="pv-service-icon-wrapper">
                    <IconComponent className="pv-service-icon-svg" />
                  </div>
                  <h3 className="pv-service-title">{service.title}</h3>
                  <p className="pv-service-description">{service.description}</p>
                  <ChevronRight className="pv-service-arrow" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="pv-process">
        <div className="pv-container">
          <h2 className="pv-section-title">Our Simple Process</h2>
          <div className="pv-process-steps">
            {processSteps.map((step, index) => (
              <React.Fragment key={index}>
                <div className="pv-step">
                  <div className="pv-step-number">{step.number}</div>
                  <h3 className="pv-step-title">{step.title}</h3>
                  <p className="pv-step-description">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="pv-step-connector">
                    <ChevronRight className="pv-connector-arrow" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pv-cta">
        <div className="pv-container">
          <div className="pv-cta-card">
            <div className="pv-cta-icon-wrapper">
              <Shield className="pv-cta-icon-svg" />
            </div>
            <h2 className="pv-cta-title">Need Help with Passport or Visa?</h2>
            <p className="pv-cta-subtitle">Contact us for expert guidance and support</p>
            <div className="pv-cta-buttons">
              <button className="pv-cta-button whatsapp" onClick={handleWhatsAppClick}>
                <svg className="pv-whatsapp-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Chat & Get Quote
              </button>
              <button className="pv-cta-button call" onClick={handleCallClick}>
                <svg className="pv-call-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                </svg>
                Call Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Footer */}
      <section className="pv-seo-footer">
        <div className="pv-container">
          <p className="pv-seo-text">
            Fast and reliable passport & visa services from Coonoor, The Nilgiris. Sastha Tours & Travels 
            provides comprehensive documentation support including passport applications, renewals, tourist visas, 
            business visas, student visas, work visas, and family visit visas with expert guidance and 24/7 support.
          </p>
        </div>
      </section>
    </div>
  );
};

export default PassportVisa;