import React, { useState, useEffect } from 'react';
import './FlavorModal.css';

export default function FlavorModal({ flavor, onClose, onAddToCart }) {
  const [packType, setPackType] = useState('single'); // 'single', 'pack12', or 'pack24'
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!flavor) return null;

  const currentPrice = packType === 'single' 
    ? flavor.price 
    : packType === 'pack12' 
      ? flavor.pack12Price 
      : flavor.pack24Price;

  const itemTitle = packType === 'single' 
    ? `${flavor.name} (${flavor.volume})` 
    : packType === 'pack12' 
      ? `${flavor.name} (Pack of 12)` 
      : `${flavor.name} (Full Crate of 24)`;

  const handleAdd = () => {
    onAddToCart({
      id: `${flavor.id}-${packType}`,
      flavorId: flavor.id,
      name: itemTitle,
      price: currentPrice,
      volume: flavor.volume,
      bottleImg: flavor.bottleImg,
      packType: packType
    }, quantity);
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="flavor-modal-card" onClick={(e) => e.stopPropagation()}>
        <button 
          type="button" 
          className="modal-close-btn" 
          onClick={onClose}
          aria-label="Close modal"
        >
          ✕
        </button>

        <div className="modal-body-grid">
          {/* Left Column: Commercial Studio Poster */}
          <div className="modal-poster-col">
            <img 
              src={flavor.posterImg} 
              alt={`${flavor.name} studio commercial poster`} 
              className="modal-poster-img"
            />
            <div className="poster-zoom-hint">
              <span>{flavor.badge} • Studio Photography</span>
            </div>
          </div>

          {/* Right Column: Flavor Breakdown & Add to Cart */}
          <div className="modal-details-col">
            <span className="modal-flavor-tag" style={{ color: flavor.accentColor }}>
              {flavor.subtitle}
            </span>
            <h2 id="modal-title" className="modal-flavor-name">{flavor.name}</h2>
            
            <p className="modal-flavor-statement">"{flavor.statement}"</p>
            <p className="modal-flavor-desc">{flavor.description}</p>

            {/* Taste Profile Bars */}
            <div className="taste-profile-section">
              <h3 className="taste-profile-title">Taste Profile</h3>
              <div className="taste-bars-grid">
                <div className="taste-bar-item">
                  <div className="taste-bar-header">
                    <span>Fizz Level</span>
                    <span>{flavor.tasteProfile.fizz}/5</span>
                  </div>
                  <div className="taste-meter" aria-hidden="true">
                    <div className="taste-meter-fill" style={{ width: `${(flavor.tasteProfile.fizz / 5) * 100}%`, backgroundColor: flavor.accentColor }}></div>
                  </div>
                </div>

                <div className="taste-bar-item">
                  <div className="taste-bar-header">
                    <span>Desi Spice</span>
                    <span>{flavor.tasteProfile.spice}/5</span>
                  </div>
                  <div className="taste-meter" aria-hidden="true">
                    <div className="taste-meter-fill" style={{ width: `${(flavor.tasteProfile.spice / 5) * 100}%`, backgroundColor: flavor.accentColor }}></div>
                  </div>
                </div>

                <div className="taste-bar-item">
                  <div className="taste-bar-header">
                    <span>Sweetness</span>
                    <span>{flavor.tasteProfile.sweetness}/5</span>
                  </div>
                  <div className="taste-meter" aria-hidden="true">
                    <div className="taste-meter-fill" style={{ width: `${(flavor.tasteProfile.sweetness / 5) * 100}%`, backgroundColor: flavor.accentColor }}></div>
                  </div>
                </div>

                <div className="taste-bar-item">
                  <div className="taste-bar-header">
                    <span>Citrus & Tang</span>
                    <span>{flavor.tasteProfile.tangy}/5</span>
                  </div>
                  <div className="taste-meter" aria-hidden="true">
                    <div className="taste-meter-fill" style={{ width: `${(flavor.tasteProfile.tangy / 5) * 100}%`, backgroundColor: flavor.accentColor }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Ingredients & Benefits */}
            <div className="ingredients-box">
              <h4 className="box-title">Key Ingredients:</h4>
              <p className="ingredients-text">{flavor.ingredients.join(', ')}</p>
              <div className="specs-row">
                <span><strong>Net Qty:</strong> {flavor.volume}</span>
                <span><strong>Best Before:</strong> 12 months</span>
                <span><strong>FSSAI:</strong> Approved</span>
              </div>
            </div>

            {/* Pack Size Selector */}
            <div className="pack-selector-group">
              <label className="pack-selector-label">Select Pack Size:</label>
              <div className="pack-options pack-options-three">
                <button 
                  type="button" 
                  className={`pack-option-btn ${packType === 'single' ? 'active' : ''}`}
                  onClick={() => setPackType('single')}
                >
                  <span className="pack-name">Single Bottle</span>
                  <span className="pack-price">₹{flavor.price}</span>
                </button>

                <button 
                  type="button" 
                  className={`pack-option-btn ${packType === 'pack12' ? 'active' : ''}`}
                  onClick={() => setPackType('pack12')}
                >
                  <span className="pack-name">Pack of 12</span>
                  <span className="pack-price">₹{flavor.pack12Price}</span>
                </button>

                <button 
                  type="button" 
                  className={`pack-option-btn ${packType === 'pack24' ? 'active' : ''}`}
                  onClick={() => setPackType('pack24')}
                >
                  <span className="pack-name">Crate of 24</span>
                  <span className="pack-price">₹{flavor.pack24Price}</span>
                </button>
              </div>
            </div>

            {/* Quantity & CTA */}
            <div className="modal-cta-row">
              <div className="quantity-counter">
                <button 
                  type="button" 
                  className="counter-btn" 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  aria-label="Decrease quantity"
                >
                  −
                </button>
                <span className="counter-val">{quantity}</span>
                <button 
                  type="button" 
                  className="counter-btn" 
                  onClick={() => setQuantity(quantity + 1)}
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>

              <button 
                type="button" 
                className="btn-pill btn-pill-navy modal-add-btn"
                onClick={handleAdd}
              >
                <span>Add to Cart</span>
                <span className="cart-total-pill">• ₹{currentPrice * quantity}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
