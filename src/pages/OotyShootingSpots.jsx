import React, { useState, useEffect } from 'react';
import './OotyShootingSpots.css';

// --- Data for Shooting Locations ---
const shootingLocations = [
    {
        id: 1,
        name: "Pine Forest – The Most Famous Tamil Cinema Spot",
        description: "The Ooty Pine Forest has appeared in hundreds of movies. Its tall, perfectly aligned pine trees create a magical brown-golden backdrop — ideal for romantic scenes, emotional moments and song sequences.",
        movies: "Ghilli, Deiva Thirumagal, Saamy, Raja Rani, Dil, Roja, and many more.",
        loveIt: "Walk between the tall trees, breathe the cool forest air, and take stunning cinematic photos.",
        images: [
            {
                src: "/assets/images/pine-forest-1.jpg",
                alt: "Tall pine trees in Ooty's Pine Forest"
            },
            {
                src: "/assets/images/pine-forest-2.jpg",
                alt: "Pine forest pathway in Ooty"
            },
            {
                src: "/assets/images/pine-forest-3.jpg",
                alt: "Sunlight through pine trees"
            }
        ]
    },
    {
        id: 2,
        name: "Ooty Lake – Classic Shooting Spot for Romantic Songs",
        description: "Ooty Lake is a favourite location for boats, slow-motion scenes, dramatic reflections on water, and song sequences.",
        movies: "Aashiqui, Suryavamsam, Priyamanavale, Gentleman",
        loveIt: "Enjoy a boat ride, click film-style pictures, and capture that perfect 'movie moment' with mist and calm water.",
        images: [
            {
                src: "/assets/images/ooty-lake-1.jpg",
                alt: "A serene view of Ooty Lake with boats"
            },
            {
                src: "/assets/images/ooty-lake-2.jpg",
                alt: "Boats on Ooty Lake at sunset"
            },
            {
                src: "/assets/images/ooty-lake-3.jpg",
                alt: "Misty morning at Ooty Lake"
            }
        ]
    },
    {
        id: 3,
        name: "Doddabetta Peak – Moments Above the Clouds",
        description: "At 8,650 ft, Doddabetta gives you a true cinematic top-of-the-world feeling.",
        famousFor: ["Clouds touching the viewpoints", "Wide-angle shots", "Scenes of walking on hill edges", "Sunrise and sunset orange glow"],
        movies: "Bombay, Paiyaa, Kushi",
        images: [
            {
                src: "/assets/images/doddabetta-peak-1.jpg",
                alt: "View from Doddabetta Peak above the clouds"
            },
            {
                src: "/assets/images/doddabetta-peak-2.jpg",
                alt: "Mountain peak sunrise view"
            },
            {
                src: "/assets/images/doddabetta-peak-3.jpg",
                alt: "Clouds rolling over mountain peaks"
            }
        ]
    },
    {
        id: 4,
        name: "Tea Estates – Evergreen Backdrop for Every Film",
        description: "Ooty's tea gardens are the most recognisable film locations in South India.",
        spots: "Glenmorgan, Kodanadu, Korakundah, Kundah.",
        movies: "Roja, Alaipayuthey, Malayalam classics, Telugu romantic movies.",
        loveIt: "Walk through emerald tea fields and take the perfect 'hero/heroine walking shot'.",
        images: [
            {
                src: "/assets/images/tea-estates-1.jpg",
                alt: "Lush green tea estates in Ooty"
            },
            {
                src: "/assets/images/tea-estates-2.jpg",
                alt: "Tea plantation workers in the field"
            },
            {
                src: "/assets/images/tea-estates-3.jpg",
                alt: "Rolling hills of tea gardens"
            }
        ]
    },
    {
        id: 5,
        name: "Wenlock Downs – The 'Mini New Zealand' of India",
        description: "Massive green meadows stretching endlessly — this place is a director's favourite for wide shots, running scenes, and emotional moments.",
        movies: "Minsara Kanavu, Mudhalvan, Deiva Magan",
        loveIt: "Feel the wind, open meadows and 360° cinematic views.",
        images: [
            {
                src: "/assets/images/wenlock-downs-1.jpg",
                alt: "Expansive green meadows of Wenlock Downs"
            },
            {
                src: "/assets/images/wenlock-downs-2.jpg",
                alt: "Rolling green hills and meadows"
            },
            {
                src: "/assets/images/wenlock-downs-3.jpg",
                alt: "Wide open grassland with blue sky"
            }
        ]
    },
    {
        id: 6,
        name: "Pykara Lake & Waterfalls – The Silver Screen Favourite",
        description: "Pykara's pristine water and waterfalls give a magical vibe seen in many famous movie moments.",
        movies: "Brindavanam, Kandukonden Kandukonden, Ajith & Vijay film scenes",
        loveIt: "Quiet lake, forest ambience, and breathtaking photos.",
        images: [
            {
                src: "/assets/images/pykara-lake-1.jpg",
                alt: "Pykara Lake with its surrounding forest"
            },
            {
                src: "/assets/images/pykara-waterfall.jpg",
                alt: "Pykara waterfalls cascading down"
            },
            {
                src: "/assets/images/pykara-lake-2.jpg",
                alt: "Serene lake surrounded by nature"
            }
        ]
    },
    {
        id: 7,
        name: "Botanical Garden – Iconic Shooting Destination",
        description: "This garden's colourful lawns, exotic flowers and symmetrical pathways have been used in movie scenes for decades.",
        movies: "Jo Jeeta Wohi Sikandar, Malayalam romance movies, Tamil family films.",
        loveIt: "Family photos, slow-motion videos, couple shots.",
        images: [
            {
                src: "/assets/images/botanical-garden-1.jpg",
                alt: "Colorful flower beds in Ooty's Botanical Garden"
            },
            {
                src: "/assets/images/botanical-garden-2.jpg",
                alt: "Beautiful garden pathways and flowers"
            },
            {
                src: "/assets/images/botanical-garden-3.jpg",
                alt: "Lush botanical garden landscape"
            }
        ]
    }
];

// --- Hero Banner Images from local assets ---
const heroImages = [
    {
        src: '/assets/images/ooty-place.jpg',
        alt: 'Beautiful Ooty landscape'
    },
    {
        src: '/assets/images/pykara-waterfall.jpg',
        alt: 'Pykara waterfall cascading down'
    },
    {
        src: '/assets/images/ooty-road.jpg',
        alt: 'Scenic Ooty road winding through hills'
    },
    {
        src: '/assets/images/mountains.jpg',
        alt: 'Majestic mountains of Ooty'
    },
    {
        src: '/assets/images/tiger.jpg',
        alt: 'Tiger in the wild'
    },
    {
        src: '/assets/images/deer.jpg',
        alt: 'Deer in natural habitat'
    },
    {
        src: '/assets/images/elephants.jpg',
        alt: 'Elephants in the forest'
    },
    {
        src: '/assets/images/wild-buffalo.jpg',
        alt: 'Wild buffalo in nature'
    }
];

// --- YouTube Videos for Filmmaker's Dream Section ---
const filmmakerVideos = [
    {
        id: 1,
        videoId: 'WKX5x3KZXfY', // Replace with actual Ooty shooting spot video IDs
        title: 'Ooty Toy Train - Famous Movie Dil Se..'
    },
    {
        id: 2,
        videoId: 'n5lSCqG70QY', // Replace with actual video ID
        title: 'Tea Estates of Ooty - Cinema Paradise'
    },
    {
        id: 3,
        videoId: 'oot8LLP3QdA', // Replace with actual video ID
        title: 'Ooty Lake Shooting Spots'
    },
    {
        id: 4,
        videoId: 'f8ZpS9hyyk', // Replace with actual video ID
        title: 'Doddabetta Peak Views'
    },
    {
        id: 5,
        videoId: 'dQw4w9WgXcQ', // Replace with actual video ID
        title: 'Wenlock Downs - Mini New Zealand'
    },
    {
        id: 6,
        videoId: 'dQw4w9WgXcQ', // Replace with actual video ID
        title: 'Pykara Waterfalls Cinematic Views'
    },
    {
        id: 7,
        videoId: 'dQw4w9WgXcQ', // Replace with actual video ID
        title: 'Botanical Garden Film Shoots'
    },
    {
        id: 8,
        videoId: 'dQw4w9WgXcQ', // Replace with actual video ID
        title: 'Best of Ooty Shooting Locations'
    }
];

// --- Loading Screen Component ---
const LoadingScreen = ({ progress }) => (
    <div className="loading-screen">
        <div className="loading-content">
            <div className="loading-logo">
                <h1>Sastha Tours</h1>
                <p>Ooty Shooting Spots</p>
            </div>
            <div className="loading-bar-container">
                <div className="loading-bar" style={{ width: `${progress}%` }}></div>
            </div>
            <p className="loading-text">{Math.round(progress)}% Loaded</p>
        </div>
    </div>
);

// --- Components ---

const Hero = ({ heroImagesPreloaded }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [nextImageIndex, setNextImageIndex] = useState(1);
    const [nextImageLoaded, setNextImageLoaded] = useState(false);

    useEffect(() => {
        if (!heroImagesPreloaded) return;

        const interval = setInterval(() => {
            const nextIndex = (currentImageIndex + 1) % heroImages.length;
            
            // Preload next image in background
            const img = new Image();
            img.src = heroImages[nextIndex].src;
            img.onload = () => {
                // Only transition after next image is loaded
                setNextImageIndex(nextIndex);
                setNextImageLoaded(true);
                
                // Small delay to ensure smooth transition
                setTimeout(() => {
                    setCurrentImageIndex(nextIndex);
                    setNextImageLoaded(false);
                }, 50);
            };
        }, 6000); // Change image every 6 seconds

        return () => clearInterval(interval);
    }, [currentImageIndex, heroImagesPreloaded]);

    return (
        <header className="hero-banner">
            {/* Image Carousel Background */}
            <div className="hero-carousel">
                {heroImages.map((image, index) => (
                    <div
                        key={index}
                        className={`hero-slide ${
                            index === currentImageIndex ? 'active' : ''
                        } ${index === nextImageIndex && nextImageLoaded ? 'next-slide' : ''}`}
                        style={{ backgroundImage: `url(${image.src})` }}
                        aria-label={image.alt}
                    />
                ))}
            </div>

            {/* Overlay gradient */}
            <div className="hero-overlay"></div>

            {/* Content */}
            <div className="hero-content">
                <div className="hero-text">
                    <h1>Ooty Shooting Spots – Explore the Real Filmy Locations</h1>
                    <p className="subtext">Walk through iconic movie locations with Sastha Tours.</p>
                </div>
                <div className="seo-description">
                    "Ooty is one of India's most popular filming destinations. Explore the famous shooting spots like Pine Forest, Tea Estates, Wenlock Downs, Pykara Falls and more. Perfect for families, photographers, couples and movie lovers."
                </div>
            </div>

            {/* Carousel Indicators */}
            <div className="carousel-indicators">
                {heroImages.map((_, index) => (
                    <button
                        key={index}
                        className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
                        onClick={() => {
                            if (index !== currentImageIndex) {
                                // Preload image before switching
                                const img = new Image();
                                img.src = heroImages[index].src;
                                img.onload = () => {
                                    setCurrentImageIndex(index);
                                };
                            }
                        }}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </header>
    );
};

const VideoCarousel = () => {
    const carouselRef = React.useRef(null);

    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({
                left: -320, // Scroll one video width
                behavior: 'smooth'
            });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({
                left: 320, // Scroll one video width
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="video-carousel-container">
            <button className="carousel-nav-btn left" onClick={scrollLeft} aria-label="Scroll left">
                ‹
            </button>
            
            <div className="video-carousel" ref={carouselRef}>
                {filmmakerVideos.map((video) => (
                    <div key={video.id} className="video-item">
                        <div className="video-wrapper">
                            <iframe
                                src={`https://www.youtube.com/embed/${video.videoId}`}
                                title={video.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <p className="video-title">{video.title}</p>
                    </div>
                ))}
            </div>
            
            <button className="carousel-nav-btn right" onClick={scrollRight} aria-label="Scroll right">
                ›
            </button>
        </div>
    );
};

const Intro = () => (
    <section className="intro-section">
        <h2>🎬 Shooting Spots in Ooty</h2>
        <p className="tagline">Walk Through the Scenes of Your Favourite Movies</p>
        <p>Ooty has always been more than a hill station. It is India's cinematic paradise — where rolling green hills, misty valleys, silent lakes and winding forest roads have created magic on screen for decades.</p>
        <p>From classic Tamil and Malayalam blockbusters to Bollywood favourites, hundreds of movies have been filmed here. Now, with Sastha Tours, you can experience these legendary locations exactly how the stars did.</p>
        
        <div className="filmmaker-dream">
            <h3>⭐ Why Ooty is Every Filmmaker's Dream</h3>
            
            <VideoCarousel />
        </div>
    </section>
);

const ShootingLocationCard = ({ location }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Different intervals for different locations to avoid synchronized changes
    const getIntervalForLocation = (id) => {
        const intervals = {
            1: 4200,  // Pine Forest
            2: 5100,  // Ooty Lake
            3: 3800,  // Doddabetta Peak
            4: 4700,  // Tea Estates
            5: 5400,  // Wenlock Downs
            6: 3500,  // Pykara Lake & Waterfalls
            7: 4900   // Botanical Garden
        };
        return intervals[id] || 4000;
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % location.images.length);
        }, getIntervalForLocation(location.id));

        return () => clearInterval(interval);
    }, [location.images.length, location.id]);

    return (
        <div className="location-card">
            <div className="location-image-carousel">
                {location.images.map((image, index) => (
                    <img
                        key={index}
                        src={image.src}
                        alt={image.alt}
                        className={`location-image ${index === currentImageIndex ? 'active' : ''}`}
                        loading="lazy"
                    />
                ))}
                <div className="carousel-dots">
                    {location.images.map((_, index) => (
                        <button
                            key={index}
                            className={`dot ${index === currentImageIndex ? 'active' : ''}`}
                            onClick={() => setCurrentImageIndex(index)}
                            aria-label={`View image ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
            <div className="location-info">
                <h3>{location.name}</h3>
                <p>{location.description}</p>
                <p><strong>Movies Shot Here:</strong> {location.movies}</p>
                {location.loveIt && <p><strong>Why Visitors Love It:</strong> {location.loveIt}</p>}
                {location.famousFor && (
                    <>
                        <strong>Why It's Famous:</strong>
                        <ul>
                            {location.famousFor.map(item => <li key={item}>{item}</li>)}
                        </ul>
                    </>
                )}
                {location.spots && <p><strong>Popular Spots:</strong> {location.spots}</p>}
            </div>
        </div>
    );
};

const LocationsSection = () => (
    <section className="locations-section">
        <h2>📸 Top Shooting Locations in Ooty</h2>
        <div className="locations-grid">
            {shootingLocations.map(loc => <ShootingLocationCard key={loc.id} location={loc} />)}
        </div>
    </section>
);

const PhotoshootPackage = () => (
    <section className="photoshoot-section">
        <h3>Exclusive Photoshoot Packages</h3>
        <p>We don't just show you the shooting locations. We help you experience them like a star. Turn your visit into a cinematic memory with our optional photoshoot add-on!</p>
        <ul>
            <li>✔ Guided visit to all major shooting spots</li>
            <li>✔ Photo-friendly timings (morning mist / evening light)</li>
            <li>✔ Hidden shooting locations not known to many tourists</li>
            <li>✔ Optional cinematic photoshoot add-on</li>
            <li>✔ Comfortable cab, experienced local driver</li>
            <li>✔ Custom route based on your favourite movies</li>
        </ul>
    </section>
);

const Testimonials = () => (
     <section className="testimonials-section">
        <h3>What Our Customers Say</h3>
        <div className="testimonial-grid">
            <div className="testimonial-card">
                <img src="/assets/images/customer-1.jpg" alt="A happy tourist in Ooty" loading="lazy" />
                <blockquote>"Felt like we were in a movie! The guide knew exactly where the iconic scenes from 'Ghilli' were shot. An unforgettable experience."</blockquote>
                <cite>- Priya & Kumar, Chennai</cite>
            </div>
             <div className="testimonial-card">
                <img src="/assets/images/customer-2.jpg" alt="A tourist posing in a tea garden" loading="lazy" />
                <blockquote>"The views at Wenlock Downs were breathtaking. Sastha Tours made sure we got there for the perfect morning light. Highly recommend!"</blockquote>
                <cite>- Anjali S., Bangalore</cite>
            </div>
        </div>
    </section>
);

const Booking = () => (
    <section className="booking-section">
        <h2>🎥 Create Your Own Movie Moments with Sastha Tours</h2>
        <div className="booking-content">
            <div className="pricing-info">
                <h4>Starting from ₹2,500/- per day</h4>
                <p>(Includes vehicle, driver, and guided tour for up to 4 people)</p>
            </div>
            <a href="https://wa.me/YOUR_WHATSAPP_NUMBER" className="whatsapp-button" target="_blank" rel="noopener noreferrer">
                Book Your Shooting Places Tour on WhatsApp
            </a>
        </div>
    </section>
);

// --- Main App Component ---
function OotyShootingSpotsPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadingProgress, setLoadingProgress] = useState(0);
    const [heroImagesPreloaded, setHeroImagesPreloaded] = useState(false);

    useEffect(() => {
        // Preload all hero images
        const heroImagePromises = heroImages.map((image) => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.src = image.src;
                img.onload = () => resolve();
                img.onerror = () => resolve(); // Resolve even on error to not block loading
            });
        });

        // Preload all location images (3 per location)
        const locationImagePromises = shootingLocations.flatMap((location) => {
            return location.images.map((image) => {
                return new Promise((resolve, reject) => {
                    const img = new Image();
                    img.src = image.src;
                    img.onload = () => resolve();
                    img.onerror = () => resolve();
                });
            });
        });

        const allImages = [...heroImagePromises, ...locationImagePromises];
        let loadedCount = 0;

        // Track progress for each image
        allImages.forEach((promise) => {
            promise.then(() => {
                loadedCount++;
                const progress = (loadedCount / allImages.length) * 100;
                setLoadingProgress(progress);
            });
        });

        // Wait for all images to load
        Promise.all(allImages).then(() => {
            setHeroImagesPreloaded(true);
            // Add a small delay for smooth transition
            setTimeout(() => {
                setIsLoading(false);
            }, 500);
        });
    }, []);

    if (isLoading) {
        return <LoadingScreen progress={loadingProgress} />;
    }

    return (
        <div className="ooty-filmy-tour-page page-loaded">
            <Hero heroImagesPreloaded={heroImagesPreloaded} />
            <main>
                <Intro />
                <LocationsSection />
                <PhotoshootPackage />
                <Testimonials />
                <Booking />
            </main>
        </div>
    );
}

export default OotyShootingSpotsPage;