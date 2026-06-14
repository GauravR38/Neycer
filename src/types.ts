export interface Product {
  id: string;
  name: string;
  code: string;
  price: string; // Display price or starting price
  dimensions: string;
  notes?: string;
  category: string;
  originalPrice?: string; // used for offers/discounts
  badge?: 'Special Offer' | 'Limited Time' | 'Dealer Discount';
  swPrice?: string;
  colourPrice?: string;
  components?: string;
  wbCode?: string;
  pedestalCode?: string;
  wbPrice?: string;
  pedestalPrice?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Dealer {
  name: string;
  address: string;
  phone: string;
  city: string;
  state: string;
}

export interface Blog {
  id: string;
  title: string;
  summary: string;
  content: string;
  image: string;
  author?: string;
  date?: string;
}

export type Page =
  | 'home'
  | 'products'
  | 'product-detail'
  | 'about-us'
  | 'clients'
  | 'dealer-locator'
  | 'offers'
  | 'reach-us'
  | 'catalogue'
  | 'login'
  | 'cart'
  | 'business-associate'
  | 'investors'
  | 'privacy-policy'
  | 'shipping-policy'
  | 'terms';
