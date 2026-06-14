import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Search, SlidersHorizontal, ArrowUpDown, ShoppingCart, Eye, Grid } from 'lucide-react';
import { Page, Product } from '../types';
import { PRODUCTS, CATEGORIES } from '../data';

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
        className={classNameOverride || "text-[10px] font-bold uppercase px-4 py-1.5 rounded cursor-pointer transition-all duration-300 border text-primary border-primary hover:bg-[#1d4485] hover:text-white"}
      >
        Add to Cart
      </button>
    );
  }

  return (
    <div className="flex items-center justify-between min-w-[100px] h-[30px] border border-[#1a57a1] rounded overflow-hidden">
      <button
        onClick={handleSubtract}
        className="w-8 h-full flex items-center justify-center text-[#1a57a1] font-bold text-sm hover:bg-[#f1fdff] cursor-pointer transition-all duration-300"
      >
        −
      </button>
      <span
        className="flex-grow text-center text-xs font-semibold text-[#1a57a1]"
        style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}
      >
        {quantity}
      </span>
      <button
        onClick={handleAdd}
        className="w-8 h-full flex items-center justify-center text-[#1a57a1] font-bold text-sm hover:bg-[#f1fdff] cursor-pointer transition-all duration-300"
      >
        +
      </button>
    </div>
  );
}

interface ProductsProps {
  setCurrentPage: (page: Page) => void;
  setSelectedProductId: (id: string | null) => void;
  onAddToCart: (p: Product) => void;
  cart: any[];
  onUpdateQuantity: (id: string, q: number) => void;
  onRemoveItem: (id: string) => void;
}

export default function Products({
  setCurrentPage,
  setSelectedProductId,
  onAddToCart,
  cart,
  onUpdateQuantity,
  onRemoveItem
}: ProductsProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('Single Piece Closets');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState<'default' | 'asc' | 'desc'>('default');

  // Convert prices to numerical format for sorting comparison
  const getNumericPrice = (priceStr: string): number => {
    const cleanStr = priceStr.split('/')[0].replace(/[^\d]/g, '');
    const num = parseInt(cleanStr, 10);
    return isNaN(num) ? 0 : num;
  };

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(product => {
      const matchesCategory = product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (product.notes && product.notes.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortOrder === 'asc') {
        return getNumericPrice(a.price) - getNumericPrice(b.price);
      } else if (sortOrder === 'desc') {
        return getNumericPrice(b.price) - getNumericPrice(a.price);
      }
      return 0;
    });
  }, [selectedCategory, searchQuery, sortOrder]);

  const handleProductDetail = (productId: string) => {
    setSelectedProductId(productId);
    setCurrentPage('product-detail');
  };

  return (
    <div id="products-catalog-view" className="max-w-7xl mx-auto w-full px-4 py-8 flex flex-col gap-8 bg-white">
      {/* Title & Introduction */}
      <div id="catalog-header" className="flex flex-col gap-1.5 md:border-b md:border-gray-100 md:pb-6">
        <h1 id="catalog-title" className="text-2xl md:text-3xl font-extrabold text-[#1d4485] tracking-tight">
          Neycer Sanitaryware Collections
        </h1>
        <p id="catalog-description" className="text-xs md:text-sm text-brand-darkgray max-w-3xl leading-relaxed font-medium">
          Explore our extensive catalog of Snow White (SW) & customized pigmented bathroom units. Manufactured to meet rigorous ISI standards, Neycer products integrate beauty with over 60 years of technical expertise.
        </p>
      </div>

      {/* Main Grid: Sidebar + Product Grid */}
      <div id="catalog-grid-layout" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Sidebar: Categories list */}
        <aside id="catalog-sidebar" className="col-span-1 lg:col-span-3 bg-brand-lightblue/20 p-4 rounded-lg border border-brand-lightblue/50 shadow-sm">
          <h3 id="sidebar-title" className="text-xs font-bold uppercase tracking-widest text-[#1d4485] mb-4 pb-2 border-b border-gray-150">
            Select Category
          </h3>
          
          {/* Desktop vertical tab column */}
          <div id="sidebar-tabs-desktop" className="hidden lg:flex flex-col gap-1.5">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                id={`sidebar-tab-${cat.replace(/\s+/g, '-').toLowerCase()}`}
                onClick={() => setSelectedCategory(cat)}
                className={`text-left px-3.5 py-2.5 rounded-md text-xs font-bold cursor-pointer transition uppercase tracking-wider ${
                  selectedCategory === cat
                    ? 'bg-[#1d4485] text-white shadow-sm'
                    : 'text-brand-darkgray hover:bg-white hover:text-[#1d4485]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Mobile responsive selector dropdown */}
          <div id="sidebar-dropdown-mobile" className="block lg:hidden w-full">
            <select
              id="mobile-category-selector"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-3 py-2.5 bg-white border border-gray-200 rounded-md text-xs font-semibold text-brand-darkgray cursor-pointer focus:outline-none focus:border-[#1d4485]"
            >
              {CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </aside>

        {/* Right Section: Filters & Product Grid */}
        <section id="catalog-results-section" className="col-span-1 lg:col-span-9 flex flex-col gap-6">
          {/* Filter Bar */}
          <div id="catalog-filter-bar" className="bg-gray-50 p-4 border border-gray-150 rounded-lg flex flex-col sm:flex-row justify-between items-center gap-4">
            {/* Search within Category */}
            <div id="filter-search" className="relative w-full sm:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-lightgray w-4 h-4" />
              <input
                id="filter-search-input"
                type="text"
                placeholder={`Search in ${selectedCategory}...`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 bg-white border border-gray-200 rounded-md text-xs text-brand-darkgray focus:outline-none focus:border-[#1d4485]"
              />
            </div>

            {/* Sorting controls */}
            <div id="filter-sorting" className="flex items-center gap-2.5 self-end sm:self-auto">
              <SlidersHorizontal className="w-4 h-4 text-brand-lightgray" />
              <span className="text-[11px] font-bold text-[#1d4485] uppercase tracking-wider">
                Sort Price:
              </span>
              <select
                id="sorting-select-dropdown"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value as any)}
                className="px-2.5 py-1.5 bg-white border border-gray-200 rounded-md text-xs font-semibold text-brand-darkgray cursor-pointer focus:outline-none focus:border-[#1d4485]"
              >
                <option value="default">Catalogue Order</option>
                <option value="asc">Low to High</option>
                <option value="desc">High to Low</option>
              </select>
            </div>
          </div>

          {/* Results Badge */}
          <div id="results-count-panel" className="flex justify-between items-center text-xs text-brand-lightgray font-semibold uppercase tracking-wider">
            <span>Showing {filteredProducts.length} items in theme</span>
            <span className="flex items-center gap-1 text-[#1d4485]">
              <Grid className="w-3.5 h-3.5" />
              <span>Grid Matrix</span>
            </span>
          </div>

          {/* Product Cards Grid */}
          {filteredProducts.length > 0 ? (
            <div id="products-catalog-grid" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 animate-fadeIn">
              {filteredProducts.map((product) => {
                const placeholderText = product.category.toLowerCase().includes('closet') || product.category.toLowerCase().includes('ewc')
                  ? 'Water+Closet'
                  : product.category.toLowerCase().includes('basin') || product.category.toLowerCase().includes('pedestal')
                    ? 'Wash+Basin'
                    : product.category.toLowerCase().includes('sink')
                      ? 'Kitchen+Sink'
                      : product.category.toLowerCase().includes('urinal')
                        ? 'Urinal'
                        : 'Sanitaryware';

                return (
                  <div
                    key={product.id}
                    id={`product-card-${product.id}`}
                    className="bg-white p-5 border border-gray-150 transition-all duration-300 hover:shadow-md hover:-translate-y-1 flex flex-col justify-between text-center rounded-lg"
                  >
                    {/* Consistent square ratio photo container with light blue-white background */}
                    <div className="product-image-container mb-4 relative rounded">
                      <img
                        src={`https://placehold.co/240x180/f1fdff/1a57a1?text=${placeholderText}`}
                        alt={product.name}
                      />
                      {product.badge && (
                        <span className="absolute top-2 left-2 bg-[#22c55e] text-white text-[9px] font-bold uppercase px-2 py-0.5 z-10 rounded">
                          {product.badge}
                        </span>
                      )}
                    </div>

                    {/* Information Details */}
                    <div className="flex flex-col gap-1.5">
                      <div className="text-[10px] text-brand-lightgray font-bold uppercase tracking-wider">
                        {product.category}
                      </div>
                      <h4 className="text-[14px] font-extrabold text-brand-darkgray uppercase tracking-wide">
                        {product.name}
                      </h4>
                      <div className="text-[11px] text-[#1d4485] font-semibold font-mono">
                        Code: {product.code}
                      </div>
                      <p className="text-[11.5px] text-brand-lightgray font-semibold font-mono">
                        {product.dimensions}
                      </p>
                      
                      <div className="text-[15px] font-semibold text-primary font-mono mt-1">
                        {product.price}
                        {product.originalPrice && (
                          <span className="text-xs text-brand-lightgray line-through font-normal ml-2">
                            {product.originalPrice}
                          </span>
                        )}
                      </div>

                      {product.notes && (
                        <p className="text-[10.5px] text-[#1d4485] italic line-clamp-2 mt-1 leading-normal">
                          {product.notes}
                        </p>
                      )}

                       <div className="flex items-center justify-center gap-3 mt-4 pt-3 border-t border-gray-100">
                        <button
                          id={`product-card-view-details-${product.id}`}
                          onClick={() => handleProductDetail(product.id)}
                          className="text-[10px] font-bold text-brand-darkgray uppercase border border-gray-300 px-3 py-1.5 hover:bg-gray-100 cursor-pointer transition rounded"
                          title="View Specifications"
                        >
                          Specs
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
          ) : (
            <div id="no-products-fallback" className="text-center py-20 bg-gray-50 border border-dashed border-gray-200 rounded-lg flex flex-col items-center justify-center gap-3">
              <SlidersHorizontal className="w-8 h-8 text-brand-lightgray" />
              <h3 className="text-sm font-bold text-brand-darkgray">No products found</h3>
              <p className="text-xs text-brand-lightgray max-w-sm px-6 leading-relaxed">
                We couldn't find matches for "{searchQuery}" in {selectedCategory}. Try clear your filters or write a different search term.
              </p>
              <button
                id="clear-filters-btn"
                onClick={() => { setSearchQuery(''); setSortOrder('default'); }}
                className="text-xs text-[#1d4485] underline font-semibold mt-2 cursor-pointer"
              >
                Reset Search
              </button>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
