import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Percent, ShoppingCart, Eye, Tag } from 'lucide-react';
import { Page, Product } from '../types';
import { PRODUCTS } from '../data';

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
        className={classNameOverride || "text-[10.5px] font-bold py-1.5 px-3 rounded transition duration-300 flex items-center gap-1 cursor-pointer shadow-sm bg-primary hover:bg-[#1d4485] text-white"}
      >
        <ShoppingCart className="w-3 h-3" />
        <span>Add</span>
      </button>
    );
  }

  return (
    <div className="flex items-center justify-between min-w-[85px] h-[30px] border border-[#1a57a1] rounded overflow-hidden">
      <button
        onClick={handleSubtract}
        className="w-7 h-full flex items-center justify-center text-[#1a57a1] font-bold text-sm hover:bg-[#f1fdff] cursor-pointer transition-all duration-300"
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
        className="w-7 h-full flex items-center justify-center text-[#1a57a1] font-bold text-sm hover:bg-[#f1fdff] cursor-pointer transition-all duration-300"
      >
        +
      </button>
    </div>
  );
}

interface OffersProps {
  setCurrentPage: (page: Page) => void;
  setSelectedProductId: (id: string | null) => void;
  onAddToCart: (p: Product) => void;
  cart: any[];
  onUpdateQuantity: (id: string, q: number) => void;
  onRemoveItem: (id: string) => void;
}

export default function Offers({
  setCurrentPage,
  setSelectedProductId,
  onAddToCart,
  cart,
  onUpdateQuantity,
  onRemoveItem
}: OffersProps) {
  // Filter products that have promotional discounts or special badges
  const offersList = PRODUCTS.filter(p => p.badge || p.originalPrice);

  const handleProductDetail = (productId: string) => {
    setSelectedProductId(productId);
    setCurrentPage('product-detail');
  };

  return (
    <div id="promotional-offers-view" className="max-w-7xl mx-auto w-full px-4 py-8 flex flex-col gap-10 bg-white">
      {/* Promotion Title Panel */}
      <div id="offers-header" className="p-6 md:p-8 bg-brand-lightblue/20 rounded-xl border border-brand-lightblue/50 flex flex-col sm:flex-row justify-between items-center gap-6 shadow-sm">
        <div id="offers-heading-text" className="max-w-xl flex flex-col gap-2">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#1d4485] flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Neycer Promotional Campaign</span>
          </span>
          <h1 id="offers-title-text" className="text-2xl md:text-3.5xl font-black text-brand-darkgray tracking-tight leading-tight">
            Special Deals & Dealer Discounts
          </h1>
          <p id="offers-desc-p" className="text-xs md:text-sm text-brand-darkgray leading-relaxed font-medium">
            Avail wholesale rates, builder discounts, and promotional incentives on certified premium closets, table top wash basins, and EWC sets.
          </p>
        </div>
        <div id="offers-illustration-icon" className="p-4 bg-white rounded-full border border-gray-150 text-[#1d4485] hidden md:block">
          <Percent className="w-8 h-8" />
        </div>
      </div>

      {/* Grid List matching Products layout but specifically labeled */}
      <div id="offers-grid-container" className="flex flex-col gap-6">
        <div id="offers-count-bar" className="flex justify-between items-center text-xs text-[#1d4485] font-semibold border-b border-gray-150 pb-2 uppercase tracking-wider">
          <span>Active Promotional Campaign: {offersList.length} Campaign Lines</span>
          <span className="flex items-center gap-1.5 text-primary">
            <Tag className="w-3.5 h-3.5" />
            <span>Seasonal Liquidations</span>
          </span>
        </div>

        <div id="offers-grid-list" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {offersList.map((product) => (
            <div
              key={product.id}
              id={`offer-card-${product.id}`}
              className="bg-white rounded-lg overflow-hidden border-2 border-brand-lightblue/40 hover:shadow-lg hover:border-[#1d4485]/40 transition duration-300 flex flex-col justify-between group relative"
            >
              {/* Product Image Container with square aspect ratio and #f1fdff background */}
              <div className="product-image-container relative bg-[#f1fdff] overflow-hidden flex items-center justify-center">
                <img
                  src={`https://placehold.co/240x180/f1fdff/1a57a1?text=${product.name}`}
                  alt={product.name}
                />
                
                {product.badge && (
                  <span className="absolute top-3 left-3 bg-[#22c55e] text-white text-[9px] font-extrabold uppercase px-2.5 py-1 rounded shadow-sm">
                    {product.badge}
                  </span>
                )}

                <span className="absolute top-3 right-3 text-[9px] font-bold text-[#1d4485] font-mono bg-white/95 px-1.5 py-0.5 rounded border border-gray-100">
                  {product.code}
                </span>
              </div>

              {/* Descriptions & Details */}
              <div className="p-4 flex flex-col gap-2.5 flex-grow">
                <div className="flex-grow">
                  <span className="text-[10px] text-[#1d4485] font-bold uppercase tracking-wide">
                    {product.category}
                  </span>
                  <h4 className="text-[13px] font-extrabold text-brand-darkgray leading-tight uppercase tracking-tight mt-0.5">
                    {product.name}
                  </h4>
                  <p className="text-[10px] text-brand-lightgray mt-1 font-mono">
                    Dim: {product.dimensions}
                  </p>
                </div>

                {/* Pricing & buy actions */}
                <div className="flex items-center justify-between border-t border-gray-100 pt-3.5 mt-2">
                  <div className="flex flex-col">
                    {product.originalPrice && (
                      <span className="text-[10px] text-red-500 line-through font-mono">
                        {product.originalPrice}
                      </span>
                    )}
                    <span className="text-sm font-extrabold text-brand-darkgray font-mono">
                      {product.price}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      id={`offer-view-specs-${product.id}`}
                      onClick={() => handleProductDetail(product.id)}
                      className="p-1.5 border border-gray-200 text-brand-darkgray hover:text-primary hover:border-primary/20 hover:bg-brand-lightblue/35 rounded transition cursor-pointer"
                      title="View Details"
                    >
                      <Eye className="w-3.5 h-3.5" />
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
