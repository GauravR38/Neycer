import React, { useState } from 'react';
import { Facebook, Linkedin, Instagram, ArrowRight } from 'lucide-react';
import { Page } from '../types';

interface FooterProps {
  setCurrentPage: (page: Page) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer id="neycer-footer" className="bg-brand-deepblue text-white pt-12 pb-6 px-4 mt-auto">
      <div id="footer-container" className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 mb-10">
        {/* Left column - Brand & Copy */}
        <div id="footer-brand-section" className="col-span-1 md:col-span-4 flex flex-col gap-4">
          <img
            id="footer-logo-img"
            src="/assets/neycer-logo.png"
            alt="Neycer India"
            className="h-10 w-auto self-start brightness-0 invert"
          />
          <p id="footer-brand-desc" className="text-xs text-gray-300 leading-relaxed max-w-sm">
            Neycer has been a pioneer in luxury and utility sanitaryware since 1960. Part of the legendary Spartek Group, we deliver aesthetics with unmatched structural standards across the nation.
          </p>
          <div id="footer-social-links" className="flex items-center gap-3 mt-2">
            <a
              id="social-link-facebook"
              href="https://facebook.com/neycer"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-brand-darkblue rounded-full text-white hover:bg-primary transition"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              id="social-link-linkedin"
              href="https://linkedin.com/company/neycer"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-brand-darkblue rounded-full text-white hover:bg-primary transition"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              id="social-link-instagram"
              href="https://instagram.com/neycer"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-brand-darkblue rounded-full text-white hover:bg-primary transition"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Center column - Navigation links */}
        <div id="footer-links-section" className="col-span-1 md:col-span-4 grid grid-cols-2 gap-4">
          <div id="footer-quick-links col-1">
            <h4 id="footer-col1-title" className="text-[13px] font-bold uppercase tracking-wider text-brand-lightblue mb-4">
              Company
            </h4>
            <div id="footer-col1-links" className="flex flex-col gap-2.5 text-xs">
              <button
                id="footer-link-home"
                onClick={() => setCurrentPage('home')}
                className="hover:text-brand-lightblue text-left cursor-pointer text-gray-300"
              >
                Home
              </button>
              <button
                id="footer-link-about"
                onClick={() => setCurrentPage('about-us')}
                className="hover:text-brand-lightblue text-left cursor-pointer text-gray-300"
              >
                About Us
              </button>
              <button
                id="footer-link-products"
                onClick={() => setCurrentPage('products')}
                className="hover:text-brand-lightblue text-left cursor-pointer text-gray-300"
              >
                Product Catalogue
              </button>
              <button
                id="footer-link-offers"
                onClick={() => setCurrentPage('offers')}
                className="hover:text-brand-lightblue text-left cursor-pointer text-gray-300"
              >
                Special Offers
              </button>
              <button
                id="footer-link-locator"
                onClick={() => setCurrentPage('dealer-locator')}
                className="hover:text-brand-lightblue text-left cursor-pointer text-gray-300"
              >
                Find a Dealer
              </button>
            </div>
          </div>

          <div id="footer-quick-links col-2">
            <h4 id="footer-col2-title" className="text-[13px] font-bold uppercase tracking-wider text-brand-lightblue mb-4">
              Resources & Legal
            </h4>
            <div id="footer-col2-links" className="flex flex-col gap-2.5 text-xs">
              <button
                id="footer-link-investors"
                onClick={() => setCurrentPage('investors')}
                className="hover:text-brand-lightblue text-left cursor-pointer text-gray-300"
              >
                Investors
              </button>
              <button
                id="footer-link-contact"
                onClick={() => setCurrentPage('reach-us')}
                className="hover:text-brand-lightblue text-left cursor-pointer text-gray-300"
              >
                Contact
              </button>
              <button
                id="footer-link-privacy"
                onClick={() => setCurrentPage('privacy-policy')}
                className="hover:text-brand-lightblue text-left cursor-pointer text-gray-300"
              >
                Privacy Policy
              </button>
              <button
                id="footer-link-shipping"
                onClick={() => setCurrentPage('shipping-policy')}
                className="hover:text-brand-lightblue text-left cursor-pointer text-gray-300"
              >
                Shipping & Return Policy
              </button>
              <button
                id="footer-link-terms"
                onClick={() => setCurrentPage('terms')}
                className="hover:text-brand-lightblue text-left cursor-pointer text-gray-300 animate-slide"
              >
                Terms & Conditions
              </button>
            </div>
          </div>
        </div>

        {/* Right column - Newsletter */}
        <div id="footer-newsletter-section" className="col-span-1 md:col-span-4 flex flex-col gap-4">
          <h4 id="footer-newsletter-title" className="text-[13px] font-bold uppercase tracking-wider text-brand-lightblue">
            Newsletter
          </h4>
          <p id="footer-newsletter-prompt" className="text-xs text-gray-300 leading-relaxed leading-5">
            Enter your email id for regular updates about product catalogs, dealer certifications, and Spartek announcements.
          </p>
          <form id="footer-newsletter-form" onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 mt-1">
            <input
              id="newsletter-email-input"
              type="email"
              placeholder="Enter your email address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-3.5 py-2 rounded-md bg-brand-darkblue border border-gray-700 text-xs text-white placeholder-gray-400 focus:outline-none focus:border-primary flex-1"
            />
            <button
              id="newsletter-submit-btn"
              type="submit"
              className="bg-primary text-white text-xs font-semibold px-4 py-2 rounded-md hover:bg-opacity-90 active:bg-brand-darkblue transition cursor-pointer flex items-center justify-center gap-1"
            >
              <span>Subscribe</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
          {subscribed && (
            <p id="newsletter-success-alert" className="text-xs text-emerald-400 font-medium">
              Thank you for subscribing to Neycer updates!
            </p>
          )}
        </div>
      </div>

      <div id="footer-bottom-divider" className="border-t border-gray-800 my-6"></div>

      <div id="footer-rights-panel" className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-white">
        <span id="footer-copyright">
          © 2025 Neycer India Limited. All Rights Reserved. Part of Spartek Group.
        </span>
        <div id="footer-spartex-reference" className="flex items-center gap-6">
          <button
            onClick={() => setCurrentPage('investors')}
            className="text-white hover:text-brand-lightblue transition cursor-pointer text-[11px] font-normal"
          >
            Investors
          </button>
          <button
            onClick={() => setCurrentPage('privacy-policy')}
            className="text-white hover:text-brand-lightblue transition cursor-pointer text-[11px] font-normal"
          >
            Privacy Policy
          </button>
          <button
            onClick={() => setCurrentPage('reach-us')}
            className="text-white hover:text-brand-lightblue transition cursor-pointer text-[11px] font-normal"
          >
            Reach Us
          </button>
        </div>
      </div>
    </footer>
  );
}
