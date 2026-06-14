import React, { useState } from 'react';
import { Menu, X, Phone, Mail, ShoppingCart, LogIn, Award } from 'lucide-react';
import { Page, CartItem } from '../types';

interface HeaderProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  cart: CartItem[];
  user: any;
  onLogout: () => void;
}

export default function Header({
  currentPage,
  setCurrentPage,
  cart,
  user,
  onLogout
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

  const navigationItems: { label: string; page: Page }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Products', page: 'products' },
    { label: 'About Us', page: 'about-us' },
    { label: 'Clients', page: 'clients' },
    { label: 'Dealer Locator', page: 'dealer-locator' },
    { label: 'Offers', page: 'offers' },
    { label: 'Reach Us', page: 'reach-us' },
    { label: 'Catalogue', page: 'catalogue' }
  ];

  const handleDownloadBrochure = (e: React.MouseEvent) => {
    e.preventDefault();
    // Spartek brochure download logic
    const link = document.createElement('a');
    link.href = '/assets/spartek-brochure.pdf';
    link.setAttribute('download', 'Spartek_Group_Brochure.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header id="neycer-header" className="w-full flex flex-col z-50">
      {/* Top bar */}
      <div
        id="header-top-bar"
        className="w-full bg-brand-deepblue text-white h-9 flex items-center transition-all duration-200"
      >
        <div id="top-bar-container" className="w-full max-w-7xl mx-auto px-6 md:px-10 flex justify-between items-center text-[11px] font-medium tracking-wider">
          <div id="top-bar-links" className="flex items-center gap-6">
            <button
              id="top-bar-assoc-link"
              onClick={() => setCurrentPage('business-associate')}
              className={`hover:text-brand-lightblue transition cursor-pointer text-white text-[11px] font-medium ${
                currentPage === 'business-associate' ? 'text-brand-lightblue underline' : ''
              }`}
            >
              Business Associate Program
            </button>
            <span className="text-white opacity-40">|</span>
            <button
              id="top-bar-brochure-link"
              onClick={handleDownloadBrochure}
              className="hover:text-brand-lightblue transition cursor-pointer text-white text-[11px] font-medium flex items-center gap-1.5"
            >
              <Award className="w-3.5 h-3.5 text-brand-lightblue" />
              <span>Download Brochure</span>
            </button>
          </div>
          <div id="top-bar-info" className="flex items-center gap-6 text-[11px]">
            <a
              id="top-bar-phone"
              href="tel:18005726274"
              className="flex items-center gap-1.5 hover:text-brand-lightblue transition text-white"
            >
              <span>📞 1800 572 6274</span>
            </a>
            <span className="text-white opacity-40 hidden sm:inline">|</span>
            <a
              id="top-bar-email"
              href="mailto:sales@neycer.in"
              className="flex items-center gap-1.5 hover:text-brand-lightblue transition text-white"
            >
              <span>✉ sales@neycer.in</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        id="header-main-nav"
        className="w-full bg-brand-darkblue border-b border-white/10 sticky top-0 transition-all flex items-center h-20 shadow-lg"
      >
        <div id="main-nav-container" className="w-full max-w-7xl mx-auto px-6 md:px-10 flex justify-between items-center h-full">
          {/* Logo */}
          <button
            id="nav-logo-btn"
            onClick={() => setCurrentPage('home')}
            className="flex items-center cursor-pointer focus:outline-none"
          >
            <img
              id="nav-logo-img"
              src="/assets/neycer-logo.png"
              alt="Neycer"
              referrerPolicy="no-referrer"
              className="h-[60px] w-auto object-contain"
              onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600'; }}
            />
          </button>

          {/* Desktop Nav Items */}
          <div id="nav-desktop-menu" className="hidden lg:flex items-center gap-5">
            {navigationItems.map((item) => (
              <button
                key={item.page}
                id={`nav-link-${item.page}`}
                onClick={() => setCurrentPage(item.page)}
                className={`text-[13px] tracking-wider uppercase font-semibold transition cursor-pointer ${
                  currentPage === item.page
                    ? 'text-brand-lightblue font-bold underline decoration-2 underline-offset-4'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}

            <span className="h-4 w-px bg-white/20"></span>

            {/* Login Account State */}
            {user ? (
              <div id="nav-user-controls" className="flex items-center gap-2">
                <span className="text-[12px] tracking-wider uppercase font-semibold text-white bg-white/10 px-2 py-1 rounded border border-white/5">
                  {user.isDealer ? 'Dealer' : 'Customer'}
                </span>
                <button
                  id="nav-logout-btn"
                  onClick={onLogout}
                  className="text-[12px] tracking-wider uppercase font-semibold text-red-400 hover:text-red-300 hover:underline cursor-pointer"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                id="nav-login-btn"
                onClick={() => setCurrentPage('login')}
                className={`text-[13px] tracking-wider uppercase font-semibold cursor-pointer transition ${
                  currentPage === 'login'
                    ? 'text-brand-lightblue font-bold'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                <span>Login</span>
              </button>
            )}

            {/* Cart Button */}
            <button
              id="nav-cart-btn"
              onClick={() => setCurrentPage('cart')}
              className={`relative flex items-center gap-1.5 text-[13px] tracking-wider uppercase font-semibold cursor-pointer transition ${
                currentPage === 'cart'
                  ? 'text-brand-lightblue font-bold'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              <div className="relative">
                <ShoppingCart className="w-4 h-4 text-white" />
                {cartCount > 0 && (
                  <span
                    id="cart-badge-count"
                    className="absolute -top-1.5 -right-1.5 bg-red-600 text-white font-bold text-[9px] w-3.5 h-3.5 flex items-center justify-center rounded-full"
                  >
                    {cartCount}
                  </span>
                )}
              </div>
              <span>🛒 Cart</span>
            </button>
          </div>

          {/* Combined Mobile controls & hamburger */}
          <div id="nav-mobile-controls" className="flex lg:hidden items-center gap-3">
            <button
              id="mobile-cart-btn"
              onClick={() => setCurrentPage('cart')}
              className="relative p-1.5 text-white/90 hover:text-white transition"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white font-bold text-[9px] w-3.5 h-3.5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-white/90 hover:text-white transition focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu drawer */}
        {mobileMenuOpen && (
          <div
            id="mobile-drawer-overlay"
            className="lg:hidden absolute top-full left-0 w-full bg-brand-darkblue border-b border-white/10 shadow-lg py-4 px-6 flex flex-col gap-3 z-50 animate-fadeIn"
          >
            {navigationItems.map((item) => (
              <button
                key={item.page}
                id={`mobile-nav-link-${item.page}`}
                onClick={() => {
                  setCurrentPage(item.page);
                  setMobileMenuOpen(false);
                }}
                className={`py-2 text-left font-semibold text-sm border-b border-white/5 cursor-pointer ${
                  currentPage === item.page ? 'text-brand-lightblue pl-2 border-l-2 border-brand-lightblue' : 'text-white/90'
                }`}
              >
                {item.label}
              </button>
            ))}

            <button
              id="mobile-nav-link-associate"
              onClick={() => {
                setCurrentPage('business-associate');
                setMobileMenuOpen(false);
              }}
              className="py-2 text-left font-semibold text-sm border-b border-white/5 text-white/90 cursor-pointer"
            >
              Business Associate Program
            </button>

            {user ? (
              <div id="mobile-user-status" className="flex items-center justify-between py-2">
                <span className="text-sm font-semibold text-white/90">
                  Logged in as {user.isDealer ? 'Dealer' : 'Customer'}
                </span>
                <button
                  id="mobile-logout-btn"
                  onClick={() => {
                    onLogout();
                    setMobileMenuOpen(false);
                  }}
                  className="text-xs text-red-300 underline font-semibold"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                id="mobile-nav-link-login"
                onClick={() => {
                  setCurrentPage('login');
                  setMobileMenuOpen(false);
                }}
                className="py-2 text-left font-semibold text-sm text-white/90 cursor-pointer"
              >
                Login to Account
              </button>
            )}
          </div>
        )}
      </nav>
    </header>
  );
}
