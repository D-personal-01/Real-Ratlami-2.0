import React, { useEffect } from 'react';
import './StoryModal.css';
import brandLogo from '../assets/Trade Mark.png';
import heroBottles from '../assets/hero Bottles.png';
import { COMPANY_INFO } from '../data/flavors';

export default function StoryModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="story-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="story-title">
      <div className="story-modal-box" onClick={(e) => e.stopPropagation()}>
        <button 
          type="button" 
          className="story-close-btn" 
          onClick={onClose}
          aria-label="Close story modal"
        >
          ✕
        </button>

        <div className="story-header">
          <img src={brandLogo} alt="The Real Ratlami Logo" className="story-brand-img" />
          <h2 id="story-title" className="story-heading">The Real Ratlami Journey</h2>
          <p className="story-subtitle">From the Heart of Madhya Pradesh to Bottles Across India</p>
        </div>

        <div className="story-body">
          <div className="story-visual-strip">
            <img src={heroBottles} alt="The Real Ratlami 6 flavours" className="story-bottles-strip" />
          </div>

          <div className="story-text-content">
            <div className="story-quote-card">
              <p>"{COMPANY_INFO.couplet}"</p>
            </div>

            <p>
              <strong>The Real Ratlami</strong> was born from a simple, powerful idea: to bring the authentic, time-honored taste of Ratlam to every home across India. Founded in the historic city of Ratlam, Madhya Pradesh, our journey began with a passion for preserving traditional Indian digestive beverages in a modern, pristine format.
            </p>

            <p>
              Inspired by the bustling bazaars and vibrant culinary heritage of Ratlam, we set out to craft cold beverages that capture the essence of true desi refreshment: bold, aromatic, and unapologetically Indian.
            </p>

            <p>
              We believe that great taste comes from authentic, unadulterated ingredients. That is why we source whole roasted cumin seeds, Himalayan black salt (kala namak), and fresh natural fruit pulps. Operating from our state-of-the-art facility in Indore, Madhya Pradesh, under strict FSSAI hygiene standards, we ensure that every bottle delivers the legendary fizz and digestive comfort that has made us a trusted favorite.
            </p>
          </div>

          {/* 4 Pillars from about.html */}
          <div className="story-pillars">
            <div className="pillar-item">
              <span className="pillar-number">A</span>
              <h4>Authenticity</h4>
              <p>Preserving traditional Indian recipes and real roasted Malwa cumin.</p>
            </div>
            <div className="pillar-item">
              <span className="pillar-number">Q</span>
              <h4>Quality</h4>
              <p>FSSAI approved, with strict hygiene and quality standards at every step.</p>
            </div>
            <div className="pillar-item">
              <span className="pillar-number">A</span>
              <h4>Affordability</h4>
              <p>At just ₹10 per bottle, premium desi refreshment is accessible to every Indian home.</p>
            </div>
            <div className="pillar-item">
              <span className="pillar-number">S</span>
              <h4>Sustainability</h4>
              <p>Responsible manufacturing and recyclable packaging built for the future.</p>
            </div>
          </div>

          {/* Quality & Craftsmanship Statement */}
          <div className="story-factory-card">
            <h4>🌟 Authentic Malwa Heritage & Quality</h4>
            <p>
              Every batch is crafted under strict quality standards in Madhya Pradesh, bringing the time-tested digestive traditions of Ratlam to households across India.
            </p>
          </div>
        </div>

        <div className="story-footer">
          <button type="button" className="btn-pill btn-pill-navy" onClick={onClose}>
            Explore the Flavours
          </button>
        </div>
      </div>
    </div>
  );
}
