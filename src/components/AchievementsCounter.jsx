import React, { useState, useEffect, useRef } from 'react';
import { Award, Users, MapPin } from 'lucide-react';
import './AchievementsCounter.css';

const AchievementsCounter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const sectionRef = useRef(null);

  // Intersection Observer to trigger animation EVERY TIME it becomes visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Reset and trigger animation every time it comes into view
            setIsVisible(true);
            setAnimationKey(prev => prev + 1); // Force re-render
          } else {
            // Reset when out of view
            setIsVisible(false);
          }
        });
      },
      { 
        threshold: 0.3, // Trigger when 30% visible
        rootMargin: '-50px' // Slight offset for better timing
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="achievements-section" ref={sectionRef}>
      <div className="achievements-container">
        <h2 className="achievements-title">Our Achievements</h2>
        <p className="achievements-subtitle">Trusted by thousands of travelers worldwide</p>

        <div className="achievements-grid">
          {/* Years of Experience */}
          <CounterCard
            key={`exp-${animationKey}`}
            icon={<Award className="counter-icon" />}
            endValue={15}
            suffix="+"
            label="Years of Experience"
            duration={3500} // Slower: 3.5 seconds
            isVisible={isVisible}
            delay={0}
          />

          {/* Happy Customers */}
          <CounterCard
            key={`customers-${animationKey}`}
            icon={<Users className="counter-icon" />}
            endValue={10000}
            suffix="+"
            label="Happy Customers"
            duration={4000} // Slower: 4 seconds
            isVisible={isVisible}
            delay={400}
          />

          {/* Destinations */}
          <CounterCard
            key={`destinations-${animationKey}`}
            icon={<MapPin className="counter-icon" />}
            endValue={100}
            suffix="+"
            label="Destinations"
            duration={3500} // Slower: 3.5 seconds
            isVisible={isVisible}
            delay={800}
          />
        </div>
      </div>
    </section>
  );
};

// Counter Card Component with Circular Progress
const CounterCard = ({ icon, endValue, suffix, label, duration, isVisible, delay }) => {
  const [count, setCount] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Reset counters when visibility changes
    if (!isVisible) {
      setCount(0);
      setProgress(0);
      return;
    }

    const timeout = setTimeout(() => {
      const increment = endValue / (duration / 16);
      const progressIncrement = 100 / (duration / 16);
      let currentCount = 0;
      let currentProgress = 0;

      const timer = setInterval(() => {
        currentCount += increment;
        currentProgress += progressIncrement;

        if (currentCount >= endValue) {
          setCount(endValue);
          setProgress(100);
          clearInterval(timer);
        } else {
          setCount(Math.floor(currentCount));
          setProgress(Math.min(currentProgress, 100));
        }
      }, 16);

      return () => clearInterval(timer);
    }, delay);

    return () => clearTimeout(timeout);
  }, [isVisible, endValue, duration, delay]);

  // Calculate circle stroke dash offset
  const circumference = 2 * Math.PI * 60; // radius = 60
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="counter-card">
      {/* Icon with Circular Progress Ring */}
      <div className="counter-icon-wrapper">
        <svg className="progress-ring" width="140" height="140">
          {/* Background circle - light gray */}
          <circle
            className="progress-ring-circle-bg"
            stroke="#f0f0f0"
            strokeWidth="6"
            fill="white"
            r="60"
            cx="70"
            cy="70"
          />
          {/* Progress circle - dark orange */}
          <circle
            className="progress-ring-circle"
            stroke="#ff5722"
            strokeWidth="6"
            fill="transparent"
            r="60"
            cx="70"
            cy="70"
            style={{
              strokeDasharray: circumference,
              strokeDashoffset: strokeDashoffset,
            }}
          />
        </svg>

        {/* Icon in center - white on transparent */}
        <div className="counter-icon-inner">
          {icon}
        </div>
      </div>

      {/* Counter Number and Label */}
      <div className="counter-content">
        <div className="counter-number">
          {count.toLocaleString()}
          <span className="counter-suffix">{suffix}</span>
        </div>
        <div className="counter-label">{label}</div>
      </div>
    </div>
  );
};

export default AchievementsCounter;