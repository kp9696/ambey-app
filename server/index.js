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

const baseProducts = [
  {
    id: 1,
    name: "Godrej Compressor",
    company: "Godrej",
    category: "Compressor",
    image: "https://5.imimg.com/data5/SELLER/Default/2023/2/HI/RQ/SZ/27191124/godrej-fridge-compressor-1675334357777-500x500.jpg"
  },
  {
    id: 2,
    name: "LG PCB Board",
    company: "LG",
    category: "Electrical",
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQbPu3FWPXNKf7-gad1gijg5-nUMya1choA-3nIevo1u80dBfg_fa4uTVm-qxUYaYAemqPC3TokB7eYMCI_DJ7O1E_p_9g2WUegNE4f-r61pdTt4pJwpFGwFw"
  },
  {
    id: 3,
    name: "Whirlpool Thermostat",
    company: "Whirlpool",
    category: "Sensors",
    image: "https://m.media-amazon.com/images/I/41gAPp1qvgL.jpg"
  },
  {
    id: 4,
    name: "AC Capacitor 35+5 MFD",
    company: "LG",
    category: "Electrical",
    image: "https://m.media-amazon.com/images/I/61ov1+DyjXL.jpg"
  },
  {
    id: 5,
    name: "Copper Filter Drier",
    company: "Godrej",
    category: "Compressor",
    image: "https://rukmini1.flixcart.com/image/1500/1500/kdlzte80/electronic-hobby-kit/f/s/f/fridge-replacement-copper-filter-drier-for-refrigerator-11-cm-original-imafuhfthng6mwmx.jpeg?q=70"
  },
  {
    id: 6,
    name: "R134a Refrigerant Gas (450g)",
    company: "LG",
    category: "Gas",
    image: "https://m.media-amazon.com/images/I/51rTgS4J6JL._SL1000_.jpg"
  },
  {
    id: 7,
    name: "Split AC Fan Motor",
    company: "LG",
    category: "Electrical",
    image: "https://m.media-amazon.com/images/I/61v3G7k6A8L._SL1500_.jpg"
  },
  {
    id: 8,
    name: "Indoor AC Blower Wheel",
    company: "Whirlpool",
    category: "Electrical",
    image: "https://images.unsplash.com/photo-1581092160625-01e7d7a2b6f0?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 9,
    name: "Refrigerator Door Gasket",
    company: "Godrej",
    category: "Compressor",
    image: "https://images.unsplash.com/photo-1582582621959-48d27397dc07?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 10,
    name: "Defrost Timer",
    company: "Whirlpool",
    category: "Electrical",
    image: "https://m.media-amazon.com/images/I/61x9FvN6LxL._SL1500_.jpg"
  },
  {
    id: 11,
    name: "Universal AC Remote",
    company: "Universal",
    category: "Electrical",
    image: "https://m.media-amazon.com/images/I/61yFqN4f5DL._SL1500_.jpg"
  },
  {
    id: 12,
    name: "Copper Expansion Valve",
    company: "Godrej",
    category: "Compressor",
    image: "https://m.media-amazon.com/images/I/61n3Kz4XhQL._SL1200_.jpg"
  },
  {
    id: 13,
    name: "Temperature Sensor (NTC)",
    company: "LG",
    category: "Sensors",
    image: "https://m.media-amazon.com/images/I/51p8KkQ6p2L._SL1000_.jpg"
  },
  {
    id: 14,
    name: "Contactor 2 Pole",
    company: "Godrej",
    category: "Electrical",
    image: "https://m.media-amazon.com/images/I/71Lw6YxkR-L._SL1500_.jpg"
  },
  {
    id: 15,
    name: "Compressor Overload Protector",
    company: "Godrej",
    category: "Compressor",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 16,
    name: "AC Contact Relay",
    company: "LG",
    category: "Electrical",
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 17,
    name: "Dual Run Capacitor 45+5 MFD",
    company: "Whirlpool",
    category: "Electrical",
    image: "https://images.unsplash.com/photo-1589792923962-537704632910?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 18,
    name: "R32 Refrigerant Gas Cylinder",
    company: "LG",
    category: "Gas",
    image: "https://images.unsplash.com/photo-1616085112161-e2f1c90a3e2f?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 19,
    name: "Compressor Mounting Kit",
    company: "Godrej",
    category: "Compressor",
    image: "https://images.unsplash.com/photo-1527430253228-e93688616381?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 20,
    name: "AC Room Temperature Sensor",
    company: "LG",
    category: "Sensors",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 21,
    name: "Copper Coil Tube 1/4 inch",
    company: "Godrej",
    category: "Compressor",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 22,
    name: "Service Valve Core",
    company: "Whirlpool",
    category: "Compressor",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 23,
    name: "Inverter AC PCB Module",
    company: "LG",
    category: "Electrical",
    image: "https://m.media-amazon.com/images/I/61Yqf7g6HjL._SL1500_.jpg"
  },
  {
    id: 24,
    name: "Pressure Sensor Switch",
    company: "Whirlpool",
    category: "Sensors",
    image: "https://m.media-amazon.com/images/I/51y9x9v8XQL._SL1000_.jpg"
  },
  {
    id: 25,
    name: "LG Refrigerator Water Filter Cartridge",
    company: "LG",
    category: "Compressor",
    image: "https://images.unsplash.com/photo-1582719478185-2f9c3b6f9a33?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 26,
    name: "LG Ice Maker Assembly",
    company: "LG",
    category: "Electrical",
    image: "https://images.unsplash.com/photo-1580910419894-3f3bca9b81d6?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 27,
    name: "LG Defrost Heater",
    company: "LG",
    category: "Electrical",
    image: "https://images.unsplash.com/photo-1601049541289-9b1b7bbb16d5?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 28,
    name: "LG Evaporator Fan Motor",
    company: "LG",
    category: "Electrical",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 29,
    name: "LG Door Switch",
    company: "LG",
    category: "Sensors",
    image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 30,
    name: "LG Temperature Control Thermistor",
    company: "LG",
    category: "Sensors",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 31,
    name: "LG Inlet Water Valve",
    company: "LG",
    category: "Compressor",
    image: "https://images.unsplash.com/photo-1584270354949-1f285e3fda5b?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 32,
    name: "LG Refrigerator Shelf Rack",
    company: "LG",
    category: "Electrical",
    image: "https://images.unsplash.com/photo-1600566753151-384129cf4e3f?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 33,
    name: "LG Vegetable Tray",
    company: "LG",
    category: "Electrical",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 34,
    name: "LG Refrigerator Door Bin",
    company: "LG",
    category: "Electrical",
    image: "https://images.unsplash.com/photo-1556912167-f556f1f39faa?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 35,
    name: "LG Start Relay",
    company: "LG",
    category: "Electrical",
    image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 36,
    name: "LG Overload Protector",
    company: "LG",
    category: "Compressor",
    image: "https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 37,
    name: "Whirlpool Refrigerator Water Filter",
    company: "Whirlpool",
    category: "Compressor",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 38,
    name: "Whirlpool Ice Maker Kit",
    company: "Whirlpool",
    category: "Electrical",
    image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 39,
    name: "Whirlpool Defrost Heater Assembly",
    company: "Whirlpool",
    category: "Electrical",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267d1?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 40,
    name: "Whirlpool Evaporator Fan Motor",
    company: "Whirlpool",
    category: "Electrical",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 41,
    name: "Whirlpool Door Gasket Set",
    company: "Whirlpool",
    category: "Compressor",
    image: "https://images.unsplash.com/photo-1582582621950-5d3a6f2b65ff?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 42,
    name: "Whirlpool Door Shelf Bin",
    company: "Whirlpool",
    category: "Electrical",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 43,
    name: "Whirlpool Crisper Drawer",
    company: "Whirlpool",
    category: "Electrical",
    image: "https://images.unsplash.com/photo-1586201375766-83865001e31d?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 44,
    name: "Whirlpool Thermistor Sensor",
    company: "Whirlpool",
    category: "Sensors",
    image: "https://images.unsplash.com/photo-1581092160618-2b9b08d4d2da?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 45,
    name: "Whirlpool Air Damper Control",
    company: "Whirlpool",
    category: "Sensors",
    image: "https://images.unsplash.com/photo-1581092160620-7a0a8b7c0d9f?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 46,
    name: "Whirlpool Start Device Relay",
    company: "Whirlpool",
    category: "Electrical",
    image: "https://images.unsplash.com/photo-1581092160622-4c2f4f1a2e6b?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 47,
    name: "Whirlpool Compressor Run Capacitor",
    company: "Whirlpool",
    category: "Electrical",
    image: "https://images.unsplash.com/photo-1581092160627-3d5b1d4c7a0f?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 48,
    name: "Whirlpool Condenser Fan Blade",
    company: "Whirlpool",
    category: "Compressor",
    image: "https://images.unsplash.com/photo-1581092160630-3a7a4b0f61e2?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 49,
    name: "Spareplanet™ Bimetal Spare Parts for Refrigerator Temperature Compatible with Godrej",
    company: "Godrej",
    category: "Sensors",
    sourceUrl: "https://www.amazon.in/SpareplanetTMBimetal-Refrigerator-Temperature-Compatible-godrej/dp/B08F4MFLRX",
    image: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd73?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 50,
    name: "Godrej Refrigerator Defrost Thermostat",
    company: "Godrej",
    category: "Sensors",
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 51,
    name: "LG Refrigerator Start Relay Kit",
    company: "LG",
    category: "Electrical",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 52,
    name: "Whirlpool Refrigerator Door Gasket Premium",
    company: "Whirlpool",
    category: "Compressor",
    image: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 53,
    name: "LG Refrigerator PCB Inverter Control",
    company: "LG",
    category: "Electrical",
    image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 54,
    name: "Godrej Refrigerator Evaporator Fan Motor",
    company: "Godrej",
    category: "Electrical",
    image: "https://images.unsplash.com/photo-1594235048794-fae8583a5af5?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 55,
    name: "Whirlpool Refrigerator Defrost Sensor",
    company: "Whirlpool",
    category: "Sensors",
    image: "https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 56,
    name: "LG Refrigerator Water Inlet Valve",
    company: "LG",
    category: "Compressor",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 57,
    name: "Godrej Refrigerator Compressor Mount Bush Set",
    company: "Godrej",
    category: "Compressor",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 58,
    name: "Whirlpool Refrigerator Condenser Fan Motor",
    company: "Whirlpool",
    category: "Electrical",
    image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 59,
    name: "Universal Refrigerator Temperature Controller",
    company: "Universal",
    category: "Sensors",
    image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=900&q=80"
  },
];

const defaultImage =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/No_image_available.svg/600px-No_image_available.svg.png";

// Normalize an image URL: trim whitespace, upgrade http:// to https://,
// and fall back to defaultImage for non-string or empty values.
function normalizeImageUrl(url) {
  if (typeof url !== "string" || !url.trim()) return defaultImage;
  const trimmed = url.trim();
  return trimmed.startsWith("http://") ? trimmed.replace("http://", "https://") : trimmed;
}

const productImageByName = {
  // Existing Amazon images (keep)
  "Godrej Compressor": "https://5.imimg.com/data5/SELLER/Default/2023/2/HI/RQ/SZ/27191124/godrej-fridge-compressor-1675334357777-500x500.jpg",
  "LG PCB Board": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQbPu3FWPXNKf7-gad1gijg5-nUMya1choA-3nIevo1u80dBfg_fa4uTVm-qxUYaYAemqPC3TokB7eYMCI_DJ7O1E_p_9g2WUegNE4f-r61pdTt4pJwpFGwFw",
  "Whirlpool Thermostat": "https://m.media-amazon.com/images/I/41gAPp1qvgL.jpg",
  "AC Capacitor 35+5 MFD": "https://m.media-amazon.com/images/I/61ov1+DyjXL.jpg",
  "Copper Filter Drier": "https://rukmini1.flixcart.com/image/1500/1500/kdlzte80/electronic-hobby-kit/f/s/f/fridge-replacement-copper-filter-drier-for-refrigerator-11-cm-original-imafuhfthng6mwmx.jpeg?q=70",
  "R134a Refrigerant Gas (450g)": "https://m.media-amazon.com/images/I/51rTgS4J6JL._SL1000_.jpg",
  "Split AC Fan Motor": "https://m.media-amazon.com/images/I/61v3G7k6A8L._SL1500_.jpg",
  "Universal AC Remote": "https://m.media-amazon.com/images/I/61yFqN4f5DL._SL1500_.jpg",
  "Copper Expansion Valve": "https://m.media-amazon.com/images/I/61n3Kz4XhQL._SL1200_.jpg",
  "Temperature Sensor (NTC)": "https://m.media-amazon.com/images/I/51p8KkQ6p2L._SL1000_.jpg",
  "Contactor 2 Pole": "https://m.media-amazon.com/images/I/71Lw6YxkR-L._SL1500_.jpg",
  "Defrost Timer": "https://m.media-amazon.com/images/I/61x9FvN6LxL._SL1500_.jpg",
  "Inverter AC PCB Module": "https://m.media-amazon.com/images/I/61Yqf7g6HjL._SL1500_.jpg",
  "Pressure Sensor Switch": "https://m.media-amazon.com/images/I/51y9x9v8XQL._SL1000_.jpg",

  // Unique online images for the remaining products (Unsplash)
  "Indoor AC Blower Wheel": "https://images.unsplash.com/photo-1581092160625-01e7d7a2b6f0?auto=format&fit=crop&w=900&q=80",
  "Refrigerator Door Gasket": "https://images.unsplash.com/photo-1582582621959-48d27397dc07?auto=format&fit=crop&w=900&q=80",
  "Compressor Overload Protector": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
  "AC Contact Relay": "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=900&q=80",
  "Dual Run Capacitor 45+5 MFD": "https://images.unsplash.com/photo-1589792923962-537704632910?auto=format&fit=crop&w=900&q=80",
  "R32 Refrigerant Gas Cylinder": "https://images.unsplash.com/photo-1616085112161-e2f1c90a3e2f?auto=format&fit=crop&w=900&q=80",
  "Compressor Mounting Kit": "https://images.unsplash.com/photo-1527430253228-e93688616381?auto=format&fit=crop&w=900&q=80",
  "AC Room Temperature Sensor": "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=900&q=80",
  "Copper Coil Tube 1/4 inch": "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=900&q=80",
  "Service Valve Core": "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=900&q=80",
  "LG Refrigerator Water Filter Cartridge": "https://images.unsplash.com/photo-1582719478185-2f9c3b6f9a33?auto=format&fit=crop&w=900&q=80",
  "LG Ice Maker Assembly": "https://images.unsplash.com/photo-1580910419894-3f3bca9b81d6?auto=format&fit=crop&w=900&q=80",
  "LG Defrost Heater": "https://images.unsplash.com/photo-1601049541289-9b1b7bbb16d5?auto=format&fit=crop&w=900&q=80",
  "LG Evaporator Fan Motor": "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=900&q=80",
  "LG Door Switch": "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=900&q=80",
  "LG Temperature Control Thermistor": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80",
  "LG Inlet Water Valve": "https://images.unsplash.com/photo-1584270354949-1f285e3fda5b?auto=format&fit=crop&w=900&q=80",
  "LG Refrigerator Shelf Rack": "https://images.unsplash.com/photo-1600566753151-384129cf4e3f?auto=format&fit=crop&w=900&q=80",
  "LG Vegetable Tray": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=80",
  "LG Refrigerator Door Bin": "https://images.unsplash.com/photo-1556912167-f556f1f39faa?auto=format&fit=crop&w=900&q=80",
  "LG Start Relay": "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=900&q=80",
  "LG Overload Protector": "https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?auto=format&fit=crop&w=900&q=80",
  "Whirlpool Refrigerator Water Filter": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80",
  "Whirlpool Ice Maker Kit": "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=900&q=80",
  "Whirlpool Defrost Heater Assembly": "https://images.unsplash.com/photo-1588776814546-1ffcf47267d1?auto=format&fit=crop&w=900&q=80",
  "Whirlpool Evaporator Fan Motor": "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=900&q=80",
  "Whirlpool Door Gasket Set": "https://images.unsplash.com/photo-1582582621950-5d3a6f2b65ff?auto=format&fit=crop&w=900&q=80",
  "Whirlpool Door Shelf Bin": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=900&q=80",
  "Whirlpool Crisper Drawer": "https://images.unsplash.com/photo-1586201375766-83865001e31d?auto=format&fit=crop&w=900&q=80",
  "Whirlpool Thermistor Sensor": "https://images.unsplash.com/photo-1581092160618-2b9b08d4d2da?auto=format&fit=crop&w=900&q=80",
  "Whirlpool Air Damper Control": "https://images.unsplash.com/photo-1581092160620-7a0a8b7c0d9f?auto=format&fit=crop&w=900&q=80",
  "Whirlpool Start Device Relay": "https://images.unsplash.com/photo-1581092160622-4c2f4f1a2e6b?auto=format&fit=crop&w=900&q=80",
  "Whirlpool Compressor Run Capacitor": "https://images.unsplash.com/photo-1581092160627-3d5b1d4c7a0f?auto=format&fit=crop&w=900&q=80",
  "Whirlpool Condenser Fan Blade": "https://images.unsplash.com/photo-1581092160630-3a7a4b0f61e2?auto=format&fit=crop&w=900&q=80",
};

const products = baseProducts.map((product) => ({
  ...product,
  // Prefer lookup image, then base image, then default; normalize the chosen URL
  image: normalizeImageUrl(productImageByName[product.name] || product.image || defaultImage),
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
