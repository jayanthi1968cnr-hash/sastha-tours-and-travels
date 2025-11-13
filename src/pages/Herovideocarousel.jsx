import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; // Add this import
import { ChevronRight, ChevronLeft } from 'lucide-react';
import './Herovideocarousel.css';

// Video data - 4 videos WITHOUT poster/thumbnails
const videos = [
  {
    id: 1,
    src: '/assets/videos/hero-1.mp4',
    title: 'Customized International Adventures',
    subtitle: 'Let Our Experts Plan Your Trip',
    description: 'Experience the epitome of luxury and adventure with our customized international journeys.'
  },
  {
    id: 2,
    src: '/assets/videos/hero-2.mp4',
    title: 'Discover Scenic Mountain Escapes',
    subtitle: 'Nature at Its Best',
    description: 'Explore breathtaking mountain destinations with expert-guided tours and premium stays.'
  },
  {
    id: 3,
    src: '/assets/videos/hero-3.mp4',
    title: 'Exotic Beach Destinations',
    subtitle: 'Relax & Unwind',
    description: 'Indulge in pristine beaches, luxury resorts, and unforgettable coastal experiences.'
  },
  {
    id: 4,
    src: '/assets/videos/hero-4.mp4',
    title: 'Cultural Heritage Tours',
    subtitle: 'Immerse in History',
    description: 'Journey through ancient temples, historic sites, and rich cultural experiences.'
  }
];

const HeroVideoCarousel = () => {
  const navigate = useNavigate(); // Add this hook
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(new Set());
  
  const video1Ref = useRef(null);
  const video2Ref = useRef(null);
  const [activePlayer, setActivePlayer] = useState(1); // Which video element is currently visible

  // Add call handler
  const handleCallClick = () => {
    window.location.href = 'tel:+919342512112';
  };

  // Preload first video on mount
  useEffect(() => {
    const firstVideo = video1Ref.current;
    if (!firstVideo) return;

    firstVideo.src = videos[0].src;
    firstVideo.load();

    const handleCanPlay = () => {
      setLoadedVideos(new Set([0]));
      setIsLoading(false);
      firstVideo.play().catch(err => console.log('Autoplay prevented:', err));
    };

    firstVideo.addEventListener('canplaythrough', handleCanPlay, { once: true });

    // Fallback timeout
    const fallbackTimer = setTimeout(() => {
      if (isLoading) {
        setIsLoading(false);
        firstVideo.play().catch(err => console.log('Play error:', err));
      }
    }, 5000);

    return () => {
      clearTimeout(fallbackTimer);
      firstVideo.removeEventListener('canplaythrough', handleCanPlay);
    };
  }, [isLoading]);

  // Preload next video in background
  useEffect(() => {
    if (isLoading) return;

    const nextIndex = (currentIndex + 1) % videos.length;
    if (loadedVideos.has(nextIndex)) return;

    const preloadVideo = document.createElement('video');
    preloadVideo.src = videos[nextIndex].src;
    preloadVideo.preload = 'auto';
    preloadVideo.load();

    preloadVideo.addEventListener('canplaythrough', () => {
      setLoadedVideos(prev => new Set([...prev, nextIndex]));
    }, { once: true });

    return () => {
      preloadVideo.src = '';
      preloadVideo.load();
    };
  }, [currentIndex, isLoading, loadedVideos]);

  // Handle smooth transition to next video
  const transitionToNext = () => {
    const nextIndex = (currentIndex + 1) % videos.length;
    const inactivePlayer = activePlayer === 1 ? 2 : 1;
    const inactiveVideoRef = inactivePlayer === 1 ? video1Ref : video2Ref;

    // Prepare the inactive video with next content
    if (inactiveVideoRef.current) {
      inactiveVideoRef.current.src = videos[nextIndex].src;
      inactiveVideoRef.current.load();
      inactiveVideoRef.current.currentTime = 0;
      
      // Start playing the next video
      inactiveVideoRef.current.play().then(() => {
        // Once it's playing, switch the active player
        setActivePlayer(inactivePlayer);
        setCurrentIndex(nextIndex);
      }).catch(err => console.log('Transition play error:', err));
    }
  };

  // Handle video end
  const handleVideoEnd = (playerNum) => {
    if (playerNum === activePlayer) {
      transitionToNext();
    }
  };

  // Manual navigation
  const goToVideo = (index) => {
    if (index === currentIndex) return;

    const inactivePlayer = activePlayer === 1 ? 2 : 1;
    const inactiveVideoRef = inactivePlayer === 1 ? video1Ref : video2Ref;

    if (inactiveVideoRef.current) {
      inactiveVideoRef.current.src = videos[index].src;
      inactiveVideoRef.current.load();
      inactiveVideoRef.current.currentTime = 0;
      
      inactiveVideoRef.current.play().then(() => {
        setActivePlayer(inactivePlayer);
        setCurrentIndex(index);
      }).catch(err => console.log('Manual nav play error:', err));
    }
  };

  const goToPrev = () => {
    const prevIndex = (currentIndex - 1 + videos.length) % videos.length;
    goToVideo(prevIndex);
  };

  const goToNext = () => {
    const nextIdx = (currentIndex + 1) % videos.length;
    goToVideo(nextIdx);
  };

  return (
    <>
      {/* Loading Screen */}
      {isLoading && (
        <div className="video-loading-screen">
          <div className="loading-content">
            <div className="loading-spinner-wrapper">
              <div className="loading-spinner-bg"></div>
              <div className="loading-spinner"></div>
            </div>
            
            <h2 className="loading-title">
              Loading Your Journey
            </h2>
            <p className="loading-subtitle">
              Preparing an extraordinary experience...
            </p>
            
            <div className="loading-progress-bar">
              <div className="loading-progress-fill"></div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Video Carousel */}
      <section className="hero-video-section">
        {/* Video Player 1 */}
        <video
          ref={video1Ref}
          className={`hero-video ${activePlayer === 1 ? 'active' : 'inactive'}`}
          muted
          playsInline
          onEnded={() => handleVideoEnd(1)}
        />

        {/* Video Player 2 */}
        <video
          ref={video2Ref}
          className={`hero-video ${activePlayer === 2 ? 'active' : 'inactive'}`}
          muted
          playsInline
          onEnded={() => handleVideoEnd(2)}
        />

        {/* Overlay Gradient */}
        <div className="hero-video-overlay"></div>

        {/* Content Overlay */}
        <div className="hero-video-content">
          {/* White Contact Banner */}
          <div className="contact-banner">
            <span className="contact-text">Feel free to connect with us</span>
            <button className="call-btn" onClick={handleCallClick}>
              <svg className="phone-icon" fill="currentColor" viewBox="0 0 24 24" width="18" height="18">
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
              </svg>
              Call
            </button>
          </div>

          {/* Main Content */}
          <div className="hero-video-main-content">
            <h1 className="hero-video-title" key={`title-${currentIndex}`}>
              {videos[currentIndex].title}
            </h1>
            <h2 className="hero-video-subtitle" key={`subtitle-${currentIndex}`}>
              {videos[currentIndex].subtitle}
            </h2>
            <p className="hero-video-description" key={`desc-${currentIndex}`}>
              {videos[currentIndex].description}
              <br />
              Discover breathtaking destinations with Sastha Travels.
            </p>
            
            <button 
              className="explore-packages-btn"
              onClick={() => navigate('/explore-packages')}
            >
              Explore Packages
              <ChevronRight className="btn-arrow" size={20} />
            </button>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrev}
          className="video-nav-arrow video-nav-left"
          aria-label="Previous video"
        >
          <ChevronLeft size={28} />
        </button>

        <button
          onClick={goToNext}
          className="video-nav-arrow video-nav-right"
          aria-label="Next video"
        >
          <ChevronRight size={28} />
        </button>

        {/* Dot Navigation */}
        <div className="video-dot-navigation">
          {videos.map((video, index) => (
            <button
              key={video.id}
              onClick={() => goToVideo(index)}
              className={`video-dot ${index === currentIndex ? 'video-dot-active' : ''}`}
              aria-label={`Go to video ${index + 1}`}
            >
              {loadedVideos.has(index) && index !== currentIndex && (
                <span className="video-dot-loaded"></span>
              )}
            </button>
          ))}
        </div>

        {/* Loading indicator for next video */}
        {!loadedVideos.has((currentIndex + 1) % videos.length) && (
          <div className="next-video-loading">
            <div className="loading-dot"></div>
            <span>Loading next...</span>
          </div>
        )}
      </section>
    </>
  );
};

export default HeroVideoCarousel;