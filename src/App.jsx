import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureSpotlight from './components/FeatureSpotlight';
import FlavorShowcase from './components/FlavorShowcase';
import FlavorModal from './components/FlavorModal';
import CartDrawer from './components/CartDrawer';
import SearchModal from './components/SearchModal';
import StoryModal from './components/StoryModal';
import InquiryModal from './components/InquiryModal';
import LoadingScreen from './components/LoadingScreen';
import Footer from './components/Footer';
import { FLAVORS } from './data/flavors';

export default function App() {
  // Cart state with localStorage persistence
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('ratlami_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [selectedFlavor, setSelectedFlavor] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isStoryOpen, setIsStoryOpen] = useState(false);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // Sync cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('ratlami_cart', JSON.stringify(cart));
    } catch (e) {
      console.warn('Failed to save cart to localStorage', e);
    }
  }, [cart]);

  // Global keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage((current) => (current === message ? null : current));
    }, 3200);
  };

  const handleAddToCart = (flavorOrItem, quantity = 1) => {
    const itemId = flavorOrItem.flavorId 
      ? flavorOrItem.id 
      : `${flavorOrItem.id}-single`;

    const itemName = flavorOrItem.flavorId 
      ? flavorOrItem.name 
      : `${flavorOrItem.name} (${flavorOrItem.volume})`;

    const itemPrice = flavorOrItem.price;
    const itemImg = flavorOrItem.bottleImg;

    setCart((prev) => {
      const existing = prev.find((item) => item.id === itemId);
      if (existing) {
        return prev.map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [
        ...prev,
        {
          id: itemId,
          name: itemName,
          price: itemPrice,
          bottleImg: itemImg,
          quantity: quantity
        }
      ];
    });

    showToast(`Added ${itemName} to your cart`);
  };

  const handleUpdateQuantity = (itemId, newQuantity) => {
    setCart((prev) =>
      prev.map((item) => (item.id === itemId ? { ...item, quantity: newQuantity } : item))
    );
  };

  const handleRemoveFromCart = (itemId) => {
    setCart((prev) => prev.filter((item) => item.id !== itemId));
  };

  const scrollToFlavors = () => {
    const el = document.getElementById('flavors-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="site-wrapper">
      {/* 1-Second #d9b8b8 Fizz Loading Screen */}
      <LoadingScreen />

      {/* Navigation Bar */}
      <Navbar 
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenStory={() => setIsStoryOpen(true)}
      />

      {/* Main Page Sections */}
      <main id="main-content">
        <Hero 
          onExploreClick={scrollToFlavors} 
          onContactClick={() => setIsInquiryOpen(true)} 
        />
        <FeatureSpotlight onExploreClick={scrollToFlavors} />
        <FlavorShowcase 
          flavors={FLAVORS}
          onSelectFlavor={(flavor) => setSelectedFlavor(flavor)}
          onAddToCart={handleAddToCart}
          onShopAll={() => setIsCartOpen(true)}
        />
      </main>

      {/* Site Footer */}
      <Footer 
        onOpenStory={() => setIsStoryOpen(true)}
        onExploreFlavors={scrollToFlavors}
        onOpenInquiry={() => setIsInquiryOpen(true)}
      />

      {/* Modals & Slide-out Drawers */}
      <FlavorModal 
        flavor={selectedFlavor}
        onClose={() => setSelectedFlavor(null)}
        onAddToCart={handleAddToCart}
      />

      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={() => setCart([])}
        onExploreFlavors={() => {
          setIsCartOpen(false);
          scrollToFlavors();
        }}
      />

      <SearchModal 
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        flavors={FLAVORS}
        onSelectFlavor={(flavor) => setSelectedFlavor(flavor)}
        onAddToCart={handleAddToCart}
      />

      <StoryModal 
        isOpen={isStoryOpen}
        onClose={() => setIsStoryOpen(false)}
      />

      <InquiryModal 
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <aside className="toast-notification" role="status" aria-live="polite">
          <span className="toast-check" aria-hidden="true">✓</span>
          <span className="toast-text">{toastMessage}</span>
          <button 
            type="button" 
            className="toast-view-cart-btn"
            onClick={() => {
              setToastMessage(null);
              setIsCartOpen(true);
            }}
          >
            View Cart
          </button>
        </aside>
      )}
    </div>
  );
}
