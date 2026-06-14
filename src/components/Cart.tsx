import { Trash2, ShoppingCart, ArrowRight, HelpCircle, ShieldAlert, CheckCircle2, ShoppingBag } from 'lucide-react';
import { Page, CartItem, Product } from '../types';

interface CartProps {
  cart: CartItem[];
  setCurrentPage: (page: Page) => void;
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export default function Cart({
  cart,
  setCurrentPage,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}: CartProps) {
  // Parsing numerical values for calculation
  const getNumericPriceVal = (priceStr: string): number => {
    const cleanStr = priceStr.split('/')[0].replace(/[^\d]/g, '');
    const num = parseInt(cleanStr, 10);
    return isNaN(num) ? 0 : num;
  };

  const subtotal = cart.reduce((sum, item) => {
    return sum + getNumericPriceVal(item.product.price) * item.quantity;
  }, 0);

  // Standard Indian GST for sanitaryware is 18%
  const gstTax = Math.round(subtotal * 0.18);
  const total = subtotal + gstTax;

  const handleCheckoutSubmit = () => {
    alert(`Thank you for submitting your direct booking request! An estimate order summarizing ₹${total.toLocaleString('en-IN')} is forwarded to your nearby Neycer dealer.`);
    onClearCart();
    setCurrentPage('home');
  };

  return (
    <div id="shopping-cart-view" className="max-w-7xl mx-auto w-full px-4 py-8 flex flex-col gap-10 bg-white">
      {/* Title */}
      <div id="cart-title-section" className="border-b border-gray-150 pb-5">
        <h1 id="cart-main-title" className="text-2xl md:text-3xl font-black text-brand-deepblue tracking-tight">
          Direct Dealer Booking Cart
        </h1>
        <p id="cart-subtitle-p" className="text-xs text-brand-lightgray font-bold uppercase mt-1 tracking-wider">
          Estimate, check quantities, and route your logistics request to your local showroom
        </p>
      </div>

      {cart.length > 0 ? (
        <div id="cart-items-layout" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Products items */}
          <div id="cart-items-list-panel" className="lg:col-span-8 flex flex-col gap-4">
            {cart.map((item) => {
              const numericPerItem = getNumericPriceVal(item.product.price);
              const totalPerItem = numericPerItem * item.quantity;

              return (
                <div
                  key={item.product.id}
                  id={`item-row-${item.product.id}`}
                  className="p-4 bg-white border border-gray-150 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-4"
                >
                  {/* Left node with item image placeholder & description */}
                  <div className="flex items-center gap-4 w-full sm:w-auto">
                    <div className="h-16 w-16 bg-gray-50 border border-gray-150 rounded flex items-center justify-center flex-shrink-0 relative">
                      <svg className="w-8 h-8 text-slate-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                      </svg>
                    </div>

                    <div className="flex flex-col">
                      <span className="text-[9px] text-primary font-bold uppercase tracking-wider">
                        {item.product.category}
                      </span>
                      <h3 className="text-sm font-extrabold text-brand-deepblue leading-tight uppercase">
                        {item.product.name}
                      </h3>
                      <span className="text-[10px] text-brand-lightgray font-mono font-medium">
                        Code: {item.product.code} | {item.product.dimensions}
                      </span>
                    </div>
                  </div>

                  {/* Quantity adjusts */}
                  <div className="flex items-center gap-6 justify-between w-full sm:w-auto sm:justify-start">
                    <div className="flex items-center border border-gray-200 rounded bg-white">
                      <button
                        id={`qty-dec-${item.product.id}`}
                        onClick={() => onUpdateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
                        className="px-2.5 py-1 text-xs text-brand-darkgray font-bold hover:bg-gray-100 rounded-l cursor-pointer"
                      >
                        -
                      </button>
                      <span id={`qty-bold-val-${item.product.id}`} className="px-3.5 py-1 text-xs font-mono font-bold text-brand-deepblue">
                        {item.quantity}
                      </span>
                      <button
                        id={`qty-inc-${item.product.id}`}
                        onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                        className="px-2.5 py-1 text-xs text-brand-darkgray font-bold hover:bg-gray-100 rounded-r cursor-pointer"
                      >
                        +
                      </button>
                    </div>

                    {/* Costing */}
                    <div className="text-right flex flex-col font-mono">
                      <span className="text-xs font-bold text-brand-deepblue">
                        ₹{totalPerItem.toLocaleString('en-IN')}
                      </span>
                      <span className="text-[9px] text-brand-lightgray">
                        {item.product.price} each
                      </span>
                    </div>

                    {/* Removal */}
                    <button
                      id={`remove-item-${item.product.id}`}
                      onClick={() => onRemoveItem(item.product.id)}
                      className="p-1.5 text-red-500 hover:text-red-700 hover:bg-red-50 rounded transition cursor-pointer"
                      title="Remove product"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}

            {/* Clear button */}
            <button
              id="clear-all-cart-btn"
              onClick={onClearCart}
              className="text-xs font-semibold text-red-600 hover:underline cursor-pointer self-start border border-dashed border-red-200 rounded px-3 py-1.5 hover:bg-red-50/50 mt-1"
            >
              Empty Booking Cart
            </button>
          </div>

          {/* Right: Summary panel */}
          <div id="cart-summary-panel" className="lg:col-span-4 bg-brand-lightblue/20 border border-brand-lightblue/50 p-5 rounded-lg flex flex-col gap-4">
            <h3 className="text-xs font-extrabold uppercase text-brand-deepblue tracking-widest border-b border-brand-lightblue/50 pb-2.5">
              General Booking Summary
            </h3>

            <div className="flex flex-col gap-3 text-xs text-brand-darkgray font-medium">
              <div className="flex justify-between items-center">
                <span>Value Subtotal:</span>
                <span className="font-mono font-bold">₹{subtotal.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Direct GST (Standard 18%):</span>
                <span className="font-mono font-bold">₹{gstTax.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between items-center font-bold text-xs uppercase text-brand-deepblue">
                <span>Estimated Freight Charges:</span>
                <span className="text-emerald-600">Calculated by Dealer</span>
              </div>

              <div className="border-t border-brand-lightblue/50 my-2"></div>

              <div className="flex justify-between items-baseline font-mono">
                <span className="text-xs font-bold text-brand-deepblue uppercase">Estimated Total:</span>
                <span id="grand-total-display" className="text-lg font-black text-brand-deepblue">
                  ₹{total.toLocaleString('en-IN')}
                </span>
              </div>
            </div>

            <button
              id="proceed-checkout-btn"
              onClick={handleCheckoutSubmit}
              className="w-full bg-primary hover:bg-brand-darkblue text-white font-bold text-xs py-3 rounded-md transition cursor-pointer flex items-center justify-center gap-1.5 shadow-sm mt-2"
            >
              <span>Submit Direct Booking Order</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Support banner */}
            <div id="direct-cart-notice" className="p-3 bg-white rounded border border-gray-150 flex gap-2 text-[10px] leading-relaxed text-brand-darkgray font-medium mt-1">
              <ShieldAlert className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              <span>Neycer India routes estimating lists to local authorized dealers near your delivery state to provide optimized freight options.</span>
            </div>
          </div>
        </div>
      ) : (
        <div id="empty-cart-view" className="text-center py-20 bg-gray-50 border border-dashed border-gray-200 rounded-lg flex flex-col items-center gap-3">
          <div className="p-4 bg-brand-lightblue rounded-full text-primary">
            <ShoppingBag className="w-8 h-8" />
          </div>
          <h3 className="text-sm font-bold text-brand-deepblue">Your booking cart is vacant</h3>
          <p className="text-xs text-brand-lightgray max-w-sm px-6 leading-relaxed">
            Choose from over 80+ certified sanitaryware options, closets, urinals and pan options and compile your estimating draft.
          </p>
          <button
            onClick={() => setCurrentPage('products')}
            className="mt-3 bg-primary text-white font-bold text-xs px-6 py-2.5 rounded hover:bg-opacity-90 cursor-pointer transition"
          >
            Explore Product Collections
          </button>
        </div>
      )}
    </div>
  );
}
