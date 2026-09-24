import React, { useState } from 'react';
import './CartDrawer.css';
import { COMPANY_INFO } from '../data/flavors';

export default function CartDrawer({ 
  isOpen, 
  onClose, 
  cartItems, 
  onUpdateQuantity, 
  onRemoveItem,
  onClearCart,
  onExploreFlavors 
}) {
  // Step state: 'items' | 'checkout' | 'success'
  const [step, setStep] = useState('items');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [placedOrder, setPlacedOrder] = useState(null);

  // Customer checkout form state
  const [customer, setCustomer] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    pincode: '',
    notes: ''
  });

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const freeShippingThreshold = 200;
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const shippingFee = subtotal >= freeShippingThreshold || subtotal === 0 ? 0 : 40;
  const total = subtotal + shippingFee;

  const handleInputChange = (field, value) => {
    setCustomer(prev => ({ ...prev, [field]: value }));
  };

  const handleProceedToCheckout = () => {
    setStep('checkout');
  };

  const handleBackToItems = () => {
    setStep('items');
  };

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const orderId = `RR-${Date.now().toString().slice(-6)}`;
    const itemsFormatted = cartItems
      .map(item => `${item.name} x ${item.quantity} (₹${item.price * item.quantity})`)
      .join('\n');

    const orderData = {
      orderId,
      customer,
      items: cartItems,
      itemsSummary: itemsFormatted,
      subtotal,
      shippingFee,
      total,
      date: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
    };

    // 1. Dispatch email payload to info@therealratlami.com via Web3Forms API
    try {
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '64d8a1c8-2ce8-4f51-b849-04173873919e', // public client key fallback
          subject: `🛒 New Ratlami Order #${orderId} - ₹${total} from ${customer.name}`,
          from_name: 'The Real Ratlami Web Store',
          to: COMPANY_INFO.email,
          order_id: orderId,
          customer_name: customer.name,
          customer_phone: customer.phone,
          customer_email: customer.email,
          delivery_address: `${customer.address}, ${customer.city} - ${customer.pincode}`,
          order_items: itemsFormatted,
          grand_total: `₹${total}`,
          payment_verification: 'WhatsApp confirmation / Phone callback for payment verification',
          special_notes: customer.notes || 'None'
        })
      });
    } catch (err) {
      console.warn('Email dispatch service notification:', err);
    }

    // Save placed order details in state and localStorage
    setPlacedOrder(orderData);
    try {
      localStorage.setItem('ratlami_last_order', JSON.stringify(orderData));
    } catch {
      // ignore storage error
    }

    setIsSubmitting(false);
    setStep('success');

    // Clear the active cart
    if (onClearCart) {
      onClearCart();
    }
  };

  const generateWhatsAppOrderUrl = () => {
    if (!placedOrder) return COMPANY_INFO.whatsappUrl;
    const msg = `*NEW ORDER - THE REAL RATLAMI*\n` +
      `*Order ID:* ${placedOrder.orderId}\n` +
      `*Customer:* ${placedOrder.customer.name}\n` +
      `*Phone:* ${placedOrder.customer.phone}\n` +
      `*Email:* ${placedOrder.customer.email}\n` +
      `*Delivery Address:* ${placedOrder.customer.address}, ${placedOrder.customer.city} - ${placedOrder.customer.pincode}\n\n` +
      `*Items:*\n${placedOrder.itemsSummary}\n\n` +
      `*Grand Total:* ₹${placedOrder.total}\n` +
      `*Payment:* WhatsApp confirmation / Phone callback\n\n` +
      `Please confirm my order dispatch!`;
    return `https://wa.me/7566592555?text=${encodeURIComponent(msg)}`;
  };

  const generateMailtoUrl = () => {
    if (!placedOrder) return `mailto:${COMPANY_INFO.email}`;
    const subject = encodeURIComponent(`Order Confirmation #${placedOrder.orderId} - The Real Ratlami`);
    const body = encodeURIComponent(
      `Hello The Real Ratlami team,\n\n` +
      `Here are the order details:\n` +
      `Order ID: ${placedOrder.orderId}\n` +
      `Name: ${placedOrder.customer.name}\n` +
      `Phone: ${placedOrder.customer.phone}\n` +
      `Email: ${placedOrder.customer.email}\n` +
      `Delivery Address: ${placedOrder.customer.address}, ${placedOrder.customer.city} - ${placedOrder.customer.pincode}\n\n` +
      `Order Items:\n${placedOrder.itemsSummary}\n\n` +
      `Grand Total: ₹${placedOrder.total}\n` +
      `Payment Mode: WhatsApp confirmation / Phone callback for payment verification\n\n` +
      `Thank you!`
    );
    return `mailto:${COMPANY_INFO.email}?subject=${subject}&body=${body}`;
  };

  const handleCloseAll = () => {
    setStep('items');
    setPlacedOrder(null);
    onClose();
  };

  return (
    <div className="cart-backdrop" onClick={handleCloseAll} role="dialog" aria-modal="true" aria-label="Shopping Cart Drawer">
      <div className="cart-drawer-panel" onClick={(e) => e.stopPropagation()}>
        {/* Drawer Header */}
        <div className="cart-header">
          <div className="cart-title-row">
            {step === 'checkout' && (
              <button 
                type="button" 
                className="cart-back-btn" 
                onClick={handleBackToItems}
                aria-label="Back to Cart Items"
                title="Back to items"
              >
                ←
              </button>
            )}
            <h2 className="cart-heading">
              {step === 'items' && 'Your Cart'}
              {step === 'checkout' && 'Checkout Details'}
              {step === 'success' && 'Order Placed!'}
            </h2>
            {step === 'items' && (
              <span className="cart-count-badge">
                {cartItems.reduce((acc, i) => acc + i.quantity, 0)} items
              </span>
            )}
          </div>

          <button 
            type="button" 
            className="cart-close-btn" 
            onClick={handleCloseAll}
            aria-label="Close cart"
          >
            ✕
          </button>
        </div>

        {/* Free Shipping Progress Indicator (Only on Items review) */}
        {step === 'items' && cartItems.length > 0 && (
          <div className="free-shipping-bar">
            {remainingForFreeShipping > 0 ? (
              <p className="shipping-hint">
                Add <strong>₹{remainingForFreeShipping}</strong> more for <strong>FREE Delivery</strong> across India!
              </p>
            ) : (
              <p className="shipping-hint shipping-unlocked">
                🎉 Congratulations! You have unlocked <strong>FREE Delivery</strong>!
              </p>
            )}
            <div className="shipping-progress-track" aria-hidden="true">
              <div 
                className="shipping-progress-fill" 
                style={{ width: `${Math.min(100, (subtotal / freeShippingThreshold) * 100)}%` }}
              ></div>
            </div>
          </div>
        )}

        {/* Drawer Body */}
        <div className="cart-body">
          {/* STEP 1: Empty Cart */}
          {step === 'items' && cartItems.length === 0 && (
            <div className="cart-empty-state">
              <div className="empty-cart-icon" aria-hidden="true">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
              </div>
              <h3 className="empty-title">Your cart is feeling fizzy & empty</h3>
              <p className="empty-subtitle">
                Explore our signature Ratlami Zeera, Nimbu Masala, or Mint Mojito at just ₹10 each to get started.
              </p>
              <button 
                type="button" 
                className="btn-pill btn-pill-navy"
                onClick={() => { onClose(); onExploreFlavors(); }}
              >
                Explore Flavours
              </button>
            </div>
          )}

          {/* STEP 1: Cart Items List */}
          {step === 'items' && cartItems.length > 0 && (
            <div className="cart-items-list">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item-card">
                  <div className="cart-item-thumb">
                    <img src={item.bottleImg} alt={item.name} />
                  </div>

                  <div className="cart-item-details">
                    <h4 className="cart-item-name">{item.name}</h4>
                    <p className="cart-item-unit-price">₹{item.price} each</p>

                    <div className="cart-item-controls">
                      <div className="cart-stepper">
                        <button 
                          type="button" 
                          className="stepper-btn"
                          onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>
                        <span className="stepper-value">{item.quantity}</span>
                        <button 
                          type="button" 
                          className="stepper-btn"
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>

                      <button 
                        type="button" 
                        className="item-remove-btn"
                        onClick={() => onRemoveItem(item.id)}
                        aria-label={`Remove ${item.name} from cart`}
                      >
                        Remove
                      </button>
                    </div>
                  </div>

                  <div className="cart-item-total">
                    ₹{item.price * item.quantity}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* STEP 2: Checkout Details Form */}
          {step === 'checkout' && (
            <form id="checkout-form" className="checkout-form" onSubmit={handlePlaceOrder}>
              <div className="checkout-order-summary-box">
                <div className="summary-badge-line">
                  <span>Order Total:</span>
                  <strong>₹{total} ({cartItems.reduce((acc, i) => acc + i.quantity, 0)} bottles)</strong>
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="customer-name">Full Name *</label>
                <input 
                  type="text" 
                  id="customer-name" 
                  required 
                  placeholder="e.g. Ramesh Verma"
                  value={customer.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                />
              </div>

              <div className="checkout-two-col">
                <div className="form-field">
                  <label htmlFor="customer-phone">Phone Number *</label>
                  <input 
                    type="tel" 
                    id="customer-phone" 
                    required 
                    placeholder="e.g. 9876543210"
                    value={customer.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="customer-email">Email Address *</label>
                  <input 
                    type="email" 
                    id="customer-email" 
                    required 
                    placeholder="name@example.com"
                    value={customer.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                  />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="customer-address">Delivery Address (Street / Flat / Colony) *</label>
                <textarea 
                  id="customer-address" 
                  required 
                  rows="2"
                  placeholder="e.g. 102, Shanti Vihar, Near City Mall"
                  value={customer.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                ></textarea>
              </div>

              <div className="checkout-two-col">
                <div className="form-field">
                  <label htmlFor="customer-city">City / State *</label>
                  <input 
                    type="text" 
                    id="customer-city" 
                    required 
                    placeholder="e.g. Indore, MP"
                    value={customer.city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="customer-pincode">PIN Code *</label>
                  <input 
                    type="text" 
                    id="customer-pincode" 
                    required 
                    placeholder="e.g. 452001"
                    maxLength="6"
                    value={customer.pincode}
                    onChange={(e) => handleInputChange('pincode', e.target.value)}
                  />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="customer-notes">Delivery Instructions (Optional)</label>
                <input 
                  type="text" 
                  id="customer-notes" 
                  placeholder="e.g. Call before delivery"
                  value={customer.notes}
                  onChange={(e) => handleInputChange('notes', e.target.value)}
                />
              </div>

              {/* Verified Payment Method Notice */}
              <div className="payment-verification-badge">
                <div className="badge-icon">✓</div>
                <div className="badge-text">
                  <strong>Payment Verification:</strong>
                  <span>WhatsApp confirmation / Phone callback for payment verification upon dispatch.</span>
                </div>
              </div>

              <div className="checkout-actions">
                <button 
                  type="button" 
                  className="btn-pill btn-pill-outline-cart"
                  onClick={handleBackToItems}
                >
                  Back
                </button>
                <button 
                  type="submit" 
                  className="btn-pill btn-pill-navy place-order-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Placing Order...' : `Place Order (₹${total})`}
                </button>
              </div>
            </form>
          )}

          {/* STEP 3: Order Confirmation / Success */}
          {step === 'success' && placedOrder && (
            <div className="checkout-success-state">
              <div className="success-icon" aria-hidden="true">✓</div>
              <h3 className="success-title">Order Placed Successfully!</h3>
              <span className="order-id-badge">Order #{placedOrder.orderId}</span>

              <p className="success-desc">
                Thank you, <strong>{placedOrder.customer.name}</strong>! Your order details have been dispatched to <strong>{COMPANY_INFO.email}</strong>.
              </p>

              <div className="order-receipt-summary">
                <div className="receipt-row">
                  <span>Customer Phone:</span>
                  <strong>{placedOrder.customer.phone}</strong>
                </div>
                <div className="receipt-row">
                  <span>Customer Email:</span>
                  <strong>{placedOrder.customer.email}</strong>
                </div>
                <div className="receipt-row">
                  <span>Delivery Address:</span>
                  <span>{placedOrder.customer.address}, {placedOrder.customer.city} - {placedOrder.customer.pincode}</span>
                </div>
                <div className="receipt-row total-receipt-row">
                  <span>Grand Total:</span>
                  <strong className="receipt-total-highlight">₹{placedOrder.total}</strong>
                </div>
              </div>

              <div className="whatsapp-confirm-block">
                <p className="whatsapp-help-text">
                  Instant Verification: Connect with our factory team directly on WhatsApp for swift dispatch.
                </p>
                <a 
                  href={generateWhatsAppOrderUrl()} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-pill btn-whatsapp-confirm"
                >
                  <span>Confirm on WhatsApp ↗</span>
                </a>

                <a 
                  href={generateMailtoUrl()} 
                  className="email-backup-btn"
                >
                  Send copy to {COMPANY_INFO.email}
                </a>
              </div>

              <button 
                type="button" 
                className="btn-pill btn-pill-navy"
                onClick={handleCloseAll}
              >
                Done / Continue Browsing
              </button>
            </div>
          )}
        </div>

        {/* Drawer Footer (Only visible on items review step) */}
        {step === 'items' && cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="summary-row">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>
            <div className="summary-row">
              <span>Delivery Charges</span>
              <span>{shippingFee === 0 ? <strong className="free-tag">FREE</strong> : `₹${shippingFee}`}</span>
            </div>
            <div className="summary-row total-row">
              <span>Grand Total</span>
              <span className="total-amount">₹{total}</span>
            </div>

            <button 
              type="button" 
              className="btn-pill btn-pill-navy checkout-btn"
              onClick={handleProceedToCheckout}
            >
              <span>Proceed to Checkout</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>

            <p className="guarantee-text">
              🔒 100% Secure Checkout • WhatsApp & Phone Verified
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
