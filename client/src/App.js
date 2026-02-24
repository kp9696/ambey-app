import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const FALLBACK_PRODUCT_IMAGE = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='320' height='180' viewBox='0 0 320 180'%3E%3Crect width='320' height='180' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial%2Csans-serif' font-size='16' fill='%236b7280'%3EProduct Image%3C/text%3E%3C/svg%3E";
const WHATSAPP_PHONE = "919873068990";
const API_BASE_URL = process.env.REACT_APP_API_URL || window.location.origin;

function getRatingLabel(productId) {
  const score = (4 + ((productId * 7) % 10) / 10).toFixed(1);
  const stars = Number(score) >= 4.5 ? "★★★★★" : "★★★★☆";
  return `${stars} ${score}`;
}

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [view, setView] = useState("shop");
  const [selectedCompany, setSelectedCompany] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState("");
  const [draftQuantities, setDraftQuantities] = useState({});
  const [toastMessage, setToastMessage] = useState("");
  const [showClearConfirm, setShowClearConfirm] = useState(false);
  const [showCartDrawer, setShowCartDrawer] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios.get(`${API_BASE_URL}/api/products`)
      .then(res => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError("Failed to load products. Please refresh the page.");
        setLoading(false);
      });
  }, []);

  const addToCart = (product, quantity = 1) => {
    const safeQuantity = Number.isNaN(quantity) ? 1 : Math.max(1, quantity);
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + safeQuantity } : item);
      }
      return [...prev, { ...product, quantity: safeQuantity }];
    });
    setDraftQuantities(prev => ({ ...prev, [product.id]: 1 }));
    setToastMessage(`${product.name} added to quote request`);
  };

  useEffect(() => {
    if (!toastMessage) {
      return undefined;
    }
    const timer = setTimeout(() => setToastMessage(""), 1800);
    return () => clearTimeout(timer);
  }, [toastMessage]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  const updateQuantity = (productId, quantity) => {
    const safeQuantity = Number.isNaN(quantity) ? 1 : Math.max(1, quantity);
    setCart(prev => prev.map(item => item.id === productId ? { ...item, quantity: safeQuantity } : item));
  };

  const removeFromCart = (productId) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartProductIds = new Set(cart.map(item => item.id));
  const companyOptions = [
    "All",
    ...Array.from(new Set(products.map(product => product.company).filter(Boolean))).sort()
  ];
  const filteredByCompany = selectedCompany === "All"
    ? products
    : products.filter(product => product.company === selectedCompany);
  const filteredProducts = filteredByCompany.filter(product => {
    const haystack = `${product.name} ${product.company || ""} ${product.category || ""}`.toLowerCase();
    return haystack.includes(debouncedSearchQuery.trim().toLowerCase());
  });

  const setDraftQuantity = (productId, nextValue) => {
    const safeQuantity = Number.isNaN(nextValue) ? 1 : Math.max(1, nextValue);
    setDraftQuantities(prev => ({ ...prev, [productId]: safeQuantity }));
  };

  return (
    <div className="app-shell">
      <Header
        onOpenCart={() => setShowCartDrawer(true)}
        cartCount={cartCount}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <div className="main-container">
        {loading ? (
          <div className="loading-container">
            <div className="spinner"></div>
            <p>Loading products...</p>
          </div>
        ) : error ? (
          <div className="error-container">
            <p className="error-message">⚠️ {error}</p>
            <button className="primary-btn" onClick={() => window.location.reload()}>Retry</button>
          </div>
        ) : view === "shop" ? (
          <>
            <ProductGrid
              products={filteredProducts}
              addToCart={addToCart}
              cartProductIds={cartProductIds}
              draftQuantities={draftQuantities}
              setDraftQuantity={setDraftQuantity}
              selectedCompany={selectedCompany}
              setSelectedCompany={setSelectedCompany}
              companyOptions={companyOptions}
              onProductClick={(product) => setSelectedProduct(product)}
            />
          </>
        ) : (
          <CheckoutForm
            cart={cart}
            updateQuantity={updateQuantity}
            removeFromCart={removeFromCart}
            clearCart={() => setShowClearConfirm(true)}
            onBack={() => setView("shop")}
          />
        )}
      </div>

      <WhatsAppFloat />
      <StickyCartBar cartCount={cartCount} onCheckout={() => setShowCartDrawer(true)} />
      {toastMessage && <div className="cart-toast">{toastMessage}</div>}
      {selectedProduct && (
        <ProductQuickView
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          addToCart={addToCart}
          isInCart={cartProductIds.has(selectedProduct.id)}
        />
      )}
      <CartDrawer
        open={showCartDrawer}
        cart={cart}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
        clearCart={() => setShowClearConfirm(true)}
        onClose={() => setShowCartDrawer(false)}
        onProceed={() => {
          setShowCartDrawer(false);
          setView("checkout");
        }}
      />
      {showClearConfirm && (
        <ConfirmDialog
          title="Clear quote request?"
          message="Are you sure you want to remove all items from your quote request?"
          onCancel={() => setShowClearConfirm(false)}
          onConfirm={() => {
            setCart([]);
            setShowClearConfirm(false);
            setToastMessage("Quote request cleared");
          }}
        />
      )}
      <Footer />
    </div>
  );
}

function ConfirmDialog({ title, message, onCancel, onConfirm }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onCancel();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onCancel]);

  return (
    <div className="confirm-overlay" role="dialog" aria-modal="true" aria-label={title} onClick={onCancel}>
      <div className="confirm-box" onClick={e => e.stopPropagation()}>
        <button className="confirm-close" onClick={onCancel} aria-label="Close dialog">×</button>
        <h3>{title}</h3>
        <p>{message}</p>
        <div className="confirm-actions">
          <button className="secondary-btn" onClick={onCancel}>Cancel</button>
          <button className="remove-btn" onClick={onConfirm}>Clear Quote</button>
        </div>
      </div>
    </div>
  );
}

function ProductQuickView({ product, onClose, addToCart, isInCart }) {
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [onClose]);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content product-quick-view" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">×</button>
        <div className="modal-grid">
          <div className="modal-image-section">
            <img
              src={product.image || FALLBACK_PRODUCT_IMAGE}
              alt={product.name}
              onError={e => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = FALLBACK_PRODUCT_IMAGE;
              }}
            />
          </div>
          <div className="modal-info-section">
            <span className={`product-category category-${(product.category || "Electrical").toLowerCase()}`}>
              {product.category || "Electrical"}
            </span>
            <h2>{product.name}</h2>
            <p className="product-company-large">
              <strong>Brand:</strong> {product.company || "Universal"}
            </p>
            <span className="verified-badge">✓ Verified Supplier</span>
            <p className="product-rating-large">{getRatingLabel(product.id)}</p>
            
            <div className="product-features">
              <h4>Features:</h4>
              <ul>
                <li>✅ Genuine spare part</li>
                <li>🚚 Same-day dispatch available</li>
                <li>🧾 GST billing included</li>
                <li>📦 Secure packaging</li>
                <li>🔧 Compatible with multiple models</li>
              </ul>
            </div>

            <div className="modal-actions">
              <div className="card-qty-control">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={e => setQuantity(Math.max(1, Number(e.target.value) || 1))}
                />
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
              <button
                className={isInCart ? "selected-btn modal-add-btn" : "primary-btn modal-add-btn"}
                onClick={handleAddToCart}
              >
                {isInCart ? "Update Quote" : "Add to Quote"}
              </button>
            </div>

            {product.sourceUrl && (
              <a href={product.sourceUrl} target="_blank" rel="noopener noreferrer" className="source-link">
                📎 View Source
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function Header({ onOpenCart, cartCount, searchQuery, setSearchQuery }) {
  return (
    <>
      <div className="top-bar">
        <div className="top-bar-left">
          <span>📞 094162 03393</span>
          <span>✉️ support@jwithkp.com</span>
        </div>
        <div className="top-bar-right">
          <a href="#products">Products</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
      <div className="header">
        <div className="header-top">
          <a href="/" tabIndex={0} aria-label="Go to home">
            <img
              src="https://github.com/kp9696/zhivo-store/raw/main/Untitled%20(1).png"
              alt="Jai Ambey Refrigeration Logo"
              className="brand-logo"
            />
          </a>
        </div>
        <p className="header-chip">🏭 B2B Spare Parts Marketplace</p>
        <h1>Jai Ambey Refrigeration</h1>
        <p className="header-tagline">Trusted spare parts supplier for refrigeration systems</p>
        <div className="header-highlights">
          <span>✅ Genuine Spare Parts</span>
          <span>🚚 Same-Day Dispatch</span>
          <span>🧾 GST Billing</span>
        </div>
        <div className="header-actions">
          <input
            type="text"
            placeholder="Search compressors, PCB, thermostat..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
          <button className="cart-cta secondary-btn" onClick={onOpenCart}>Check Quote ({cartCount})</button>
        </div>
      </div>
    </>
  );
}

function ProductGrid({ products, addToCart, cartProductIds, draftQuantities, setDraftQuantity, selectedCompany, setSelectedCompany, companyOptions, onProductClick }) {
  return (
    <div>
      <div className="section-head">
        <div className="section-top-row">
          <h2>All Products</h2>
          <span className="results-pill">{products.length} items</span>
        </div>
        <p>Reliable products with quick response and same-day delivery options.</p>
        <div className="filter-row">
          <label htmlFor="company-filter">Select Company:</label>
          <select
            id="company-filter"
            value={selectedCompany}
            onChange={e => setSelectedCompany(e.target.value)}
          >
            {companyOptions.map(company => (
              <option key={company} value={company}>{company}</option>
            ))}
          </select>
        </div>
        <div className="category-legend" aria-label="Product categories">
          <span className="legend-item"><span className="legend-dot category-compressor" />Compressor</span>
          <span className="legend-item"><span className="legend-dot category-electrical" />Electrical</span>
          <span className="legend-item"><span className="legend-dot category-gas" />Gas</span>
          <span className="legend-item"><span className="legend-dot category-sensors" />Sensors</span>
        </div>
      </div>

      <div className="grid">
        {products.map(p => (
          <div className="product-card" key={p.id}>
            <div className="product-image-wrapper" onClick={() => onProductClick(p)}>
              <img
                src={p.image || FALLBACK_PRODUCT_IMAGE}
                alt={p.name}
                onError={e => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = FALLBACK_PRODUCT_IMAGE;
                }}
              />
              <div className="quick-view-overlay">
                <span>👁️ Quick View</span>
              </div>
            </div>
            <span className={`product-category category-${(p.category || "Electrical").toLowerCase()}`}>
              {p.category || "Electrical"}
            </span>
            <p className="product-company">{p.company || "Universal"}</p>
            <span className="verified-badge">✓ Verified Supplier</span>
            <h3>{p.name}</h3>
            <p className="product-rating">{getRatingLabel(p.id)}</p>
            <div className="card-qty-control">
              <button onClick={() => setDraftQuantity(p.id, (draftQuantities[p.id] || 1) - 1)}>-</button>
              <input
                type="number"
                min="1"
                value={draftQuantities[p.id] || 1}
                onChange={e => setDraftQuantity(p.id, Number(e.target.value))}
              />
              <button onClick={() => setDraftQuantity(p.id, (draftQuantities[p.id] || 1) + 1)}>+</button>
            </div>
            <button
              className={cartProductIds.has(p.id) ? "selected-btn" : "primary-btn"}
              onClick={() => addToCart(p, draftQuantities[p.id] || 1)}
            >
              {cartProductIds.has(p.id) ? "Added ✓" : "Add to Quote"}
            </button>
          </div>
        ))}
      </div>

      {products.length === 0 && (
        <div className="no-products">No spare parts found for this company.</div>
      )}
    </div>
  );
}

function StickyCartBar({ cartCount, onCheckout }) {
  if (cartCount === 0) {
    return null;
  }

  return (
    <div className="sticky-cart-bar">
      <span>{cartCount} item{cartCount > 1 ? "s" : ""} in cart</span>
      <button className="primary-btn" onClick={onCheckout}>Check Quote</button>
    </div>
  );
}

function CartDrawer({ open, cart, updateQuantity, removeFromCart, clearCart, onClose, onProceed }) {
  useEffect(() => {
    if (!open) {
      return undefined;
    }
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="cart-drawer-overlay" onClick={onClose}>
      <aside className="cart-drawer" onClick={(event) => event.stopPropagation()}>
        <div className="cart-drawer-head">
          <h3>Your Quote Request ({cartCount})</h3>
          <button className="confirm-close" onClick={onClose} aria-label="Close cart">×</button>
        </div>

        {cart.length === 0 ? (
          <p className="cart-drawer-empty">Your quote request is empty. Add products to continue.</p>
        ) : (
          <>
            <div className="cart-drawer-list">
              {cart.map((item) => (
                <div className="cart-drawer-item" key={item.id}>
                  <div>
                    <strong>{item.name}</strong>
                    <p>{item.category}</p>
                  </div>
                  <div className="qty-control">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                    />
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>
                  <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              ))}
            </div>

            <div className="cart-drawer-actions">
              <button className="secondary-btn" onClick={clearCart}>Clear Quote</button>
              <button className="primary-btn" onClick={onProceed}>Proceed to Checkout</button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}

function CheckoutForm({ cart, updateQuantity, removeFromCart, clearCart, onBack }) {
  const [form, setForm] = useState({
    name: "",
    company: "",
    address: "",
    mobile: "",
    gstInvoice: false,
    gstNumber: "",
    gstBusinessName: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [successOrderId, setSuccessOrderId] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    if (orderSuccess) {
      const timer = setTimeout(() => {
        window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(successMessage)}`, "_blank");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [orderSuccess, successMessage]);

  const gstPattern = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z][1-9A-Z]Z[0-9A-Z]$/;
  const mobileClean = form.mobile.replace(/\D/g, "");
  const hasGstFields = form.gstNumber.trim() && form.gstBusinessName.trim();
  const isGstFormatValid = gstPattern.test(form.gstNumber.trim());
  const isGstValid = !form.gstInvoice || (hasGstFields && isGstFormatValid);
  const isValid =
    form.name.trim() &&
    form.company.trim() &&
    form.address.trim() &&
    mobileClean.length >= 10 &&
    isGstValid &&
    cart.length > 0;

  if (cart.length === 0) {
    return (
      <div className="quote-box">
        <button className="back-btn secondary-btn" onClick={onBack}>
          ← Back to Cart
        </button>
        <h2>Quote Request Details</h2>
        <p className="checkout-note">Your quote request is empty. Please add items first to proceed on WhatsApp.</p>
        <button className="whatsapp-btn primary-btn" disabled>
          Send Quote Request on WhatsApp
        </button>
      </div>
    );
  }

  const sendWhatsApp = async () => {
    if (!isValid) {
      setSubmitted(true);
      return;
    }

    const now = new Date();
    const datePart = `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, "0")}${String(now.getDate()).padStart(2, "0")}`;
    const timePart = `${String(now.getHours()).padStart(2, "0")}${String(now.getMinutes()).padStart(2, "0")}${String(now.getSeconds()).padStart(2, "0")}`;
    const randomPart = Math.floor(100 + Math.random() * 900);
    let orderId = `JAR-${datePart}-${timePart}-${randomPart}`;

    setIsSubmitting(true);
    try {
      const response = await axios.post("/api/orders", {
        name: form.name,
        company: form.company,
        address: form.address,
        mobile: form.mobile,
        gstInvoice: form.gstInvoice,
        gstBusinessName: form.gstBusinessName,
        gstNumber: form.gstNumber,
        items: cart.map(item => ({
          id: item.id,
          name: item.name,
          company: item.company,
          category: item.category,
          quantity: item.quantity,
        })),
      });
      if (response?.data?.orderId) {
        orderId = response.data.orderId;
      }

      const itemsBlock = cart
        .map((item, index) => `${index + 1}. ${item.name} (${item.category}) - Qty: ${item.quantity}`)
        .join("\n");

      const gstBlock = form.gstInvoice
        ? `\nGST Details:\n- GST Business Name: ${form.gstBusinessName}\n- GST Number: ${form.gstNumber}`
        : "\nGST Details:\n- Not Required";

      const message = `
New Order Inquiry - Jai Ambey Refrigeration

  Order ID: ${orderId}

Order Items:
${itemsBlock}

Customer Details:
Name: ${form.name}
Company: ${form.company}
Address: ${form.address}
Mobile: ${form.mobile}
GST Invoice Required: ${form.gstInvoice ? "Yes" : "No"}
${gstBlock}
`;

      setSuccessOrderId(orderId);
      setSuccessMessage(message);
      setOrderSuccess(true);
    } catch (error) {
      console.error("Order save failed", error);
      // For now, do nothing; perhaps show error later
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="quote-box">
      <div className="checkout-top-actions">
        <button className="back-btn secondary-btn" onClick={onBack}>
          ← Back to Cart
        </button>
        <button className="remove-btn" onClick={clearCart}>Clear Quote</button>
      </div>

      <h2>Quote Request Details</h2>
      <p className="checkout-note">Fill required details and send order directly on WhatsApp.</p>

      <div className="checkout-items">
        {cart.map(item => (
          <div className="checkout-item-row" key={item.id}>
            <div>
              <p className="checkout-item-name">{item.name}</p>
              <p className="checkout-item-meta">{item.category} | {item.company}</p>
            </div>
            <div className="qty-control checkout-qty-control">
              <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={e => updateQuantity(item.id, Number(e.target.value))}
              />
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
            </div>
            <button className="remove-btn checkout-remove" onClick={() => removeFromCart(item.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>

      <input
        placeholder="Your Name"
        value={form.name}
        onChange={e => setForm({ ...form, name: e.target.value })}
      />
      {submitted && !form.name && <small className="field-error">Name is required</small>}

      <input
        placeholder="Company Name"
        value={form.company}
        onChange={e => setForm({ ...form, company: e.target.value })}
      />
      {submitted && !form.company && <small className="field-error">Company name is required</small>}

      <textarea
        placeholder="Complete Address"
        value={form.address}
        onChange={e => setForm({ ...form, address: e.target.value })}
      />
      {submitted && !form.address && <small className="field-error">Address is required</small>}

      <input
        placeholder="Mobile Number"
        value={form.mobile}
        onChange={e => setForm({ ...form, mobile: e.target.value })}
      />
      {submitted && mobileClean.length < 10 && <small className="field-error">Valid mobile number is required</small>}

      <label className="gst-check">
        <input
          type="checkbox"
          checked={form.gstInvoice}
          onChange={e => setForm({ ...form, gstInvoice: e.target.checked })}
        />
        GST Invoice Required
      </label>

      {form.gstInvoice && (
        <div className="gst-details-box">
          <input
            placeholder="GST Business Name"
            value={form.gstBusinessName}
            onChange={e => setForm({ ...form, gstBusinessName: e.target.value })}
          />
          {submitted && !form.gstBusinessName.trim() && <small className="field-error">GST business name is required</small>}

          <input
            placeholder="GST Number"
            value={form.gstNumber}
            maxLength={15}
            onChange={e => setForm({ ...form, gstNumber: e.target.value.toUpperCase() })}
          />
          {submitted && !form.gstNumber.trim() && <small className="field-error">GST number is required</small>}
          {submitted && form.gstNumber.trim() && !isGstFormatValid && (
            <small className="field-error">Enter valid GST number (example: 06ABCDE1234F1Z5)</small>
          )}
        </div>
      )}

      <button className="whatsapp-btn primary-btn" onClick={sendWhatsApp} disabled={isSubmitting}>
        {isSubmitting ? "Preparing Quote..." : "Send Quote Request on WhatsApp"}
      </button>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <h4>Jai Ambey Refrigeration</h4>
          <p>Your trusted partner for refrigeration spare parts and accessories.</p>
          <p>Service options: Same-day delivery available</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <p>Products</p>
          <p>Bulk Orders</p>
          <p>GST Billing</p>
        </div>
        <div>
          <h4>Customer Support</h4>
          <p>📞 <a href="tel:09416203393">094162 03393</a></p>
          <p>✉️ support@jwithkp.com</p>
          <p>📍 near ladla bakery, 490, link road, Old Char Chaman, Karnal, Haryana 132001</p>
        </div>
      </div>
      <div className="footer-copy">
        © {new Date().getFullYear()} Jai Ambey Refrigeration. All rights reserved. | Designed for fast business ordering.
      </div>
    </footer>
  );
}

function WhatsAppFloat() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const onScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 120) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const now = new Date();
  const day = now.getDay();
  const hour = now.getHours();
  const isBusinessTime = day >= 1 && day <= 6 && hour >= 9 && hour < 19;

  const message = isBusinessTime
    ? "Hello Jai Ambey Refrigeration, I need spare parts details."
    : "Hello Jai Ambey Refrigeration, I need spare parts details. We reached outside business hours (Mon-Sat, 9:00 AM-7:00 PM). Please share requirements, we will respond in working hours.";

  return (
    <div className={`contact-float ${isVisible ? "show" : "hide"}`}>
      <a
        href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`}
        className="float-btn whatsapp-float pulse-glow"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        title="Chat Now"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
          alt="WhatsApp"
        />
      </a>

      <a
        href="tel:9416203393"
        className="float-btn call-float"
        aria-label="Call now"
      >
        ☎
      </a>
    </div>
  );
}

export default App;
