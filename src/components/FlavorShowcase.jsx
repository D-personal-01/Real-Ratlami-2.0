import React, { useState } from 'react';
import './FlavorShowcase.css';

export default function FlavorShowcase({ flavors, onSelectFlavor, onAddToCart, onShopAll }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredFlavors = activeCategory === 'all'
    ? flavors
    : activeCategory === 'sparkling'
      ? flavors.filter(f => f.id === 'zeera' || f.id === 'nimbu-masala' || f.id === 'mojito' || f.id === 'blueberry')
      : flavors.filter(f => f.id === 'lychee' || f.id === 'aamras');

  return (
    <section className="flavors-section" id="flavors-section" aria-labelledby="flavors-heading">
      <div className="container flavors-container">
        {/* Section Heading */}
        <div className="flavors-header">
          <div className="flavors-eyebrow">INTRODUCING OUR</div>
          <h2 id="flavors-heading" className="flavors-title">
            Signature Desi Flavours
          </h2>
          <p className="flavors-subtitle">
            Six legendary flavours. Crafted with real spices, fresh citrus, and natural fruit pulp. Accessible to everyone at just ₹10 per bottle.
          </p>

          {/* Category Filter Pills */}
          <div className="flavor-filter-group" role="tablist" aria-label="Flavor categories">
            <button 
              type="button" 
              role="tab"
              aria-selected={activeCategory === 'all'}
              className={`filter-tab ${activeCategory === 'all' ? 'active' : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              All 6 Flavours
            </button>
            <button 
              type="button" 
              role="tab"
              aria-selected={activeCategory === 'sparkling'}
              className={`filter-tab ${activeCategory === 'sparkling' ? 'active' : ''}`}
              onClick={() => setActiveCategory('sparkling')}
            >
              Sparkling Desi Fizz (4)
            </button>
            <button 
              type="button" 
              role="tab"
              aria-selected={activeCategory === 'still'}
              className={`filter-tab ${activeCategory === 'still' ? 'active' : ''}`}
              onClick={() => setActiveCategory('still')}
            >
              Pure Fruit Still Drinks (2)
            </button>
          </div>
        </div>

        {/* Flavors Row / Grid */}
        <div className="flavors-grid" role="region" aria-label="Available drink flavors">
          {filteredFlavors.map((flavor) => (
            <article 
              key={flavor.id} 
              className="flavor-card"
              style={{ '--flavor-tint': flavor.bgTint, '--flavor-accent': flavor.accentColor }}
            >
              <div 
                className="flavor-card-image-box"
                onClick={() => onSelectFlavor(flavor)}
                role="button"
                tabIndex={0}
                aria-label={`View detailed poster and notes for ${flavor.name}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onSelectFlavor(flavor);
                  }
                }}
              >
                <div className="flavor-card-badge">
                  <span>{flavor.badge}</span>
                </div>

                <div className="flavor-card-volume">
                  <span>{flavor.volume}</span>
                </div>
                
                <img 
                  src={flavor.bottleImg} 
                  alt={`${flavor.name} ${flavor.volume} bottle`} 
                  className="flavor-bottle-image"
                  loading="lazy"
                />

                <div className="bottle-shadow" aria-hidden="true"></div>
                <div className="view-notes-overlay">
                  <span>Explore Poster & Specs ↗</span>
                </div>
              </div>

              <div className="flavor-card-info">
                <span className="flavor-tagline">{flavor.subtitle}</span>
                <h3 className="flavor-card-name">{flavor.name}</h3>
                
                <p className="flavor-card-price">
                  <span className="price-val">₹{flavor.price}</span> 
                  <span className="per-bottle">/ bottle</span>
                </p>

                <p className="flavor-official-stmt">"{flavor.statement}"</p>

                <div className="flavor-card-actions">
                  <button 
                    type="button" 
                    className="add-to-cart-btn"
                    onClick={() => onAddToCart(flavor)}
                    aria-label={`Add ${flavor.name} to cart`}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                    <span>Add to Cart</span>
                  </button>

                  <button 
                    type="button" 
                    className="quick-view-btn"
                    onClick={() => onSelectFlavor(flavor)}
                    aria-label={`Quick inspect ${flavor.name}`}
                    title="View Studio Poster"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="flavors-bottom-cta">
          <button 
            type="button" 
            className="btn-pill btn-pill-navy"
            onClick={onShopAll}
          >
            <span>Order Chilled Pack • ₹10 / Bottle</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>

        {/* Bottom Line Divider matching reference: FIND YOUR FAVORITE FIZZ */}
        <div className="flavors-divider-bar">
          <span className="divider-line" aria-hidden="true"></span>
          <span className="divider-text">FIND YOUR FAVORITE FIZZ.</span>
          <span className="divider-line" aria-hidden="true"></span>
        </div>

        {/* Botanical Leaf & Orange Slice Accents in Corners */}
        <div className="corner-accent corner-accent-left" aria-hidden="true">
          <svg width="100" height="90" viewBox="0 0 120 100" fill="none">
            <path d="M10 90C10 90 20 40 70 20C40 45 40 75 10 90Z" fill="#2E6B34" opacity="0.85"/>
            <path d="M40 95C40 95 60 50 110 40C80 65 70 85 40 95Z" fill="#3D8B44" opacity="0.9"/>
          </svg>
        </div>

        <div className="corner-accent corner-accent-right" aria-hidden="true">
          <svg width="110" height="110" viewBox="0 0 120 120" fill="none">
            <circle cx="60" cy="60" r="50" fill="#FFA500" opacity="0.9"/>
            <circle cx="60" cy="60" r="44" fill="#FFF3E0"/>
            <circle cx="60" cy="60" r="40" fill="#FF8C00"/>
            <path d="M60 20L60 100M20 60L100 60M31.7 31.7L88.3 88.3M31.7 88.3L88.3 31.7" stroke="#FFF3E0" strokeWidth="3"/>
          </svg>
        </div>
      </div>
    </section>
  );
}
