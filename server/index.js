const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

const app = express();
const PORT = Number(process.env.PORT || 5000);
const ADMIN_API_KEY = process.env.ADMIN_API_KEY || "";
const allowedOrigins = (process.env.ALLOWED_ORIGINS
  || "https://ambey.jwithkp.com,https://www.ambey.jwithkp.com,http://localhost:3000,http://127.0.0.1:3000,http://192.168.29.104")
  .split(",")
  .map(origin => origin.trim())
  .filter(Boolean);

app.set("trust proxy", 1);
app.disable("x-powered-by");
app.use(helmet());
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
      return;
    }
    callback(new Error("Origin not allowed by CORS"));
  }
}));
app.use(express.json({ limit: "100kb" }));
app.use(rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 300,
  standardHeaders: true,
  legacyHeaders: false,
}));

// Serve static images from the images folder
app.use('/images', express.static(__dirname + '/images'));

const productImageUrl = "/images/product.png";
const baseProducts = [
  {
    id: 1,
    name: "Godrej Compressor",
    company: "Godrej",
    category: "Compressor",
    image: productImageUrl
  },
  {
    id: 2,
    name: "LG PCB Board",
    company: "LG",
    category: "Electrical",
    image: productImageUrl
  },
  {
    id: 3,
    name: "Whirlpool Thermostat",
    company: "Whirlpool",
    category: "Sensors",
    image: productImageUrl
  },
  {
    id: 4,
    name: "AC Capacitor",
    company: "LG",
    category: "Electrical",
    image: productImageUrl
  },
  {
    id: 5,
    name: "Copper Filter Drier",
    company: "Godrej",
    category: "Compressor",
    image: productImageUrl
  },
];

const defaultImage =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/No_image_available.svg/600px-No_image_available.svg.png";

const productImageByName = {};

function resolveImageUrl(image) {
  // Accept .jpg, .jpeg, .png, .svg, etc. If .jpg fails, try .jpeg
  if (!image) return defaultImage;
  if (image.endsWith('.jpg')) {
    // Optionally, you could check if .jpg is not loading and fallback to .jpeg
    // But since backend can't check loading, just return as is
    return image;
  }
  return image;
}

const products = baseProducts.map((product) => ({
  ...product,
  image: resolveImageUrl(product.image) || defaultImage,
}));

const orders = [];

const orderCreateLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 20,
  standardHeaders: true,
  legacyHeaders: false,
  message: { message: "Too many order attempts. Please try again shortly." }
});

function generateOrderId() {
  const now = new Date();
  const datePart = `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, "0")}${String(now.getDate()).padStart(2, "0")}`;
  const timePart = `${String(now.getHours()).padStart(2, "0")}${String(now.getMinutes()).padStart(2, "0")}${String(now.getSeconds()).padStart(2, "0")}`;
  const randomPart = Math.floor(100 + Math.random() * 900);
  return `JAR-${datePart}-${timePart}-${randomPart}`;
}

function validateOrderPayload(payload) {
  const errors = [];
  const isString = (value) => typeof value === "string" && value.trim().length > 0;
  const gstPattern = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z][1-9A-Z]Z[0-9A-Z]$/;

  if (!isString(payload.name)) errors.push("name is required");
  if (!isString(payload.company)) errors.push("company is required");
  if (!isString(payload.address)) errors.push("address is required");
  if (!isString(payload.mobile) || payload.mobile.replace(/\D/g, "").length < 10) {
    errors.push("valid mobile is required");
  }

  if (!Array.isArray(payload.items) || payload.items.length === 0) {
    errors.push("at least one item is required");
  } else {
    payload.items.forEach((item, index) => {
      if (!item || typeof item !== "object") {
        errors.push(`item ${index + 1} is invalid`);
        return;
      }
      if (!isString(item.name)) errors.push(`item ${index + 1} name is required`);
      const quantity = Number(item.quantity);
      if (!Number.isFinite(quantity) || quantity < 1) {
        errors.push(`item ${index + 1} quantity must be at least 1`);
      }
    });
  }

  if (payload.gstInvoice) {
    if (!isString(payload.gstBusinessName)) errors.push("gstBusinessName is required when gstInvoice is true");
    if (!isString(payload.gstNumber) || !gstPattern.test(payload.gstNumber.trim().toUpperCase())) {
      errors.push("valid gstNumber is required when gstInvoice is true");
    }
  }

  return errors;
}

function requireAdminKey(req, res, next) {
  if (!ADMIN_API_KEY || req.header("x-admin-key") !== ADMIN_API_KEY) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }
  next();
}

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.post("/api/orders", orderCreateLimiter, (req, res) => {
  const payload = req.body || {};
  const validationErrors = validateOrderPayload(payload);
  if (validationErrors.length > 0) {
    res.status(400).json({ message: "Invalid order payload", errors: validationErrors });
    return;
  }

  const order = {
    orderId: generateOrderId(),
    createdAt: new Date().toISOString(),
    status: "new",
    name: payload.name.trim(),
    company: payload.company.trim(),
    address: payload.address.trim(),
    mobile: payload.mobile.trim(),
    gstInvoice: Boolean(payload.gstInvoice),
    gstBusinessName: payload.gstBusinessName ? payload.gstBusinessName.trim() : "",
    gstNumber: payload.gstNumber ? payload.gstNumber.trim().toUpperCase() : "",
    items: payload.items.map((item) => ({
      id: item.id || null,
      name: item.name,
      company: item.company || "",
      category: item.category || "",
      quantity: Number(item.quantity),
    })),
  };

  orders.unshift(order);
  if (orders.length > 500) {
    orders.pop();
  }

  res.status(201).json({
    message: "Order created",
    orderId: order.orderId,
    createdAt: order.createdAt,
  });
});

app.get("/api/orders", requireAdminKey, (req, res) => {
  res.json({ total: orders.length, orders });
});

app.get("/health", (req, res) => {
  res.json({ status: "ok", uptime: process.uptime() });
});

// Fixed error handling middleware
app.use((err, req, res, next) => {
  if (err && err.message === "Origin not allowed by CORS") {
    res.status(403).json({ message: err.message });
    return;
  }
  // Handle other errors
  console.error(err);
  res.status(500).json({ message: "Internal server error" });
  next(err);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`API running on port ${PORT}`);
  console.log("CI/CD working from ubuntu");
});
