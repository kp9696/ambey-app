// App.js
import React, { useEffect, useState, useMemo, useCallback } from "react";
import axios from "axios";
import "./App.css";
import { 
  ShoppingCart, 
  Search, 
  X, 
  Minus, 
  Plus, 
  Trash2,
  Check,
  Package,
  Star,
  Truck,
  Shield,
  Clock,
  ChevronRight,
  Heart,
  Share2,
  Eye,
  AlertCircle,
  CheckCircle,
  Info
} from 'lucide-react';

const FALLBACK_PRODUCT_IMAGE = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='320' height='180' viewBox='0 0 320 180'%3E%3Crect width='320' height='180' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial%2Csans-serif' font-size='16' fill='%236b7280'%3EProduct Image%3C/text%3E%3C/svg%3E";
const WHATSAPP_PHONE = "919416203393";
const API_BASE_URL = process.env.REACT_APP_API_URL || window.location.origin;
const CART_STORAGE_KEY = "ambey_cart_v1";
const DESKTOP_PRODUCTS_PAGE_SIZE = 24;
const MOBILE_PRODUCTS_PAGE_SIZE = 12;

const getProductsPageSize = () => {
  if (typeof window === "undefined") return DESKTOP_PRODUCTS_PAGE_SIZE;
  return window.innerWidth <= 768 ? MOBILE_PRODUCTS_PAGE_SIZE : DESKTOP_PRODUCTS_PAGE_SIZE;
};

const getStoredCart = () => {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(CART_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

const normalizeImagePath = (imagePath) =>
  String(imagePath || "")
    .trim()
    .replace(/\\+/g, "/")
    .replace(/\s/g, "%20");

const resolveImageUrl = (imagePath) => {
  const normalizedPath = normalizeImagePath(imagePath);
  if (!normalizedPath) return FALLBACK_PRODUCT_IMAGE;
  if (/^https?:\/\//i.test(normalizedPath) || normalizedPath.startsWith("data:")) {
    return normalizedPath;
  }
  const cleanBase = API_BASE_URL.replace(/\/$/, "");
  const cleanPath = normalizedPath.startsWith("/") ? normalizedPath : `/${normalizedPath}`;
  return `${cleanBase}${cleanPath}`;
};

const getImageCandidates = (imagePath) => {
  const resolved = resolveImageUrl(imagePath);

  if (!resolved || resolved.startsWith("data:")) {
    return [FALLBACK_PRODUCT_IMAGE];
  }

  const canTryWebp = /\.(png|jpe?g)(\?.*)?$/i.test(resolved);
  const webpCandidate = canTryWebp ? resolved.replace(/\.(png|jpe?g)(\?.*)?$/i, ".webp$2") : resolved;
  const candidates = canTryWebp
    ? [webpCandidate, resolved, FALLBACK_PRODUCT_IMAGE]
    : [resolved, FALLBACK_PRODUCT_IMAGE];

  return [...new Set(candidates)];
};

const normalizeCategoryName = (category) => {
  const normalized = String(category || "").trim();
  return /^drain\s+mot$/i.test(normalized) ? "Drain Motor" : normalized;
};

// Modern color palette
const theme = {
  primary: '#2563eb',
  primaryDark: '#1d4ed8',
  secondary: '#10b981',
  accent: '#8b5cf6',
  danger: '#ef4444',
  warning: '#f59e0b',
  success: '#10b981',
  background: '#f8fafc',
  surface: '#ffffff',
  text: {
    primary: '#1e293b',
    secondary: '#475569',
    muted: '#64748b',
    inverse: '#ffffff'
  },
  border: '#e2e8f0',
  shadow: 'rgba(0, 0, 0, 0.1)'
};

const MAJOR_APPLIANCE_BRANDS = [
  { name: "LG", logoUrl: "https://www.google.com/s2/favicons?domain=lg.com&sz=128" },
  { name: "Samsung", logoUrl: "https://www.google.com/s2/favicons?domain=samsung.com&sz=128" },
  { name: "Whirlpool", logoUrl: "https://www.google.com/s2/favicons?domain=whirlpool.com&sz=128" },
  { name: "Godrej", logoUrl: "https://www.google.com/s2/favicons?domain=godrej.com&sz=128" },
  { name: "Voltas", logoUrl: "https://www.google.com/s2/favicons?domain=voltas.com&sz=128" },
  { name: "Blue Star", logoUrl: "https://www.google.com/s2/favicons?domain=bluestarindia.com&sz=128" },
  { name: "Lloyd", logoUrl: "https://www.google.com/s2/favicons?domain=mylloyd.com&sz=128" },
  { name: "Panasonic", logoUrl: "https://www.google.com/s2/favicons?domain=panasonic.com&sz=128" },
  { name: "Haier", logoUrl: "https://www.google.com/s2/favicons?domain=haier.com&sz=128" },
  { name: "Bosch", logoUrl: "https://www.google.com/s2/favicons?domain=bosch-home.in&sz=128" },
  { name: "IFB", logoUrl: "https://www.google.com/s2/favicons?domain=ifbappliances.com&sz=128" },
  { name: "Onida", logoUrl: "https://www.google.com/s2/favicons?domain=onida.com&sz=128" },
  { name: "Daikin", logoUrl: "https://www.google.com/s2/favicons?domain=daikinindia.com&sz=128" },
  { name: "Carrier", logoUrl: "https://www.google.com/s2/favicons?domain=carrier.com&sz=128" },
  { name: "Mitsubishi Electric", logoUrl: "https://www.google.com/s2/favicons?domain=mitsubishielectric.com&sz=128" },
  { name: "Electrolux", logoUrl: "https://www.google.com/s2/favicons?domain=electrolux.in&sz=128" },
  { name: "Midea", logoUrl: "https://www.google.com/s2/favicons?domain=midea.com&sz=128" },
  { name: "Siemens", logoUrl: "https://www.google.com/s2/favicons?domain=siemens-home.bsh-group.com&sz=128" }
];

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(() => getStoredCart());
  const [view, setView] = useState("shop");
  const [selectedCompany, setSelectedCompany] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState("");
  const [draftQuantities, setDraftQuantities] = useState({});
  const [toast, setToast] = useState({ show: false, message: "", type: "success" });
  const [showClearConfirm, setShowClearConfirm] = useState(false);
  const [showCartDrawer, setShowCartDrawer] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [wishlist, setWishlist] = useState([]);
  const [viewMode] = useState("grid");
  const [productsPageSize, setProductsPageSize] = useState(() => getProductsPageSize());
  const [visibleProductCount, setVisibleProductCount] = useState(() => getProductsPageSize());
  // Mobile filters removed for mobile-friendly experience
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalCompanies: 0,
    totalCategories: 0
  });

  useEffect(() => {
    loadProducts();
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      setStats({
        totalProducts: products.length,
        totalCompanies: new Set(products.map(p => p.company)).size,
        totalCategories: new Set(products.map(p => p.category)).size
      });
    }
  }, [products]);

  useEffect(() => {
    if (view === "checkout") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [view]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch {
      // Ignore storage errors so checkout flow continues to work
    }
  }, [cart]);

  useEffect(() => {
    const handleResize = () => {
      setProductsPageSize(getProductsPageSize());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handler to clear all filters
  const handleClearFilters = () => {
    setSelectedCompany("All");
    setSelectedCategory("All");
    setSearchQuery("");
  };

  const loadProducts = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${API_BASE_URL}/api/products`);
      const normalizedProducts = Array.isArray(res.data)
        ? res.data.map((product) => ({
            ...product,
            category: normalizeCategoryName(product?.category),
          }))
        : [];
      setProducts(normalizedProducts);
      setError(null);
    } catch (err) {
      // In production, avoid logging errors to console for user privacy and performance
      setError("Failed to load products. Please refresh the page.");
    } finally {
      setLoading(false);
    }
  };

  // Optimized with useCallback
  const addToCart = useCallback((product, quantity = 1) => {
    const safeQuantity = Number.isNaN(quantity) ? 1 : Math.max(1, quantity);
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + safeQuantity }
            : item
        );
      }
      return [...prev, { ...product, quantity: safeQuantity }];
    });
    setDraftQuantities(prev => ({ ...prev, [product.id]: safeQuantity }));
    showToast(`${product.name} added to cart`, "success");
  }, []);

  // Fix setDraftQuantity to update state
  const setDraftQuantity = useCallback((productId, quantity) => {
    // Prevent editing if default is 1 and input is 1 again
    setDraftQuantities(prev => {
      // If current is 1 and new is 1, do not update
      if ((prev[productId] === 1 || prev[productId] === undefined) && quantity === 1) {
        return prev;
      }
      // Only allow numeric input, replace value (not concatenate)
      return { ...prev, [productId]: Math.max(1, Number(quantity) || 1) };
    });
  }, []);

  // Fix updateQuantity to update cart state
  const updateQuantity = useCallback((productId, quantity) => {
    setCart(prev => prev.map(item => item.id === productId ? { ...item, quantity: Math.max(1, quantity) } : item));
  }, []);

  // Fix removeFromCart to update cart state
  const removeFromCart = useCallback((productId) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  }, []);

  const toggleWishlist = useCallback((product) => {
    if (!product?.id) return;
    setWishlist(prev => (
      prev.includes(product.id)
        ? prev.filter(id => id !== product.id)
        : [...prev, product.id]
    ));
  }, []);

  const showToast = (message, type = "success") => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: "", type: "success" }), 3000);
  };

  // Debounced search
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearchQuery(searchQuery), 300);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Memoized filtered products
  const filteredProducts = useMemo(() => {
    let filtered = products;
    if (selectedCompany !== "All") {
      filtered = filtered.filter(product => product.company === selectedCompany);
    }
    if (selectedCategory !== "All") {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }
    return filtered.filter(product => {
      const haystack = `${product.name} ${product.company || ""} ${product.category || ""} ${product.modelNo || ""}`.toLowerCase();
      return haystack.includes(debouncedSearchQuery.trim().toLowerCase());
    });
  }, [products, selectedCompany, selectedCategory, debouncedSearchQuery]);

  useEffect(() => {
    setVisibleProductCount(productsPageSize);
  }, [selectedCompany, selectedCategory, debouncedSearchQuery, productsPageSize]);

  const visibleProducts = useMemo(
    () => filteredProducts.slice(0, visibleProductCount),
    [filteredProducts, visibleProductCount]
  );

  const hasMoreProducts = visibleProductCount < filteredProducts.length;

  const handleLoadMoreProducts = useCallback(() => {
    setVisibleProductCount((prev) => prev + productsPageSize);
  }, [productsPageSize]);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cart.reduce((sum, item) => sum + (item.price || 0) * item.quantity, 0);
  const cartProductIds = new Set(cart.map(item => item.id));

  // Get unique company and category options
  const companyOptions = getUniqueOptions(products, "company");
  const categoryOptions = getUniqueOptions(products, "category");

  const navigateToProducts = useCallback(() => {
    setView('shop');
    setTimeout(() => {
      const el = document.getElementById('products');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }, []);

  return (
    <div className="app">
      <a href="#main-content" className="skip-link">Skip to main content</a>

      {/* Toast Notification */}
      {toast.show && (
        <div className={`toast ${toast.type}`}>
          {toast.type === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
          <span>{toast.message}</span>
        </div>
      )}

      {/* Header */}
      <Header 
        cartCount={cartCount}
        cartTotal={cartTotal}
        onOpenCart={() => setShowCartDrawer(true)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onNavHome={() => {
          setView('shop');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onNavProducts={() => {
          navigateToProducts();
        }}
      />

      {/* Hero Section */}
      {!loading && !error && view === "shop" && (
        <HeroSection stats={stats} brands={MAJOR_APPLIANCE_BRANDS} />
      )}

      {/* Company/Category Select Tabs */}
      {!loading && !error && view === "shop" && (
        <div className="select-tabs-bar">
          <div className="select-tab-group">
            <label htmlFor="company-select" className="select-tab-label">Select Company:</label>
            <select
              id="company-select"
              className="select-tab-dropdown"
              value={selectedCompany}
              onChange={e => setSelectedCompany(e.target.value)}
            >
              {companyOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
          <div className="select-tab-group">
            <label htmlFor="category-select" className="select-tab-label">Select Category:</label>
            <select
              id="category-select"
              className="select-tab-dropdown"
              value={selectedCategory}
              onChange={e => setSelectedCategory(e.target.value)}
            >
              {categoryOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
          <div className="select-tab-group">
            <button className="clear-filters-btn" onClick={handleClearFilters} style={{ marginLeft: 16 }}>
              Clear All Filters
            </button>
          </div>
        </div>
      )}

      <main id="main-content" className="main-content">
        {loading ? (
          <LoadingSkeleton />
        ) : error ? (
          <ErrorDisplay error={error} onRetry={loadProducts} />
        ) : view === "shop" ? (
          <div>
            <div id="products"></div>
            <ProductCheckoutBar
              cartCount={cartCount}
              onCheckout={() => setView("checkout")}
            />
            {filteredProducts.length === 0 ? (
              <div className="error-display" role="status" aria-live="polite">
                <Info size={48} color={theme.primary} />
                <h3>No products found</h3>
                <p>Try changing your search or filters.</p>
                <button className="secondary-btn" onClick={handleClearFilters}>
                  Clear Filters
                </button>
              </div>
            ) : (
              <>
                <ProductGrid
                  products={visibleProducts}
                  viewMode={viewMode}
                  addToCart={addToCart}
                  cartProductIds={cartProductIds}
                  draftQuantities={draftQuantities}
                  setDraftQuantity={setDraftQuantity}
                  onProductClick={(product) => setSelectedProduct(product)}
                  onWishlist={toggleWishlist}
                  isWishlisted={(id) => wishlist.includes(id)}
                />
                {hasMoreProducts && (
                  <div className="load-more-panel" role="status" aria-live="polite">
                    <p>
                      Showing {visibleProducts.length} of {filteredProducts.length} products
                    </p>
                    <button className="secondary-btn" onClick={handleLoadMoreProducts}>
                      Load More Products
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        ) : (
          <CheckoutForm
            cart={cart}
            updateQuantity={updateQuantity}
            removeFromCart={removeFromCart}
            clearCart={() => setShowClearConfirm(true)}
            onBack={() => setView("shop")}
          />
        )}
      </main>

      {/* Cart Drawer */}
      <CartDrawer
        open={showCartDrawer}
        cart={cart}
        cartTotal={cartTotal}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
        clearCart={() => setShowClearConfirm(true)}
        onClose={() => setShowCartDrawer(false)}
        onShopNow={() => {
          setShowCartDrawer(false);
          navigateToProducts();
        }}
        onProceed={() => {
          setShowCartDrawer(false);
          setView("checkout");
        }}
      />

      {/* Product Quick View Modal */}

      {selectedProduct && (
        <ProductQuickView
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          addToCart={addToCart}
          isInCart={cartProductIds.has(selectedProduct.id)}
        />
      )}

      {/* Confirmation Dialog */}

      {showClearConfirm && (
        <ConfirmDialog
          title="Clear Cart"
          message="Are you sure you want to remove all items from your cart?"
          onCancel={() => setShowClearConfirm(false)}
          onConfirm={() => {
            setCart([]);
            setShowClearConfirm(false);
            showToast("Cart cleared", "info");
          }}
        />
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}

// Enhanced Header Component
const Header = ({ cartCount, cartTotal, onOpenCart, searchQuery, setSearchQuery, onNavHome, onNavProducts }) => (
  <header className="header">
    <div className="header-top">
      <div className="header-brand">
        <a href="https://ambey.jwithkp.com" target="_blank" rel="noopener noreferrer">
          <img 
            src="https://github.com/kp9696/zhivo-store/raw/main/Untitled%20(1).png" 
            alt="Jai Ambey Refrigeration" 
            className="header-logo"
            style={{ cursor: 'pointer' }}
          />
        </a>
        <div className="header-title">
          <h1>Jai Ambey Refrigeration</h1>
          <p className="header-tagline">Premium Refrigeration & HVAC Spare Parts</p>
        </div>
      </div>
      
      <div className="header-actions">
        <div className="search-container">
          <Search className="search-icon" size={20} />
          <input
            type="search"
            placeholder="Search by product name, company, model..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
            aria-label="Search products"
            autoComplete="off"
          />
        </div>
        
        <button 
          className="cart-button"
          onClick={onOpenCart}
          aria-label="View cart"
        >
          <ShoppingCart size={24} />
          {cartCount > 0 && (
            <>
              <span className="cart-badge">{cartCount}</span>
              <span className="cart-total">₹{cartTotal.toFixed(2)}</span>
            </>
          )}
        </button>
      </div>
    </div>

    <nav className="header-nav">
      <div className="nav-left">
        <a href="/" className="nav-link active" onClick={(e) => { e.preventDefault(); onNavHome(); }}>Home</a>
        <a href="#products" className="nav-link" onClick={e => { e.preventDefault(); onNavProducts(); }}>Products</a>
        {/* Mobile filters button removed for mobile-friendly experience */}
      </div>
      {/* Removed grid/list view toggle buttons as requested */}
    </nav>
  </header>
);

const ProductCheckoutBar = ({ cartCount, onCheckout }) => {
  if (cartCount === 0) return null;

  return (
    <div className="product-checkout-bar" role="region" aria-label="Checkout section">
      <div className="product-checkout-info">
        <ShoppingCart size={18} />
        <span>{cartCount} item{cartCount > 1 ? 's' : ''} in cart</span>
      </div>
      <button className="product-checkout-btn" onClick={onCheckout}>
        Proceed to Checkout
      </button>
    </div>
  );
};

// Hero Section
const HeroSection = ({ stats, brands }) => {
  const [failedBrandLogos, setFailedBrandLogos] = useState({});
  const marqueeBrands = useMemo(() => [...brands, ...brands], [brands]);

  const handleBrandLogoError = useCallback((brandName) => {
    setFailedBrandLogos((prev) => {
      if (prev[brandName]) return prev;
      return { ...prev, [brandName]: true };
    });
  }, []);

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-eyebrow" aria-label="Business highlight">
          <span>Trusted B2B Spare Parts Supplier</span>
        </div>
        <h2>Spare Parts for Refrigerator, AC & Washing Machine</h2>
        <p>Genuine parts with GST billing and same-day dispatch for dealers, technicians, and service centers.</p>

        <div className="hero-meta" aria-label="Service highlights">
          <span>GST Billing</span>
          <span>Same-day Dispatch</span>
          <span>Pan-India Support</span>
        </div>

        <div className="hero-category-chips" aria-label="Top categories">
          <span className="hero-category-chip">Refrigerator</span>
          <span className="hero-category-chip">Air Conditioner</span>
          <span className="hero-category-chip">Washing Machine</span>
        </div>
      
        <div className="hero-stats">
          <div className="stat-item">
            <Package size={24} />
            <div>
              <span className="stat-value">{stats.totalProducts}+</span>
              <span className="stat-label">Products</span>
            </div>
          </div>
          <div className="stat-item">
            <Star size={24} />
            <div>
              <span className="stat-value">{stats.totalCompanies}+</span>
              <span className="stat-label">Trusted Brands</span>
            </div>
          </div>
          <div className="stat-item">
            <Truck size={24} />
            <div>
              <span className="stat-value">Same Day</span>
              <span className="stat-label">Dispatch</span>
            </div>
          </div>
        </div>

        <div className="hero-trust-strip">
          <CheckCircle size={16} />
          <span>Serving dealers and technicians across India</span>
        </div>

        <div className="hero-features">
          <span className="feature-badge">
            <Check size={16} />
            Genuine Parts
          </span>
          <span className="feature-badge">
            <Shield size={16} />
            6 Month Warranty
          </span>
          <span className="feature-badge">
            <Clock size={16} />
            Quick Support
          </span>
        </div>

        <div className="brand-logo-marquee" aria-label="Major refrigerator, AC and washing machine brands">
          <div className="brand-logo-track">
            {marqueeBrands.map((brand, index) => (
              <span key={`${brand.name}-${index}`} className="brand-logo-pill">
                {!failedBrandLogos[brand.name] && (
                  <img
                    src={brand.logoUrl}
                    alt={`${brand.name} logo`}
                    className="brand-logo-image"
                    loading={index < 8 ? "eager" : "lazy"}
                    decoding="async"
                    fetchPriority={index < 4 ? "high" : "low"}
                    onError={() => handleBrandLogoError(brand.name)}
                  />
                )}
                <span className={`brand-logo-text ${failedBrandLogos[brand.name] ? "visible" : ""}`}>
                  {brand.name}
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Enhanced Product Card
const ProductCard = ({ product, viewMode, addToCart, isInCart, draftQuantity, setDraftQuantity, onQuickView, onWishlist, isWishlisted }) => {
  const imageCandidates = useMemo(() => getImageCandidates(product.image), [product.image]);
  const [imageCandidateIndex, setImageCandidateIndex] = useState(0);
  const [showActions, setShowActions] = useState(false);
  useEffect(() => {
    setImageCandidateIndex(0);
  }, [imageCandidates]);


  // Ref for quantity input
  const qtyInputRef = React.useRef(null);

  // Handler to focus/select input when value is 1 and user taps
  const handleQtyInputFocus = () => {
    if ((draftQuantity || 1) === 1 && qtyInputRef.current) {
      qtyInputRef.current.removeAttribute('readOnly');
      qtyInputRef.current.focus();
      qtyInputRef.current.select();
    }
  };

  return (
    <div 
      className={`product-card ${viewMode} ${showActions ? 'hover' : ''}`}
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
    >
      <div className="product-image-container">
        <img
          src={imageCandidates[Math.min(imageCandidateIndex, imageCandidates.length - 1)]}
          alt={product.name}
          className="product-image"
          onError={() => setImageCandidateIndex((prev) => Math.min(prev + 1, imageCandidates.length - 1))}
          loading="lazy"
          decoding="async"
          fetchPriority="low"
          sizes="(max-width: 768px) 100vw, 300px"
        />
        
        <div className={`product-actions-overlay ${showActions ? 'visible' : ''}`}>
          <button 
            className="action-btn quick-view"
            onClick={() => onQuickView(product)}
            aria-label="Quick view"
          >
            <Eye size={18} />
          </button>
          <button 
            className={`action-btn wishlist ${isWishlisted ? 'active' : ''}`}
            onClick={() => onWishlist(product)}
            aria-label="Add to wishlist"
          >
            <Heart size={18} fill={isWishlisted ? 'currentColor' : 'none'} />
          </button>
          <button className="action-btn share" aria-label="Share">
            <Share2 size={18} />
          </button>
        </div>

        {product.stock && product.stock < 10 && (
          <span className="stock-badge low-stock">Low Stock</span>
        )}
      </div>

      <div className="product-info">
        <div className="product-tags">
          <span className="category-tag">{product.category || "Electrical"}</span>
          <span className="company-tag">{product.company || "Universal"}</span>
        </div>
        
        <h3 className="product-title">{product.name}</h3>
        
        <div className="product-specs">
          <p className="spec-item">
            <span className="spec-label">Model:</span>
            <span className="spec-value">{product.modelNo || "-"}</span>
          </p>
          <p className="spec-item">
            <span className="spec-label">Brand Code:</span>
            <span className="spec-value">{product.brandCode || "-"}</span>
          </p>
        </div>

        <div className="product-description">
          {product.description || "Premium quality spare part"}
        </div>

        <div className="product-rating">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              fill={i < Math.floor(product.rating || 4.5) ? '#f59e0b' : 'none'}
              color={i < Math.floor(product.rating || 4.5) ? '#f59e0b' : '#d1d5db'}
            />
          ))}
          <span className="rating-text">(4.5)</span>
        </div>

        <div className="product-footer">
            {/* Price section removed for B2B WhatsApp order */}

          <div className="product-actions">
            <div className="quantity-control">
              <button 
                className="qty-btn"
                onClick={() => setDraftQuantity(product.id, Math.max(1, (draftQuantity || 1) - 1))}
                aria-label="Decrease quantity"
              >
                <Minus size={14} />
              </button>
              <input
                ref={qtyInputRef}
                type="number"
                min="1"
                value={draftQuantity || 1}
                onFocus={handleQtyInputFocus}
                onClick={handleQtyInputFocus}
                onChange={e => {
                  // Allow manual entry when focused
                  setDraftQuantity(product.id, e.target.value);
                }}
                className="qty-input"
                aria-label="Quantity"
                inputMode="numeric"
                pattern="[0-9]*"
                readOnly={false}
              />
              <button 
                className="qty-btn"
                onClick={() => setDraftQuantity(product.id, (draftQuantity || 1) + 1)}
                aria-label="Increase quantity"
              >
                <Plus size={14} />
              </button>
            </div>
            
            <button
              className={`add-to-cart-btn ${isInCart ? 'in-cart' : ''}`}
              onClick={() => addToCart(product, draftQuantity || 1)}
              disabled={isInCart}
            >
              {isInCart ? (
                <>
                  <Check size={16} />
                  Added
                </>
              ) : (
                <>
                  <ShoppingCart size={16} />
                  Add
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Enhanced Cart Drawer
const CartDrawer = ({ open, cart, cartTotal, updateQuantity, removeFromCart, clearCart, onClose, onProceed, onShopNow }) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (open) {
      window.addEventListener('keydown', handleEsc);
    }

    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="drawer-overlay" onClick={onClose}>
      <div className="cart-drawer" onClick={(e) => e.stopPropagation()}>
        <div className="drawer-header">
          <h2>
            <ShoppingCart size={20} />
            Your Cart
            <span className="cart-count">{cart.length}</span>
          </h2>
          <button className="close-btn" onClick={onClose} aria-label="Close">
            <X size={20} />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="empty-cart">
            <ShoppingCart size={48} className="empty-icon" />
            <p>Your cart is empty</p>
            <p className="empty-sub">Add items to get a quote</p>
            <button className="shop-now-btn" onClick={onShopNow || onClose}>
              Shop Now
            </button>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <img 
                    src={resolveImageUrl(item.image)}
                    alt={item.name}
                    className="cart-item-image"
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      e.currentTarget.src = FALLBACK_PRODUCT_IMAGE;
                    }}
                  />
                  <div className="cart-item-details">
                    <h4>{item.name}</h4>
                    <p className="cart-item-meta">
                      {item.category} | {item.company}
                    </p>
                    <div className="cart-item-actions">
                      <div className="cart-qty-control">
                        <button 
                          className="qty-btn small"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                        >
                          <Minus size={12} />
                        </button>
                        <span className="qty-value">{item.quantity}</span>
                        <button 
                          className="qty-btn small"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <button 
                        className="remove-item"
                        onClick={() => removeFromCart(item.id)}
                        aria-label="Remove item"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-footer">
              <div className="cart-actions">
                  <button className="secondary-btn" onClick={clearCart}>
                    Clear Cart
                  </button>
                  <button
                    className="primary-btn"
                    onClick={onProceed}
                  >
                    Send Order on WhatsApp
                    <ChevronRight size={16} />
                  </button>
              </div>
              <p className="cart-note">
                <Info size={14} />
                Your order will be sent to us on WhatsApp for a quote.
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

// Loading Skeleton
const LoadingSkeleton = () => (
  <div className="loading-skeleton">
    <div className="skeleton-header"></div>
    <div className="skeleton-grid">
      {[...Array(8)].map((_, i) => (
        <div key={i} className="skeleton-card">
          <div className="skeleton-image"></div>
          <div className="skeleton-text"></div>
          <div className="skeleton-text short"></div>
        </div>
      ))}
    </div>
  </div>
);

// Error Display
const ErrorDisplay = ({ error, onRetry }) => (
  <div className="error-display">
    <AlertCircle size={48} color={theme.danger} />
    <h3>Oops! Something went wrong</h3>
    <p>{error}</p>
    <button className="primary-btn" onClick={onRetry}>
      Try Again
    </button>
  </div>
);


// Helper function
const getUniqueOptions = (products, key) => [
  "All",
  ...Array.from(new Set(products.map(product => product[key]).filter(Boolean))).sort()
];

// --- Fix missing components and functions ---

// MobileFiltersDrawer removed for mobile-friendly experience

// ProductGrid stub (renders ProductCard for each product)
function ProductGrid({ products, viewMode, addToCart, cartProductIds, draftQuantities, setDraftQuantity, onProductClick, onWishlist, isWishlisted }) {
  return (
    <div className={`product-grid ${viewMode}`}>
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          viewMode={viewMode}
          addToCart={addToCart}
          isInCart={cartProductIds.has(product.id)}
          draftQuantity={draftQuantities[product.id] || 1}
          setDraftQuantity={setDraftQuantity}
          onQuickView={onProductClick}
          onWishlist={() => onWishlist(product)}
          isWishlisted={isWishlisted(product.id)}
        />
      ))}
    </div>
  );
}

// Enhanced CheckoutForm with required fields and WhatsApp order
function CheckoutForm({ cart, updateQuantity, removeFromCart, clearCart, onBack }) {
  const GSTIN_REGEX = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z][1-9A-Z]Z[0-9A-Z]$/;
  const [form, setForm] = React.useState({
    name: '',
    company: '',
    address: '',
    mobile: '',
    email: '',
    state: '',
    pin: '',
    gst: false,
    gstNumber: ''
  });
  const [error, setError] = React.useState('');
  const [sending, setSending] = React.useState(false);
  const [orderId, setOrderId] = React.useState(null);
  const [success, setSuccess] = React.useState(false);

  // Generate a unique order ID (simple: date + random)
  const generateOrderId = () => {
    const now = new Date();
    const ymd = now.toISOString().slice(0,10).replace(/-/g, '');
    const hms = now.toTimeString().slice(0,8).replace(/:/g, '');
    const rand = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    return `ORD${ymd}${hms}${rand}`;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(f => ({ ...f, [name]: type === 'checkbox' ? checked : value }));
  };

  const getTrimmedForm = () => ({
    ...form,
    name: form.name.trim(),
    company: form.company.trim(),
    address: form.address.trim(),
    mobile: form.mobile.trim(),
    email: form.email.trim(),
    state: form.state.trim(),
    pin: form.pin.trim(),
    gstNumber: form.gstNumber.trim().toUpperCase()
  });

  const validate = (data) => {
    if (!data.name) return 'Name is required';
    if (!data.company) return 'Company name is required';
    if (!data.address) return 'Shipping address is required';
    if (!data.mobile || !/^\d{10}$/.test(data.mobile)) return 'Valid 10-digit mobile number required';
    if (data.email && !/^\S+@\S+\.\S+$/.test(data.email)) return 'Valid email is required';
    if (!data.state) return 'State is required';
    if (!data.pin || !/^\d{6}$/.test(data.pin)) return 'Valid 6-digit Pin code required';
    if (data.gst && !data.gstNumber) return 'GST Number is required';
    if (data.gst && data.gstNumber && !GSTIN_REGEX.test(data.gstNumber)) return 'Valid GST Number is required';
    return '';
  };

  const formatOrderDateTime = () => {
    const now = new Date();
    const date = now.toLocaleDateString('en-GB');
    const time = now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true });
    return `${date}, ${time}`;
  };

  const handleSendOrder = () => {
    const trimmedForm = getTrimmedForm();
    const err = validate(trimmedForm);
    if (err) {
      setError(err);
      return;
    }
    setError('');
    setForm(prev => ({
      ...prev,
      name: trimmedForm.name,
      company: trimmedForm.company,
      address: trimmedForm.address,
      mobile: trimmedForm.mobile,
      email: trimmedForm.email,
      state: trimmedForm.state,
      pin: trimmedForm.pin,
      gstNumber: trimmedForm.gstNumber
    }));
    setSending(true);
    // Generate order ID
    const newOrderId = generateOrderId();
    const orderDateTime = formatOrderDateTime();
    setOrderId(newOrderId);

    // Compose WhatsApp message
    const orderLines = cart
      .map((item, index) => {
        const unitPrice = Number(item.price || 0);
        const amount = unitPrice * item.quantity;
        return `${index + 1}. *${item.name}*\n   📦 Qty: ${item.quantity}${unitPrice > 0 ? ` × ₹${unitPrice}` : ""}\n   💰 Amount: ${unitPrice > 0 ? `₹${amount.toFixed(2)}` : "As per quotation"}\n   🏢 Company: ${item.company || '-'}`;
      })
      .join('\n\n');

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = cart.reduce((sum, item) => sum + (Number(item.price || 0) * item.quantity), 0);
    // Structured WhatsApp message
    let msg = `*JAI AMBEY REFRIGERATION*\n*ORDER CONFIRMATION*\n`;
    msg += `\n🆔 *ORDER ID:* ${newOrderId}\n`;
    msg += `📅 *Date & Time:* ${orderDateTime}\n`;
    msg += `\n━━━━━━━━━━━━━━━━━━━\n`;
    msg += `👤 *CUSTOMER DETAILS*\n`;
    msg += `━━━━━━━━━━━━━━━━━━━\n`;
    msg += `📋 *Name:* ${trimmedForm.name}\n`;
    msg += `🏢 *Company:* ${trimmedForm.company || 'N/A'}\n`;
    msg += `📍 *Address:* ${trimmedForm.address}\n`;
    msg += `📱 *Mobile:* ${trimmedForm.mobile}\n`;
    msg += `✉️ *Email:* ${trimmedForm.email || 'N/A'}\n`;
    msg += `🗺️ *State:* ${trimmedForm.state}\n`;
    msg += `📮 *Pin:* ${trimmedForm.pin}\n`;
    msg += `📋 *GST Required:* ${trimmedForm.gst ? '✅ Yes' : '❌ No'}\n`;
    if (trimmedForm.gst && trimmedForm.gstNumber) {
      msg += `🏷️ *GST Number:* ${trimmedForm.gstNumber}\n`;
    }
    msg += `\n━━━━━━━━━━━━━━━━━━━\n`;
    msg += `🛒 *ORDER SUMMARY*\n`;
    msg += `━━━━━━━━━━━━━━━━━━━\n\n`;
    msg += orderLines + '\n';
    msg += `\n━━━━━━━━━━━━━━━━━━━\n`;
    msg += `📊 *ORDER TOTAL*\n`;
    msg += `━━━━━━━━━━━━━━━━━━━\n`;
    msg += `📦 Total Items: ${totalItems}\n`;
    msg += `💰 Subtotal: ${subtotal > 0 ? `₹${subtotal.toFixed(2)}` : 'As per quotation'}\n`;
    msg += `🚚 Shipping: FREE\n`;
    msg += `━━━━━━━━━━━━━━━━━━━\n`;
    msg += `💵 *GRAND TOTAL: ${subtotal > 0 ? `₹${subtotal.toFixed(2)}` : 'As per quotation'}*\n`;
    msg += `━━━━━━━━━━━━━━━━━━━\n`;
    msg += `\n📍 *Delivery Address:*\n${trimmedForm.address}\n`;
    msg += `\n📱 *Contact:* ${trimmedForm.mobile}\n`;
    msg += `\n✨ Thank you for your order!\n`;
    msg += `🔔 Save this order ID for future reference: ${newOrderId}\n`;
    msg = msg.trim();
    const waUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(msg)}`;
    window.open(waUrl, '_blank');
    setSending(false);
    setSuccess(true);
  };

  if (success && orderId) {
    return (
      <div className="checkout-success">
        <h2>Order Submitted!</h2>
        <p style={{ fontSize: 18, margin: '16px 0' }}>Thank you for your order.</p>
        <div style={{ fontWeight: 600, fontSize: 20, color: '#2563eb', marginBottom: 16 }}>
          Your Order ID: <span className="order-id-badge">{orderId}</span>
        </div>
        <p style={{ color: '#64748b', marginBottom: 24 }}>Please keep this Order ID for your reference. Our team will contact you soon.</p>
        <button className="primary-btn" onClick={onBack}>Back to Shop</button>
      </div>
    );
  }

  return (
    <div className="checkout-form">
      <h2>Checkout</h2>
      <button className="secondary-btn" onClick={onBack} style={{ marginBottom: 16 }}>Back to Shop</button>
      <ul className="checkout-cart-list">
        {cart.map(item => (
          <li key={item.id} className="checkout-cart-item">
            <span>{item.name} x{item.quantity}</span>
            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
            <button onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>-</button>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <button className="secondary-btn" onClick={clearCart} style={{ marginBottom: 24 }}>Clear Cart</button>
      <form className="checkout-fields" onSubmit={e => { e.preventDefault(); handleSendOrder(); }}>
        <div className="form-group">
          <label>Name<span style={{ color: 'red' }}>*</span></label>
          <input name="name" value={form.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Company Name<span style={{ color: 'red' }}>*</span></label>
          <input name="company" value={form.company} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Shipping Address<span style={{ color: 'red' }}>*</span></label>
          <textarea name="address" value={form.address} onChange={handleChange} required rows={2} />
        </div>
        <div className="form-group">
          <label>Mobile Number<span style={{ color: 'red' }}>*</span></label>
          <input name="mobile" value={form.mobile} onChange={handleChange} required maxLength={10} pattern="\d{10}" placeholder="10-digit mobile number" />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Enter email (optional)" />
        </div>
        <div className="form-group">
          <label>State<span style={{ color: 'red' }}>*</span></label>
          <input name="state" value={form.state} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Pin Code<span style={{ color: 'red' }}>*</span></label>
          <input name="pin" value={form.pin} onChange={handleChange} required maxLength={6} pattern="\d{6}" />
        </div>
        <div className="form-group gst-checkbox-group">
          <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <input type="checkbox" name="gst" checked={form.gst} onChange={handleChange} /> GST Bill Required
          </label>
        </div>
        {form.gst && (
          <div className="form-group gst-number-group">
            <label>GST Number<span style={{ color: 'red' }}>*</span></label>
            <input name="gstNumber" value={form.gstNumber} onChange={handleChange} required={form.gst} placeholder="Enter GST Number" />
          </div>
        )}
        {error && <div className="form-error" style={{ color: 'red', marginBottom: 8 }}>{error}</div>}
        <button className="primary-btn" type="submit" disabled={sending} style={{ marginTop: 12 }}>
          {sending ? 'Sending...' : 'Send Order on WhatsApp'}
        </button>
      </form>
    </div>
  );
}

// ProductQuickView stub
function ProductQuickView({ product, onClose, addToCart, isInCart }) {
  if (!product) return null;
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Product quick view"
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(15, 23, 42, 0.55)',
        zIndex: 10500,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16
      }}
    >
      <div
        style={{
          background: theme.surface,
          width: '100%',
          maxWidth: 440,
          borderRadius: 14,
          border: `1px solid ${theme.border}`,
          boxShadow: `0 20px 35px ${theme.shadow}`,
          padding: 24
        }}
      >
        <div className="drawer-header" style={{ padding: 0, borderBottom: 'none', marginBottom: 14 }}>
          <h2>{product.name}</h2>
          <button className="close-btn" onClick={onClose} aria-label="Close quick view">
            <X size={18} />
          </button>
        </div>
        <p className="cart-item-meta" style={{ margin: '0 0 18px' }}>
          {product.company || 'Universal'} • {product.category || 'Electrical'}
        </p>
        <div className="cart-actions" style={{ marginBottom: 0 }}>
          <button className="secondary-btn" onClick={onClose}>Close</button>
          <button className="primary-btn" onClick={() => addToCart(product, 1)} disabled={isInCart}>
            {isInCart ? 'Added' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
}

// ConfirmDialog stub
function ConfirmDialog({ title, message, onCancel, onConfirm }) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(15, 23, 42, 0.55)',
        zIndex: 11000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16
      }}
    >
      <div
        style={{
          background: theme.surface,
          width: '100%',
          maxWidth: 420,
          borderRadius: 14,
          border: `1px solid ${theme.border}`,
          boxShadow: `0 20px 35px ${theme.shadow}`,
          padding: 24
        }}
      >
        <div className="drawer-header" style={{ padding: 0, borderBottom: 'none', marginBottom: 10 }}>
          <h2>{title}</h2>
        </div>
        <p className="cart-item-meta" style={{ margin: '0 0 18px' }}>{message}</p>
        <div className="cart-actions" style={{ marginBottom: 0 }}>
          <button className="secondary-btn" onClick={onCancel}>Cancel</button>
          <button className="primary-btn" onClick={onConfirm}>Confirm</button>
        </div>
      </div>
    </div>
  );
}

// Footer stub
function Footer() {
  return (
    <footer className="footer">
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '40px', padding: 16 }}>
        <div>
          <h4>Jai Ambey Refrigeration</h4>
          <p><strong>Company Name:</strong> Jai Ambey Refrigeration</p>
          <p><strong>GST:</strong> 06AADFJ3283D1ZN</p>
          <p><strong>Contact:</strong> <a href="tel:+91-9416203393">094162 03393</a></p>
          <p><strong>Address:</strong> Near Ladla Bakery, 490, Link Road, Old Char Chaman, Karnal, Haryana 132001</p>
        </div>
        <div>
          <h4>Customer Support</h4>
          <p>📞 <a href="tel:+91-9416203393">94162 03393</a></p>
          <p>✉️ <a href="mailto:prateekbohra29@gmail.com">prateekbohra29@gmail.com</a></p>
          <p>📍 Near Ladla Bakery, 490, Link Road, Old Char Chaman, Karnal, Haryana 132001</p>
        </div>
      </div>
      <div style={{ textAlign: 'center', padding: 16 }}>
        <p>© {new Date().getFullYear()} Jai Ambey Refrigeration. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default App;
