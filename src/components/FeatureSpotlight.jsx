import React from 'react';
import './FeatureSpotlight.css';
import zeeraBottle from '../assets/Zeera.png';

export default function FeatureSpotlight({ onExploreClick, onContactClick }) {
  return (
    <section className="feature-section" id="feature-section" aria-labelledby="feature-heading">
      <div className="container feature-container">
        {/* Left Column: Hand-crafted Feature Drink with Splash */}
        <div className="feature-visual-col">
          <div className="feature-visual-wrapper">
            {/* Ambient Background Glow */}
            <div className="feature-glow-circle" aria-hidden="true"></div>

            {/* Bottle with Fizz Drops */}
            <div className="feature-bottle-container">
              <img 
                src={zeeraBottle} 
                alt="Ratlami Zeera sparkling soda bottle with roasted cumin essence" 
                className="feature-bottle-img"
                loading="lazy"
              />

              {/* Fizzy Splash & Droplet Accents */}
              <div className="fizz-splash fizz-splash-1" aria-hidden="true">
                <svg width="60" height="60" viewBox="0 0 100 100" fill="none">
                  <path d="M50 0 C55 20, 65 35, 90 40 C65 45, 55 60, 50 80 C45 60, 35 45, 10 40 C35 35, 45 20, 50 0Z" fill="rgba(225, 135, 100, 0.45)"/>
                </svg>
              </div>
              
              <div className="fizz-droplet droplet-1" aria-hidden="true"></div>
              <div className="fizz-droplet droplet-2" aria-hidden="true"></div>
              <div className="fizz-droplet droplet-3" aria-hidden="true"></div>
            </div>

            {/* Feature Tag */}
            <div className="feature-hero-badge">
              <span className="badge-bullet">★</span>
              <span>160 ml • ₹10 Only</span>
            </div>
          </div>
        </div>

        {/* Right Column: Benefits & Editorial Copy */}
        <div className="feature-content-col">
          {/* Benefit Pills / Icons */}
          <div className="feature-benefits-list">
            <div className="feature-benefit-item">
              <div className="benefit-icon-circle" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1A2C42" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
                  <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
                </svg>
              </div>
              <div className="benefit-text">
                <span className="benefit-title">Authentic Desi Spices</span>
                <span className="benefit-desc">Roasted cumin, rock salt, and fresh chatpata botanicals</span>
              </div>
            </div>

            <div className="feature-benefit-item">
              <div className="benefit-icon-circle" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1A2C42" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <div className="benefit-text">
                <span className="benefit-title">FSSAI & GST Certified Quality</span>
                <span className="benefit-desc">Produced under strict hygiene and temperature controls</span>
              </div>
            </div>

            <div className="feature-benefit-item">
              <div className="benefit-icon-circle" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1A2C42" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 6v6l4 2"></path>
                </svg>
              </div>
              <div className="benefit-text">
                <span className="benefit-title">Affordable for Everyone (₹10 Only)</span>
                <span className="benefit-desc">Pocket-friendly daily refreshment crafted for every Indian home</span>
              </div>
            </div>
          </div>

          {/* Section Headline & Narrative */}
          <h2 id="feature-heading" className="feature-title">
            Fizz with a fresh twist
          </h2>

          {/* Authentic Brand Couplet */}
          <div className="brand-couplet-box">
            <p className="brand-couplet-text">
              "Desi Thanda, Real Ratlami: har ghoont mein asli swaad, aur har pal mein thandak."
            </p>
          </div>

          <p className="feature-subtext">
            Crafted in the historic soil of Madhya Pradesh, The Real Ratlami brings the authentic digestive heritage of Ratlam right to your table: bold, refreshing, and unmistakably desi.
          </p>

          <div className="feature-action">
            <button 
              type="button" 
              className="btn-pill btn-pill-terracotta"
              onClick={onExploreClick}
            >
              <span>Explore All 6 Flavours</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
