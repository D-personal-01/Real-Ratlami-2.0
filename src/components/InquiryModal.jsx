import React, { useState, useEffect } from 'react';
import './InquiryModal.css';
import { COMPANY_INFO } from '../data/flavors';

export default function InquiryModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    inquiryType: 'Dealership / Wholesale',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello The Real Ratlami team, I am interested in: ${formData.inquiryType}. My name is ${formData.name || 'a customer'} from ${formData.city || 'India'}.`
    );
    window.open(`https://wa.me/7566592555?text=${text}`, '_blank');
  };

  return (
    <div className="inquiry-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="inquiry-heading">
      <div className="inquiry-modal-box" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="inquiry-close-btn" onClick={onClose} aria-label="Close modal">
          ✕
        </button>

        <div className="inquiry-header">
          <span className="inquiry-badge">DIRECT FACTORY CONTACT</span>
          <h2 id="inquiry-heading" className="inquiry-title">Dealership & Bulk Inquiries</h2>
          <p className="inquiry-subtitle">
            Partner with India Ka Desi Thanda. Accessible wholesale rates for distributors, retailers, and events.
          </p>
        </div>

        {submitted ? (
          <div className="inquiry-success-state">
            <div className="success-badge-icon" aria-hidden="true">✓</div>
            <h3>Thank You for Reaching Out!</h3>
            <p>
              We have received your message. Our team in Ratlam and Indore will contact you within 24 hours.
            </p>
            <div className="whatsapp-prompt-box">
              <p>Need instant response?</p>
              <button 
                type="button" 
                className="btn-pill btn-whatsapp" 
                onClick={handleWhatsAppDirect}
              >
                Chat on WhatsApp Now
              </button>
            </div>
            <button 
              type="button" 
              className="btn-pill btn-pill-navy" 
              onClick={() => { setSubmitted(false); onClose(); }}
            >
              Close
            </button>
          </div>
        ) : (
          <form className="inquiry-form" onSubmit={handleSubmit}>
            <div className="form-row-two">
              <div className="form-field">
                <label htmlFor="inquiry-name">Full Name *</label>
                <input 
                  type="text" 
                  id="inquiry-name" 
                  required 
                  placeholder="e.g. Ramesh Verma" 
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-field">
                <label htmlFor="inquiry-phone">Phone Number *</label>
                <input 
                  type="tel" 
                  id="inquiry-phone" 
                  required 
                  placeholder="e.g. +91 98765 43210" 
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
            </div>

            <div className="form-row-two">
              <div className="form-field">
                <label htmlFor="inquiry-email">Email Address</label>
                <input 
                  type="email" 
                  id="inquiry-email" 
                  placeholder="name@example.com" 
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="form-field">
                <label htmlFor="inquiry-city">City / State *</label>
                <input 
                  type="text" 
                  id="inquiry-city" 
                  required 
                  placeholder="e.g. Indore, MP" 
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                />
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="inquiry-type">Inquiry Type</label>
              <select 
                id="inquiry-type"
                value={formData.inquiryType}
                onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
              >
                <option value="Dealership / Wholesale">Dealership / Distributorship</option>
                <option value="Retail Stocking">Retail Store Stocking</option>
                <option value="Event Bulk Order">Event / Wedding Bulk Supply</option>
                <option value="General Feedback">General Customer Query</option>
              </select>
            </div>

            <div className="form-field">
              <label htmlFor="inquiry-message">Your Message</label>
              <textarea 
                id="inquiry-message" 
                rows="3" 
                placeholder="Tell us about your distribution network or quantity requirements..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>

            <div className="inquiry-submit-row">
              <button type="submit" className="btn-pill btn-pill-navy submit-btn-modal">
                Send Inquiry
              </button>

              <button 
                type="button" 
                className="btn-pill btn-whatsapp" 
                onClick={handleWhatsAppDirect}
                title="Chat with sales on WhatsApp"
              >
                WhatsApp Direct
              </button>
            </div>

            {/* Quick Contact Strip */}
            <div className="quick-contacts-footer">
              <div>
                <span>Call Us:</span>
                <a href={COMPANY_INFO.phoneTel}>{COMPANY_INFO.phone}</a>
              </div>
              <div>
                <span>Email Us:</span>
                <a href={`mailto:${COMPANY_INFO.email}`}>{COMPANY_INFO.email}</a>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
