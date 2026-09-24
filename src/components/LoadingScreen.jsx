import React, { useState, useEffect } from 'react';
import './LoadingScreen.css';

export default function LoadingScreen({ onFinish }) {
  const [fading, setFading] = useState(false);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    // 1-second display timer
    const fadeTimer = setTimeout(() => {
      setFading(true);
    }, 1000);

    // Unmount after smooth 400ms CSS transition
    const unmountTimer = setTimeout(() => {
      setMounted(false);
      if (onFinish) onFinish();
    }, 1400);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(unmountTimer);
    };
  }, [onFinish]);

  if (!mounted) return null;

  // The 6 signature Ratlami flavor colors
  const FLAVOR_DOTS = [
    { name: 'Zeera', color: '#D48628' },
    { name: 'Nimbu Masala', color: '#A1B828' },
    { name: 'Mint Mojito', color: '#1EB898' },
    { name: 'Blueberry', color: '#3A56D4' },
    { name: 'Lychee', color: '#D44A72' },
    { name: 'Mango Aamras', color: '#E87A1E' },
  ];

  return (
    <div 
      className={`fizz-loader-overlay ${fading ? 'fade-out' : ''}`}
      role="status" 
      aria-live="polite"
      aria-label="Loading The Real Ratlami website"
    >
      {/* Background rising effervescent bubbles */}
      <div className="fizz-bubbles-bg" aria-hidden="true">
        <span className="fizz-particle fizz-p1"></span>
        <span className="fizz-particle fizz-p2"></span>
        <span className="fizz-particle fizz-p3"></span>
        <span className="fizz-particle fizz-p4"></span>
        <span className="fizz-particle fizz-p5"></span>
        <span className="fizz-particle fizz-p6"></span>
      </div>

      <div className="fizz-loader-content">
        {/* Arc of 6 Flavor Dots matching user reference */}
        <div className="flavor-dots-arc" aria-hidden="true">
          {FLAVOR_DOTS.map((dot) => (
            <span 
              key={dot.name} 
              className="flavor-dot" 
              style={{ 
                backgroundColor: dot.color,
                color: dot.color
              }}
              title={dot.name}
            />
          ))}
        </div>

        {/* Brand Display */}
        <h1 className="fizz-brand-title">THE REAL RATLAMI</h1>

        {/* Tagline Subtext */}
        <p className="fizz-loader-subtext">
          <span>POPPING FLAVOURS</span>
          <span>•</span>
          <span>REAL DESI FIZZ...</span>
        </p>
      </div>
    </div>
  );
}
