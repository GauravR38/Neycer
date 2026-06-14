import React, { useState, useRef, useEffect } from 'react';
import { Search, ChevronLeft, ChevronRight, ArrowRight, Sparkles } from 'lucide-react';
import { Page, Product } from '../types';
import { PRODUCTS, BLOGS, CATEGORIES } from '../data';
// @ts-ignore
import spartekImg from '../assets/images/regenerated_image_1781455188217.png';
// @ts-ignore
import spartekonstructImg from '../assets/images/regenerated_image_1781455189045.png';
// @ts-ignore
import spartekoncreteImg from '../assets/images/regenerated_image_1781455190004.png';

interface AddToCartButtonProps {
  product: Product;
  onAddToCart: (p: Product) => void;
  cart: any[];
  onUpdateQuantity: (id: string, q: number) => void;
  onRemoveItem: (id: string) => void;
  classNameOverride?: string;
}

function AddToCartButton({
  product,
  onAddToCart,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  classNameOverride
}: AddToCartButtonProps) {
  const cartItem = cart.find((item: any) => item.product.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (quantity === 0) {
      onAddToCart(product);
    } else {
      onUpdateQuantity(product.id, quantity + 1);
    }
  };

  const handleSubtract = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newQty = quantity - 1;
    if (newQty <= 0) {
      onRemoveItem(product.id);
    } else {
      onUpdateQuantity(product.id, newQty);
    }
  };

  if (quantity === 0) {
    return (
      <button
        onClick={handleAdd}
        className={classNameOverride || "w-full py-2 bg-[#1a57a1] text-white text-xs font-semibold rounded cursor-pointer hover:bg-opacity-90 transition-all duration-300"}
      >
        Add to Cart
      </button>
    );
  }

  return (
    <div className="flex items-center justify-between w-full border border-[#1a57a1] rounded overflow-hidden">
      <button
        onClick={handleSubtract}
        className="flex-1 py-1.5 text-[#1a57a1] font-bold text-lg hover:bg-[#f1fdff] cursor-pointer transition-all duration-300"
      >
        −
      </button>
      <span
        className="flex-1 text-center text-sm font-semibold text-[#1a57a1]"
        style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}
      >
        {quantity}
      </span>
      <button
        onClick={handleAdd}
        className="flex-1 py-1.5 text-[#1a57a1] font-bold text-lg hover:bg-[#f1fdff] cursor-pointer transition-all duration-300"
      >
        +
      </button>
    </div>
  );
}

interface HomeProps {
  setCurrentPage: (page: Page) => void;
  setSelectedProductId: (id: string | null) => void;
  onAddToCart: (p: Product) => void;
  cart: any[];
  onUpdateQuantity: (id: string, q: number) => void;
  onRemoveItem: (id: string) => void;
}

export default function Home({
  setCurrentPage,
  setSelectedProductId,
  onAddToCart,
  cart,
  onUpdateQuantity,
  onRemoveItem
}: HomeProps) {
  // Hero Carousel State
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = [
    {
      styleTag: 'Modern Elegance',
      title: 'An Extension of Your Style Stamp',
      cta: 'Explore Products',
      target: 'products',
      bgImage: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1600'
    },
    {
      styleTag: 'Exquisite Style',
      title: 'Where Function Meets Beauty',
      cta: 'View Catalogue',
      target: 'catalogue',
      bgImage: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=1600'
    },
    {
      styleTag: 'Trusted Excellence',
      title: 'Five Decades of Quality Sanitaryware Across India',
      cta: 'Find a Dealer',
      target: 'dealer-locator',
      bgImage: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1600'
    }
  ];

  // Search Bar State
  const [searchQuery, setSearchQuery] = useState('');
  const [searchCategory, setSearchCategory] = useState('All');

  // Blog State
  const [activeBlogIndex, setActiveBlogIndex] = useState(0);

  // Category slider state with infinite 2s looping
  const [step, setStep] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [isCategoryPaused, setIsCategoryPaused] = useState(false);
  const [visibleCount, setVisibleCount] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(2); // 2 cards on mobile
      } else if (window.innerWidth < 1024) {
        setVisibleCount(3); // 3 cards on tablet
      } else {
        setVisibleCount(5); // 5 cards on desktop
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalCategories = CATEGORIES.length;
  const clonedCategories = [...CATEGORIES, ...CATEGORIES];

  useEffect(() => {
    if (isCategoryPaused) return;
    const interval = setInterval(() => {
      setStep(prev => prev + 1);
    }, 2000);
    return () => clearInterval(interval);
  }, [isCategoryPaused, totalCategories]);

  useEffect(() => {
    if (step >= totalCategories) {
      const timer = setTimeout(() => {
        setTransitionEnabled(false);
        setStep(0);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [step, totalCategories]);

  useEffect(() => {
    if (!transitionEnabled) {
      const timer = setTimeout(() => {
        setTransitionEnabled(true);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [transitionEnabled]);

  // Blog Auto Scroll with Hover Pause state (2s interval)
  const [isBlogPaused, setIsBlogPaused] = useState(false);
  const blogTimerRef = useRef<NodeJS.Timeout | null>(null);

  const startBlogTimer = () => {
    if (blogTimerRef.current) {
      clearInterval(blogTimerRef.current);
    }
    blogTimerRef.current = setInterval(() => {
      setActiveBlogIndex(prev => (prev + 1) % BLOGS.length);
    }, 2000);
  };

  useEffect(() => {
    if (!isBlogPaused) {
      startBlogTimer();
    } else {
      if (blogTimerRef.current) clearInterval(blogTimerRef.current);
    }
    return () => {
      if (blogTimerRef.current) clearInterval(blogTimerRef.current);
    };
  }, [isBlogPaused]);

  const handleBlogArrow = (direction: 'left' | 'right') => {
    setActiveBlogIndex(prev => {
      if (direction === 'left') return prev === 0 ? BLOGS.length - 1 : prev - 1;
      return (prev + 1) % BLOGS.length;
    });
    startBlogTimer(); // reset timer on manual click
  };

  // Filter 6 select products to act as popular Bestsellers
  const bestsellers = PRODUCTS.filter(p =>
    ['spc-alaska', 'whc-indigo', 'ttb-kent', 'wbp-harmony', 'ip-berlin', 'ucb-opal'].includes(p.id)
  );

  // Auto slide effect for hero (4 seconds interval)
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to the products page with query
    setCurrentPage('products');
  };

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleViewProduct = (productId: string) => {
    setSelectedProductId(productId);
    setCurrentPage('product-detail');
  };

  return (
    <div id="home-view" className="w-full flex flex-col gap-12 bg-white">
      {/* 1. Hero Section (Smooth Fade, Min Height 85vh, Overlay Gradient) */}
      <section id="hero-carousel-section" className="relative w-full h-[85vh] min-h-[85vh] overflow-hidden bg-brand-darkblue">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            id={`hero-slide-${idx}`}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              activeSlide === idx ? 'opacity-100 z-20 pointer-events-auto' : 'opacity-0 z-10 pointer-events-none'
            }`}
          >
            {/* Direct full-width image background */}
            <img
              src={slide.bgImage}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover animate-fadeIn"
            />
            {/* Bottom-left dark gradient overlay to ensure text is highly readable */}
            <div
              className="absolute inset-0 z-10"
              style={{
                background: 'linear-gradient(to right, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0) 100%)'
              }}
            ></div>

            {/* Left-aligned, vertically-centered slider text */}
            <div className="absolute inset-0 z-25 flex items-center bg-transparent">
              <div className="max-w-7xl mx-auto w-full px-6 md:px-12 flex flex-col items-start justify-center">
                <span className="hero-style-tag">{slide.styleTag}</span>
                <h1 className="hero-heading max-w-2xl">
                  {slide.title}
                </h1>
                <a
                  href={`#${slide.target}`}
                  id={`hero-cta-btn-${idx}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage(slide.target as Page);
                  }}
                  className="hero-cta bg-primary hover:bg-brand-darkblue text-white text-[13px] font-bold tracking-wider uppercase px-8 py-3.5 transition duration-300 inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>{slide.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        ))}

        {/* Carousel controls with thin minimal arrow hooks */}
        <button
          id="hero-control-prev"
          onClick={handlePrevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 text-white bg-black/20 hover:bg-black/40 p-2 rounded-full cursor-pointer transition focus:outline-none z-30"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
        </button>
        <button
          id="hero-control-next"
          onClick={handleNextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 text-white bg-black/20 hover:bg-black/40 p-2 rounded-full cursor-pointer transition focus:outline-none z-30"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2.5 z-30">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSlide(idx)}
              className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ${
                activeSlide === idx ? 'bg-primary w-6' : 'bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            ></button>
          ))}
        </div>
      </section>

      {/* 2. Product Search (Sleek Interface unified search-strip) */}
      <section id="category-search-bar" className="w-full bg-brand-lightblue h-[74px] border-b border-[#e0f2f5] flex items-center justify-center px-4 md:px-10 relative z-20">
        <form id="hero-search-form" onSubmit={handleSearchSubmit} className="flex items-center justify-center gap-5 w-full max-w-5xl">
          <select
            id="search-category-dropdown"
            value={searchCategory}
            onChange={(e) => setSearchCategory(e.target.value)}
            className="px-3 py-2 border border-brand-lightgray rounded-[4px] bg-white text-[13px] text-brand-darkgray font-medium w-[200px] h-10 outline-none cursor-pointer focus:border-[#1d4485] transition"
          >
            <option value="All">All Categories</option>
            {CATEGORIES.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>

          <div className="relative w-[400px] max-w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-lightgray w-4 h-4" />
            <input
              id="search-input-field"
              type="text"
              placeholder="Search by product name or code (e.g. Alaska, 1188)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 border border-brand-lightgray rounded-[4px] bg-white text-[13px] text-brand-darkgray h-10 outline-none focus:border-[#1d4485] transition"
            />
          </div>

          <button
            id="search-submit-btn"
            type="submit"
            className="bg-[#1d4485] hover:bg-brand-darkblue text-white font-semibold text-[12px] px-[30px] h-10 uppercase tracking-wider transition cursor-pointer flex items-center justify-center gap-1.5"
          >
            <span>Search</span>
          </button>
        </form>
      </section>

      {/* 3. Product Categories Strip (Infinite 2s step loop, paused on hover) */}
      <section id="categories-scroll-section" className="w-full overflow-hidden bg-white py-4 border-b border-gray-100">
        <div id="cats-header-panel" className="text-center mb-8">
          <h2 id="cats-section-title" className="text-lg md:text-xl font-bold uppercase tracking-wider text-[#1d4485]">
            Popular Product Catalogues
          </h2>
        </div>

        <div 
          className="w-full overflow-hidden px-4"
          onMouseEnter={() => setIsCategoryPaused(true)}
          onMouseLeave={() => setIsCategoryPaused(false)}
        >
          <div 
            className={`flex ${transitionEnabled ? 'transition-transform duration-600 ease-in-out' : 'transition-none'}`}
            style={{
              transform: `translateX(-${step * (100 / visibleCount)}%)`
            }}
          >
            {clonedCategories.map((cat, idx) => (
              <div
                key={idx}
                id={`cat-card-${idx}`}
                style={{
                  width: `${100 / visibleCount}%`,
                  flexShrink: 0,
                  padding: '0 8px'
                }}
              >
                <button
                  onClick={() => setCurrentPage('products')}
                  className="w-full p-4 border border-gray-150 rounded-lg hover:border-[#1d4485] hover:shadow-md bg-[#f4fbfc] hover:bg-white text-center cursor-pointer transition-all duration-300 flex flex-col items-center gap-3 group"
                >
                  <span className="p-3 bg-brand-lightblue rounded-full text-[#1d4485] group-hover:bg-[#1d4485] group-hover:text-white transition-colors duration-300">
                    <Sparkles className="w-5 h-5 animate-pulse" />
                  </span>
                  <span id={`cat-card-label-${idx}`} className="text-[12px] font-bold text-brand-darkgray leading-tight group-hover:text-[#1d4485] transition-colors uppercase tracking-wider block truncate w-full">
                    {cat}
                  </span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Bestsellers Section (Reverted back to previous compact form layout) */}
      <section id="bestsellers-matrix-section" className="max-w-7xl mx-auto w-full px-4 py-8 bg-brand-lightblue/5 border border-brand-lightblue/35 rounded-2xl p-6 md:p-8">
        <div id="bestsellers-heading" className="text-center max-w-2xl mx-auto mb-10 flex flex-col gap-2">
          <span className="text-[#1d4485] text-xs font-bold uppercase tracking-widest">
            Curated Classics & Masterpieces
          </span>
          <h2 id="bestsellers-title" className="text-2xl md:text-3xl font-extrabold text-[#1d4485]">
            The Neycer Bestsellers
          </h2>
        </div>

        <div id="bestsellers-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {bestsellers.map((product) => {
            const pageMapping: Record<string, string> = {
              'spc-alaska': '12',
              'whc-indigo': '18',
              'ttb-kent': '24',
              'wbp-harmony': '32',
              'ip-berlin': '38',
              'ucb-opal': '42'
            };
            const pageNum = pageMapping[product.id] || 'Selected';

            return (
              <div
                key={product.id}
                id={`bestseller-card-${product.id}`}
                className="bg-white p-4 border border-gray-150 transition-all duration-300 hover:-translate-y-1 hover:shadow-sm flex flex-col justify-between rounded-lg max-w-sm mx-auto w-full"
              >
                {/* Compact Product Image Container with Light Blue-White background */}
                <div className="relative h-44 rounded-md mb-3 bg-[#f1fdff] overflow-hidden flex flex-col items-center justify-center p-3 text-center border border-brand-lightblue/40 animate-fadeIn">
                  <div className="absolute inset-x-0 top-0 bottom-0 flex flex-col items-center justify-center p-2">
                    {/* Sanitary Outline Indicator Icon */}
                    <div className="text-[11px] uppercase font-bold text-[#1d4485] mb-1.5 bg-white px-2 py-0.5 shadow-sm rounded border border-brand-lightblue">
                      {product.name}
                    </div>
                    <div className="text-[10px] text-slate-500 italic max-w-[200px] leading-tight">
                      Image: {product.name} from Neycer Catalogue p.{pageNum}
                    </div>
                    <div className="text-[9px] text-[#22c55e] font-bold mt-1.5 bg-green-50 px-2 py-0.5 rounded border border-green-200">
                      Print Page {pageNum}
                    </div>
                  </div>
                  {product.badge && (
                    <span className="absolute top-2 left-2 bg-[#22c55e] text-white text-[9px] font-bold uppercase px-2 py-0.5 z-10 rounded">
                      {product.badge}
                    </span>
                  )}
                </div>

                {/* Details & Action Hooks */}
                <div className="text-center flex flex-col gap-1">
                  <div className="text-[9px] text-brand-lightgray font-bold uppercase tracking-wider">
                    {product.category}
                  </div>
                  <h3 className="text-[12px] font-extrabold text-[#1d4485] uppercase tracking-wide truncate">
                    {product.name}
                  </h3>
                  <div className="text-[10px] text-brand-lightgray font-semibold font-mono">
                    Code: {product.code}
                  </div>
                  
                  <div className="text-[14px] font-semibold text-primary font-mono mt-0.5">
                    {product.price}
                    {product.originalPrice && (
                      <span className="text-xs text-brand-lightgray line-through font-normal ml-2">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col gap-2 mt-3 pt-3 border-t border-gray-100">
                    <button
                      id={`bestseller-detail-btn-${product.id}`}
                      onClick={() => handleViewProduct(product.id)}
                      className="w-full text-center text-[11px] font-bold text-brand-darkgray uppercase border border-gray-300 py-1.5 hover:bg-gray-100 cursor-pointer transition rounded"
                      title="View catalogue specifications"
                    >
                      Specifications
                    </button>
                    <AddToCartButton
                      product={product}
                      onAddToCart={onAddToCart}
                      cart={cart}
                      onUpdateQuantity={onUpdateQuantity}
                      onRemoveItem={onRemoveItem}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. Blog Section (Bathroom Lifestyle Journal) */}
      <section 
        id="homepage-blog-column" 
        className="max-w-7xl mx-auto w-full px-4 my-4"
        onMouseEnter={() => setIsBlogPaused(true)}
        onMouseLeave={() => setIsBlogPaused(false)}
      >
        <div id="blog-header-panel" className="flex justify-between items-end border-b border-gray-100 pb-4 mb-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#1d4485]">
              Bathroom Lifestyle Journal
            </span>
            <h2 id="blog-title" className="text-xl md:text-2xl font-bold text-[#1d4485] mt-1">
              Design & Safety Insights
            </h2>
          </div>
          <div id="blog-controls" className="flex gap-2">
            <button
              id="blog-control-prev"
              onClick={() => handleBlogArrow('left')}
              className="p-1.5 border border-gray-200 rounded-md hover:bg-brand-lightblue text-brand-darkgray transition cursor-pointer"
              aria-label="Previous Article"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              id="blog-control-next"
              onClick={() => handleBlogArrow('right')}
              className="p-1.5 border border-gray-200 rounded-md hover:bg-brand-lightblue text-brand-darkgray transition cursor-pointer"
              aria-label="Next Article"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div id="blog-slider-container" className="bg-brand-lightblue/10 rounded-xl overflow-hidden border border-gray-100 p-6 md:p-8">
          <div id="blog-sliding-wrapper" className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left Photo */}
            <div id="blog-author-photo" className="md:col-span-5 h-64 md:h-80 w-full rounded-lg overflow-hidden relative shadow-md">
              <img
                id="blog-entry-image"
                src={BLOGS[activeBlogIndex].image}
                alt={BLOGS[activeBlogIndex].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3 bg-[#1d4485] text-white text-[10px] font-bold px-3 py-1 rounded">
                Featured Article
              </div>
            </div>

            {/* Right content */}
            <div id="blog-summary-content" className="md:col-span-7 flex flex-col gap-4">
              <span className="text-xs font-semibold text-[#1d4485] font-mono tracking-wide">
                ARTICLE {activeBlogIndex + 1} OF {BLOGS.length}
              </span>
              <h3 id="blog-article-heading" className="text-xl md:text-2xl font-black text-brand-darkgray leading-tight">
                {BLOGS[activeBlogIndex].title}
              </h3>
              <p id="blog-article-body" className="text-xs md:text-sm text-slate-600 leading-relaxed">
                {BLOGS[activeBlogIndex].content}
              </p>
              <div className="border-t border-gray-200 pt-4 mt-2 flex justify-between items-center text-xs text-brand-lightgray font-medium">
                <span>By Research & Design Division</span>
                <span>Est. Reading: 4 Mins</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Our Companies Section (Pioneer sister business portfolios) */}
      <section id="spartex-group-portfolio" className="max-w-7xl mx-auto w-full px-4 mb-12">
        <div id="spartek-header" className="text-center max-w-xl mx-auto mb-10 flex flex-col gap-1">
          <span className="text-xs font-bold text-[#1d4485] tracking-widest uppercase">
            The Spartek Conglomerate
          </span>
          <h2 id="spartek-title" className="text-xl md:text-2xl font-extrabold text-[#1d4485]">
            Our Spartek Group Companies
          </h2>
        </div>

        <div id="companies-cards-grid" className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Spartek */}
          <div
            id="company-card-spartek"
            className="bg-white border border-gray-150 rounded-xl hover:shadow-lg hover:border-[#1d4485]/25 transition duration-300 flex flex-col overflow-hidden"
          >
            <div className="h-44 w-full overflow-hidden relative">
              <img
                src={spartekImg}
                alt="Spartek Tiles"
                className="w-full h-full object-cover"
                style={{ backgroundColor: '#fffafa' }}
              />
              <div className="absolute inset-0 bg-black/10"></div>
            </div>
            <div className="p-6 flex flex-col justify-between flex-grow">
              <div className="flex flex-col gap-3">
                {/* TODO: Replace with real logo PNG from Spartek Brochure — place file at /public/assets/spartek-logo.png */}
                <svg viewBox="0 0 160 40" className="h-10 w-auto mb-1">
                  <text x="0" y="30" fontFamily="Montserrat" fontWeight="800" fontSize="28"
                    fill="#1a57a1" letterSpacing="2">
                    SPARTEK
                  </text>
                </svg>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  Pioneers in ceramic floor tiles in India since the mid-1980s. Revolutionized the flooring industry. First company in all of South East Asia to have a Vitrified Tiles plant. Also the only Asian company to export Premium Vitrified Tiles to Italy. Product range: Glazed Vitrified Tiles, Double Charged Vitrified Tiles, Polished Vitrified Tiles.
                </p>
              </div>
              <a
                id="company-link-spartek"
                href="https://spartek.in"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 text-xs text-primary font-bold hover:underline flex items-center gap-1 cursor-pointer self-start animate-fadeIn"
              >
                <span>Explore spartek.in</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 2: Spartekonstruct */}
          <div
            id="company-card-spartekonstruct"
            className="bg-white border border-gray-150 rounded-xl hover:shadow-lg hover:border-[#1d4485]/25 transition duration-300 flex flex-col overflow-hidden"
          >
            <div className="h-44 w-full overflow-hidden relative">
              <img
                src={spartekonstructImg}
                alt="Construction precast"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/10"></div>
            </div>
            <div className="p-6 flex flex-col justify-between flex-grow">
              <div className="flex flex-col gap-3">
                {/* TODO: Replace with real logo PNG from Spartek Brochure — place file at /public/assets/spartekonstruct-logo.png */}
                <svg viewBox="0 0 260 40" className="h-10 w-auto mb-1">
                  <text x="0" y="30" fontFamily="Montserrat" fontWeight="800" fontSize="20"
                    fill="#1a57a1" letterSpacing="1">
                    SPARTEKONSTRUCT
                  </text>
                </svg>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  The Precast Construction division of Spartek. Specializes in designing and building quality structures using advanced precast technology. Products: Precast Constructions, Polished Concrete Floors, Industrial & Warehouse Floors, Densified Parking Floors. Manufactures Walls, Slabs, Beams, Columns, Drains, Toilet Pods.
                </p>
              </div>
              <a
                id="company-link-spartekonstruct"
                href="https://spartek.in"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 text-xs text-primary font-bold hover:underline flex items-center gap-1 cursor-pointer self-start animate-fadeIn"
              >
                <span>Explore Construction</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 3: Spartekoncrete */}
          <div
            id="company-card-spartekoncrete"
            className="bg-white border border-gray-150 rounded-xl hover:shadow-lg hover:border-[#1d4485]/25 transition duration-300 flex flex-col overflow-hidden"
          >
            <div className="h-44 w-full overflow-hidden relative">
              <img
                src={spartekoncreteImg}
                alt="Polishing and mineral enhancers"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/10"></div>
            </div>
            <div className="p-6 flex flex-col justify-between flex-grow">
              <div className="flex flex-col gap-3">
                {/* TODO: Replace with real logo PNG from Spartek Brochure — place file at /public/assets/spartekoncrete-logo.png */}
                <svg viewBox="0 0 240 40" className="h-10 w-auto mb-1">
                  <text x="0" y="30" fontFamily="Montserrat" fontWeight="800" fontSize="20"
                    fill="#1d4485" letterSpacing="1">
                    SPARTEKONCRETE
                  </text>
                </svg>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  A high-performance mineral-based Concrete Enhancer. Quick setting, self-compacting, and gains early strength. Also into Concrete Floor Polishing — used in Airports, Automobile Showrooms, Warehouses, Car Parking, and Industrial Floors. A superior replacement for expensive Marbles, Granites and Vitrified Tiles.
                </p>
              </div>
              <a
                id="company-link-spartekoncrete"
                href="https://spartek.in"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 text-xs text-primary font-bold hover:underline flex items-center gap-1 cursor-pointer self-start animate-fadeIn"
              >
                <span>Explore Minerals</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
