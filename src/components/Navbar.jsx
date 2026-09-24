import React, { useState, useEffect } from 'react';
import './Navbar.css';
import brandLogo from '../assets/Trade Mark.png';

export default function Navbar({ cartCount, onOpenCart, onOpenSearch, onOpenStory }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
      <div className="container header-container">
        {/* Left Navigation Links */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <button 
            type="button" 
            className="nav-link" 
            onClick={() => handleNavClick('flavors-section')}
          >
            Shop
          </button>
          <button 
            type="button" 
            className="nav-link" 
            onClick={() => handleNavClick('flavors-section')}
          >
            Flavors
          </button>
          <button 
            type="button" 
            className="nav-link" 
            onClick={onOpenStory}
          >
            Our Story
          </button>
        </nav>

        {/* Center Brand Identity */}
        <div className="brand-logo-area">
          <a href="#" className="brand-link" aria-label="The Real Ratlami Home">
            <span className="brand-leaf-icon" aria-hidden="true">
              <svg width="22" height="18" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 18C12 18 10 12 4 9C10 9 12 18 12 18Z" fill="#141B22"/>
                <path d="M12 18C12 18 14 12 20 9C14 9 12 18 12 18Z" fill="#141B22"/>
              </svg>
            </span>
            <span className="brand-title">RATLAMI</span>
          </a>
        </div>

        {/* Right Action Icons */}
        <div className="header-actions">
          <button 
            type="button" 
            className="header-icon-btn" 
            onClick={onOpenSearch} 
            aria-label="Search Flavors"
            title="Search Flavors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>

          <button 
            type="button" 
            className="header-icon-btn cart-btn" 
            onClick={onOpenCart} 
            aria-label={`Shopping Cart with ${cartCount} items`}
            title="View Cart"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>

          {/* Mobile Menu Hamburger */}
          <button 
            type="button" 
            className="mobile-menu-toggle" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            <span className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-drawer-overlay" onClick={() => setMobileMenuOpen(false)}>
          <div className="mobile-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-drawer-header">
              <span className="brand-title">RATLAMI</span>
              <button 
                type="button" 
                className="close-drawer-btn" 
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>
            <nav className="mobile-nav-links">
              <button 
                type="button" 
                className="mobile-nav-link" 
                onClick={() => handleNavClick('flavors-section')}
              >
                Shop All Drinks
              </button>
              <button 
                type="button" 
                className="mobile-nav-link" 
                onClick={() => handleNavClick('flavors-section')}
              >
                Explore Flavors
              </button>
              <button 
                type="button" 
                className="mobile-nav-link" 
                onClick={() => handleNavClick('feature-section')}
              >
                Why Ratlami
              </button>
              <button 
                type="button" 
                className="mobile-nav-link" 
                onClick={() => { setMobileMenuOpen(false); onOpenStory(); }}
              >
                Our Heritage Story
              </button>
            </nav>
            <div className="mobile-drawer-footer">
              <img src={brandLogo} alt="The Real Ratlami Trademark" className="mobile-drawer-badge" />
              <p>India Ka Desi Thanda</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
