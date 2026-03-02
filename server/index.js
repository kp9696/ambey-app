const oilSeparatorImageUrl = "/images/oil-separator.webp";
const microwaveImageUrl = "/images/microwave.webp";
const manufactureImageUrl = "/images/manufacture.webp";
const magnetronImageUrl = "/images/magnetron.webp";
const leakDetectorImageUrl = "/images/leak-detector.webp";
const leakDetectionImageUrl = "/images/leak-detection.webp";
const kettleThermostatImageUrl = "/images/kettle-thermostat.webp";
const kettleSwitchImageUrl = "/images/kettle-switch.webp";
const kettleSpareImageUrl = "/images/kettle-spare.webp";
const inletValveShivalikImageUrl = "/images/inlet-valve-shivalik.webp";
const inletValveImageUrl = "/images/inlet-valve.webp";
const brassHoseFittingsImageUrl = "/images/brass-hose-fittings.webp";
const highPressureWasherImageUrl = "/images/high-pressure-washer.webp";
const handShutOffValveImageUrl = "/images/hand-shut-off-valve.webp";
const hallSensorImageUrl = "/images/hall-sensor.webp";
const gaugeManifoldImageUrl = "/images/gauge-manifold.webp";
const gasketImageUrl = "/images/gasket.webp";
const gasEquipmentImageUrl = "/images/gas-equipment.webp";
const fuseImageUrl = "/images/fuse.webp";
const fullPlateImageUrl = "/images/full-plate.webp";
const halfPlateImageUrl = "/images/half-plate.webp";
const filterDrierImageUrl = "/images/filter-drier.webp";
const hvCapacitorImageUrl = "/images/hv-capacitor.webp";
const gearBoxImageUrl = "/images/gear-box.webp";
const quickCouplerImageUrl = "/images/quick-coupler.webp";
const refrigerantImageUrl = "/images/refrigerant.webp";
const refrigerantGasImageUrl = "/images/refrigerant-gas.webp";
const refrigerantRecoveryUnitImageUrl = "/images/refrigerant-recovery-unit.webp";
const fanMotorImageUrl = "/images/fan-motor.webp";
const expansionValveImageUrl = "/images/expansion-valve.webp";
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

// Serve static images from the images folder with cache headers
app.use('/images', express.static(__dirname + '/images', {
  maxAge: '30d',
  immutable: true,
  etag: true,
  lastModified: true,
}));

const productImageUrl = "/images/product.png";
const pressureWasherImageUrl = "/images/pressure-washer.webp";
const pressureSwitchImageUrl = "/images/pressure-switch.webp";
const pressureSensorImageUrl = "/images/pressure-sensor.webp";
const pressureGaugeImageUrl = "/images/pressure-gauge.webp";
const plasticGearImageUrl = "/images/plastic-gear.webp";
const pipeImageUrl = "/images/pipe.webp";
const packagingImageUrl = "/images/packaging.webp";
const puFoamSealantImageUrl = "/images/pu-foam-sealant.webp";
const ptfeThreadSealTapeImageUrl = "/images/ptfe-thread-seal-tape.webp";
const pcbImageUrl = "/images/pcb.webp";
const ovenMotorImageUrl = "/images/oven-motor.webp";
const pulsatorImageUrl = "/images/pulsator.webp";
const outdoorFanMotorImageUrl = "/images/outdoor-fan-motor.webp";
const otherPartsImageUrl = "/images/other-parts.webp";
const electronicScaleImageUrl = "/images/electronic-scale.webp";
const ecFanImageUrl = "/images/ec-fan.webp";
const refrigeratorDcMotorImageUrl = "/images/Refrigerator DC Motor.webp";
const acServiceVolveImageUrl = "/images/AC service volve.webp";
const acessVolveImageUrl = "/images/acess volve.webp";
const axialCoolingFanImageUrl = "/images/axial-cooling-fan.webp";
const ballValveImageUrl = "/images/Ball Valve.webp";
const bellowImageUrl = "/images/bellow.webp";
const boxTypeCondenserImageUrl = "/images/box-type-condenser.webp";
const brazingEquipmentImageUrl = "/images/brazing-equipment.webp";
const brazingFluxImageUrl = "/images/brazing-flux.webp";
const brazingRodImageUrl = "/images/brazing-rod.webp";
const butaneGasImageUrl = "/images/butane-gas.webp";
const canValveImageUrl = "/images/can-valve.webp";
const capillaryHoseImageUrl = "/images/capillary-hose.webp";
const centrifugalFanImageUrl = "/images/centrifugal-fan.webp";
const chargingHoseImageUrl = "/images/charging-hose.webp";
const checkValveImageUrl = "/images/check-valve.webp";
const clampMeterImageUrl = "/images/clamp-meter.webp";
const clutchImageUrl = "/images/clutch.webp";
const clutchMechanismImageUrl = "/images/clutch-mechanism.webp";
const coilCleanerImageUrl = "/images/coil-cleaner.webp";
const compressorImageUrl = "/images/compressor.webp";
const compressorOilImageUrl = "/images/compressor-oil.webp";
const condensateDrainPumpImageUrl = "/images/condensate-drain-pump.webp";
const condensatePumpImageUrl = "/images/condensate-pump.webp";
const condenserImageUrl = "/images/condenser.webp";
const condenserCoilCategoryImageUrl = "/images/condenser-coil.webp";
const condensingUnitImageUrl = "/images/condensing-unit.webp";
const contactorImageUrl = "/images/contactor.webp";
const controlValveImageUrl = "/images/control-valve.webp";
const copperTubeImageUrl = "/images/copper-tube.webp";
const couplingImageUrl = "/images/coupling.webp";
const digitalGaugeImageUrl = "/images/digital-gauge.webp";
const digitalScrollImageUrl = "/images/digital-scroll.webp";
const diodeImageUrl = "/images/diode.webp";
const dispenserCondenserImageUrl = "/images/dispenser-condenser.webp";
const doorLockImageUrl = "/images/door-lock.webp";
const drainMotorImageUrl = "/images/drain-motor.webp";
const drainPumpImageUrl = "/images/drain-pump.webp";
const drumSpiderImageUrl = "/images/drum-spider.webp";
const dualCapacitorImageUrl = "/images/dual-capacitor.webp";
const baseProducts = [
  // DC Motors
  { id: 1, name: "LG 4 Wire CCW DC Motor (100% Copper Winding)", company: "SYMBOL", category: "Refrigerator DC Motor", modelNo: "SR-GL4W-DC", brandCode: "SR", description: "LG 4 Wire CCW DC Motor (100% Copper Winding)", image: refrigeratorDcMotorImageUrl },
  { id: 2, name: "BOS 3 Wire 9V CCW DC Motor", company: "SYMBOL", category: "Refrigerator DC Motor", modelNo: "SR-BOS3W-9VDC", brandCode: "SR", description: "BOS 3 Wire 9V CCW DC Motor", image: refrigeratorDcMotorImageUrl },
  { id: 3, name: "WP 3 Wire CCW DC Motor", company: "SYMBOL", category: "Refrigerator DC Motor", modelNo: "SR-WP3W-DC", brandCode: "SR", description: "WP 3 Wire CCW DC Motor", image: refrigeratorDcMotorImageUrl },
  { id: 4, name: "GOD 2 Wire CCW DC Motor", company: "SYMBOL", category: "Refrigerator DC Motor", modelNo: "SR-GD2W-DC", brandCode: "SR", description: "GOD 2 Wire CCW DC Motor", image: refrigeratorDcMotorImageUrl },
  { id: 5, name: "SS 3 Wire Long Shaft CCW DC Motor", company: "SYMBOL", category: "Refrigerator DC Motor", modelNo: "SR-SS3W-LS-DC", brandCode: "SR", description: "SS 3 Wire Long Shaft CCW DC Motor", image: refrigeratorDcMotorImageUrl },
  { id: 6, name: "SS 3 Wire New Model CCW DC Motor", company: "SYMBOL", category: "Refrigerator DC Motor", modelNo: "SR-SS3WNM-DC", brandCode: "SR", description: "SS 3 Wire New Model CCW DC Motor", image: refrigeratorDcMotorImageUrl },
  { id: 7, name: "SS 3 Wire Short Shaft CW DC Motor", company: "SYMBOL", category: "Refrigerator DC Motor", modelNo: "SR-SS3W-SS-DC", brandCode: "SR", description: "SS 3 Wire Short Shaft CW DC Motor", image: refrigeratorDcMotorImageUrl },
  { id: 8, name: "SS 3 Wire Fan (Black) 92mm Diameter", company: "SYMBOL", category: "Refrigerator DC Motor", modelNo: "SR-SS3W-FB", brandCode: "SR", description: "SS 3 Wire Fan (Black) 92mm Diameter", image: refrigeratorDcMotorImageUrl },
  { id: 9, name: "SS 3 Wire Fan (White) 125mm Diameter", company: "SYMBOL", category: "Refrigerator DC Motor", modelNo: "SR-SS3W-FW", brandCode: "SR", description: "SS 3 Wire Fan (White) 125mm Diameter", image: refrigeratorDcMotorImageUrl },
  // DONGHAI TECHNOLOGY Products
  { id: 58, name: "XD 001-OND", company: "DONGHAI TECHNOLOGY", category: "Semi-Automatic Washing Machine Gear Box", modelNo: "XD 001-OND", brandCode: "OND", description: "Square Shaft 33mm", image: gearBoxImageUrl },
  { id: 59, name: "XD 002-LE OLD", company: "DONGHAI TECHNOLOGY", category: "Semi-Automatic Washing Machine Gear Box", modelNo: "XD 002-LE OLD", brandCode: "LE", description: "Round Shaft 30mm, 11 Teeth", image: gearBoxImageUrl },
  { id: 60, name: "XD 003-VC 400T", company: "DONGHAI TECHNOLOGY", category: "Semi-Automatic Washing Machine Gear Box", modelNo: "XD 003-VC 400T", brandCode: "VC", description: "Square Shaft 33mm", image: gearBoxImageUrl },
  { id: 61, name: "XD 006-NAT/PAN", company: "DONGHAI TECHNOLOGY", category: "Semi-Automatic Washing Machine Gear Box", modelNo: "XD 006-NAT/PAN", brandCode: "NAT/PAN", description: "Round Shaft 30mm, 11 Teeth", image: gearBoxImageUrl },
  { id: 62, name: "XD 007-55BT", company: "DONGHAI TECHNOLOGY", category: "Semi-Automatic Washing Machine Gear Box", modelNo: "XD 007-55BT", brandCode: "55BT", description: "Round Shaft 35mm, 10 Teeth", image: gearBoxImageUrl },
  { id: 63, name: "XD 008-SS", company: "DONGHAI TECHNOLOGY", category: "Semi-Automatic Washing Machine Gear Box", modelNo: "XD 008-SS", brandCode: "SS", description: "Square Shaft 30mm", image: gearBoxImageUrl },
  { id: 64, name: "XD 011-HAR/60HBT", company: "DONGHAI TECHNOLOGY", category: "Semi-Automatic Washing Machine Gear Box", modelNo: "XD 011-HAR/60HBT", brandCode: "HAR", description: "Round Shaft 35mm, 10 Teeth", image: gearBoxImageUrl },
  { id: 65, name: "XD 012-VC MULTI 6800", company: "DONGHAI TECHNOLOGY", category: "Semi-Automatic Washing Machine Gear Box", modelNo: "XD 012-VC MULTI 6800", brandCode: "VC", description: "Square Shaft 28mm", image: gearBoxImageUrl },
  { id: 66, name: "XD 016-WP 801", company: "DONGHAI TECHNOLOGY", category: "Semi-Automatic Washing Machine Gear Box", modelNo: "XD 016-WP 801", brandCode: "WP", description: "Square Shaft 45mm", image: gearBoxImageUrl },
  { id: 67, name: "XD 021-LE NEW", company: "DONGHAI TECHNOLOGY", category: "Semi-Automatic Washing Machine Gear Box", modelNo: "XD 021-LE NEW", brandCode: "LE", description: "Round Shaft 28mm, 11 Teeth", image: gearBoxImageUrl },
  { id: 68, name: "Spin Timer GLS", company: "DONGHAI TECHNOLOGY", category: "Washing Machine Timer", modelNo: "Spin Timer GLS", brandCode: "GL", description: "Spin Timer", image: productImageUrl },
  { id: 69, name: "Spin Timer SS", company: "DONGHAI TECHNOLOGY", category: "Washing Machine Timer", modelNo: "Spin Timer SS", brandCode: "SS", description: "Spin Timer", image: productImageUrl },
  { id: 70, name: "Timer WP 7W 15Min", company: "DONGHAI TECHNOLOGY", category: "Washing Machine Timer", modelNo: "Timer WP 7W 15Min", brandCode: "WP", description: "7 Wire, 15 Minutes", image: productImageUrl },
  { id: 71, name: "Spin Motor GLS", company: "DONGHAI TECHNOLOGY", category: "Waterproof Spin Motor", modelNo: "Spin Motor GLS", brandCode: "GL", description: "Waterproof Motor", image: productImageUrl },
  { id: 72, name: "Spin Motor WP", company: "DONGHAI TECHNOLOGY", category: "Waterproof Spin Motor", modelNo: "Spin Motor WP", brandCode: "WP", description: "Waterproof Motor", image: productImageUrl },
  { id: 73, name: "Wash Motor GL", company: "DONGHAI TECHNOLOGY", category: "Wash Motor", modelNo: "Wash Motor GL", brandCode: "GL", description: "Washing Machine Motor", image: productImageUrl },
  { id: 74, name: "Wash Motor VC 6800", company: "DONGHAI TECHNOLOGY", category: "Wash Motor", modelNo: "Wash Motor VC 6800", brandCode: "VC", description: "Washing Machine Motor", image: productImageUrl },
  { id: 75, name: "GL 1 Way", company: "DONGHAI TECHNOLOGY", category: "Inlet Valve", modelNo: "GL 1 Way", brandCode: "GL", description: "Washing Machine Inlet Valve", image: inletValveImageUrl },
  { id: 76, name: "GL DC 3 Way New", company: "DONGHAI TECHNOLOGY", category: "Inlet Valve", modelNo: "GL DC 3 Way New", brandCode: "GL", description: "DC 3 Way Valve", image: inletValveImageUrl },
  { id: 77, name: "Drain Motor GL", company: "DONGHAI TECHNOLOGY", category: "Drain Motor", modelNo: "Drain Motor GL", brandCode: "GL", description: "Washing Machine Drain Motor", image: drainMotorImageUrl },
  { id: 78, name: "GL", company: "DONGHAI TECHNOLOGY", category: "Pressure Sensor", modelNo: "GL", brandCode: "GL", description: "Washing Machine Pressure Sensor", image: pressureSensorImageUrl },
  { id: 79, name: "GL Single Gear", company: "DONGHAI TECHNOLOGY", category: "Clutch Mechanism", modelNo: "GL Single Gear", brandCode: "GL", description: "Washing Machine Clutch", image: clutchMechanismImageUrl },
  { id: 80, name: "GL", company: "DONGHAI TECHNOLOGY", category: "Hub & Drum Spider", modelNo: "GL", brandCode: "GL", description: "Washing Machine Hub", image: drumSpiderImageUrl },
  { id: 81, name: "IF Small", company: "DONGHAI TECHNOLOGY", category: "Drain Pump", modelNo: "IF Small", brandCode: "IF", description: "Washing Machine Drain Pump", image: drainPumpImageUrl },
  { id: 82, name: "Door Lock GL", company: "DONGHAI TECHNOLOGY", category: "Door Lock", modelNo: "Door Lock GL", brandCode: "GL", description: "Washing Machine Door Lock", image: doorLockImageUrl },
  { id: 83, name: "Shocker GL", company: "DONGHAI TECHNOLOGY", category: "Shockers", modelNo: "Shocker GL", brandCode: "GL", description: "Washing Machine Shocker", image: productImageUrl },
  { id: 84, name: "Magnetron Witol 210", company: "DONGHAI TECHNOLOGY", category: "Microwave Spare", modelNo: "Magnetron Witol 210", brandCode: "WITOL", description: "6 Fin", image: microwaveImageUrl },
  { id: 85, name: "Magnetron GL 213", company: "DONGHAI TECHNOLOGY", category: "Microwave Spare", modelNo: "Magnetron GL 213", brandCode: "GL", description: "6 Fin", image: microwaveImageUrl },
  { id: 86, name: "H.V Capacitor 1.00 MFD", company: "DONGHAI TECHNOLOGY", category: "Microwave Spare", modelNo: "H.V Capacitor 1.00 MFD", brandCode: "—", description: "Microwave Capacitor", image: microwaveImageUrl },
  { id: 87, name: "Oven 2 Pin Motor", company: "DONGHAI TECHNOLOGY", category: "Oven Spare", modelNo: "Oven 2 Pin Motor", brandCode: "—", description: "Oven Motor", image: ovenMotorImageUrl },
  { id: 88, name: "Kettle Thermostat Single Point", company: "DONGHAI TECHNOLOGY", category: "Kettle Spare", modelNo: "Kettle Thermostat Single Point", brandCode: "—", description: "Thermostat", image: kettleSpareImageUrl },
  { id: 89, name: "Ventilation Fan Motor", company: "DONGHAI TECHNOLOGY", category: "Fan Motor", modelNo: "Ventilation Fan Motor", brandCode: "—", description: "Fan Motor", image: fanMotorImageUrl },
  // AC Motors
  { id: 10, name: "GL Refrigerator AC Motor", company: "SYMBOL", category: "Refrigerator AC Motor", modelNo: "SR-GL-AC", brandCode: "SR", description: "GL Refrigerator AC Motor", image: productImageUrl },
  { id: 11, name: "GL IB Refrigerator AC Motor", company: "SYMBOL", category: "Refrigerator AC Motor", modelNo: "SR-GLIB-AC", brandCode: "SR", description: "GL IB Refrigerator AC Motor", image: productImageUrl },
  { id: 12, name: "SS Refrigerator AC Motor", company: "SYMBOL", category: "Refrigerator AC Motor", modelNo: "SR-SS-AC", brandCode: "SR", description: "SS Refrigerator AC Motor", image: productImageUrl },
  { id: 13, name: "SS IB Refrigerator AC Motor", company: "SYMBOL", category: "Refrigerator AC Motor", modelNo: "SR-SSIB-AC", brandCode: "SR", description: "SS IB Refrigerator AC Motor", image: productImageUrl },
  { id: 1384, name: "Harris Regulators", company: "SAFEREF", category: "Brazing Equipment", modelNo: "Harris Regulators", brandCode: "HARRIS", description: "Gas Regulators & Brazing Equipment", image: brazingEquipmentImageUrl },
  { id: 1385, name: "Brazing Rod", company: "SAFEREF", category: "Brazing Rod", modelNo: "—", brandCode: "HARRIS", description: "Silver Brazing Alloys", image: brazingRodImageUrl },
  { id: 1386, name: "Gas Equipment", company: "SAFEREF", category: "Gas Equipment", modelNo: "—", brandCode: "HARRIS", description: "Gas Torches & Accessories", image: gasEquipmentImageUrl },
  { id: 1387, name: "NRAC Rotary", company: "SAFEREF", category: "Compressor", modelNo: "NRAC Rotary", brandCode: "HIGHLY", description: "NRAC Rotary Compressor", image: compressorImageUrl },
  { id: 1388, name: "Hermetic FHP", company: "SAFEREF", category: "Compressor", modelNo: "Hermetic FHP", brandCode: "HUAYI", description: "Hermetic FHP Compressor", image: compressorImageUrl },
  { id: 1389, name: "Scroll", company: "SAFEREF", category: "Compressor", modelNo: "Scroll", brandCode: "COPELAND", description: "Scroll Compressor", image: compressorImageUrl },
  { id: 1390, name: "Scroll", company: "SAFEREF", category: "Compressor", modelNo: "Scroll", brandCode: "SIAM", description: "Refrigeration Scroll Compressor", image: compressorImageUrl },
  { id: 1391, name: "NT / NE / EM / NJ / F Series", company: "SAFEREF", category: "Compressor", modelNo: "NT / NE / EM / NJ / F Series", brandCode: "EMBRACO NIDEC", description: "Hermetic Compressor Series", image: compressorImageUrl },
  { id: 1392, name: "AC Series", company: "SAFEREF", category: "Axial Flow Fan", modelNo: "AC Series", brandCode: "TRUMAXX", description: "Axial Flow Fan (AC)", image: axialCoolingFanImageUrl },
  { id: 1393, name: "DC Series", company: "SAFEREF", category: "Centrifugal Fan", modelNo: "DC Series", brandCode: "TRUMAXX", description: "Centrifugal Flow Fan (DC)", image: centrifugalFanImageUrl },
  { id: 1394, name: "EC Series", company: "SAFEREF", category: "EC Fan", modelNo: "EC Series", brandCode: "TRUMAXX", description: "EC Motor Fan", image: ecFanImageUrl },
  { id: 1395, name: "PS4", company: "SAFEREF", category: "Pressure Switch", modelNo: "PS4", brandCode: "COPELAND", description: "Pressure Switch", image: pressureSwitchImageUrl },
  { id: 1396, name: "PS2", company: "SAFEREF", category: "Pressure Switch", modelNo: "PS2", brandCode: "COPELAND", description: "Pressure Switch", image: pressureSwitchImageUrl },
  { id: 1397, name: "Ball Valve", company: "SAFEREF", category: "Ball Valve", modelNo: "—", brandCode: "COPELAND", description: "Ball Valve", image: ballValveImageUrl },
  { id: 1398, name: "Suction Accumulator", company: "SAFEREF", category: "Suction Accumulator", modelNo: "—", brandCode: "COPELAND", description: "Suction Accumulator", image: productImageUrl },
  { id: 1399, name: "Expansion Valve", company: "SAFEREF", category: "Expansion Valve", modelNo: "—", brandCode: "COPELAND", description: "Expansion Valve", image: expansionValveImageUrl },
  { id: 1400, name: "Filter Drier", company: "SAFEREF", category: "Filter Drier", modelNo: "—", brandCode: "COPELAND", description: "Filter Drier", image: filterDrierImageUrl },
  { id: 1401, name: "Cold Chain Solution", company: "SAFEREF", category: "Condensing Unit", modelNo: "Cold Chain Solution", brandCode: "DAIKIN", description: "Commercial Refrigeration Unit", image: condensingUnitImageUrl },
  { id: 1402, name: "Fusion Tandem", company: "SAFEREF", category: "Digital Scroll", modelNo: "Fusion Tandem", brandCode: "DAIKIN", description: "Digital Scroll System", image: digitalScrollImageUrl },
  { id: 1403, name: "Tool Kit", company: "SAFEREF", category: "Tool Kit", modelNo: "—", brandCode: "TRU", description: "HVAC&R Tools & Accessories", image: productImageUrl },
  { id: 1404, name: "Coupling", company: "SAFEREF", category: "Coupling", modelNo: "—", brandCode: "VICTAULIC", description: "Mechanical Coupling", image: couplingImageUrl },
  { id: 1405, name: "Check Valve", company: "SAFEREF", category: "Check Valve", modelNo: "—", brandCode: "VICTAULIC", description: "Check Valve", image: checkValveImageUrl },
  { id: 1406, name: "Tube Tools", company: "SAFEREF", category: "Tube Tools", modelNo: "—", brandCode: "JAVAC", description: "Tube Tools & Flaring Tools", image: productImageUrl },
  { id: 1407, name: "Hose Fittings", company: "SAFEREF", category: "Hose Fittings", modelNo: "—", brandCode: "ZED", description: "Brass Hose Fittings", image: brassHoseFittingsImageUrl },
  { id: 1408, name: "Capillary Hose", company: "SAFEREF", category: "Capillary Hose", modelNo: "—", brandCode: "ZED", description: "Capillary Tube & Hose", image: capillaryHoseImageUrl },
  { id: 1409, name: "Condensate Pump", company: "SAFEREF", category: "Condensate Pump", modelNo: "—", brandCode: "ASPEN", description: "Condensate Removal Pumps", image: condensatePumpImageUrl },
  { id: 1410, name: "Tools & Accessories", company: "SAFEREF", category: "Tools & Accessories", modelNo: "—", brandCode: "HONGSEN", description: "HVAC Tools & Gauges", image: productImageUrl },
  { id: 1411, name: "Premium Quality", company: "SAFEREF", category: "Copper Tube", modelNo: "Premium Quality", brandCode: "MUELLER / HALSTEAD", description: "Copper Tubes", image: copperTubeImageUrl },
  { id: 1412, name: "Refrigeration Oil", company: "SAFEREF", category: "Refrigeration Oil", modelNo: "—", brandCode: "EMKARATE", description: "Refrigeration Lubricant Oil", image: productImageUrl },
  { id: 1413, name: "GloSeal", company: "SAFEREF", category: "Leak Detection", modelNo: "GloSeal", brandCode: "SPECTROLINE", description: "Sealant with Fluorescent Dye", image: leakDetectionImageUrl },
  { id: 1414, name: "HE 701 F95", company: "HE", category: "Outdoor Fan Motor", modelNo: "HE 701 F95", brandCode: "HE", description: "Suitable for LG 1.5 Ton, 870 RPM, 39W, CW, 2mfd Capacitor", image: outdoorFanMotorImageUrl },
  { id: 1415, name: "HE 702 F95", company: "HE", category: "Outdoor Fan Motor", modelNo: "HE 702 F95", brandCode: "HE", description: "Suitable for Videocon, 1100 RPM, 55W, CW, 3mfd Capacitor", image: outdoorFanMotorImageUrl },
  { id: 1416, name: "HE 703 F95", company: "HE", category: "Outdoor Fan Motor", modelNo: "HE 703 F95", brandCode: "HE", description: "Suitable for Voltas, 920 RPM, 45W, CCW, 2.5mfd Capacitor", image: outdoorFanMotorImageUrl },
  { id: 1417, name: "HE 704 F95", company: "HE", category: "Outdoor Fan Motor", modelNo: "HE 704 F95", brandCode: "HE", description: "Suitable for Lloyd, 1100 RPM, 55W, CW, 3mfd Capacitor", image: outdoorFanMotorImageUrl },
  { id: 1418, name: "HE 705 F95", company: "HE", category: "Outdoor Fan Motor", modelNo: "HE 705 F95", brandCode: "HE", description: "Suitable for Speed & More, 900 RPM, 55W, CCW, 3mfd Capacitor", image: outdoorFanMotorImageUrl },
  { id: 1419, name: "HE 707 F95", company: "HE", category: "Outdoor Fan Motor", modelNo: "HE 707 F95", brandCode: "HE", description: "Suitable for Voltas & More, 1200 RPM, 65W, CW, 3mfd Capacitor", image: outdoorFanMotorImageUrl },
  { id: 1420, name: "HE 708 F95", company: "HE", category: "Outdoor Fan Motor", modelNo: "HE 708 F95", brandCode: "HE", description: "850 RPM, 64W, CCW, 2.5mfd Capacitor", image: outdoorFanMotorImageUrl },
  { id: 1421, name: "HE 709 F95", company: "HE", category: "Outdoor Fan Motor", modelNo: "HE 709 F95", brandCode: "HE", description: "Suitable for Voltas & More, 870 RPM, 38W, CW, 2.5mfd Capacitor", image: outdoorFanMotorImageUrl },
  { id: 1422, name: "HE 710 F95", company: "HE", category: "Outdoor Fan Motor", modelNo: "HE 710 F95", brandCode: "HE", description: "Suitable for Samsung & More, 1050 RPM, 45W, CW, 2.5mfd Capacitor", image: outdoorFanMotorImageUrl },
  { id: 1423, name: "HE 711 F95", company: "HE", category: "Outdoor Fan Motor", modelNo: "HE 711 F95", brandCode: "HE", description: "Suitable for Lloyd & More, 1100 RPM, 55W, CW, 3mfd Capacitor", image: outdoorFanMotorImageUrl },
  { id: 1424, name: "HE 712 F95", company: "HE", category: "Outdoor Fan Motor", modelNo: "HE 712 F95", brandCode: "HE", description: "Suitable for Voltas, Whirlpool, Blue Star, Godrej (PICL 1145,1147,1233,1230), 880 RPM, 55W, CW, 3mfd Capacitor", image: outdoorFanMotorImageUrl },
  { id: 1425, name: "HE 713 F95", company: "HE", category: "Outdoor Fan Motor", modelNo: "HE 713 F95", brandCode: "HE", description: "920 RPM, 45W, CW, 2.5mfd Capacitor", image: outdoorFanMotorImageUrl },
  { id: 1426, name: "HE 714 F95", company: "HE", category: "Outdoor Fan Motor", modelNo: "HE 714 F95", brandCode: "HE", description: "1100 RPM, 65W, CW, 3mfd Capacitor", image: outdoorFanMotorImageUrl },
  { id: 1427, name: "HE 715 F95", company: "HE", category: "Outdoor Fan Motor", modelNo: "HE 715 F95", brandCode: "HE", description: "Suitable for Voltas & More, 1100 RPM, 65W, CCW, 3mfd Capacitor", image: outdoorFanMotorImageUrl },
  { id: 1428, name: "HE 718 F95", company: "HE", category: "Outdoor Fan Motor", modelNo: "HE 718 F95", brandCode: "HE", description: "Suitable for Hair (PICL UC-1153,1121,1141,1107), 860 RPM, 30W, CCW, 3mfd Capacitor", image: outdoorFanMotorImageUrl },
  { id: 1429, name: "HE 728 F95", company: "HE", category: "Outdoor Fan Motor", modelNo: "HE 728 F95", brandCode: "HE", description: "Suitable for Voltas, Azure, 1050 RPM, 93W, CW, 4mfd Capacitor", image: outdoorFanMotorImageUrl },
  { id: 1430, name: "HE 729 F95", company: "HE", category: "Outdoor Fan Motor", modelNo: "HE 729 F95", brandCode: "HE", description: "Suitable for Hitachi, 900 RPM, 54W, CW, 3mfd Capacitor", image: outdoorFanMotorImageUrl },
  { id: 1431, name: "HE 734 F95", company: "HE", category: "Outdoor Fan Motor", modelNo: "HE 734 F95", brandCode: "HE", description: "Suitable for Panasonic (UC 052, UC 024, 011), 1020 RPM, 60W, CW, 3mfd Capacitor", image: outdoorFanMotorImageUrl },
  { id: 1432, name: "HE 736 F95", company: "HE", category: "Outdoor Fan Motor", modelNo: "HE 736 F95", brandCode: "HE", description: "Suitable for GAL 28A, 900 RPM, 28W, CCW, 2mfd Capacitor", image: outdoorFanMotorImageUrl },
  { id: 1433, name: "HE 737 F95", company: "HE", category: "Outdoor Fan Motor", modelNo: "HE 737 F95", brandCode: "HE", description: "Suitable for GAL 30A, 900 RPM, 30W, CW, 2mfd Capacitor", image: outdoorFanMotorImageUrl },
  { id: 1434, name: "HE 738 F95", company: "HE", category: "Outdoor Fan Motor", modelNo: "HE 738 F95", brandCode: "HE", description: "Suitable for GAL 38A, 880 RPM, 38W, CW, 2.5mfd Capacitor", image: outdoorFanMotorImageUrl },
  { id: 1435, name: "HE 739 F95", company: "HE", category: "Outdoor Fan Motor", modelNo: "HE 739 F95", brandCode: "HE", description: "Suitable for Daikin, 900 RPM, 37W, CCW, 2mfd Capacitor", image: outdoorFanMotorImageUrl },
  { id: 1436, name: "HE 740 F95", company: "HE", category: "Outdoor Fan Motor", modelNo: "HE 740 F95", brandCode: "HE", description: "Suitable for LG 2 Ton, 1170 RPM, 69W, CW, 3mfd Capacitor", image: outdoorFanMotorImageUrl },
  { id: 1437, name: "HE 741 F95", company: "HE", category: "Outdoor Fan Motor", modelNo: "HE 741 F95", brandCode: "HE", description: "Suitable for Hitachi (UC-1167), 1140 RPM, 68W, CCW, 3mfd Capacitor", image: outdoorFanMotorImageUrl },
  { id: 1438, name: "Samsung-Godrej-Onida-Haier-New", company: "WASHING MACHINE MOTORS", category: "Spin Motor", modelNo: "Samsung-Godrej-Onida-Haier-New", brandCode: "WM", description: "Suitable for Samsung, Godrej, Onida, Haier New", image: productImageUrl },
  { id: 1439, name: "Videocon-400T", company: "WASHING MACHINE MOTORS", category: "Spin Motor", modelNo: "Videocon-400T", brandCode: "WM", description: "Suitable for Videocon 400T", image: productImageUrl },
  { id: 1440, name: "Whirlpool-Old-Model", company: "WASHING MACHINE MOTORS", category: "Spin Motor", modelNo: "Whirlpool-Old-Model", brandCode: "WM", description: "Suitable for Whirlpool Old Model", image: productImageUrl },
  { id: 1441, name: "Onida", company: "WASHING MACHINE MOTORS", category: "Wash Motor", modelNo: "Onida", brandCode: "WM", description: "Suitable for Onida", image: productImageUrl },
  { id: 1442, name: "Videocon-6800", company: "WASHING MACHINE MOTORS", category: "Wash Motor", modelNo: "Videocon-6800", brandCode: "WM", description: "Suitable for Videocon 6800", image: productImageUrl },
  { id: 1443, name: "Samsung-Haier", company: "WASHING MACHINE MOTORS", category: "Wash Motor", modelNo: "Samsung-Haier", brandCode: "WM", description: "Suitable for Samsung, Haier", image: productImageUrl },
  { id: 1444, name: "LG", company: "WASHING MACHINE MOTORS", category: "Wash Motor", modelNo: "LG", brandCode: "WM", description: "Suitable for LG", image: productImageUrl },
  { id: 1445, name: "Whirlpool-New-Model", company: "WASHING MACHINE MOTORS", category: "Wash Motor", modelNo: "Whirlpool-New-Model", brandCode: "WM", description: "Suitable for Whirlpool New Model", image: productImageUrl },
  { id: 1446, name: "Whirlpool", company: "WASHING MACHINE MOTORS", category: "Wash Motor", modelNo: "Whirlpool", brandCode: "WM", description: "Suitable for Whirlpool", image: productImageUrl },
  { id: 1447, name: "Universal-12-Hole", company: "WASHING MACHINE MOTORS", category: "Wash Motor", modelNo: "Universal-12-Hole", brandCode: "WM", description: "Universal 12 Hole Model", image: productImageUrl },
  { id: 1448, name: "Samsung-Thread-Shaft", company: "WASHING MACHINE MOTORS", category: "Wash Motor", modelNo: "Samsung-Thread-Shaft", brandCode: "WM", description: "Samsung Thread Shaft Model", image: productImageUrl },
  { id: 1449, name: "Specification", company: "WASHING MACHINE MOTORS", category: "Specification", modelNo: "—", brandCode: "WM", description: "Available in 100% Copper and Aluminum winding", image: productImageUrl },
  { id: 1450, name: "Specification", company: "WASHING MACHINE MOTORS", category: "Specification", modelNo: "—", brandCode: "WM", description: "Other models available as well", image: productImageUrl },
  { id: 1451, name: "Packaging", company: "WASHING MACHINE MOTORS", category: "Packaging", modelNo: "—", brandCode: "WM", description: "Master Box: 6 pcs", image: packagingImageUrl },
    // DONGHAI TECHNOLOGY Spin Motor
    { id: 131, name: "Spin Motor GL", company: "DONGHAI TECHNOLOGY", category: "Spin Motor", modelNo: "GL", brandCode: "DT", description: "Waterproof Spin Motor", image: productImageUrl },
    { id: 132, name: "Spin Motor SS", company: "DONGHAI TECHNOLOGY", category: "Spin Motor", modelNo: "SS", brandCode: "DT", description: "Waterproof Spin Motor", image: productImageUrl },
    { id: 133, name: "Spin Motor VC", company: "DONGHAI TECHNOLOGY", category: "Spin Motor", modelNo: "VC", brandCode: "DT", description: "Waterproof Spin Motor", image: productImageUrl },
    { id: 134, name: "Spin Motor WP", company: "DONGHAI TECHNOLOGY", category: "Spin Motor", modelNo: "WP", brandCode: "DT", description: "Waterproof Spin Motor", image: productImageUrl },
    { id: 136, name: "Spin Motor MULTI", company: "DONGHAI TECHNOLOGY", category: "Spin Motor", modelNo: "MULTI", brandCode: "DT", description: "Universal Spin Motor", image: productImageUrl },
    // DONGHAI TECHNOLOGY Wash Motor
    { id: 137, name: "Wash Motor GL", company: "DONGHAI TECHNOLOGY", category: "Wash Motor", modelNo: "GL", brandCode: "DT", description: "Wash Motor", image: productImageUrl },
    { id: 138, name: "Wash Motor SS", company: "DONGHAI TECHNOLOGY", category: "Wash Motor", modelNo: "SS", brandCode: "DT", description: "Wash Motor", image: productImageUrl },
    { id: 139, name: "Wash Motor VC 6800", company: "DONGHAI TECHNOLOGY", category: "Wash Motor", modelNo: "VC 6800", brandCode: "DT", description: "Wash Motor", image: productImageUrl },
    { id: 140, name: "Wash Motor ON", company: "DONGHAI TECHNOLOGY", category: "Wash Motor", modelNo: "ON", brandCode: "DT", description: "Wash Motor", image: productImageUrl },
    { id: 141, name: "Wash Motor GOD", company: "DONGHAI TECHNOLOGY", category: "Wash Motor", modelNo: "GOD", brandCode: "DT", description: "Wash Motor", image: productImageUrl },
    { id: 142, name: "Wash Motor VC 400T", company: "DONGHAI TECHNOLOGY", category: "Wash Motor", modelNo: "VC 400T", brandCode: "DT", description: "Wash Motor", image: productImageUrl },
    { id: 1379, name: "Wash Motor WP", company: "DONGHAI TECHNOLOGY", category: "Wash Motor", modelNo: "WP", brandCode: "DT", description: "Wash Motor", image: productImageUrl },
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
    { id: 157, name: "GL 1 WAY", company: "DONGHAI TECHNOLOGY", category: "Inlet Valve", modelNo: "GL 1 WAY", brandCode: "DT", description: "Single Way Valve", image: inletValveImageUrl },
    { id: 158, name: "GL 2 WAY", company: "DONGHAI TECHNOLOGY", category: "Inlet Valve", modelNo: "GL 2 WAY", brandCode: "DT", description: "Double Way Valve", image: inletValveImageUrl },
    { id: 159, name: "GL DC 3 WAY NEW", company: "DONGHAI TECHNOLOGY", category: "Inlet Valve", modelNo: "GL DC 3 WAY NEW", brandCode: "DT", description: "DC Triple Valve", image: inletValveImageUrl },
    { id: 160, name: "GL DC Red", company: "DONGHAI TECHNOLOGY", category: "Inlet Valve", modelNo: "GL DC Red", brandCode: "GL", description: "DC Valve – Red", image: inletValveImageUrl },
    { id: 161, name: "GL DC Grey", company: "DONGHAI TECHNOLOGY", category: "Inlet Valve", modelNo: "GL DC Grey", brandCode: "GL", description: "DC Valve – Grey", image: inletValveImageUrl },
    { id: 162, name: "GL DC Long 1 Coil", company: "DONGHAI TECHNOLOGY", category: "Inlet Valve", modelNo: "GL DC Long 1 Coil", brandCode: "GL", description: "Long Body – 1 Coil", image: inletValveImageUrl },
    { id: 163, name: "GL DC Long 2 Coil", company: "DONGHAI TECHNOLOGY", category: "Inlet Valve", modelNo: "GL DC Long 2 Coil", brandCode: "GL", description: "Long Body – 2 Coil", image: inletValveImageUrl },
    { id: 164, name: "GL DC Long 3 Coil", company: "DONGHAI TECHNOLOGY", category: "Inlet Valve", modelNo: "GL DC Long 3 Coil", brandCode: "GL", description: "Long Body – 3 Coil", image: inletValveImageUrl },
    { id: 165, name: "GL FL 2 Way", company: "DONGHAI TECHNOLOGY", category: "Inlet Valve", modelNo: "GL FL 2 Way", brandCode: "GL", description: "Front Load Valve", image: inletValveImageUrl },
    { id: 166, name: "GL DC FL 3 Way", company: "DONGHAI TECHNOLOGY", category: "Inlet Valve", modelNo: "GL DC FL 3 Way", brandCode: "GL", description: "Front Load DC Valve", image: inletValveImageUrl },
    { id: 167, name: "VID 1 WAY", company: "DONGHAI TECHNOLOGY", category: "Inlet Valve", modelNo: "VID 1 WAY", brandCode: "DT", description: "Videocon Valve", image: inletValveImageUrl },
    { id: 168, name: "PNS 2 WAY", company: "DONGHAI TECHNOLOGY", category: "Inlet Valve", modelNo: "PNS 2 WAY", brandCode: "DT", description: "PNS Valve", image: inletValveImageUrl },
    { id: 169, name: "BSH 1 Way", company: "DONGHAI TECHNOLOGY", category: "Inlet Valve", modelNo: "BSH 1 Way", brandCode: "BSH", description: "1 Way Valve", image: inletValveImageUrl },
    { id: 170, name: "BSH 2 WAY", company: "DONGHAI TECHNOLOGY", category: "Inlet Valve", modelNo: "BSH 2 WAY", brandCode: "DT", description: "Bosch Valve", image: inletValveImageUrl },
    { id: 171, name: "BSH 2 Way with Sensor", company: "DONGHAI TECHNOLOGY", category: "Inlet Valve", modelNo: "BSH 2 Way with Sensor", brandCode: "BSH", description: "Sensor Type", image: inletValveImageUrl },
    { id: 172, name: "SS 1 WAY", company: "DONGHAI TECHNOLOGY", category: "Inlet Valve", modelNo: "SS 1 WAY", brandCode: "DT", description: "Samsung Valve", image: inletValveImageUrl },
    { id: 173, name: "SS 2 Way", company: "DONGHAI TECHNOLOGY", category: "Inlet Valve", modelNo: "SS 2 Way", brandCode: "SS", description: "2 Way Valve", image: inletValveImageUrl },
    { id: 174, name: "SS 3 Way", company: "DONGHAI TECHNOLOGY", category: "Inlet Valve", modelNo: "SS 3 Way", brandCode: "SS", description: "3 Way Valve", image: inletValveImageUrl },
    { id: 175, name: "SS DC 1 Way", company: "DONGHAI TECHNOLOGY", category: "Inlet Valve", modelNo: "SS DC 1 Way", brandCode: "SS", description: "DC Valve", image: inletValveImageUrl },
    { id: 176, name: "SS DC 2 Way", company: "DONGHAI TECHNOLOGY", category: "Inlet Valve", modelNo: "SS DC 2 Way", brandCode: "SS", description: "DC Valve", image: inletValveImageUrl },
    { id: 177, name: "SS DC 3 Way", company: "DONGHAI TECHNOLOGY", category: "Inlet Valve", modelNo: "SS DC 3 Way", brandCode: "SS", description: "DC Valve", image: inletValveImageUrl },
    { id: 178, name: "WP 1 Way", company: "DONGHAI TECHNOLOGY", category: "Inlet Valve", modelNo: "WP 1 Way", brandCode: "WP", description: "1 Way Valve", image: inletValveImageUrl },
    { id: 179, name: "IF 2 Way", company: "DONGHAI TECHNOLOGY", category: "Inlet Valve", modelNo: "IF 2 Way", brandCode: "IF", description: "2 Way Valve", image: inletValveImageUrl },
    { id: 180, name: "IF 3 WAY", company: "DONGHAI TECHNOLOGY", category: "Inlet Valve", modelNo: "IF 3 WAY", brandCode: "DT", description: "IFB Valve", image: inletValveImageUrl },
    { id: 181, name: "HAR 2 Way", company: "DONGHAI TECHNOLOGY", category: "Inlet Valve", modelNo: "HAR 2 Way", brandCode: "HAR", description: "2 Way Valve", image: inletValveImageUrl },
    // DONGHAI TECHNOLOGY Drain Motor
    { id: 182, name: "Drain Motor GL", company: "DONGHAI TECHNOLOGY", category: "Drain Motor", modelNo: "GL", brandCode: "DT", description: "GL Drain Motor", image: drainMotorImageUrl },
    { id: 183, name: "Drain Motor DC ORG", company: "DONGHAI TECHNOLOGY", category: "Drain Motor", modelNo: "DC ORG", brandCode: "DT", description: "DC Original", image: drainMotorImageUrl },
    { id: 184, name: "Drain Motor PNS NKGW Org.", company: "DONGHAI TECHNOLOGY", category: "Drain Motor", modelNo: "Drain Motor PNS NKGW Org.", brandCode: "PNS", description: "Original Type", image: drainMotorImageUrl },
    { id: 185, name: "Drain Motor SS WHITE", company: "DONGHAI TECHNOLOGY", category: "Drain Motor", modelNo: "SS WHITE", brandCode: "DT", description: "SS White", image: drainMotorImageUrl },
    { id: 186, name: "Drain Motor SS BLACK", company: "DONGHAI TECHNOLOGY", category: "Drain Motor", modelNo: "SS BLACK", brandCode: "DT", description: "SS Black", image: drainMotorImageUrl },
    { id: 187, name: "Drain Motor IF", company: "DONGHAI TECHNOLOGY", category: "Drain Motor", modelNo: "IF", brandCode: "DT", description: "IFB Drain Motor", image: drainMotorImageUrl },
    { id: 188, name: "Drain Motor HAR", company: "DONGHAI TECHNOLOGY", category: "Drain Motor", modelNo: "Drain Motor HAR", brandCode: "HAR", description: "HAR Type", image: drainMotorImageUrl },
    { id: 189, name: "Drain Motor BSH", company: "DONGHAI TECHNOLOGY", category: "Drain Motor", modelNo: "BSH", brandCode: "DT", description: "Bosch Drain Motor", image: drainMotorImageUrl },
    // DONGHAI TECHNOLOGY Pressure Sensor
    { id: 190, name: "GL", company: "DONGHAI TECHNOLOGY", category: "Pressure Sensor", modelNo: "GL", brandCode: "DT", description: "GL Pressure Sensor", image: pressureSensorImageUrl },
    { id: 191, name: "SS", company: "DONGHAI TECHNOLOGY", category: "Pressure Sensor", modelNo: "SS", brandCode: "DT", description: "SS Sensor", image: pressureSensorImageUrl },
    { id: 192, name: "GL NKGW Org", company: "DONGHAI TECHNOLOGY", category: "Pressure Sensor", modelNo: "GL NKGW Org", brandCode: "GL", description: "Original Type", image: pressureSensorImageUrl },
    { id: 193, name: "GL NKGW Org FL", company: "DONGHAI TECHNOLOGY", category: "Pressure Sensor", modelNo: "GL NKGW Org FL", brandCode: "GL", description: "Front Load Type", image: pressureSensorImageUrl },
    { id: 194, name: "SS NKGW Org FL", company: "DONGHAI TECHNOLOGY", category: "Pressure Sensor", modelNo: "SS NKGW Org FL", brandCode: "SS", description: "Front Load Type", image: pressureSensorImageUrl },
    { id: 195, name: "SS Blue FL", company: "DONGHAI TECHNOLOGY", category: "Pressure Sensor", modelNo: "SS Blue FL", brandCode: "SS", description: "Front Load Blue Type", image: pressureSensorImageUrl },
    { id: 196, name: "HAR 2 Pin", company: "DONGHAI TECHNOLOGY", category: "Pressure Sensor", modelNo: "HAR 2 Pin", brandCode: "HAR", description: "2 Pin Type", image: pressureSensorImageUrl },
    { id: 197, name: "HAR New", company: "DONGHAI TECHNOLOGY", category: "Pressure Sensor", modelNo: "HAR New", brandCode: "HAR", description: "New Variant", image: pressureSensorImageUrl },
    { id: 198, name: "VOL BIKO", company: "DONGHAI TECHNOLOGY", category: "Pressure Sensor", modelNo: "VOL BIKO", brandCode: "VOL", description: "Pressure Sensor", image: pressureSensorImageUrl },
    { id: 199, name: "PNS", company: "DONGHAI TECHNOLOGY", category: "Pressure Sensor", modelNo: "PNS", brandCode: "PNS", description: "Pressure Sensor", image: pressureSensorImageUrl },
    { id: 200, name: "GOD", company: "DONGHAI TECHNOLOGY", category: "Pressure Sensor", modelNo: "GOD", brandCode: "GOD", description: "Pressure Sensor", image: pressureSensorImageUrl },
    { id: 201, name: "UNIVERSAL", company: "DONGHAI TECHNOLOGY", category: "Pressure Sensor", modelNo: "UNIVERSAL", brandCode: "DT", description: "Universal Type", image: pressureSensorImageUrl },
    { id: 202, name: "IF Red", company: "DONGHAI TECHNOLOGY", category: "Pressure Sensor", modelNo: "IF Red", brandCode: "IF", description: "Red Type", image: pressureSensorImageUrl },
    { id: 203, name: "BSH", company: "DONGHAI TECHNOLOGY", category: "Pressure Sensor", modelNo: "BSH", brandCode: "DT", description: "Bosch Type", image: pressureSensorImageUrl },
    { id: 204, name: "LYD", company: "DONGHAI TECHNOLOGY", category: "Pressure Sensor", modelNo: "LYD", brandCode: "DT", description: "Lloyd Type", image: pressureSensorImageUrl },
    // DONGHAI TECHNOLOGY Clutch
    { id: 205, name: "GL SINGLE GEAR", company: "DONGHAI TECHNOLOGY", category: "Clutch", modelNo: "GL SINGLE GEAR", brandCode: "DT", description: "Single Gear", image: clutchImageUrl },
    { id: 206, name: "GL DOUBLE GEAR", company: "DONGHAI TECHNOLOGY", category: "Clutch", modelNo: "GL DOUBLE GEAR", brandCode: "DT", description: "Double Gear", image: clutchImageUrl },
    { id: 207, name: "GL 12KG", company: "DONGHAI TECHNOLOGY", category: "Clutch Mechanism", modelNo: "GL 12KG", brandCode: "GL", description: "12KG Variant", image: clutchMechanismImageUrl },
    { id: 208, name: "SS DOUBLE GEAR", company: "DONGHAI TECHNOLOGY", category: "Clutch", modelNo: "SS DOUBLE GEAR", brandCode: "DT", description: "SS Double", image: clutchImageUrl },
    { id: 209, name: "IF NEW", company: "DONGHAI TECHNOLOGY", category: "Clutch", modelNo: "IF NEW", brandCode: "DT", description: "IFB Type", image: clutchImageUrl },
    // DONGHAI TECHNOLOGY Half/Full Plate
    { id: 210, name: "IF Half Plate", company: "DONGHAI TECHNOLOGY", category: "Half Plate", modelNo: "IF Half Plate", brandCode: "IF", description: "Washing Machine Half Plate", image: halfPlateImageUrl },
    { id: 211, name: "IF Full Plate", company: "DONGHAI TECHNOLOGY", category: "Full Plate", modelNo: "IF Full Plate", brandCode: "IF", description: "Washing Machine Full Plate", image: fullPlateImageUrl },
    { id: 212, name: "HAR Half Plate", company: "DONGHAI TECHNOLOGY", category: "Half Plate", modelNo: "HAR Half Plate", brandCode: "HAR", description: "Washing Machine Half Plate", image: halfPlateImageUrl },
    { id: 213, name: "HAR Full Plate", company: "DONGHAI TECHNOLOGY", category: "Full Plate", modelNo: "HAR Full Plate", brandCode: "HAR", description: "Washing Machine Full Plate", image: fullPlateImageUrl },
    { id: 214, name: "LHO Half Plate", company: "DONGHAI TECHNOLOGY", category: "Half Plate", modelNo: "LHO Half Plate", brandCode: "LHO", description: "Washing Machine Half Plate", image: halfPlateImageUrl },
    { id: 215, name: "LHO Full Plate", company: "DONGHAI TECHNOLOGY", category: "Full Plate", modelNo: "LHO Full Plate", brandCode: "LHO", description: "Washing Machine Full Plate", image: fullPlateImageUrl },
    // DONGHAI TECHNOLOGY Drum Spider
    { id: 216, name: "GL", company: "DONGHAI TECHNOLOGY", category: "Drum Spider", modelNo: "GL", brandCode: "DT", description: "GL Spider", image: drumSpiderImageUrl },
    { id: 217, name: "SS Old", company: "DONGHAI TECHNOLOGY", category: "Hub / Drum Spider", modelNo: "SS Old", brandCode: "SS", description: "Old Model", image: drumSpiderImageUrl },
    { id: 218, name: "SS NEW", company: "DONGHAI TECHNOLOGY", category: "Drum Spider", modelNo: "SS NEW", brandCode: "DT", description: "SS Spider", image: drumSpiderImageUrl },
    { id: 219, name: "WPL 4PIN", company: "DONGHAI TECHNOLOGY", category: "Drum Spider", modelNo: "WPL 4PIN", brandCode: "DT", description: "Whirlpool 4 Pin", image: drumSpiderImageUrl },
    { id: 220, name: "WPL 123", company: "DONGHAI TECHNOLOGY", category: "Hub / Drum Spider", modelNo: "WPL 123", brandCode: "WPL", description: "Model 123", image: drumSpiderImageUrl },
    { id: 221, name: "Imported GL901 4\"", company: "DONGHAI TECHNOLOGY", category: "Hub / Drum Spider", modelNo: "Imported GL901 4\"", brandCode: "GL", description: "Imported Type", image: drumSpiderImageUrl },
    { id: 222, name: "Imported SS DC97-15971A", company: "DONGHAI TECHNOLOGY", category: "Hub / Drum Spider", modelNo: "Imported SS DC97-15971A", brandCode: "SS", description: "Imported Type", image: drumSpiderImageUrl },
    { id: 223, name: "Imported IF 2 Hole Thin Org", company: "DONGHAI TECHNOLOGY", category: "Hub / Drum Spider", modelNo: "Imported IF 2 Hole Thin Org", brandCode: "IF", description: "Imported Type", image: drumSpiderImageUrl },
    { id: 224, name: "IMPORTED BSH", company: "DONGHAI TECHNOLOGY", category: "Drum Spider", modelNo: "IMPORTED BSH", brandCode: "DT", description: "Imported Bosch", image: drumSpiderImageUrl },
    // DONGHAI TECHNOLOGY Gasket
    { id: 225, name: "GL 1001A", company: "DONGHAI TECHNOLOGY", category: "Gasket", modelNo: "GL 1001A", brandCode: "GL", description: "Front Load Gasket", image: gasketImageUrl },
    { id: 226, name: "GL 1003A", company: "DONGHAI TECHNOLOGY", category: "Gasket", modelNo: "GL 1003A", brandCode: "GL", description: "Front Load Gasket", image: gasketImageUrl },
    { id: 227, name: "SS 1664A", company: "DONGHAI TECHNOLOGY", category: "Gasket", modelNo: "SS 1664A", brandCode: "SS", description: "Front Load Gasket", image: gasketImageUrl },
    { id: 228, name: "Gasket Ring with Spring", company: "DONGHAI TECHNOLOGY", category: "Gasket", modelNo: "Gasket Ring with Spring", brandCode: "—", description: "Ring with Spring", image: gasketImageUrl },
    // DONGHAI TECHNOLOGY Drain Pump
    { id: 229, name: "IF SMALL", company: "DONGHAI TECHNOLOGY", category: "Drain Pump", modelNo: "IF SMALL", brandCode: "DT", description: "IFB Small", image: drainPumpImageUrl },
    { id: 230, name: "IF Single", company: "DONGHAI TECHNOLOGY", category: "Drain Pump", modelNo: "IF Single", brandCode: "IF", description: "Washing Machine Drain Pump", image: drainPumpImageUrl },
    { id: 231, name: "IF DOUBLE", company: "DONGHAI TECHNOLOGY", category: "Drain Pump", modelNo: "IF DOUBLE", brandCode: "DT", description: "IFB Double", image: drainPumpImageUrl },
    { id: 232, name: "SSN-01", company: "DONGHAI TECHNOLOGY", category: "Drain Pump", modelNo: "SSN-01", brandCode: "SSN", description: "Drain Pump", image: drainPumpImageUrl },
    { id: 233, name: "GL", company: "DONGHAI TECHNOLOGY", category: "Drain Pump", modelNo: "GL", brandCode: "GL", description: "Drain Pump", image: drainPumpImageUrl },
    { id: 234, name: "GL DC", company: "DONGHAI TECHNOLOGY", category: "Drain Pump", modelNo: "GL DC", brandCode: "DT", description: "GL DC Pump", image: drainPumpImageUrl },
    // DONGHAI TECHNOLOGY Door Lock
    { id: 235, name: "Door Lock IF", company: "DONGHAI TECHNOLOGY", category: "Door Lock", modelNo: "IF", brandCode: "DT", description: "IFB Door Lock", image: doorLockImageUrl },
    { id: 236, name: "Door Lock GL", company: "DONGHAI TECHNOLOGY", category: "Door Lock", modelNo: "GL", brandCode: "DT", description: "GL Door Lock", image: doorLockImageUrl },
    { id: 237, name: "Door Lock SS", company: "DONGHAI TECHNOLOGY", category: "Door Lock", modelNo: "SS", brandCode: "DT", description: "Samsung Door Lock", image: doorLockImageUrl },
    { id: 238, name: "Door Lock GL INVTR", company: "DONGHAI TECHNOLOGY", category: "Door Lock", modelNo: "Door Lock GL INVTR", brandCode: "GL", description: "Inverter Type", image: doorLockImageUrl },
    // DONGHAI TECHNOLOGY Hall Sensor
    { id: 239, name: "Hall Sensor GL 2001A", company: "DONGHAI TECHNOLOGY", category: "Hall Sensor", modelNo: "GL 2001A", brandCode: "DT", description: "GL Hall Sensor", image: hallSensorImageUrl },
    { id: 240, name: "Hall Sensor SS", company: "DONGHAI TECHNOLOGY", category: "Hall Sensor", modelNo: "SS", brandCode: "DT", description: "SS Hall Sensor", image: hallSensorImageUrl },
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
    { id: 252, name: "Outlet Pipe 1.5 Mtr", company: "DONGHAI TECHNOLOGY", category: "Pipe", modelNo: "Outlet Pipe 1.5 Mtr", brandCode: "—", description: "Outlet Pipe", image: pipeImageUrl },
    { id: 253, name: "Outlet Pipe 3 Mtr", company: "DONGHAI TECHNOLOGY", category: "Pipe", modelNo: "Outlet Pipe 3 Mtr", brandCode: "—", description: "Outlet Pipe", image: pipeImageUrl },
    { id: 254, name: "Outlet Pipe Grey", company: "DONGHAI TECHNOLOGY", category: "Pipe", modelNo: "Outlet Pipe Grey", brandCode: "—", description: "Outlet Pipe", image: pipeImageUrl },
    { id: 255, name: "Inlet Pipe Fully Auto 1.5–5 Mtr", company: "DONGHAI TECHNOLOGY", category: "Pipe", modelNo: "Inlet Pipe Fully Auto 1.5–5 Mtr", brandCode: "—", description: "Inlet Pipe", image: pipeImageUrl },
    // DONGHAI TECHNOLOGY Bellow
    { id: 256, name: "GD Universal", company: "DONGHAI TECHNOLOGY", category: "Bellow", modelNo: "GD Universal", brandCode: "GD", description: "Washing Machine Bellow", image: bellowImageUrl },
    { id: 257, name: "GL", company: "DONGHAI TECHNOLOGY", category: "Bellow", modelNo: "GL", brandCode: "GL", description: "Washing Machine Bellow", image: bellowImageUrl },
    { id: 258, name: "SS 9800", company: "DONGHAI TECHNOLOGY", category: "Bellow", modelNo: "SS 9800", brandCode: "SS", description: "Washing Machine Bellow", image: bellowImageUrl },
    { id: 259, name: "WP Big", company: "DONGHAI TECHNOLOGY", category: "Bellow", modelNo: "WP Big", brandCode: "WP", description: "Washing Machine Bellow", image: bellowImageUrl },
    { id: 260, name: "VC", company: "DONGHAI TECHNOLOGY", category: "Bellow", modelNo: "VC", brandCode: "VC", description: "Washing Machine Bellow", image: bellowImageUrl },
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
    { id: 270, name: "WITOL 210 ORG", company: "DONGHAI TECHNOLOGY", category: "Magnetron", modelNo: "WITOL 210 ORG", brandCode: "DT", description: "6 Fin", image: magnetronImageUrl },
    { id: 271, name: "GL 213 ORG", company: "DONGHAI TECHNOLOGY", category: "Magnetron", modelNo: "GL 213 ORG", brandCode: "DT", description: "6 Fin", image: magnetronImageUrl },
    { id: 272, name: "Witol 214 Org (6 Fin)", company: "DONGHAI TECHNOLOGY", category: "Magnetron", modelNo: "Witol 214 Org (6 Fin)", brandCode: "WITOL", description: "Microwave Magnetron", image: magnetronImageUrl },
    { id: 273, name: "Witol 610 Org (6 Fin)", company: "DONGHAI TECHNOLOGY", category: "Magnetron", modelNo: "Witol 610 Org (6 Fin)", brandCode: "WITOL", description: "Microwave Magnetron", image: magnetronImageUrl },
    { id: 274, name: "Oven Motor 2 PIN", company: "DONGHAI TECHNOLOGY", category: "Oven Motor", modelNo: "2 PIN", brandCode: "DT", description: "Oven Motor", image: ovenMotorImageUrl },
    { id: 275, name: "Oven 3 Pin Motor", company: "DONGHAI TECHNOLOGY", category: "Oven Motor", modelNo: "Oven 3 Pin Motor", brandCode: "—", description: "Oven Motor", image: ovenMotorImageUrl },
    { id: 276, name: "Kettle Thermostat Single Point", company: "DONGHAI TECHNOLOGY", category: "Kettle Thermostat", modelNo: "Single Point", brandCode: "DT", description: "Thermostat", image: kettleThermostatImageUrl },
    { id: 277, name: "Kettle Thermostat Double Point", company: "DONGHAI TECHNOLOGY", category: "Kettle Spare", modelNo: "Kettle Thermostat Double Point", brandCode: "—", description: "Thermostat", image: kettleSpareImageUrl },
    { id: 278, name: "Kettle Switch", company: "DONGHAI TECHNOLOGY", category: "Kettle Switch", modelNo: "—", brandCode: "DT", description: "Kettle Switch", image: kettleSwitchImageUrl },
    { id: 1380, name: "HV Capacitor 1.00 MFD", company: "DONGHAI TECHNOLOGY", category: "HV Capacitor", modelNo: "1.00 MFD", brandCode: "DT", description: "Microwave Capacitor", image: hvCapacitorImageUrl },
    { id: 1381, name: "Transformer 800W", company: "DONGHAI TECHNOLOGY", category: "Transformer", modelNo: "800W", brandCode: "DT", description: "Single PC Box Pack", image: productImageUrl },
    { id: 1382, name: "Fuse", company: "DONGHAI TECHNOLOGY", category: "Fuse", modelNo: "—", brandCode: "DT", description: "Microwave Fuse", image: fuseImageUrl },
    { id: 1383, name: "Diode Single", company: "DONGHAI TECHNOLOGY", category: "Diode", modelNo: "Single", brandCode: "DT", description: "Microwave Diode", image: diodeImageUrl },
    // DONGHAI TECHNOLOGY Fan Motor
    { id: 279, name: "Ventilation Fan Motor", company: "DONGHAI TECHNOLOGY", category: "Fan Motor", modelNo: "Ventilation Fan Motor", brandCode: "—", description: "Fan Motor", image: fanMotorImageUrl },
    { id: 280, name: "Table/Pedestal Fan Motor", company: "DONGHAI TECHNOLOGY", category: "Fan Motor", modelNo: "Table/Pedestal Fan Motor", brandCode: "—", description: "Fan Motor", image: fanMotorImageUrl },
    { id: 281, name: "Wall Fan Motor", company: "DONGHAI TECHNOLOGY", category: "Fan Motor", modelNo: "Wall Fan Motor", brandCode: "—", description: "Fan Motor", image: fanMotorImageUrl },
    // SYMBOL Axial Fan
    { id: 282, name: "YWF4E-200S-01", company: "SYMBOL", category: "Axial Fan", modelNo: "YWF4E-200S-01", brandCode: "YWF", description: "200mm Single Phase Suction Fan", image: axialCoolingFanImageUrl },
    { id: 283, name: "YWF4E-250S-02", company: "SYMBOL", category: "Axial Fan", modelNo: "YWF4E-250S-02", brandCode: "YWF", description: "250mm Single Phase Suction Fan", image: axialCoolingFanImageUrl },
    { id: 284, name: "YWF4E-300S-03", company: "SYMBOL", category: "Axial Fan", modelNo: "YWF4E-300S-03", brandCode: "YWF", description: "300mm Single Phase Suction Fan", image: axialCoolingFanImageUrl },
    { id: 285, name: "YWF4E-350S-04", company: "SYMBOL", category: "Axial Fan", modelNo: "YWF4E-350S-04", brandCode: "YWF", description: "350mm Single Phase Suction Fan", image: axialCoolingFanImageUrl },
    { id: 286, name: "YWF4E-400S-05", company: "SYMBOL", category: "Axial Fan", modelNo: "YWF4E-400S-05", brandCode: "YWF", description: "400mm Single Phase Suction Fan", image: axialCoolingFanImageUrl },
    { id: 287, name: "YWF4E-450S-06", company: "SYMBOL", category: "Axial Fan", modelNo: "YWF4E-450S-06", brandCode: "YWF", description: "450mm Single Phase Suction Fan", image: axialCoolingFanImageUrl },
    { id: 288, name: "YWF4E-500S-07", company: "SYMBOL", category: "Axial Fan", modelNo: "YWF4E-500S-07", brandCode: "YWF", description: "500mm Single Phase Suction Fan", image: axialCoolingFanImageUrl },
    { id: 289, name: "YWF4E-550S-08", company: "SYMBOL", category: "Axial Fan", modelNo: "YWF4E-550S-08", brandCode: "YWF", description: "550mm Single Phase Suction Fan", image: axialCoolingFanImageUrl },
    { id: 290, name: "YWF4E-600S-09", company: "SYMBOL", category: "Axial Fan", modelNo: "YWF4E-600S-09", brandCode: "YWF", description: "600mm Single Phase Suction Fan", image: axialCoolingFanImageUrl },
    { id: 291, name: "YWF4E-630S-10", company: "SYMBOL", category: "Axial Fan", modelNo: "YWF4E-630S-10", brandCode: "YWF", description: "630mm Single Phase Suction Fan", image: axialCoolingFanImageUrl },
    // SYMBOL Shaded Pole Motor
    { id: 292, name: "YZF5-13-18-A", company: "SYMBOL", category: "Shaded Pole Motor", modelNo: "YZF5-13-18-A", brandCode: "YZF", description: "5W Shaded Pole Motor", image: productImageUrl },
    { id: 293, name: "YZF10-20-18-B", company: "SYMBOL", category: "Shaded Pole Motor", modelNo: "YZF10-20-18-B", brandCode: "YZF", description: "10W Shaded Pole Motor", image: productImageUrl },
    { id: 294, name: "YZF16-25-18-C", company: "SYMBOL", category: "Shaded Pole Motor", modelNo: "YZF16-25-18-C", brandCode: "YZF", description: "16W Shaded Pole Motor", image: productImageUrl },
    { id: 295, name: "YZF25-40-18-D", company: "SYMBOL", category: "Shaded Pole Motor", modelNo: "YZF25-40-18-D", brandCode: "YZF", description: "25W Shaded Pole Motor", image: productImageUrl },
    { id: 296, name: "YZF34-45-18-E", company: "SYMBOL", category: "Shaded Pole Motor", modelNo: "YZF34-45-18-E", brandCode: "YZF", description: "34W Shaded Pole Motor", image: productImageUrl },
    // SYMBOL Pressure Gauge, Gauge Manifold, Digital Gauge
    { id: 297, name: "SR-250-R22-01", company: "SYMBOL", category: "Pressure Gauge", modelNo: "SR-250-R22-01", brandCode: "SR", description: "250 PSI R22 Gauge", image: pressureGaugeImageUrl },
    { id: 298, name: "SR-500-R22-02", company: "SYMBOL", category: "Pressure Gauge", modelNo: "SR-500-R22-02", brandCode: "SR", description: "500 PSI R22 Gauge", image: pressureGaugeImageUrl },
    { id: 299, name: "SR-800-R410-03", company: "SYMBOL", category: "Pressure Gauge", modelNo: "SR-800-R410-03", brandCode: "SR", description: "800 PSI R410 Gauge", image: pressureGaugeImageUrl },
    { id: 300, name: "SR-536A-04", company: "SYMBOL", category: "Gauge Manifold", modelNo: "SR-536A-04", brandCode: "SR", description: "Double Gauge Manifold", image: gaugeManifoldImageUrl },
    { id: 301, name: "SR-560B-05", company: "SYMBOL", category: "Gauge Manifold", modelNo: "SR-560B-05", brandCode: "SR", description: "Double Gauge with Hose", image: gaugeManifoldImageUrl },
    { id: 302, name: "SR-250DG-06", company: "SYMBOL", category: "Digital Gauge", modelNo: "SR-250DG-06", brandCode: "SR", description: "Digital Refrigerant Gauge", image: digitalGaugeImageUrl },
    { id: 303, name: "SR-500DG-07", company: "SYMBOL", category: "Digital Gauge", modelNo: "SR-500DG-07", brandCode: "SR", description: "Digital Refrigerant Gauge", image: digitalGaugeImageUrl },
    // SYMBOL Charging Hose
    { id: 304, name: "SR12236P-01", company: "SYMBOL", category: "Charging Hose", modelNo: "SR12236P-01", brandCode: "SR", description: "3 Ft 500–2500 PSI Hose", image: chargingHoseImageUrl },
    { id: 305, name: "SR12260P-02", company: "SYMBOL", category: "Charging Hose", modelNo: "SR12260P-02", brandCode: "SR", description: "5 Ft 500–2500 PSI Hose", image: chargingHoseImageUrl },
    { id: 306, name: "SR41036P-03", company: "SYMBOL", category: "Charging Hose", modelNo: "SR41036P-03", brandCode: "SR", description: "R410A 3 Ft Charging Hose", image: chargingHoseImageUrl },
    { id: 307, name: "SR122236BV-04", company: "SYMBOL", category: "Charging Hose", modelNo: "SR122236BV-04", brandCode: "SR", description: "Charging Hose with Ball Valve", image: chargingHoseImageUrl },
    // SYMBOL Tool Kit, Tube Cutter, Service Tool
    { id: 308, name: "SR-275-A", company: "SYMBOL", category: "Tool Kit", modelNo: "SR-275-A", brandCode: "SR", description: "Standard Flaring Tool Kit", image: productImageUrl },
    { id: 309, name: "SR-278-B", company: "SYMBOL", category: "Tool Kit", modelNo: "SR-278-B", brandCode: "SR", description: "Premium Flaring Kit", image: productImageUrl },
    { id: 310, name: "SR-127-A", company: "SYMBOL", category: "Tube Cutter", modelNo: "SR-127-A", brandCode: "SR", description: "Mini Tube Cutter Zinc Body", image: productImageUrl },
    { id: 311, name: "SR-274-B", company: "SYMBOL", category: "Tube Cutter", modelNo: "SR-274-B", brandCode: "SR", description: "Aluminum Alloy Tube Cutter", image: productImageUrl },
    { id: 312, name: "SR-369-C", company: "SYMBOL", category: "Service Tool", modelNo: "SR-369-C", brandCode: "SR", description: "3-in-1 Tube Bender", image: productImageUrl },
    { id: 313, name: "SR-622-D", company: "SYMBOL", category: "Service Tool", modelNo: "SR-622-D", brandCode: "SR", description: "Tube Expander", image: productImageUrl },
    // SYMBOL Ball Valve, Control Valve, Access Valve, AC Service Valve
    { id: 314, name: "SR-BV014-01", company: "SYMBOL", category: "Ball Valve", modelNo: "SR-BV014-01", brandCode: "SR", description: "1/4 x 1/4 Ball Valve", image: ballValveImageUrl },
    { id: 315, name: "SR-BV516-02", company: "SYMBOL", category: "Ball Valve", modelNo: "SR-BV516-02", brandCode: "SR", description: "1/4 x 5/16 Ball Valve", image: ballValveImageUrl },
    { id: 316, name: "SR-CV014P-03", company: "SYMBOL", category: "Control Valve", modelNo: "SR-CV014P-03", brandCode: "SR", description: "Premium Control Valve", image: controlValveImageUrl },
    { id: 317, name: "SR-110-04", company: "SYMBOL", category: "Access Valve", modelNo: "SR-110-04", brandCode: "SR", description: "Access Valve 1/4x100mm", image: acessVolveImageUrl },
    { id: 318, name: "SR-466P-05", company: "SYMBOL", category: "AC Service Valve", modelNo: "SR-466P-05", brandCode: "SR", description: "Three Way Valve with Sight Glass", image: acServiceVolveImageUrl },
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
  { id: 14, name: "GD Refrigerator AC Motor", company: "SYMBOL", category: "Refrigerator AC Motor", modelNo: "SR-GD-AC", brandCode: "SR", description: "GD Refrigerator AC Motor", image: productImageUrl },
  { id: 15, name: "WPL Refrigerator AC Motor", company: "SYMBOL", category: "Refrigerator AC Motor", modelNo: "SR-WPL-AC", brandCode: "SR", description: "WPL Refrigerator AC Motor", image: productImageUrl },
  { id: 16, name: "WPS Refrigerator AC Motor", company: "SYMBOL", category: "Refrigerator AC Motor", modelNo: "SR-WPS-AC", brandCode: "SR", description: "WPS Refrigerator AC Motor", image: productImageUrl },
  // New products
  { id: 17, name: "Aluminum Winding Motor", company: "SYMBOL", category: "High Pressure Washer", modelNo: "SR-1800", brandCode: "SR", description: "Aluminum Winding Motor", image: highPressureWasherImageUrl },
  { id: 18, name: "Copper Winding Motor", company: "SYMBOL", category: "High Pressure Washer", modelNo: "SR-2000", brandCode: "SR", description: "Copper Winding Motor", image: highPressureWasherImageUrl },
  { id: 19, name: "Aluminum Winding Motor", company: "SYMBOL", category: "High Pressure Washer", modelNo: "SR-1800P", brandCode: "SR", description: "Aluminum Winding Motor", image: highPressureWasherImageUrl },
  { id: 20, name: "With Adjustable Pressure", company: "SYMBOL", category: "High Pressure Washer", modelNo: "SR-1800AP", brandCode: "SR", description: "With Adjustable Pressure", image: highPressureWasherImageUrl },
  { id: 21, name: "Copper Winding Carbon Brush Motor", company: "SYMBOL", category: "High Pressure Washer", modelNo: "SR-1800CB", brandCode: "SR", description: "Copper Winding Carbon Brush Motor", image: highPressureWasherImageUrl },
  { id: 22, name: "28 Ltr Copper Winding", company: "SYMBOL", category: "Vacuum Pump", modelNo: "SR-BL3.8L", brandCode: "SR", description: "28 Ltr Copper Winding", image: productImageUrl },
  { id: 23, name: "36 Ltr Copper Winding", company: "SYMBOL", category: "Vacuum Pump", modelNo: "SRBL4.6L", brandCode: "SR", description: "36 Ltr Copper Winding", image: productImageUrl },
  { id: 24, name: "42 Ltr Copper Winding", company: "SYMBOL", category: "Vacuum Pump", modelNo: "SRBL5.8L", brandCode: "SR", description: "42 Ltr Copper Winding", image: productImageUrl },
  { id: 25, name: "With Oil Separator", company: "SYMBOL", category: "Refrigerant Recovery Unit", modelNo: "REC-500-OS", brandCode: "REC", description: "With Oil Separator", image: refrigerantRecoveryUnitImageUrl },
  { id: 26, name: "With Oil Separator (R32)", company: "SYMBOL", category: "Refrigerant Recovery Unit", modelNo: "REC-500-OSR32", brandCode: "REC", description: "With Oil Separator (R32)", image: refrigerantRecoveryUnitImageUrl },
  { id: 27, name: "Refrigerant Electronic Scale (100kg Capacity)", company: "SYMBOL", category: "Electronic Scale", modelNo: "RCS-220V", brandCode: "RCS", description: "Refrigerant Electronic Scale (100kg Capacity)", image: electronicScaleImageUrl },
  { id: 28, name: "5W, 3A, 60Ft Lift", company: "SYMBOL", category: "Condensate Drain Pump", modelNo: "SR-CPF22", brandCode: "SR", description: "5W, 3A, 60Ft Lift", image: condensateDrainPumpImageUrl },
  { id: 29, name: "5W, 3A, 50Ft Lift", company: "SYMBOL", category: "Condensate Drain Pump", modelNo: "SR-CPD50", brandCode: "SR", description: "5W, 3A, 50Ft Lift", image: condensateDrainPumpImageUrl },
  { id: 30, name: "5W, 3A, 50Ft Lift", company: "SYMBOL", category: "Condensate Drain Pump", modelNo: "SR-CPD66", brandCode: "SR", description: "5W, 3A, 50Ft Lift", image: condensateDrainPumpImageUrl },
  { id: 31, name: "70W, 300L/Hour Flow", company: "SYMBOL", category: "Condensate Drain Pump", modelNo: "SR-MPM50", brandCode: "SR", description: "70W, 300L/Hour Flow", image: condensateDrainPumpImageUrl },
  { id: 32, name: "Flare Type", company: "SYMBOL", category: "Filter Drier", modelNo: "SEK-032", brandCode: "SEK", description: "Flare Type", image: productImageUrl },
  { id: 1305, name: "Flare Type", company: "SYMBOL", category: "Filter Drier", modelNo: "SEK-033", brandCode: "SEK", description: "Flare Type", image: productImageUrl },
  { id: 1306, name: "Flare Type", company: "SYMBOL", category: "Filter Drier", modelNo: "SEK-053", brandCode: "SEK", description: "Flare Type", image: productImageUrl },
  { id: 1307, name: "Flare Type", company: "SYMBOL", category: "Filter Drier", modelNo: "SEK-083", brandCode: "SEK", description: "Flare Type", image: productImageUrl },
  { id: 1308, name: "Flare Type", company: "SYMBOL", category: "Filter Drier", modelNo: "SEK-163", brandCode: "SEK", description: "Flare Type", image: productImageUrl },
  { id: 1309, name: "Flare Type", company: "SYMBOL", category: "Filter Drier", modelNo: "SEK-164", brandCode: "SEK", description: "Flare Type", image: productImageUrl },
  { id: 1310, name: "Flare Type", company: "SYMBOL", category: "Filter Drier", modelNo: "SEK-165", brandCode: "SEK", description: "Flare Type", image: productImageUrl },
  { id: 1311, name: "Flare Type", company: "SYMBOL", category: "Filter Drier", modelNo: "SEK-304", brandCode: "SEK", description: "Flare Type", image: productImageUrl },
  { id: 1312, name: "Flare Type", company: "SYMBOL", category: "Filter Drier", modelNo: "SEK-305", brandCode: "SEK", description: "Flare Type", image: productImageUrl },
  { id: 1313, name: "Core Type", company: "SYMBOL", category: "Filter Drier", modelNo: "CORE DS-48", brandCode: "CORE", description: "Core Type", image: productImageUrl },
  { id: 33, name: "Sealed Type", company: "SYMBOL", category: "Oil Separator", modelNo: "SPLY-5584", brandCode: "SPLY", description: "Sealed Type", image: oilSeparatorImageUrl },
  { id: 34, name: "Flange Type", company: "SYMBOL", category: "Oil Separator", modelNo: "SPLY-5302", brandCode: "SPLY", description: "Flange Type", image: oilSeparatorImageUrl },
  { id: 35, name: "Single Gauge (R22/R134A/R404/R407)", company: "SYMBOL", category: "Gauge Manifold", modelNo: "SR-475BV", brandCode: "SR", description: "Single Gauge (R22/R134A/R404/R407)", image: gaugeManifoldImageUrl },
  { id: 36, name: "Double Gauge (With 60” Hose)", company: "SYMBOL", category: "Gauge Manifold", modelNo: "SR-560B", brandCode: "SR", description: "Double Gauge (With 60” Hose)", image: gaugeManifoldImageUrl },
  { id: 1314, name: "Single Gauge (R410A)", company: "SYMBOL", category: "Gauge Manifold", modelNo: "SR-468-R410A", brandCode: "SR", description: "Single Gauge (R410A)", image: gaugeManifoldImageUrl },
  { id: 1315, name: "Single Gauge", company: "SYMBOL", category: "Gauge Manifold", modelNo: "SR-473", brandCode: "SR", description: "Single Gauge", image: gaugeManifoldImageUrl },
  { id: 1316, name: "Double Gauge", company: "SYMBOL", category: "Gauge Manifold", modelNo: "SR-536A", brandCode: "SR", description: "Double Gauge", image: gaugeManifoldImageUrl },
  { id: 1317, name: "Double Gauge (R134A)", company: "SYMBOL", category: "Gauge Manifold", modelNo: "SR-560C-R134A", brandCode: "SR", description: "Double Gauge (R134A)", image: gaugeManifoldImageUrl },
  { id: 1318, name: "R22 Gauge", company: "SYMBOL", category: "Pressure Gauge", modelNo: "SR-250", brandCode: "SR", description: "R22 Gauge", image: pressureGaugeImageUrl },
  { id: 1319, name: "R22 Gauge", company: "SYMBOL", category: "Pressure Gauge", modelNo: "SR-500", brandCode: "SR", description: "R22 Gauge", image: pressureGaugeImageUrl },
  { id: 1320, name: "R410 Gauge", company: "SYMBOL", category: "Pressure Gauge", modelNo: "SR-800", brandCode: "SR", description: "R410 Gauge", image: pressureGaugeImageUrl },
  { id: 1321, name: "Digital Gauge", company: "SYMBOL", category: "Digital Gauge", modelNo: "SR-250DG", brandCode: "SR", description: "Digital Gauge", image: digitalGaugeImageUrl },
  { id: 1322, name: "Digital Gauge", company: "SYMBOL", category: "Digital Gauge", modelNo: "SR-500DG", brandCode: "SR", description: "Digital Gauge", image: digitalGaugeImageUrl },
  { id: 37, name: "3 Ft 500–2500 PSI", company: "SYMBOL", category: "Charging Hose", modelNo: "SR12236P", brandCode: "SR", description: "3 Ft 500–2500 PSI", image: chargingHoseImageUrl },
  { id: 1323, name: "5 Ft 500–2500 PSI", company: "SYMBOL", category: "Charging Hose", modelNo: "SR12260P", brandCode: "SR", description: "5 Ft 500–2500 PSI", image: chargingHoseImageUrl },
  { id: 1324, name: "6 Ft", company: "SYMBOL", category: "Charging Hose", modelNo: "SR12272P", brandCode: "SR", description: "6 Ft", image: chargingHoseImageUrl },
  { id: 1325, name: "9 Ft", company: "SYMBOL", category: "Charging Hose", modelNo: "SR122108P", brandCode: "SR", description: "9 Ft", image: chargingHoseImageUrl },
  { id: 1326, name: "R410A Charging Hose", company: "SYMBOL", category: "Charging Hose", modelNo: "SR41036P", brandCode: "SR", description: "R410A Charging Hose", image: chargingHoseImageUrl },
  { id: 1327, name: "With Ball Valve", company: "SYMBOL", category: "Charging Hose", modelNo: "SR122236BV", brandCode: "SR", description: "With Ball Valve", image: chargingHoseImageUrl },
  { id: 38, name: "High Side Coupler", company: "SYMBOL", category: "Quick Coupler", modelNo: "SR-QC-MH", brandCode: "SR", description: "High Side Coupler", image: quickCouplerImageUrl },
  { id: 1328, name: "Low Side Coupler", company: "SYMBOL", category: "Quick Coupler", modelNo: "SR-QC-ML", brandCode: "SR", description: "Low Side Coupler", image: quickCouplerImageUrl },
  { id: 1329, name: "Lock Type High", company: "SYMBOL", category: "Quick Coupler", modelNo: "SR-QCLT-MH", brandCode: "SR", description: "Lock Type High", image: quickCouplerImageUrl },
  { id: 1330, name: "Lock Type Low", company: "SYMBOL", category: "Quick Coupler", modelNo: "SR-QCLT-ML", brandCode: "SR", description: "Lock Type Low", image: quickCouplerImageUrl },
  { id: 39, name: "Flaring Tool Kit", company: "SYMBOL", category: "Tool Kit", modelNo: "SR-275", brandCode: "SR", description: "Flaring Tool Kit", image: productImageUrl },
  { id: 1331, name: "Premium Flaring Kit", company: "SYMBOL", category: "Tool Kit", modelNo: "SR-278", brandCode: "SR", description: "Premium Flaring Kit", image: productImageUrl },
  { id: 1332, name: "Eccentric Cone Flaring Kit", company: "SYMBOL", category: "Tool Kit", modelNo: "SR-808F", brandCode: "SR", description: "Eccentric Cone Flaring Kit", image: productImageUrl },
  { id: 1333, name: "Manual Tube Expander", company: "SYMBOL", category: "Tool Kit", modelNo: "SR-200", brandCode: "SR", description: "Manual Tube Expander", image: productImageUrl },
  { id: 1334, name: "Hydraulic Tube Expander", company: "SYMBOL", category: "Tool Kit", modelNo: "SR-300L", brandCode: "SR", description: "Hydraulic Tube Expander", image: productImageUrl },
  { id: 1335, name: "7-in-1 Tube Bender Kit", company: "SYMBOL", category: "Tool Kit", modelNo: "SR-999", brandCode: "SR", description: "7-in-1 Tube Bender Kit", image: productImageUrl },
  { id: 40, name: "Mini Tube Cutter", company: "SYMBOL", category: "Tube Cutter", modelNo: "SR-127", brandCode: "SR", description: "Mini Tube Cutter", image: productImageUrl },
  { id: 1336, name: "Mini Cutter (Aluminum)", company: "SYMBOL", category: "Tube Cutter", modelNo: "SR-128", brandCode: "SR", description: "Mini Cutter (Aluminum)", image: productImageUrl },
  { id: 1337, name: "Mini Cutter Heavy", company: "SYMBOL", category: "Tube Cutter", modelNo: "SR-174", brandCode: "SR", description: "Mini Cutter Heavy", image: productImageUrl },
  { id: 1338, name: "Aluminum Alloy Cutter", company: "SYMBOL", category: "Tube Cutter", modelNo: "SR-274", brandCode: "SR", description: "Aluminum Alloy Cutter", image: productImageUrl },
  { id: 1339, name: "Heavy Duty Cutter", company: "SYMBOL", category: "Tube Cutter", modelNo: "SR-32", brandCode: "SR", description: "Heavy Duty Cutter", image: productImageUrl },
  { id: 41, name: "3-in-1 Tube Bender", company: "SYMBOL", category: "Service Tool", modelNo: "SR-369", brandCode: "SR", description: "3-in-1 Tube Bender", image: productImageUrl },
  { id: 1340, name: "Pinch Off Plier", company: "SYMBOL", category: "Service Tool", modelNo: "SR-201", brandCode: "SR", description: "Pinch Off Plier", image: productImageUrl },
  { id: 1341, name: "Capillary Cutter", company: "SYMBOL", category: "Service Tool", modelNo: "SR-1104", brandCode: "SR", description: "Capillary Cutter", image: productImageUrl },
  { id: 1342, name: "Ratchet Wrench", company: "SYMBOL", category: "Service Tool", modelNo: "SR-122", brandCode: "SR", description: "Ratchet Wrench", image: productImageUrl },
  { id: 42, name: "Single Phase Suction Fan", company: "SYMBOL", category: "Axial Fan", modelNo: "YWF4E-200S", brandCode: "YWF", description: "Single Phase Suction Fan", image: axialCoolingFanImageUrl },
  { id: 1343, name: "Single Phase Suction Fan", company: "SYMBOL", category: "Axial Fan", modelNo: "YWF4E-250S", brandCode: "YWF", description: "Single Phase Suction Fan", image: axialCoolingFanImageUrl },
  { id: 1344, name: "Single Phase Suction Fan", company: "SYMBOL", category: "Axial Fan", modelNo: "YWF4E-300S", brandCode: "YWF", description: "Single Phase Suction Fan", image: axialCoolingFanImageUrl },
  { id: 43, name: "Copper Winding", company: "SYMBOL", category: "Axial Cooling Fan", modelNo: "FM12038A2HSL", brandCode: "FM", description: "Copper Winding", image: axialCoolingFanImageUrl },
  { id: 1345, name: "Copper Winding", company: "SYMBOL", category: "Axial Cooling Fan", modelNo: "FM15050A2HSL", brandCode: "FM", description: "Copper Winding", image: axialCoolingFanImageUrl },
  { id: 44, name: "5W Motor", company: "SYMBOL", category: "Shaded Pole Motor", modelNo: "YZF5-13-18", brandCode: "YZF", description: "5W Motor", image: productImageUrl },
  { id: 1346, name: "10W Motor", company: "SYMBOL", category: "Shaded Pole Motor", modelNo: "YZF10-20-18", brandCode: "YZF", description: "10W Motor", image: productImageUrl },
  { id: 45, name: "Ball Valve", company: "SYMBOL", category: "Ball Valve", modelNo: "BLR/BV10", brandCode: "BLR", description: "Ball Valve", image: ballValveImageUrl },
  { id: 1347, name: "Expansion Valve", company: "SYMBOL", category: "Expansion Valve", modelNo: "BLR/TIHC", brandCode: "BLR", description: "Expansion Valve", image: expansionValveImageUrl },
  { id: 1348, name: "Solder Type", company: "SYMBOL", category: "Sight Glass", modelNo: "SGS 1/4 ODF", brandCode: "SGS", description: "Solder Type", image: productImageUrl },
  { id: 46, name: "With 8W Coil", company: "SYMBOL", category: "Solenoid Valve", modelNo: "SR-108/2", brandCode: "SR", description: "With 8W Coil", image: productImageUrl },
  { id: 47, name: "Pressure Switch", company: "SYMBOL", category: "Pressure Switch", modelNo: "HP-250200W", brandCode: "HP", description: "Pressure Switch", image: pressureSwitchImageUrl },
  { id: 1349, name: "Flare Type", company: "SYMBOL", category: "Hand Shut Off Valve", modelNo: "SR-6210/2", brandCode: "SR", description: "Flare Type", image: handShutOffValveImageUrl },
  { id: 48, name: "Single Barrel", company: "SYMBOL", category: "Torch", modelNo: "SRHT-S200", brandCode: "SRHT", description: "Single Barrel", image: productImageUrl },
  { id: 1350, name: "Double Barrel", company: "SYMBOL", category: "Torch", modelNo: "SRHT-D200", brandCode: "SRHT", description: "Double Barrel", image: productImageUrl },
  { id: 1351, name: "360° Brass Torch", company: "SYMBOL", category: "Torch", modelNo: "SR-HT100", brandCode: "SRHT", description: "360° Brass Torch", image: productImageUrl },
  { id: 1352, name: "Hand Flame Torch", company: "SYMBOL", category: "Torch", modelNo: "SRHT-8920", brandCode: "SRHT", description: "Hand Flame Torch", image: productImageUrl },
  { id: 49, name: "-50°C to +300°C", company: "SYMBOL", category: "Temperature Meter", modelNo: "SR-2S", brandCode: "SR", description: "-50°C to +300°C", image: productImageUrl },
  { id: 1353, name: "-50°C to +80°C", company: "SYMBOL", category: "Temperature Meter", modelNo: "SR-1S", brandCode: "SR", description: "-50°C to +80°C", image: productImageUrl },
  { id: 50, name: "Digital Clamp Meter", company: "SYMBOL", category: "Clamp Meter", modelNo: "SR-DT203", brandCode: "SR", description: "Digital Clamp Meter", image: clampMeterImageUrl },
  { id: 1354, name: "Refrigerant Leak Detector", company: "SYMBOL", category: "Leak Detector", modelNo: "SR-2000", brandCode: "SR", description: "Refrigerant Leak Detector", image: leakDetectorImageUrl },
  { id: 51, name: "Can Valve", company: "SYMBOL", category: "Can Valve", modelNo: "SR-337A", brandCode: "SR", description: "Can Valve", image: canValveImageUrl },
  { id: 1355, name: "Can Valve", company: "SYMBOL", category: "Can Valve", modelNo: "SR-339A", brandCode: "SR", description: "Can Valve", image: canValveImageUrl },
  { id: 1356, name: "1/4x1/4", company: "SYMBOL", category: "Control Valve", modelNo: "SR-CV014", brandCode: "SR", description: "1/4x1/4", image: controlValveImageUrl },
  { id: 1357, name: "1/4x1/4", company: "SYMBOL", category: "Ball Valve", modelNo: "SR-BV014", brandCode: "SR", description: "1/4x1/4", image: ballValveImageUrl },
  { id: 52, name: "Three Way Valve", company: "SYMBOL", category: "AC Service Valve", modelNo: "SR-466", brandCode: "SR", description: "Three Way Valve", image: acServiceVolveImageUrl },
  { id: 1358, name: "1/4x100mm", company: "SYMBOL", category: "Access Valve", modelNo: "SR-110", brandCode: "SR", description: "1/4x100mm", image: acessVolveImageUrl },
  { id: 53, name: "Refrigerator AC Motor", company: "SYMBOL", category: "Refrigerator Motor", modelNo: "SR-GL-AC", brandCode: "SR", description: "Refrigerator AC Motor", image: productImageUrl },
  { id: 1359, name: "Refrigerator AC Motor", company: "SYMBOL", category: "Refrigerator Motor", modelNo: "SR-SS-AC", brandCode: "SR", description: "Refrigerator AC Motor", image: productImageUrl },
  { id: 1360, name: "Refrigerator AC Motor", company: "SYMBOL", category: "Refrigerator Motor", modelNo: "SR-GD-AC", brandCode: "SR", description: "Refrigerator AC Motor", image: productImageUrl },
  { id: 1361, name: "Refrigerator AC Motor", company: "SYMBOL", category: "Refrigerator Motor", modelNo: "SR-WPL-AC", brandCode: "SR", description: "Refrigerator AC Motor", image: productImageUrl },
  { id: 54, name: "With Knob & Plate", company: "SYMBOL", category: "Thermostat", modelNo: "RAD-GL", brandCode: "RAD", description: "With Knob & Plate", image: productImageUrl },
  { id: 1362, name: "With Knob & Plate", company: "SYMBOL", category: "Thermostat", modelNo: "RAD-SS", brandCode: "RAD", description: "With Knob & Plate", image: productImageUrl },
  { id: 55, name: "Washing Machine Gear Box", company: "SYMBOL", category: "Gear Box", modelNo: "SR-001", brandCode: "SR", description: "Washing Machine Gear Box", image: productImageUrl },
  { id: 1363, name: "GL2", company: "SYMBOL", category: "Gear Box", modelNo: "SR-002", brandCode: "SR", description: "GL2", image: productImageUrl },
  { id: 1364, name: "PANAS", company: "SYMBOL", category: "Gear Box", modelNo: "SR-006", brandCode: "SR", description: "PANAS", image: productImageUrl },
  { id: 1365, name: "GL New Big Pulley", company: "SYMBOL", category: "Gear Box", modelNo: "SR-021", brandCode: "SR", description: "GL New Big Pulley", image: productImageUrl },
  { id: 56, name: "Aluminum", company: "SYMBOL", category: "Spin Motor", modelNo: "—", brandCode: "GL/SS/VC", description: "Aluminum", image: productImageUrl },
  { id: 57, name: "Waterproof", company: "SYMBOL", category: "Spin Motor", modelNo: "—", brandCode: "GL/SS/VC", description: "Waterproof", image: productImageUrl },
  { id: 1366, name: "Copper", company: "SYMBOL", category: "Spin Motor", modelNo: "—", brandCode: "GL/SS", description: "Copper", image: productImageUrl },
  { id: 1367, name: "Aluminum", company: "SYMBOL", category: "Wash Motor", modelNo: "—", brandCode: "GL/SS/VC", description: "Aluminum", image: productImageUrl },
  { id: 1368, name: "Copper", company: "SYMBOL", category: "Wash Motor", modelNo: "—", brandCode: "GL/SS/WP", description: "Copper", image: productImageUrl },
    // DONGHAI TECHNOLOGY Gear Box
    { id: 90, name: "XD001-OND", company: "DONGHAI TECHNOLOGY", category: "Gear Box", modelNo: "XD001-OND", brandCode: "XD", description: "Square Shaft 33mm", image: productImageUrl },
    { id: 91, name: "XD002-LE OLD", company: "DONGHAI TECHNOLOGY", category: "Gear Box", modelNo: "XD002-LE OLD", brandCode: "XD", description: "Round Shaft 30mm, 11 Teeth", image: productImageUrl },
    { id: 92, name: "XD003-VC 400T", company: "DONGHAI TECHNOLOGY", category: "Gear Box", modelNo: "XD003-VC 400T", brandCode: "XD", description: "Square Shaft 33mm", image: productImageUrl },
    { id: 93, name: "XD006-NAT/PAN", company: "DONGHAI TECHNOLOGY", category: "Gear Box", modelNo: "XD006-NAT/PAN", brandCode: "XD", description: "Round Shaft 30mm, 11 Teeth", image: productImageUrl },
    { id: 94, name: "XD007-55BT", company: "DONGHAI TECHNOLOGY", category: "Gear Box", modelNo: "XD007-55BT", brandCode: "XD", description: "Round Shaft 35mm, 10 Teeth", image: productImageUrl },
    { id: 95, name: "XD008-SS", company: "DONGHAI TECHNOLOGY", category: "Gear Box", modelNo: "XD008-SS", brandCode: "XD", description: "Square Shaft 30mm", image: productImageUrl },
    { id: 96, name: "XD011-HAR/60HBT", company: "DONGHAI TECHNOLOGY", category: "Gear Box", modelNo: "XD011-HAR/60HBT", brandCode: "XD", description: "Round Shaft 35mm, 10 Teeth", image: productImageUrl },
    { id: 97, name: "XD012-VC MULTI 6800", company: "DONGHAI TECHNOLOGY", category: "Gear Box", modelNo: "XD012-VC MULTI 6800", brandCode: "XD", description: "Square Shaft 28mm", image: productImageUrl },
    { id: 98, name: "XD013-GD 6201", company: "DONGHAI TECHNOLOGY", category: "Gear Box", modelNo: "XD013-GD 6201", brandCode: "XD", description: "Square Shaft 25mm", image: productImageUrl },
    { id: 99, name: "XD013N-VOL BIKU", company: "DONGHAI TECHNOLOGY", category: "Gear Box", modelNo: "XD013N-VOL BIKU", brandCode: "XD", description: "Round Shaft 49mm, 11 Teeth", image: productImageUrl },
    { id: 100, name: "XD016-WP 801", company: "DONGHAI TECHNOLOGY", category: "Gear Box", modelNo: "XD016-WP 801", brandCode: "XD", description: "Square Shaft 45mm", image: productImageUrl },
    { id: 101, name: "XD017-TLC/MR", company: "DONGHAI TECHNOLOGY", category: "Gear Box", modelNo: "XD017-TLC/MR", brandCode: "XD", description: "Round Shaft 40mm, 10 Teeth", image: productImageUrl },
    { id: 102, name: "XD018-KNSTR/LYD", company: "DONGHAI TECHNOLOGY", category: "Gear Box", modelNo: "XD018-KNSTR/LYD", brandCode: "XD", description: "Round Shaft 43mm, 11 Teeth", image: productImageUrl },
    { id: 103, name: "XD021-LE NEW", company: "DONGHAI TECHNOLOGY", category: "Gear Box", modelNo: "XD021-LE NEW", brandCode: "XD", description: "Round Shaft 28mm, 11 Teeth", image: productImageUrl },
    { id: 104, name: "XD022-WP SHORT", company: "DONGHAI TECHNOLOGY", category: "Gear Box", modelNo: "XD022-WP SHORT", brandCode: "XD", description: "Round Shaft 40mm, 11 Teeth", image: productImageUrl },
    { id: 105, name: "XD022N-WP SHORT BLUE", company: "DONGHAI TECHNOLOGY", category: "Gear Box", modelNo: "XD022N-WP SHORT BLUE", brandCode: "XD", description: "Round Shaft 40mm, 11 Teeth", image: productImageUrl },
    { id: 106, name: "XD023-WP LONG", company: "DONGHAI TECHNOLOGY", category: "Gear Box", modelNo: "XD023-WP LONG", brandCode: "XD", description: "Round Shaft 45mm, 11 Teeth", image: productImageUrl },
    { id: 107, name: "XD024-VC 6000", company: "DONGHAI TECHNOLOGY", category: "Gear Box", modelNo: "XD024-VC 6000", brandCode: "XD", description: "Square Shaft 32mm", image: productImageUrl },
    { id: 108, name: "XD025-WP 601", company: "DONGHAI TECHNOLOGY", category: "Gear Box", modelNo: "XD025-WP 601", brandCode: "XD", description: "Square Shaft 35mm", image: productImageUrl },
    { id: 109, name: "XD026-VC VIRAT 6800", company: "DONGHAI TECHNOLOGY", category: "Gear Box", modelNo: "XD026-VC VIRAT 6800", brandCode: "XD", description: "Square Shaft 30mm", image: productImageUrl },
    { id: 110, name: "XD026N-VIRAT 6800 BLUE", company: "DONGHAI TECHNOLOGY", category: "Gear Box", modelNo: "XD026N-VIRAT 6800 BLUE", brandCode: "XD", description: "Square Shaft 30mm", image: productImageUrl },
    { id: 111, name: "XD029-LYD LONG", company: "DONGHAI TECHNOLOGY", category: "Gear Box", modelNo: "XD029-LYD LONG", brandCode: "XD", description: "Round Shaft 38mm, 11 Teeth", image: productImageUrl },
    { id: 112, name: "XD031-GD NEW", company: "DONGHAI TECHNOLOGY", category: "Gear Box", modelNo: "XD031-GD NEW", brandCode: "XD", description: "Square Shaft 28mm", image: productImageUrl },
    { id: 113, name: "XD033-LYD SHORT", company: "DONGHAI TECHNOLOGY", category: "Gear Box", modelNo: "XD033-LYD SHORT", brandCode: "XD", description: "Round Shaft 33mm, 11 Teeth", image: productImageUrl },
    { id: 114, name: "XD036-SS 9KG", company: "DONGHAI TECHNOLOGY", category: "Gear Box", modelNo: "XD036-SS 9KG", brandCode: "XD", description: "Round Shaft 35mm, 11 Teeth", image: productImageUrl },
    { id: 115, name: "XD041-PAN/HR", company: "DONGHAI TECHNOLOGY", category: "Gear Box", modelNo: "XD041-PAN/HR", brandCode: "XD", description: "Square Shaft 40mm", image: productImageUrl },
    { id: 116, name: "XD042-LYD/PAN/HR", company: "DONGHAI TECHNOLOGY", category: "Gear Box", modelNo: "XD042-LYD/PAN/HR", brandCode: "XD", description: "Round Shaft 42mm, 11 Teeth", image: productImageUrl },
    // DONGHAI TECHNOLOGY Spin Timer & Timer
    { id: 117, name: "Spin Timer GLS", company: "DONGHAI TECHNOLOGY", category: "Spin Timer", modelNo: "GLS", brandCode: "DT", description: "Spin Timer GLS", image: productImageUrl },
    { id: 118, name: "Spin Timer SS", company: "DONGHAI TECHNOLOGY", category: "Spin Timer", modelNo: "SS", brandCode: "DT", description: "Spin Timer SS", image: productImageUrl },
    { id: 119, name: "Spin Timer ELX", company: "DONGHAI TECHNOLOGY", category: "Spin Timer", modelNo: "ELX", brandCode: "DT", description: "Spin Timer ELX", image: productImageUrl },
    { id: 120, name: "Spin Timer WP", company: "DONGHAI TECHNOLOGY", category: "Spin Timer", modelNo: "WP", brandCode: "DT", description: "Spin Timer WP", image: productImageUrl },
    { id: 121, name: "Spin Timer GOD", company: "DONGHAI TECHNOLOGY", category: "Spin Timer", modelNo: "GOD", brandCode: "DT", description: "Spin Timer Godrej", image: productImageUrl },
    { id: 122, name: "Spin Timer VC 6800", company: "DONGHAI TECHNOLOGY", category: "Spin Timer", modelNo: "VC6800", brandCode: "DT", description: "Spin Timer VC 6800", image: productImageUrl },
    { id: 123, name: "WP 3W", company: "DONGHAI TECHNOLOGY", category: "Timer", modelNo: "WP 3W", brandCode: "DT", description: "3 Wire 15 Min", image: productImageUrl },
    { id: 124, name: "HR 4PIN", company: "DONGHAI TECHNOLOGY", category: "Timer", modelNo: "HR 4PIN", brandCode: "DT", description: "4 Pin 15 Min", image: productImageUrl },
    { id: 125, name: "WP 8W", company: "DONGHAI TECHNOLOGY", category: "Timer", modelNo: "WP 8W", brandCode: "DT", description: "35 Min", image: productImageUrl },
    { id: 126, name: "HR 4PIN", company: "DONGHAI TECHNOLOGY", category: "Timer", modelNo: "HR 4PIN", brandCode: "DT", description: "45 Min", image: productImageUrl },
    { id: 127, name: "6800 4W", company: "DONGHAI TECHNOLOGY", category: "Timer", modelNo: "6800 4W", brandCode: "DT", description: "15/35 Min", image: productImageUrl },
    { id: 128, name: "INTX/LYD 8W", company: "DONGHAI TECHNOLOGY", category: "Timer", modelNo: "INTX/LYD 8W", brandCode: "DT", description: "35 Min", image: productImageUrl },
    { id: 129, name: "INTX/NAT 9W", company: "DONGHAI TECHNOLOGY", category: "Timer", modelNo: "INTX/NAT 9W", brandCode: "DT", description: "35 Min", image: productImageUrl },
    { id: 130, name: "GL DBL 6W", company: "DONGHAI TECHNOLOGY", category: "Timer", modelNo: "GL DBL 6W", brandCode: "DT", description: "42 Min", image: productImageUrl },
    { id: 1369, name: "Spin Timer INTX/BPL", company: "DONGHAI TECHNOLOGY", category: "Spin Timer", modelNo: "INTX/BPL", brandCode: "DT", description: "Spin Timer Intex/BPL", image: productImageUrl },
    { id: 1370, name: "GLS 4W", company: "DONGHAI TECHNOLOGY", category: "Timer", modelNo: "GLS 4W", brandCode: "DT", description: "4 Wire 15 Min", image: productImageUrl },
    { id: 1371, name: "GL DBL 4W", company: "DONGHAI TECHNOLOGY", category: "Timer", modelNo: "GL DBL 4W", brandCode: "DT", description: "Double 4 Wire 15 Min", image: productImageUrl },
    { id: 1372, name: "SS DBL 4W", company: "DONGHAI TECHNOLOGY", category: "Timer", modelNo: "SS DBL 4W", brandCode: "DT", description: "Double 4 Wire 15 Min", image: productImageUrl },
    { id: 1373, name: "VC DBL 4W", company: "DONGHAI TECHNOLOGY", category: "Timer", modelNo: "VC DBL 4W", brandCode: "DT", description: "Double 4 Wire 15 Min", image: productImageUrl },
    { id: 1374, name: "MJ 4W", company: "DONGHAI TECHNOLOGY", category: "Timer", modelNo: "MJ 4W", brandCode: "DT", description: "4 Wire 15 Min", image: productImageUrl },
    { id: 1375, name: "WP 4W", company: "DONGHAI TECHNOLOGY", category: "Timer", modelNo: "WP 4W", brandCode: "DT", description: "4 Wire 15 Min", image: productImageUrl },
    { id: 1376, name: "VC/SS 4W", company: "DONGHAI TECHNOLOGY", category: "Timer", modelNo: "VC/SS 4W", brandCode: "DT", description: "15/35 Min", image: productImageUrl },
    { id: 1377, name: "ELX 7W", company: "DONGHAI TECHNOLOGY", category: "Timer", modelNo: "ELX 7W", brandCode: "DT", description: "15/35 Min", image: productImageUrl },
    { id: 1378, name: "SS DBL 6W", company: "DONGHAI TECHNOLOGY", category: "Timer", modelNo: "SS DBL 6W", brandCode: "DT", description: "42 Min", image: productImageUrl },
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
    { id: 500, name: "Electrolux Fab Pulsator", company: "TR", category: "Pulsator", modelNo: "T-PL-32", brandCode: "ELECTROLUX", description: "Electrolux Fab Pulsator", image: pulsatorImageUrl },
    { id: 501, name: "GD 6201 Pulsator", company: "TR", category: "Pulsator", modelNo: "T-PL-33", brandCode: "GD", description: "GD 6201 Pulsator", image: pulsatorImageUrl },
    { id: 502, name: "GD 7202 Pulsator", company: "TR", category: "Pulsator", modelNo: "T-PL-34", brandCode: "GD", description: "GD 7202 Pulsator", image: pulsatorImageUrl },
    { id: 503, name: "GD 6301 Pulsator", company: "TR", category: "Pulsator", modelNo: "T-PL-35", brandCode: "GD", description: "GD 6301 Pulsator", image: pulsatorImageUrl },
    { id: 504, name: "GD 7501 Pulsator", company: "TR", category: "Pulsator", modelNo: "T-PL-36", brandCode: "GD", description: "GD 7501 Pulsator", image: pulsatorImageUrl },
    { id: 505, name: "GD 8501 Pulsator", company: "TR", category: "Pulsator", modelNo: "T-PL-37", brandCode: "GD", description: "GD 8501 Pulsator", image: pulsatorImageUrl },
    { id: 506, name: "GD 800 Pulsator", company: "TR", category: "Pulsator", modelNo: "T-PL-38", brandCode: "GD", description: "GD 800 Pulsator", image: pulsatorImageUrl },
    { id: 507, name: "GD Fully / Sanyo Pulsator", company: "TR", category: "Pulsator", modelNo: "T-PL-39", brandCode: "GD", description: "GD Fully / Sanyo Pulsator", image: pulsatorImageUrl },
    { id: 508, name: "GD 6302 Pulsator", company: "TR", category: "Pulsator", modelNo: "T-PL-40", brandCode: "GD", description: "GD 6302 Pulsator", image: pulsatorImageUrl },
    { id: 509, name: "GD 8000 Pulsator", company: "TR", category: "Pulsator", modelNo: "T-PL-41", brandCode: "GD", description: "GD 8000 Pulsator", image: pulsatorImageUrl },
    { id: 510, name: "GD 7002 Pulsator", company: "TR", category: "Pulsator", modelNo: "T-PL-42", brandCode: "GD", description: "GD 7002 Pulsator", image: pulsatorImageUrl },
    { id: 511, name: "PNS 800 Pulsator", company: "TR", category: "Pulsator", modelNo: "T-PL-43", brandCode: "PNS", description: "PNS 800 Pulsator", image: pulsatorImageUrl },
    { id: 512, name: "LE 7601 Pulsator", company: "TR", category: "Pulsator", modelNo: "T-PL-44", brandCode: "LE", description: "LE 7601 Pulsator", image: pulsatorImageUrl },
    { id: 513, name: "LE 8416 Pulsator", company: "TR", category: "Pulsator", modelNo: "T-PL-45", brandCode: "LE", description: "LE 8416 Pulsator", image: pulsatorImageUrl },
    { id: 514, name: "LE 1001 Pulsator", company: "TR", category: "Pulsator", modelNo: "T-PL-46", brandCode: "LE", description: "LE 1001 Pulsator", image: pulsatorImageUrl },
    { id: 515, name: "LE 1004 Pulsator", company: "TR", category: "Pulsator", modelNo: "T-PL-47", brandCode: "LE", description: "LE 1004 Pulsator", image: pulsatorImageUrl },
    { id: 516, name: "LE 1003 Pulsator", company: "TR", category: "Pulsator", modelNo: "T-PL-48", brandCode: "LE", description: "LE 1003 Pulsator", image: pulsatorImageUrl },
    { id: 517, name: "LE 1007 Pulsator", company: "TR", category: "Pulsator", modelNo: "T-PL-49", brandCode: "LE", description: "LE 1007 Pulsator", image: pulsatorImageUrl },
    { id: 518, name: "LE 1061 Pulsator", company: "TR", category: "Pulsator", modelNo: "T-PL-50", brandCode: "LE", description: "LE 1061 Pulsator", image: pulsatorImageUrl },
    { id: 519, name: "LE 1006 Pulsator", company: "TR", category: "Pulsator", modelNo: "T-PL-51", brandCode: "LE", description: "LE 1006 Pulsator", image: pulsatorImageUrl },
    { id: 520, name: "LE 0001 Fully Auto", company: "TR", category: "Pulsator", modelNo: "T-PL-52", brandCode: "LE", description: "LE 0001 Fully Auto", image: pulsatorImageUrl },
    { id: 521, name: "LE 2002 Fully Auto", company: "TR", category: "Pulsator", modelNo: "T-PL-53", brandCode: "LE", description: "LE 2002 Fully Auto", image: pulsatorImageUrl },
    { id: 522, name: "VC 6000 Pulsator", company: "TR", category: "Pulsator", modelNo: "T-PL-54", brandCode: "VC", description: "VC 6000 Pulsator", image: pulsatorImageUrl },
    { id: 523, name: "VC 6800 Pulsator", company: "TR", category: "Pulsator", modelNo: "T-PL-55", brandCode: "VC", description: "VC 6800 Pulsator", image: pulsatorImageUrl },
    { id: 524, name: "VC Rosa Pulsator", company: "TR", category: "Pulsator", modelNo: "T-PL-56", brandCode: "VC", description: "VC Rosa Pulsator", image: pulsatorImageUrl },
    { id: 525, name: "VC FA71 Pulsator", company: "TR", category: "Pulsator", modelNo: "T-PL-57", brandCode: "VC", description: "VC FA71 Pulsator", image: pulsatorImageUrl },
    { id: 526, name: "VC 60HBT Pulsator", company: "TR", category: "Pulsator", modelNo: "T-PL-58", brandCode: "VC", description: "VC 60HBT Pulsator", image: pulsatorImageUrl },
    { id: 527, name: "VC Zara Pulsator", company: "TR", category: "Pulsator", modelNo: "T-PL-59", brandCode: "VC", description: "VC Zara Pulsator", image: pulsatorImageUrl },
    { id: 528, name: "VC Neon Pulsator", company: "TR", category: "Pulsator", modelNo: "T-PL-60", brandCode: "VC", description: "VC Neon Pulsator", image: pulsatorImageUrl },
    { id: 529, name: "VC Digi Nemo Pulsator", company: "TR", category: "Pulsator", modelNo: "T-PL-61", brandCode: "VC", description: "VC Digi Nemo Pulsator", image: pulsatorImageUrl },
    { id: 530, name: "VC 5800 Pulsator", company: "TR", category: "Pulsator", modelNo: "T-PL-62", brandCode: "VC", description: "VC 5800 Pulsator", image: pulsatorImageUrl },
    { id: 531, name: "VC 400T Pulsator", company: "TR", category: "Pulsator", modelNo: "T-PL-63", brandCode: "VC", description: "VC 400T Pulsator", image: pulsatorImageUrl },
    { id: 532, name: "VC Virat Pulsator", company: "TR", category: "Pulsator", modelNo: "T-PL-64", brandCode: "VC", description: "VC Virat Pulsator", image: pulsatorImageUrl },
    { id: 533, name: "VC Intex Pulsator", company: "TR", category: "Pulsator", modelNo: "T-PL-65", brandCode: "VC", description: "VC Intex Pulsator", image: pulsatorImageUrl },
    { id: 534, name: "VC 200T Pulsator", company: "TR", category: "Pulsator", modelNo: "T-PL-66", brandCode: "VC", description: "VC 200T Pulsator", image: pulsatorImageUrl },
    { id: 535, name: "SS Fully (Org) Pulsator", company: "TR", category: "Pulsator", modelNo: "T-PL-67", brandCode: "SS", description: "SS Fully (Org) Pulsator", image: pulsatorImageUrl },
    { id: 536, name: "SS Fully 9KG Pulsator", company: "TR", category: "Pulsator", modelNo: "T-PL-68", brandCode: "SS", description: "SS Fully 9KG Pulsator", image: pulsatorImageUrl },
    { id: 537, name: "SS 9200 Pulsator", company: "TR", category: "Pulsator", modelNo: "T-PL-69", brandCode: "SS", description: "SS 9200 Pulsator", image: pulsatorImageUrl },
    { id: 538, name: "SS Air Turbo Pulsator", company: "TR", category: "Pulsator", modelNo: "T-PL-70", brandCode: "SS", description: "SS Air Turbo Pulsator", image: pulsatorImageUrl },
    { id: 539, name: "SS WT 70 (4 Flower)", company: "TR", category: "Pulsator", modelNo: "T-PL-71", brandCode: "SS", description: "SS WT 70 (4 Flower)", image: pulsatorImageUrl },
    { id: 540, name: "SS WT 62H (6.2KG)", company: "TR", category: "Pulsator", modelNo: "T-PL-72", brandCode: "SS", description: "SS WT 62H (6.2KG)", image: pulsatorImageUrl },
    { id: 541, name: "SS Krishna 7KG", company: "TR", category: "Pulsator", modelNo: "T-PL-73", brandCode: "SS", description: "SS Krishna 7KG", image: pulsatorImageUrl },
    { id: 542, name: "SS Krishna 10KG", company: "TR", category: "Pulsator", modelNo: "T-PL-74", brandCode: "SS", description: "SS Krishna 10KG", image: pulsatorImageUrl },
    { id: 543, name: "SS Laxmi", company: "TR", category: "Pulsator", modelNo: "T-PL-75", brandCode: "SS", description: "SS Laxmi", image: pulsatorImageUrl },
    { id: 544, name: "Samsung / PNS", company: "TR", category: "Pulsator", modelNo: "T-PL-76", brandCode: "SAMSUNG", description: "Samsung / PNS", image: pulsatorImageUrl },
    { id: 545, name: "GDWP-560", company: "TR", category: "Pulsator", modelNo: "T-PL-77", brandCode: "GD", description: "GDWP-560", image: pulsatorImageUrl },
    { id: 546, name: "WP 8KG", company: "TR", category: "Pulsator", modelNo: "T-PL-78", brandCode: "WP", description: "WP 8KG", image: pulsatorImageUrl },
    { id: 547, name: "WP Ace-50", company: "TR", category: "Pulsator", modelNo: "T-PL-79", brandCode: "WP", description: "WP Ace-50", image: pulsatorImageUrl },
    { id: 548, name: "WP Chandni", company: "TR", category: "Pulsator", modelNo: "T-PL-80", brandCode: "WP", description: "WP Chandni", image: pulsatorImageUrl },
    { id: 549, name: "Lloyd Big", company: "TR", category: "Pulsator", modelNo: "T-PL-81", brandCode: "LLOYD", description: "Lloyd Big", image: pulsatorImageUrl },
    { id: 550, name: "Lloyd Small", company: "TR", category: "Pulsator", modelNo: "T-PL-82", brandCode: "LLOYD", description: "Lloyd Small", image: pulsatorImageUrl },
    { id: 551, name: "Lloyd New", company: "TR", category: "Pulsator", modelNo: "T-PL-83", brandCode: "LLOYD", description: "Lloyd New", image: pulsatorImageUrl },
    { id: 552, name: "Lloyd 3 Roller", company: "TR", category: "Pulsator", modelNo: "T-PL-84", brandCode: "LLOYD", description: "Lloyd 3 Roller", image: pulsatorImageUrl },
    { id: 553, name: "Lloyd Fully Big", company: "TR", category: "Pulsator", modelNo: "T-PL-85", brandCode: "LLOYD", description: "Lloyd Fully Big", image: pulsatorImageUrl },
    { id: 554, name: "Lloyd Fully Small", company: "TR", category: "Pulsator", modelNo: "T-PL-86", brandCode: "LLOYD", description: "Lloyd Fully Small", image: pulsatorImageUrl },
    { id: 555, name: "Lloyd/Samrat", company: "TR", category: "Pulsator", modelNo: "T-PL-87", brandCode: "LLOYD", description: "Lloyd/Samrat", image: pulsatorImageUrl },
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
    { id: 1000, name: "DM-GL-DC-2 Drain Motor", company: "SHIVALIK", category: "Drain Motor", modelNo: "DM-GL-DC", brandCode: "DM", description: "DM-GL-DC-2 Drain Motor", image: drainMotorImageUrl },
    { id: 1001, name: "DM-FB Drain Motor", company: "SHIVALIK", category: "Drain Motor", modelNo: "DM-FB", brandCode: "DM", description: "DM-FB Drain Motor", image: drainMotorImageUrl },
    { id: 1002, name: "DM-FB-2 Drain Motor", company: "SHIVALIK", category: "Drain Motor", modelNo: "DM-FB-2", brandCode: "DM", description: "DM-FB-2 Drain Motor", image: drainMotorImageUrl },
    { id: 1003, name: "DM-BK Drain Motor", company: "SHIVALIK", category: "Drain Motor", modelNo: "DM-BK", brandCode: "DM", description: "DM-BK Drain Motor", image: drainMotorImageUrl },
    { id: 1004, name: "DM-BS Drain Motor", company: "SHIVALIK", category: "Drain Motor", modelNo: "DM-BS", brandCode: "DM", description: "DM-BS Drain Motor", image: drainMotorImageUrl },
    { id: 1005, name: "DM-MA Drain Motor", company: "SHIVALIK", category: "Drain Motor", modelNo: "DM-MA", brandCode: "DM", description: "DM-MA Drain Motor", image: drainMotorImageUrl },
    { id: 1006, name: "DM-HR-3 Drain Motor", company: "SHIVALIK", category: "Drain Motor", modelNo: "DM-HR-3", brandCode: "DM", description: "DM-HR-3 Drain Motor", image: drainMotorImageUrl },
    { id: 1007, name: "DM-GL-DC-3 Drain Motor", company: "SHIVALIK", category: "Drain Motor", modelNo: "DM-GL-DC-3", brandCode: "DM", description: "DM-GL-DC-3 Drain Motor", image: drainMotorImageUrl },
    { id: 1008, name: "DM-GL-DC-4 Drain Motor", company: "SHIVALIK", category: "Drain Motor", modelNo: "DM-GL-DC-4", brandCode: "DM", description: "DM-GL-DC-4 Drain Motor", image: drainMotorImageUrl },
    { id: 1009, name: "DM-GL-DC-5 Drain Motor", company: "SHIVALIK", category: "Drain Motor", modelNo: "DM-GL-DC-5", brandCode: "DM", description: "DM-GL-DC-5 Drain Motor", image: drainMotorImageUrl },
    { id: 1010, name: "DM-GL-DC-6 Drain Motor", company: "SHIVALIK", category: "Drain Motor", modelNo: "DM-GL-DC-6", brandCode: "DM", description: "DM-GL-DC-6 Drain Motor", image: drainMotorImageUrl },
    { id: 1011, name: "DM-GL-DC-7 Drain Motor", company: "SHIVALIK", category: "Drain Motor", modelNo: "DM-GL-DC-7", brandCode: "DM", description: "DM-GL-DC-7 Drain Motor", image: drainMotorImageUrl },
    { id: 1012, name: "DM-GL-DC-8 Drain Motor", company: "SHIVALIK", category: "Drain Motor", modelNo: "DM-GL-DC-8", brandCode: "DM", description: "DM-GL-DC-8 Drain Motor", image: drainMotorImageUrl },
    { id: 1013, name: "DM-GL-DC-9 Drain Motor", company: "SHIVALIK", category: "Drain Motor", modelNo: "DM-GL-DC-9", brandCode: "DM", description: "DM-GL-DC-9 Drain Motor", image: drainMotorImageUrl },
    { id: 1014, name: "DM-GL-DC-10 Drain Motor", company: "SHIVALIK", category: "Drain Motor", modelNo: "DM-GL-DC-10", brandCode: "DM", description: "DM-GL-DC-10 Drain Motor", image: drainMotorImageUrl },
    { id: 1015, name: "DM-GL-DC-11 Drain Motor", company: "SHIVALIK", category: "Drain Motor", modelNo: "DM-GL-DC-11", brandCode: "DM", description: "DM-GL-DC-11 Drain Motor", image: drainMotorImageUrl },
    { id: 1016, name: "DM-GL-DC-12 Drain Motor", company: "SHIVALIK", category: "Drain Motor", modelNo: "DM-GL-DC-12", brandCode: "DM", description: "DM-GL-DC-12 Drain Motor", image: drainMotorImageUrl },
    { id: 1017, name: "DM-GL-DC-13 Drain Motor", company: "SHIVALIK", category: "Drain Motor", modelNo: "DM-GL-DC-13", brandCode: "DM", description: "DM-GL-DC-13 Drain Motor", image: drainMotorImageUrl },
    { id: 1018, name: "DM-GL-DC-14 Drain Motor", company: "SHIVALIK", category: "Drain Motor", modelNo: "DM-GL-DC-14", brandCode: "DM", description: "DM-GL-DC-14 Drain Motor", image: drainMotorImageUrl },
    { id: 1019, name: "DM-GL-DC-15 Drain Motor", company: "SHIVALIK", category: "Drain Motor", modelNo: "DM-GL-DC-15", brandCode: "DM", description: "DM-GL-DC-15 Drain Motor", image: drainMotorImageUrl },
    { id: 1020, name: "DM-GL-DC-16 Drain Motor", company: "SHIVALIK", category: "Drain Motor", modelNo: "DM-GL-DC-16", brandCode: "DM", description: "DM-GL-DC-16 Drain Motor", image: drainMotorImageUrl },
    { id: 1021, name: "DM-GL-DC-17 Drain Motor", company: "SHIVALIK", category: "Drain Motor", modelNo: "DM-GL-DC-17", brandCode: "DM", description: "DM-GL-DC-17 Drain Motor", image: drainMotorImageUrl },
    { id: 1022, name: "DM-GL-DC-18 Drain Motor", company: "SHIVALIK", category: "Drain Motor", modelNo: "DM-GL-DC-18", brandCode: "DM", description: "DM-GL-DC-18 Drain Motor", image: drainMotorImageUrl },
    { id: 1023, name: "DM-GL-DC-19 Drain Motor", company: "SHIVALIK", category: "Drain Motor", modelNo: "DM-GL-DC-19", brandCode: "DM", description: "DM-GL-DC-19 Drain Motor", image: drainMotorImageUrl },
    { id: 1024, name: "DM-GL-DC-20 Drain Motor", company: "SHIVALIK", category: "Drain Motor", modelNo: "DM-GL-DC-20", brandCode: "DM", description: "DM-GL-DC-20 Drain Motor", image: drainMotorImageUrl },
      // SHIVALIK INTERNATIONAL Drain Pump
      { id: 1025, name: "Samsung D Type Drain Pump", company: "SHIVALIK INTERNATIONAL", category: "Drain Pump", modelNo: "DP-SAM-D", brandCode: "DP", description: "Samsung D Type Drain Pump", image: drainPumpImageUrl },
      { id: 1026, name: "GL Type Drain Pump", company: "SHIVALIK INTERNATIONAL", category: "Drain Pump", modelNo: "DP-GL", brandCode: "DP", description: "GL Type Drain Pump", image: drainPumpImageUrl },
      { id: 1027, name: "Samsung New Model Drain Pump", company: "SHIVALIK INTERNATIONAL", category: "Drain Pump", modelNo: "DP-SAM-NW", brandCode: "DP", description: "Samsung New Model Drain Pump", image: drainPumpImageUrl },
      { id: 1028, name: "Samsung Drain Pump", company: "SHIVALIK INTERNATIONAL", category: "Drain Pump", modelNo: "DP-SAM", brandCode: "DP", description: "Samsung Drain Pump", image: drainPumpImageUrl },
      { id: 1029, name: "SM Type Drain Pump", company: "SHIVALIK INTERNATIONAL", category: "Drain Pump", modelNo: "DP-SM", brandCode: "DP", description: "SM Type Drain Pump", image: drainPumpImageUrl },
      { id: 1030, name: "FB Type Drain Pump", company: "SHIVALIK INTERNATIONAL", category: "Drain Pump", modelNo: "DP-FB", brandCode: "DP", description: "FB Type Drain Pump", image: drainPumpImageUrl },
      { id: 1031, name: "FB 3 Model Drain Pump", company: "SHIVALIK INTERNATIONAL", category: "Drain Pump", modelNo: "DP-FB3", brandCode: "DP", description: "FB 3 Model Drain Pump", image: drainPumpImageUrl },
      { id: 1032, name: "GL B Type Drain Pump", company: "SHIVALIK INTERNATIONAL", category: "Drain Pump", modelNo: "DP-GL-B", brandCode: "DP", description: "GL B Type Drain Pump", image: drainPumpImageUrl },
      { id: 1033, name: "GL Double Type Drain Pump", company: "SHIVALIK INTERNATIONAL", category: "Drain Pump", modelNo: "DP-GL-DB", brandCode: "DP", description: "GL Double Type Drain Pump", image: drainPumpImageUrl },
      { id: 1034, name: "GL DC Type Drain Pump", company: "SHIVALIK INTERNATIONAL", category: "Drain Pump", modelNo: "DP-GL-DC", brandCode: "DP", description: "GL DC Type Drain Pump", image: drainPumpImageUrl },
      { id: 1035, name: "BS Type Drain Pump", company: "SHIVALIK INTERNATIONAL", category: "Drain Pump", modelNo: "DP-BS", brandCode: "DP", description: "BS Type Drain Pump", image: drainPumpImageUrl },
      { id: 1036, name: "Drain Pump Coil", company: "SHIVALIK INTERNATIONAL", category: "Drain Pump", modelNo: "DP-COIL", brandCode: "DP", description: "Drain Pump Coil", image: drainPumpImageUrl },
      { id: 1037, name: "DC Coil Drain Pump", company: "SHIVALIK INTERNATIONAL", category: "Drain Pump", modelNo: "DP-DC-COIL", brandCode: "DP", description: "DC Coil Drain Pump", image: drainPumpImageUrl },
      { id: 1038, name: "FB 1 Drain Pump", company: "SHIVALIK INTERNATIONAL", category: "Drain Pump", modelNo: "DP-FB-1", brandCode: "DP", description: "FB 1 Drain Pump", image: drainPumpImageUrl },
      { id: 1039, name: "FB 2 Drain Pump", company: "SHIVALIK INTERNATIONAL", category: "Drain Pump", modelNo: "DP-FB-2", brandCode: "DP", description: "FB 2 Drain Pump", image: drainPumpImageUrl },

      // SHIVALIK INTERNATIONAL Inlet Valve
      { id: 1040, name: "GL DC Double Line Inlet Valve", company: "SHIVALIK INTERNATIONAL", category: "Inlet Valve", modelNo: "IN-GL-DC-DL", brandCode: "IN", description: "GL DC Double Line Inlet Valve", image: inletValveShivalikImageUrl },
      { id: 1041, name: "GL DC Left Inlet Valve", company: "SHIVALIK INTERNATIONAL", category: "Inlet Valve", modelNo: "IN-GL-DC-L", brandCode: "IN", description: "GL DC Left Inlet Valve", image: inletValveShivalikImageUrl },
      { id: 1042, name: "GL DC Right Inlet Valve", company: "SHIVALIK INTERNATIONAL", category: "Inlet Valve", modelNo: "IN-GL-DC-R", brandCode: "IN", description: "GL DC Right Inlet Valve", image: inletValveShivalikImageUrl },
      { id: 1043, name: "GL DC Triple Inlet Valve", company: "SHIVALIK INTERNATIONAL", category: "Inlet Valve", modelNo: "IN-GL-DC-TRI", brandCode: "IN", description: "GL DC Triple Inlet Valve", image: inletValveShivalikImageUrl },
      { id: 1044, name: "GL Inlet Valve", company: "SHIVALIK INTERNATIONAL", category: "Inlet Valve", modelNo: "IN-GL", brandCode: "IN", description: "GL Inlet Valve", image: inletValveShivalikImageUrl },
      { id: 1045, name: "FB Inlet Valve", company: "SHIVALIK INTERNATIONAL", category: "Inlet Valve", modelNo: "IN-FB", brandCode: "IN", description: "FB Inlet Valve", image: inletValveShivalikImageUrl },
      { id: 1046, name: "BK Inlet Valve", company: "SHIVALIK INTERNATIONAL", category: "Inlet Valve", modelNo: "IN-BK", brandCode: "IN", description: "BK Inlet Valve", image: inletValveShivalikImageUrl },
      { id: 1047, name: "Samsung Inlet Valve", company: "SHIVALIK INTERNATIONAL", category: "Inlet Valve", modelNo: "IN-SAM", brandCode: "IN", description: "Samsung Inlet Valve", image: inletValveShivalikImageUrl },
      { id: 1048, name: "Whirlpool Inlet Valve", company: "SHIVALIK INTERNATIONAL", category: "Inlet Valve", modelNo: "IN-WP", brandCode: "IN", description: "Whirlpool Inlet Valve", image: inletValveShivalikImageUrl },
      { id: 1049, name: "Panasonic Inlet Valve", company: "SHIVALIK INTERNATIONAL", category: "Inlet Valve", modelNo: "IN-PAN", brandCode: "IN", description: "Panasonic Inlet Valve", image: inletValveShivalikImageUrl },
      { id: 1050, name: "Lloyd Inlet Valve", company: "SHIVALIK INTERNATIONAL", category: "Inlet Valve", modelNo: "IN-LYD", brandCode: "IN", description: "Lloyd Inlet Valve", image: inletValveShivalikImageUrl },
      { id: 1282, name: "WP Double Valve", company: "SHIVALIK INTERNATIONAL", category: "Inlet Valve", modelNo: "IN-DC-WP-DB", brandCode: "IN", description: "WP Double Valve", image: inletValveShivalikImageUrl },
      { id: 1283, name: "BS Valve", company: "SHIVALIK INTERNATIONAL", category: "Inlet Valve", modelNo: "IN-BS", brandCode: "IN", description: "BS Valve", image: inletValveShivalikImageUrl },
      { id: 1284, name: "Videocon Valve", company: "SHIVALIK INTERNATIONAL", category: "Inlet Valve", modelNo: "IN-VID", brandCode: "IN", description: "Videocon Valve", image: inletValveShivalikImageUrl },
      { id: 1285, name: "HR Valve", company: "SHIVALIK INTERNATIONAL", category: "Inlet Valve", modelNo: "IN-HR", brandCode: "IN", description: "HR Valve", image: inletValveShivalikImageUrl },

      // SHIVALIK INTERNATIONAL Plastic Gear
      { id: 1051, name: "Washing Machine Gear Type 01", company: "SHIVALIK INTERNATIONAL", category: "Plastic Gear", modelNo: "XD-01", brandCode: "XD", description: "Washing Machine Gear Type 01", image: plasticGearImageUrl },
      { id: 1052, name: "Washing Machine Gear Type 02", company: "SHIVALIK INTERNATIONAL", category: "Plastic Gear", modelNo: "XD-02", brandCode: "XD", description: "Washing Machine Gear Type 02", image: plasticGearImageUrl },
      { id: 1053, name: "Washing Machine Gear Type 03", company: "SHIVALIK INTERNATIONAL", category: "Plastic Gear", modelNo: "XD-03", brandCode: "XD", description: "Washing Machine Gear Type 03", image: plasticGearImageUrl },
      { id: 1054, name: "Washing Machine Gear Type 06", company: "SHIVALIK INTERNATIONAL", category: "Plastic Gear", modelNo: "XD-06", brandCode: "XD", description: "Washing Machine Gear Type 06", image: plasticGearImageUrl },
      { id: 1055, name: "Washing Machine Gear Type 07", company: "SHIVALIK INTERNATIONAL", category: "Plastic Gear", modelNo: "XD-07", brandCode: "XD", description: "Washing Machine Gear Type 07", image: plasticGearImageUrl },
      { id: 1056, name: "Washing Machine Gear Type 08", company: "SHIVALIK INTERNATIONAL", category: "Plastic Gear", modelNo: "XD-08", brandCode: "XD", description: "Washing Machine Gear Type 08", image: plasticGearImageUrl },
      { id: 1057, name: "Washing Machine Gear Type 11", company: "SHIVALIK INTERNATIONAL", category: "Plastic Gear", modelNo: "XD-011", brandCode: "XD", description: "Washing Machine Gear Type 11", image: plasticGearImageUrl },
      { id: 1058, name: "Washing Machine Gear Type 12", company: "SHIVALIK INTERNATIONAL", category: "Plastic Gear", modelNo: "XD-012", brandCode: "XD", description: "Washing Machine Gear Type 12", image: plasticGearImageUrl },
      { id: 1286, name: "Plastic Gear Type 13", company: "SHIVALIK INTERNATIONAL", category: "Plastic Gear", modelNo: "XD-013", brandCode: "XD", description: "Plastic Gear Type 13", image: plasticGearImageUrl },
      { id: 1287, name: "Plastic Gear Type 14", company: "SHIVALIK INTERNATIONAL", category: "Plastic Gear", modelNo: "XD-014", brandCode: "XD", description: "Plastic Gear Type 14", image: plasticGearImageUrl },
      { id: 1288, name: "Plastic Gear Type 16", company: "SHIVALIK INTERNATIONAL", category: "Plastic Gear", modelNo: "XD-016", brandCode: "XD", description: "Plastic Gear Type 16", image: plasticGearImageUrl },
      { id: 1289, name: "Plastic Gear Type 17", company: "SHIVALIK INTERNATIONAL", category: "Plastic Gear", modelNo: "XD-017", brandCode: "XD", description: "Plastic Gear Type 17", image: plasticGearImageUrl },
      { id: 1290, name: "Plastic Gear Type 18", company: "SHIVALIK INTERNATIONAL", category: "Plastic Gear", modelNo: "XD-018", brandCode: "XD", description: "Plastic Gear Type 18", image: plasticGearImageUrl },
      { id: 1291, name: "Plastic Gear Type 21", company: "SHIVALIK INTERNATIONAL", category: "Plastic Gear", modelNo: "XD-021", brandCode: "XD", description: "Plastic Gear Type 21", image: plasticGearImageUrl },
      { id: 1292, name: "Plastic Gear Type 22", company: "SHIVALIK INTERNATIONAL", category: "Plastic Gear", modelNo: "XD-022", brandCode: "XD", description: "Plastic Gear Type 22", image: plasticGearImageUrl },
      { id: 1293, name: "Plastic Gear Type 22N", company: "SHIVALIK INTERNATIONAL", category: "Plastic Gear", modelNo: "XD-022N", brandCode: "XD", description: "Plastic Gear Type 22N", image: plasticGearImageUrl },
      { id: 1294, name: "Plastic Gear Type 23", company: "SHIVALIK INTERNATIONAL", category: "Plastic Gear", modelNo: "XD-023", brandCode: "XD", description: "Plastic Gear Type 23", image: plasticGearImageUrl },
      { id: 1295, name: "Plastic Gear Type 24", company: "SHIVALIK INTERNATIONAL", category: "Plastic Gear", modelNo: "XD-024", brandCode: "XD", description: "Plastic Gear Type 24", image: plasticGearImageUrl },
      { id: 1296, name: "Plastic Gear Type 25", company: "SHIVALIK INTERNATIONAL", category: "Plastic Gear", modelNo: "XD-025", brandCode: "XD", description: "Plastic Gear Type 25", image: plasticGearImageUrl },
      { id: 1297, name: "Plastic Gear Type 26", company: "SHIVALIK INTERNATIONAL", category: "Plastic Gear", modelNo: "XD-026", brandCode: "XD", description: "Plastic Gear Type 26", image: plasticGearImageUrl },
      { id: 1298, name: "Plastic Gear Type 28", company: "SHIVALIK INTERNATIONAL", category: "Plastic Gear", modelNo: "XD-028", brandCode: "XD", description: "Plastic Gear Type 28", image: plasticGearImageUrl },

      // SHIVALIK INTERNATIONAL Pressure Switch
      { id: 1059, name: "BS Pressure Switch", company: "SHIVALIK INTERNATIONAL", category: "Pressure Switch", modelNo: "PS-BS", brandCode: "PS", description: "BS Pressure Switch", image: pressureSwitchImageUrl },
      { id: 1060, name: "FB Pressure Switch", company: "SHIVALIK INTERNATIONAL", category: "Pressure Switch", modelNo: "PS-FB", brandCode: "PS", description: "FB Pressure Switch", image: pressureSwitchImageUrl },
      { id: 1061, name: "GL Pressure Switch", company: "SHIVALIK INTERNATIONAL", category: "Pressure Switch", modelNo: "PS-GL", brandCode: "PS", description: "GL Pressure Switch", image: pressureSwitchImageUrl },
      { id: 1062, name: "Samsung Pressure Switch", company: "SHIVALIK INTERNATIONAL", category: "Pressure Switch", modelNo: "PS-SAM", brandCode: "PS", description: "Samsung Pressure Switch", image: pressureSwitchImageUrl },
      { id: 1063, name: "Universal Pressure Switch", company: "SHIVALIK INTERNATIONAL", category: "Pressure Switch", modelNo: "PS-UNI", brandCode: "PS", description: "Universal Pressure Switch", image: pressureSwitchImageUrl },

      // SHIVALIK INTERNATIONAL Door Lock
      { id: 1064, name: "BS Door Lock", company: "SHIVALIK INTERNATIONAL", category: "Door Lock", modelNo: "DL-BS", brandCode: "DL", description: "BS Door Lock", image: doorLockImageUrl },
      { id: 1065, name: "DR2 Door Lock", company: "SHIVALIK INTERNATIONAL", category: "Door Lock", modelNo: "DL-DR2", brandCode: "DL", description: "DR2 Door Lock", image: doorLockImageUrl },
      { id: 1066, name: "DR3 Door Lock", company: "SHIVALIK INTERNATIONAL", category: "Door Lock", modelNo: "DL-DR3", brandCode: "DL", description: "DR3 Door Lock", image: doorLockImageUrl },
      { id: 1067, name: "Electrolux Door Lock", company: "SHIVALIK INTERNATIONAL", category: "Door Lock", modelNo: "DL-EL", brandCode: "DL", description: "Electrolux Door Lock", image: doorLockImageUrl },
      { id: 1068, name: "Samsung Door Lock Type 1", company: "SHIVALIK INTERNATIONAL", category: "Door Lock", modelNo: "DL-SAM-1", brandCode: "DL", description: "Samsung Door Lock Type 1", image: doorLockImageUrl },
        // SHIVALIK INTERNATIONAL Microwave Section
        { id: 1069, name: "Microwave Tri Ring", company: "SHIVALIK INTERNATIONAL", category: "Microwave", modelNo: "SK-TRI-RING", brandCode: "SK", description: "Microwave Tri Ring", image: microwaveImageUrl },
        { id: 1070, name: "Microwave Coupler", company: "SHIVALIK INTERNATIONAL", category: "Microwave", modelNo: "SK-FLOWER", brandCode: "SK", description: "Microwave Coupler", image: microwaveImageUrl },
        { id: 1071, name: "Microwave Timer 210", company: "SHIVALIK INTERNATIONAL", category: "Microwave", modelNo: "SK-210", brandCode: "SK", description: "Microwave Timer 210", image: microwaveImageUrl },
        { id: 1072, name: "Microwave Timer 214", company: "SHIVALIK INTERNATIONAL", category: "Microwave", modelNo: "SK-214", brandCode: "SK", description: "Microwave Timer 214", image: microwaveImageUrl },
        { id: 1073, name: "Microwave Timer 610", company: "SHIVALIK INTERNATIONAL", category: "Microwave", modelNo: "SK-610", brandCode: "SK", description: "Microwave Timer 610", image: microwaveImageUrl },
        { id: 1074, name: "Timer 410", company: "SHIVALIK INTERNATIONAL", category: "Microwave", modelNo: "SK-410", brandCode: "SK", description: "Timer 410", image: microwaveImageUrl },
        { id: 1075, name: "Microwave Capacitor", company: "SHIVALIK INTERNATIONAL", category: "Microwave", modelNo: "SK-CAPACITOR", brandCode: "SK", description: "Microwave Capacitor", image: microwaveImageUrl },
        { id: 1076, name: "Microwave Diode", company: "SHIVALIK INTERNATIONAL", category: "Microwave", modelNo: "SK-DIODES", brandCode: "SK", description: "Microwave Diode", image: microwaveImageUrl },
        { id: 1077, name: "Fan Motor", company: "SHIVALIK INTERNATIONAL", category: "Microwave", modelNo: "SK-FAN-MOTOR", brandCode: "SK", description: "Fan Motor", image: microwaveImageUrl },
        { id: 1078, name: "Microwave Fuse", company: "SHIVALIK INTERNATIONAL", category: "Microwave", modelNo: "SK-FUSE", brandCode: "SK", description: "Microwave Fuse", image: microwaveImageUrl },
        { id: 1079, name: "Microwave Fuse Tube", company: "SHIVALIK INTERNATIONAL", category: "Microwave", modelNo: "SK-FUSETUBE", brandCode: "SK", description: "Microwave Fuse Tube", image: microwaveImageUrl },
        { id: 1080, name: "Microwave Ring Heater", company: "SHIVALIK INTERNATIONAL", category: "Microwave", modelNo: "SK-RING", brandCode: "SK", description: "Microwave Ring Heater", image: microwaveImageUrl },
        { id: 1081, name: "Microwave Transformer", company: "SHIVALIK INTERNATIONAL", category: "Microwave", modelNo: "SK-TRF", brandCode: "SK", description: "Microwave Transformer", image: microwaveImageUrl },
        { id: 1082, name: "Microwave Door Switch", company: "SHIVALIK INTERNATIONAL", category: "Microwave", modelNo: "SK-SWITCH", brandCode: "SK", description: "Microwave Door Switch", image: microwaveImageUrl },
        { id: 1083, name: "Turntable Motor", company: "SHIVALIK INTERNATIONAL", category: "Microwave", modelNo: "SK-TT-MOTOR", brandCode: "SK", description: "Turntable Motor", image: microwaveImageUrl },

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
        { id: 1212, name: "Refrigeration Tool SAM", company: "SHIVALIK INTERNATIONAL", category: "Refrigeration", modelNo: "SK-SAM", brandCode: "SK", description: "Refrigeration Tool SAM", image: productImageUrl },
        { id: 1213, name: "Gauge 250/500 PSI", company: "SHIVALIK INTERNATIONAL", category: "Refrigeration", modelNo: "SK-250,500", brandCode: "SK", description: "Gauge 250/500 PSI", image: productImageUrl },
        { id: 1097, name: "Can Valve 339", company: "SHIVALIK INTERNATIONAL", category: "Refrigeration", modelNo: "SK-339", brandCode: "SK", description: "Can Valve 339", image: productImageUrl },
        { id: 1214, name: "Tube Cutter 122", company: "SHIVALIK INTERNATIONAL", category: "Refrigeration", modelNo: "SK-122", brandCode: "SK", description: "Tube Cutter 122", image: productImageUrl },
        { id: 1215, name: "Brush Tool", company: "SHIVALIK INTERNATIONAL", category: "Refrigeration", modelNo: "SK-BRUCH", brandCode: "SK", description: "Brush Tool", image: productImageUrl },
        { id: 1098, name: "Tube Cutter 274", company: "SHIVALIK INTERNATIONAL", category: "Refrigeration", modelNo: "SK-274", brandCode: "SK", description: "Tube Cutter 274", image: productImageUrl },
        { id: 1216, name: "R32 Valve", company: "SHIVALIK INTERNATIONAL", category: "Refrigeration", modelNo: "SK-R32", brandCode: "SK", description: "R32 Valve", image: productImageUrl },
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
          { id: 1133, name: "Samsung Spider DC97-15963B", company: "SHIVALIK INTERNATIONAL", category: "Spider", modelNo: "SK-DC97-15963B", brandCode: "SK", description: "Samsung Spider DC97-15963B", image: productImageUrl },
          { id: 1134, name: "Samsung Spider DC97-15185A", company: "SHIVALIK INTERNATIONAL", category: "Spider", modelNo: "SK-DC97-15185A", brandCode: "SK", description: "Samsung Spider DC97-15185A", image: productImageUrl },
          { id: 1135, name: "Bearing 6205-6206 Spider", company: "SHIVALIK INTERNATIONAL", category: "Spider", modelNo: "SK-BS-6205-6206", brandCode: "SK", description: "Bearing 6205-6206 Spider", image: productImageUrl },
          { id: 1136, name: "Bearing 6204-6205 Spider", company: "SHIVALIK INTERNATIONAL", category: "Spider", modelNo: "SK-BS6204-6205", brandCode: "SK", description: "Bearing 6204-6205 Spider", image: productImageUrl },
          { id: 1137, name: "Bearing 9000809334", company: "SHIVALIK INTERNATIONAL", category: "Spider", modelNo: "9000809334", brandCode: "SK", description: "Bearing 9000809334", image: productImageUrl },
          { id: 1138, name: "Samsung Spider DC97-14370H", company: "SHIVALIK INTERNATIONAL", category: "Spider", modelNo: "SK-DC97-14370H", brandCode: "SK", description: "Samsung Spider DC97-14370H", image: productImageUrl },
          { id: 1139, name: "Samsung Spider DC97-15182A", company: "SHIVALIK INTERNATIONAL", category: "Spider", modelNo: "SK-DC97-15182A", brandCode: "SK", description: "Samsung Spider DC97-15182A", image: productImageUrl },
          { id: 1140, name: "Samsung Spider DC97-15971A", company: "SHIVALIK INTERNATIONAL", category: "Spider", modelNo: "SK-DC97-15971A", brandCode: "SK", description: "Samsung Spider DC97-15971A", image: productImageUrl },
          { id: 1141, name: "FB Spider", company: "SHIVALIK INTERNATIONAL", category: "Spider", modelNo: "SK-FB", brandCode: "SK", description: "FB Spider", image: productImageUrl },
          { id: 1142, name: "GL Spider", company: "SHIVALIK INTERNATIONAL", category: "Spider", modelNo: "SK-GL", brandCode: "SK", description: "GL Spider", image: productImageUrl },
          { id: 1143, name: "GL 7KG Spider", company: "SHIVALIK INTERNATIONAL", category: "Spider", modelNo: "SK-GL-7KG", brandCode: "SK", description: "GL 7KG Spider", image: productImageUrl },
          { id: 1144, name: "HR 7KG Spider", company: "SHIVALIK INTERNATIONAL", category: "Spider", modelNo: "SK-HR-7KG", brandCode: "SK", description: "HR 7KG Spider", image: productImageUrl },
          { id: 1145, name: "HR Spider", company: "SHIVALIK INTERNATIONAL", category: "Spider", modelNo: "SK-HR", brandCode: "SK", description: "HR Spider", image: productImageUrl },
          { id: 1146, name: "Lloyd Spider", company: "SHIVALIK INTERNATIONAL", category: "Spider", modelNo: "SK-LYD", brandCode: "SK", description: "Lloyd Spider", image: productImageUrl },

          // SHIVALIK INTERNATIONAL Clutch Section
          { id: 1147, name: "Panasonic Clutch", company: "SHIVALIK INTERNATIONAL", category: "Clutch", modelNo: "SK-PAN", brandCode: "SK", description: "Panasonic Clutch", image: clutchImageUrl },
          { id: 1148, name: "Lloyd Clutch", company: "SHIVALIK INTERNATIONAL", category: "Clutch", modelNo: "SK-LYD", brandCode: "SK", description: "Lloyd Clutch", image: clutchImageUrl },
          { id: 1149, name: "GL 9KG Inverter Clutch", company: "SHIVALIK INTERNATIONAL", category: "Clutch", modelNo: "SK-GL-INV-9KG", brandCode: "SK", description: "GL 9KG Inverter Clutch", image: clutchImageUrl },
          { id: 1150, name: "GL 6KG Inverter Clutch", company: "SHIVALIK INTERNATIONAL", category: "Clutch", modelNo: "SK-GL-INV-6KG", brandCode: "SK", description: "GL 6KG Inverter Clutch", image: clutchImageUrl },
          { id: 1151, name: "GL Double Clutch", company: "SHIVALIK INTERNATIONAL", category: "Clutch", modelNo: "SK-GL-DB", brandCode: "SK", description: "GL Double Clutch", image: clutchImageUrl },
          { id: 1152, name: "FB 6.5KG Clutch", company: "SHIVALIK INTERNATIONAL", category: "Clutch", modelNo: "SK-FB6.5", brandCode: "SK", description: "FB 6.5KG Clutch", image: clutchImageUrl },
          { id: 1153, name: "Samsung Double Clutch", company: "SHIVALIK INTERNATIONAL", category: "Clutch", modelNo: "SAM-DBL", brandCode: "SK", description: "Samsung Double Clutch", image: clutchImageUrl },
          { id: 1154, name: "BS Type Clutch", company: "SHIVALIK INTERNATIONAL", category: "Clutch", modelNo: "SK-BS", brandCode: "SK", description: "BS Type Clutch", image: clutchImageUrl },
          { id: 1155, name: "Samsung 9KG Clutch", company: "SHIVALIK INTERNATIONAL", category: "Clutch", modelNo: "SAM-9KG", brandCode: "SK", description: "Samsung 9KG Clutch", image: clutchImageUrl },
          { id: 1156, name: "LG 9KG Inverter Clutch", company: "SHIVALIK INTERNATIONAL", category: "Clutch", modelNo: "LG-9KG-INVERTER", brandCode: "SK", description: "LG 9KG Inverter Clutch", image: clutchImageUrl },
          { id: 1157, name: "ON Type Clutch", company: "SHIVALIK INTERNATIONAL", category: "Clutch", modelNo: "SK-ON", brandCode: "SK", description: "ON Type Clutch", image: clutchImageUrl },
          { id: 1158, name: "Half Plate Clutch", company: "SHIVALIK INTERNATIONAL", category: "Clutch", modelNo: "SK-HALF", brandCode: "SK", description: "Half Plate Clutch", image: clutchImageUrl },
          { id: 1159, name: "Full Plate Clutch", company: "SHIVALIK INTERNATIONAL", category: "Clutch", modelNo: "SK-FULL-PLATE", brandCode: "SK", description: "Full Plate Clutch", image: clutchImageUrl },
          { id: 1160, name: "FB & HR Compatible Clutch", company: "SHIVALIK INTERNATIONAL", category: "Clutch", modelNo: "SK-FB&HR", brandCode: "SK", description: "FB & HR Compatible Clutch", image: clutchImageUrl },

          // SHIVALIK INTERNATIONAL Gasket Section
          { id: 1161, name: "Samsung 8KG Gasket", company: "SHIVALIK INTERNATIONAL", category: "Gasket", modelNo: "SK-SAM-8KG", brandCode: "SK", description: "Samsung 8KG Gasket", image: gasketImageUrl },
          { id: 1162, name: "GL Gasket MD563916501", company: "SHIVALIK INTERNATIONAL", category: "Gasket", modelNo: "SK-GL-MD563916501", brandCode: "SK", description: "GL Gasket MD563916501", image: gasketImageUrl },
          { id: 1163, name: "Universal Ring Gasket", company: "SHIVALIK INTERNATIONAL", category: "Gasket", modelNo: "SK-RING", brandCode: "SK", description: "Universal Ring Gasket", image: gasketImageUrl },
          { id: 1164, name: "Samsung Gasket DC64-03198A", company: "SHIVALIK INTERNATIONAL", category: "Gasket", modelNo: "SK-DC64-03198A", brandCode: "SK", description: "Samsung Gasket DC64-03198A", image: gasketImageUrl },
          { id: 1165, name: "Samsung Gasket DC64-01664A", company: "SHIVALIK INTERNATIONAL", category: "Gasket", modelNo: "SK-DC64-01664A", brandCode: "SK", description: "Samsung Gasket DC64-01664A", image: gasketImageUrl },
          { id: 1166, name: "Gasket Model 1003", company: "SHIVALIK INTERNATIONAL", category: "Gasket", modelNo: "SK-1003", brandCode: "SK", description: "Gasket Model 1003", image: gasketImageUrl },
          { id: 1167, name: "Gasket Model 1001", company: "SHIVALIK INTERNATIONAL", category: "Gasket", modelNo: "SK-1001", brandCode: "SK", description: "Gasket Model 1001", image: gasketImageUrl },
            // SHIVALIK INTERNATIONAL Suspension Section
            { id: 1168, name: "BS Suspension Rod", company: "SHIVALIK INTERNATIONAL", category: "Suspension", modelNo: "SK-BS-1", brandCode: "SK", description: "BS Suspension Rod", image: productImageUrl },
            { id: 1169, name: "FB Suspension Rod", company: "SHIVALIK INTERNATIONAL", category: "Suspension", modelNo: "SK-FB-1", brandCode: "SK", description: "FB Suspension Rod", image: productImageUrl },
            { id: 1170, name: "GL Suspension Rod", company: "SHIVALIK INTERNATIONAL", category: "Suspension", modelNo: "SK-GL-1", brandCode: "SK", description: "GL Suspension Rod", image: productImageUrl },
            { id: 1171, name: "Samsung Suspension Rod", company: "SHIVALIK INTERNATIONAL", category: "Suspension", modelNo: "SK-SAM-1", brandCode: "SK", description: "Samsung Suspension Rod", image: productImageUrl },
            { id: 1172, name: "FB Suspension Spring", company: "SHIVALIK INTERNATIONAL", category: "Suspension", modelNo: "SK-FB-SPRING", brandCode: "SK", description: "FB Suspension Spring", image: productImageUrl },
            { id: 1173, name: "GL Suspension Spring", company: "SHIVALIK INTERNATIONAL", category: "Suspension", modelNo: "SK-GL-SPRING", brandCode: "SK", description: "GL Suspension Spring", image: productImageUrl },
            { id: 1174, name: "BS Suspension", company: "SHIVALIK INTERNATIONAL", category: "Suspension", modelNo: "SK-BS", brandCode: "SK", description: "BS Suspension", image: productImageUrl },
            { id: 1175, name: "FB Suspension", company: "SHIVALIK INTERNATIONAL", category: "Suspension", modelNo: "SK-FB", brandCode: "SK", description: "FB Suspension", image: productImageUrl },
            { id: 1176, name: "GL Suspension", company: "SHIVALIK INTERNATIONAL", category: "Suspension", modelNo: "SK-GL", brandCode: "SK", description: "GL Suspension", image: productImageUrl },
            { id: 1177, name: "Samsung Suspension", company: "SHIVALIK INTERNATIONAL", category: "Suspension", modelNo: "SK-SAM", brandCode: "SK", description: "Samsung Suspension", image: productImageUrl },
            { id: 1178, name: "Universal Suspension", company: "SHIVALIK INTERNATIONAL", category: "Suspension", modelNo: "SK-UNI", brandCode: "SK", description: "Universal Suspension", image: productImageUrl },
            { id: 1179, name: "Whirlpool Suspension", company: "SHIVALIK INTERNATIONAL", category: "Suspension", modelNo: "SK-WP", brandCode: "SK", description: "Whirlpool Suspension", image: productImageUrl },

            // SHIVALIK INTERNATIONAL PCB Section
            { id: 1180, name: "GL PCB Board", company: "SHIVALIK INTERNATIONAL", category: "PCB", modelNo: "SK-GL", brandCode: "SK", description: "GL PCB Board", image: pcbImageUrl },
            { id: 1181, name: "Samsung PCB Type 2", company: "SHIVALIK INTERNATIONAL", category: "PCB", modelNo: "SK-SAM-2", brandCode: "SK", description: "Samsung PCB Type 2", image: pcbImageUrl },
            { id: 1182, name: "Samsung PCB", company: "SHIVALIK INTERNATIONAL", category: "PCB", modelNo: "SK-SAM", brandCode: "SK", description: "Samsung PCB", image: pcbImageUrl },
            { id: 1183, name: "Universal AC PCB", company: "SHIVALIK INTERNATIONAL", category: "PCB", modelNo: "SK-AC-UNI", brandCode: "SK", description: "Universal AC PCB", image: pcbImageUrl },
            { id: 1184, name: "Universal Microwave PCB", company: "SHIVALIK INTERNATIONAL", category: "PCB", modelNo: "SK-MICR-UNI", brandCode: "SK", description: "Universal Microwave PCB", image: pcbImageUrl },
            { id: 1185, name: "Universal Washing Machine PCB", company: "SHIVALIK INTERNATIONAL", category: "PCB", modelNo: "SK-WASHING-MACHINE-UNI", brandCode: "SK", description: "Universal Washing Machine PCB", image: pcbImageUrl },

            // SHIVALIK INTERNATIONAL Other Parts Section
            { id: 1186, name: "Universal Spare", company: "SHIVALIK INTERNATIONAL", category: "Other Parts", modelNo: "SK-UNI", brandCode: "SK", description: "Universal Spare", image: otherPartsImageUrl },
            { id: 1187, name: "2 Meter Hose", company: "SHIVALIK INTERNATIONAL", category: "Other Parts", modelNo: "SK-2M", brandCode: "SK", description: "2 Meter Hose", image: otherPartsImageUrl },
            { id: 1188, name: "3 Meter Hose", company: "SHIVALIK INTERNATIONAL", category: "Other Parts", modelNo: "SK-3M", brandCode: "SK", description: "3 Meter Hose", image: otherPartsImageUrl },
            { id: 1189, name: "4 Meter Hose", company: "SHIVALIK INTERNATIONAL", category: "Other Parts", modelNo: "SK-4M", brandCode: "SK", description: "4 Meter Hose", image: otherPartsImageUrl },
            { id: 1190, name: "5 Meter Hose", company: "SHIVALIK INTERNATIONAL", category: "Other Parts", modelNo: "SK-5M", brandCode: "SK", description: "5 Meter Hose", image: otherPartsImageUrl },
            { id: 1191, name: "Dual Size Connector 8+6", company: "SHIVALIK INTERNATIONAL", category: "Other Parts", modelNo: "SK-8+6", brandCode: "SK", description: "Dual Size Connector 8+6", image: otherPartsImageUrl },
            { id: 1192, name: "Dual Size Connector 9.5+4", company: "SHIVALIK INTERNATIONAL", category: "Other Parts", modelNo: "SK-9.5+4", brandCode: "SK", description: "Dual Size Connector 9.5+4", image: otherPartsImageUrl },
            { id: 1193, name: "Dual Size Connector 10+4", company: "SHIVALIK INTERNATIONAL", category: "Other Parts", modelNo: "SK-10+4", brandCode: "SK", description: "Dual Size Connector 10+4", image: otherPartsImageUrl },
            { id: 1194, name: "Dual Size Connector 10+5", company: "SHIVALIK INTERNATIONAL", category: "Other Parts", modelNo: "SK-10+5", brandCode: "SK", description: "Dual Size Connector 10+5", image: otherPartsImageUrl },
            { id: 1195, name: "Dual Size Connector 11+6", company: "SHIVALIK INTERNATIONAL", category: "Other Parts", modelNo: "SK-11+6", brandCode: "SK", description: "Dual Size Connector 11+6", image: otherPartsImageUrl },
            { id: 1196, name: "Dual Size Connector 12+6", company: "SHIVALIK INTERNATIONAL", category: "Other Parts", modelNo: "SK-12+6", brandCode: "SK", description: "Dual Size Connector 12+6", image: otherPartsImageUrl },
            { id: 1197, name: "Blue Adapter", company: "SHIVALIK INTERNATIONAL", category: "Other Parts", modelNo: "SK-BLUE-ADOPTER", brandCode: "SK", description: "Blue Adapter", image: otherPartsImageUrl },
            { id: 1198, name: "BS Sensor", company: "SHIVALIK INTERNATIONAL", category: "Other Parts", modelNo: "SK-BS-SENSOR", brandCode: "SK", description: "BS Sensor", image: otherPartsImageUrl },
            { id: 1199, name: "Buzzer", company: "SHIVALIK INTERNATIONAL", category: "Other Parts", modelNo: "SK-BUZZER", brandCode: "SK", description: "Buzzer", image: otherPartsImageUrl },
            { id: 1200, name: "GL Buzzer", company: "SHIVALIK INTERNATIONAL", category: "Other Parts", modelNo: "SK-GL-BUZZER", brandCode: "SK", description: "GL Buzzer", image: otherPartsImageUrl },
            { id: 1201, name: "Filter Adapter", company: "SHIVALIK INTERNATIONAL", category: "Other Parts", modelNo: "SK-FILTER-ADOPTER", brandCode: "SK", description: "Filter Adapter", image: otherPartsImageUrl },
            { id: 1202, name: "Washing Machine Hubs", company: "SHIVALIK INTERNATIONAL", category: "Other Parts", modelNo: "SK-HUBS", brandCode: "SK", description: "Washing Machine Hubs", image: otherPartsImageUrl },
            { id: 1203, name: "Safety Lock", company: "SHIVALIK INTERNATIONAL", category: "Other Parts", modelNo: "SK-SAFTY", brandCode: "SK", description: "Safety Lock", image: otherPartsImageUrl },
            { id: 1204, name: "IDH Spare", company: "SHIVALIK INTERNATIONAL", category: "Other Parts", modelNo: "SK-IDH", brandCode: "SK", description: "IDH Spare", image: otherPartsImageUrl },
            { id: 1205, name: "Samsung Sensor", company: "SHIVALIK INTERNATIONAL", category: "Other Parts", modelNo: "SK-SAM-SENSOR", brandCode: "SK", description: "Samsung Sensor", image: otherPartsImageUrl },
            { id: 1206, name: "Samsung Door Sensor", company: "SHIVALIK INTERNATIONAL", category: "Other Parts", modelNo: "SK-SAM-DOOR-SENDOR", brandCode: "SK", description: "Samsung Door Sensor", image: otherPartsImageUrl },
            { id: 1207, name: "Spare Screw", company: "SHIVALIK INTERNATIONAL", category: "Other Parts", modelNo: "SK-SCREW", brandCode: "SK", description: "Spare Screw", image: otherPartsImageUrl },
            { id: 1208, name: "Flaring Tool 195", company: "SHIVALIK INTERNATIONAL", category: "Refrigeration", modelNo: "SK-195", brandCode: "SK", description: "Flaring Tool 195", image: productImageUrl },
            { id: 1209, name: "3 Way 250/500 Gauge", company: "SHIVALIK INTERNATIONAL", category: "Refrigeration", modelNo: "SK-3W-250,500", brandCode: "SK", description: "3 Way 250/500 Gauge", image: productImageUrl },
            { id: 1210, name: "Single Torch", company: "SHIVALIK INTERNATIONAL", category: "Refrigeration", modelNo: "SK-SINGLE-TORCH", brandCode: "SK", description: "Single Torch", image: productImageUrl },
            { id: 1211, name: "Capacitor (Multiple Sizes)", company: "SHIVALIK INTERNATIONAL", category: "Refrigeration", modelNo: "SK-CAP", brandCode: "SK", description: "Capacitor (Multiple Sizes)", image: productImageUrl },
            { id: 1217, name: "Foam Bottle", company: "SHIVALIK INTERNATIONAL", category: "Pressure Washer", modelNo: "SK-FORM-BOTTLE", brandCode: "SK", description: "Foam Bottle", image: pressureWasherImageUrl },
            { id: 1218, name: "Pressure Gauge", company: "SHIVALIK INTERNATIONAL", category: "Pressure Washer", modelNo: "SK-GUAGE", brandCode: "SK", description: "Pressure Gauge", image: pressureWasherImageUrl },
            { id: 1219, name: "Washer Filter", company: "SHIVALIK INTERNATIONAL", category: "Pressure Washer", modelNo: "SK-FILTER", brandCode: "SK", description: "Washer Filter", image: pressureWasherImageUrl },
            { id: 1220, name: "360 Connector", company: "SHIVALIK INTERNATIONAL", category: "Pressure Washer", modelNo: "SK-360", brandCode: "SK", description: "360 Connector", image: pressureWasherImageUrl },
            { id: 1221, name: "Connector Set", company: "SHIVALIK INTERNATIONAL", category: "Pressure Washer", modelNo: "SK-CONNECTORS", brandCode: "SK", description: "Connector Set", image: pressureWasherImageUrl },
            { id: 1222, name: "Washer Head", company: "SHIVALIK INTERNATIONAL", category: "Pressure Washer", modelNo: "SK-HEAD", brandCode: "SK", description: "Washer Head", image: pressureWasherImageUrl },
            { id: 1223, name: "Spray Gun", company: "SHIVALIK INTERNATIONAL", category: "Pressure Washer", modelNo: "SK-GUN", brandCode: "SK", description: "Spray Gun", image: pressureWasherImageUrl },
            { id: 1224, name: "Wireless Pressure Washer", company: "SHIVALIK INTERNATIONAL", category: "Pressure Washer", modelNo: "SK-WIRELESS-WASHER", brandCode: "SK", description: "Wireless Pressure Washer", image: pressureWasherImageUrl },
            { id: 1225, name: "Commercial Pressure Washer", company: "SHIVALIK INTERNATIONAL", category: "Pressure Washer", modelNo: "SK-COMMERCIAL", brandCode: "SK", description: "Commercial Pressure Washer", image: pressureWasherImageUrl },
            { id: 1226, name: "BS Fan Motor", company: "SHIVALIK INTERNATIONAL", category: "Fan Motor", modelNo: "SK-BS", brandCode: "SK", description: "BS Fan Motor", image: fanMotorImageUrl },
            { id: 1227, name: "DC 4 Wire Fan Motor", company: "SHIVALIK INTERNATIONAL", category: "Fan Motor", modelNo: "SK-DC-4W", brandCode: "SK", description: "DC 4 Wire Fan Motor", image: fanMotorImageUrl },
            { id: 1228, name: "DC Godrej Fan Motor", company: "SHIVALIK INTERNATIONAL", category: "Fan Motor", modelNo: "SK-DC-GD", brandCode: "SK", description: "DC Godrej Fan Motor", image: fanMotorImageUrl },
            { id: 1229, name: "DC GL Long Shaft Motor", company: "SHIVALIK INTERNATIONAL", category: "Fan Motor", modelNo: "SK-DC-GL-L", brandCode: "SK", description: "DC GL Long Shaft Motor", image: fanMotorImageUrl },
            { id: 1230, name: "DC GL Fan Motor", company: "SHIVALIK INTERNATIONAL", category: "Fan Motor", modelNo: "SK-DC-GL", brandCode: "SK", description: "DC GL Fan Motor", image: fanMotorImageUrl },
            { id: 1231, name: "Godrej Fan Motor", company: "SHIVALIK INTERNATIONAL", category: "Fan Motor", modelNo: "SK-GD", brandCode: "SK", description: "Godrej Fan Motor", image: fanMotorImageUrl },
            { id: 1232, name: "Samsung Old Model Fan Motor", company: "SHIVALIK INTERNATIONAL", category: "Fan Motor", modelNo: "SK-SAM-OLD", brandCode: "SK", description: "Samsung Old Model Fan Motor", image: fanMotorImageUrl },
            { id: 1233, name: "GL Fan Motor", company: "SHIVALIK INTERNATIONAL", category: "Fan Motor", modelNo: "SK-GL", brandCode: "SK", description: "GL Fan Motor", image: fanMotorImageUrl },
            { id: 1234, name: "Whirlpool New Model Fan Motor", company: "SHIVALIK INTERNATIONAL", category: "Fan Motor", modelNo: "SK-WP-NEW", brandCode: "SK", description: "Whirlpool New Model Fan Motor", image: fanMotorImageUrl },
            { id: 1235, name: "Samsung Fan Motor", company: "SHIVALIK INTERNATIONAL", category: "Fan Motor", modelNo: "SK-SAM", brandCode: "SK", description: "Samsung Fan Motor", image: fanMotorImageUrl },
            { id: 1236, name: "Whirlpool Fan Motor", company: "SHIVALIK INTERNATIONAL", category: "Fan Motor", modelNo: "SK-WP", brandCode: "SK", description: "Whirlpool Fan Motor", image: fanMotorImageUrl },
            { id: 1237, name: "GL Thermostat", company: "SHIVALIK INTERNATIONAL", category: "Thermostat", modelNo: "SK-GL", brandCode: "SK", description: "GL Thermostat", image: productImageUrl },
            { id: 1238, name: "GL 600 Thermostat", company: "SHIVALIK INTERNATIONAL", category: "Thermostat", modelNo: "SK-GL600", brandCode: "SK", description: "GL 600 Thermostat", image: productImageUrl },
            { id: 1239, name: "Water Cooler Thermostat", company: "SHIVALIK INTERNATIONAL", category: "Thermostat", modelNo: "SK-WC", brandCode: "SK", description: "Water Cooler Thermostat", image: productImageUrl },
            { id: 1240, name: "Bottle Cooler Thermostat", company: "SHIVALIK INTERNATIONAL", category: "Thermostat", modelNo: "SK-BC", brandCode: "SK", description: "Bottle Cooler Thermostat", image: productImageUrl },
            { id: 1241, name: "Deep Freezer Thermostat", company: "SHIVALIK INTERNATIONAL", category: "Thermostat", modelNo: "SK-DF", brandCode: "SK", description: "Deep Freezer Thermostat", image: productImageUrl },
            { id: 1242, name: "HR Thermostat", company: "SHIVALIK INTERNATIONAL", category: "Thermostat", modelNo: "SK-HR", brandCode: "SK", description: "HR Thermostat", image: productImageUrl },
            { id: 1243, name: "Samsung RAD Thermostat", company: "SHIVALIK INTERNATIONAL", category: "Thermostat", modelNo: "SK-SAM-RAD", brandCode: "SK", description: "Samsung RAD Thermostat", image: productImageUrl },
            { id: 1244, name: "Whirlpool 600 Thermostat", company: "SHIVALIK INTERNATIONAL", category: "Thermostat", modelNo: "SK-WP600", brandCode: "SK", description: "Whirlpool 600 Thermostat", image: productImageUrl },
            { id: 1245, name: "35 Minute Timer ON 6", company: "SHIVALIK INTERNATIONAL", category: "Timer", modelNo: "SK-ON-6", brandCode: "SK", description: "35 Minute Timer ON 6", image: productImageUrl },
            { id: 1246, name: "DR5 Door Lock", company: "SHIVALIK INTERNATIONAL", category: "Door Lock", modelNo: "DL-DR5", brandCode: "DL", description: "DR5 Door Lock", image: doorLockImageUrl },
            { id: 1247, name: "BS Door Lock Type 1", company: "SHIVALIK INTERNATIONAL", category: "Door Lock", modelNo: "DL-BS-1", brandCode: "DL", description: "BS Door Lock Type 1", image: doorLockImageUrl },
            { id: 1248, name: "GL Door Lock", company: "SHIVALIK INTERNATIONAL", category: "Door Lock", modelNo: "DL-GL-1", brandCode: "DL", description: "GL Door Lock", image: doorLockImageUrl },
            { id: 1249, name: "FB Door Lock", company: "SHIVALIK INTERNATIONAL", category: "Door Lock", modelNo: "DL-FB", brandCode: "DL", description: "FB Door Lock", image: doorLockImageUrl },
            { id: 1250, name: "Samsung Door Lock Type 2", company: "SHIVALIK INTERNATIONAL", category: "Door Lock", modelNo: "DL-SAM-2", brandCode: "DL", description: "Samsung Door Lock Type 2", image: doorLockImageUrl },
            { id: 1251, name: "Samsung Spin Timer", company: "SHIVALIK INTERNATIONAL", category: "Spin Timer", modelNo: "SP-SAM", brandCode: "SP", description: "Samsung Spin Timer", image: productImageUrl },
            { id: 1252, name: "Dixon Spin Timer", company: "SHIVALIK INTERNATIONAL", category: "Spin Timer", modelNo: "SP-DIX", brandCode: "SP", description: "Dixon Spin Timer", image: productImageUrl },
            { id: 1253, name: "Electrolux Spin Timer", company: "SHIVALIK INTERNATIONAL", category: "Spin Timer", modelNo: "SP-EL", brandCode: "SP", description: "Electrolux Spin Timer", image: productImageUrl },
            { id: 1254, name: "GL Spin Timer", company: "SHIVALIK INTERNATIONAL", category: "Spin Timer", modelNo: "SP-GL", brandCode: "SP", description: "GL Spin Timer", image: productImageUrl },
            { id: 1255, name: "Whirlpool Spin Timer", company: "SHIVALIK INTERNATIONAL", category: "Spin Timer", modelNo: "SP-WP", brandCode: "SP", description: "Whirlpool Spin Timer", image: productImageUrl },
            { id: 1256, name: "Godrej Pressure Switch", company: "SHIVALIK INTERNATIONAL", category: "Pressure Switch", modelNo: "PS-GOD", brandCode: "PS", description: "Godrej Pressure Switch", image: pressureSwitchImageUrl },
            { id: 1257, name: "FB Type 2 Pressure Switch", company: "SHIVALIK INTERNATIONAL", category: "Pressure Switch", modelNo: "PS-FB-2", brandCode: "PS", description: "FB Type 2 Pressure Switch", image: pressureSwitchImageUrl },
            { id: 1258, name: "GL Patti Type Switch", company: "SHIVALIK INTERNATIONAL", category: "Pressure Switch", modelNo: "PS-GL-PATI", brandCode: "PS", description: "GL Patti Type Switch", image: pressureSwitchImageUrl },
            { id: 1259, name: "Lloyd Patti Switch", company: "SHIVALIK INTERNATIONAL", category: "Pressure Switch", modelNo: "PS-LYD-P", brandCode: "PS", description: "Lloyd Patti Switch", image: pressureSwitchImageUrl },
            { id: 1260, name: "HR Pressure Switch", company: "SHIVALIK INTERNATIONAL", category: "Pressure Switch", modelNo: "PS-HR", brandCode: "PS", description: "HR Pressure Switch", image: pressureSwitchImageUrl },
            { id: 1261, name: "Panasonic Pressure Switch", company: "SHIVALIK INTERNATIONAL", category: "Pressure Switch", modelNo: "PS-PAN", brandCode: "PS", description: "Panasonic Pressure Switch", image: pressureSwitchImageUrl },
            { id: 1262, name: "Lloyd Pressure Switch", company: "SHIVALIK INTERNATIONAL", category: "Pressure Switch", modelNo: "PS-LYD", brandCode: "PS", description: "Lloyd Pressure Switch", image: pressureSwitchImageUrl },
            { id: 1263, name: "Samsung Front Switch", company: "SHIVALIK INTERNATIONAL", category: "Pressure Switch", modelNo: "PS-SAM-F", brandCode: "PS", description: "Samsung Front Switch", image: pressureSwitchImageUrl },
            { id: 1264, name: "Samsung Type 2", company: "SHIVALIK INTERNATIONAL", category: "Pressure Switch", modelNo: "PS-SAM-2", brandCode: "PS", description: "Samsung Type 2", image: pressureSwitchImageUrl },
            { id: 1265, name: "Voltas Type 1", company: "SHIVALIK INTERNATIONAL", category: "Pressure Switch", modelNo: "PS-VLT-1", brandCode: "PS", description: "Voltas Type 1", image: pressureSwitchImageUrl },
            { id: 1266, name: "Voltas Type 2", company: "SHIVALIK INTERNATIONAL", category: "Pressure Switch", modelNo: "PS-VLT-2", brandCode: "PS", description: "Voltas Type 2", image: pressureSwitchImageUrl },
            { id: 1267, name: "GL DC Type 2 Drain Motor", company: "SHIVALIK INTERNATIONAL", category: "Drain Motor", modelNo: "DM-GL-DC-2", brandCode: "DM", description: "GL DC Type 2 Drain Motor", image: drainMotorImageUrl },
            { id: 1268, name: "FB Type Drain Motor", company: "SHIVALIK INTERNATIONAL", category: "Drain Motor", modelNo: "DM-FB", brandCode: "DM", description: "FB Type Drain Motor", image: drainMotorImageUrl },
            { id: 1269, name: "FB Type 2 Drain Motor", company: "SHIVALIK INTERNATIONAL", category: "Drain Motor", modelNo: "DM-FB-2", brandCode: "DM", description: "FB Type 2 Drain Motor", image: drainMotorImageUrl },
            { id: 1270, name: "BK Type Drain Motor", company: "SHIVALIK INTERNATIONAL", category: "Drain Motor", modelNo: "DM-BK", brandCode: "DM", description: "BK Type Drain Motor", image: drainMotorImageUrl },
            { id: 1271, name: "BS Type Drain Motor", company: "SHIVALIK INTERNATIONAL", category: "Drain Motor", modelNo: "DM-BS", brandCode: "DM", description: "BS Type Drain Motor", image: drainMotorImageUrl },
            { id: 1272, name: "NA Type Drain Motor", company: "SHIVALIK INTERNATIONAL", category: "Drain Motor", modelNo: "DM-NA", brandCode: "DM", description: "NA Type Drain Motor", image: drainMotorImageUrl },
            { id: 1273, name: "HR 3 Wire Drain Motor", company: "SHIVALIK INTERNATIONAL", category: "Drain Motor", modelNo: "DM-HR-3", brandCode: "DM", description: "HR 3 Wire Drain Motor", image: drainMotorImageUrl },
            { id: 1274, name: "HR 2 Wire Drain Motor", company: "SHIVALIK INTERNATIONAL", category: "Drain Motor", modelNo: "DM-HR-2", brandCode: "DM", description: "HR 2 Wire Drain Motor", image: drainMotorImageUrl },
            { id: 1275, name: "GL Drain Motor", company: "SHIVALIK INTERNATIONAL", category: "Drain Motor", modelNo: "DM-GL", brandCode: "DM", description: "GL Drain Motor", image: drainMotorImageUrl },
            { id: 1276, name: "GL DC Drain Motor", company: "SHIVALIK INTERNATIONAL", category: "Drain Motor", modelNo: "DM-GL-DC", brandCode: "DM", description: "GL DC Drain Motor", image: drainMotorImageUrl },
            { id: 1277, name: "Whirlpool Drain Motor", company: "SHIVALIK INTERNATIONAL", category: "Drain Motor", modelNo: "DM-WP", brandCode: "DM", description: "Whirlpool Drain Motor", image: drainMotorImageUrl },
            { id: 1278, name: "Samsung Drain Motor", company: "SHIVALIK INTERNATIONAL", category: "Drain Motor", modelNo: "DM-SAM", brandCode: "DM", description: "Samsung Drain Motor", image: drainMotorImageUrl },
            { id: 1279, name: "Videocon Drain Motor", company: "SHIVALIK INTERNATIONAL", category: "Drain Motor", modelNo: "DM-VID", brandCode: "DM", description: "Videocon Drain Motor", image: drainMotorImageUrl },
            { id: 1280, name: "Samsung 3 Wire Drain Motor", company: "SHIVALIK INTERNATIONAL", category: "Drain Motor", modelNo: "DM-SAM-3", brandCode: "DM", description: "Samsung 3 Wire Drain Motor", image: drainMotorImageUrl },
            { id: 1281, name: "Samsung 2 Wire Drain Motor", company: "SHIVALIK INTERNATIONAL", category: "Drain Motor", modelNo: "DM-SAM-2", brandCode: "DM", description: "Samsung 2 Wire Drain Motor", image: drainMotorImageUrl },
            { id: 1299, name: "Samsung Manufacture Part", company: "SHIVALIK INTERNATIONAL", category: "Manufacture", modelNo: "SK-SAM", brandCode: "SK", description: "Samsung Manufacture Part", image: manufactureImageUrl },
            { id: 1300, name: "Panasonic Manufacture Part", company: "SHIVALIK INTERNATIONAL", category: "Manufacture", modelNo: "SK-PAN", brandCode: "SK", description: "Panasonic Manufacture Part", image: manufactureImageUrl },
            { id: 1301, name: "PDS Manufacture Part", company: "SHIVALIK INTERNATIONAL", category: "Manufacture", modelNo: "SK-PDS", brandCode: "SK", description: "PDS Manufacture Part", image: manufactureImageUrl },
            { id: 1302, name: "Laxmi Manufacture Part", company: "SHIVALIK INTERNATIONAL", category: "Manufacture", modelNo: "SK-LAXMI", brandCode: "SK", description: "Laxmi Manufacture Part", image: manufactureImageUrl },
            { id: 1303, name: "6201 Manufacture Component", company: "SHIVALIK INTERNATIONAL", category: "Manufacture", modelNo: "SK-6201", brandCode: "SK", description: "6201 Manufacture Component", image: manufactureImageUrl },
            { id: 1304, name: "6000 Manufacture Component", company: "SHIVALIK INTERNATIONAL", category: "Manufacture", modelNo: "SK-6000", brandCode: "SK", description: "6000 Manufacture Component", image: manufactureImageUrl },
            { id: 1452, name: "Butane Gas Cartridge, Net Weight 225g", company: "VALUE REFRIGERANTS PRIVATE LIMITED", category: "Butane Gas", modelNo: "—", brandCode: "VALUE", description: "Butane Gas Cartridge, Net Weight 225g", image: butaneGasImageUrl },
            { id: 1453, name: "R22", company: "SRF FLORON", category: "Refrigerant", modelNo: "R22", brandCode: "FLORON", description: "Refrigerant for Air Conditioning Units, Meets AHRI 700 Standard", image: refrigerantImageUrl },
            { id: 1454, name: "R134a", company: "SRF FLORON", category: "Refrigerant", modelNo: "R134a", brandCode: "FLORON", description: "Ultra Pure Super Cool Refrigerant, 450g, For Mobile AC Systems, Meets AHRI 700 & SAE J2776", image: refrigerantImageUrl },
            { id: 1455, name: "R134a", company: "SRF FLORON", category: "Refrigerant", modelNo: "R134a", brandCode: "FLORON", description: "Ozone Friendly Refrigerant for Mobile AC Systems & Refrigerators", image: refrigerantImageUrl },
            { id: 1456, name: "Spiral Condenser 8x4", company: "SVS", category: "Spiral Condenser", modelNo: "8x4", brandCode: "SVS", description: "Spiral Condenser Model 8x4 (488+)", image: productImageUrl },
            { id: 1457, name: "Spiral Condenser 10x6", company: "SVS", category: "Spiral Condenser", modelNo: "10x6", brandCode: "SVS", description: "Spiral Condenser Model 10x6 (568+)", image: productImageUrl },
            { id: 1458, name: "Spiral Condenser 12x6", company: "SVS", category: "Spiral Condenser", modelNo: "12x6", brandCode: "SVS", description: "Spiral Condenser Model 12x6 (653+)", image: productImageUrl },
            { id: 1459, name: "Box Type Condenser 199", company: "SVS", category: "Box Type Condenser", modelNo: "199", brandCode: "SVS", description: "Box Type Condenser", image: boxTypeCondenserImageUrl },
            { id: 1460, name: "Box Type Condenser 200", company: "SVS", category: "Box Type Condenser", modelNo: "200", brandCode: "SVS", description: "Box Type Condenser", image: boxTypeCondenserImageUrl },
            { id: 1461, name: "Box Type Condenser 201", company: "SVS", category: "Box Type Condenser", modelNo: "201", brandCode: "SVS", description: "Box Type Condenser", image: boxTypeCondenserImageUrl },
            { id: 1462, name: "Box Type Condenser 202", company: "SVS", category: "Box Type Condenser", modelNo: "202", brandCode: "SVS", description: "Box Type Condenser", image: boxTypeCondenserImageUrl },
            { id: 1463, name: "Box Type Condenser 203", company: "SVS", category: "Box Type Condenser", modelNo: "203", brandCode: "SVS", description: "Box Type Condenser", image: boxTypeCondenserImageUrl },
            { id: 1464, name: "Box Type Condenser 199 Heavy Duty", company: "SVS", category: "Box Type Condenser", modelNo: "199", brandCode: "SVS", description: "Heavy Duty Model (660+)", image: boxTypeCondenserImageUrl },
            { id: 1465, name: "Box Type Condenser 200 Heavy Duty", company: "SVS", category: "Box Type Condenser", modelNo: "200", brandCode: "SVS", description: "Heavy Duty Model (788+)", image: boxTypeCondenserImageUrl },
            { id: 1466, name: "Box Type Condenser 201 Heavy Duty", company: "SVS", category: "Box Type Condenser", modelNo: "201", brandCode: "SVS", description: "Heavy Duty Model (992+)", image: boxTypeCondenserImageUrl },
            { id: 1467, name: "Box Type Condenser 202 Heavy Duty", company: "SVS", category: "Box Type Condenser", modelNo: "202", brandCode: "SVS", description: "Heavy Duty Model (1229+)", image: boxTypeCondenserImageUrl },
            { id: 1468, name: "Box Type Condenser 203 Heavy Duty", company: "SVS", category: "Box Type Condenser", modelNo: "203", brandCode: "SVS", description: "Heavy Duty Model (1525+)", image: boxTypeCondenserImageUrl },
            { id: 1469, name: "Alpha", company: "SVS", category: "Condenser", modelNo: "Alpha", brandCode: "SVS", description: "Alpha Series Condenser", image: condenserImageUrl },
            { id: 1470, name: "Omega", company: "SVS", category: "Condenser", modelNo: "Omega", brandCode: "SVS", description: "Omega Series Condenser", image: condenserImageUrl },
            { id: 1471, name: "Water Dispenser Funnel (Blue)", company: "VOLTA / Generic", category: "Water Dispenser Parts", modelNo: "—", brandCode: "—", description: "Water Dispenser Funnel (Blue)", image: productImageUrl },
            { id: 1472, name: "Water Dispenser Float Valve", company: "VOLTA / Generic", category: "Water Dispenser Parts", modelNo: "—", brandCode: "—", description: "Water Dispenser Float Valve", image: productImageUrl },
            { id: 1473, name: "Water Tap (Push Type) – White", company: "VOLTA / Generic", category: "Water Dispenser Parts", modelNo: "—", brandCode: "—", description: "Water Tap (Push Type) – White", image: productImageUrl },
            { id: 1474, name: "Water Inlet Connector", company: "VOLTA / Generic", category: "Water Dispenser Parts", modelNo: "—", brandCode: "—", description: "Water Inlet Connector", image: productImageUrl },
            { id: 1475, name: "Butane Gas Cartridge – 35% Extra", company: "WELDFLAME", category: "Butane Gas", modelNo: "225g", brandCode: "WELDFLAME", description: "Butane Gas Cartridge – 35% Extra", image: butaneGasImageUrl },
            { id: 1476, name: "14U Condenser – 263+", company: "SVS", category: "Dispenser Condenser", modelNo: "14U", brandCode: "SVS", description: "14U Condenser – 263+", image: dispenserCondenserImageUrl },
            { id: 1477, name: "12U Condenser – 212+", company: "SVS", category: "Dispenser Condenser", modelNo: "12U", brandCode: "SVS", description: "12U Condenser – 212+", image: dispenserCondenserImageUrl },
            { id: 1478, name: "10U Condenser – 170+", company: "SVS", category: "Dispenser Condenser", modelNo: "10U", brandCode: "SVS", description: "10U Condenser – 170+", image: dispenserCondenserImageUrl },
            { id: 1479, name: "8U Condenser – 135+", company: "SVS", category: "Dispenser Condenser", modelNo: "8U", brandCode: "SVS", description: "8U Condenser – 135+", image: dispenserCondenserImageUrl },
            { id: 1480, name: "8U Condenser with Bracket – 145+", company: "SVS", category: "Dispenser Condenser", modelNo: "8U Bracket Type", brandCode: "SVS", description: "8U Condenser with Bracket – 145+", image: dispenserCondenserImageUrl },
            { id: 1481, name: "Power Plus R600a Lubricant – 250ml + 100ml Extra", company: "UNICLA LUBES INDUSTRY", category: "Refrigeration Oil", modelNo: "R600a-350ML", brandCode: "POWER PLUS", description: "Power Plus R600a Lubricant – 250ml + 100ml Extra", image: productImageUrl },
            { id: 1482, name: "Power Plus R410a Lubricant", company: "UNICLA LUBES INDUSTRY", category: "Refrigeration Oil", modelNo: "R410a", brandCode: "POWER PLUS", description: "Power Plus R410a Lubricant", image: productImageUrl },
            { id: 1483, name: "Long Life Brazing Flux for AC / Refrigeration", company: "SILMUX", category: "Brazing Flux", modelNo: "Long Life", brandCode: "SILMUX", description: "Long Life Brazing Flux for AC / Refrigeration", image: brazingFluxImageUrl },
            { id: 1484, name: "Brazing Flux – Consumable Grade", company: "NATURE'S", category: "Brazing Flux", modelNo: "—", brandCode: "NATURE'S", description: "Brazing Flux – Consumable Grade", image: brazingFluxImageUrl },
            { id: 1485, name: "40x60mm Lead Type – Net Qty 25 Nos", company: "FALCON", category: "Dual Capacitor", modelNo: "12+6 µF", brandCode: "FALCON", description: "40x60mm Lead Type – Net Qty 25 Nos", image: dualCapacitorImageUrl },
            { id: 1486, name: "40x60mm Lead Type – Net Qty 25 Nos", company: "FALCON", category: "Dual Capacitor", modelNo: "10+6 µF", brandCode: "FALCON", description: "40x60mm Lead Type – Net Qty 25 Nos", image: dualCapacitorImageUrl },
            { id: 1487, name: "40x60mm Lead Type – Net Qty 25 Nos", company: "FALCON", category: "Dual Capacitor", modelNo: "9+6 µF", brandCode: "FALCON", description: "40x60mm Lead Type – Net Qty 25 Nos", image: dualCapacitorImageUrl },
            { id: 1488, name: "40x60mm Lead Type – Net Qty 25 Nos", company: "FALCON", category: "Dual Capacitor", modelNo: "9+5 µF", brandCode: "FALCON", description: "40x60mm Lead Type – Net Qty 25 Nos", image: dualCapacitorImageUrl },
            { id: 1489, name: "Blue Star Water Dispenser Funnel – Blue Color", company: "BLUE STAR", category: "Water Dispenser Funnel", modelNo: "—", brandCode: "BLUE STAR", description: "Blue Star Water Dispenser Funnel – Blue Color", image: productImageUrl },
            { id: 1490, name: "Thermal Fuse Wiring Assembly", company: "Generic", category: "Thermal Protector Wiring", modelNo: "—", brandCode: "—", description: "Thermal Fuse Wiring Assembly", image: productImageUrl },
            { id: 1491, name: "14U Refrigerator Condenser – 263+", company: "SVS", category: "Spiral Condenser", modelNo: "14U", brandCode: "SVS", description: "14U Refrigerator Condenser – 263+", image: productImageUrl },
            { id: 1492, name: "12U Refrigerator Condenser – 212+", company: "SVS", category: "Spiral Condenser", modelNo: "12U", brandCode: "SVS", description: "12U Refrigerator Condenser – 212+", image: productImageUrl },
            { id: 1493, name: "10U Refrigerator Condenser – 170+", company: "SVS", category: "Spiral Condenser", modelNo: "10U", brandCode: "SVS", description: "10U Refrigerator Condenser – 170+", image: productImageUrl },
            { id: 1494, name: "8U Refrigerator Condenser – 135+", company: "SVS", category: "Spiral Condenser", modelNo: "8U", brandCode: "SVS", description: "8U Refrigerator Condenser – 135+", image: productImageUrl },
            { id: 1495, name: "8U Refrigerator Condenser with Bracket – 145+", company: "SVS", category: "Spiral Condenser", modelNo: "8U-B", brandCode: "SVS", description: "8U Refrigerator Condenser with Bracket – 145+", image: productImageUrl },
            { id: 1496, name: "Push Type Water Tap – White", company: "Generic", category: "Water Dispenser Tap", modelNo: "—", brandCode: "—", description: "Push Type Water Tap – White", image: productImageUrl },
            { id: 1497, name: "Stainless Steel Shelf Support Clip", company: "Generic", category: "Visi Cooler Spare", modelNo: "Shelf Clip", brandCode: "—", description: "Stainless Steel Shelf Support Clip", image: productImageUrl },
            { id: 1498, name: "Heavy Duty Square Type Condenser (Commercial Use)", company: "SVS", category: "Box Type Condenser", modelNo: "Square Type", brandCode: "SVS", description: "Heavy Duty Square Type Condenser (Commercial Use)", image: boxTypeCondenserImageUrl },
            { id: 1499, name: "Push Type Tap – Red Ring", company: "Generic", category: "Water Dispenser Tap", modelNo: "Red Ring", brandCode: "—", description: "Push Type Tap – Red Ring", image: productImageUrl },
            { id: 1500, name: "Push Type Tap – Blue Ring", company: "Generic", category: "Water Dispenser Tap", modelNo: "Blue Ring", brandCode: "—", description: "Push Type Tap – Blue Ring", image: productImageUrl },
            { id: 1501, name: "Plastic Float Valve Assembly", company: "Generic", category: "Water Dispenser Float Valve", modelNo: "Standard", brandCode: "—", description: "Plastic Float Valve Assembly", image: productImageUrl },
            { id: 1502, name: "Black Coated Square Condenser Coil", company: "SVS", category: "Refrigerator Condenser", modelNo: "Square Coil Large", brandCode: "SVS", description: "Black Coated Square Condenser Coil", image: productImageUrl },
            { id: 1503, name: "Black Coated Compact Square Condenser Coil", company: "SVS", category: "Refrigerator Condenser", modelNo: "Square Coil Small", brandCode: "SVS", description: "Black Coated Compact Square Condenser Coil", image: productImageUrl },
            { id: 1504, name: "Genuine Whirlpool Washing Machine Timer Assembly", company: "WHIRLPOOL", category: "Washing Machine Timer", modelNo: "—", brandCode: "WHIRLPOOL", description: "Genuine Whirlpool Washing Machine Timer Assembly", image: productImageUrl },
            { id: 1505, name: "Refrigeration Compressor Oil – 1L", company: "MPCL", category: "Refrigeration Oil", modelNo: "Refriz 3B", brandCode: "MPCL", description: "Refrigeration Compressor Oil – 1L", image: productImageUrl },
            { id: 1506, name: "Grade 68 Refrigeration Oil", company: "SUPER ZED POWER", category: "Refrigeration Oil", modelNo: "Oil 68", brandCode: "SZP", description: "Grade 68 Refrigeration Oil", image: productImageUrl },
            { id: 1507, name: "AC Coil Cleaner Spray", company: "COIL RINSE", category: "Coil Cleaner Spray", modelNo: "No Rinse", brandCode: "COIL RINSE", description: "AC Coil Cleaner Spray", image: coilCleanerImageUrl },
            { id: 1508, name: "Coil Cleaner Spray Can", company: "CI SUPER SPRAY", category: "Coil Cleaner", modelNo: "—", brandCode: "CI", description: "Coil Cleaner Spray Can", image: coilCleanerImageUrl },
            { id: 1509, name: "Multi Purpose Expandable PU Foam – 750g", company: "APL / ABRO Type", category: "PU Foam Sealant", modelNo: "PU-750", brandCode: "—", description: "Multi Purpose Expandable PU Foam – 750g", image: puFoamSealantImageUrl },
            { id: 1510, name: "R32 Refrigerant – Difluoromethane", company: "REFTRON", category: "Refrigerant Gas", modelNo: "R32", brandCode: "REFTRON", description: "R32 Refrigerant – Difluoromethane", image: refrigerantGasImageUrl },
            { id: 1511, name: "Instant Drying Coil Saver Spray – Non ODS Product – Industrial Use", company: "CI", category: "Coil Cleaner Spray", modelNo: "Coil Saver", brandCode: "CI", description: "Instant Drying Coil Saver Spray – Non ODS Product – Industrial Use", image: coilCleanerImageUrl },
            { id: 1512, name: "Vacuum Pump Oil – Manufactured by Unicla Lubes Industry", company: "POWER PLUS", category: "Vacuum Pump Oil", modelNo: "320ML", brandCode: "POWER PLUS", description: "Vacuum Pump Oil – Manufactured by Unicla Lubes Industry", image: productImageUrl },
            { id: 1513, name: "Hydrocarbon Blend Refrigerant – Replace R134a – 170g", company: "VIJAY PETROCHEM PVT. LTD.", category: "Refrigerant", modelNo: "Freezeon 170g", brandCode: "FREEZEON", description: "Hydrocarbon Blend Refrigerant – Replace R134a – 170g", image: refrigerantImageUrl },
            { id: 1514, name: "R404A Lubricant – 250ml + 100ml Extra", company: "POWER PLUS", category: "Refrigeration Oil", modelNo: "R404A-350ML", brandCode: "POWER PLUS", description: "R404A Lubricant – 250ml + 100ml Extra", image: productImageUrl },
            { id: 1515, name: "Liquid Line Filter Drier", company: "DANFOSS", category: "Filter Drier", modelNo: "DML 083", brandCode: "DANFOSS", description: "Liquid Line Filter Drier", image: productImageUrl },
            { id: 1516, name: "Liquid Line Filter Drier", company: "DANFOSS", category: "Filter Drier", modelNo: "DML 163S", brandCode: "DANFOSS", description: "Liquid Line Filter Drier", image: productImageUrl },
            { id: 1517, name: "Liquid Line Filter Drier", company: "DANFOSS", category: "Filter Drier", modelNo: "DML 164S", brandCode: "DANFOSS", description: "Liquid Line Filter Drier", image: productImageUrl },
            { id: 1518, name: "Liquid Line Filter Drier", company: "DANFOSS", category: "Filter Drier", modelNo: "DCL 163S", brandCode: "DANFOSS", description: "Liquid Line Filter Drier", image: productImageUrl },
            { id: 1519, name: "Liquid Line Filter Drier", company: "DANFOSS", category: "Filter Drier", modelNo: "DCL 165S", brandCode: "DANFOSS", description: "Liquid Line Filter Drier", image: productImageUrl },
            { id: 1520, name: "Liquid Line Filter Drier", company: "SYNERGY", category: "Filter Drier", modelNo: "Type 164S", brandCode: "SYNERGY", description: "Liquid Line Filter Drier", image: productImageUrl },
            { id: 1521, name: "PAG Compressor Oil – For R134a Car AC – 1 Litre", company: "UNICLA", category: "Compressor Oil", modelNo: "ZEP OIL 1300-1G", brandCode: "UNICLA", description: "PAG Compressor Oil – For R134a Car AC – 1 Litre", image: compressorOilImageUrl },
            { id: 1522, name: "Black Coated Square Condenser Coil", company: "VOLTAS", category: "Condenser Coil", modelNo: "Square Type", brandCode: "VOLTAS", description: "Black Coated Square Condenser Coil", image: condenserCoilCategoryImageUrl },
            { id: 1523, name: "Hydrocarbon Refrigerant – Zero ODP – Compatible with Mineral Oil", company: "GODREJ SMART CARE", category: "Refrigerant", modelNo: "Replace R134a", brandCode: "GODREJ", description: "Hydrocarbon Refrigerant – Zero ODP – Compatible with Mineral Oil", image: refrigerantImageUrl },
            { id: 1524, name: "Single Pole Contactor 40A – TC TCP401", company: "TOTALINE (A Division of Carrier)", category: "Contactor", modelNo: "2042254", brandCode: "TOTALINE", description: "Single Pole Contactor 40A – TC TCP401", image: contactorImageUrl },
            { id: 1525, name: "Heavy Duty PTFE Thread Seal Tape", company: "QUICKFIX", category: "PTFE Thread Seal Tape", modelNo: "12mm x 10m", brandCode: "QUICKFIX", description: "Heavy Duty PTFE Thread Seal Tape", image: ptfeThreadSealTapeImageUrl },
            { id: 1526, name: "Heavy Duty PTFE Thread Seal Tape", company: "WEMBLEY", category: "PTFE Thread Seal Tape", modelNo: "12mm x 10m", brandCode: "WEMBLEY", description: "Heavy Duty PTFE Thread Seal Tape", image: ptfeThreadSealTapeImageUrl },
    // ...more SHIVALIK products from the image...
  ];

const defaultImage = productImageUrl;

const productImageByName = {};

function resolveImageUrl(image) {
  if (!image) return defaultImage;
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

function resolveProductImageUrl(req, imagePath) {
  if (!imagePath) return imagePath;
  if (/^https?:\/\//i.test(imagePath) || imagePath.startsWith("data:")) {
    return imagePath;
  }

  const protocolHeader = req.get("x-forwarded-proto");
  const protocol = protocolHeader ? protocolHeader.split(",")[0].trim() : req.protocol;
  const host = req.get("host");

  if (!host) return imagePath;

  return `${protocol}://${host}${imagePath.startsWith("/") ? "" : "/"}${imagePath}`;
}

app.get("/api/products", (req, res) => {
  res.json(products.map((product) => ({
    ...product,
    image: resolveProductImageUrl(req, product.image),
  })));
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
