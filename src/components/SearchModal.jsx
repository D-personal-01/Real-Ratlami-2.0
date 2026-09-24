import React, { useState, useEffect, useRef } from 'react';
import './SearchModal.css';

export default function SearchModal({ isOpen, onClose, flavors, onSelectFlavor, onAddToCart }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const results = query.trim() === ''
    ? flavors
    : flavors.filter(f => 
        f.name.toLowerCase().includes(query.toLowerCase()) ||
        f.subtitle.toLowerCase().includes(query.toLowerCase()) ||
        f.description.toLowerCase().includes(query.toLowerCase()) ||
        f.ingredients.some(i => i.toLowerCase().includes(query.toLowerCase()))
      );

  return (
    <div className="search-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-label="Search Flavors">
      <div className="search-modal-box" onClick={(e) => e.stopPropagation()}>
        {/* Search Input Bar */}
        <div className="search-input-header">
          <svg className="search-box-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>

          <input 
            ref={inputRef}
            type="search" 
            className="search-input-field" 
            placeholder="Search by flavor, spice, or fruit (e.g. Zeera, Mint, Lemon, Lychee)..." 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search drinks"
          />

          <button 
            type="button" 
            className="search-close-btn" 
            onClick={onClose}
            aria-label="Close search"
          >
            ✕
          </button>
        </div>

        {/* Results List */}
        <div className="search-results-list">
          {results.length === 0 ? (
            <div className="search-no-results">
              <p>No fizzy flavors found matching "{query}".</p>
              <span>Try searching for "cumin", "nimbu", "mango", or "mojito".</span>
            </div>
          ) : (
            results.map((flavor) => (
              <div 
                key={flavor.id} 
                className="search-result-row"
                onClick={() => { onSelectFlavor(flavor); onClose(); }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    onSelectFlavor(flavor);
                    onClose();
                  }
                }}
              >
                <div className="search-thumb" style={{ backgroundColor: flavor.bgTint }}>
                  <img src={flavor.bottleImg} alt={flavor.name} />
                </div>

                <div className="search-info">
                  <h4 className="search-title">{flavor.name}</h4>
                  <p className="search-subtitle">{flavor.subtitle} • {flavor.volume}</p>
                </div>

                <div className="search-price-col">
                  <span className="search-price">₹{flavor.price}</span>
                  <button 
                    type="button" 
                    className="search-add-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      onAddToCart(flavor);
                    }}
                    aria-label={`Add ${flavor.name} to cart`}
                  >
                    + Add
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
