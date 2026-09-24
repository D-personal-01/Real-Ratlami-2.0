import React from 'react';
import './Footer.css';
import brandLogo from '../assets/Trade Mark.png';
import { COMPANY_INFO } from '../data/flavors';

export default function Footer({ onOpenStory, onExploreFlavors, onOpenInquiry }) {
  return (
    <footer className="site-footer" id="contact">
      <div className="container footer-container">
        {/* Brand Column */}
        <div className="footer-brand-col">
          <img src={brandLogo} alt="The Real Ratlami Trademark" className="footer-brand-logo" />
          <p className="footer-brand-desc">
            Made with carefully selected desi ingredients, The Real Ratlami delivers bold flavour, perfect fizz, and trusted quality in every sip.
          </p>
          <div className="footer-badge-pill">
            <span>🇮🇳 India Ka Desi Thanda • FSSAI Approved</span>
          </div>

          {/* Social Links */}
          <div className="footer-social-row" aria-label="Social media links">
            <a 
              href={COMPANY_INFO.whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon-btn whatsapp-social"
              aria-label="Contact on WhatsApp"
              title="Chat on WhatsApp"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.066-2.127-.53-1.834-.761-3.007-2.617-3.099-2.738-.093-.122-.738-.982-.738-1.87 0-.889.467-1.328.633-1.507.167-.179.366-.224.488-.224.123 0 .245.002.352.007.113.005.263-.043.412.316.155.375.529 1.291.575 1.385.046.094.077.204.015.328-.061.124-.092.202-.183.311-.093.109-.195.244-.279.328-.093.094-.19.196-.082.381.109.186.483.797 1.037 1.29 1.139 1.014 1.144 1.018 1.306 1.096.162.079.257.068.352-.041.096-.109.412-.48.522-.644.11-.164.22-.137.368-.082.149.055.945.446 1.108.527.162.082.27.123.31.192.04.069.04.4-.104.805z"/>
              </svg>
            </a>

            <a 
              href={COMPANY_INFO.instagramUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon-btn instagram-social"
              aria-label="Follow on Instagram"
              title="Instagram"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            <a 
              href={COMPANY_INFO.facebookUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon-btn facebook-social"
              aria-label="Facebook page"
              title="Facebook"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>

            <a 
              href={COMPANY_INFO.youtubeUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon-btn youtube-social"
              aria-label="YouTube channel"
              title="YouTube"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* 6 Flavours Links */}
        <div className="footer-links-col">
          <h4 className="footer-heading">Flavours (₹10)</h4>
          <ul className="footer-links-list">
            <li>
              <button type="button" onClick={onExploreFlavors} className="footer-link-btn">
                Ratlami Zeera (160 ml)
              </button>
            </li>
            <li>
              <button type="button" onClick={onExploreFlavors} className="footer-link-btn">
                Ratlami Nimbu Masala (160 ml)
              </button>
            </li>
            <li>
              <button type="button" onClick={onExploreFlavors} className="footer-link-btn">
                Ratlami Mint Mojito (160 ml)
              </button>
            </li>
            <li>
              <button type="button" onClick={onExploreFlavors} className="footer-link-btn">
                Ratlami Blueberry (160 ml)
              </button>
            </li>
            <li>
              <button type="button" onClick={onExploreFlavors} className="footer-link-btn">
                Ratlami Lychee (160 ml)
              </button>
            </li>
            <li>
              <button type="button" onClick={onExploreFlavors} className="footer-link-btn">
                Ratlami Mango Aamras (200 ml)
              </button>
            </li>
          </ul>
        </div>

        {/* Company & Heritage */}
        <div className="footer-links-col">
          <h4 className="footer-heading">Company</h4>
          <ul className="footer-links-list">
            <li>
              <button type="button" onClick={onOpenStory} className="footer-link-btn">
                Our Ratlam Heritage
              </button>
            </li>
            <li>
              <button type="button" onClick={onOpenStory} className="footer-link-btn">
                FSSAI & Quality Standards
              </button>
            </li>
            <li>
              <button type="button" onClick={onOpenInquiry} className="footer-link-btn">
                Wholesale Dealership
              </button>
            </li>
            <li>
              <a href="#feature-section" className="footer-link-btn">
                Digestive Wellness
              </a>
            </li>
          </ul>
        </div>

        {/* Direct Contact & Inquiries */}
        <div className="footer-links-col">
          <h4 className="footer-heading">Get in Touch</h4>
          <div className="footer-contact-box">
            <span className="contact-label">Customer Support & Sales:</span>
            <a href={COMPANY_INFO.phoneTel} className="contact-val contact-link">
              {COMPANY_INFO.phone}
            </a>

            <span className="contact-label">Official Email:</span>
            <a href={`mailto:${COMPANY_INFO.email}`} className="contact-val contact-link">
              {COMPANY_INFO.email}
            </a>

            <button 
              type="button" 
              className="footer-inquiry-btn" 
              onClick={onOpenInquiry}
            >
              Send Dealership Inquiry ↗
            </button>
          </div>
        </div>
      </div>

      {/* Official Legal Disclaimer Strip */}
      <div className="footer-disclaimer-strip">
        <div className="container">
          <p>{COMPANY_INFO.disclaimer}</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom-bar">
        <div className="container footer-bottom-container">
          <p>© {new Date().getFullYear()} The Real Ratlami. All rights reserved. Made with care in Ratlam & Indore, India.</p>
          <div className="footer-bottom-links">
            <a href="#hero">ratlamizeera.com</a>
            <span>•</span>
            <button type="button" onClick={onOpenInquiry} className="inline-text-btn">Inquiry</button>
            <span>•</span>
            <button type="button" onClick={onOpenStory} className="inline-text-btn">Our Story</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
