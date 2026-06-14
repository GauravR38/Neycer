import { useState, useMemo } from 'react';
import { ArrowLeft, ShoppingCart, Check, ShieldCheck, HelpCircle, Truck, PackageCheck, AlertCircle } from 'lucide-react';
import { Page, Product } from '../types';
import { PRODUCTS } from '../data';

interface ProductDetailProps {
  productId: string | null;
  setCurrentPage: (page: Page) => void;
  onAddToCart: (p: Product, quantity?: number) => void;
}

export default function ProductDetail({
  productId,
  setCurrentPage,
  onAddToCart
}: ProductDetailProps) {
  const [quantity, setQuantity] = useState(1);
  const [successMsg, setSuccessMsg] = useState(false);

  const product = useMemo(() => {
    if (!productId) return null;
    return PRODUCTS.find(p => p.id === productId) || null;
  }, [productId]);

  if (!product) {
    return (
      <div id="product-not-found" className="max-w-7xl mx-auto w-full px-4 py-20 text-center flex flex-col items-center gap-4">
        <AlertCircle className="w-12 h-12 text-red-500" />
        <h2 className="text-xl font-bold text-brand-deepblue">Product Specifications Not Found</h2>
        <p className="text-xs text-brand-lightgray max-w-sm">
          Please return to the collections folder to browse verified models.
        </p>
        <button
          onClick={() => setCurrentPage('products')}
          className="bg-primary text-white font-semibold text-xs px-5 py-2.5 rounded hover:bg-opacity-90 transition cursor-pointer"
        >
          Check Collections
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
    setSuccessMsg(true);
    setTimeout(() => setSuccessMsg(false), 3000);
  };

  return (
    <div id="product-detail-view" className="max-w-7xl mx-auto w-full px-4 py-8 flex flex-col gap-8 bg-white">
      {/* Back button */}
      <button
        id="detail-back-button"
        onClick={() => setCurrentPage('products')}
        className="flex items-center gap-1.5 text-xs font-bold text-primary hover:text-brand-darkblue self-start cursor-pointer transition focus:outline-none"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Product Collections</span>
      </button>

      {/* Main detail columns */}
      <div id="detail-main-layout" className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Left column - Visual simulation & placeholders */}
        <div id="detail-image-panel" className="md:col-span- così md:col-span-5 bg-gray-50 border border-gray-150 rounded-lg overflow-hidden p-8 flex flex-col items-center justify-center min-h-[320px] md:min-h-[400px] relative">
          {product.badge && (
            <span className="absolute top-4 left-4 bg-primary text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded">
              {product.badge}
            </span>
          )}
          <span className="absolute top-4 right-4 text-xs font-mono text-brand-lightgray font-bold uppercase tracking-wider">
            Neycer India
          </span>

          {/* Abstract elegant vector illustration simulating a shiny porcelain piece */}
          <div className="flex flex-col items-center justify-center gap-4">
            <svg className="w-32 h-32 text-slate-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
            </svg>
            <div className="text-center">
              <h4 className="text-xs font-black text-brand-deepblue tracking-widest uppercase">
                Vitreous Ceramic China
              </h4>
              <p className="text-[10px] text-brand-lightgray mt-1 leading-normal uppercase font-bold tracking-wider">
                Heavy glazed stain-resistant finish
              </p>
            </div>
          </div>
        </div>

        {/* Right column - Pricing, spec sheets, cart details */}
        <div id="detail-info-panel" className="md:col-span-7 flex flex-col gap-6">
          <div id="detail-heading-block">
            <span className="text-xs font-bold text-primary uppercase tracking-wide">
              {product.category}
            </span>
            <h1 id="detail-product-name" className="text-2xl md:text-3xl font-extrabold text-brand-deepblue tracking-tight leading-tight mt-1 uppercase">
              {product.name}
            </h1>
            <div className="flex items-center gap-3 mt-2 text-xs text-brand-lightgray font-semibold">
              <span>Product Code: <strong className="font-semibold text-brand-darkgray font-mono">{product.code}</strong></span>
              <span>•</span>
              <span>Available Since: <span className="text-brand-darkgray font-mono">1960 Heritage</span></span>
            </div>
          </div>

          <div id="detail-pricing-block" className="p-4 bg-brand-lightblue/20 rounded-md border border-brand-lightblue/50 flex flex-col gap-2">
            <div className="flex items-baseline gap-3">
              <span className="text-xs font-bold text-brand-deepblue uppercase tracking-wider">Retail list price:</span>
              <span id="detail-current-price" className="text-2xl font-black text-brand-deepblue font-mono">
                {product.price}
              </span>
              {product.originalPrice && (
                <span id="detail-original-price" className="text-sm text-red-500 line-through font-mono">
                  {product.originalPrice}
                </span>
              )}
            </div>
            <p className="text-[10px] text-brand-lightgray font-medium italic">
              *Taxes and transportation charges computed at checkout. Offers valid for limited period.
            </p>
          </div>

          {/* Quantitative Selector & Cart Trigger */}
          <div id="detail-cart-action-panel" className="flex flex-col sm:flex-row items-center gap-4 border-y border-gray-100 py-5">
            <div className="flex items-center border border-gray-200 rounded-md bg-white">
              <button
                id="qty-decrement"
                onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                className="px-3.5 py-2 text-brand-darkgray font-bold hover:bg-gray-100 rounded-l transition-colors cursor-pointer"
                disabled={quantity <= 1}
              >
                -
              </button>
              <span id="qty-display-bold" className="px-5 py-2 font-mono text-sm font-black text-brand-deepblue">
                {quantity}
              </span>
              <button
                id="qty-increment"
                onClick={() => setQuantity(prev => prev + 1)}
                className="px-3.5 py-2 text-brand-darkgray font-bold hover:bg-gray-100 rounded-r transition-colors cursor-pointer"
              >
                +
              </button>
            </div>

            <button
              id="detail-add-cart-btn"
              onClick={handleAddToCart}
              className="w-full sm:w-auto bg-primary hover:bg-brand-darkblue text-white font-bold text-sm px-8 py-3 rounded-md transition cursor-pointer flex items-center justify-center gap-2"
            >
              <ShoppingCart className="w-4 h-4" />
              <span>Add {quantity} Item{quantity > 1 ? 's' : ''} to Cart</span>
            </button>
          </div>

          {successMsg && (
            <div id="cart-add-success-banner" className="bg-emerald-50 text-emerald-800 border border-emerald-100 text-xs px-4 py-2.5 rounded flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-600" />
              <span>Successfully added {quantity} x {product.name} to your local shopping cart!</span>
            </div>
          )}

          {/* Specifications Table */}
          <div id="detail-specifications-table-block">
            <h3 className="text-xs font-bold uppercase tracking-wider text-brand-deepblue mb-3">
              Full Technical Specifications
            </h3>
            <div className="border border-gray-100 rounded overflow-hidden">
              <table className="w-full text-left border-collapse text-xs">
                <tbody>
                  <tr className="border-b border-gray-50 bg-gray-50/50">
                    <td className="p-3 font-semibold text-brand-deepblue w-1/3">Dimension Specification</td>
                    <td className="p-3 font-mono text-brand-darkgray">{product.dimensions}</td>
                  </tr>
                  <tr className="border-b border-gray-50">
                    <td className="p-3 font-semibold text-brand-deepblue">Vitreous Ceramic Glazing</td>
                    <td className="p-3 text-brand-darkgray">High-Fired Stain Proof White Glaze</td>
                  </tr>
                  {product.wbCode && (
                    <tr className="border-b border-gray-50 bg-gray-50/50">
                      <td className="p-3 font-semibold text-brand-deepblue">Wash Basin Component Code</td>
                      <td className="p-3 font-mono text-brand-darkgray">{product.wbCode} {product.wbPrice ? `(${product.wbPrice})` : ''}</td>
                    </tr>
                  )}
                  {product.pedestalCode && (
                    <tr className="border-b border-gray-50">
                      <td className="p-3 font-semibold text-brand-deepblue">Pedestal Component Code</td>
                      <td className="p-3 font-mono text-brand-darkgray">{product.pedestalCode} {product.pedestalPrice ? `(${product.pedestalPrice})` : ''}</td>
                    </tr>
                  )}
                  {product.notes && (
                    <tr className="border-b border-gray-50 bg-gray-50/50">
                      <td className="p-3 font-semibold text-brand-deepblue">Component/Trap/Coupling Notes</td>
                      <td className="p-3 text-brand-darkgray italic">{product.notes}</td>
                    </tr>
                  )}
                  <tr>
                    <td className="p-3 font-semibold text-brand-deepblue">Standard Guarantee</td>
                    <td className="p-3 text-brand-darkgray">Conforming to exact ISI Standards across projects in India</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Guarantees row */}
          <div id="detail-assurances-row" className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-gray-100 text-[11px] text-brand-darkgray font-medium">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-primary flex-shrink-0" />
              <span>Genuine Neycer Product Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <PackageCheck className="w-5 h-5 text-primary flex-shrink-0" />
              <span>Rigorous Quality Inspection Check</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="w-5 h-5 text-primary flex-shrink-0" />
              <span>Safe Delivery via Dealer Transport</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
