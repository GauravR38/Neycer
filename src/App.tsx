import { useState, useEffect } from 'react';
import { Page, CartItem, Product } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';
import AboutUs from './components/AboutUs';
import Clients from './components/Clients';
import DealerLocator from './components/DealerLocator';
import Offers from './components/Offers';
import ReachUs from './components/ReachUs';
import Catalogue from './components/Catalogue';
import Login from './components/Login';
import Cart from './components/Cart';
import BusinessAssociate from './components/BusinessAssociate';
import Investors from './components/Investors';
import PrivacyPolicy from './components/PrivacyPolicy';
import ShippingReturnPolicy from './components/ShippingReturnPolicy';
import TermsAndConditions from './components/TermsAndConditions';

export default function App() {
  // Page routing state
  const [currentPage, setCurrentPage] = useState<Page>(() => {
    // Check hash route optionally or default to 'home'
    const hash = window.location.hash.replace('#', '') as Page;
    return [
      'home', 'products', 'product-detail', 'about-us', 'clients', 'dealer-locator',
      'offers', 'reach-us', 'catalogue', 'login', 'cart', 'business-associate',
      'investors', 'privacy-policy', 'shipping-return', 'terms'
    ].includes(hash) ? hash : 'home';
  });

  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);

  // Cart Local Persistence State
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('neycer_cart_v1');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // User Authentication State
  const [user, setUser] = useState<any>(() => {
    try {
      const saved = localStorage.getItem('neycer_user_v1');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  // Keep Hash Router and Browser scroll aligned in real-time
  useEffect(() => {
    window.location.hash = currentPage;
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  }, [currentPage]);

  // Save Cart to Local Storage
  useEffect(() => {
    localStorage.setItem('neycer_cart_v1', JSON.stringify(cart));
  }, [cart]);

  // Save Auth to Local Storage
  useEffect(() => {
    if (user) {
      localStorage.setItem('neycer_user_v1', JSON.stringify(user));
    } else {
      localStorage.removeItem('neycer_user_v1');
    }
  }, [user]);

  // Add Item to Cart
  const handleAddToCart = (product: Product, quantity = 1) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
  };

  // Adjust item quantity in cart
  const handleUpdateQuantity = (productId: string, quantity: number) => {
    setCart(prev =>
      prev.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  // Remove completely
  const handleRemoveItem = (productId: string) => {
    setCart(prev => prev.filter(item => item.product.id !== productId));
  };

  // Flush Cart
  const handleClearCart = () => {
    setCart([]);
  };

  // Handle Login successes
  const handleLoginSuccess = (userData: { email: string; isDealer: boolean }) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  // Router dispatcher
  const renderMainSection = () => {
    switch (currentPage) {
      case 'home':
        return (
          <Home
            setCurrentPage={setCurrentPage}
            setSelectedProductId={setSelectedProductId}
            onAddToCart={handleAddToCart}
            cart={cart}
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveItem={handleRemoveItem}
          />
        );
      case 'products':
        return (
          <Products
            setCurrentPage={setCurrentPage}
            setSelectedProductId={setSelectedProductId}
            onAddToCart={handleAddToCart}
            cart={cart}
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveItem={handleRemoveItem}
          />
        );
      case 'product-detail':
        return (
          <ProductDetail
            productId={selectedProductId}
            setCurrentPage={setCurrentPage}
            onAddToCart={handleAddToCart}
          />
        );
      case 'about-us':
        return <AboutUs />;
      case 'clients':
        return <Clients />;
      case 'dealer-locator':
        return <DealerLocator />;
      case 'offers':
        return (
          <Offers
            setCurrentPage={setCurrentPage}
            setSelectedProductId={setSelectedProductId}
            onAddToCart={handleAddToCart}
            cart={cart}
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveItem={handleRemoveItem}
          />
        );
      case 'reach-us':
        return <ReachUs />;
      case 'catalogue':
        return <Catalogue setCurrentPage={setCurrentPage} />;
      case 'login':
        return (
          <Login
            setCurrentPage={setCurrentPage}
            onLoginSuccess={handleLoginSuccess}
          />
        );
      case 'cart':
        return (
          <Cart
            cart={cart}
            setCurrentPage={setCurrentPage}
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveItem={handleRemoveItem}
            onClearCart={handleClearCart}
          />
        );
      case 'business-associate':
        return <BusinessAssociate />;
      case 'investors':
        return <Investors />;
      case 'privacy-policy':
        return <PrivacyPolicy />;
      case 'shipping-return':
        return <ShippingReturnPolicy />;
      case 'terms':
        return <TermsAndConditions />;
      default:
        return (
          <Home
            setCurrentPage={setCurrentPage}
            setSelectedProductId={setSelectedProductId}
            onAddToCart={handleAddToCart}
            cart={cart}
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveItem={handleRemoveItem}
          />
        );
    }
  };

  return (
    <div id="neycer-global-view-port" className="flex flex-col min-h-screen bg-white text-brand-darkgray antialiased selection:bg-primary selection:text-white">
      {/* Structural Global Header */}
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        cart={cart}
        user={user}
        onLogout={handleLogout}
      />

      {/* Primary Dynamic Screen Panel */}
      <main id="neycer-main-wrapper" className="flex-1 w-full bg-white relative">
        {renderMainSection()}
      </main>

      {/* Structural Global Footer */}
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}
