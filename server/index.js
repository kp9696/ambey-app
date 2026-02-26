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
  // DC Motors
  { id: 1, name: "4 Wire CCW", company: "SYMBOL", category: "DC Motor", modelNo: "SR-GL4W-DC", brandCode: "LG", description: "4 Wire CCW", image: productImageUrl },
  { id: 2, name: "3 Wire 9V CCW", company: "SYMBOL", category: "DC Motor", modelNo: "SR-BOS3W-9VDC", brandCode: "BOS", description: "3 Wire 9V CCW", image: productImageUrl },
  { id: 3, name: "3 Wire CCW", company: "SYMBOL", category: "DC Motor", modelNo: "SR-WP3W-DC", brandCode: "WP", description: "3 Wire CCW", image: productImageUrl },
  { id: 4, name: "2 Wire CCW", company: "SYMBOL", category: "DC Motor", modelNo: "SR-GD2W-DC", brandCode: "GOD", description: "2 Wire CCW", image: productImageUrl },
  { id: 5, name: "3 Wire Long Shaft CCW", company: "SYMBOL", category: "DC Motor", modelNo: "SR-SS3W-LS-DC", brandCode: "SS", description: "3 Wire Long Shaft CCW", image: productImageUrl },
  { id: 6, name: "3 Wire New Model CCW", company: "SYMBOL", category: "DC Motor", modelNo: "SR-SS3WNM-DC", brandCode: "SS", description: "3 Wire New Model CCW", image: productImageUrl },
  { id: 7, name: "3 Wire Short Shaft CW", company: "SYMBOL", category: "DC Motor", modelNo: "SR-SS3W-SS-DC", brandCode: "SS", description: "3 Wire Short Shaft CW", image: productImageUrl },
  { id: 8, name: "3 Wire Fan (Black) – 92mm Diameter", company: "SYMBOL", category: "DC Motor", modelNo: "SR-SS3W-FB", brandCode: "SS", description: "3 Wire Fan (Black) – 92mm Diameter", image: productImageUrl },
  { id: 9, name: "3 Wire Fan (White) – 125mm Diameter", company: "SYMBOL", category: "DC Motor", modelNo: "SR-SS3W-FW", brandCode: "SS", description: "3 Wire Fan (White) – 125mm Diameter", image: productImageUrl },
  // DONGHAI TECHNOLOGY Products
  { id: 58, name: "XD 001-OND", company: "DONGHAI TECHNOLOGY", category: "Semi-Automatic Washing Machine Gear Box", modelNo: "XD 001-OND", brandCode: "OND", description: "Square Shaft 33mm", image: productImageUrl },
  { id: 59, name: "XD 002-LE OLD", company: "DONGHAI TECHNOLOGY", category: "Semi-Automatic Washing Machine Gear Box", modelNo: "XD 002-LE OLD", brandCode: "LE", description: "Round Shaft 30mm, 11 Teeth", image: productImageUrl },
  { id: 60, name: "XD 003-VC 400T", company: "DONGHAI TECHNOLOGY", category: "Semi-Automatic Washing Machine Gear Box", modelNo: "XD 003-VC 400T", brandCode: "VC", description: "Square Shaft 33mm", image: productImageUrl },
  { id: 61, name: "XD 006-NAT/PAN", company: "DONGHAI TECHNOLOGY", category: "Semi-Automatic Washing Machine Gear Box", modelNo: "XD 006-NAT/PAN", brandCode: "NAT/PAN", description: "Round Shaft 30mm, 11 Teeth", image: productImageUrl },
  { id: 62, name: "XD 007-55BT", company: "DONGHAI TECHNOLOGY", category: "Semi-Automatic Washing Machine Gear Box", modelNo: "XD 007-55BT", brandCode: "55BT", description: "Round Shaft 35mm, 10 Teeth", image: productImageUrl },
  { id: 63, name: "XD 008-SS", company: "DONGHAI TECHNOLOGY", category: "Semi-Automatic Washing Machine Gear Box", modelNo: "XD 008-SS", brandCode: "SS", description: "Square Shaft 30mm", image: productImageUrl },
  { id: 64, name: "XD 011-HAR/60HBT", company: "DONGHAI TECHNOLOGY", category: "Semi-Automatic Washing Machine Gear Box", modelNo: "XD 011-HAR/60HBT", brandCode: "HAR", description: "Round Shaft 35mm, 10 Teeth", image: productImageUrl },
  { id: 65, name: "XD 012-VC MULTI 6800", company: "DONGHAI TECHNOLOGY", category: "Semi-Automatic Washing Machine Gear Box", modelNo: "XD 012-VC MULTI 6800", brandCode: "VC", description: "Square Shaft 28mm", image: productImageUrl },
  { id: 66, name: "XD 016-WP 801", company: "DONGHAI TECHNOLOGY", category: "Semi-Automatic Washing Machine Gear Box", modelNo: "XD 016-WP 801", brandCode: "WP", description: "Square Shaft 45mm", image: productImageUrl },
  { id: 67, name: "XD 021-LE NEW", company: "DONGHAI TECHNOLOGY", category: "Semi-Automatic Washing Machine Gear Box", modelNo: "XD 021-LE NEW", brandCode: "LE", description: "Round Shaft 28mm, 11 Teeth", image: productImageUrl },
  { id: 68, name: "Spin Timer GLS", company: "DONGHAI TECHNOLOGY", category: "Washing Machine Timer", modelNo: "Spin Timer GLS", brandCode: "GL", description: "Spin Timer", image: productImageUrl },
  { id: 69, name: "Spin Timer SS", company: "DONGHAI TECHNOLOGY", category: "Washing Machine Timer", modelNo: "Spin Timer SS", brandCode: "SS", description: "Spin Timer", image: productImageUrl },
  { id: 70, name: "Timer WP 7W 15Min", company: "DONGHAI TECHNOLOGY", category: "Washing Machine Timer", modelNo: "Timer WP 7W 15Min", brandCode: "WP", description: "7 Wire, 15 Minutes", image: productImageUrl },
  { id: 71, name: "Spin Motor GLS", company: "DONGHAI TECHNOLOGY", category: "Waterproof Spin Motor", modelNo: "Spin Motor GLS", brandCode: "GL", description: "Waterproof Motor", image: productImageUrl },
  { id: 72, name: "Spin Motor WP", company: "DONGHAI TECHNOLOGY", category: "Waterproof Spin Motor", modelNo: "Spin Motor WP", brandCode: "WP", description: "Waterproof Motor", image: productImageUrl },
  { id: 73, name: "Wash Motor GL", company: "DONGHAI TECHNOLOGY", category: "Wash Motor", modelNo: "Wash Motor GL", brandCode: "GL", description: "Washing Machine Motor", image: productImageUrl },
  { id: 74, name: "Wash Motor VC 6800", company: "DONGHAI TECHNOLOGY", category: "Wash Motor", modelNo: "Wash Motor VC 6800", brandCode: "VC", description: "Washing Machine Motor", image: productImageUrl },
  { id: 75, name: "GL 1 Way", company: "DONGHAI TECHNOLOGY", category: "Inlet Valve", modelNo: "GL 1 Way", brandCode: "GL", description: "Washing Machine Inlet Valve", image: productImageUrl },
  { id: 76, name: "GL DC 3 Way New", company: "DONGHAI TECHNOLOGY", category: "Inlet Valve", modelNo: "GL DC 3 Way New", brandCode: "GL", description: "DC 3 Way Valve", image: productImageUrl },
  { id: 77, name: "Drain Motor GL", company: "DONGHAI TECHNOLOGY", category: "Drain Motor", modelNo: "Drain Motor GL", brandCode: "GL", description: "Washing Machine Drain Motor", image: productImageUrl },
  { id: 78, name: "GL", company: "DONGHAI TECHNOLOGY", category: "Pressure Sensor", modelNo: "GL", brandCode: "GL", description: "Washing Machine Pressure Sensor", image: productImageUrl },
  { id: 79, name: "GL Single Gear", company: "DONGHAI TECHNOLOGY", category: "Clutch Mechanism", modelNo: "GL Single Gear", brandCode: "GL", description: "Washing Machine Clutch", image: productImageUrl },
  { id: 80, name: "GL", company: "DONGHAI TECHNOLOGY", category: "Hub & Drum Spider", modelNo: "GL", brandCode: "GL", description: "Washing Machine Hub", image: productImageUrl },
  { id: 81, name: "IF Small", company: "DONGHAI TECHNOLOGY", category: "Drain Pump", modelNo: "IF Small", brandCode: "IF", description: "Washing Machine Drain Pump", image: productImageUrl },
  { id: 82, name: "Door Lock GL", company: "DONGHAI TECHNOLOGY", category: "Door Lock", modelNo: "Door Lock GL", brandCode: "GL", description: "Washing Machine Door Lock", image: productImageUrl },
  { id: 83, name: "Shocker GL", company: "DONGHAI TECHNOLOGY", category: "Shockers", modelNo: "Shocker GL", brandCode: "GL", description: "Washing Machine Shocker", image: productImageUrl },
  { id: 84, name: "Magnetron Witol 210", company: "DONGHAI TECHNOLOGY", category: "Microwave Spare", modelNo: "Magnetron Witol 210", brandCode: "WITOL", description: "6 Fin", image: productImageUrl },
  { id: 85, name: "Magnetron GL 213", company: "DONGHAI TECHNOLOGY", category: "Microwave Spare", modelNo: "Magnetron GL 213", brandCode: "GL", description: "6 Fin", image: productImageUrl },
  { id: 86, name: "H.V Capacitor 1.00 MFD", company: "DONGHAI TECHNOLOGY", category: "Microwave Spare", modelNo: "H.V Capacitor 1.00 MFD", brandCode: "—", description: "Microwave Capacitor", image: productImageUrl },
  { id: 87, name: "Oven 2 Pin Motor", company: "DONGHAI TECHNOLOGY", category: "Oven Spare", modelNo: "Oven 2 Pin Motor", brandCode: "—", description: "Oven Motor", image: productImageUrl },
  { id: 88, name: "Kettle Thermostat Single Point", company: "DONGHAI TECHNOLOGY", category: "Kettle Spare", modelNo: "Kettle Thermostat Single Point", brandCode: "—", description: "Thermostat", image: productImageUrl },
  { id: 89, name: "Ventilation Fan Motor", company: "DONGHAI TECHNOLOGY", category: "Fan Motor", modelNo: "Ventilation Fan Motor", brandCode: "—", description: "Fan Motor", image: productImageUrl },
  // AC Motors
  { id: 10, name: "Refrigerator AC Motor", company: "SYMBOL", category: "AC Motor", modelNo: "SR-GL-AC", brandCode: "GL", description: "Refrigerator AC Motor", image: productImageUrl },
  { id: 11, name: "Refrigerator AC Motor", company: "SYMBOL", category: "AC Motor", modelNo: "SR-GLIB-AC", brandCode: "GLIB", description: "Refrigerator AC Motor", image: productImageUrl },
  { id: 12, name: "Refrigerator AC Motor", company: "SYMBOL", category: "AC Motor", modelNo: "SR-SS-AC", brandCode: "SS", description: "Refrigerator AC Motor", image: productImageUrl },
    // DONGHAI TECHNOLOGY Spin Motor (Waterproof)
    { id: 131, name: "Spin Motor GLS", company: "DONGHAI TECHNOLOGY", category: "Spin Motor (Waterproof)", modelNo: "Spin Motor GLS", brandCode: "GL", description: "Waterproof Spin Motor", image: productImageUrl },
    { id: 132, name: "Spin Motor SS", company: "DONGHAI TECHNOLOGY", category: "Spin Motor (Waterproof)", modelNo: "Spin Motor SS", brandCode: "SS", description: "Waterproof Spin Motor", image: productImageUrl },
    { id: 133, name: "Spin Motor VCON", company: "DONGHAI TECHNOLOGY", category: "Spin Motor (Waterproof)", modelNo: "Spin Motor VCON", brandCode: "VC", description: "Waterproof Spin Motor", image: productImageUrl },
    { id: 134, name: "Spin Motor WP", company: "DONGHAI TECHNOLOGY", category: "Spin Motor (Waterproof)", modelNo: "Spin Motor WP", brandCode: "WP", description: "Waterproof Spin Motor", image: productImageUrl },
    { id: 135, name: "Spin Motor WP NEW/GOD", company: "DONGHAI TECHNOLOGY", category: "Spin Motor (Waterproof)", modelNo: "Spin Motor WP NEW/GOD", brandCode: "WP/GOD", description: "Waterproof Spin Motor", image: productImageUrl },
    { id: 136, name: "Spin Motor Multi", company: "DONGHAI TECHNOLOGY", category: "Spin Motor (Waterproof)", modelNo: "Spin Motor Multi", brandCode: "MULTI", description: "Waterproof Spin Motor", image: productImageUrl },
    // DONGHAI TECHNOLOGY Wash Motor
    { id: 137, name: "Wash Motor GL", company: "DONGHAI TECHNOLOGY", category: "Wash Motor", modelNo: "Wash Motor GL", brandCode: "GL", description: "Washing Machine Wash Motor", image: productImageUrl },
    { id: 138, name: "Wash Motor SS", company: "DONGHAI TECHNOLOGY", category: "Wash Motor", modelNo: "Wash Motor SS", brandCode: "SS", description: "Washing Machine Wash Motor", image: productImageUrl },
    { id: 139, name: "Wash Motor VC 6800", company: "DONGHAI TECHNOLOGY", category: "Wash Motor", modelNo: "Wash Motor VC 6800", brandCode: "VC", description: "Washing Machine Wash Motor", image: productImageUrl },
    { id: 140, name: "Wash Motor WP", company: "DONGHAI TECHNOLOGY", category: "Wash Motor", modelNo: "Wash Motor WP", brandCode: "WP", description: "Washing Machine Wash Motor", image: productImageUrl },
    { id: 141, name: "Wash Motor ON", company: "DONGHAI TECHNOLOGY", category: "Wash Motor", modelNo: "Wash Motor ON", brandCode: "ON", description: "Washing Machine Wash Motor", image: productImageUrl },
    { id: 142, name: "Wash Motor VC 400T", company: "DONGHAI TECHNOLOGY", category: "Wash Motor", modelNo: "Wash Motor VC 400T", brandCode: "VC", description: "Washing Machine Wash Motor", image: productImageUrl },
    // DONGHAI TECHNOLOGY Spin Motor (Copper)
    { id: 143, name: "Spin Motor GL", company: "DONGHAI TECHNOLOGY", category: "Spin Motor (Copper)", modelNo: "Spin Motor GL", brandCode: "GL", description: "Copper Winding Spin Motor", image: productImageUrl },
    { id: 144, name: "Spin Motor SS", company: "DONGHAI TECHNOLOGY", category: "Spin Motor (Copper)", modelNo: "Spin Motor SS", brandCode: "SS", description: "Copper Winding Spin Motor", image: productImageUrl },
    { id: 145, name: "Spin Motor VC", company: "DONGHAI TECHNOLOGY", category: "Spin Motor (Copper)", modelNo: "Spin Motor VC", brandCode: "VC", description: "Copper Winding Spin Motor", image: productImageUrl },
    { id: 146, name: "Spin Motor WP8/GOD", company: "DONGHAI TECHNOLOGY", category: "Spin Motor (Copper)", modelNo: "Spin Motor WP8/GOD", brandCode: "WP/GOD", description: "Copper Winding Spin Motor", image: productImageUrl },
    { id: 147, name: "Spin Motor Multi", company: "DONGHAI TECHNOLOGY", category: "Spin Motor (Copper)", modelNo: "Spin Motor Multi", brandCode: "MULTI", description: "Copper Winding Spin Motor", image: productImageUrl },
    { id: 148, name: "Spin Motor GL9KG", company: "DONGHAI TECHNOLOGY", category: "Spin Motor (Copper)", modelNo: "Spin Motor GL9KG", brandCode: "GL", description: "Copper Winding Spin Motor (9KG)", image: productImageUrl },
    // DONGHAI TECHNOLOGY Wash Motor (Copper)
    { id: 149, name: "Wash Motor GL", company: "DONGHAI TECHNOLOGY", category: "Wash Motor (Copper)", modelNo: "Wash Motor GL", brandCode: "GL", description: "Copper Winding Wash Motor", image: productImageUrl },
    { id: 150, name: "Wash Motor SS", company: "DONGHAI TECHNOLOGY", category: "Wash Motor (Copper)", modelNo: "Wash Motor SS", brandCode: "SS", description: "Copper Winding Wash Motor", image: productImageUrl },
    { id: 151, name: "Wash Motor ON", company: "DONGHAI TECHNOLOGY", category: "Wash Motor (Copper)", modelNo: "Wash Motor ON", brandCode: "ON", description: "Copper Winding Wash Motor", image: productImageUrl },
    { id: 152, name: "Wash Motor GOD", company: "DONGHAI TECHNOLOGY", category: "Wash Motor (Copper)", modelNo: "Wash Motor GOD", brandCode: "GOD", description: "Copper Winding Wash Motor", image: productImageUrl },
    { id: 153, name: "Wash Motor VC 400T", company: "DONGHAI TECHNOLOGY", category: "Wash Motor (Copper)", modelNo: "Wash Motor VC 400T", brandCode: "VC", description: "Copper Winding Wash Motor", image: productImageUrl },
    { id: 154, name: "Wash Motor VC 6800", company: "DONGHAI TECHNOLOGY", category: "Wash Motor (Copper)", modelNo: "Wash Motor VC 6800", brandCode: "VC", description: "Copper Winding Wash Motor", image: productImageUrl },
    // DONGHAI TECHNOLOGY Wash Motor and Spin Motor 9KG
    { id: 155, name: "Wash Motor WP", company: "DONGHAI TECHNOLOGY", category: "Wash Motor", modelNo: "Wash Motor WP", brandCode: "WP", description: "Washing Machine Wash Motor", image: productImageUrl },
    { id: 156, name: "Spin Motor GL9KG", company: "DONGHAI TECHNOLOGY", category: "Spin Motor", modelNo: "Spin Motor GL9KG", brandCode: "GL", description: "Spin Motor – 9KG Variant", image: productImageUrl },
    // DONGHAI TECHNOLOGY Inlet Valve
    { id: 157, name: "GL 1 Way", company: "DONGHAI TECHNOLOGY", category: "Inlet Valve", modelNo: "GL 1 Way", brandCode: "GL", description: "Washing Machine Inlet Valve", image: productImageUrl },
    { id: 158, name: "GL 2 Way", company: "DONGHAI TECHNOLOGY", category: "Inlet Valve", modelNo: "GL 2 Way", brandCode: "GL", description: "Washing Machine Inlet Valve", image: productImageUrl },
    { id: 159, name: "GL DC 3 Way New", company: "DONGHAI TECHNOLOGY", category: "Inlet Valve", modelNo: "GL DC 3 Way New", brandCode: "GL", description: "DC 3 Way Valve", image: productImageUrl },
    { id: 160, name: "GL DC Red", company: "DONGHAI TECHNOLOGY", category: "Inlet Valve", modelNo: "GL DC Red", brandCode: "GL", description: "DC Valve – Red", image: productImageUrl },
    { id: 161, name: "GL DC Grey", company: "DONGHAI TECHNOLOGY", category: "Inlet Valve", modelNo: "GL DC Grey", brandCode: "GL", description: "DC Valve – Grey", image: productImageUrl },
    { id: 162, name: "GL DC Long 1 Coil", company: "DONGHAI TECHNOLOGY", category: "Inlet Valve", modelNo: "GL DC Long 1 Coil", brandCode: "GL", description: "Long Body – 1 Coil", image: productImageUrl },
    { id: 163, name: "GL DC Long 2 Coil", company: "DONGHAI TECHNOLOGY", category: "Inlet Valve", modelNo: "GL DC Long 2 Coil", brandCode: "GL", description: "Long Body – 2 Coil", image: productImageUrl },
    { id: 164, name: "GL DC Long 3 Coil", company: "DONGHAI TECHNOLOGY", category: "Inlet Valve", modelNo: "GL DC Long 3 Coil", brandCode: "GL", description: "Long Body – 3 Coil", image: productImageUrl },
    { id: 165, name: "GL FL 2 Way", company: "DONGHAI TECHNOLOGY", category: "Inlet Valve", modelNo: "GL FL 2 Way", brandCode: "GL", description: "Front Load Valve", image: productImageUrl },
    { id: 166, name: "GL DC FL 3 Way", company: "DONGHAI TECHNOLOGY", category: "Inlet Valve", modelNo: "GL DC FL 3 Way", brandCode: "GL", description: "Front Load DC Valve", image: productImageUrl },
    { id: 167, name: "VID 1 Way", company: "DONGHAI TECHNOLOGY", category: "Inlet Valve", modelNo: "VID 1 Way", brandCode: "VID", description: "1 Way Valve", image: productImageUrl },
    { id: 168, name: "PNS 2 Way", company: "DONGHAI TECHNOLOGY", category: "Inlet Valve", modelNo: "PNS 2 Way", brandCode: "PNS", description: "2 Way Valve", image: productImageUrl },
    { id: 169, name: "BSH 1 Way", company: "DONGHAI TECHNOLOGY", category: "Inlet Valve", modelNo: "BSH 1 Way", brandCode: "BSH", description: "1 Way Valve", image: productImageUrl },
    { id: 170, name: "BSH 2 Way", company: "DONGHAI TECHNOLOGY", category: "Inlet Valve", modelNo: "BSH 2 Way", brandCode: "BSH", description: "2 Way Valve", image: productImageUrl },
    { id: 171, name: "BSH 2 Way with Sensor", company: "DONGHAI TECHNOLOGY", category: "Inlet Valve", modelNo: "BSH 2 Way with Sensor", brandCode: "BSH", description: "Sensor Type", image: productImageUrl },
    { id: 172, name: "SS 1 Way", company: "DONGHAI TECHNOLOGY", category: "Inlet Valve", modelNo: "SS 1 Way", brandCode: "SS", description: "1 Way Valve", image: productImageUrl },
    { id: 173, name: "SS 2 Way", company: "DONGHAI TECHNOLOGY", category: "Inlet Valve", modelNo: "SS 2 Way", brandCode: "SS", description: "2 Way Valve", image: productImageUrl },
    { id: 174, name: "SS 3 Way", company: "DONGHAI TECHNOLOGY", category: "Inlet Valve", modelNo: "SS 3 Way", brandCode: "SS", description: "3 Way Valve", image: productImageUrl },
    { id: 175, name: "SS DC 1 Way", company: "DONGHAI TECHNOLOGY", category: "Inlet Valve", modelNo: "SS DC 1 Way", brandCode: "SS", description: "DC Valve", image: productImageUrl },
    { id: 176, name: "SS DC 2 Way", company: "DONGHAI TECHNOLOGY", category: "Inlet Valve", modelNo: "SS DC 2 Way", brandCode: "SS", description: "DC Valve", image: productImageUrl },
    { id: 177, name: "SS DC 3 Way", company: "DONGHAI TECHNOLOGY", category: "Inlet Valve", modelNo: "SS DC 3 Way", brandCode: "SS", description: "DC Valve", image: productImageUrl },
    { id: 178, name: "WP 1 Way", company: "DONGHAI TECHNOLOGY", category: "Inlet Valve", modelNo: "WP 1 Way", brandCode: "WP", description: "1 Way Valve", image: productImageUrl },
    { id: 179, name: "IF 2 Way", company: "DONGHAI TECHNOLOGY", category: "Inlet Valve", modelNo: "IF 2 Way", brandCode: "IF", description: "2 Way Valve", image: productImageUrl },
    { id: 180, name: "IF 3 Way", company: "DONGHAI TECHNOLOGY", category: "Inlet Valve", modelNo: "IF 3 Way", brandCode: "IF", description: "3 Way Valve", image: productImageUrl },
    { id: 181, name: "HAR 2 Way", company: "DONGHAI TECHNOLOGY", category: "Inlet Valve", modelNo: "HAR 2 Way", brandCode: "HAR", description: "2 Way Valve", image: productImageUrl },
    // DONGHAI TECHNOLOGY Drain Motor
    { id: 182, name: "Drain Motor GL", company: "DONGHAI TECHNOLOGY", category: "Drain Motor", modelNo: "Drain Motor GL", brandCode: "GL", description: "Washing Machine Drain Motor", image: productImageUrl },
    { id: 183, name: "Drain Motor DC Org.", company: "DONGHAI TECHNOLOGY", category: "Drain Motor", modelNo: "Drain Motor DC Org.", brandCode: "DC", description: "Original Type", image: productImageUrl },
    { id: 184, name: "Drain Motor PNS NKGW Org.", company: "DONGHAI TECHNOLOGY", category: "Drain Motor", modelNo: "Drain Motor PNS NKGW Org.", brandCode: "PNS", description: "Original Type", image: productImageUrl },
    { id: 185, name: "Drain Motor SS White", company: "DONGHAI TECHNOLOGY", category: "Drain Motor", modelNo: "Drain Motor SS White", brandCode: "SS", description: "White Type", image: productImageUrl },
    { id: 186, name: "Drain Motor SS Black", company: "DONGHAI TECHNOLOGY", category: "Drain Motor", modelNo: "Drain Motor SS Black", brandCode: "SS", description: "Black Type", image: productImageUrl },
    { id: 187, name: "Drain Motor IF", company: "DONGHAI TECHNOLOGY", category: "Drain Motor", modelNo: "Drain Motor IF", brandCode: "IF", description: "IF Type", image: productImageUrl },
    { id: 188, name: "Drain Motor HAR", company: "DONGHAI TECHNOLOGY", category: "Drain Motor", modelNo: "Drain Motor HAR", brandCode: "HAR", description: "HAR Type", image: productImageUrl },
    { id: 189, name: "Drain Motor BSH", company: "DONGHAI TECHNOLOGY", category: "Drain Motor", modelNo: "Drain Motor BSH", brandCode: "BSH", description: "BSH Type", image: productImageUrl },
    // DONGHAI TECHNOLOGY Pressure Sensor
    { id: 190, name: "GL", company: "DONGHAI TECHNOLOGY", category: "Pressure Sensor", modelNo: "GL", brandCode: "GL", description: "Washing Machine Pressure Sensor", image: productImageUrl },
    { id: 191, name: "SS", company: "DONGHAI TECHNOLOGY", category: "Pressure Sensor", modelNo: "SS", brandCode: "SS", description: "Washing Machine Pressure Sensor", image: productImageUrl },
    { id: 192, name: "GL NKGW Org", company: "DONGHAI TECHNOLOGY", category: "Pressure Sensor", modelNo: "GL NKGW Org", brandCode: "GL", description: "Original Type", image: productImageUrl },
    { id: 193, name: "GL NKGW Org FL", company: "DONGHAI TECHNOLOGY", category: "Pressure Sensor", modelNo: "GL NKGW Org FL", brandCode: "GL", description: "Front Load Type", image: productImageUrl },
    { id: 194, name: "SS NKGW Org FL", company: "DONGHAI TECHNOLOGY", category: "Pressure Sensor", modelNo: "SS NKGW Org FL", brandCode: "SS", description: "Front Load Type", image: productImageUrl },
    { id: 195, name: "SS Blue FL", company: "DONGHAI TECHNOLOGY", category: "Pressure Sensor", modelNo: "SS Blue FL", brandCode: "SS", description: "Front Load Blue Type", image: productImageUrl },
    { id: 196, name: "HAR 2 Pin", company: "DONGHAI TECHNOLOGY", category: "Pressure Sensor", modelNo: "HAR 2 Pin", brandCode: "HAR", description: "2 Pin Type", image: productImageUrl },
    { id: 197, name: "HAR New", company: "DONGHAI TECHNOLOGY", category: "Pressure Sensor", modelNo: "HAR New", brandCode: "HAR", description: "New Variant", image: productImageUrl },
    { id: 198, name: "VOL BIKO", company: "DONGHAI TECHNOLOGY", category: "Pressure Sensor", modelNo: "VOL BIKO", brandCode: "VOL", description: "Pressure Sensor", image: productImageUrl },
    { id: 199, name: "PNS", company: "DONGHAI TECHNOLOGY", category: "Pressure Sensor", modelNo: "PNS", brandCode: "PNS", description: "Pressure Sensor", image: productImageUrl },
    { id: 200, name: "GOD", company: "DONGHAI TECHNOLOGY", category: "Pressure Sensor", modelNo: "GOD", brandCode: "GOD", description: "Pressure Sensor", image: productImageUrl },
    { id: 201, name: "Universal", company: "DONGHAI TECHNOLOGY", category: "Pressure Sensor", modelNo: "Universal", brandCode: "UNIVERSAL", description: "Universal Type", image: productImageUrl },
    { id: 202, name: "IF Red", company: "DONGHAI TECHNOLOGY", category: "Pressure Sensor", modelNo: "IF Red", brandCode: "IF", description: "Red Type", image: productImageUrl },
    { id: 203, name: "BSH", company: "DONGHAI TECHNOLOGY", category: "Pressure Sensor", modelNo: "BSH", brandCode: "BSH", description: "Pressure Sensor", image: productImageUrl },
    { id: 204, name: "LYD", company: "DONGHAI TECHNOLOGY", category: "Pressure Sensor", modelNo: "LYD", brandCode: "LYD", description: "Pressure Sensor", image: productImageUrl },
    // DONGHAI TECHNOLOGY Clutch Mechanism
    { id: 205, name: "GL Single Gear", company: "DONGHAI TECHNOLOGY", category: "Clutch Mechanism", modelNo: "GL Single Gear", brandCode: "GL", description: "Washing Machine Clutch", image: productImageUrl },
    { id: 206, name: "GL Double Gear", company: "DONGHAI TECHNOLOGY", category: "Clutch Mechanism", modelNo: "GL Double Gear", brandCode: "GL", description: "Washing Machine Clutch", image: productImageUrl },
    { id: 207, name: "GL 12KG", company: "DONGHAI TECHNOLOGY", category: "Clutch Mechanism", modelNo: "GL 12KG", brandCode: "GL", description: "12KG Variant", image: productImageUrl },
    { id: 208, name: "SS Double Gear", company: "DONGHAI TECHNOLOGY", category: "Clutch Mechanism", modelNo: "SS Double Gear", brandCode: "SS", description: "Washing Machine Clutch", image: productImageUrl },
    { id: 209, name: "IF New", company: "DONGHAI TECHNOLOGY", category: "Clutch Mechanism", modelNo: "IF New", brandCode: "IF", description: "New Type Clutch", image: productImageUrl },
    // DONGHAI TECHNOLOGY Half/Full Plate
    { id: 210, name: "IF Half Plate", company: "DONGHAI TECHNOLOGY", category: "Half Plate", modelNo: "IF Half Plate", brandCode: "IF", description: "Washing Machine Half Plate", image: productImageUrl },
    { id: 211, name: "IF Full Plate", company: "DONGHAI TECHNOLOGY", category: "Full Plate", modelNo: "IF Full Plate", brandCode: "IF", description: "Washing Machine Full Plate", image: productImageUrl },
    { id: 212, name: "HAR Half Plate", company: "DONGHAI TECHNOLOGY", category: "Half Plate", modelNo: "HAR Half Plate", brandCode: "HAR", description: "Washing Machine Half Plate", image: productImageUrl },
    { id: 213, name: "HAR Full Plate", company: "DONGHAI TECHNOLOGY", category: "Full Plate", modelNo: "HAR Full Plate", brandCode: "HAR", description: "Washing Machine Full Plate", image: productImageUrl },
    { id: 214, name: "LHO Half Plate", company: "DONGHAI TECHNOLOGY", category: "Half Plate", modelNo: "LHO Half Plate", brandCode: "LHO", description: "Washing Machine Half Plate", image: productImageUrl },
    { id: 215, name: "LHO Full Plate", company: "DONGHAI TECHNOLOGY", category: "Full Plate", modelNo: "LHO Full Plate", brandCode: "LHO", description: "Washing Machine Full Plate", image: productImageUrl },
    // DONGHAI TECHNOLOGY Hub / Drum Spider
    { id: 216, name: "GL", company: "DONGHAI TECHNOLOGY", category: "Hub / Drum Spider", modelNo: "GL", brandCode: "GL", description: "Washing Machine Hub", image: productImageUrl },
    { id: 217, name: "SS Old", company: "DONGHAI TECHNOLOGY", category: "Hub / Drum Spider", modelNo: "SS Old", brandCode: "SS", description: "Old Model", image: productImageUrl },
    { id: 218, name: "SS New", company: "DONGHAI TECHNOLOGY", category: "Hub / Drum Spider", modelNo: "SS New", brandCode: "SS", description: "New Model", image: productImageUrl },
    { id: 219, name: "WPL 4 Pin", company: "DONGHAI TECHNOLOGY", category: "Hub / Drum Spider", modelNo: "WPL 4 Pin", brandCode: "WPL", description: "4 Pin Type", image: productImageUrl },
    { id: 220, name: "WPL 123", company: "DONGHAI TECHNOLOGY", category: "Hub / Drum Spider", modelNo: "WPL 123", brandCode: "WPL", description: "Model 123", image: productImageUrl },
    { id: 221, name: "Imported GL901 4\"", company: "DONGHAI TECHNOLOGY", category: "Hub / Drum Spider", modelNo: "Imported GL901 4\"", brandCode: "GL", description: "Imported Type", image: productImageUrl },
    { id: 222, name: "Imported SS DC97-15971A", company: "DONGHAI TECHNOLOGY", category: "Hub / Drum Spider", modelNo: "Imported SS DC97-15971A", brandCode: "SS", description: "Imported Type", image: productImageUrl },
    { id: 223, name: "Imported IF 2 Hole Thin Org", company: "DONGHAI TECHNOLOGY", category: "Hub / Drum Spider", modelNo: "Imported IF 2 Hole Thin Org", brandCode: "IF", description: "Imported Type", image: productImageUrl },
    { id: 224, name: "Imported BSH", company: "DONGHAI TECHNOLOGY", category: "Hub / Drum Spider", modelNo: "Imported BSH", brandCode: "BSH", description: "Imported Type", image: productImageUrl },
    // DONGHAI TECHNOLOGY Gasket
    { id: 225, name: "GL 1001A", company: "DONGHAI TECHNOLOGY", category: "Gasket", modelNo: "GL 1001A", brandCode: "GL", description: "Front Load Gasket", image: productImageUrl },
    { id: 226, name: "GL 1003A", company: "DONGHAI TECHNOLOGY", category: "Gasket", modelNo: "GL 1003A", brandCode: "GL", description: "Front Load Gasket", image: productImageUrl },
    { id: 227, name: "SS 1664A", company: "DONGHAI TECHNOLOGY", category: "Gasket", modelNo: "SS 1664A", brandCode: "SS", description: "Front Load Gasket", image: productImageUrl },
    { id: 228, name: "Gasket Ring with Spring", company: "DONGHAI TECHNOLOGY", category: "Gasket", modelNo: "Gasket Ring with Spring", brandCode: "—", description: "Ring with Spring", image: productImageUrl },
    // DONGHAI TECHNOLOGY Drain Pump
    { id: 229, name: "IF Small", company: "DONGHAI TECHNOLOGY", category: "Drain Pump", modelNo: "IF Small", brandCode: "IF", description: "Washing Machine Drain Pump", image: productImageUrl },
    { id: 230, name: "IF Single", company: "DONGHAI TECHNOLOGY", category: "Drain Pump", modelNo: "IF Single", brandCode: "IF", description: "Washing Machine Drain Pump", image: productImageUrl },
    { id: 231, name: "IF Double", company: "DONGHAI TECHNOLOGY", category: "Drain Pump", modelNo: "IF Double", brandCode: "IF", description: "Washing Machine Drain Pump", image: productImageUrl },
    { id: 232, name: "SSN-01", company: "DONGHAI TECHNOLOGY", category: "Drain Pump", modelNo: "SSN-01", brandCode: "SSN", description: "Drain Pump", image: productImageUrl },
    { id: 233, name: "GL", company: "DONGHAI TECHNOLOGY", category: "Drain Pump", modelNo: "GL", brandCode: "GL", description: "Drain Pump", image: productImageUrl },
    { id: 234, name: "GL DC", company: "DONGHAI TECHNOLOGY", category: "Drain Pump", modelNo: "GL DC", brandCode: "GL", description: "DC Type Drain Pump", image: productImageUrl },
    // DONGHAI TECHNOLOGY Door Lock
    { id: 235, name: "Door Lock IF", company: "DONGHAI TECHNOLOGY", category: "Door Lock", modelNo: "Door Lock IF", brandCode: "IF", description: "Washing Machine Door Lock", image: productImageUrl },
    { id: 236, name: "Door Lock GL", company: "DONGHAI TECHNOLOGY", category: "Door Lock", modelNo: "Door Lock GL", brandCode: "GL", description: "Washing Machine Door Lock", image: productImageUrl },
    { id: 237, name: "Door Lock SS", company: "DONGHAI TECHNOLOGY", category: "Door Lock", modelNo: "Door Lock SS", brandCode: "SS", description: "Washing Machine Door Lock", image: productImageUrl },
    { id: 238, name: "Door Lock GL INVTR", company: "DONGHAI TECHNOLOGY", category: "Door Lock", modelNo: "Door Lock GL INVTR", brandCode: "GL", description: "Inverter Type", image: productImageUrl },
    // DONGHAI TECHNOLOGY Hall Sensor
    { id: 239, name: "Hall Sensor GL 2001A", company: "DONGHAI TECHNOLOGY", category: "Hall Sensor", modelNo: "Hall Sensor GL 2001A", brandCode: "GL", description: "Hall Sensor", image: productImageUrl },
    { id: 240, name: "Hall Sensor SS", company: "DONGHAI TECHNOLOGY", category: "Hall Sensor", modelNo: "Hall Sensor SS", brandCode: "SS", description: "Hall Sensor", image: productImageUrl },
    // DONGHAI TECHNOLOGY Shocker
    { id: 241, name: "Shocker Multi", company: "DONGHAI TECHNOLOGY", category: "Shocker", modelNo: "Shocker Multi", brandCode: "MULTI", description: "Washing Machine Shocker", image: productImageUrl },
    { id: 242, name: "Shocker GL", company: "DONGHAI TECHNOLOGY", category: "Shocker", modelNo: "Shocker GL", brandCode: "GL", description: "Washing Machine Shocker", image: productImageUrl },
    { id: 243, name: "Shocker SS 21\"", company: "DONGHAI TECHNOLOGY", category: "Shocker", modelNo: "Shocker SS 21\"", brandCode: "SS", description: "21 Inch", image: productImageUrl },
    { id: 244, name: "Shocker SS 21.5\" Hybrid", company: "DONGHAI TECHNOLOGY", category: "Shocker", modelNo: "Shocker SS 21.5\" Hybrid", brandCode: "SS", description: "Hybrid Type", image: productImageUrl },
    { id: 245, name: "Shocker IF 22/23/24\"", company: "DONGHAI TECHNOLOGY", category: "Shocker", modelNo: "Shocker IF 22/23/24\"", brandCode: "IF", description: "Multi Size", image: productImageUrl },
    { id: 246, name: "Shocker BSH 21.5\"", company: "DONGHAI TECHNOLOGY", category: "Shocker", modelNo: "Shocker BSH 21.5\"", brandCode: "BSH", description: "21.5 Inch", image: productImageUrl },
    { id: 247, name: "Shocker WP L1/L2", company: "DONGHAI TECHNOLOGY", category: "Shocker", modelNo: "Shocker WP L1/L2", brandCode: "WP", description: "L1/L2 Variant", image: productImageUrl },
    { id: 248, name: "Shocker GL FL", company: "DONGHAI TECHNOLOGY", category: "Shocker", modelNo: "Shocker GL FL", brandCode: "GL", description: "Front Load", image: productImageUrl },
    { id: 249, name: "Shocker SS FL", company: "DONGHAI TECHNOLOGY", category: "Shocker", modelNo: "Shocker SS FL", brandCode: "SS", description: "Front Load", image: productImageUrl },
    { id: 250, name: "Shocker BSH FL", company: "DONGHAI TECHNOLOGY", category: "Shocker", modelNo: "Shocker BSH FL", brandCode: "BSH", description: "Front Load", image: productImageUrl },
    { id: 251, name: "Shocker IF FL", company: "DONGHAI TECHNOLOGY", category: "Shocker", modelNo: "Shocker IF FL", brandCode: "IF", description: "Front Load", image: productImageUrl },
    // DONGHAI TECHNOLOGY Pipe
    { id: 252, name: "Outlet Pipe 1.5 Mtr", company: "DONGHAI TECHNOLOGY", category: "Pipe", modelNo: "Outlet Pipe 1.5 Mtr", brandCode: "—", description: "Outlet Pipe", image: productImageUrl },
    { id: 253, name: "Outlet Pipe 3 Mtr", company: "DONGHAI TECHNOLOGY", category: "Pipe", modelNo: "Outlet Pipe 3 Mtr", brandCode: "—", description: "Outlet Pipe", image: productImageUrl },
    { id: 254, name: "Outlet Pipe Grey", company: "DONGHAI TECHNOLOGY", category: "Pipe", modelNo: "Outlet Pipe Grey", brandCode: "—", description: "Outlet Pipe", image: productImageUrl },
    { id: 255, name: "Inlet Pipe Fully Auto 1.5–5 Mtr", company: "DONGHAI TECHNOLOGY", category: "Pipe", modelNo: "Inlet Pipe Fully Auto 1.5–5 Mtr", brandCode: "—", description: "Inlet Pipe", image: productImageUrl },
    // DONGHAI TECHNOLOGY Bellow
    { id: 256, name: "GD Universal", company: "DONGHAI TECHNOLOGY", category: "Bellow", modelNo: "GD Universal", brandCode: "GD", description: "Washing Machine Bellow", image: productImageUrl },
    { id: 257, name: "GL", company: "DONGHAI TECHNOLOGY", category: "Bellow", modelNo: "GL", brandCode: "GL", description: "Washing Machine Bellow", image: productImageUrl },
    { id: 258, name: "SS 9800", company: "DONGHAI TECHNOLOGY", category: "Bellow", modelNo: "SS 9800", brandCode: "SS", description: "Washing Machine Bellow", image: productImageUrl },
    { id: 259, name: "WP Big", company: "DONGHAI TECHNOLOGY", category: "Bellow", modelNo: "WP Big", brandCode: "WP", description: "Washing Machine Bellow", image: productImageUrl },
    { id: 260, name: "VC", company: "DONGHAI TECHNOLOGY", category: "Bellow", modelNo: "VC", brandCode: "VC", description: "Washing Machine Bellow", image: productImageUrl },
    // DONGHAI TECHNOLOGY Spare Part
    { id: 261, name: "Drain Assembly GL Fully Auto", company: "DONGHAI TECHNOLOGY", category: "Spare Part", modelNo: "Drain Assembly GL Fully Auto", brandCode: "GL", description: "Drain Assembly", image: productImageUrl },
    { id: 262, name: "Drain Assembly SS Fully Auto", company: "DONGHAI TECHNOLOGY", category: "Spare Part", modelNo: "Drain Assembly SS Fully Auto", brandCode: "SS", description: "Drain Assembly", image: productImageUrl },
    { id: 263, name: "Drain Assembly VC", company: "DONGHAI TECHNOLOGY", category: "Spare Part", modelNo: "Drain Assembly VC", brandCode: "VC", description: "Drain Assembly", image: productImageUrl },
    { id: 264, name: "Brake Wheel All Models", company: "DONGHAI TECHNOLOGY", category: "Spare Part", modelNo: "Brake Wheel All Models", brandCode: "—", description: "Brake Wheel", image: productImageUrl },
    { id: 265, name: "Motor Pulley All Models", company: "DONGHAI TECHNOLOGY", category: "Spare Part", modelNo: "Motor Pulley All Models", brandCode: "—", description: "Motor Pulley", image: productImageUrl },
    { id: 266, name: "Vee Wash Belts All Models", company: "DONGHAI TECHNOLOGY", category: "Spare Part", modelNo: "Vee Wash Belts All Models", brandCode: "—", description: "Belt", image: productImageUrl },
    { id: 267, name: "Washing Machine Capacitor", company: "DONGHAI TECHNOLOGY", category: "Spare Part", modelNo: "Washing Machine Capacitor", brandCode: "—", description: "Capacitor", image: productImageUrl },
    { id: 268, name: "Adapter Blue", company: "DONGHAI TECHNOLOGY", category: "Spare Part", modelNo: "Adapter Blue", brandCode: "—", description: "Adapter", image: productImageUrl },
    { id: 269, name: "Adapter White", company: "DONGHAI TECHNOLOGY", category: "Spare Part", modelNo: "Adapter White", brandCode: "—", description: "Adapter", image: productImageUrl },
    // DONGHAI TECHNOLOGY Magnetron, Oven Motor, Kettle Spare
    { id: 270, name: "Witol 210 Org (6 Fin)", company: "DONGHAI TECHNOLOGY", category: "Magnetron", modelNo: "Witol 210 Org (6 Fin)", brandCode: "WITOL", description: "Microwave Magnetron", image: productImageUrl },
    { id: 271, name: "GL 213 Org (6 Fin)", company: "DONGHAI TECHNOLOGY", category: "Magnetron", modelNo: "GL 213 Org (6 Fin)", brandCode: "GL", description: "Microwave Magnetron", image: productImageUrl },
    { id: 272, name: "Witol 214 Org (6 Fin)", company: "DONGHAI TECHNOLOGY", category: "Magnetron", modelNo: "Witol 214 Org (6 Fin)", brandCode: "WITOL", description: "Microwave Magnetron", image: productImageUrl },
    { id: 273, name: "Witol 610 Org (6 Fin)", company: "DONGHAI TECHNOLOGY", category: "Magnetron", modelNo: "Witol 610 Org (6 Fin)", brandCode: "WITOL", description: "Microwave Magnetron", image: productImageUrl },
    { id: 274, name: "Oven 2 Pin Motor", company: "DONGHAI TECHNOLOGY", category: "Oven Motor", modelNo: "Oven 2 Pin Motor", brandCode: "—", description: "Oven Motor", image: productImageUrl },
    { id: 275, name: "Oven 3 Pin Motor", company: "DONGHAI TECHNOLOGY", category: "Oven Motor", modelNo: "Oven 3 Pin Motor", brandCode: "—", description: "Oven Motor", image: productImageUrl },
    { id: 276, name: "Kettle Thermostat Single Point", company: "DONGHAI TECHNOLOGY", category: "Kettle Spare", modelNo: "Kettle Thermostat Single Point", brandCode: "—", description: "Thermostat", image: productImageUrl },
    { id: 277, name: "Kettle Thermostat Double Point", company: "DONGHAI TECHNOLOGY", category: "Kettle Spare", modelNo: "Kettle Thermostat Double Point", brandCode: "—", description: "Thermostat", image: productImageUrl },
    { id: 278, name: "Kettle Switch", company: "DONGHAI TECHNOLOGY", category: "Kettle Spare", modelNo: "Kettle Switch", brandCode: "—", description: "Kettle Switch", image: productImageUrl },
    // DONGHAI TECHNOLOGY Fan Motor
    { id: 279, name: "Ventilation Fan Motor", company: "DONGHAI TECHNOLOGY", category: "Fan Motor", modelNo: "Ventilation Fan Motor", brandCode: "—", description: "Fan Motor", image: productImageUrl },
    { id: 280, name: "Table/Pedestal Fan Motor", company: "DONGHAI TECHNOLOGY", category: "Fan Motor", modelNo: "Table/Pedestal Fan Motor", brandCode: "—", description: "Fan Motor", image: productImageUrl },
    { id: 281, name: "Wall Fan Motor", company: "DONGHAI TECHNOLOGY", category: "Fan Motor", modelNo: "Wall Fan Motor", brandCode: "—", description: "Fan Motor", image: productImageUrl },
    // SYMBOL Axial Fan
    { id: 282, name: "YWF4E-200S-01", company: "SYMBOL", category: "Axial Fan", modelNo: "YWF4E-200S-01", brandCode: "YWF", description: "200mm Single Phase Suction Fan", image: productImageUrl },
    { id: 283, name: "YWF4E-250S-02", company: "SYMBOL", category: "Axial Fan", modelNo: "YWF4E-250S-02", brandCode: "YWF", description: "250mm Single Phase Suction Fan", image: productImageUrl },
    { id: 284, name: "YWF4E-300S-03", company: "SYMBOL", category: "Axial Fan", modelNo: "YWF4E-300S-03", brandCode: "YWF", description: "300mm Single Phase Suction Fan", image: productImageUrl },
    { id: 285, name: "YWF4E-350S-04", company: "SYMBOL", category: "Axial Fan", modelNo: "YWF4E-350S-04", brandCode: "YWF", description: "350mm Single Phase Suction Fan", image: productImageUrl },
    { id: 286, name: "YWF4E-400S-05", company: "SYMBOL", category: "Axial Fan", modelNo: "YWF4E-400S-05", brandCode: "YWF", description: "400mm Single Phase Suction Fan", image: productImageUrl },
    { id: 287, name: "YWF4E-450S-06", company: "SYMBOL", category: "Axial Fan", modelNo: "YWF4E-450S-06", brandCode: "YWF", description: "450mm Single Phase Suction Fan", image: productImageUrl },
    { id: 288, name: "YWF4E-500S-07", company: "SYMBOL", category: "Axial Fan", modelNo: "YWF4E-500S-07", brandCode: "YWF", description: "500mm Single Phase Suction Fan", image: productImageUrl },
    { id: 289, name: "YWF4E-550S-08", company: "SYMBOL", category: "Axial Fan", modelNo: "YWF4E-550S-08", brandCode: "YWF", description: "550mm Single Phase Suction Fan", image: productImageUrl },
    { id: 290, name: "YWF4E-600S-09", company: "SYMBOL", category: "Axial Fan", modelNo: "YWF4E-600S-09", brandCode: "YWF", description: "600mm Single Phase Suction Fan", image: productImageUrl },
    { id: 291, name: "YWF4E-630S-10", company: "SYMBOL", category: "Axial Fan", modelNo: "YWF4E-630S-10", brandCode: "YWF", description: "630mm Single Phase Suction Fan", image: productImageUrl },
    // SYMBOL Shaded Pole Motor
    { id: 292, name: "YZF5-13-18-A", company: "SYMBOL", category: "Shaded Pole Motor", modelNo: "YZF5-13-18-A", brandCode: "YZF", description: "5W Shaded Pole Motor", image: productImageUrl },
    { id: 293, name: "YZF10-20-18-B", company: "SYMBOL", category: "Shaded Pole Motor", modelNo: "YZF10-20-18-B", brandCode: "YZF", description: "10W Shaded Pole Motor", image: productImageUrl },
    { id: 294, name: "YZF16-25-18-C", company: "SYMBOL", category: "Shaded Pole Motor", modelNo: "YZF16-25-18-C", brandCode: "YZF", description: "16W Shaded Pole Motor", image: productImageUrl },
    { id: 295, name: "YZF25-40-18-D", company: "SYMBOL", category: "Shaded Pole Motor", modelNo: "YZF25-40-18-D", brandCode: "YZF", description: "25W Shaded Pole Motor", image: productImageUrl },
    { id: 296, name: "YZF34-45-18-E", company: "SYMBOL", category: "Shaded Pole Motor", modelNo: "YZF34-45-18-E", brandCode: "YZF", description: "34W Shaded Pole Motor", image: productImageUrl },
    // SYMBOL Pressure Gauge, Gauge Manifold, Digital Gauge
    { id: 297, name: "SR-250-R22-01", company: "SYMBOL", category: "Pressure Gauge", modelNo: "SR-250-R22-01", brandCode: "SR", description: "250 PSI R22 Gauge", image: productImageUrl },
    { id: 298, name: "SR-500-R22-02", company: "SYMBOL", category: "Pressure Gauge", modelNo: "SR-500-R22-02", brandCode: "SR", description: "500 PSI R22 Gauge", image: productImageUrl },
    { id: 299, name: "SR-800-R410-03", company: "SYMBOL", category: "Pressure Gauge", modelNo: "SR-800-R410-03", brandCode: "SR", description: "800 PSI R410 Gauge", image: productImageUrl },
    { id: 300, name: "SR-536A-04", company: "SYMBOL", category: "Gauge Manifold", modelNo: "SR-536A-04", brandCode: "SR", description: "Double Gauge Manifold", image: productImageUrl },
    { id: 301, name: "SR-560B-05", company: "SYMBOL", category: "Gauge Manifold", modelNo: "SR-560B-05", brandCode: "SR", description: "Double Gauge with Hose", image: productImageUrl },
    { id: 302, name: "SR-250DG-06", company: "SYMBOL", category: "Digital Gauge", modelNo: "SR-250DG-06", brandCode: "SR", description: "Digital Refrigerant Gauge", image: productImageUrl },
    { id: 303, name: "SR-500DG-07", company: "SYMBOL", category: "Digital Gauge", modelNo: "SR-500DG-07", brandCode: "SR", description: "Digital Refrigerant Gauge", image: productImageUrl },
    // SYMBOL Charging Hose
    { id: 304, name: "SR12236P-01", company: "SYMBOL", category: "Charging Hose", modelNo: "SR12236P-01", brandCode: "SR", description: "3 Ft 500–2500 PSI Hose", image: productImageUrl },
    { id: 305, name: "SR12260P-02", company: "SYMBOL", category: "Charging Hose", modelNo: "SR12260P-02", brandCode: "SR", description: "5 Ft 500–2500 PSI Hose", image: productImageUrl },
    { id: 306, name: "SR41036P-03", company: "SYMBOL", category: "Charging Hose", modelNo: "SR41036P-03", brandCode: "SR", description: "R410A 3 Ft Charging Hose", image: productImageUrl },
    { id: 307, name: "SR122236BV-04", company: "SYMBOL", category: "Charging Hose", modelNo: "SR122236BV-04", brandCode: "SR", description: "Charging Hose with Ball Valve", image: productImageUrl },
    // SYMBOL Tool Kit, Tube Cutter, Service Tool
    { id: 308, name: "SR-275-A", company: "SYMBOL", category: "Tool Kit", modelNo: "SR-275-A", brandCode: "SR", description: "Standard Flaring Tool Kit", image: productImageUrl },
    { id: 309, name: "SR-278-B", company: "SYMBOL", category: "Tool Kit", modelNo: "SR-278-B", brandCode: "SR", description: "Premium Flaring Kit", image: productImageUrl },
    { id: 310, name: "SR-127-A", company: "SYMBOL", category: "Tube Cutter", modelNo: "SR-127-A", brandCode: "SR", description: "Mini Tube Cutter Zinc Body", image: productImageUrl },
    { id: 311, name: "SR-274-B", company: "SYMBOL", category: "Tube Cutter", modelNo: "SR-274-B", brandCode: "SR", description: "Aluminum Alloy Tube Cutter", image: productImageUrl },
    { id: 312, name: "SR-369-C", company: "SYMBOL", category: "Service Tool", modelNo: "SR-369-C", brandCode: "SR", description: "3-in-1 Tube Bender", image: productImageUrl },
    { id: 313, name: "SR-622-D", company: "SYMBOL", category: "Service Tool", modelNo: "SR-622-D", brandCode: "SR", description: "Tube Expander", image: productImageUrl },
    // SYMBOL Ball Valve, Control Valve, Access Valve, AC Service Valve
    { id: 314, name: "SR-BV014-01", company: "SYMBOL", category: "Ball Valve", modelNo: "SR-BV014-01", brandCode: "SR", description: "1/4 x 1/4 Ball Valve", image: productImageUrl },
    { id: 315, name: "SR-BV516-02", company: "SYMBOL", category: "Ball Valve", modelNo: "SR-BV516-02", brandCode: "SR", description: "1/4 x 5/16 Ball Valve", image: productImageUrl },
    { id: 316, name: "SR-CV014P-03", company: "SYMBOL", category: "Control Valve", modelNo: "SR-CV014P-03", brandCode: "SR", description: "Premium Control Valve", image: productImageUrl },
    { id: 317, name: "SR-110-04", company: "SYMBOL", category: "Access Valve", modelNo: "SR-110-04", brandCode: "SR", description: "Access Valve 1/4x100mm", image: productImageUrl },
    { id: 318, name: "SR-466P-05", company: "SYMBOL", category: "AC Service Valve", modelNo: "SR-466P-05", brandCode: "SR", description: "Three Way Valve with Sight Glass", image: productImageUrl },
    // SYMBOL Thermostat
    { id: 319, name: "RAD-GL-01", company: "SYMBOL", category: "Thermostat", modelNo: "RAD-GL-01", brandCode: "RAD", description: "Refrigerator Thermostat", image: productImageUrl },
    { id: 320, name: "RAD-SS-02", company: "SYMBOL", category: "Thermostat", modelNo: "RAD-SS-02", brandCode: "RAD", description: "Deep Freezer Thermostat", image: productImageUrl },
    { id: 321, name: "RAD-WC-03", company: "SYMBOL", category: "Thermostat", modelNo: "RAD-WC-03", brandCode: "RAD", description: "Water Cooler Thermostat", image: productImageUrl },
    { id: 322, name: "RAD-BC-04", company: "SYMBOL", category: "Thermostat", modelNo: "RAD-BC-04", brandCode: "RAD", description: "Bottle Cooler Thermostat", image: productImageUrl },
    // SYMBOL Gear Box
    { id: 323, name: "SR-001-A", company: "SYMBOL", category: "Gear Box", modelNo: "SR-001-A", brandCode: "SR", description: "Washing Machine Gear Box", image: productImageUrl },
    { id: 324, name: "SR-016-B", company: "SYMBOL", category: "Gear Box", modelNo: "SR-016-B", brandCode: "SR", description: "OND New Type Gear Box", image: productImageUrl },
    { id: 325, name: "SR-021-C", company: "SYMBOL", category: "Gear Box", modelNo: "SR-021-C", brandCode: "SR", description: "GL Big Pulley Gear Box", image: productImageUrl },
    { id: 326, name: "SR-023-D", company: "SYMBOL", category: "Gear Box", modelNo: "SR-023-D", brandCode: "SR", description: "WP Long Gear Box", image: productImageUrl },
    // SYMBOL Spin Motor, Wash Motor
    { id: 327, name: "SM-AL-GL-01", company: "SYMBOL", category: "Spin Motor", modelNo: "SM-AL-GL-01", brandCode: "GL", description: "Aluminum Spin Motor", image: productImageUrl },
    { id: 328, name: "SM-WP-SS-02", company: "SYMBOL", category: "Spin Motor", modelNo: "SM-WP-SS-02", brandCode: "SS", description: "Waterproof Spin Motor", image: productImageUrl },
    { id: 329, name: "SM-CU-VC-03", company: "SYMBOL", category: "Spin Motor", modelNo: "SM-CU-VC-03", brandCode: "VC", description: "Copper Spin Motor", image: productImageUrl },
    { id: 330, name: "WM-AL-GL-04", company: "SYMBOL", category: "Wash Motor", modelNo: "WM-AL-GL-04", brandCode: "GL", description: "Aluminum Wash Motor", image: productImageUrl },
    { id: 331, name: "WM-CU-WP-05", company: "SYMBOL", category: "Wash Motor", modelNo: "WM-CU-WP-05", brandCode: "WP", description: "Copper Wash Motor", image: productImageUrl },
  { id: 14, name: "Refrigerator AC Motor", company: "SYMBOL", category: "AC Motor", modelNo: "SR-GD-AC", brandCode: "GD", description: "Refrigerator AC Motor", image: productImageUrl },
  { id: 15, name: "Refrigerator AC Motor", company: "SYMBOL", category: "AC Motor", modelNo: "SR-WPL-AC", brandCode: "WPL", description: "Refrigerator AC Motor", image: productImageUrl },
  { id: 16, name: "Refrigerator AC Motor", company: "SYMBOL", category: "AC Motor", modelNo: "SR-WPS-AC", brandCode: "WPS", description: "Refrigerator AC Motor", image: productImageUrl },
  // New products
  { id: 17, name: "Aluminum Winding Motor", company: "SYMBOL", category: "High Pressure Washer", modelNo: "SR-1800", brandCode: "SR", description: "Aluminum Winding Motor", image: productImageUrl },
  { id: 18, name: "Copper Winding Motor", company: "SYMBOL", category: "High Pressure Washer", modelNo: "SR-2000", brandCode: "SR", description: "Copper Winding Motor", image: productImageUrl },
  { id: 19, name: "Aluminum Winding Motor", company: "SYMBOL", category: "High Pressure Washer", modelNo: "SR-1800P", brandCode: "SR", description: "Aluminum Winding Motor", image: productImageUrl },
  { id: 20, name: "With Adjustable Pressure", company: "SYMBOL", category: "High Pressure Washer", modelNo: "SR-1800AP", brandCode: "SR", description: "With Adjustable Pressure", image: productImageUrl },
  { id: 21, name: "Copper Winding Carbon Brush Motor", company: "SYMBOL", category: "High Pressure Washer", modelNo: "SR-1800CB", brandCode: "SR", description: "Copper Winding Carbon Brush Motor", image: productImageUrl },
  { id: 22, name: "Vacuum & Pressure Pump (Copper Winding)", company: "SYMBOL", category: "Vacuum Pump", modelNo: "SR-BL3.8L", brandCode: "SR", description: "Vacuum & Pressure Pump (Copper Winding)", image: productImageUrl },
  { id: 23, name: "Vacuum & Pressure Pump (Copper Winding)", company: "SYMBOL", category: "Vacuum Pump", modelNo: "SRBL4.6L", brandCode: "SR", description: "Vacuum & Pressure Pump (Copper Winding)", image: productImageUrl },
  { id: 24, name: "Vacuum & Pressure Pump (Copper Winding)", company: "SYMBOL", category: "Vacuum Pump", modelNo: "SRBL5.8L", brandCode: "SR", description: "Vacuum & Pressure Pump (Copper Winding)", image: productImageUrl },
  { id: 25, name: "With Oil Separator", company: "SYMBOL", category: "Refrigerant Recovery Unit", modelNo: "REC-500-OS", brandCode: "REC", description: "With Oil Separator", image: productImageUrl },
  { id: 26, name: "With Oil Separator (R32)", company: "SYMBOL", category: "Refrigerant Recovery Unit", modelNo: "REC-500-OSR32", brandCode: "REC", description: "With Oil Separator (R32)", image: productImageUrl },
  { id: 27, name: "Refrigerant Electronic Scale (100kg)", company: "SYMBOL", category: "Electronic Scale", modelNo: "RCS-220V", brandCode: "RCS", description: "Refrigerant Electronic Scale (100kg)", image: productImageUrl },
  { id: 28, name: "5W, 3A, 60Ft Lift", company: "SYMBOL", category: "Condensate Drain Pump", modelNo: "SR-CPF22", brandCode: "SR", description: "5W, 3A, 60Ft Lift", image: productImageUrl },
  { id: 29, name: "5W, 3A, 50Ft Lift", company: "SYMBOL", category: "Condensate Drain Pump", modelNo: "SR-CPD50", brandCode: "SR", description: "5W, 3A, 50Ft Lift", image: productImageUrl },
  { id: 30, name: "5W, 3A, 50Ft Lift", company: "SYMBOL", category: "Condensate Drain Pump", modelNo: "SR-CPD66", brandCode: "SR", description: "5W, 3A, 50Ft Lift", image: productImageUrl },
  { id: 31, name: "70W, 300L/Hour Flow", company: "SYMBOL", category: "Condensate Drain Pump", modelNo: "SR-MPM50", brandCode: "SR", description: "70W, 300L/Hour Flow", image: productImageUrl },
  { id: 32, name: "Flare Type", company: "SYMBOL", category: "Filter Drier", modelNo: "SEK-032", brandCode: "SEK", description: "Flare Type", image: productImageUrl },
  { id: 33, name: "Sealed Type", company: "SYMBOL", category: "Oil Separator", modelNo: "SPLY-5584", brandCode: "SPLY", description: "Sealed Type", image: productImageUrl },
  { id: 34, name: "Flange Type", company: "SYMBOL", category: "Oil Separator", modelNo: "SPLY-5302", brandCode: "SPLY", description: "Flange Type", image: productImageUrl },
  { id: 35, name: "Single Gauge (R22/R134A/R404/R407)", company: "SYMBOL", category: "Gauge Manifold", modelNo: "SR-475BV", brandCode: "SR", description: "Single Gauge (R22/R134A/R404/R407)", image: productImageUrl },
  { id: 36, name: "Double Gauge (With 60” Hose)", company: "SYMBOL", category: "Gauge Manifold", modelNo: "SR-560B", brandCode: "SR", description: "Double Gauge (With 60” Hose)", image: productImageUrl },
  { id: 37, name: "3 Ft Charging Hose", company: "SYMBOL", category: "Charging Hose", modelNo: "SR12236P", brandCode: "SR", description: "3 Ft Charging Hose", image: productImageUrl },
  { id: 38, name: "Car AC Quick Coupler", company: "SYMBOL", category: "Quick Coupler", modelNo: "SR-QC-MH", brandCode: "SR", description: "Car AC Quick Coupler", image: productImageUrl },
  { id: 39, name: "Flaring Tool Kit", company: "SYMBOL", category: "Tool Kit", modelNo: "SR-275", brandCode: "SR", description: "Flaring Tool Kit", image: productImageUrl },
  { id: 40, name: "Mini Tube Cutter", company: "SYMBOL", category: "Tube Cutter", modelNo: "SR-127", brandCode: "SR", description: "Mini Tube Cutter", image: productImageUrl },
  { id: 41, name: "3-in-1 Tube Bender", company: "SYMBOL", category: "Service Tools", modelNo: "SR-369", brandCode: "SR", description: "3-in-1 Tube Bender", image: productImageUrl },
  { id: 42, name: "Single Phase Axial Fan (Suction)", company: "SYMBOL", category: "Axial Fan", modelNo: "YWF4E-200S", brandCode: "YWF", description: "Single Phase Axial Fan (Suction)", image: productImageUrl },
  { id: 43, name: "Copper Winding", company: "SYMBOL", category: "Axial Cooling Fan", modelNo: "FM12038A2HSL", brandCode: "FM", description: "Copper Winding", image: productImageUrl },
  { id: 44, name: "5W Motor", company: "SYMBOL", category: "Shaded Pole Motor", modelNo: "YZF5-13-18", brandCode: "YZF", description: "5W Motor", image: productImageUrl },
  { id: 45, name: "Ball Valve", company: "SYMBOL", category: "Controls", modelNo: "BLR/BV10", brandCode: "BLR", description: "Ball Valve", image: productImageUrl },
  { id: 46, name: "Solenoid Valve with 8W Coil", company: "SYMBOL", category: "Solenoid Valve", modelNo: "SR-108/2", brandCode: "SR", description: "Solenoid Valve with 8W Coil", image: productImageUrl },
  { id: 47, name: "Pressure Switch", company: "SYMBOL", category: "Pressure Switch", modelNo: "HP-250200W", brandCode: "HP", description: "Pressure Switch", image: productImageUrl },
  { id: 48, name: "Self Ignition Hand Torch (Single Barrel)", company: "SYMBOL", category: "Torch", modelNo: "SRHT-S200", brandCode: "SRHT", description: "Self Ignition Hand Torch (Single Barrel)", image: productImageUrl },
  { id: 49, name: "-50°C to +300°C", company: "SYMBOL", category: "Temperature Meter", modelNo: "SR-2S", brandCode: "SR", description: "-50°C to +300°C", image: productImageUrl },
  { id: 50, name: "Digital Clamp Meter", company: "SYMBOL", category: "Clamp Meter", modelNo: "SR-DT203", brandCode: "SR", description: "Digital Clamp Meter", image: productImageUrl },
  { id: 51, name: "Can Valve", company: "SYMBOL", category: "Valves", modelNo: "SR-337A", brandCode: "SR", description: "Can Valve", image: productImageUrl },
  { id: 52, name: "Three Way Valve", company: "SYMBOL", category: "AC Service Valve", modelNo: "SR-466", brandCode: "SR", description: "Three Way Valve", image: productImageUrl },
  { id: 53, name: "Refrigerator AC Motor", company: "SYMBOL", category: "Refrigerator Motor", modelNo: "SR-GL-AC", brandCode: "SR", description: "Refrigerator AC Motor", image: productImageUrl },
  { id: 54, name: "With Knob & Plate", company: "SYMBOL", category: "Thermostat", modelNo: "RAD-GL", brandCode: "RAD", description: "With Knob & Plate", image: productImageUrl },
  { id: 55, name: "Washing Machine Gear Box", company: "SYMBOL", category: "Gear Box", modelNo: "SR-001", brandCode: "SR", description: "Washing Machine Gear Box", image: productImageUrl },
  { id: 56, name: "Aluminum / Waterproof / Copper", company: "SYMBOL", category: "Spin Motor", modelNo: "—", brandCode: "GL / SS / VC", description: "Aluminum / Waterproof / Copper", image: productImageUrl },
  { id: 57, name: "Aluminum / Copper", company: "SYMBOL", category: "Wash Motor", modelNo: "—", brandCode: "GL / SS / VC / WP", description: "Aluminum / Copper", image: productImageUrl },
    // DONGHAI TECHNOLOGY Gear Box
    { id: 90, name: "XD 001-OND", company: "DONGHAI TECHNOLOGY", category: "Gear Box", modelNo: "XD 001-OND", brandCode: "OND", description: "Square Shaft 33mm", image: productImageUrl },
    { id: 91, name: "XD 002-LE OLD", company: "DONGHAI TECHNOLOGY", category: "Gear Box", modelNo: "XD 002-LE OLD", brandCode: "LE", description: "Round Shaft 30mm, 11 Teeth", image: productImageUrl },
    { id: 92, name: "XD 003-VC 400T", company: "DONGHAI TECHNOLOGY", category: "Gear Box", modelNo: "XD 003-VC 400T", brandCode: "VC", description: "Square Shaft 33mm", image: productImageUrl },
    { id: 93, name: "XD 006-NAT/PAN", company: "DONGHAI TECHNOLOGY", category: "Gear Box", modelNo: "XD 006-NAT/PAN", brandCode: "NAT/PAN", description: "Round Shaft 30mm, 11 Teeth", image: productImageUrl },
    { id: 94, name: "XD 007-55BT", company: "DONGHAI TECHNOLOGY", category: "Gear Box", modelNo: "XD 007-55BT", brandCode: "55BT", description: "Round Shaft 35mm, 10 Teeth", image: productImageUrl },
    { id: 95, name: "XD 008-SS", company: "DONGHAI TECHNOLOGY", category: "Gear Box", modelNo: "XD 008-SS", brandCode: "SS", description: "Square Shaft 30mm", image: productImageUrl },
    { id: 96, name: "XD 011-HAR/60HBT", company: "DONGHAI TECHNOLOGY", category: "Gear Box", modelNo: "XD 011-HAR/60HBT", brandCode: "HAR", description: "Round Shaft 35mm, 10 Teeth", image: productImageUrl },
    { id: 97, name: "XD 012-VC MULTI 6800", company: "DONGHAI TECHNOLOGY", category: "Gear Box", modelNo: "XD 012-VC MULTI 6800", brandCode: "VC", description: "Square Shaft 28mm", image: productImageUrl },
    { id: 98, name: "XD 013-GD 6201", company: "DONGHAI TECHNOLOGY", category: "Gear Box", modelNo: "XD 013-GD 6201", brandCode: "GD", description: "Square Shaft 25mm", image: productImageUrl },
    { id: 99, name: "XD 013N-VOL. BIKU", company: "DONGHAI TECHNOLOGY", category: "Gear Box", modelNo: "XD 013N-VOL. BIKU", brandCode: "VOL", description: "Round Shaft 49mm, 11 Teeth", image: productImageUrl },
    { id: 100, name: "XD 016-WP 801", company: "DONGHAI TECHNOLOGY", category: "Gear Box", modelNo: "XD 016-WP 801", brandCode: "WP", description: "Square Shaft 45mm", image: productImageUrl },
    { id: 101, name: "XD 017-TLC/MR", company: "DONGHAI TECHNOLOGY", category: "Gear Box", modelNo: "XD 017-TLC/MR", brandCode: "TLC", description: "Round Shaft 40mm, 10 Teeth", image: productImageUrl },
    { id: 102, name: "XD 018-KNSTR/LYD", company: "DONGHAI TECHNOLOGY", category: "Gear Box", modelNo: "XD 018-KNSTR/LYD", brandCode: "KNSTR", description: "Round Shaft 43mm, 11 Teeth", image: productImageUrl },
    { id: 103, name: "XD 021-LE NEW", company: "DONGHAI TECHNOLOGY", category: "Gear Box", modelNo: "XD 021-LE NEW", brandCode: "LE", description: "Round Shaft 28mm, 11 Teeth", image: productImageUrl },
    { id: 104, name: "XD 022-WP SHORT", company: "DONGHAI TECHNOLOGY", category: "Gear Box", modelNo: "XD 022-WP SHORT", brandCode: "WP", description: "Round Shaft 40mm, 11 Teeth", image: productImageUrl },
    { id: 105, name: "XD 022N-WP SHORT BLUE", company: "DONGHAI TECHNOLOGY", category: "Gear Box", modelNo: "XD 022N-WP SHORT BLUE", brandCode: "WP", description: "Round Shaft 40mm, 11 Teeth", image: productImageUrl },
    { id: 106, name: "XD 023-WP LONG", company: "DONGHAI TECHNOLOGY", category: "Gear Box", modelNo: "XD 023-WP LONG", brandCode: "WP", description: "Round Shaft 45mm, 11 Teeth", image: productImageUrl },
    { id: 107, name: "XD 024-VC 6000", company: "DONGHAI TECHNOLOGY", category: "Gear Box", modelNo: "XD 024-VC 6000", brandCode: "VC", description: "Square Shaft 32mm", image: productImageUrl },
    { id: 108, name: "XD 025-WP 601", company: "DONGHAI TECHNOLOGY", category: "Gear Box", modelNo: "XD 025-WP 601", brandCode: "WP", description: "Square Shaft 35mm", image: productImageUrl },
    { id: 109, name: "XD 026-VC VIRAT 6800", company: "DONGHAI TECHNOLOGY", category: "Gear Box", modelNo: "XD 026-VC VIRAT 6800", brandCode: "VC", description: "Square Shaft 30mm", image: productImageUrl },
    { id: 110, name: "XD 026N-VIRAT 6800 BLUE", company: "DONGHAI TECHNOLOGY", category: "Gear Box", modelNo: "XD 026N-VIRAT 6800 BLUE", brandCode: "VC", description: "Square Shaft 30mm", image: productImageUrl },
    { id: 111, name: "XD 029-LYD LONG", company: "DONGHAI TECHNOLOGY", category: "Gear Box", modelNo: "XD 029-LYD LONG", brandCode: "LYD", description: "Round Shaft 38mm, 11 Teeth", image: productImageUrl },
    { id: 112, name: "XD 031-GD NEW", company: "DONGHAI TECHNOLOGY", category: "Gear Box", modelNo: "XD 031-GD NEW", brandCode: "GD", description: "Square Shaft 28mm", image: productImageUrl },
    { id: 113, name: "XD 033-LYD SHORT", company: "DONGHAI TECHNOLOGY", category: "Gear Box", modelNo: "XD 033-LYD SHORT", brandCode: "LYD", description: "Round Shaft 33mm, 11 Teeth", image: productImageUrl },
    { id: 114, name: "XD 036-SS 9KG", company: "DONGHAI TECHNOLOGY", category: "Gear Box", modelNo: "XD 036-SS 9KG", brandCode: "SS", description: "Round Shaft 35mm, 11 Teeth", image: productImageUrl },
    { id: 115, name: "XD 041-PAN/HR", company: "DONGHAI TECHNOLOGY", category: "Gear Box", modelNo: "XD 041-PAN/HR", brandCode: "PAN/HR", description: "Square Shaft 40mm", image: productImageUrl },
    { id: 116, name: "XD 042-LYD/PAN/HR", company: "DONGHAI TECHNOLOGY", category: "Gear Box", modelNo: "XD 042-LYD/PAN/HR", brandCode: "LYD", description: "Round Shaft 42mm, 11 Teeth", image: productImageUrl },
    // DONGHAI TECHNOLOGY Timer
    { id: 117, name: "Spin Timer GLS", company: "DONGHAI TECHNOLOGY", category: "Timer", modelNo: "Spin Timer GLS", brandCode: "GL", description: "Spin Timer", image: productImageUrl },
    { id: 118, name: "Spin Timer SS", company: "DONGHAI TECHNOLOGY", category: "Timer", modelNo: "Spin Timer SS", brandCode: "SS", description: "Spin Timer", image: productImageUrl },
    { id: 119, name: "Spin Timer ELX", company: "DONGHAI TECHNOLOGY", category: "Timer", modelNo: "Spin Timer ELX", brandCode: "ELX", description: "Spin Timer", image: productImageUrl },
    { id: 120, name: "Spin Timer WP", company: "DONGHAI TECHNOLOGY", category: "Timer", modelNo: "Spin Timer WP", brandCode: "WP", description: "Spin Timer", image: productImageUrl },
    { id: 121, name: "Spin Timer GOD", company: "DONGHAI TECHNOLOGY", category: "Timer", modelNo: "Spin Timer GOD", brandCode: "GOD", description: "Spin Timer", image: productImageUrl },
    { id: 122, name: "Spin Timer VC 6800", company: "DONGHAI TECHNOLOGY", category: "Timer", modelNo: "Spin Timer VC 6800", brandCode: "VC", description: "Spin Timer", image: productImageUrl },
    { id: 123, name: "Timer WP 3W 15Min", company: "DONGHAI TECHNOLOGY", category: "Timer", modelNo: "Timer WP 3W 15Min", brandCode: "WP", description: "3 Wire – 15 Min", image: productImageUrl },
    { id: 124, name: "Timer WP 7W 15Min", company: "DONGHAI TECHNOLOGY", category: "Timer", modelNo: "Timer WP 7W 15Min", brandCode: "WP", description: "7 Wire – 15 Min", image: productImageUrl },
    { id: 125, name: "Timer WP 8W 35Min", company: "DONGHAI TECHNOLOGY", category: "Timer", modelNo: "Timer WP 8W 35Min", brandCode: "WP", description: "8 Wire – 35 Min", image: productImageUrl },
    { id: 126, name: "Timer HR 4PIN 15Min", company: "DONGHAI TECHNOLOGY", category: "Timer", modelNo: "Timer HR 4PIN 15Min", brandCode: "HR", description: "4 Pin – 15 Min", image: productImageUrl },
    { id: 127, name: "Timer 6800 4W 15/35Min", company: "DONGHAI TECHNOLOGY", category: "Timer", modelNo: "Timer 6800 4W 15/35Min", brandCode: "VC", description: "4 Wire – 15/35 Min", image: productImageUrl },
    { id: 128, name: "Timer INTX/LYD 8W 35Min", company: "DONGHAI TECHNOLOGY", category: "Timer", modelNo: "Timer INTX/LYD 8W 35Min", brandCode: "INTX", description: "8 Wire – 35 Min", image: productImageUrl },
    { id: 129, name: "Timer OND 7W 15Min", company: "DONGHAI TECHNOLOGY", category: "Timer", modelNo: "Timer OND 7W 15Min", brandCode: "OND", description: "7 Wire – 15 Min", image: productImageUrl },
    { id: 130, name: "Drain Selector (Straight & Slant Ear)", company: "DONGHAI TECHNOLOGY", category: "Timer", modelNo: "Drain Selector (Straight & Slant Ear)", brandCode: "—", description: "Drain Selector", image: productImageUrl },
    // Washing Machine Lid products
    { id: 400, name: "LE 1014 Top Lid", company: "TR", category: "Washing Machine Lid", modelNo: "T-SL-01", brandCode: "LE", description: "LE 1014 Top Lid", image: productImageUrl },
    { id: 401, name: "LE 1014 DLX Lid", company: "TR", category: "Washing Machine Lid", modelNo: "T-SL-02", brandCode: "LE", description: "LE 1014 DLX Lid", image: productImageUrl },
    { id: 402, name: "LE 0020 Lid", company: "TR", category: "Washing Machine Lid", modelNo: "T-SL-03", brandCode: "LE", description: "LE 0020 Lid", image: productImageUrl },
    { id: 403, name: "LE 1007 Lid", company: "TR", category: "Washing Machine Lid", modelNo: "T-SL-04", brandCode: "LE", description: "LE 1007 Lid", image: productImageUrl },
    { id: 404, name: "LE 1020 Lid", company: "TR", category: "Washing Machine Lid", modelNo: "T-SL-05", brandCode: "LE", description: "LE 1020 Lid", image: productImageUrl },
    { id: 405, name: "LE 1022 Lid", company: "TR", category: "Washing Machine Lid", modelNo: "T-SL-06", brandCode: "LE", description: "LE 1022 Lid", image: productImageUrl },
    { id: 406, name: "LE 1023 Lid", company: "TR", category: "Washing Machine Lid", modelNo: "T-SL-07", brandCode: "LE", description: "LE 1023 Lid", image: productImageUrl },
    { id: 407, name: "LE 1039 Lid", company: "TR", category: "Washing Machine Lid", modelNo: "T-SL-08", brandCode: "LE", description: "LE 1039 Lid", image: productImageUrl },
    { id: 408, name: "LE 1020 Windjet Dry Lid", company: "TR", category: "Washing Machine Lid", modelNo: "T-SL-09", brandCode: "LE", description: "LE 1020 Windjet Dry Lid", image: productImageUrl },
    { id: 409, name: "LE 8 KG Lid", company: "TR", category: "Washing Machine Lid", modelNo: "T-SL-10", brandCode: "LE", description: "LE 8 KG Lid", image: productImageUrl },
    { id: 410, name: "VC 6800 Lid", company: "TR", category: "Washing Machine Lid", modelNo: "T-SL-11", brandCode: "VC", description: "VC 6800 Lid", image: productImageUrl },
    { id: 411, name: "VC 6000 Lid", company: "TR", category: "Washing Machine Lid", modelNo: "T-SL-12", brandCode: "VC", description: "VC 6000 Lid", image: productImageUrl },
    { id: 412, name: "VC Kayal Lid", company: "TR", category: "Washing Machine Lid", modelNo: "T-SL-13", brandCode: "VC", description: "VC Kayal Lid", image: productImageUrl },
    { id: 413, name: "VC Virat Lid", company: "TR", category: "Washing Machine Lid", modelNo: "T-SL-14", brandCode: "VC", description: "VC Virat Lid", image: productImageUrl },
    { id: 414, name: "VC Roja Lid", company: "TR", category: "Washing Machine Lid", modelNo: "T-SL-15", brandCode: "VC", description: "VC Roja Lid", image: productImageUrl },
    { id: 415, name: "SS 1700 Lid", company: "TR", category: "Washing Machine Lid", modelNo: "T-SL-16", brandCode: "SS", description: "SS 1700 Lid", image: productImageUrl },
    { id: 416, name: "SS 7600 Lid", company: "TR", category: "Washing Machine Lid", modelNo: "T-SL-17", brandCode: "SS", description: "SS 7600 Lid", image: productImageUrl },
    { id: 417, name: "SS 7100 Lid", company: "TR", category: "Washing Machine Lid", modelNo: "T-SL-18", brandCode: "SS", description: "SS 7100 Lid", image: productImageUrl },
    { id: 418, name: "SS 9200 Lid", company: "TR", category: "Washing Machine Lid", modelNo: "T-SL-19", brandCode: "SS", description: "SS 9200 Lid", image: productImageUrl },
    { id: 419, name: "SS 1740 Lid", company: "TR", category: "Washing Machine Lid", modelNo: "T-SL-20", brandCode: "SS", description: "SS 1740 Lid", image: productImageUrl },
    { id: 420, name: "SS 1915 Lid", company: "TR", category: "Washing Machine Lid", modelNo: "T-SL-21", brandCode: "SS", description: "SS 1915 Lid", image: productImageUrl },
    { id: 421, name: "SS 1915 DLX Lid", company: "TR", category: "Washing Machine Lid", modelNo: "T-SL-22", brandCode: "SS", description: "SS 1915 DLX Lid", image: productImageUrl },
    { id: 422, name: "SS WT 65 Lid", company: "TR", category: "Washing Machine Lid", modelNo: "T-SL-23", brandCode: "SS", description: "SS WT 65 Lid", image: productImageUrl },
    { id: 423, name: "WP Tango Lid", company: "TR", category: "Washing Machine Lid", modelNo: "T-SL-24", brandCode: "WP", description: "WP Tango Lid", image: productImageUrl },
    { id: 424, name: "WP New Tango Lid", company: "TR", category: "Washing Machine Lid", modelNo: "T-SL-25", brandCode: "WP", description: "WP New Tango Lid", image: productImageUrl },
    { id: 425, name: "WP 601 Lid", company: "TR", category: "Washing Machine Lid", modelNo: "T-SL-26", brandCode: "WP", description: "WP 601 Lid", image: productImageUrl },
    { id: 426, name: "OND Slick Lid", company: "TR", category: "Washing Machine Lid", modelNo: "T-SL-27", brandCode: "OND", description: "OND Slick Lid", image: productImageUrl },
    { id: 427, name: "OND Hydroshakti Lid", company: "TR", category: "Washing Machine Lid", modelNo: "T-SL-28", brandCode: "OND", description: "OND Hydroshakti Lid", image: productImageUrl },
    { id: 428, name: "GD 950 Lid", company: "TR", category: "Washing Machine Lid", modelNo: "T-SL-29", brandCode: "GD", description: "GD 950 Lid", image: productImageUrl },
    { id: 429, name: "GD 6201 Lid", company: "TR", category: "Washing Machine Lid", modelNo: "T-SL-30", brandCode: "GD", description: "GD 6201 Lid", image: productImageUrl },
    // Pulsator products
    { id: 500, name: "Electrolux Fab Pulsator", company: "TR", category: "Pulsator", modelNo: "T-PL-32", brandCode: "ELECTROLUX", description: "Electrolux Fab Pulsator", image: productImageUrl },
    { id: 501, name: "GD 6201 Pulsator", company: "TR", category: "Pulsator", modelNo: "T-PL-33", brandCode: "GD", description: "GD 6201 Pulsator", image: productImageUrl },
    { id: 502, name: "GD 7202 Pulsator", company: "TR", category: "Pulsator", modelNo: "T-PL-34", brandCode: "GD", description: "GD 7202 Pulsator", image: productImageUrl },
    { id: 503, name: "GD 6301 Pulsator", company: "TR", category: "Pulsator", modelNo: "T-PL-35", brandCode: "GD", description: "GD 6301 Pulsator", image: productImageUrl },
    { id: 504, name: "GD 7501 Pulsator", company: "TR", category: "Pulsator", modelNo: "T-PL-36", brandCode: "GD", description: "GD 7501 Pulsator", image: productImageUrl },
    { id: 505, name: "GD 8501 Pulsator", company: "TR", category: "Pulsator", modelNo: "T-PL-37", brandCode: "GD", description: "GD 8501 Pulsator", image: productImageUrl },
    { id: 506, name: "GD 800 Pulsator", company: "TR", category: "Pulsator", modelNo: "T-PL-38", brandCode: "GD", description: "GD 800 Pulsator", image: productImageUrl },
    { id: 507, name: "GD Fully / Sanyo Pulsator", company: "TR", category: "Pulsator", modelNo: "T-PL-39", brandCode: "GD", description: "GD Fully / Sanyo Pulsator", image: productImageUrl },
    { id: 508, name: "GD 6302 Pulsator", company: "TR", category: "Pulsator", modelNo: "T-PL-40", brandCode: "GD", description: "GD 6302 Pulsator", image: productImageUrl },
    { id: 509, name: "GD 8000 Pulsator", company: "TR", category: "Pulsator", modelNo: "T-PL-41", brandCode: "GD", description: "GD 8000 Pulsator", image: productImageUrl },
    { id: 510, name: "GD 7002 Pulsator", company: "TR", category: "Pulsator", modelNo: "T-PL-42", brandCode: "GD", description: "GD 7002 Pulsator", image: productImageUrl },
    { id: 511, name: "PNS 800 Pulsator", company: "TR", category: "Pulsator", modelNo: "T-PL-43", brandCode: "PNS", description: "PNS 800 Pulsator", image: productImageUrl },
    { id: 512, name: "LE 7601 Pulsator", company: "TR", category: "Pulsator", modelNo: "T-PL-44", brandCode: "LE", description: "LE 7601 Pulsator", image: productImageUrl },
    { id: 513, name: "LE 8416 Pulsator", company: "TR", category: "Pulsator", modelNo: "T-PL-45", brandCode: "LE", description: "LE 8416 Pulsator", image: productImageUrl },
    { id: 514, name: "LE 1001 Pulsator", company: "TR", category: "Pulsator", modelNo: "T-PL-46", brandCode: "LE", description: "LE 1001 Pulsator", image: productImageUrl },
    { id: 515, name: "LE 1004 Pulsator", company: "TR", category: "Pulsator", modelNo: "T-PL-47", brandCode: "LE", description: "LE 1004 Pulsator", image: productImageUrl },
    { id: 516, name: "LE 1003 Pulsator", company: "TR", category: "Pulsator", modelNo: "T-PL-48", brandCode: "LE", description: "LE 1003 Pulsator", image: productImageUrl },
    { id: 517, name: "LE 1007 Pulsator", company: "TR", category: "Pulsator", modelNo: "T-PL-49", brandCode: "LE", description: "LE 1007 Pulsator", image: productImageUrl },
    { id: 518, name: "LE 1061 Pulsator", company: "TR", category: "Pulsator", modelNo: "T-PL-50", brandCode: "LE", description: "LE 1061 Pulsator", image: productImageUrl },
    { id: 519, name: "LE 1006 Pulsator", company: "TR", category: "Pulsator", modelNo: "T-PL-51", brandCode: "LE", description: "LE 1006 Pulsator", image: productImageUrl },
    { id: 520, name: "LE 0001 Fully Auto", company: "TR", category: "Pulsator", modelNo: "T-PL-52", brandCode: "LE", description: "LE 0001 Fully Auto", image: productImageUrl },
    { id: 521, name: "LE 2002 Fully Auto", company: "TR", category: "Pulsator", modelNo: "T-PL-53", brandCode: "LE", description: "LE 2002 Fully Auto", image: productImageUrl },
    { id: 522, name: "VC 6000 Pulsator", company: "TR", category: "Pulsator", modelNo: "T-PL-54", brandCode: "VC", description: "VC 6000 Pulsator", image: productImageUrl },
    { id: 523, name: "VC 6800 Pulsator", company: "TR", category: "Pulsator", modelNo: "T-PL-55", brandCode: "VC", description: "VC 6800 Pulsator", image: productImageUrl },
    { id: 524, name: "VC Rosa Pulsator", company: "TR", category: "Pulsator", modelNo: "T-PL-56", brandCode: "VC", description: "VC Rosa Pulsator", image: productImageUrl },
    { id: 525, name: "VC FA71 Pulsator", company: "TR", category: "Pulsator", modelNo: "T-PL-57", brandCode: "VC", description: "VC FA71 Pulsator", image: productImageUrl },
    { id: 526, name: "VC 60HBT Pulsator", company: "TR", category: "Pulsator", modelNo: "T-PL-58", brandCode: "VC", description: "VC 60HBT Pulsator", image: productImageUrl },
    { id: 527, name: "VC Zara Pulsator", company: "TR", category: "Pulsator", modelNo: "T-PL-59", brandCode: "VC", description: "VC Zara Pulsator", image: productImageUrl },
    { id: 528, name: "VC Neon Pulsator", company: "TR", category: "Pulsator", modelNo: "T-PL-60", brandCode: "VC", description: "VC Neon Pulsator", image: productImageUrl },
    { id: 529, name: "VC Digi Nemo Pulsator", company: "TR", category: "Pulsator", modelNo: "T-PL-61", brandCode: "VC", description: "VC Digi Nemo Pulsator", image: productImageUrl },
    { id: 530, name: "VC 5800 Pulsator", company: "TR", category: "Pulsator", modelNo: "T-PL-62", brandCode: "VC", description: "VC 5800 Pulsator", image: productImageUrl },
    { id: 531, name: "VC 400T Pulsator", company: "TR", category: "Pulsator", modelNo: "T-PL-63", brandCode: "VC", description: "VC 400T Pulsator", image: productImageUrl },
    { id: 532, name: "VC Virat Pulsator", company: "TR", category: "Pulsator", modelNo: "T-PL-64", brandCode: "VC", description: "VC Virat Pulsator", image: productImageUrl },
    { id: 533, name: "VC Intex Pulsator", company: "TR", category: "Pulsator", modelNo: "T-PL-65", brandCode: "VC", description: "VC Intex Pulsator", image: productImageUrl },
    { id: 534, name: "VC 200T Pulsator", company: "TR", category: "Pulsator", modelNo: "T-PL-66", brandCode: "VC", description: "VC 200T Pulsator", image: productImageUrl },
    { id: 535, name: "SS Fully (Org) Pulsator", company: "TR", category: "Pulsator", modelNo: "T-PL-67", brandCode: "SS", description: "SS Fully (Org) Pulsator", image: productImageUrl },
    { id: 536, name: "SS Fully 9KG Pulsator", company: "TR", category: "Pulsator", modelNo: "T-PL-68", brandCode: "SS", description: "SS Fully 9KG Pulsator", image: productImageUrl },
    { id: 537, name: "SS 9200 Pulsator", company: "TR", category: "Pulsator", modelNo: "T-PL-69", brandCode: "SS", description: "SS 9200 Pulsator", image: productImageUrl },
    { id: 538, name: "SS Air Turbo Pulsator", company: "TR", category: "Pulsator", modelNo: "T-PL-70", brandCode: "SS", description: "SS Air Turbo Pulsator", image: productImageUrl },
    { id: 539, name: "SS WT 70 (4 Flower)", company: "TR", category: "Pulsator", modelNo: "T-PL-71", brandCode: "SS", description: "SS WT 70 (4 Flower)", image: productImageUrl },
    { id: 540, name: "SS WT 62H (6.2KG)", company: "TR", category: "Pulsator", modelNo: "T-PL-72", brandCode: "SS", description: "SS WT 62H (6.2KG)", image: productImageUrl },
    { id: 541, name: "SS Krishna 7KG", company: "TR", category: "Pulsator", modelNo: "T-PL-73", brandCode: "SS", description: "SS Krishna 7KG", image: productImageUrl },
    { id: 542, name: "SS Krishna 10KG", company: "TR", category: "Pulsator", modelNo: "T-PL-74", brandCode: "SS", description: "SS Krishna 10KG", image: productImageUrl },
    { id: 543, name: "SS Laxmi", company: "TR", category: "Pulsator", modelNo: "T-PL-75", brandCode: "SS", description: "SS Laxmi", image: productImageUrl },
    { id: 544, name: "Samsung / PNS", company: "TR", category: "Pulsator", modelNo: "T-PL-76", brandCode: "SAMSUNG", description: "Samsung / PNS", image: productImageUrl },
    { id: 545, name: "GDWP-560", company: "TR", category: "Pulsator", modelNo: "T-PL-77", brandCode: "GD", description: "GDWP-560", image: productImageUrl },
    { id: 546, name: "WP 8KG", company: "TR", category: "Pulsator", modelNo: "T-PL-78", brandCode: "WP", description: "WP 8KG", image: productImageUrl },
    { id: 547, name: "WP Ace-50", company: "TR", category: "Pulsator", modelNo: "T-PL-79", brandCode: "WP", description: "WP Ace-50", image: productImageUrl },
    { id: 548, name: "WP Chandni", company: "TR", category: "Pulsator", modelNo: "T-PL-80", brandCode: "WP", description: "WP Chandni", image: productImageUrl },
    { id: 549, name: "Lloyd Big", company: "TR", category: "Pulsator", modelNo: "T-PL-81", brandCode: "LLOYD", description: "Lloyd Big", image: productImageUrl },
    { id: 550, name: "Lloyd Small", company: "TR", category: "Pulsator", modelNo: "T-PL-82", brandCode: "LLOYD", description: "Lloyd Small", image: productImageUrl },
    { id: 551, name: "Lloyd New", company: "TR", category: "Pulsator", modelNo: "T-PL-83", brandCode: "LLOYD", description: "Lloyd New", image: productImageUrl },
    { id: 552, name: "Lloyd 3 Roller", company: "TR", category: "Pulsator", modelNo: "T-PL-84", brandCode: "LLOYD", description: "Lloyd 3 Roller", image: productImageUrl },
    { id: 553, name: "Lloyd Fully Big", company: "TR", category: "Pulsator", modelNo: "T-PL-85", brandCode: "LLOYD", description: "Lloyd Fully Big", image: productImageUrl },
    { id: 554, name: "Lloyd Fully Small", company: "TR", category: "Pulsator", modelNo: "T-PL-86", brandCode: "LLOYD", description: "Lloyd Fully Small", image: productImageUrl },
    { id: 555, name: "Lloyd/Samrat", company: "TR", category: "Pulsator", modelNo: "T-PL-87", brandCode: "LLOYD", description: "Lloyd/Samrat", image: productImageUrl },
    { id: 556, name: "Dynex Small", company: "TR", category: "Pulsator", modelNo: "T-PL-88", brandCode: "DYNEX", description: "Dynex Small", image: productImageUrl },
    { id: 557, name: "Hair New", company: "TR", category: "Pulsator", modelNo: "T-PL-89", brandCode: "HAIR", description: "Hair New", image: productImageUrl },
    { id: 558, name: "Hair Hyundai", company: "TR", category: "Pulsator", modelNo: "T-PL-90", brandCode: "HAIR", description: "Hair Hyundai", image: productImageUrl },
    { id: 559, name: "Bosch Top Load", company: "TR", category: "Pulsator", modelNo: "T-PL-91", brandCode: "BOSCH", description: "Bosch Top Load", image: productImageUrl },
    { id: 560, name: "IFB Big", company: "TR", category: "Pulsator", modelNo: "T-PL-92", brandCode: "IFB", description: "IFB Big", image: productImageUrl },
    { id: 561, name: "OND Hydroshakti", company: "TR", category: "Pulsator", modelNo: "T-PL-93", brandCode: "OND", description: "OND Hydroshakti", image: productImageUrl },
    { id: 562, name: "OND-Slik (Hukka)", company: "TR", category: "Pulsator", modelNo: "T-PL-94", brandCode: "OND", description: "OND-Slik (Hukka)", image: productImageUrl },
    { id: 563, name: "OND Turbo", company: "TR", category: "Pulsator", modelNo: "T-PL-95", brandCode: "OND", description: "OND Turbo", image: productImageUrl },
    { id: 564, name: "OND Fully", company: "TR", category: "Pulsator", modelNo: "T-PL-96", brandCode: "OND", description: "OND Fully", image: productImageUrl },
    { id: 565, name: "OND Blue Ring-50", company: "TR", category: "Pulsator", modelNo: "T-PL-97", brandCode: "OND", description: "OND Blue Ring-50", image: productImageUrl },
    { id: 566, name: "OND Hydrofall", company: "TR", category: "Pulsator", modelNo: "T-PL-98", brandCode: "OND", description: "OND Hydrofall", image: productImageUrl },
    { id: 567, name: "OND Slender Fully Auto", company: "TR", category: "Pulsator", modelNo: "T-PL-99", brandCode: "OND", description: "OND Slender Fully Auto", image: productImageUrl },
    { id: 568, name: "TCL", company: "TR", category: "Pulsator", modelNo: "T-PL-100", brandCode: "TCL", description: "TCL", image: productImageUrl },
    { id: 569, name: "Texla", company: "TR", category: "Pulsator", modelNo: "T-PL-101", brandCode: "TEXLA", description: "Texla", image: productImageUrl },
    { id: 570, name: "Voltas / Tasla", company: "TR", category: "Pulsator", modelNo: "T-PL-102", brandCode: "VOLTAS", description: "Voltas / Tasla", image: productImageUrl },
    { id: 571, name: "Voltas / Beko / 7.0 CT", company: "TR", category: "Pulsator", modelNo: "T-PL-103", brandCode: "VOLTAS", description: "Voltas / Beko / 7.0 CT", image: productImageUrl },
    { id: 572, name: "Maharaja", company: "TR", category: "Pulsator", modelNo: "T-PL-104", brandCode: "MAHARAJA", description: "Maharaja", image: productImageUrl },
    { id: 573, name: "Western / Croma", company: "TR", category: "Pulsator", modelNo: "T-PL-105", brandCode: "WESTERN", description: "Western / Croma", image: productImageUrl },
    { id: 574, name: "OND TBM-1/2", company: "TR", category: "Pulsator", modelNo: "T-PL-106", brandCode: "OND", description: "OND TBM-1/2", image: productImageUrl },
    { id: 575, name: "Gem", company: "TR", category: "Pulsator", modelNo: "T-PL-107", brandCode: "GEM", description: "Gem", image: productImageUrl },
    { id: 576, name: "DG Marine", company: "TR", category: "Pulsator", modelNo: "T-PL-108", brandCode: "DG", description: "DG Marine", image: productImageUrl },
    { id: 577, name: "Panasonic", company: "TR", category: "Pulsator", modelNo: "T-PL-109", brandCode: "PANASONIC", description: "Panasonic", image: productImageUrl },
    { id: 578, name: "Bosch Top Load", company: "TR", category: "Pulsator", modelNo: "T-PL-110", brandCode: "BOSCH", description: "Bosch Top Load", image: productImageUrl },
    { id: 579, name: "Onda Crystal", company: "TR", category: "Pulsator", modelNo: "T-PL-225", brandCode: "ONDA", description: "Onda Crystal", image: productImageUrl },
    { id: 580, name: "Marq 6KG", company: "TR", category: "Pulsator", modelNo: "T-PL-227", brandCode: "MARQ", description: "Marq 6KG", image: productImageUrl },
    { id: 581, name: "Marq 8KG", company: "TR", category: "Pulsator", modelNo: "T-PL-228", brandCode: "MARQ", description: "Marq 8KG", image: productImageUrl },
    { id: 582, name: "Voltas Beko 14”", company: "TR", category: "Pulsator", modelNo: "T-PL-229", brandCode: "VOLTAS", description: "Voltas Beko 14”", image: productImageUrl },
    { id: 583, name: "Rel Jance Reconnect", company: "TR", category: "Pulsator", modelNo: "T-PL-231", brandCode: "RELIANCE", description: "Rel Jance Reconnect", image: productImageUrl },
    { id: 584, name: "Voltas Beko 8KG Fully", company: "TR", category: "Pulsator", modelNo: "T-PL-232", brandCode: "VOLTAS", description: "Voltas Beko 8KG Fully", image: productImageUrl },
    { id: 585, name: "Whirlpool 11KG", company: "TR", category: "Pulsator", modelNo: "T-PL-233", brandCode: "WHIRLPOOL", description: "Whirlpool 11KG", image: productImageUrl },
    { id: 586, name: "Voltas Beko / Haier", company: "TR", category: "Pulsator", modelNo: "T-PL-234", brandCode: "VOLTAS", description: "Voltas Beko / Haier", image: productImageUrl },
    { id: 587, name: "Croma New Pulsator", company: "TR", category: "Pulsator", modelNo: "T-PL-235", brandCode: "CROMA", description: "Croma New Pulsator", image: productImageUrl },
    { id: 588, name: "LE 1023 Windjet Dry", company: "TR", category: "Pulsator", modelNo: "T-PL-236", brandCode: "LE", description: "LE 1023 Windjet Dry", image: productImageUrl },
    { id: 589, name: "Ntex 8 Roller", company: "TR", category: "Pulsator", modelNo: "T-PL-238", brandCode: "NTEX", description: "Ntex 8 Roller", image: productImageUrl },
    { id: 590, name: "T-Series", company: "TR", category: "Pulsator", modelNo: "T-PL-239", brandCode: "T-SERIES", description: "T-Series", image: productImageUrl },
    { id: 591, name: "WP Hexa Small", company: "TR", category: "Pulsator", modelNo: "T-PL-240", brandCode: "WP", description: "WP Hexa Small", image: productImageUrl },
    { id: 592, name: "WP Hexa Big", company: "TR", category: "Pulsator", modelNo: "T-PL-241", brandCode: "WP", description: "WP Hexa Big", image: productImageUrl },
    { id: 593, name: "GD EON", company: "TR", category: "Pulsator", modelNo: "T-PL-242", brandCode: "GD", description: "GD EON", image: productImageUrl },
    { id: 594, name: "GD 6802", company: "TR", category: "Pulsator", modelNo: "T-PL-243", brandCode: "GD", description: "GD 6802", image: productImageUrl },
    { id: 595, name: "VC 6800 Drain Assembly", company: "TR", category: "Pulsator", modelNo: "T-PL-244", brandCode: "VC", description: "VC 6800 Drain Assembly", image: productImageUrl },
    { id: 596, name: "SS Fully (Flat)", company: "TR", category: "Pulsator", modelNo: "T-PL-245", brandCode: "SS", description: "SS Fully (Flat)", image: productImageUrl },
    { id: 597, name: "Wybor / PNS / Lloyd 12”", company: "TR", category: "Pulsator", modelNo: "T-PL-246", brandCode: "WYBOR", description: "Wybor / PNS / Lloyd 12”", image: productImageUrl },
    { id: 598, name: "Intex 8KG Roller", company: "TR", category: "Pulsator", modelNo: "T-PL-247", brandCode: "NTEX", description: "Intex 8KG Roller", image: productImageUrl },
    { id: 599, name: "Amstrad / Western", company: "TR", category: "Pulsator", modelNo: "T-PL-248", brandCode: "AMSTRAD", description: "Amstrad / Western", image: productImageUrl },
    // SHIVALIK products
    { id: 1000, name: "DM-GL-DC-2 Drain Motor", company: "SHIVALIK", category: "Drain Mot", modelNo: "DM-GL-DC", brandCode: "DM", description: "DM-GL-DC-2 Drain Motor", image: productImageUrl },
    { id: 1001, name: "DM-FB Drain Motor", company: "SHIVALIK", category: "Drain Mot", modelNo: "DM-FB", brandCode: "DM", description: "DM-FB Drain Motor", image: productImageUrl },
    { id: 1002, name: "DM-FB-2 Drain Motor", company: "SHIVALIK", category: "Drain Mot", modelNo: "DM-FB-2", brandCode: "DM", description: "DM-FB-2 Drain Motor", image: productImageUrl },
    { id: 1003, name: "DM-BK Drain Motor", company: "SHIVALIK", category: "Drain Mot", modelNo: "DM-BK", brandCode: "DM", description: "DM-BK Drain Motor", image: productImageUrl },
    { id: 1004, name: "DM-BS Drain Motor", company: "SHIVALIK", category: "Drain Mot", modelNo: "DM-BS", brandCode: "DM", description: "DM-BS Drain Motor", image: productImageUrl },
    { id: 1005, name: "DM-MA Drain Motor", company: "SHIVALIK", category: "Drain Mot", modelNo: "DM-MA", brandCode: "DM", description: "DM-MA Drain Motor", image: productImageUrl },
    { id: 1006, name: "DM-HR-3 Drain Motor", company: "SHIVALIK", category: "Drain Mot", modelNo: "DM-HR-3", brandCode: "DM", description: "DM-HR-3 Drain Motor", image: productImageUrl },
    { id: 1007, name: "DM-GL-DC-3 Drain Motor", company: "SHIVALIK", category: "Drain Mot", modelNo: "DM-GL-DC-3", brandCode: "DM", description: "DM-GL-DC-3 Drain Motor", image: productImageUrl },
    { id: 1008, name: "DM-GL-DC-4 Drain Motor", company: "SHIVALIK", category: "Drain Mot", modelNo: "DM-GL-DC-4", brandCode: "DM", description: "DM-GL-DC-4 Drain Motor", image: productImageUrl },
    { id: 1009, name: "DM-GL-DC-5 Drain Motor", company: "SHIVALIK", category: "Drain Mot", modelNo: "DM-GL-DC-5", brandCode: "DM", description: "DM-GL-DC-5 Drain Motor", image: productImageUrl },
    { id: 1010, name: "DM-GL-DC-6 Drain Motor", company: "SHIVALIK", category: "Drain Mot", modelNo: "DM-GL-DC-6", brandCode: "DM", description: "DM-GL-DC-6 Drain Motor", image: productImageUrl },
    { id: 1011, name: "DM-GL-DC-7 Drain Motor", company: "SHIVALIK", category: "Drain Mot", modelNo: "DM-GL-DC-7", brandCode: "DM", description: "DM-GL-DC-7 Drain Motor", image: productImageUrl },
    { id: 1012, name: "DM-GL-DC-8 Drain Motor", company: "SHIVALIK", category: "Drain Mot", modelNo: "DM-GL-DC-8", brandCode: "DM", description: "DM-GL-DC-8 Drain Motor", image: productImageUrl },
    { id: 1013, name: "DM-GL-DC-9 Drain Motor", company: "SHIVALIK", category: "Drain Mot", modelNo: "DM-GL-DC-9", brandCode: "DM", description: "DM-GL-DC-9 Drain Motor", image: productImageUrl },
    { id: 1014, name: "DM-GL-DC-10 Drain Motor", company: "SHIVALIK", category: "Drain Mot", modelNo: "DM-GL-DC-10", brandCode: "DM", description: "DM-GL-DC-10 Drain Motor", image: productImageUrl },
    { id: 1015, name: "DM-GL-DC-11 Drain Motor", company: "SHIVALIK", category: "Drain Mot", modelNo: "DM-GL-DC-11", brandCode: "DM", description: "DM-GL-DC-11 Drain Motor", image: productImageUrl },
    { id: 1016, name: "DM-GL-DC-12 Drain Motor", company: "SHIVALIK", category: "Drain Mot", modelNo: "DM-GL-DC-12", brandCode: "DM", description: "DM-GL-DC-12 Drain Motor", image: productImageUrl },
    { id: 1017, name: "DM-GL-DC-13 Drain Motor", company: "SHIVALIK", category: "Drain Mot", modelNo: "DM-GL-DC-13", brandCode: "DM", description: "DM-GL-DC-13 Drain Motor", image: productImageUrl },
    { id: 1018, name: "DM-GL-DC-14 Drain Motor", company: "SHIVALIK", category: "Drain Mot", modelNo: "DM-GL-DC-14", brandCode: "DM", description: "DM-GL-DC-14 Drain Motor", image: productImageUrl },
    { id: 1019, name: "DM-GL-DC-15 Drain Motor", company: "SHIVALIK", category: "Drain Mot", modelNo: "DM-GL-DC-15", brandCode: "DM", description: "DM-GL-DC-15 Drain Motor", image: productImageUrl },
    { id: 1020, name: "DM-GL-DC-16 Drain Motor", company: "SHIVALIK", category: "Drain Mot", modelNo: "DM-GL-DC-16", brandCode: "DM", description: "DM-GL-DC-16 Drain Motor", image: productImageUrl },
    { id: 1021, name: "DM-GL-DC-17 Drain Motor", company: "SHIVALIK", category: "Drain Mot", modelNo: "DM-GL-DC-17", brandCode: "DM", description: "DM-GL-DC-17 Drain Motor", image: productImageUrl },
    { id: 1022, name: "DM-GL-DC-18 Drain Motor", company: "SHIVALIK", category: "Drain Mot", modelNo: "DM-GL-DC-18", brandCode: "DM", description: "DM-GL-DC-18 Drain Motor", image: productImageUrl },
    { id: 1023, name: "DM-GL-DC-19 Drain Motor", company: "SHIVALIK", category: "Drain Mot", modelNo: "DM-GL-DC-19", brandCode: "DM", description: "DM-GL-DC-19 Drain Motor", image: productImageUrl },
    { id: 1024, name: "DM-GL-DC-20 Drain Motor", company: "SHIVALIK", category: "Drain Mot", modelNo: "DM-GL-DC-20", brandCode: "DM", description: "DM-GL-DC-20 Drain Motor", image: productImageUrl },
      // SHIVALIK INTERNATIONAL Drain Pump
      { id: 1025, name: "Samsung D Type Drain Pump", company: "SHIVALIK INTERNATIONAL", category: "Drain Pump", modelNo: "DP-SAM-D", brandCode: "DP", description: "Samsung D Type Drain Pump", image: productImageUrl },
      { id: 1026, name: "GL Type Drain Pump", company: "SHIVALIK INTERNATIONAL", category: "Drain Pump", modelNo: "DP-GL", brandCode: "DP", description: "GL Type Drain Pump", image: productImageUrl },
      { id: 1027, name: "Samsung New Model Drain Pump", company: "SHIVALIK INTERNATIONAL", category: "Drain Pump", modelNo: "DP-SAM-NW", brandCode: "DP", description: "Samsung New Model Drain Pump", image: productImageUrl },
      { id: 1028, name: "Samsung Drain Pump", company: "SHIVALIK INTERNATIONAL", category: "Drain Pump", modelNo: "DP-SAM", brandCode: "DP", description: "Samsung Drain Pump", image: productImageUrl },
      { id: 1029, name: "SM Type Drain Pump", company: "SHIVALIK INTERNATIONAL", category: "Drain Pump", modelNo: "DP-SM", brandCode: "DP", description: "SM Type Drain Pump", image: productImageUrl },
      { id: 1030, name: "FB Type Drain Pump", company: "SHIVALIK INTERNATIONAL", category: "Drain Pump", modelNo: "DP-FB", brandCode: "DP", description: "FB Type Drain Pump", image: productImageUrl },
      { id: 1031, name: "FB 3 Model Drain Pump", company: "SHIVALIK INTERNATIONAL", category: "Drain Pump", modelNo: "DP-FB3", brandCode: "DP", description: "FB 3 Model Drain Pump", image: productImageUrl },
      { id: 1032, name: "GL B Type Drain Pump", company: "SHIVALIK INTERNATIONAL", category: "Drain Pump", modelNo: "DP-GL-B", brandCode: "DP", description: "GL B Type Drain Pump", image: productImageUrl },
      { id: 1033, name: "GL Double Type Drain Pump", company: "SHIVALIK INTERNATIONAL", category: "Drain Pump", modelNo: "DP-GL-DB", brandCode: "DP", description: "GL Double Type Drain Pump", image: productImageUrl },
      { id: 1034, name: "GL DC Type Drain Pump", company: "SHIVALIK INTERNATIONAL", category: "Drain Pump", modelNo: "DP-GL-DC", brandCode: "DP", description: "GL DC Type Drain Pump", image: productImageUrl },
      { id: 1035, name: "BS Type Drain Pump", company: "SHIVALIK INTERNATIONAL", category: "Drain Pump", modelNo: "DP-BS", brandCode: "DP", description: "BS Type Drain Pump", image: productImageUrl },
      { id: 1036, name: "Drain Pump Coil", company: "SHIVALIK INTERNATIONAL", category: "Drain Pump", modelNo: "DP-COIL", brandCode: "DP", description: "Drain Pump Coil", image: productImageUrl },
      { id: 1037, name: "DC Coil Drain Pump", company: "SHIVALIK INTERNATIONAL", category: "Drain Pump", modelNo: "DP-DC-COIL", brandCode: "DP", description: "DC Coil Drain Pump", image: productImageUrl },
      { id: 1038, name: "FB 1 Drain Pump", company: "SHIVALIK INTERNATIONAL", category: "Drain Pump", modelNo: "DP-FB-1", brandCode: "DP", description: "FB 1 Drain Pump", image: productImageUrl },
      { id: 1039, name: "FB 2 Drain Pump", company: "SHIVALIK INTERNATIONAL", category: "Drain Pump", modelNo: "DP-FB-2", brandCode: "DP", description: "FB 2 Drain Pump", image: productImageUrl },

      // SHIVALIK INTERNATIONAL Inlet Valve
      { id: 1040, name: "GL DC Double Line Inlet Valve", company: "SHIVALIK INTERNATIONAL", category: "Inlet Valve", modelNo: "IN-GL-DC-DL", brandCode: "IN", description: "GL DC Double Line Inlet Valve", image: productImageUrl },
      { id: 1041, name: "GL DC Left Inlet Valve", company: "SHIVALIK INTERNATIONAL", category: "Inlet Valve", modelNo: "IN-GL-DC-L", brandCode: "IN", description: "GL DC Left Inlet Valve", image: productImageUrl },
      { id: 1042, name: "GL DC Right Inlet Valve", company: "SHIVALIK INTERNATIONAL", category: "Inlet Valve", modelNo: "IN-GL-DC-R", brandCode: "IN", description: "GL DC Right Inlet Valve", image: productImageUrl },
      { id: 1043, name: "GL DC Triple Inlet Valve", company: "SHIVALIK INTERNATIONAL", category: "Inlet Valve", modelNo: "IN-GL-DC-TRI", brandCode: "IN", description: "GL DC Triple Inlet Valve", image: productImageUrl },
      { id: 1044, name: "GL Inlet Valve", company: "SHIVALIK INTERNATIONAL", category: "Inlet Valve", modelNo: "IN-GL", brandCode: "IN", description: "GL Inlet Valve", image: productImageUrl },
      { id: 1045, name: "FB Inlet Valve", company: "SHIVALIK INTERNATIONAL", category: "Inlet Valve", modelNo: "IN-FB", brandCode: "IN", description: "FB Inlet Valve", image: productImageUrl },
      { id: 1046, name: "BK Inlet Valve", company: "SHIVALIK INTERNATIONAL", category: "Inlet Valve", modelNo: "IN-BK", brandCode: "IN", description: "BK Inlet Valve", image: productImageUrl },
      { id: 1047, name: "Samsung Inlet Valve", company: "SHIVALIK INTERNATIONAL", category: "Inlet Valve", modelNo: "IN-SAM", brandCode: "IN", description: "Samsung Inlet Valve", image: productImageUrl },
      { id: 1048, name: "Whirlpool Inlet Valve", company: "SHIVALIK INTERNATIONAL", category: "Inlet Valve", modelNo: "IN-WP", brandCode: "IN", description: "Whirlpool Inlet Valve", image: productImageUrl },
      { id: 1049, name: "Panasonic Inlet Valve", company: "SHIVALIK INTERNATIONAL", category: "Inlet Valve", modelNo: "IN-PAN", brandCode: "IN", description: "Panasonic Inlet Valve", image: productImageUrl },
      { id: 1050, name: "Lloyd Inlet Valve", company: "SHIVALIK INTERNATIONAL", category: "Inlet Valve", modelNo: "IN-LYD", brandCode: "IN", description: "Lloyd Inlet Valve", image: productImageUrl },

      // SHIVALIK INTERNATIONAL Plastic Gear
      { id: 1051, name: "Washing Machine Gear Type 01", company: "SHIVALIK INTERNATIONAL", category: "Plastic Gear", modelNo: "XD-01", brandCode: "XD", description: "Washing Machine Gear Type 01", image: productImageUrl },
      { id: 1052, name: "Washing Machine Gear Type 02", company: "SHIVALIK INTERNATIONAL", category: "Plastic Gear", modelNo: "XD-02", brandCode: "XD", description: "Washing Machine Gear Type 02", image: productImageUrl },
      { id: 1053, name: "Washing Machine Gear Type 03", company: "SHIVALIK INTERNATIONAL", category: "Plastic Gear", modelNo: "XD-03", brandCode: "XD", description: "Washing Machine Gear Type 03", image: productImageUrl },
      { id: 1054, name: "Washing Machine Gear Type 06", company: "SHIVALIK INTERNATIONAL", category: "Plastic Gear", modelNo: "XD-06", brandCode: "XD", description: "Washing Machine Gear Type 06", image: productImageUrl },
      { id: 1055, name: "Washing Machine Gear Type 07", company: "SHIVALIK INTERNATIONAL", category: "Plastic Gear", modelNo: "XD-07", brandCode: "XD", description: "Washing Machine Gear Type 07", image: productImageUrl },
      { id: 1056, name: "Washing Machine Gear Type 08", company: "SHIVALIK INTERNATIONAL", category: "Plastic Gear", modelNo: "XD-08", brandCode: "XD", description: "Washing Machine Gear Type 08", image: productImageUrl },
      { id: 1057, name: "Washing Machine Gear Type 11", company: "SHIVALIK INTERNATIONAL", category: "Plastic Gear", modelNo: "XD-011", brandCode: "XD", description: "Washing Machine Gear Type 11", image: productImageUrl },
      { id: 1058, name: "Washing Machine Gear Type 12", company: "SHIVALIK INTERNATIONAL", category: "Plastic Gear", modelNo: "XD-012", brandCode: "XD", description: "Washing Machine Gear Type 12", image: productImageUrl },

      // SHIVALIK INTERNATIONAL Pressure Switch
      { id: 1059, name: "BS Pressure Switch", company: "SHIVALIK INTERNATIONAL", category: "Pressure Switch", modelNo: "PS-BS", brandCode: "PS", description: "BS Pressure Switch", image: productImageUrl },
      { id: 1060, name: "FB Pressure Switch", company: "SHIVALIK INTERNATIONAL", category: "Pressure Switch", modelNo: "PS-FB", brandCode: "PS", description: "FB Pressure Switch", image: productImageUrl },
      { id: 1061, name: "GL Pressure Switch", company: "SHIVALIK INTERNATIONAL", category: "Pressure Switch", modelNo: "PS-GL", brandCode: "PS", description: "GL Pressure Switch", image: productImageUrl },
      { id: 1062, name: "Samsung Pressure Switch", company: "SHIVALIK INTERNATIONAL", category: "Pressure Switch", modelNo: "PS-SAM", brandCode: "PS", description: "Samsung Pressure Switch", image: productImageUrl },
      { id: 1063, name: "Universal Pressure Switch", company: "SHIVALIK INTERNATIONAL", category: "Pressure Switch", modelNo: "PS-UNI", brandCode: "PS", description: "Universal Pressure Switch", image: productImageUrl },

      // SHIVALIK INTERNATIONAL Door Lock
      { id: 1064, name: "BS Door Lock", company: "SHIVALIK INTERNATIONAL", category: "Door Lock", modelNo: "DL-BS", brandCode: "DL", description: "BS Door Lock", image: productImageUrl },
      { id: 1065, name: "DR2 Door Lock", company: "SHIVALIK INTERNATIONAL", category: "Door Lock", modelNo: "DL-DR2", brandCode: "DL", description: "DR2 Door Lock", image: productImageUrl },
      { id: 1066, name: "DR3 Door Lock", company: "SHIVALIK INTERNATIONAL", category: "Door Lock", modelNo: "DL-DR3", brandCode: "DL", description: "DR3 Door Lock", image: productImageUrl },
      { id: 1067, name: "Electrolux Door Lock", company: "SHIVALIK INTERNATIONAL", category: "Door Lock", modelNo: "DL-EL", brandCode: "DL", description: "Electrolux Door Lock", image: productImageUrl },
      { id: 1068, name: "Samsung Door Lock Type 1", company: "SHIVALIK INTERNATIONAL", category: "Door Lock", modelNo: "DL-SAM-1", brandCode: "DL", description: "Samsung Door Lock Type 1", image: productImageUrl },
        // SHIVALIK INTERNATIONAL Microwave Section
        { id: 1069, name: "Microwave Tri Ring", company: "SHIVALIK INTERNATIONAL", category: "Microwave", modelNo: "SK-TRI-RING", brandCode: "SK", description: "Microwave Tri Ring", image: productImageUrl },
        { id: 1070, name: "Microwave Flower Coupler", company: "SHIVALIK INTERNATIONAL", category: "Microwave", modelNo: "SK-FLOWER", brandCode: "SK", description: "Microwave Flower Coupler", image: productImageUrl },
        { id: 1071, name: "Microwave Timer 210", company: "SHIVALIK INTERNATIONAL", category: "Microwave", modelNo: "SK-210", brandCode: "SK", description: "Microwave Timer 210", image: productImageUrl },
        { id: 1072, name: "Microwave Timer 214", company: "SHIVALIK INTERNATIONAL", category: "Microwave", modelNo: "SK-214", brandCode: "SK", description: "Microwave Timer 214", image: productImageUrl },
        { id: 1073, name: "Microwave Timer 610", company: "SHIVALIK INTERNATIONAL", category: "Microwave", modelNo: "SK-610", brandCode: "SK", description: "Microwave Timer 610", image: productImageUrl },
        { id: 1074, name: "Microwave Timer 410", company: "SHIVALIK INTERNATIONAL", category: "Microwave", modelNo: "SK-410", brandCode: "SK", description: "Microwave Timer 410", image: productImageUrl },
        { id: 1075, name: "Microwave Capacitor", company: "SHIVALIK INTERNATIONAL", category: "Microwave", modelNo: "SK-CAPACITOR", brandCode: "SK", description: "Microwave Capacitor", image: productImageUrl },
        { id: 1076, name: "Microwave Diode Set", company: "SHIVALIK INTERNATIONAL", category: "Microwave", modelNo: "SK-DIODES", brandCode: "SK", description: "Microwave Diode Set", image: productImageUrl },
        { id: 1077, name: "Microwave Fan Motor", company: "SHIVALIK INTERNATIONAL", category: "Microwave", modelNo: "SK-FAN-MOTOR", brandCode: "SK", description: "Microwave Fan Motor", image: productImageUrl },
        { id: 1078, name: "Microwave Fuse", company: "SHIVALIK INTERNATIONAL", category: "Microwave", modelNo: "SK-FUSE", brandCode: "SK", description: "Microwave Fuse", image: productImageUrl },
        { id: 1079, name: "Microwave Fuse Tube", company: "SHIVALIK INTERNATIONAL", category: "Microwave", modelNo: "SK-FUSETUBE", brandCode: "SK", description: "Microwave Fuse Tube", image: productImageUrl },
        { id: 1080, name: "Microwave Ring Heater", company: "SHIVALIK INTERNATIONAL", category: "Microwave", modelNo: "SK-RING", brandCode: "SK", description: "Microwave Ring Heater", image: productImageUrl },
        { id: 1081, name: "Microwave Transformer", company: "SHIVALIK INTERNATIONAL", category: "Microwave", modelNo: "SK-TRF", brandCode: "SK", description: "Microwave Transformer", image: productImageUrl },
        { id: 1082, name: "Microwave Door Switch", company: "SHIVALIK INTERNATIONAL", category: "Microwave", modelNo: "SK-SWITCH", brandCode: "SK", description: "Microwave Door Switch", image: productImageUrl },
        { id: 1083, name: "Microwave Turntable Motor", company: "SHIVALIK INTERNATIONAL", category: "Microwave", modelNo: "SK-TT-MOTOR", brandCode: "SK", description: "Microwave Turntable Motor", image: productImageUrl },

        // SHIVALIK INTERNATIONAL Refrigeration Section
        { id: 1084, name: "Digital Thermometer", company: "SHIVALIK INTERNATIONAL", category: "Refrigeration", modelNo: "SK-THERMO", brandCode: "SK", description: "Digital Thermometer", image: productImageUrl },
        { id: 1085, name: "Split AC Pipe Bender", company: "SHIVALIK INTERNATIONAL", category: "Refrigeration", modelNo: "SK-SPLIT-BEND", brandCode: "SK", description: "Split AC Pipe Bender", image: productImageUrl },
        { id: 1086, name: "Split AC Service Tool", company: "SHIVALIK INTERNATIONAL", category: "Refrigeration", modelNo: "SK-SPLIT-ST", brandCode: "SK", description: "Split AC Service Tool", image: productImageUrl },
        { id: 1087, name: "Refrigeration Pressure Gauge", company: "SHIVALIK INTERNATIONAL", category: "Refrigeration", modelNo: "SK-GUAGE", brandCode: "SK", description: "Refrigeration Pressure Gauge", image: productImageUrl },
        { id: 1088, name: "Double Gauge Manifold", company: "SHIVALIK INTERNATIONAL", category: "Refrigeration", modelNo: "SK-DOUBLE-MANIFOLD", brandCode: "SK", description: "Double Gauge Manifold", image: productImageUrl },
        { id: 1089, name: "Access Valve", company: "SHIVALIK INTERNATIONAL", category: "Refrigeration", modelNo: "SK-ACESS-VALVE", brandCode: "SK", description: "Access Valve", image: productImageUrl },
        { id: 1090, name: "Pressure Gauge 800 PSI", company: "SHIVALIK INTERNATIONAL", category: "Refrigeration", modelNo: "SK-800", brandCode: "SK", description: "Pressure Gauge 800 PSI", image: productImageUrl },
        { id: 1091, name: "3 Way 800 PSI Gauge", company: "SHIVALIK INTERNATIONAL", category: "Refrigeration", modelNo: "SK-3W-800", brandCode: "SK", description: "3 Way 800 PSI Gauge", image: productImageUrl },
        { id: 1092, name: "Charging Hose", company: "SHIVALIK INTERNATIONAL", category: "Refrigeration", modelNo: "SK-HOSE", brandCode: "SK", description: "Charging Hose", image: productImageUrl },
        { id: 1093, name: "Double Barrel Torch", company: "SHIVALIK INTERNATIONAL", category: "Refrigeration", modelNo: "SK-DOUBLE-TORCH", brandCode: "SK", description: "Double Barrel Torch", image: productImageUrl },
        { id: 1094, name: "Capillary Cutter Tool", company: "SHIVALIK INTERNATIONAL", category: "Refrigeration", modelNo: "SK-1104", brandCode: "SK", description: "Capillary Cutter Tool", image: productImageUrl },
        { id: 1095, name: "360° Brazing Torch", company: "SHIVALIK INTERNATIONAL", category: "Refrigeration", modelNo: "SK-360-TORCH", brandCode: "SK", description: "360° Brazing Torch", image: productImageUrl },
        { id: 1096, name: "Can Valve 337", company: "SHIVALIK INTERNATIONAL", category: "Refrigeration", modelNo: "SK-337", brandCode: "SK", description: "Can Valve 337", image: productImageUrl },
        { id: 1097, name: "Can Valve 339", company: "SHIVALIK INTERNATIONAL", category: "Refrigeration", modelNo: "SK-339", brandCode: "SK", description: "Can Valve 339", image: productImageUrl },
        { id: 1098, name: "Tube Cutter 274", company: "SHIVALIK INTERNATIONAL", category: "Refrigeration", modelNo: "SK-274", brandCode: "SK", description: "Tube Cutter 274", image: productImageUrl },
        { id: 1099, name: "3 Pole Contactor", company: "SHIVALIK INTERNATIONAL", category: "Refrigeration", modelNo: "SK-3POLE", brandCode: "SK", description: "3 Pole Contactor", image: productImageUrl },
        { id: 1100, name: "2 Pole Contactor", company: "SHIVALIK INTERNATIONAL", category: "Refrigeration", modelNo: "SK-2POLE", brandCode: "SK", description: "2 Pole Contactor", image: productImageUrl },
        { id: 1101, name: "1 Pole Contactor", company: "SHIVALIK INTERNATIONAL", category: "Refrigeration", modelNo: "SK-1POLE", brandCode: "SK", description: "1 Pole Contactor", image: productImageUrl },
        { id: 1102, name: "Tube Cutter 128", company: "SHIVALIK INTERNATIONAL", category: "Refrigeration", modelNo: "SK-128", brandCode: "SK", description: "Tube Cutter 128", image: productImageUrl },
        { id: 1103, name: "Pipe Wrench 201", company: "SHIVALIK INTERNATIONAL", category: "Refrigeration", modelNo: "SK-201", brandCode: "SK", description: "Pipe Wrench 201", image: productImageUrl },
        { id: 1104, name: "Flaring Tool 525", company: "SHIVALIK INTERNATIONAL", category: "Refrigeration", modelNo: "SK-525", brandCode: "SK", description: "Flaring Tool 525", image: productImageUrl },
        { id: 1105, name: "R22 Charging Valve", company: "SHIVALIK INTERNATIONAL", category: "Refrigeration", modelNo: "SK-R22", brandCode: "SK", description: "R22 Charging Valve", image: productImageUrl },

        // SHIVALIK INTERNATIONAL Timer Section - 15 Minute Timer
        { id: 1106, name: "15 Minute Timer EL", company: "SHIVALIK INTERNATIONAL", category: "Timer", modelNo: "SK-EL", brandCode: "SK", description: "15 Minute Timer EL", image: productImageUrl },
        { id: 1107, name: "15 Minute Timer LP", company: "SHIVALIK INTERNATIONAL", category: "Timer", modelNo: "SK-LP", brandCode: "SK", description: "15 Minute Timer LP", image: productImageUrl },
        { id: 1108, name: "15 Minute Timer BP-7", company: "SHIVALIK INTERNATIONAL", category: "Timer", modelNo: "SK-BP-7", brandCode: "SK", description: "15 Minute Timer BP-7", image: productImageUrl },
        { id: 1109, name: "15 Minute Timer GL", company: "SHIVALIK INTERNATIONAL", category: "Timer", modelNo: "SK-GL", brandCode: "SK", description: "15 Minute Timer GL", image: productImageUrl },
        { id: 1110, name: "15 Minute Timer HR", company: "SHIVALIK INTERNATIONAL", category: "Timer", modelNo: "SK-HR", brandCode: "SK", description: "15 Minute Timer HR", image: productImageUrl },
        { id: 1111, name: "15 Minute Timer NA Short", company: "SHIVALIK INTERNATIONAL", category: "Timer", modelNo: "SK-NA-SRT", brandCode: "SK", description: "15 Minute Timer NA Short", image: productImageUrl },
        { id: 1112, name: "15 Minute Timer MJ", company: "SHIVALIK INTERNATIONAL", category: "Timer", modelNo: "SK-MJ", brandCode: "SK", description: "15 Minute Timer MJ", image: productImageUrl },
        { id: 1113, name: "15 Minute Timer NA Tilt", company: "SHIVALIK INTERNATIONAL", category: "Timer", modelNo: "SK-NA-TLT", brandCode: "SK", description: "15 Minute Timer NA Tilt", image: productImageUrl },
        { id: 1114, name: "15 Minute Timer ON", company: "SHIVALIK INTERNATIONAL", category: "Timer", modelNo: "SK-ON", brandCode: "SK", description: "15 Minute Timer ON", image: productImageUrl },
        { id: 1115, name: "15 Minute Timer Samsung", company: "SHIVALIK INTERNATIONAL", category: "Timer", modelNo: "SK-SAM", brandCode: "SK", description: "15 Minute Timer Samsung", image: productImageUrl },
        { id: 1116, name: "15 Minute Timer TCL", company: "SHIVALIK INTERNATIONAL", category: "Timer", modelNo: "SK-TCL", brandCode: "SK", description: "15 Minute Timer TCL", image: productImageUrl },
        { id: 1117, name: "15 Minute Timer BS", company: "SHIVALIK INTERNATIONAL", category: "Timer", modelNo: "SK-BS", brandCode: "SK", description: "15 Minute Timer BS", image: productImageUrl },
        { id: 1118, name: "15 Minute Timer WP 7", company: "SHIVALIK INTERNATIONAL", category: "Timer", modelNo: "SK-WP7", brandCode: "SK", description: "15 Minute Timer WP 7", image: productImageUrl },
        { id: 1119, name: "15 Minute Timer WP 3", company: "SHIVALIK INTERNATIONAL", category: "Timer", modelNo: "SKWP-3", brandCode: "SK", description: "15 Minute Timer WP 3", image: productImageUrl },

        // SHIVALIK INTERNATIONAL Timer Section - Single 35 Minute Timer
        { id: 1120, name: "35 Minute Timer WP-8", company: "SHIVALIK INTERNATIONAL", category: "Timer", modelNo: "SK-WP-8", brandCode: "SK", description: "35 Minute Timer WP-8", image: productImageUrl },
        { id: 1121, name: "35 Minute Timer Samsung 7", company: "SHIVALIK INTERNATIONAL", category: "Timer", modelNo: "SK-SAM-7", brandCode: "SK", description: "35 Minute Timer Samsung 7", image: productImageUrl },
        { id: 1122, name: "35 Minute Timer VM-8", company: "SHIVALIK INTERNATIONAL", category: "Timer", modelNo: "SK-VM-8", brandCode: "SK", description: "35 Minute Timer VM-8", image: productImageUrl },
        { id: 1123, name: "35 Minute Timer Samsung 4", company: "SHIVALIK INTERNATIONAL", category: "Timer", modelNo: "SK-SAM-4", brandCode: "SK", description: "35 Minute Timer Samsung 4", image: productImageUrl },
        { id: 1124, name: "35 Minute Timer Rosa 8", company: "SHIVALIK INTERNATIONAL", category: "Timer", modelNo: "SK-ROSA-8", brandCode: "SK", description: "35 Minute Timer Rosa 8", image: productImageUrl },
        { id: 1125, name: "35 Minute Timer GD 9", company: "SHIVALIK INTERNATIONAL", category: "Timer", modelNo: "SK-GD-9", brandCode: "SK", description: "35 Minute Timer GD 9", image: productImageUrl },
        { id: 1126, name: "35 Minute Timer GD 8", company: "SHIVALIK INTERNATIONAL", category: "Timer", modelNo: "SK-GD-8", brandCode: "SK", description: "35 Minute Timer GD 8", image: productImageUrl },
        { id: 1127, name: "35 Minute Timer GD 7", company: "SHIVALIK INTERNATIONAL", category: "Timer", modelNo: "SK-GD-7", brandCode: "SK", description: "35 Minute Timer GD 7", image: productImageUrl },

        // SHIVALIK INTERNATIONAL Timer Section - Double Timer
        { id: 1128, name: "Double 15 Minute Timer GL", company: "SHIVALIK INTERNATIONAL", category: "Timer", modelNo: "SK-GL-DB", brandCode: "SK", description: "Double 15 Minute Timer GL", image: productImageUrl },
        { id: 1129, name: "Double 15 Minute Timer 400T", company: "SHIVALIK INTERNATIONAL", category: "Timer", modelNo: "SK-400T", brandCode: "SK", description: "Double 15 Minute Timer 400T", image: productImageUrl },
        { id: 1130, name: "Double 15 Minute Timer Samsung", company: "SHIVALIK INTERNATIONAL", category: "Timer", modelNo: "SK-SAM-DB", brandCode: "SK", description: "Double 15 Minute Timer Samsung", image: productImageUrl },
        { id: 1131, name: "Double Timer Whirlpool", company: "SHIVALIK INTERNATIONAL", category: "Timer", modelNo: "SK-WP", brandCode: "SK", description: "Double Timer Whirlpool", image: productImageUrl },
        { id: 1132, name: "35/41 Minute Double Timer", company: "SHIVALIK INTERNATIONAL", category: "Timer", modelNo: "SK-6080", brandCode: "SK", description: "35/41 Minute Double Timer", image: productImageUrl },
          // SHIVALIK INTERNATIONAL Spider Section
          { id: 1133, name: "Samsung Spider Assembly DC97-15963B", company: "SHIVALIK INTERNATIONAL", category: "Spider", modelNo: "SK-DC97-15963B", brandCode: "SK", description: "Samsung Spider Assembly DC97-15963B", image: productImageUrl },
          { id: 1134, name: "Samsung Spider Assembly DC97-15185A", company: "SHIVALIK INTERNATIONAL", category: "Spider", modelNo: "SK-DC97-15185A", brandCode: "SK", description: "Samsung Spider Assembly DC97-15185A", image: productImageUrl },
          { id: 1135, name: "Bearing 6205-6206 Spider Type", company: "SHIVALIK INTERNATIONAL", category: "Spider", modelNo: "SK-BS-6205-6206", brandCode: "SK", description: "Bearing 6205-6206 Spider Type", image: productImageUrl },
          { id: 1136, name: "Bearing 6204-6205 Spider Type", company: "SHIVALIK INTERNATIONAL", category: "Spider", modelNo: "SK-BS6204-6205", brandCode: "SK", description: "Bearing 6204-6205 Spider Type", image: productImageUrl },
          { id: 1137, name: "Bearing Model 9000809334", company: "SHIVALIK INTERNATIONAL", category: "Spider", modelNo: "9000809334", brandCode: "SK", description: "Bearing Model 9000809334", image: productImageUrl },
          { id: 1138, name: "Samsung Spider DC97-14370H", company: "SHIVALIK INTERNATIONAL", category: "Spider", modelNo: "SK-DC97-14370H", brandCode: "SK", description: "Samsung Spider DC97-14370H", image: productImageUrl },
          { id: 1139, name: "Samsung Spider DC97-15182A", company: "SHIVALIK INTERNATIONAL", category: "Spider", modelNo: "SK-DC97-15182A", brandCode: "SK", description: "Samsung Spider DC97-15182A", image: productImageUrl },
          { id: 1140, name: "Samsung Spider DC97-15971A", company: "SHIVALIK INTERNATIONAL", category: "Spider", modelNo: "SK-DC97-15971A", brandCode: "SK", description: "Samsung Spider DC97-15971A", image: productImageUrl },
          { id: 1141, name: "FB Type Spider", company: "SHIVALIK INTERNATIONAL", category: "Spider", modelNo: "SK-FB", brandCode: "SK", description: "FB Type Spider", image: productImageUrl },
          { id: 1142, name: "GL Type Spider", company: "SHIVALIK INTERNATIONAL", category: "Spider", modelNo: "SK-GL", brandCode: "SK", description: "GL Type Spider", image: productImageUrl },
          { id: 1143, name: "GL 7KG Spider", company: "SHIVALIK INTERNATIONAL", category: "Spider", modelNo: "SK-GL-7KG", brandCode: "SK", description: "GL 7KG Spider", image: productImageUrl },
          { id: 1144, name: "HR 7KG Spider", company: "SHIVALIK INTERNATIONAL", category: "Spider", modelNo: "SK-HR-7KG", brandCode: "SK", description: "HR 7KG Spider", image: productImageUrl },
          { id: 1145, name: "HR Type Spider", company: "SHIVALIK INTERNATIONAL", category: "Spider", modelNo: "SK-HR", brandCode: "SK", description: "HR Type Spider", image: productImageUrl },
          { id: 1146, name: "Lloyd Type Spider", company: "SHIVALIK INTERNATIONAL", category: "Spider", modelNo: "SK-LYD", brandCode: "SK", description: "Lloyd Type Spider", image: productImageUrl },

          // SHIVALIK INTERNATIONAL Clutch Section
          { id: 1147, name: "Panasonic Clutch", company: "SHIVALIK INTERNATIONAL", category: "Clutch", modelNo: "SK-PAN", brandCode: "SK", description: "Panasonic Clutch", image: productImageUrl },
          { id: 1148, name: "Lloyd Clutch", company: "SHIVALIK INTERNATIONAL", category: "Clutch", modelNo: "SK-LYD", brandCode: "SK", description: "Lloyd Clutch", image: productImageUrl },
          { id: 1149, name: "GL 9KG Inverter Clutch", company: "SHIVALIK INTERNATIONAL", category: "Clutch", modelNo: "SK-GL-INV-9KG", brandCode: "SK", description: "GL 9KG Inverter Clutch", image: productImageUrl },
          { id: 1150, name: "GL 6KG Inverter Clutch", company: "SHIVALIK INTERNATIONAL", category: "Clutch", modelNo: "SK-GL-INV-6KG", brandCode: "SK", description: "GL 6KG Inverter Clutch", image: productImageUrl },
          { id: 1151, name: "GL Double Clutch", company: "SHIVALIK INTERNATIONAL", category: "Clutch", modelNo: "SK-GL-DB", brandCode: "SK", description: "GL Double Clutch", image: productImageUrl },
          { id: 1152, name: "FB 6.5KG Clutch", company: "SHIVALIK INTERNATIONAL", category: "Clutch", modelNo: "SK-FB6.5", brandCode: "SK", description: "FB 6.5KG Clutch", image: productImageUrl },
          { id: 1153, name: "Samsung Double Clutch", company: "SHIVALIK INTERNATIONAL", category: "Clutch", modelNo: "SAM-DBL", brandCode: "SK", description: "Samsung Double Clutch", image: productImageUrl },
          { id: 1154, name: "BS Type Clutch", company: "SHIVALIK INTERNATIONAL", category: "Clutch", modelNo: "SK-BS", brandCode: "SK", description: "BS Type Clutch", image: productImageUrl },
          { id: 1155, name: "Samsung 9KG Clutch", company: "SHIVALIK INTERNATIONAL", category: "Clutch", modelNo: "SAM-9KG", brandCode: "SK", description: "Samsung 9KG Clutch", image: productImageUrl },
          { id: 1156, name: "LG 9KG Inverter Clutch", company: "SHIVALIK INTERNATIONAL", category: "Clutch", modelNo: "LG-9KG-INVERTER", brandCode: "SK", description: "LG 9KG Inverter Clutch", image: productImageUrl },
          { id: 1157, name: "ON Type Clutch", company: "SHIVALIK INTERNATIONAL", category: "Clutch", modelNo: "SK-ON", brandCode: "SK", description: "ON Type Clutch", image: productImageUrl },
          { id: 1158, name: "Half Plate Clutch", company: "SHIVALIK INTERNATIONAL", category: "Clutch", modelNo: "SK-HALF", brandCode: "SK", description: "Half Plate Clutch", image: productImageUrl },
          { id: 1159, name: "Full Plate Clutch", company: "SHIVALIK INTERNATIONAL", category: "Clutch", modelNo: "SK-FULL-PLATE", brandCode: "SK", description: "Full Plate Clutch", image: productImageUrl },
          { id: 1160, name: "FB & HR Compatible Clutch", company: "SHIVALIK INTERNATIONAL", category: "Clutch", modelNo: "SK-FB&HR", brandCode: "SK", description: "FB & HR Compatible Clutch", image: productImageUrl },

          // SHIVALIK INTERNATIONAL Gasket Section
          { id: 1161, name: "Samsung 8KG Gasket", company: "SHIVALIK INTERNATIONAL", category: "Gasket", modelNo: "SK-SAM-8KG", brandCode: "SK", description: "Samsung 8KG Gasket", image: productImageUrl },
          { id: 1162, name: "GL Gasket MD563916501", company: "SHIVALIK INTERNATIONAL", category: "Gasket", modelNo: "SK-GL-MD563916501", brandCode: "SK", description: "GL Gasket MD563916501", image: productImageUrl },
          { id: 1163, name: "Universal Ring Gasket", company: "SHIVALIK INTERNATIONAL", category: "Gasket", modelNo: "SK-RING", brandCode: "SK", description: "Universal Ring Gasket", image: productImageUrl },
          { id: 1164, name: "Samsung Gasket DC64-03198A", company: "SHIVALIK INTERNATIONAL", category: "Gasket", modelNo: "SK-DC64-03198A", brandCode: "SK", description: "Samsung Gasket DC64-03198A", image: productImageUrl },
          { id: 1165, name: "Samsung Gasket DC64-01664A", company: "SHIVALIK INTERNATIONAL", category: "Gasket", modelNo: "SK-DC64-01664A", brandCode: "SK", description: "Samsung Gasket DC64-01664A", image: productImageUrl },
          { id: 1166, name: "Model 1003 Gasket", company: "SHIVALIK INTERNATIONAL", category: "Gasket", modelNo: "SK-1003", brandCode: "SK", description: "Model 1003 Gasket", image: productImageUrl },
          { id: 1167, name: "Model 1001 Gasket", company: "SHIVALIK INTERNATIONAL", category: "Gasket", modelNo: "SK-1001", brandCode: "SK", description: "Model 1001 Gasket", image: productImageUrl },
            // SHIVALIK INTERNATIONAL Suspension Section
            { id: 1168, name: "BS Suspension Rod", company: "SHIVALIK INTERNATIONAL", category: "Suspension", modelNo: "SK-BS-1", brandCode: "SK", description: "BS Suspension Rod", image: productImageUrl },
            { id: 1169, name: "FB Suspension Rod", company: "SHIVALIK INTERNATIONAL", category: "Suspension", modelNo: "SK-FB-1", brandCode: "SK", description: "FB Suspension Rod", image: productImageUrl },
            { id: 1170, name: "GL Suspension Rod", company: "SHIVALIK INTERNATIONAL", category: "Suspension", modelNo: "SK-GL-1", brandCode: "SK", description: "GL Suspension Rod", image: productImageUrl },
            { id: 1171, name: "Samsung Suspension Rod", company: "SHIVALIK INTERNATIONAL", category: "Suspension", modelNo: "SK-SAM-1", brandCode: "SK", description: "Samsung Suspension Rod", image: productImageUrl },
            { id: 1172, name: "FB Suspension Spring", company: "SHIVALIK INTERNATIONAL", category: "Suspension", modelNo: "SK-FB-SPRING", brandCode: "SK", description: "FB Suspension Spring", image: productImageUrl },
            { id: 1173, name: "GL Suspension Spring", company: "SHIVALIK INTERNATIONAL", category: "Suspension", modelNo: "SK-GL-SPRING", brandCode: "SK", description: "GL Suspension Spring", image: productImageUrl },
            { id: 1174, name: "BS Suspension Assembly", company: "SHIVALIK INTERNATIONAL", category: "Suspension", modelNo: "SK-BS", brandCode: "SK", description: "BS Suspension Assembly", image: productImageUrl },
            { id: 1175, name: "FB Suspension Assembly", company: "SHIVALIK INTERNATIONAL", category: "Suspension", modelNo: "SK-FB", brandCode: "SK", description: "FB Suspension Assembly", image: productImageUrl },
            { id: 1176, name: "GL Suspension Assembly", company: "SHIVALIK INTERNATIONAL", category: "Suspension", modelNo: "SK-GL", brandCode: "SK", description: "GL Suspension Assembly", image: productImageUrl },
            { id: 1177, name: "Samsung Suspension Assembly", company: "SHIVALIK INTERNATIONAL", category: "Suspension", modelNo: "SK-SAM", brandCode: "SK", description: "Samsung Suspension Assembly", image: productImageUrl },
            { id: 1178, name: "Universal Suspension", company: "SHIVALIK INTERNATIONAL", category: "Suspension", modelNo: "SK-UNI", brandCode: "SK", description: "Universal Suspension", image: productImageUrl },
            { id: 1179, name: "Whirlpool Suspension", company: "SHIVALIK INTERNATIONAL", category: "Suspension", modelNo: "SK-WP", brandCode: "SK", description: "Whirlpool Suspension", image: productImageUrl },

            // SHIVALIK INTERNATIONAL PCB Section
            { id: 1180, name: "GL Washing Machine PCB", company: "SHIVALIK INTERNATIONAL", category: "PCB", modelNo: "SK-GL", brandCode: "SK", description: "GL Washing Machine PCB", image: productImageUrl },
            { id: 1181, name: "Samsung PCB Type 2", company: "SHIVALIK INTERNATIONAL", category: "PCB", modelNo: "SK-SAM-2", brandCode: "SK", description: "Samsung PCB Type 2", image: productImageUrl },
            { id: 1182, name: "Samsung PCB Board", company: "SHIVALIK INTERNATIONAL", category: "PCB", modelNo: "SK-SAM", brandCode: "SK", description: "Samsung PCB Board", image: productImageUrl },
            { id: 1183, name: "Universal AC PCB", company: "SHIVALIK INTERNATIONAL", category: "PCB", modelNo: "SK-AC-UNI", brandCode: "SK", description: "Universal AC PCB", image: productImageUrl },
            { id: 1184, name: "Universal Microwave PCB", company: "SHIVALIK INTERNATIONAL", category: "PCB", modelNo: "SK-MICR-UNI", brandCode: "SK", description: "Universal Microwave PCB", image: productImageUrl },
            { id: 1185, name: "Universal Washing Machine PCB", company: "SHIVALIK INTERNATIONAL", category: "PCB", modelNo: "SK-WASHING-MACHINE-UNI", brandCode: "SK", description: "Universal Washing Machine PCB", image: productImageUrl },

            // SHIVALIK INTERNATIONAL Other Parts Section
            { id: 1186, name: "Universal Spare Part", company: "SHIVALIK INTERNATIONAL", category: "Other Parts", modelNo: "SK-UNI", brandCode: "SK", description: "Universal Spare Part", image: productImageUrl },
            { id: 1187, name: "2 Meter Hose / Pipe", company: "SHIVALIK INTERNATIONAL", category: "Other Parts", modelNo: "SK-2M", brandCode: "SK", description: "2 Meter Hose / Pipe", image: productImageUrl },
            { id: 1188, name: "3 Meter Hose / Pipe", company: "SHIVALIK INTERNATIONAL", category: "Other Parts", modelNo: "SK-3M", brandCode: "SK", description: "3 Meter Hose / Pipe", image: productImageUrl },
            { id: 1189, name: "4 Meter Hose / Pipe", company: "SHIVALIK INTERNATIONAL", category: "Other Parts", modelNo: "SK-4M", brandCode: "SK", description: "4 Meter Hose / Pipe", image: productImageUrl },
            { id: 1190, name: "5 Meter Hose / Pipe", company: "SHIVALIK INTERNATIONAL", category: "Other Parts", modelNo: "SK-5M", brandCode: "SK", description: "5 Meter Hose / Pipe", image: productImageUrl },
            { id: 1191, name: "Dual Size Connector 8+6", company: "SHIVALIK INTERNATIONAL", category: "Other Parts", modelNo: "SK-8+6", brandCode: "SK", description: "Dual Size Connector 8+6", image: productImageUrl },
            { id: 1192, name: "Dual Size Connector 9.5+4", company: "SHIVALIK INTERNATIONAL", category: "Other Parts", modelNo: "SK-9.5+4", brandCode: "SK", description: "Dual Size Connector 9.5+4", image: productImageUrl },
            { id: 1193, name: "Dual Size Connector 10+4", company: "SHIVALIK INTERNATIONAL", category: "Other Parts", modelNo: "SK-10+4", brandCode: "SK", description: "Dual Size Connector 10+4", image: productImageUrl },
            { id: 1194, name: "Dual Size Connector 10+5", company: "SHIVALIK INTERNATIONAL", category: "Other Parts", modelNo: "SK-10+5", brandCode: "SK", description: "Dual Size Connector 10+5", image: productImageUrl },
            { id: 1195, name: "Dual Size Connector 11+6", company: "SHIVALIK INTERNATIONAL", category: "Other Parts", modelNo: "SK-11+6", brandCode: "SK", description: "Dual Size Connector 11+6", image: productImageUrl },
            { id: 1196, name: "Dual Size Connector 12+6", company: "SHIVALIK INTERNATIONAL", category: "Other Parts", modelNo: "SK-12+6", brandCode: "SK", description: "Dual Size Connector 12+6", image: productImageUrl },
            { id: 1197, name: "Blue Adapter", company: "SHIVALIK INTERNATIONAL", category: "Other Parts", modelNo: "SK-BLUE-ADOPTER", brandCode: "SK", description: "Blue Adapter", image: productImageUrl },
            { id: 1198, name: "BS Sensor", company: "SHIVALIK INTERNATIONAL", category: "Other Parts", modelNo: "SK-BS-SENSOR", brandCode: "SK", description: "BS Sensor", image: productImageUrl },
            { id: 1199, name: "Buzzer", company: "SHIVALIK INTERNATIONAL", category: "Other Parts", modelNo: "SK-BUZZER", brandCode: "SK", description: "Buzzer", image: productImageUrl },
            { id: 1200, name: "GL Buzzer", company: "SHIVALIK INTERNATIONAL", category: "Other Parts", modelNo: "SK-GL-BUZZER", brandCode: "SK", description: "GL Buzzer", image: productImageUrl },
            { id: 1201, name: "Filter Adapter", company: "SHIVALIK INTERNATIONAL", category: "Other Parts", modelNo: "SK-FILTER-ADOPTER", brandCode: "SK", description: "Filter Adapter", image: productImageUrl },
            { id: 1202, name: "Washing Machine Hubs", company: "SHIVALIK INTERNATIONAL", category: "Other Parts", modelNo: "SK-HUBS", brandCode: "SK", description: "Washing Machine Hubs", image: productImageUrl },
            { id: 1203, name: "Safety Lock Component", company: "SHIVALIK INTERNATIONAL", category: "Other Parts", modelNo: "SK-SAFTY", brandCode: "SK", description: "Safety Lock Component", image: productImageUrl },
            { id: 1204, name: "IDH Spare Part", company: "SHIVALIK INTERNATIONAL", category: "Other Parts", modelNo: "SK-IDH", brandCode: "SK", description: "IDH Spare Part", image: productImageUrl },
            { id: 1205, name: "Samsung Sensor", company: "SHIVALIK INTERNATIONAL", category: "Other Parts", modelNo: "SK-SAM-SENSOR", brandCode: "SK", description: "Samsung Sensor", image: productImageUrl },
            { id: 1206, name: "Samsung Door Sensor", company: "SHIVALIK INTERNATIONAL", category: "Other Parts", modelNo: "SK-SAM-DOOR-SENDOR", brandCode: "SK", description: "Samsung Door Sensor", image: productImageUrl },
            { id: 1207, name: "Spare Screw Set", company: "SHIVALIK INTERNATIONAL", category: "Other Parts", modelNo: "SK-SCREW", brandCode: "SK", description: "Spare Screw Set", image: productImageUrl },
    // ...more SHIVALIK products from the image...
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
