import React from 'react';
import './Hero.css';
import heroBottles from '../assets/hero Bottles.png';

export default function Hero({ onExploreClick, onContactClick }) {
  return (
    <section className="hero-section" id="hero" aria-labelledby="hero-heading">
      {/* Decorative Botanical Leaf Silhouettes */}
      <div className="hero-leaf-overlay hero-leaf-top-left" aria-hidden="true"></div>
      <div className="hero-leaf-overlay hero-leaf-bottom-right" aria-hidden="true"></div>

      <div className="container hero-container">
        {/* Left Column: Editorial Headline & Actions */}
        <div className="hero-content">
          <div className="hero-badge-pill">
            <span className="hero-badge-dot"></span>
            <span>INDIA KA DESI THANDA</span>
          </div>

          <h1 id="hero-heading" className="hero-title">
            A bolder kind of fizz
          </h1>

          <p className="hero-subtext-lead">
            Six legendary flavours. One authentic brand. Made in the spirit of Ratlam: bold, real, and refreshingly desi.
          </p>

          <div className="hero-cta-group">
            <button 
              type="button" 
              className="btn-pill btn-pill-navy hero-cta-btn"
              onClick={onExploreClick}
            >
              <span>Explore Flavours</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>

            <button 
              type="button" 
              className="btn-pill btn-pill-outline-hero hero-cta-btn"
              onClick={onContactClick}
            >
              <span>Dealership & Inquiries</span>
            </button>
          </div>

          {/* Authentic Client Stats Bar */}
          <div className="hero-stats-bar">
            <div className="hero-stat-card">
              <span className="stat-number">6</span>
              <span className="stat-title">Flavours</span>
            </div>
            <div className="hero-stat-divider" aria-hidden="true"></div>
            <div className="hero-stat-card">
              <span className="stat-number">100%</span>
              <span className="stat-title">Taste Guaranteed</span>
            </div>
            <div className="hero-stat-divider" aria-hidden="true"></div>
            <div className="hero-stat-card">
              <span className="stat-number highlight-price">₹10</span>
              <span className="stat-title">Only / Bottle</span>
            </div>
          </div>
        </div>

        {/* Right Column: Podium Beverage Showcase */}
        <div className="hero-visual">
          {/* Studio Pedestals / Geometry */}
          <div className="podium-stage">
            <div className="podium podium-back-center" aria-hidden="true"></div>
            <div className="podium podium-mid-left" aria-hidden="true"></div>
            <div className="podium podium-mid-right" aria-hidden="true"></div>
            <div className="podium podium-front" aria-hidden="true"></div>

            {/* Bottles Lineup */}
            <div className="hero-bottles-wrapper">
              <img 
                src={heroBottles} 
                alt="The Real Ratlami beverage lineup: Lychee, Mojito, Blueberry, Nimbu Masala, and Zeera" 
                className="hero-bottles-image"
                loading="eager"
              />

              {/* Floating Sparkle / Fizz Bubbles */}
              <div className="bubble bubble-1" aria-hidden="true"></div>
              <div className="bubble bubble-2" aria-hidden="true"></div>
              <div className="bubble bubble-3" aria-hidden="true"></div>
            </div>

            {/* Floating Quick Flavor Tags */}
            <div className="floating-badge badge-zeera">
              <span className="badge-tag">Classic</span>
              <span className="badge-name">Ratlami Zeera • ₹10</span>
            </div>

            <div className="floating-badge badge-mojito">
              <span className="badge-tag">Signature</span>
              <span className="badge-name">Mint Mojito • ₹10</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
