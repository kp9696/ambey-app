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
const evaporatorCoilImageUrl = "https://raw.githubusercontent.com/kp9696/Speedtest-/main/img4584.jpg";
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const compression = require("compression");

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
app.use(compression({ threshold: 1024 }));
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
  {id:1,name:"Pro Washer Water Softener",company:"Godrej Smart Care",category:"Accessories",modelNo:"2253005000047",brandCode:"GSC",description:"Water softener used for washing machines to reduce hard water damage",image:"https://dukaan.b-cdn.net/700x700/webp/3283133/436ab683-d545-4572-912b-ec70e833d33f/1611404865441.jpeg"},
  {id:2,name:"Energy Saver Kit",company:"Godrej Smart Care",category:"Accessories",modelNo:"HET-160",brandCode:"GSC",description:"Energy saving device used with home appliances",image:"https://static.godrejenterprises.com/v_Pro_th_d8870b80f8.jpg"},
  {id:3,name:"Frostcare Defroster Mechanical",company:"Godrej Smart Care",category:"Accessories",modelNo:"23171500000004",brandCode:"GSC",description:"Mechanical defroster used for refrigerator frost removal",image:"https://rukminim2.flixcart.com/image/1332/1332/k186fm80/defrost-timer/q/g/v/frostcare-automatic-defrost-timer-godrej-original-imafkukggqg6jzjc.jpeg?q=90"},
  {id:4,name:"Washing Machine Cover",company:"Godrej Smart Care",category:"Accessories",modelNo:"52141601PACK01",brandCode:"GSC",description:"Protective cover for washing machines",image:"https://m.media-amazon.com/images/I/51XPLvqKYRL._SY300_SX300_QL70_ML2_.jpg"},
  {id:5,name:"Copper Pipe",company:"Godrej Smart Care",category:"Accessories",modelNo:"Copper Brazing AL",brandCode:"GSC",description:"Copper pipe used for refrigeration and AC piping",image:"images/page3_img3.jpeg"},
  {id:6,name:"AC Outdoor Stand for 2 Ton",company:"Godrej Smart Care",category:"Accessories",modelNo:"50121600000007",brandCode:"GSC",description:"Metal stand used for mounting AC outdoor unit",image:"https://static.godrejenterprises.com/AC_ODU_stand_p_2a067d8d6c.jpg"},
  {id:7,name:"Adjustable Refrigerator Stand Grey",company:"Godrej Smart Care",category:"Accessories",modelNo:"62141600PACK74",brandCode:"GSC",description:"Adjustable base stand for refrigerators",image:"https://static.godrejenterprises.com/Refrigerator_Stand_p_585c8e42cc.jpg"},
  {id:8,name:"Multi Dimensional Trolley",company:"Godrej Smart Care",category:"Accessories",modelNo:"40107050000009",brandCode:"GSC",description:"Trolley used for moving heavy appliances",image:"https://static.godrejenterprises.com/multi_dimensional_big_p_88e73d5d39.jpg"},
  {id:9,name:"Wheel Barrow MS",company:"Godrej Smart Care",category:"Accessories",modelNo:"24107050000097",brandCode:"GSC",description:"Metal appliance moving trolley",image:"https://m.media-amazon.com/images/I/31Gi13IPJ4L._SY300_SX300_QL70_ML2_.jpg"},
  {id:10,name:"Starcool Pack 20 in 1",company:"Godrej Smart Care",category:"Accessories",modelNo:"03141700PACK01",brandCode:"GSC",description:"Cooling maintenance kit",image:"https://m.media-amazon.com/images/I/41bT0+OcfyL._SY300_SX300_QL70_ML2_.jpg"},
  {id:11,name:"Universal AC Remote",company:"Godrej Smart Care",category:"Accessories",modelNo:"40107050000007",brandCode:"GSC",description:"Universal remote compatible with multiple AC brands",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHIenfdOxvA0CwMI6vpcXN8j4aBgi4uj4feA&s"},
  {id:12,name:"Relay DC Type S",company:"Godrej Smart Care",category:"Accessories",modelNo:"41127050000007",brandCode:"GSC",description:"Electrical relay used in appliance circuits",image:"https://www.aldahome.com/media/catalog/product/cache/6517c62f5899ad6aa0ba23ceb3eeff97/g/o/godrej-19-5-wp-refrigerator-relay.jpg"},
{id:13,name:"Lintfree Blue Refrigerator Mat",company:"Godrej Smart Care",category:"Accessories",modelNo:"52300000000004",brandCode:"GSC",description:"Anti-dust protective refrigerator mat",image:"https://m.media-amazon.com/images/I/419V3EhDuuL.jpg"},
{id:14,name:"Fresh Ever Deodorizer",company:"Godrej Smart Care",category:"Accessories",modelNo:"47141812000001",brandCode:"GSC",description:"Refrigerator deodorizer for odor removal",image:"https://raw.githubusercontent.com/kp9696/Speedtest-/main/img1677.jpg"},
  {id:15,name:"Washing Machine Floor Cleaner Quick Clean",company:"Godrej Smart Care",category:"Accessories",modelNo:"06131600000016",brandCode:"GSC",description:"Cleaner designed for washing machine maintenance",image:"https://raw.githubusercontent.com/kp9696/Speedtest-/main/img1675.jpg"},
  {id:16,name:"AC Stabilizer 110-280V 4 New SS Shiva",company:"Godrej Smart Care",category:"Accessories",modelNo:"110-280V 4",brandCode:"GSC",description:"Voltage stabilizer designed for air conditioners",image:"https://rukminim2.flixcart.com/image/1332/1332/kjq1mkw0-0/voltage-stabilizer/h/n/k/voltage-stabilizer-air-conditioner-4kva-working-rang-130-280v-original-imafz8ca5kuz6qbz.jpeg?q=90"},
  {id:17,name:"Refrigerator Stabilizer 140-280V Delight Series",company:"Godrej Smart Care",category:"Accessories",modelNo:"140-280V",brandCode:"GSC",description:"Voltage stabilizer designed for refrigerators",image:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRsf-aYJcDpf4O1w_cVIij_iKj5ZuLiO3BdN-tIUbrTfoeM1NuGVQm735XnKfGvIyGSXRI0ejV3eykZAX_rVHHsd90o2dTH"},
  {id:18,name:"Voltage Stabilizer VLS TR PLAS",company:"Godrej Smart Care",category:"Accessories",modelNo:"175-280V 4kVA",brandCode:"GSC",description:"Voltage stabilizer for home appliances with 4kVA capacity",image:"https://m.media-amazon.com/images/G/31/apparel/rcxgs/tile._CB483369979_.gif"},
  {id:19,name:"Voltage Stabilizer VARIO",company:"Godrej Smart Care",category:"Accessories",modelNo:"170-270V 0.8kVA",brandCode:"GSC",description:"Automatic voltage stabilizer with 0.8kVA capacity",image:"https://m.media-amazon.com/images/I/518hZVG557L._SX679_.jpg"},
  {id:20,name:"Voltage Stabilizer VARIO",company:"Godrej Smart Care",category:"Accessories",modelNo:"170-270V 0.5kVA",brandCode:"GSC",description:"Voltage stabilizer with 0.5kVA capacity",image:"https://m.media-amazon.com/images/I/518hZVG557L._SX679_.jpg"},
  {id:21,name:"Voltage Stabilizer VARIO",company:"Godrej Smart Care",category:"Accessories",modelNo:"160-260V 0.5kVA",brandCode:"GSC",description:"Voltage stabilizer supporting 160-260V input range",image:"https://m.media-amazon.com/images/I/518hZVG557L._SX679_.jpg"},
  {id:22,name:"Voltage Stabilizer AVR AC",company:"Godrej Smart Care",category:"Accessories",modelNo:"85-280V",brandCode:"GSC",description:"Automatic voltage regulator stabilizer for AC",image:"https://m.media-amazon.com/images/I/31Bw7rdy4DL._SX300_SY300_QL70_ML2_.jpg"},
  {id:23,name:"AC Outdoor Stand up to 1 Ton",company:"Godrej Smart Care",category:"Accessories",modelNo:"OD Stand",brandCode:"GSC",description:"Outdoor stand for mounting 1 ton AC units",image:"https://m.media-amazon.com/images/I/61wn++dqhEL._AC_UY218_.jpg"},
  {id:24,name:"AC Outdoor Stand under 1 Ton",company:"Godrej Smart Care",category:"Accessories",modelNo:"OD Stand",brandCode:"GSC",description:"Outdoor stand designed for small AC units",image:"https://m.media-amazon.com/images/I/61wn++dqhEL._AC_UY218_.jpg"},
  {id:25,name:"AC Outdoor Stand Window Type Fastener",company:"Godrej Smart Care",category:"Accessories",modelNo:"Window Type",brandCode:"GSC",description:"Fastener stand for window AC outdoor units",image:"https://m.media-amazon.com/images/I/61wn++dqhEL._AC_UY218_.jpg"},
  {id:26,name:"Drop Stand MS AC Outdoor",company:"Godrej Smart Care",category:"Accessories",modelNo:"MS Drop Stand",brandCode:"GSC",description:"Metal drop stand for AC outdoor unit support",image:"https://5.imimg.com/data5/PW/CJ/MY-919767/window-ac-stand-1000x1000.jpg"},
  {id:27,name:"Drop Stand MS AC Outdoor 1.4",company:"Godrej Smart Care",category:"Accessories",modelNo:"MS Drop Stand 1.4",brandCode:"GSC",description:"Heavy duty metal drop stand for AC outdoor unit",image:"https://5.imimg.com/data5/PW/CJ/MY-919767/window-ac-stand-1000x1000.jpg"},
    {id:28,name:"Bottle Shelf",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"—",brandCode:"GSC",description:"Refrigerator door shelf used to hold bottles",image:"https://m.media-amazon.com/images/I/61U3HO7cuqL.jpg"},
    {id:29,name:"Egg Tray",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"—",brandCode:"GSC",description:"Plastic tray designed to store eggs in refrigerator",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxhapgna_AHj2C8rM5iB42ki_Bk3haQFHmDQ&s"},
    {id:30,name:"Ice Tray",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"—",brandCode:"GSC",description:"Tray used for making ice cubes in freezer",image:"https://m.media-amazon.com/images/I/61-n+DZ8iDL._AC_UF894,1000_QL80_.jpg"},
    {id:31,name:"Vegetable Tray",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"—",brandCode:"GSC",description:"Drawer used to store vegetables and fruits",image:"https://m.media-amazon.com/images/I/31TuA-6zKAL._AC_UF894,1000_QL80_.jpg"},
    {id:32,name:"Chiller Tray",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"—",brandCode:"GSC",description:"Tray used in the chiller compartment of refrigerator",image:"https://m.media-amazon.com/images/I/31LKA8n-x7L._SX342_SY445_QL70_ML2_.jpg"},
    {id:33,name:"Glass Shelf",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"—",brandCode:"GSC",description:"Tempered glass shelf used inside refrigerator cabinet",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIZqYrVD9VuDTQ-K0BeqmLFbJ2ggqsoAUglQ&s"},
    {id:34,name:"Refrigerator Bulb",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"15W",brandCode:"GSC",description:"Interior bulb used for lighting inside refrigerator",image:"https://m.media-amazon.com/images/I/31ep-ffdI+L._AC_UF1000,1000_QL80_.jpg"},
    {id:35,name:"Door Gasket",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"Magnetic Gasket",brandCode:"GSC",description:"Rubber magnetic gasket used to seal refrigerator door"},
    {id:36,name:"Thermostat",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"—",brandCode:"GSC",description:"Temperature control device used to regulate cooling in refrigerators"},
    {id:37,name:"Defrost Timer",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"—",brandCode:"GSC",description:"Automatic timer that controls the defrost cycle in refrigerators"},
    {id:38,name:"Overload Protector",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"—",brandCode:"GSC",description:"Safety device that protects the compressor from overheating"},
    {id:39,name:"PTC Relay",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"—",brandCode:"GSC",description:"Starting relay used to start the refrigerator compressor"},
    {id:40,name:"Start Capacitor",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"—",brandCode:"GSC",description:"Capacitor used to assist compressor motor starting",image:"https://5.imimg.com/data5/LX/JV/YE/SELLER-1760152/refrigerator-capacitor-250x250.jpg"},
    {id:41,name:"Copper Capillary Tube",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"—",brandCode:"GSC",description:"Copper tube used in the refrigeration cooling system"},
    {id:42,name:"Filter Drier",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"—",brandCode:"GSC",description:"Component used to remove moisture and impurities in refrigeration systems",image:"https://5.imimg.com/data5/SELLER/Default/2023/11/363337110/SS/AZ/QO/203135308/godrej-copper-filter-dryer.jpg"},
    {id:43,name:"Compressor Mount Kit",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"—",brandCode:"GSC",description:"Rubber mounting kit used to fix the refrigerator compressor"},
    {id:44,name:"Door Handle",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"—",brandCode:"GSC",description:"Handle used for opening and closing refrigerator door"},
    {id:45,name:"Door Lock",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"—",brandCode:"GSC",description:"Lock mechanism used to secure refrigerator door"},
    {id:46,name:"Door Switch",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"—",brandCode:"GSC",description:"Electrical switch that controls interior refrigerator light"},
    {id:47,name:"Defrost Heater",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"—",brandCode:"GSC",description:"Heater used to melt frost buildup inside freezer"},
    {id:48,name:"Drain Tray",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"—",brandCode:"GSC",description:"Tray used to collect water during defrost cycle",image:"https://m.media-amazon.com/images/I/31pOh3qpSQL.jpg"},
    {id:49,name:"Fan Motor",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"—",brandCode:"GSC",description:"Motor used to circulate cold air inside refrigerator",image:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTJ_wMXabovROg3U-IKY_NpgXIVAqUnIerzIzA-oqwxiE61boABpNirt42zHnmjahpcME33WN_-KQZtN1MNIeNtGk3S59D0"},
    {id:50,name:"Evaporator Coil",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"—",brandCode:"GSC",description:"Coil responsible for absorbing heat and producing cooling",image:"https://5.imimg.com/data5/LN/WB/NN/SELLER-25220918/refrigerator-cooling-coil.jpg"},
    {id:51,name:"Temperature Sensor",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"—",brandCode:"GSC",description:"Sensor used to monitor and regulate refrigerator temperature",image:"https://m.media-amazon.com/images/I/41-qHF6J57L._AC_UF1000,1000_QL80_.jpg"},
    {id:52,name:"EVAP 300 With Capillary",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"5214510PAD1074",brandCode:"GSC",description:"Evaporator assembly with capillary tube used in refrigerator cooling system",image:evaporatorCoilImageUrl},
    {id:53,name:"EVAP 6021 With Capillary",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"5214510PAD0215",brandCode:"GSC",description:"Evaporator unit with capillary for refrigerator cooling",image:evaporatorCoilImageUrl},
    {id:54,name:"EVAP 180 ABS With Capillary",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"5214510PAD0767",brandCode:"GSC",description:"ABS evaporator assembly with capillary tube",image:evaporatorCoilImageUrl},
    {id:56,name:"EVAP 300 With Capillary",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"5214510PAD1074",brandCode:"GSC",description:"Evaporator cooling assembly with capillary",image:evaporatorCoilImageUrl},
    {id:57,name:"EVAP 100 HMA With Capillary",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"5214510PAD0126",brandCode:"GSC",description:"Evaporator assembly for refrigerator cooling system",image:evaporatorCoilImageUrl},
    {id:58,name:"EVAP WF Section Line",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"5214510PAD0209",brandCode:"GSC",description:"Evaporator wire frame section line component",image:evaporatorCoilImageUrl},
    {id:59,name:"EVAP G4D SPN 16 Coil",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"4010700XXXX",brandCode:"GSC",description:"Cooling evaporator coil used in refrigerator",image:evaporatorCoilImageUrl},
    {id:60,name:"EVAP A55L Pro Series",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"5214510PAD0257",brandCode:"GSC",description:"Evaporator assembly for Pro series refrigerators",image:evaporatorCoilImageUrl},
    {id:61,name:"Defrost Timer 12 Hours",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"39122550000034",brandCode:"GSC",description:"Automatic defrost timer with 12 hour cycle",image:"https://m.media-amazon.com/images/I/51JqGCjNOuL.jpg"},
    {id:62,name:"Defrost Timer 8 Hours",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"39122550000033",brandCode:"GSC",description:"Automatic defrost timer with 8 hour cycle",image:"https://m.media-amazon.com/images/I/51JqGCjNOuL.jpg"},
    {id:63,name:"Freezer Frame New No White Edge",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"31141500000063",brandCode:"GSC",description:"Freezer frame assembly for refrigerator compartment",image:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTAJKYI1PIQg1pT4N0Xt9ONIh10A73XoU8IFCK8RrI8ds1nXCsyfqJdmiElA-tUhc1kwOKjciulqBU0Ie-FX0XOBGR7-RaTuLZF_sNjdw2cBRZvXpmYJ6VvoOE"},
    {id:64,name:"Freezer Frame New WOT 215 Edge HPS",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"31141500000051",brandCode:"GSC",description:"Freezer frame for refrigerator door",image:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTAJKYI1PIQg1pT4N0Xt9ONIh10A73XoU8IFCK8RrI8ds1nXCsyfqJdmiElA-tUhc1kwOKjciulqBU0Ie-FX0XOBGR7-RaTuLZF_sNjdw2cBRZvXpmYJ6VvoOE"},
    {id:65,name:"Freezer Door Frame No White Twin",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"31141500000054",brandCode:"GSC",description:"Twin refrigerator freezer door frame",image:"https://m.media-amazon.com/images/I/41BEkoNtOZL.jpg"},
    {id:66,name:"Frame Evaporator Step 215L",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"5214510PAD0496",brandCode:"GSC",description:"Evaporator frame assembly for 215L refrigerator"},
    {id:67,name:"Evaporator Tray 165L",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"5214510PAD0321",brandCode:"GSC",description:"Evaporator drip tray used to collect defrost water in refrigerator"},
    {id:68,name:"Evaporator Tray 185L",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"5214510PAD0324",brandCode:"GSC",description:"Plastic tray mounted below evaporator to collect condensation"},
    {id:69,name:"Evaporator Tray 210L",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"5214510PAD0327",brandCode:"GSC",description:"Drain tray used for evaporator defrost water collection"},
    {id:70,name:"Freezer Door Frame 190L",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"31141500000061",brandCode:"GSC",description:"Freezer door frame used in refrigerator freezer compartment",image:"https://m.media-amazon.com/images/I/41BEkoNtOZL.jpg"},
    {id:71,name:"Freezer Door Frame 215L",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"31141500000062",brandCode:"GSC",description:"Door frame assembly for freezer section",image:"https://m.media-amazon.com/images/I/41BEkoNtOZL.jpg"},
    {id:72,name:"Freezer Frame ABS Type",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"31141500000064",brandCode:"GSC",description:"ABS plastic freezer frame used in refrigerator inner cabinet",image:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTAJKYI1PIQg1pT4N0Xt9ONIh10A73XoU8IFCK8RrI8ds1nXCsyfqJdmiElA-tUhc1kwOKjciulqBU0Ie-FX0XOBGR7-RaTuLZF_sNjdw2cBRZvXpmYJ6VvoOE"},
    {id:73,name:"Evaporator Cover 200L",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"5214510PAD0410",brandCode:"GSC",description:"Protective cover placed over evaporator unit",image:"https://5.imimg.com/data5/SELLER/Default/2025/2/488716247/XC/JB/FZ/3484607/godrej-evap-225-duo-service-refrigerator-freezer-box.jpeg"},
    {id:74,name:"Evaporator Cover 220L",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"5214510PAD0413",brandCode:"GSC",description:"Plastic evaporator cover used in frost-free refrigerator",image:"https://5.imimg.com/data5/SELLER/Default/2025/2/488716247/XC/JB/FZ/3484607/godrej-evap-225-duo-service-refrigerator-freezer-box.jpeg"},
    {id:75,name:"Evaporator Coil Assembly",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"40107050000034",brandCode:"GSC",description:"Cooling coil assembly used for heat exchange in refrigerator",image:evaporatorCoilImageUrl},
    {id:76,name:"Freezer Frame Support",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"31141500000066",brandCode:"GSC",description:"Support frame used for freezer section installation",image:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTAJKYI1PIQg1pT4N0Xt9ONIh10A73XoU8IFCK8RrI8ds1nXCsyfqJdmiElA-tUhc1kwOKjciulqBU0Ie-FX0XOBGR7-RaTuLZF_sNjdw2cBRZvXpmYJ6VvoOE"},
    {id:77,name:"Freezer Door Frame 165L",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"31141500000067",brandCode:"GSC",description:"Freezer door frame assembly used in 165L refrigerator models",image:"https://m.media-amazon.com/images/I/41BEkoNtOZL.jpg"},
    {id:78,name:"Freezer Door Frame 190L",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"31141500000068",brandCode:"GSC",description:"Plastic freezer door frame used in refrigerator freezer compartment",image:"https://m.media-amazon.com/images/I/41BEkoNtOZL.jpg"},
    {id:79,name:"Freezer Door Frame 210L",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"31141500000069",brandCode:"GSC",description:"Freezer frame used to support freezer door assembly",image:"https://m.media-amazon.com/images/I/41BEkoNtOZL.jpg"},
    {id:80,name:"Freezer Door Frame 220L",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"31141500000070",brandCode:"GSC",description:"Door frame component designed for freezer section",image:"https://m.media-amazon.com/images/I/41BEkoNtOZL.jpg"},
    {id:81,name:"Evaporator Cover 165L",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"5214510PAD0421",brandCode:"GSC",description:"Protective plastic cover used over evaporator coil",image:"https://5.imimg.com/data5/SELLER/Default/2025/2/488716247/XC/JB/FZ/3484607/godrej-evap-225-duo-service-refrigerator-freezer-box.jpeg"},
    {id:82,name:"Evaporator Cover 190L",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"5214510PAD0424",brandCode:"GSC",description:"Evaporator protection cover used in refrigerator cooling system",image:"https://5.imimg.com/data5/SELLER/Default/2025/2/488716247/XC/JB/FZ/3484607/godrej-evap-225-duo-service-refrigerator-freezer-box.jpeg"},
    {id:83,name:"Evaporator Cover 210L",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"5214510PAD0427",brandCode:"GSC",description:"Plastic cover protecting evaporator cooling unit",image:"https://5.imimg.com/data5/SELLER/Default/2025/2/488716247/XC/JB/FZ/3484607/godrej-evap-225-duo-service-refrigerator-freezer-box.jpeg"},
    {id:84,name:"Evaporator Coil 190L",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"40107050000045",brandCode:"GSC",description:"Cooling coil used for heat exchange inside refrigerator",image:evaporatorCoilImageUrl},
    {id:85,name:"Evaporator Coil 210L",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"40107050000048",brandCode:"GSC",description:"Refrigerator evaporator coil used in cooling circuit",image:evaporatorCoilImageUrl},
    {id:86,name:"Evaporator Coil 220L",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"40107050000052",brandCode:"GSC",description:"High efficiency evaporator coil for refrigerator",image:evaporatorCoilImageUrl},
    {id:87,name:"Refrigerator Fan Motor Assembly",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"40107050000061",brandCode:"GSC",description:"Fan motor used to circulate cold air inside refrigerator compartment",image:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQggdy6uwuBC2U0Fois_Yp5swxBb2l9nl9HNiZnOCGlJM7MU39u-c6lEI2BHv4iR_MLNU1oaJWdNvD3t5mZG78pRnNa4m9cy6EaX2Ig5UvuRt5FsSgnh1CNuJlP"},
    {id:88,name:"Evaporator Fan Blade",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"40107050000062",brandCode:"GSC",description:"Plastic fan blade attached to evaporator fan motor",image:"https://m.media-amazon.com/images/I/41Txn34KtpL.jpg"},
    {id:89,name:"Refrigerator Temperature Sensor",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"40107050000063",brandCode:"GSC",description:"Sensor used to monitor internal refrigerator temperature"},
    {id:90,name:"Refrigerator Control Thermostat",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"40107050000064",brandCode:"GSC",description:"Thermostat used to regulate cooling cycle in refrigerator",image:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTeeCrBPjumi2LsKfX-1I_MVzAQ4Yl1vIz5Stc4VzJI97798qENjfva8RkXHvKUD8pjxVTdEI-R9NhnjuxqgJn8dsvh7HhK"},
    {id:91,name:"Refrigerator Defrost Heater",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"40107050000065",brandCode:"GSC",description:"Heating element used to melt frost in freezer section"},
    {id:92,name:"Refrigerator Door Switch",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"40107050000066",brandCode:"GSC",description:"Electrical switch that activates interior light when door opens"},
    {id:93,name:"Refrigerator Drain Pipe",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"40107050000067",brandCode:"GSC",description:"Pipe used to drain defrost water from evaporator tray"},
    {id:94,name:"Refrigerator Compressor Relay",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"40107050000068",brandCode:"GSC",description:"Relay used to start refrigerator compressor"},
    {id:95,name:"Refrigerator Compressor Capacitor",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"40107050000069",brandCode:"GSC",description:"Capacitor used to support compressor motor startup"},
    {id:96,name:"Refrigerator Compressor Overload Protector",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"40107050000070",brandCode:"GSC",description:"Protection device preventing compressor overheating"},
    {id:97,name:"DC Motor Fan Mount 12VDC",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"20101020000007",brandCode:"GSC",description:"DC motor fan used for air circulation in refrigerator"},
    {id:98,name:"Utility Shelf Big Grey Edge",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"31141500000053",brandCode:"GSC",description:"Large utility shelf for refrigerator storage"},
    {id:99,name:"Utility Tray Small All Edge",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"31141500000054",brandCode:"GSC",description:"Small utility tray used inside refrigerator compartment"},
    {id:100,name:"Chiller Tray GPP (Glass) Edge",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"31141500000072",brandCode:"GSC",description:"Glass chiller tray used for cooling compartment"},
    {id:101,name:"Chiller Tray Assembly With Trim",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"5214510PAD0011",brandCode:"GSC",description:"Complete chiller tray assembly with trim"},
    {id:102,name:"Utility Shelf Front Edge",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"31141500000059",brandCode:"GSC",description:"Front edge shelf used in refrigerator door"},
    {id:103,name:"Bottle Shelf Assembly DC",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"31141500000060",brandCode:"GSC",description:"Bottle shelf assembly for refrigerator door"},
    {id:104,name:"Shelf Bottle Natural Grey",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"31141500000061",brandCode:"GSC",description:"Bottle shelf made of natural grey plastic"},
    {id:105,name:"Chiller Tray Edge GPP",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"31141500000062",brandCode:"GSC",description:"Edge tray used in refrigerator chiller section"},
    {id:106,name:"Wire Shelf Edge",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"40107050000031",brandCode:"GSC",description:"Wire shelf used for refrigerator storage racks"},
    {id:107,name:"Wire Shelf Type M Champ",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"5214510PAD0006",brandCode:"GSC",description:"Wire shelf assembly used in refrigerator interior"},
    {id:108,name:"Wire Shelf For Door Edge",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"20101020000010",brandCode:"GSC",description:"Door mounted wire shelf used for storage"},
    {id:109,name:"MCC 7/8 Edge",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"40107050000032",brandCode:"GSC",description:"Condenser coil used in refrigerator cooling system"},
    {id:110,name:"Evap With Sleeve 310/350L",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"5214510PAD0499",brandCode:"GSC",description:"Evaporator assembly with sleeve for 310-350L refrigerators"},
    {id:111,name:"Evap With Sleeve 260/290L",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"5214510PAD0299",brandCode:"GSC",description:"Evaporator sleeve assembly used in 260-290L refrigerators"},
    {id:112,name:"Freezer Door Assembly 350 Edge",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"31141510PAD0015",brandCode:"GSC",description:"Freezer door assembly used in refrigerator freezer compartment",image:"https://m.media-amazon.com/images/I/41BEkoNtOZL.jpg"},
    {id:113,name:"Freezer DR 216 Edge",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"5214510PAD0107",brandCode:"GSC",description:"Freezer door used in 216L refrigerator models"},
    {id:114,name:"Freezer Door Tool Champ",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"31141510PAD0138",brandCode:"GSC",description:"Freezer door component for Champ refrigerator series",image:"https://m.media-amazon.com/images/I/41BEkoNtOZL.jpg"},
    {id:115,name:"FRZ Door Assy New Edge Pro",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"52145110PAD0027",brandCode:"GSC",description:"New edge freezer door assembly for Pro series"},
    {id:116,name:"FD FR Door 180 Upgrade",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"52145110PAD0105",brandCode:"GSC",description:"Upgraded freezer door assembly for 180L refrigerators"},
    {id:117,name:"Crisper Tray 110 Edge",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"31141500000010",brandCode:"GSC",description:"Vegetable crisper tray used for storing fruits and vegetables"},
    {id:118,name:"Freezer Door Lock Champ",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"31141500000030",brandCode:"GSC",description:"Door lock mechanism for refrigerator freezer",image:"https://m.media-amazon.com/images/I/41BEkoNtOZL.jpg"},
    {id:119,name:"Freezer Frame Step FR 215/225 Edge",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"31141500000057",brandCode:"GSC",description:"Freezer frame assembly used in 215L and 225L refrigerators",image:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTAJKYI1PIQg1pT4N0Xt9ONIh10A73XoU8IFCK8RrI8ds1nXCsyfqJdmiElA-tUhc1kwOKjciulqBU0Ie-FX0XOBGR7-RaTuLZF_sNjdw2cBRZvXpmYJ6VvoOE"},
    {id:120,name:"Freezer Frame 215/260 Edge",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"31141500000058",brandCode:"GSC",description:"Freezer frame designed for 215L to 260L refrigerator models",image:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTAJKYI1PIQg1pT4N0Xt9ONIh10A73XoU8IFCK8RrI8ds1nXCsyfqJdmiElA-tUhc1kwOKjciulqBU0Ie-FX0XOBGR7-RaTuLZF_sNjdw2cBRZvXpmYJ6VvoOE"},
    {id:121,name:"Freezer Frame 180 Edge",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"31141500000044",brandCode:"GSC",description:"Frame structure supporting freezer compartment",image:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTAJKYI1PIQg1pT4N0Xt9ONIh10A73XoU8IFCK8RrI8ds1nXCsyfqJdmiElA-tUhc1kwOKjciulqBU0Ie-FX0XOBGR7-RaTuLZF_sNjdw2cBRZvXpmYJ6VvoOE"},
    {id:122,name:"215 Frame 3S",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"41141500GDK1071",brandCode:"GSC",description:"Frame component used in 215L refrigerator model"},
    {id:123,name:"Freezer Frame 180 Edge UV",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"31141500000045",brandCode:"GSC",description:"UV coated freezer frame for refrigerator",image:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTAJKYI1PIQg1pT4N0Xt9ONIh10A73XoU8IFCK8RrI8ds1nXCsyfqJdmiElA-tUhc1kwOKjciulqBU0Ie-FX0XOBGR7-RaTuLZF_sNjdw2cBRZvXpmYJ6VvoOE"},
    {id:124,name:"Frame Evaporator Step 215L",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"52145110PAD0406",brandCode:"GSC",description:"Evaporator frame step assembly for 215L refrigerator"},
    {id:125,name:"FRZ Trim New No White Edge Pro",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"31141510PAD0011",brandCode:"GSC",description:"Freezer trim used in new edge Pro refrigerator models"},
    {id:126,name:"Crisper Glass Trim New Edge Pro",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"31141510PAD0022",brandCode:"GSC",description:"Glass trim frame used for crisper tray in refrigerator"},
    {id:127,name:"FRZ Trim Neo WOT 180 LG",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"31141550GDK0174",brandCode:"GSC",description:"Freezer trim used for 180L refrigerator models"},
    {id:128,name:"FD Glass HNGES 347P",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"52145110PAD0107",brandCode:"GSC",description:"Front door glass hinge assembly for refrigerator door"},
    {id:129,name:"FD Assy 215/260 DA SSP",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"52145110PAD0068",brandCode:"GSC",description:"Front door assembly used in 215–260L refrigerator models"},
    {id:130,name:"Evap Pan Assembly",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"31141500000015",brandCode:"GSC",description:"Evaporator pan assembly used to collect defrost water"},
    {id:131,name:"Water Evap Pan",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"31141500000016",brandCode:"GSC",description:"Evaporator water pan used below cooling unit"},
    {id:132,name:"Evap Pan 300 LTR",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"31141500000017",brandCode:"GSC",description:"Evaporator pan designed for 300L refrigerator models"},
    {id:133,name:"Pan Evap LG Comp Assembly",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"31141500000018",brandCode:"GSC",description:"Large evaporator pan used in compressor compartment"},
    {id:134,name:"Evap Pan Natural ABS 300",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"31141500000019",brandCode:"GSC",description:"Natural ABS evaporator pan used in 300L refrigerators"},
    {id:135,name:"Evap Pan Hanging Type Natural Edge",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"31141500000020",brandCode:"GSC",description:"Hanging type evaporator pan for refrigerator"},
    {id:136,name:"Crisper Chill Fit Tray Edge",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"31141500000021",brandCode:"GSC",description:"Crisper tray used for vegetable storage"},
    {id:137,name:"Crisper Glass Trim Neo Edge Pro",company:"Godrej Smart Care",category:"Refrigerator Parts",modelNo:"31141500000022",brandCode:"GSC",description:"Glass trim frame used in crisper tray assembly"},
    {id:138,name:"Compressor EMU45TUG AC GTI ED",company:"Godrej Smart Care",category:"Compressor",modelNo:"40151060000021",brandCode:"GSC",description:"Refrigerator compressor using R600a refrigerant with 220-240V supply",image:"https://www.aldahome.com/media/catalog/product/cache/a95cd6208f6f304d3ecd6458151997d3/g/o/godrej-g2-refrigerator-compressor_2.jpg"},
    {id:139,name:"Compressor HUE60TU PHV2C1",company:"Godrej Smart Care",category:"Compressor",modelNo:"40151060000022",brandCode:"GSC",description:"High efficiency refrigerator compressor designed for domestic refrigerators",image:"https://www.aldahome.com/media/catalog/product/cache/a95cd6208f6f304d3ecd6458151997d3/g/o/godrej-g2-refrigerator-compressor_2.jpg"},
    {id:140,name:"Compressor HYE60TU PHV2C1",company:"Godrej Smart Care",category:"Compressor",modelNo:"40151060000023",brandCode:"GSC",description:"R600a compressor used for cooling applications in refrigerators",image:"https://www.aldahome.com/media/catalog/product/cache/a95cd6208f6f304d3ecd6458151997d3/g/o/godrej-g2-refrigerator-compressor_2.jpg"},
    {id:141,name:"Compressor 1PH 160 WQF4/147",company:"Godrej Smart Care",category:"Compressor",modelNo:"40151060000026",brandCode:"GSC",description:"Single phase compressor used in refrigerator cooling systems",image:"https://www.aldahome.com/media/catalog/product/cache/a95cd6208f6f304d3ecd6458151997d3/g/o/godrej-g2-refrigerator-compressor_2.jpg"},
    {id:142,name:"Power Cool Compressor High Capacity",company:"Godrej Smart Care",category:"Compressor",modelNo:"40151060000035",brandCode:"GSC",description:"High capacity refrigerator compressor for domestic appliances",image:"https://www.aldahome.com/media/catalog/product/cache/a95cd6208f6f304d3ecd6458151997d3/g/o/godrej-g2-refrigerator-compressor_2.jpg"},
    {id:143,name:"Power Cool Compressor Medium Capacity",company:"Godrej Smart Care",category:"Compressor",modelNo:"40151060000036",brandCode:"GSC",description:"Medium capacity compressor suitable for refrigerators",image:"https://www.aldahome.com/media/catalog/product/cache/a95cd6208f6f304d3ecd6458151997d3/g/o/godrej-g2-refrigerator-compressor_2.jpg"},
    {id:144,name:"Power Cool Compressor Standard",company:"Godrej Smart Care",category:"Compressor",modelNo:"40151060000037",brandCode:"GSC",description:"Standard refrigerator compressor for cooling applications",image:"https://www.aldahome.com/media/catalog/product/cache/a95cd6208f6f304d3ecd6458151997d3/g/o/godrej-g2-refrigerator-compressor_2.jpg"},
    {id:145,name:"Power Cool Compressor Compact",company:"Godrej Smart Care",category:"Compressor",modelNo:"40151060000038",brandCode:"GSC",description:"Compact compressor unit used in small refrigerators",image:"https://www.aldahome.com/media/catalog/product/cache/a95cd6208f6f304d3ecd6458151997d3/g/o/godrej-g2-refrigerator-compressor_2.jpg"},
    {id:146,name:"Compressor EMY60HSC AC GTI",company:"Godrej Smart Care",category:"Compressor",modelNo:"40151060000039",brandCode:"GSC",description:"High efficiency refrigerator compressor designed for domestic cooling systems",image:"https://www.aldahome.com/media/catalog/product/cache/a95cd6208f6f304d3ecd6458151997d3/g/o/godrej-g2-refrigerator-compressor_2.jpg"},
    {id:147,name:"Compressor EMU70HSC AC GTI",company:"Godrej Smart Care",category:"Compressor",modelNo:"40151060000040",brandCode:"GSC",description:"R600a compressor used in large capacity refrigerators",image:"https://www.aldahome.com/media/catalog/product/cache/a95cd6208f6f304d3ecd6458151997d3/g/o/godrej-g2-refrigerator-compressor_2.jpg"},
    {id:148,name:"Compressor HYE70TU PHV2C1",company:"Godrej Smart Care",category:"Compressor",modelNo:"40151060000041",brandCode:"GSC",description:"High performance compressor used for refrigerator cooling",image:"https://www.aldahome.com/media/catalog/product/cache/a95cd6208f6f304d3ecd6458151997d3/g/o/godrej-g2-refrigerator-compressor_2.jpg"},
    {id:149,name:"Compressor HYE80TU PHV2C1",company:"Godrej Smart Care",category:"Compressor",modelNo:"40151060000042",brandCode:"GSC",description:"Compressor suitable for medium to large domestic refrigerators",image:"https://www.aldahome.com/media/catalog/product/cache/a95cd6208f6f304d3ecd6458151997d3/g/o/godrej-g2-refrigerator-compressor_2.jpg"},
    {id:150,name:"Compressor Power Cool Heavy Duty",company:"Godrej Smart Care",category:"Compressor",modelNo:"40151060000043",brandCode:"GSC",description:"Heavy duty compressor designed for continuous cooling",image:"https://www.aldahome.com/media/catalog/product/cache/a95cd6208f6f304d3ecd6458151997d3/g/o/godrej-g2-refrigerator-compressor_2.jpg"},
    {id:151,name:"Compressor Power Cool Premium",company:"Godrej Smart Care",category:"Compressor",modelNo:"40151060000044",brandCode:"GSC",description:"Premium refrigerator compressor with improved efficiency",image:"https://www.aldahome.com/media/catalog/product/cache/a95cd6208f6f304d3ecd6458151997d3/g/o/godrej-g2-refrigerator-compressor_2.jpg"},
    {id:152,name:"Compressor Power Cool Compact",company:"Godrej Smart Care",category:"Compressor",modelNo:"40151060000045",brandCode:"GSC",description:"Compact compressor used in small capacity refrigerators",image:"https://www.aldahome.com/media/catalog/product/cache/a95cd6208f6f304d3ecd6458151997d3/g/o/godrej-g2-refrigerator-compressor_2.jpg"},
    {id:153,name:"PTC Relay QP2-4R7",company:"Godrej Smart Care",category:"Compressor Accessories",modelNo:"40151070000001",brandCode:"GSC",description:"PTC start relay used to start refrigerator compressor motor"},
    {id:154,name:"PTC Relay QP2-4R7 220V",company:"Godrej Smart Care",category:"Compressor Accessories",modelNo:"40151070000002",brandCode:"GSC",description:"Compressor start relay compatible with domestic refrigerators"},
    {id:155,name:"Compressor Overload Protector 1/6 HP",company:"Godrej Smart Care",category:"Compressor Accessories",modelNo:"40151070000003",brandCode:"GSC",description:"Thermal overload protector used to protect refrigerator compressor"},
    {id:156,name:"Compressor Overload Protector 1/8 HP",company:"Godrej Smart Care",category:"Compressor Accessories",modelNo:"40151070000004",brandCode:"GSC",description:"Overload protector for small capacity refrigerator compressors"},
    {id:157,name:"Start Capacitor 4uF 450V",company:"Godrej Smart Care",category:"Compressor Accessories",modelNo:"40151070000005",brandCode:"GSC",description:"Capacitor used to assist compressor motor startup"},
    {id:158,name:"Start Capacitor 6uF 450V",company:"Godrej Smart Care",category:"Compressor Accessories",modelNo:"40151070000006",brandCode:"GSC",description:"High quality start capacitor used in refrigeration compressors"},
    {id:159,name:"Compressor Terminal Cover",company:"Godrej Smart Care",category:"Compressor Accessories",modelNo:"40151070000007",brandCode:"GSC",description:"Plastic protective cover used on compressor electrical terminals"},
    {id:160,name:"Compressor Mounting Rubber Kit",company:"Godrej Smart Care",category:"Compressor Accessories",modelNo:"40151070000008",brandCode:"GSC",description:"Rubber mounting kit used to reduce vibration of compressor"},
    {id:161,name:"Refrigerant Gas R134a Cylinder",company:"Godrej Smart Care",category:"Refrigeration Gas",modelNo:"R134a",brandCode:"GSC",description:"Refrigerant gas used in domestic refrigerators and cooling appliances",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLmAFbs1MTJ9B9GWgW7WTseuYa76XBlgO52Q&s"},
    {id:162,name:"Refrigerant Gas R600a Cylinder",company:"Godrej Smart Care",category:"Refrigeration Gas",modelNo:"R600a",brandCode:"GSC",description:"Eco-friendly refrigerant gas used in modern refrigerators",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLmAFbs1MTJ9B9GWgW7WTseuYa76XBlgO52Q&s"},
    {id:163,name:"Refrigerant Gas R22 Cylinder",company:"Godrej Smart Care",category:"Refrigeration Gas",modelNo:"R22",brandCode:"GSC",description:"Refrigerant gas commonly used in air conditioners",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLmAFbs1MTJ9B9GWgW7WTseuYa76XBlgO52Q&s"},
    {id:164,name:"Refrigeration Leak Detector Spray",company:"Godrej Smart Care",category:"Refrigeration Tools",modelNo:"Leak Detector",brandCode:"GSC",description:"Spray used to detect gas leakage in refrigeration systems",image:"https://aerolgroup.com/wp-content/uploads/2019/01/Leak-Detector-Spray-1024x1024.jpg"},
    {id:165,name:"Refrigeration Charging Hose Set",company:"Godrej Smart Care",category:"Refrigeration Tools",modelNo:"Charging Hose",brandCode:"GSC",description:"Hose set used for charging refrigerant gas into cooling systems"},
    {id:166,name:"Manifold Gauge Set",company:"Godrej Smart Care",category:"Refrigeration Tools",modelNo:"Gauge Set",brandCode:"GSC",description:"Gauge used to measure pressure in refrigeration systems"},
    {id:167,name:"Vacuum Pump Refrigeration",company:"Godrej Smart Care",category:"Refrigeration Tools",modelNo:"Vacuum Pump",brandCode:"GSC",description:"Pump used to remove air and moisture from refrigeration circuits"},
    {id:168,name:"Copper Brazing Rod",company:"Godrej Smart Care",category:"Refrigeration Tools",modelNo:"Brazing Rod",brandCode:"GSC",description:"Copper rod used for brazing refrigeration pipelines"},
    {id:169,name:"Spin Timer GLS",company:"Godrej Smart Care",category:"Washing Machine Parts",modelNo:"GLS",brandCode:"GSC",description:"Spin timer used to control spin cycle duration in washing machines"},
    {id:170,name:"Wash Timer GLS",company:"Godrej Smart Care",category:"Washing Machine Parts",modelNo:"GLS-WT",brandCode:"GSC",description:"Wash timer used to control washing cycle time"},
    {id:171,name:"Water Inlet Valve Single",company:"Godrej Smart Care",category:"Washing Machine Parts",modelNo:"40107060000001",brandCode:"GSC",description:"Single inlet valve used to control water flow into washing machine"},
    {id:172,name:"Water Inlet Valve Double",company:"Godrej Smart Care",category:"Washing Machine Parts",modelNo:"40107060000002",brandCode:"GSC",description:"Double inlet valve used in fully automatic washing machines"},
    {id:173,name:"Drain Motor Assembly",company:"Godrej Smart Care",category:"Washing Machine Parts",modelNo:"40107060000003",brandCode:"GSC",description:"Motor used to operate drain valve during wash cycle"},
    {id:174,name:"Drain Pump Assembly",company:"Godrej Smart Care",category:"Washing Machine Parts",modelNo:"40107060000004",brandCode:"GSC",description:"Pump used to remove water from washing machine tub"},
    {id:175,name:"Lid Switch Assembly",company:"Godrej Smart Care",category:"Washing Machine Parts",modelNo:"40107060000005",brandCode:"GSC",description:"Safety switch that stops machine when lid is opened"},
    {id:176,name:"Washing Machine Capacitor",company:"Godrej Smart Care",category:"Washing Machine Parts",modelNo:"40107060000006",brandCode:"GSC",description:"Capacitor used for starting washing machine motor"},
    {id:177,name:"Washing Machine Motor Assembly",company:"Godrej Smart Care",category:"Washing Machine Parts",modelNo:"40107060000007",brandCode:"GSC",description:"Drive motor used to rotate washing machine drum"},
    {id:178,name:"Pulsator Assembly",company:"Godrej Smart Care",category:"Washing Machine Parts",modelNo:"40107060000008",brandCode:"GSC",description:"Pulsator used to create water movement during wash cycle"},
    {id:179,name:"Washing Machine Belt",company:"Godrej Smart Care",category:"Washing Machine Parts",modelNo:"40107060000009",brandCode:"GSC",description:"Rubber belt used to transfer motor power to drum"},
    {id:180,name:"Drain Hose Pipe",company:"Godrej Smart Care",category:"Washing Machine Parts",modelNo:"40107060000010",brandCode:"GSC",description:"Flexible pipe used to drain water from washing machine"},
    {id:181,name:"Water Level Pressure Switch",company:"Godrej Smart Care",category:"Washing Machine Parts",modelNo:"40107060000011",brandCode:"GSC",description:"Pressure switch used to detect water level in washing machine"},
    {id:182,name:"Door Lock Assembly",company:"Godrej Smart Care",category:"Washing Machine Parts",modelNo:"40107060000012",brandCode:"GSC",description:"Door locking mechanism used in fully automatic washing machines"},
    {id:183,name:"PCB Control Board",company:"Godrej Smart Care",category:"Washing Machine Parts",modelNo:"40107060000013",brandCode:"GSC",description:"Electronic control board used to manage washing machine functions"},
    {id:184,name:"Washing Machine Shock Absorber",company:"Godrej Smart Care",category:"Washing Machine Parts",modelNo:"40107060000014",brandCode:"GSC",description:"Shock absorber used to reduce vibration during spin cycle"},
    {id:185,name:"Clutch Assembly Washing Machine",company:"Godrej Smart Care",category:"Washing Machine Parts",modelNo:"40107060000015",brandCode:"GSC",description:"Clutch assembly used to switch between wash and spin cycles"},
    {id:186,name:"Gear Box Assembly",company:"Godrej Smart Care",category:"Washing Machine Parts",modelNo:"40107060000016",brandCode:"GSC",description:"Gear box used to control drum movement in washing machines"},
    {id:187,name:"Spin Tub Assembly",company:"Godrej Smart Care",category:"Washing Machine Parts",modelNo:"40107060000017",brandCode:"GSC",description:"Inner spin tub used for spinning clothes during spin cycle"},
    {id:188,name:"Outer Tub Assembly",company:"Godrej Smart Care",category:"Washing Machine Parts",modelNo:"40107060000018",brandCode:"GSC",description:"Outer drum that holds water during washing process"},
    {id:189,name:"Suspension Rod Set",company:"Godrej Smart Care",category:"Washing Machine Parts",modelNo:"40107060000019",brandCode:"GSC",description:"Suspension rods used to stabilize washing machine tub"},
    {id:190,name:"Washing Machine Drum Pulley",company:"Godrej Smart Care",category:"Washing Machine Parts",modelNo:"40107060000020",brandCode:"GSC",description:"Pulley used to transmit motor power to drum"},
    {id:191,name:"Motor Capacitor 10uF",company:"Godrej Smart Care",category:"Washing Machine Parts",modelNo:"40107060000021",brandCode:"GSC",description:"Capacitor used for washing machine motor start and run"},
    {id:192,name:"Motor Capacitor 16uF",company:"Godrej Smart Care",category:"Washing Machine Parts",modelNo:"40107060000022",brandCode:"GSC",description:"High capacity capacitor used for washing machine motor"},
    {id:193,name:"Wash Motor Assembly",company:"Godrej Smart Care",category:"Washing Machine Parts",modelNo:"40107060000023",brandCode:"GSC",description:"Electric motor used to rotate washing machine drum during wash cycle"},
    {id:194,name:"Spin Motor Assembly",company:"Godrej Smart Care",category:"Washing Machine Parts",modelNo:"40107060000024",brandCode:"GSC",description:"Motor used for high speed spinning of clothes"},
    {id:195,name:"Washing Machine Control Knob",company:"Godrej Smart Care",category:"Washing Machine Parts",modelNo:"40107060000025",brandCode:"GSC",description:"Control knob used to set washing programs and timers"},
    {id:196,name:"Water Inlet Hose",company:"Godrej Smart Care",category:"Washing Machine Parts",modelNo:"40107060000026",brandCode:"GSC",description:"Flexible hose used to supply water to washing machine"},
    {id:197,name:"Drain Valve Assembly",company:"Godrej Smart Care",category:"Washing Machine Parts",modelNo:"40107060000027",brandCode:"GSC",description:"Valve used to release water from washing machine tub"},
    {id:198,name:"Tub Bearing Kit",company:"Godrej Smart Care",category:"Washing Machine Parts",modelNo:"40107060000028",brandCode:"GSC",description:"Bearing kit used to support rotation of washing machine drum"},
    {id:199,name:"Shock Absorber Rod",company:"Godrej Smart Care",category:"Washing Machine Parts",modelNo:"40107060000029",brandCode:"GSC",description:"Shock absorber rod used to reduce vibration during spin"},
    {id:200,name:"Washing Machine Door Seal Gasket",company:"Godrej Smart Care",category:"Washing Machine Parts",modelNo:"40107060000030",brandCode:"GSC",description:"Rubber gasket used to seal washing machine door"},
    {id:201,name:"Washing Machine Lid Assembly",company:"Godrej Smart Care",category:"Washing Machine Parts",modelNo:"40107060000031",brandCode:"GSC",description:"Top lid assembly used to cover washing machine tub"},
    {id:202,name:"Lid Switch Sensor",company:"Godrej Smart Care",category:"Washing Machine Parts",modelNo:"40107060000032",brandCode:"GSC",description:"Safety sensor that detects lid position during operation"},
    {id:203,name:"Detergent Dispenser Tray",company:"Godrej Smart Care",category:"Washing Machine Parts",modelNo:"40107060000033",brandCode:"GSC",description:"Tray used to hold detergent and fabric softener"},
    {id:204,name:"Water Level Sensor",company:"Godrej Smart Care",category:"Washing Machine Parts",modelNo:"40107060000034",brandCode:"GSC",description:"Sensor used to detect water level inside washing machine"},
    {id:205,name:"Drain Pump Motor",company:"Godrej Smart Care",category:"Washing Machine Parts",modelNo:"40107060000035",brandCode:"GSC",description:"Motor used to pump out water during drain cycle"},
    {id:206,name:"Washing Machine Tub Seal",company:"Godrej Smart Care",category:"Washing Machine Parts",modelNo:"40107060000036",brandCode:"GSC",description:"Rubber seal used to prevent water leakage around tub"},
    {id:207,name:"Drum Shaft Assembly",company:"Godrej Smart Care",category:"Washing Machine Parts",modelNo:"40107060000037",brandCode:"GSC",description:"Shaft assembly used to connect drum with drive system"},
    {id:208,name:"Washing Machine Suspension Spring",company:"Godrej Smart Care",category:"Washing Machine Parts",modelNo:"40107060000038",brandCode:"GSC",description:"Spring used to stabilize washing machine tub during spin"},
    {id:209,name:"AC Capacitor 2.5uF 440V",company:"Godrej Smart Care",category:"Air Conditioner Parts",modelNo:"40107070000001",brandCode:"GSC",description:"Capacitor used for AC fan motor starting and running"},
    {id:210,name:"AC Capacitor 4uF 440V",company:"Godrej Smart Care",category:"Air Conditioner Parts",modelNo:"40107070000002",brandCode:"GSC",description:"Motor run capacitor used in air conditioners"},
    {id:211,name:"AC Capacitor 6uF 440V",company:"Godrej Smart Care",category:"Air Conditioner Parts",modelNo:"40107070000003",brandCode:"GSC",description:"Capacitor used for AC fan motor and compressor circuits"},
    {id:212,name:"AC Contactor 25A",company:"Godrej Smart Care",category:"Air Conditioner Parts",modelNo:"40107070000004",brandCode:"GSC",description:"Electrical contactor used to control compressor power supply"},
    {id:213,name:"AC Thermostat Controller",company:"Godrej Smart Care",category:"Air Conditioner Parts",modelNo:"40107070000005",brandCode:"GSC",description:"Thermostat used to regulate AC temperature control"},
    {id:214,name:"AC Temperature Sensor",company:"Godrej Smart Care",category:"Air Conditioner Parts",modelNo:"40107070000006",brandCode:"GSC",description:"Sensor used to monitor air conditioner temperature"},
    {id:215,name:"AC PCB Control Board",company:"Godrej Smart Care",category:"Air Conditioner Parts",modelNo:"40107070000007",brandCode:"GSC",description:"Electronic PCB board used to control AC functions"},
    {id:216,name:"AC Fan Motor Assembly",company:"Godrej Smart Care",category:"Air Conditioner Parts",modelNo:"40107070000008",brandCode:"GSC",description:"Motor used to rotate indoor or outdoor AC fan"},
    {id:217,name:"AC Indoor Blower Motor",company:"Godrej Smart Care",category:"Air Conditioner Parts",modelNo:"40107070000009",brandCode:"GSC",description:"Blower motor used to circulate cool air from indoor AC unit"},
    {id:218,name:"AC Outdoor Fan Motor",company:"Godrej Smart Care",category:"Air Conditioner Parts",modelNo:"40107070000010",brandCode:"GSC",description:"Fan motor used in outdoor condenser unit"},
    {id:219,name:"AC Fan Blade Outdoor",company:"Godrej Smart Care",category:"Air Conditioner Parts",modelNo:"40107070000011",brandCode:"GSC",description:"Fan blade used in outdoor AC condenser fan assembly"},
    {id:220,name:"AC Swing Motor",company:"Godrej Smart Care",category:"Air Conditioner Parts",modelNo:"40107070000012",brandCode:"GSC",description:"Motor used to control swing movement of AC louvers"},
    {id:221,name:"AC Louver Motor",company:"Godrej Smart Care",category:"Air Conditioner Parts",modelNo:"40107070000013",brandCode:"GSC",description:"Motor used to adjust airflow direction in AC indoor unit"},
    {id:222,name:"AC Drain Pump",company:"Godrej Smart Care",category:"Air Conditioner Parts",modelNo:"40107070000014",brandCode:"GSC",description:"Pump used to remove condensate water from AC unit"},
    {id:223,name:"AC Copper Connecting Pipe Kit",company:"Godrej Smart Care",category:"Air Conditioner Parts",modelNo:"40107070000015",brandCode:"GSC",description:"Copper pipe kit used for connecting indoor and outdoor units",image:"images/page3_img3.jpeg"},
    {id:224,name:"AC Installation Kit",company:"Godrej Smart Care",category:"Air Conditioner Parts",modelNo:"40107070000016",brandCode:"GSC",description:"Installation accessory kit used during AC installation"},
    {id:225,name:"AC Condenser Coil Assembly",company:"Godrej Smart Care",category:"Air Conditioner Parts",modelNo:"40107070000017",brandCode:"GSC",description:"Condenser coil used in outdoor unit for heat dissipation"},
    {id:226,name:"AC Evaporator Coil Assembly",company:"Godrej Smart Care",category:"Air Conditioner Parts",modelNo:"40107070000018",brandCode:"GSC",description:"Evaporator coil used in indoor unit for cooling air",image:evaporatorCoilImageUrl},
    {id:227,name:"AC Expansion Valve",company:"Godrej Smart Care",category:"Air Conditioner Parts",modelNo:"40107070000019",brandCode:"GSC",description:"Expansion valve used to control refrigerant flow"},
    {id:228,name:"AC Four Way Valve",company:"Godrej Smart Care",category:"Air Conditioner Parts",modelNo:"40107070000020",brandCode:"GSC",description:"Valve used in heat pump AC systems to reverse refrigerant flow"},
    {id:229,name:"AC Service Valve",company:"Godrej Smart Care",category:"Air Conditioner Parts",modelNo:"40107070000021",brandCode:"GSC",description:"Service valve used during AC maintenance and gas charging"},
    {id:230,name:"AC Filter Drier",company:"Godrej Smart Care",category:"Air Conditioner Parts",modelNo:"40107070000022",brandCode:"GSC",description:"Filter used to remove moisture and impurities from refrigerant"},
    {id:231,name:"AC Copper Capillary Tube",company:"Godrej Smart Care",category:"Air Conditioner Parts",modelNo:"40107070000023",brandCode:"GSC",description:"Copper capillary tube used in AC refrigerant flow control"},
    {id:232,name:"AC Refrigerant Charging Valve",company:"Godrej Smart Care",category:"Air Conditioner Parts",modelNo:"40107070000024",brandCode:"GSC",description:"Valve used for charging refrigerant gas into AC system"},
    {id:233,name:"AC Compressor 1 Ton",company:"Godrej Smart Care",category:"Air Conditioner Parts",modelNo:"40107070000025",brandCode:"GSC",description:"Compressor used in 1 ton air conditioner cooling systems"},
    {id:234,name:"AC Compressor 1.5 Ton",company:"Godrej Smart Care",category:"Air Conditioner Parts",modelNo:"40107070000026",brandCode:"GSC",description:"High efficiency compressor used in 1.5 ton AC units"},
    {id:235,name:"AC Compressor 2 Ton",company:"Godrej Smart Care",category:"Air Conditioner Parts",modelNo:"40107070000027",brandCode:"GSC",description:"Heavy duty compressor used in 2 ton air conditioners"},
    {id:236,name:"AC PCB Inverter Control Board",company:"Godrej Smart Care",category:"Air Conditioner Parts",modelNo:"40107070000028",brandCode:"GSC",description:"Electronic control board used in inverter AC systems"},
    {id:237,name:"AC Indoor Display PCB",company:"Godrej Smart Care",category:"Air Conditioner Parts",modelNo:"40107070000029",brandCode:"GSC",description:"Display PCB used in AC indoor unit control panel"},
    {id:238,name:"AC Remote Control Universal",company:"Godrej Smart Care",category:"Air Conditioner Parts",modelNo:"40107070000030",brandCode:"GSC",description:"Universal remote used to operate multiple AC brands"},
    {id:239,name:"AC Temperature Thermistor Sensor",company:"Godrej Smart Care",category:"Air Conditioner Parts",modelNo:"40107070000031",brandCode:"GSC",description:"Thermistor sensor used to detect AC temperature"},
    {id:240,name:"AC Drain Pipe Flexible",company:"Godrej Smart Care",category:"Air Conditioner Parts",modelNo:"40107070000032",brandCode:"GSC",description:"Flexible pipe used to drain condensate water from AC unit"},
    {id:241,name:"AC Outdoor Unit Stand Heavy Duty",company:"Godrej Smart Care",category:"Air Conditioner Parts",modelNo:"40107070000033",brandCode:"GSC",description:"Metal stand used to mount AC outdoor condenser unit"},
    {id:242,name:"AC Indoor Unit Mounting Plate",company:"Godrej Smart Care",category:"Air Conditioner Parts",modelNo:"40107070000034",brandCode:"GSC",description:"Mounting plate used to install indoor AC unit on wall"},
    {id:243,name:"AC Copper Insulation Pipe",company:"Godrej Smart Care",category:"Air Conditioner Parts",modelNo:"40107070000035",brandCode:"GSC",description:"Insulated copper pipe used for refrigerant line connection",image:"images/page3_img3.jpeg"},
    {id:244,name:"AC Refrigerant Gas R32",company:"Godrej Smart Care",category:"Air Conditioner Parts",modelNo:"R32",brandCode:"GSC",description:"Refrigerant gas used in modern inverter air conditioners"},
    {id:245,name:"AC Refrigerant Gas R410A",company:"Godrej Smart Care",category:"Air Conditioner Parts",modelNo:"R410A",brandCode:"GSC",description:"High efficiency refrigerant gas used in split AC systems"},
    {id:246,name:"AC Insulation Tape Roll",company:"Godrej Smart Care",category:"Air Conditioner Parts",modelNo:"40107070000036",brandCode:"GSC",description:"Insulation tape used for AC copper piping installation"},
    {id:247,name:"AC Drain Pipe Connector",company:"Godrej Smart Care",category:"Air Conditioner Parts",modelNo:"40107070000037",brandCode:"GSC",description:"Connector used to join AC drain pipes"},
    {id:248,name:"AC Installation Bracket Kit",company:"Godrej Smart Care",category:"Air Conditioner Parts",modelNo:"40107070000038",brandCode:"GSC",description:"Bracket kit used during AC indoor and outdoor installation"},
    {id:249,name:"AC Capacitor 2.5uF 440V",company:"Godrej Smart Care",category:"Air Conditioner Parts",modelNo:"2.5uF 440V",brandCode:"GSC",description:"Capacitor used for starting and running AC fan motors",image:"https://rukminim2.flixcart.com/image/1850/1850/kn6cxow0/capacitor/k/o/c/capacitor-50-mf-for-air-conditioner-ac-godrej-original-imagfwtfa7zzqgjh.jpeg?q=90"},
    {id:250,name:"AC Capacitor 3.5uF 440V",company:"Godrej Smart Care",category:"Air Conditioner Parts",modelNo:"3.5uF 440V",brandCode:"GSC",description:"Run capacitor used for AC fan motor operation",image:"https://rukminim2.flixcart.com/image/1850/1850/kn6cxow0/capacitor/k/o/c/capacitor-50-mf-for-air-conditioner-ac-godrej-original-imagfwtfa7zzqgjh.jpeg?q=90"},
    {id:251,name:"AC Capacitor 4uF 440V",company:"Godrej Smart Care",category:"Air Conditioner Parts",modelNo:"4uF 440V",brandCode:"GSC",description:"Motor run capacitor used in air conditioner circuits",image:"https://rukminim2.flixcart.com/image/1850/1850/kn6cxow0/capacitor/k/o/c/capacitor-50-mf-for-air-conditioner-ac-godrej-original-imagfwtfa7zzqgjh.jpeg?q=90"},
    {id:252,name:"AC Capacitor 5uF 440V",company:"Godrej Smart Care",category:"Air Conditioner Parts",modelNo:"5uF 440V",brandCode:"GSC",description:"Capacitor used for AC fan motor and blower operation",image:"https://rukminim2.flixcart.com/image/1850/1850/kn6cxow0/capacitor/k/o/c/capacitor-50-mf-for-air-conditioner-ac-godrej-original-imagfwtfa7zzqgjh.jpeg?q=90"},
    {id:253,name:"AC Capacitor 6uF 440V",company:"Godrej Smart Care",category:"Air Conditioner Parts",modelNo:"6uF 440V",brandCode:"GSC",description:"Electrical capacitor used in AC compressor circuits",image:"https://rukminim2.flixcart.com/image/1850/1850/kn6cxow0/capacitor/k/o/c/capacitor-50-mf-for-air-conditioner-ac-godrej-original-imagfwtfa7zzqgjh.jpeg?q=90"},
    {id:254,name:"AC Capacitor 10uF 440V",company:"Godrej Smart Care",category:"Air Conditioner Parts",modelNo:"10uF 440V",brandCode:"GSC",description:"Capacitor used in air conditioner compressor motor",image:"https://rukminim2.flixcart.com/image/1850/1850/kn6cxow0/capacitor/k/o/c/capacitor-50-mf-for-air-conditioner-ac-godrej-original-imagfwtfa7zzqgjh.jpeg?q=90"},
    {id:255,name:"AC Dual Capacitor 35+5uF 440V",company:"Godrej Smart Care",category:"Air Conditioner Parts",modelNo:"35+5uF 440V",brandCode:"GSC",description:"Dual capacitor used for compressor and fan motor",image:"https://rukminim2.flixcart.com/image/1850/1850/kn4xhu80/capacitor/i/t/0/capacitor-45-2-mf-for-air-conditioner-godrej-original-imagfvpahzzdgcy8.jpeg?q=90"},
    {id:256,name:"AC Dual Capacitor 45+5uF 440V",company:"Godrej Smart Care",category:"Air Conditioner Parts",modelNo:"45+5uF 440V",brandCode:"GSC",description:"Dual capacitor used in larger AC units",image:"https://rukminim2.flixcart.com/image/1850/1850/kn4xhu80/capacitor/i/t/0/capacitor-45-2-mf-for-air-conditioner-godrej-original-imagfvpahzzdgcy8.jpeg?q=90"},
    {id:257,name:"AC Manifold Gauge Set",company:"Godrej Smart Care",category:"AC Service Tools",modelNo:"Gauge Set",brandCode:"GSC",description:"Pressure gauge set used for refrigerant charging and servicing AC units"},
    {id:258,name:"AC Vacuum Pump",company:"Godrej Smart Care",category:"AC Service Tools",modelNo:"Vacuum Pump",brandCode:"GSC",description:"Pump used to remove moisture and air from AC refrigerant lines"},
    {id:259,name:"AC Refrigerant Charging Hose",company:"Godrej Smart Care",category:"AC Service Tools",modelNo:"Charging Hose",brandCode:"GSC",description:"Flexible hose used to charge refrigerant gas into AC systems"},
    {id:260,name:"AC Leak Detector Spray",company:"Godrej Smart Care",category:"AC Service Tools",modelNo:"Leak Detector",brandCode:"GSC",description:"Spray used to detect refrigerant gas leaks"},
    {id:261,name:"AC Copper Tube Cutter",company:"Godrej Smart Care",category:"AC Service Tools",modelNo:"Tube Cutter",brandCode:"GSC",description:"Tool used to cut copper pipes during AC installation"},
    {id:262,name:"AC Flaring Tool Kit",company:"Godrej Smart Care",category:"AC Service Tools",modelNo:"Flaring Kit",brandCode:"GSC",description:"Tool used for flaring copper pipes in refrigeration systems"},
    {id:263,name:"AC Brazing Torch Kit",company:"Godrej Smart Care",category:"AC Service Tools",modelNo:"Brazing Torch",brandCode:"GSC",description:"Torch kit used for brazing copper pipes"},
    {id:264,name:"AC Digital Thermometer",company:"Godrej Smart Care",category:"AC Service Tools",modelNo:"Digital Thermometer",brandCode:"GSC",description:"Thermometer used to measure temperature during AC servicing"},
    {id:265,name:"AC Pipe Bender Tool",company:"Godrej Smart Care",category:"AC Service Tools",modelNo:"Pipe Bender",brandCode:"GSC",description:"Tool used to bend copper pipes during AC installation"},
    {id:266,name:"AC Fin Comb Cleaner",company:"Godrej Smart Care",category:"AC Service Tools",modelNo:"Fin Comb",brandCode:"GSC",description:"Tool used to clean and straighten AC condenser fins"},
    {id:267,name:"AC Coil Cleaning Brush",company:"Godrej Smart Care",category:"AC Service Tools",modelNo:"Coil Brush",brandCode:"GSC",description:"Brush used to clean AC evaporator and condenser coils"},
    {id:268,name:"AC Gas Charging Scale",company:"Godrej Smart Care",category:"AC Service Tools",modelNo:"Charging Scale",brandCode:"GSC",description:"Digital scale used to measure refrigerant gas during charging"},
    {id:269,name:"AC Refrigerant Recovery Machine",company:"Godrej Smart Care",category:"AC Service Tools",modelNo:"Recovery Machine",brandCode:"GSC",description:"Machine used to recover refrigerant gas from AC systems"},
    {id:270,name:"AC Pipe Insulation Foam",company:"Godrej Smart Care",category:"AC Installation Material",modelNo:"Insulation Foam",brandCode:"GSC",description:"Foam insulation used to cover AC copper pipes"},
    {id:271,name:"AC Drain Hose Extension",company:"Godrej Smart Care",category:"AC Installation Material",modelNo:"Drain Hose",brandCode:"GSC",description:"Flexible hose extension used for AC condensate drainage"},
    {id:272,name:"AC Mounting Bolt Kit",company:"Godrej Smart Care",category:"AC Installation Material",modelNo:"Bolt Kit",brandCode:"GSC",description:"Bolt kit used for installing AC indoor and outdoor units"},
    {id:273,name:"AC Refrigerant Cylinder Trolley",company:"Godrej Smart Care",category:"AC Service Tools",modelNo:"Cylinder Trolley",brandCode:"GSC",description:"Trolley used to carry refrigerant gas cylinders during servicing"},
    {id:274,name:"AC Digital Clamp Meter",company:"Godrej Smart Care",category:"AC Service Tools",modelNo:"Clamp Meter",brandCode:"GSC",description:"Electrical measuring device used for AC servicing"},
    {id:275,name:"AC Insulation Cutter Knife",company:"Godrej Smart Care",category:"AC Service Tools",modelNo:"Cutter Knife",brandCode:"GSC",description:"Knife used to cut insulation material during installation"},
    {id:276,name:"AC Pipe Reamer Tool",company:"Godrej Smart Care",category:"AC Service Tools",modelNo:"Pipe Reamer",brandCode:"GSC",description:"Tool used to remove burrs from copper pipes after cutting"},
    {id:277,name:"AC Digital Vacuum Gauge",company:"Godrej Smart Care",category:"AC Service Tools",modelNo:"Vacuum Gauge",brandCode:"GSC",description:"Gauge used to measure vacuum level in refrigeration systems"},
    {id:278,name:"AC Refrigerant Leak Detector Electronic",company:"Godrej Smart Care",category:"AC Service Tools",modelNo:"Leak Detector",brandCode:"GSC",description:"Electronic device used to detect refrigerant gas leaks"},
    {id:279,name:"AC Copper Pipe Flare Nut Set",company:"Godrej Smart Care",category:"AC Installation Material",modelNo:"Flare Nut Set",brandCode:"GSC",description:"Flare nuts used to connect AC copper pipes"},
    {id:280,name:"AC Service Tool Kit Complete",company:"Godrej Smart Care",category:"AC Service Tools",modelNo:"Service Kit",brandCode:"GSC",description:"Complete tool kit used for AC installation and servicing"},
    {id:281,name:"Refrigeration Copper Tube Roll",company:"Godrej Smart Care",category:"Refrigeration Material",modelNo:"Copper Tube Roll",brandCode:"GSC",description:"Copper tubing used for refrigeration and AC piping connections"},
    {id:282,name:"Refrigeration Insulation Pipe Foam",company:"Godrej Smart Care",category:"Refrigeration Material",modelNo:"Insulation Foam",brandCode:"GSC",description:"Foam insulation used to cover refrigeration copper pipes"},
    {id:283,name:"Refrigeration Brazing Rod Set",company:"Godrej Smart Care",category:"Refrigeration Material",modelNo:"Brazing Rod",brandCode:"GSC",description:"Copper brazing rods used for joining refrigeration pipes"},
    {id:284,name:"Refrigeration Flux Paste",company:"Godrej Smart Care",category:"Refrigeration Material",modelNo:"Flux Paste",brandCode:"GSC",description:"Flux paste used during brazing of copper pipes",image:"https://5.imimg.com/data5/SELLER/Default/2024/4/408769199/LF/QT/JB/50299094/godrej-appoxy-1000x1000.jpg"},
    {id:285,name:"Refrigeration Service Valve Core",company:"Godrej Smart Care",category:"Refrigeration Material",modelNo:"Valve Core",brandCode:"GSC",description:"Replacement valve core used in refrigeration service ports"},
    {id:286,name:"Refrigeration Schrader Valve Tool",company:"Godrej Smart Care",category:"Refrigeration Tools",modelNo:"Schrader Tool",brandCode:"GSC",description:"Tool used to remove or install Schrader valves"},
    {id:287,name:"Refrigeration Pipe Clamp Set",company:"Godrej Smart Care",category:"Refrigeration Material",modelNo:"Pipe Clamp",brandCode:"GSC",description:"Clamp used to secure copper pipes during installation"},
    {id:288,name:"Refrigeration Service Tool Box",company:"Godrej Smart Care",category:"Refrigeration Tools",modelNo:"Tool Box",brandCode:"GSC",description:"Tool box used to store refrigeration servicing tools",image:"https://m.media-amazon.com/images/I/61gd8jWtbaL.jpg"},
    {id:289,name:"Capacitor 50+2 MFD",company:"LG",category:"Air Conditioner Spare Parts",modelNo:"1.5 TON Split AC",brandCode:"HI02-00310H",description:"50+2 MFD capacitor for split air conditioner 1.5 ton.",image:"images/page2_img1.jpeg"},
    {id:290,name:"Capacitor 50+6 MFD",company:"LG",category:"Air Conditioner Spare Parts",modelNo:"1.5 TON Window AC",brandCode:"HI02-00310F",description:"50+6 MFD capacitor for window air conditioner 1.5 ton.",image:"images/page2_img2.jpeg"},
    {id:291,name:"Capacitor 55+6 MFD",company:"LG",category:"Air Conditioner Spare Parts",modelNo:"2 TON Split AC",brandCode:"HI02-00310R",description:"55+6 MFD capacitor for split air conditioner 2 ton.",image:"images/page2_img2.jpeg"},
    {id:292,name:"Motor Assembly DC Outdoor",company:"LG",category:"Air Conditioner Spare Parts",modelNo:"Outdoor Unit",brandCode:"EAU60905408",description:"DC motor assembly for outdoor AC unit.",image:"images/page2_img5.jpeg"},
    {id:293,name:"Motor Assembly DC Outdoor",company:"LG",category:"Air Conditioner Spare Parts",modelNo:"Outdoor Unit",brandCode:"EAU57945710",description:"DC motor assembly for outdoor AC unit.",image:"images/page2_img7.jpeg"},
    {id:294,name:"Motor Assembly DC Indoor",company:"LG",category:"Air Conditioner Spare Parts",modelNo:"Indoor Unit",brandCode:"EAU62983003",description:"DC motor assembly for indoor AC unit alternate part EAU62004002.",image:"images/page11_img1.jpeg"},
    {id:295,name:"AC IDU Motor Big Shaft",company:"LG",category:"Air Conditioner Spare Parts",modelNo:"1.5 / 2 TON",brandCode:"4681A30022P",description:"Indoor unit motor with big shaft for 1.5 and 2 ton AC.",image:"images/page3_img1.jpeg"},
    {id:296,name:"Copper Pipe 0.6 mm 1/4",company:"LG",category:"Air Conditioner Spare Parts",modelNo:"1/4 Pipe 1.45 kg",brandCode:"CLS32160301",description:"Copper pipe 0.6 mm thickness for AC installation.",image:"images/page3_img3.jpeg"},
    {id:297,name:"Fan Assembly Axial",company:"LG",category:"Air Conditioner Spare Parts",modelNo:"Universal",brandCode:"5900A10009E",description:"Axial fan assembly used in air conditioner unit.",image:"images/page3_img5.jpeg"},
    {id:298,name:"Insulation Foam 0.8 mm 1/2",company:"LG",category:"Air Conditioner Spare Parts",modelNo:"15 Meter Roll",brandCode:"CLS32160501",description:"Insulation foam pipe covering for AC copper pipes.",image:"images/page3_img6.jpeg"},
    {id:299,name:"AC IDU Motor",company:"LG",category:"Air Conditioner Spare Parts",modelNo:"1.5 / 2 TON",brandCode:"EAU43443404",description:"Indoor unit motor for 1.5 and 2 ton AC (no supply on this part code).",image:"images/page2_img5.jpeg"},
    {id:300,name:"Insulation Foam 0.7 mm 1/4",company:"LG",category:"Air Conditioner Spare Parts",modelNo:"15 Meter Roll",brandCode:"CLS32160601",description:"Insulation foam for AC copper pipe insulation."},
    {id:301,name:"Copper Pipe 0.7 mm 1/2",company:"LG",category:"Air Conditioner Spare Parts",modelNo:"1/2 Pipe 3.5 kg",brandCode:"CLS32160401",description:"Copper pipe used for AC installation with 0.7 mm thickness."},
    {id:302,name:"Fan Assembly Cross Flow",company:"LG",category:"Air Conditioner Spare Parts",modelNo:"Split AC",brandCode:"5901A92441E",description:"Cross flow fan assembly for split air conditioner (Alt: 5901AR2441E)."},
    {id:303,name:"Fan Assembly Propeller",company:"LG",category:"Air Conditioner Spare Parts",modelNo:"Outdoor Unit",brandCode:"ADP72909501",description:"Propeller fan assembly used in AC outdoor unit.",image:"images/page4_img12.jpeg"},
    {id:304,name:"Fan Assembly Propeller",company:"LG",category:"Air Conditioner Spare Parts",modelNo:"Outdoor Unit",brandCode:"ADP72909514",description:"Propeller fan assembly for air conditioner outdoor unit.",image:"images/page4_img12.jpeg"},
    {id:305,name:"Fan Assembly Propeller",company:"LG",category:"Air Conditioner Spare Parts",modelNo:"Outdoor Unit",brandCode:"ADP72912912",description:"Propeller fan assembly used in air conditioner condenser unit.",image:"images/page4_img12.jpeg"},
    {id:306,name:"Drain Pan",company:"LG",category:"Air Conditioner Spare Parts",modelNo:"Indoor Unit",brandCode:"MGB63865001",description:"Drain pan used in AC indoor unit for water drainage.",image:"images/page4_img85.jpeg"},
    {id:307,name:"Drain Pan",company:"LG",category:"Air Conditioner Spare Parts",modelNo:"Indoor Unit",brandCode:"MGB63865004",description:"AC indoor unit drain pan for condensate water collection.",image:"images/page4_img85.jpeg"},
    {id:308,name:"Swing Motor DC Stepping",company:"LG",category:"Air Conditioner Spare Parts",modelNo:"1.5 / 2 TON Split AC",brandCode:"4681AR2727J",description:"DC stepping swing motor used to control AC louver movement.",image:"images/page4_img86.jpeg"},
    {id:309,name:"Remote Controller",company:"LG",category:"Air Conditioner Spare Parts",modelNo:"1.5 Ton / 2 Ton Split AC",brandCode:"AKB75415307",description:"Remote controller for 1.5 ton and 2 ton air conditioner (Alt: AKB75415306).",image:"images/page5_img2.jpeg"},
    {id:310,name:"Remote Controller",company:"LG",category:"Air Conditioner Spare Parts",modelNo:"1 Ton AC",brandCode:"AKB74955624",description:"Remote controller for 1 ton air conditioner.",image:"images/page5_img2.jpeg"},
    {id:311,name:"Remote Controller",company:"LG",category:"Air Conditioner Spare Parts",modelNo:"1 Ton AC",brandCode:"AKB75415302",description:"Remote controller for 1 ton air conditioner.",image:"images/page5_img2.jpeg"},
    {id:312,name:"Motor Assembly AC Synchronous",company:"LG",category:"Air Conditioner Spare Parts",modelNo:"Window AC",brandCode:"2H01102A",description:"AC synchronous motor assembly used in window air conditioner.",image:"images/page5_img6.jpeg"},
    {id:313,name:"Remote Controller",company:"LG",category:"Air Conditioner Spare Parts",modelNo:"Cassette AC",brandCode:"AKB73455716",description:"Remote controller for cassette air conditioner.",image:"images/page5_img2.jpeg"},
    {id:314,name:"Remote Controller",company:"LG",category:"Air Conditioner Spare Parts",modelNo:"Cassette AC",brandCode:"AKB75735404",description:"Remote controller for cassette air conditioner.",image:"images/page5_img2.jpeg"},
    {id:315,name:"Remote Controller",company:"LG",category:"Air Conditioner Spare Parts",modelNo:"1.5 Ton Split AC",brandCode:"AKB75215405",description:"Remote controller for split air conditioner 1.5 ton (Alt: AKB73595925).",image:"images/page5_img2.jpeg"},
    {id:316,name:"Remote Controller Assembly",company:"LG",category:"Air Conditioner Spare Parts",modelNo:"Split AC",brandCode:"AKB75415308",description:"Remote controller assembly for split air conditioner (Alt: AKB75215405).",image:"images/page5_img1.jpeg"},
    {id:317,name:"Remote Controller Assembly",company:"LG",category:"Air Conditioner Spare Parts",modelNo:"Split AC",brandCode:"AKB75415316",description:"Remote controller assembly used for LG air conditioner units.",image:"images/page5_img1.jpeg"},
    {id:318,name:"Remote Controller Assembly",company:"LG",category:"Air Conditioner Spare Parts",modelNo:"Split AC",brandCode:"AKB75415317",description:"Remote controller assembly compatible with LG air conditioner models.",image:"images/page5_img1.jpeg"},
    {id:319,name:"Fan Assembly Blower",company:"LG",category:"Air Conditioner Spare Parts",modelNo:"Indoor Unit",brandCode:"5834AR1599J",description:"Blower fan assembly used in AC indoor unit for air circulation.",image:"images/page6_img14.jpeg"},
    {id:320,name:"Fan Assembly Blower",company:"LG",category:"Air Conditioner Spare Parts",modelNo:"Indoor Unit",brandCode:"5834AR1599B",description:"Indoor unit blower fan assembly for LG air conditioner.",image:"images/page6_img14.jpeg"},
    {id:321,name:"Evaporator Assembly 30×28 IDU",company:"LG",category:"Air Conditioner Spare Parts",modelNo:"1.5 Ton Indoor Unit",brandCode:"ADL73401653",description:"1.5 ton indoor unit evaporator assembly (30×28) used in split air conditioner cooling system",image:"images/page7_img2.jpeg"},
    {id:322,name:"Condenser Assembly 29×20 ODU",company:"LG",category:"Air Conditioner Spare Parts",modelNo:"1.5 Ton Outdoor Unit",brandCode:"ACG75804603",description:"1.5 ton outdoor unit condenser assembly (29×20) used in split air conditioner with bending.",image:"images/page9_img1.jpeg"},
    {id:323,name:"Motor Assembly DC Stepping",company:"LG",category:"Air Conditioner Spare Parts",modelNo:"AC Unit Motor",brandCode:"4681A20042E",description:"DC stepping motor assembly used in air conditioner units for controlled movement mechanisms.",image:"images/page11_img2.jpeg"},
    {id:324,name:"Motor Assembly DC Indoor",company:"LG",category:"Air Conditioner Spare Parts",modelNo:"Indoor Unit Motor",brandCode:"EAU62983001",description:"DC motor assembly used in the indoor unit of LG air conditioners.",image:"images/page11_img1.jpeg"},
    {id:325,name:"RAC Mesh Drain Pipe PVC Braided Hose",company:"LG",category:"Air Conditioner Spare Parts",modelNo:"1/2 inch 15 Meter",brandCode:"CLS32183001",description:"PVC braided RAC mesh drain pipe (15 meters, 1/2 inch diameter) used for AC water drainage."},
    {id:326,name:"Motor Assembly DC Indoor",company:"LG",category:"Air Conditioner Spare Parts",modelNo:"Indoor Unit Motor",brandCode:"EAU62543502",description:"DC indoor motor assembly for LG air conditioner (Alternate: EAU62543503).",image:"images/page11_img1.jpeg"},
    {id:327,name:"Motor Assembly DC Indoor",company:"LG",category:"Air Conditioner Spare Parts",modelNo:"Indoor Unit Motor",brandCode:"EAU62543503",description:"DC indoor motor assembly for LG air conditioner (Alternate: EAU62543502).",image:"images/page11_img1.jpeg"},
    {id:328,name:"Motor Assembly AC Indoor",company:"LG",category:"Air Conditioner Spare Parts",modelNo:"Indoor Unit Motor",brandCode:"EAU63383301",description:"AC motor assembly used in indoor unit of LG air conditioner."},
    {id:329,name:"Thermistor Assembly",company:"LG",category:"Air Conditioner Spare Parts",modelNo:"AC Sensor Unit",brandCode:"EBG60787304",description:"Thermistor assembly used for temperature sensing in LG air conditioners."},
    {id:330,name:"Thermistor Assembly NTC",company:"LG",category:"Air Conditioner Spare Parts",modelNo:"AC Sensor Unit",brandCode:"EBG61146008",description:"NTC thermistor assembly used for temperature detection in air conditioner systems."},
    {id:331,name:"Thermistor Assembly NTC",company:"LG",category:"Air Conditioner Spare Parts",modelNo:"AC Sensor Unit",brandCode:"EBG61285804",description:"NTC thermistor assembly used for monitoring AC system temperature."},
    {id:332,name:"Motor Assembly DC Stepping",company:"LG",category:"Air Conditioner Spare Parts",modelNo:"Stepping Motor",brandCode:"4681A20055A",description:"DC stepping motor assembly used for AC airflow or louver control (Alt: EAU42372501).",image:"images/page11_img2.jpeg"},
    {id:333,name:"Motor DC Stepping",company:"LG",category:"Air Conditioner Spare Parts",modelNo:"Stepping Motor",brandCode:"EAU42372501",description:"DC stepping motor used in AC units for controlled movement (Alt: 4681A20055A).",image:"images/page8_img3.jpeg"},
    {id:334,name:"Motor Assembly AC Cooling",company:"LG",category:"Air Conditioner Spare Parts",modelNo:"Outdoor Cooling Motor",brandCode:"EAU32814810",description:"AC cooling motor assembly used in LG air conditioner outdoor unit."},
    {id:335,name:"Wall Gap Filling Putty",company:"LG",category:"Air Conditioner Spare Parts",modelNo:"Installation Material",brandCode:"CLS32182901",description:"Wall gap filling putty used during AC installation to seal pipe openings."},
    {id:336,name:"Motor Assembly AC Outdoor",company:"LG",category:"Air Conditioner Spare Parts",modelNo:"Outdoor Unit Motor",brandCode:"EAU41577624",description:"AC motor assembly used in LG air conditioner outdoor unit."},
    {id:337,name:"Outdoor AC Bracket with Fasteners",company:"LG",category:"Air Conditioner Spare Parts",modelNo:"Outdoor Unit Mounting Bracket",brandCode:"CLS31020007",description:"Outdoor AC mounting bracket with fasteners used to install and support the outdoor unit on walls.",image:"images/page14_img9.jpeg"},
    {id:338,name:"PCB Assembly Main",company:"LG",category:"Air Conditioner PCB Spare Parts",modelNo:"AC Main PCB",brandCode:"EBR86597006",description:"Main PCB assembly used in LG air conditioner control system.",image:"https://5.imimg.com/data5/SELLER/Default/2021/9/XW/AJ/VN/125274601/lg-refrigerator-pcb-board-1000x1000.jpg"},
    {id:339,name:"PCB Assembly Main",company:"LG",category:"Air Conditioner PCB Spare Parts",modelNo:"AC Main PCB",brandCode:"EBR85490308",description:"Main PCB assembly for LG air conditioner electronic control board.",image:"https://5.imimg.com/data5/SELLER/Default/2021/9/XW/AJ/VN/125274601/lg-refrigerator-pcb-board-1000x1000.jpg"},
    {id:340,name:"PCB Assembly Main",company:"LG",category:"Air Conditioner PCB Spare Parts",modelNo:"AC Main PCB",brandCode:"EBR86597049",description:"Main PCB assembly used for controlling functions of LG air conditioner.",image:"https://5.imimg.com/data5/SELLER/Default/2021/9/XW/AJ/VN/125274601/lg-refrigerator-pcb-board-1000x1000.jpg"},
    {id:341,name:"PCB Assembly Main",company:"LG",category:"Air Conditioner PCB Spare Parts",modelNo:"AC Main PCB",brandCode:"EBR83648811",description:"Air conditioner main PCB board used for system operation and control.",image:"https://5.imimg.com/data5/SELLER/Default/2021/9/XW/AJ/VN/125274601/lg-refrigerator-pcb-board-1000x1000.jpg"},
    {id:342,name:"PCB Assembly Main",company:"LG",category:"Air Conditioner PCB Spare Parts",modelNo:"AC Main PCB",brandCode:"EBR83648814",description:"Main PCB assembly used in LG air conditioner electronic control system.",image:"https://www.aldahome.com/media/catalog/product/cache/a95cd6208f6f304d3ecd6458151997d3/l/g/lg_dual_inverter_split_ac_pcb.jpg"},
    {id:343,name:"PCB Assembly Main",company:"LG",category:"Air Conditioner PCB Spare Parts",modelNo:"AC Main PCB",brandCode:"EBR83648812",description:"Main PCB assembly designed for LG air conditioner operational control.",image:"https://www.aldahome.com/media/catalog/product/cache/a95cd6208f6f304d3ecd6458151997d3/l/g/lg_dual_inverter_split_ac_pcb.jpg"},
    {id:344,name:"PCB Assembly Main",company:"LG",category:"Air Conditioner PCB Spare Parts",modelNo:"AC Main PCB",brandCode:"EBR86597008",description:"Air conditioner main PCB board used to manage AC electrical and control functions.",image:"https://www.aldahome.com/media/catalog/product/cache/a95cd6208f6f304d3ecd6458151997d3/l/g/lg_dual_inverter_split_ac_pcb.jpg"},
    {id:345,name:"PCB Assembly Main",company:"LG",category:"Air Conditioner PCB Spare Parts",modelNo:"AC Main PCB",brandCode:"EBR86597043",description:"Main electronic PCB board used in LG AC units for system control and communication.",image:"https://www.aldahome.com/media/catalog/product/cache/a95cd6208f6f304d3ecd6458151997d3/l/g/lg_dual_inverter_split_ac_pcb.jpg"},
    {id:346,name:"PCB Assembly Main",company:"LG",category:"Air Conditioner PCB Spare Parts",modelNo:"AC Main PCB",brandCode:"EBR86597034",description:"Main PCB assembly used for electronic control and operation of LG air conditioners.",image:"https://m.media-amazon.com/images/I/81wIehLyRvL._AC_UF1000,1000_QL80_.jpg"},
    {id:347,name:"PCB Assembly Main",company:"LG",category:"Air Conditioner PCB Spare Parts",modelNo:"AC Main PCB",brandCode:"EBR86597097",description:"Main PCB control board for LG air conditioner system functions and electrical management.",image:"https://m.media-amazon.com/images/I/81wIehLyRvL._AC_UF1000,1000_QL80_.jpg"},
    {id:348,name:"PCB Assembly Main",company:"LG",category:"Air Conditioner PCB Spare Parts",modelNo:"AC Main PCB",brandCode:"EBR35911702",description:"Air conditioner main PCB board responsible for managing internal electronic operations.",image:"https://m.media-amazon.com/images/I/81wIehLyRvL._AC_UF1000,1000_QL80_.jpg"},
    {id:349,name:"PCB Assembly Main",company:"LG",category:"Air Conditioner PCB Spare Parts",modelNo:"AC Main PCB",brandCode:"EBR83879905",description:"Electronic main PCB assembly used in LG AC units for system control.",image:"https://m.media-amazon.com/images/I/81wIehLyRvL._AC_UF1000,1000_QL80_.jpg"},
    {id:350,name:"PCB Assembly Main",company:"LG",category:"Air Conditioner PCB Spare Parts",modelNo:"AC Main PCB",brandCode:"EBR83648815",description:"Main PCB assembly used in LG air conditioner for system control and electrical management.",image:"https://m.media-amazon.com/images/I/81wIehLyRvL._AC_UF1000,1000_QL80_.jpg"},
    {id:351,name:"PCB Assembly Main",company:"LG",category:"Air Conditioner PCB Spare Parts",modelNo:"AC Main PCB",brandCode:"EBR86597067",description:"Electronic main PCB board for LG air conditioner operational control.",image:"https://m.media-amazon.com/images/I/81wIehLyRvL._AC_UF1000,1000_QL80_.jpg"},
    {id:352,name:"PCB Assembly Main",company:"LG",category:"Air Conditioner PCB Spare Parts",modelNo:"AC Main PCB",brandCode:"EBR83879903",description:"Main control PCB used in LG air conditioner to manage internal electronic functions.",image:"https://m.media-amazon.com/images/I/81wIehLyRvL._AC_UF1000,1000_QL80_.jpg"},
    {id:353,name:"PCB Assembly Main",company:"LG",category:"Air Conditioner PCB Spare Parts",modelNo:"AC Main PCB",brandCode:"EBR85490288",description:"Air conditioner main PCB assembly responsible for unit operation and control.",image:"https://m.media-amazon.com/images/I/81wIehLyRvL._AC_UF1000,1000_QL80_.jpg"},
    {id:354,name:"PCB Assembly Main",company:"LG",category:"Air Conditioner PCB Spare Parts",modelNo:"AC Main PCB",brandCode:"EBR86597082",description:"Main PCB assembly used in LG air conditioner for system control and electronic operation.",image:"https://m.media-amazon.com/images/I/81wIehLyRvL._AC_UF1000,1000_QL80_.jpg"},
    {id:355,name:"PCB Assembly Main",company:"LG",category:"Air Conditioner PCB Spare Parts",modelNo:"AC Main PCB",brandCode:"EBR85490201",description:"Electronic main PCB board used for controlling LG air conditioner functions.",image:"https://m.media-amazon.com/images/I/81wIehLyRvL._AC_UF1000,1000_QL80_.jpg"},
    {id:356,name:"PCB Assembly Main",company:"LG",category:"Air Conditioner PCB Spare Parts",modelNo:"AC Main PCB",brandCode:"EBR85490240",description:"Air conditioner main PCB assembly responsible for internal electrical control.",image:"https://m.media-amazon.com/images/I/81wIehLyRvL._AC_UF1000,1000_QL80_.jpg"},
    {id:357,name:"PCB Assembly Main",company:"LG",category:"Air Conditioner PCB Spare Parts",modelNo:"AC Main PCB",brandCode:"EBR82015910",description:"Main control PCB board used in LG AC units to manage system operations.",image:"https://m.media-amazon.com/images/I/81wIehLyRvL._AC_UF1000,1000_QL80_.jpg"},
    {id:358,name:"PCB Assembly Main",company:"LG",category:"Air Conditioner PCB Spare Parts",modelNo:"AC Main PCB",brandCode:"EBR31452205",description:"Main PCB assembly used in LG air conditioner for system control and electrical operation.",image:"https://m.media-amazon.com/images/I/81wIehLyRvL._AC_UF1000,1000_QL80_.jpg"},
    {id:359,name:"PCB Assembly Main",company:"LG",category:"Air Conditioner PCB Spare Parts",modelNo:"AC Main PCB",brandCode:"EBR85490289",description:"Main PCB control board used in LG air conditioner electronic management system.",image:"https://m.media-amazon.com/images/I/81wIehLyRvL._AC_UF1000,1000_QL80_.jpg"},
    {id:360,name:"PCB Assembly Main",company:"LG",category:"Air Conditioner PCB Spare Parts",modelNo:"AC Main PCB",brandCode:"EBR82015901",description:"Air conditioner main PCB assembly responsible for internal system control.",image:"https://m.media-amazon.com/images/I/81wIehLyRvL._AC_UF1000,1000_QL80_.jpg"},
    {id:361,name:"PCB Assembly Main",company:"LG",category:"Air Conditioner PCB Spare Parts",modelNo:"AC Main PCB",brandCode:"EBR85490236",description:"Main electronic PCB board used in LG AC units for operational control.",image:"https://m.media-amazon.com/images/I/81wIehLyRvL._AC_UF1000,1000_QL80_.jpg"},
    {id:362,name:"PCB Assembly Main",company:"LG",category:"Air Conditioner PCB Spare Parts",modelNo:"AC Main PCB",brandCode:"EBR82015903",description:"Main PCB assembly used in LG air conditioner for system control and electrical management.",image:"https://m.media-amazon.com/images/I/81wIehLyRvL._AC_UF1000,1000_QL80_.jpg"},
    {id:363,name:"PCB Assembly Main",company:"LG",category:"Air Conditioner PCB Spare Parts",modelNo:"AC Main PCB",brandCode:"EBR85490247",description:"Electronic main PCB board used for operational control in LG air conditioner.",image:"https://m.media-amazon.com/images/I/81wIehLyRvL._AC_UF1000,1000_QL80_.jpg"},
    {id:364,name:"PCB Assembly Main",company:"LG",category:"Air Conditioner PCB Spare Parts",modelNo:"AC Main PCB",brandCode:"EBR85490226",description:"Air conditioner main PCB assembly responsible for controlling internal electronic functions.",image:"https://m.media-amazon.com/images/I/81wIehLyRvL._AC_UF1000,1000_QL80_.jpg"},
    {id:365,name:"PCB Assembly Main",company:"LG",category:"Air Conditioner PCB Spare Parts",modelNo:"AC Main PCB",brandCode:"EBR85490251",description:"Main control PCB board used in LG AC units for system management and operation.",image:"https://m.media-amazon.com/images/I/81wIehLyRvL._AC_UF1000,1000_QL80_.jpg"},
    {id:366,name:"PCB Assembly Main",company:"LG",category:"Air Conditioner PCB Spare Parts",modelNo:"AC Main PCB",brandCode:"EBR85490210",description:"Main PCB assembly used in LG air conditioner for system control and electronic operation.",image:"https://m.media-amazon.com/images/I/81wIehLyRvL._AC_UF1000,1000_QL80_.jpg"},
    {id:367,name:"PCB Assembly Main",company:"LG",category:"Air Conditioner PCB Spare Parts",modelNo:"AC Main PCB",brandCode:"EBR82015909",description:"Electronic main PCB board used in LG air conditioner control system.",image:"https://m.media-amazon.com/images/I/81wIehLyRvL._AC_UF1000,1000_QL80_.jpg"},
    {id:368,name:"PCB Assembly Main",company:"LG",category:"Air Conditioner PCB Spare Parts",modelNo:"AC Main PCB",brandCode:"EBR85490286",description:"Main control PCB assembly used for managing internal operations of LG AC units.",image:"https://m.media-amazon.com/images/I/81wIehLyRvL._AC_UF1000,1000_QL80_.jpg"},
    {id:369,name:"PCB Assembly Main",company:"LG",category:"Air Conditioner PCB Spare Parts",modelNo:"AC Main PCB",brandCode:"EBR83808901",description:"Air conditioner main PCB board responsible for electrical control and system communication.",image:"https://m.media-amazon.com/images/I/81wIehLyRvL._AC_UF1000,1000_QL80_.jpg"},
    {id:370,name:"PCB Assembly Display",company:"LG",category:"Air Conditioner PCB Spare Parts",modelNo:"AC Display PCB",brandCode:"EBR78308507",description:"Display PCB assembly used in LG air conditioner indoor unit display panel.",image:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSiMVrbvkqf4boudyQBsTMu6-ZVzPSM1Qpl2weXyERn0Zjye6aqIb04hXLBcxf-HcVLuxOo_CwUqBKemeXZrxmuBYe3bljCHinoX-_WZJJ1kCf8OdBdfv1SYw"},
    {id:371,name:"PCB Assembly Display",company:"LG",category:"Air Conditioner PCB Spare Parts",modelNo:"AC Display PCB",brandCode:"EBR78308505",description:"Display control PCB board used in LG AC units for front panel display operation.",image:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSiMVrbvkqf4boudyQBsTMu6-ZVzPSM1Qpl2weXyERn0Zjye6aqIb04hXLBcxf-HcVLuxOo_CwUqBKemeXZrxmuBYe3bljCHinoX-_WZJJ1kCf8OdBdfv1SYw"},
    {id:372,name:"PCB Assembly Display",company:"LG",category:"Air Conditioner PCB Spare Parts",modelNo:"AC Display PCB",brandCode:"EBR78308511",description:"Display PCB assembly used for AC control panel indicators and interface.",image:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSiMVrbvkqf4boudyQBsTMu6-ZVzPSM1Qpl2weXyERn0Zjye6aqIb04hXLBcxf-HcVLuxOo_CwUqBKemeXZrxmuBYe3bljCHinoX-_WZJJ1kCf8OdBdfv1SYw"},
    {id:373,name:"PCB Assembly Main",company:"LG",category:"Air Conditioner PCB Spare Parts",modelNo:"AC Main PCB",brandCode:"EBR33285106",description:"Main PCB assembly responsible for managing internal electronic operations of LG air conditioner.",image:"https://m.media-amazon.com/images/I/81wIehLyRvL._AC_UF1000,1000_QL80_.jpg"},
    {id:374,name:"PCB Assembly Main",company:"LG",category:"Air Conditioner PCB Spare Parts",modelNo:"AC Main PCB",brandCode:"EBR85490215",description:"Main PCB assembly used in LG air conditioner for system control and electronic operation.",image:"https://m.media-amazon.com/images/I/81wIehLyRvL._AC_UF1000,1000_QL80_.jpg"},
    {id:375,name:"PCB Assembly Main",company:"LG",category:"Refrigerator PCB Spare Parts",modelNo:"Refrigerator Main PCB",brandCode:"EBR82048558",description:"Main PCB assembly used in LG refrigerator for electronic control and system management.",image:"https://5.imimg.com/data5/SELLER/Default/2025/6/517049666/GQ/YO/OR/90589000/lg-refrigerator-pcb-board-500x500.jpeg"},
    {id:376,name:"PCB Assembly Main",company:"LG",category:"Refrigerator PCB Spare Parts",modelNo:"Refrigerator Main PCB",brandCode:"EBR81827931",description:"Main PCB board used in LG refrigerator to control internal electronic operations.",image:"https://5.imimg.com/data5/SELLER/Default/2025/6/517049666/GQ/YO/OR/90589000/lg-refrigerator-pcb-board-500x500.jpeg"},
    {id:377,name:"PCB Assembly Main",company:"LG",category:"Refrigerator PCB Spare Parts",modelNo:"Refrigerator Main PCB",brandCode:"EBR81827924",description:"Electronic main PCB assembly responsible for refrigerator system control.",image:"https://5.imimg.com/data5/SELLER/Default/2025/6/517049666/GQ/YO/OR/90589000/lg-refrigerator-pcb-board-500x500.jpeg"},
    {id:378,name:"PCB Assembly Main",company:"LG",category:"Refrigerator PCB Spare Parts",modelNo:"Refrigerator Main PCB",brandCode:"EBR81827936",description:"Main PCB control board used for managing refrigerator functions and electrical operations.",image:"https://5.imimg.com/data5/SELLER/Default/2025/6/517049666/GQ/YO/OR/90589000/lg-refrigerator-pcb-board-500x500.jpeg"},
    {id:379,name:"PCB Assembly Main",company:"LG",category:"Washing Machine PCB Spare Parts",modelNo:"Washing Machine Main PCB",brandCode:"EBR35852106",description:"Main PCB assembly used in LG washing machine for system control and electronic management.",image:"https://5.imimg.com/data5/SELLER/Default/2021/11/YA/IB/OA/101254335/img-20211117-wa0006.jpg"},
    {id:380,name:"PCB Assembly Display",company:"LG",category:"Washing Machine PCB Spare Parts",modelNo:"Washing Machine Display PCB",brandCode:"EBR89401002",description:"Display PCB assembly used in LG washing machine control panel interface.",image:"https://5.imimg.com/data5/SELLER/Default/2025/2/487485065/CR/UY/ZX/90589000/whatsapp-image-2025-02-09-at-5-51-32-pm-1-500x500.jpeg"},
    {id:381,name:"PCB Assembly Display",company:"LG",category:"Washing Machine PCB Spare Parts",modelNo:"Washing Machine Display PCB",brandCode:"EBR83079920",description:"Display PCB board used in LG washing machine for control panel indicators and interface.",image:"https://5.imimg.com/data5/SELLER/Default/2025/2/487485065/CR/UY/ZX/90589000/whatsapp-image-2025-02-09-at-5-51-32-pm-1-500x500.jpeg"},
    {id:382,name:"PCB Assembly Main",company:"LG",category:"Washing Machine PCB Spare Parts",modelNo:"Washing Machine Main PCB",brandCode:"EBR80600423",description:"Main PCB assembly used in LG washing machine for system control and electronic operation.",image:"https://5.imimg.com/data5/SELLER/Default/2021/11/YA/IB/OA/101254335/img-20211117-wa0006.jpg"},
    {id:383,name:"PCB Assembly Display",company:"LG",category:"Washing Machine PCB Spare Parts",modelNo:"Washing Machine Display PCB",brandCode:"EBR83263211",description:"Display PCB assembly used in LG washing machine control panel interface.",image:"https://5.imimg.com/data5/SELLER/Default/2025/2/487485065/CR/UY/ZX/90589000/whatsapp-image-2025-02-09-at-5-51-32-pm-1-500x500.jpeg"},
    {id:384,name:"PCB Assembly Main",company:"LG",category:"Washing Machine PCB Spare Parts",modelNo:"Washing Machine Main PCB",brandCode:"EBR80040801",description:"Main PCB board used in LG washing machine for internal electronic management.",image:"https://5.imimg.com/data5/SELLER/Default/2021/11/YA/IB/OA/101254335/img-20211117-wa0006.jpg"},
    {id:385,name:"PCB Assembly Main",company:"LG",category:"Washing Machine PCB Spare Parts",modelNo:"Washing Machine Main PCB",brandCode:"EBR35852104",description:"Main PCB assembly used in LG washing machine for system control and electronic management.",image:"https://5.imimg.com/data5/SELLER/Default/2021/11/YA/IB/OA/101254335/img-20211117-wa0006.jpg"},
    {id:386,name:"PCB Assembly Display",company:"LG",category:"Washing Machine PCB Spare Parts",modelNo:"Washing Machine Display PCB",brandCode:"EBR83079952",description:"Display PCB assembly used in LG washing machine control panel interface.",image:"https://5.imimg.com/data5/SELLER/Default/2025/2/487485065/CR/UY/ZX/90589000/whatsapp-image-2025-02-09-at-5-51-32-pm-1-500x500.jpeg"},
    {id:387,name:"PCB Assembly Display",company:"LG",category:"Washing Machine PCB Spare Parts",modelNo:"Washing Machine Display PCB",brandCode:"EBR86600903",description:"Display PCB board used in LG washing machine for control panel indicators and display functions.",image:"https://5.imimg.com/data5/SELLER/Default/2025/2/487485065/CR/UY/ZX/90589000/whatsapp-image-2025-02-09-at-5-51-32-pm-1-500x500.jpeg"},
    {id:388,name:"PCB Assembly Display",company:"LG",category:"Washing Machine PCB Spare Parts",modelNo:"Washing Machine Display PCB",brandCode:"EBR86600904",description:"Display PCB assembly used in LG washing machine control panel display system.",image:"https://5.imimg.com/data5/SELLER/Default/2025/2/487485065/CR/UY/ZX/90589000/whatsapp-image-2025-02-09-at-5-51-32-pm-1-500x500.jpeg"},
    {id:389,name:"PCB Assembly Display",company:"LG",category:"Washing Machine PCB Spare Parts",modelNo:"Washing Machine Display PCB",brandCode:"EBR83079955",description:"Display PCB assembly used in LG washing machine control panel interface.",image:"https://5.imimg.com/data5/SELLER/Default/2025/2/487485065/CR/UY/ZX/90589000/whatsapp-image-2025-02-09-at-5-51-32-pm-1-500x500.jpeg"},
    {id:390,name:"PCB Assembly Display",company:"LG",category:"Washing Machine PCB Spare Parts",modelNo:"Washing Machine Display PCB",brandCode:"EBR83079904",description:"Display PCB board used in LG washing machine for control panel display and indicators.",image:"https://5.imimg.com/data5/SELLER/Default/2025/2/487485065/CR/UY/ZX/90589000/whatsapp-image-2025-02-09-at-5-51-32-pm-1-500x500.jpeg"},
    {id:391,name:"PCB Assembly Main",company:"LG",category:"Washing Machine PCB Spare Parts",modelNo:"Washing Machine Main PCB",brandCode:"EBR83037804",description:"Main PCB assembly used in LG washing machine for internal electronic control.",image:"https://5.imimg.com/data5/SELLER/Default/2021/11/YA/IB/OA/101254335/img-20211117-wa0006.jpg"},
    {id:392,name:"PCB Assembly Display",company:"LG",category:"Washing Machine PCB Spare Parts",modelNo:"Washing Machine Display PCB",brandCode:"EBR32164407",description:"Display PCB assembly used for LG washing machine control panel interface and indicators.",image:"https://5.imimg.com/data5/SELLER/Default/2025/2/487485065/CR/UY/ZX/90589000/whatsapp-image-2025-02-09-at-5-51-32-pm-1-500x500.jpeg"},
    {id:393,name:"PCB Assembly Display",company:"LG",category:"Washing Machine PCB Spare Parts",modelNo:"Washing Machine Display PCB",brandCode:"EBR83079922",description:"Display PCB assembly used in LG washing machine control panel for indicators and interface functions.",image:"https://5.imimg.com/data5/SELLER/Default/2025/2/487485065/CR/UY/ZX/90589000/whatsapp-image-2025-02-09-at-5-51-32-pm-1-500x500.jpeg"},
    {id:394,name:"PCB Assembly Display",company:"LG",category:"Washing Machine PCB Spare Parts",modelNo:"Washing Machine Display PCB",brandCode:"EBR32164401",description:"Display PCB board used in LG washing machine control panel system.",image:"https://5.imimg.com/data5/SELLER/Default/2025/2/487485065/CR/UY/ZX/90589000/whatsapp-image-2025-02-09-at-5-51-32-pm-1-500x500.jpeg"},
  {id:395,name:"Door Basket",company:"LG",category:"Refrigerator Spare Parts",modelNo:"Refrigerator 360 Ltr",brandCode:"5004JF1024C",description:"Door basket used in LG refrigerator 360 liter models.",image:"https://www.lg.com/content/dam/channel/wcms/in/accessories_parts/lg-com/accessories/refrigerators/tray-basket/man62329501/gallery/refrigerators-tray-basket-man62329501-gallery-zoom-image-03-desktop.jpg/jcr:content/renditions/thum-1600x1062.jpeg?w=800"},
  {id:396,name:"Door Basket",company:"LG",category:"Refrigerator Spare Parts",modelNo:"Refrigerator 520 Ltr",brandCode:"MAN37579311",description:"Door basket used in LG refrigerator 520 liter models.",image:"https://www.lg.com/content/dam/channel/wcms/in/accessories_parts/lg-com/accessories/refrigerators/tray-basket/man62329501/gallery/refrigerators-tray-basket-man62329501-gallery-zoom-image-03-desktop.jpg/jcr:content/renditions/thum-1600x1062.jpeg?w=800"},
  {id:397,name:"Door Basket",company:"LG",category:"Refrigerator Spare Parts",modelNo:"Refrigerator 350 Ltr",brandCode:"5004JF1025C",description:"Door basket used in LG refrigerator 350 liter models.",image:"https://www.lg.com/content/dam/channel/wcms/in/accessories_parts/lg-com/accessories/refrigerators/tray-basket/man62329501/gallery/refrigerators-tray-basket-man62329501-gallery-zoom-image-03-desktop.jpg/jcr:content/renditions/thum-1600x1062.jpeg?w=800"},
  {id:398,name:"Door Basket",company:"LG",category:"Refrigerator Spare Parts",modelNo:"Refrigerator 500 Ltr",brandCode:"MAN37579816",description:"Door basket used in LG refrigerator 500 liter models.",image:"https://www.lg.com/content/dam/channel/wcms/in/accessories_parts/lg-com/accessories/refrigerators/tray-basket/man62329501/gallery/refrigerators-tray-basket-man62329501-gallery-zoom-image-03-desktop.jpg/jcr:content/renditions/thum-1600x1062.jpeg?w=800"},
  {id:399,name:"Door Basket",company:"LG",category:"Refrigerator Spare Parts",modelNo:"Refrigerator 320 Ltr",brandCode:"MAN54972703",description:"Door basket used in LG refrigerator 320 liter models.",image:"https://www.lg.com/content/dam/channel/wcms/in/accessories_parts/lg-com/accessories/refrigerators/tray-basket/man62329501/gallery/refrigerators-tray-basket-man62329501-gallery-zoom-image-03-desktop.jpg/jcr:content/renditions/thum-1600x1062.jpeg?w=800"},
  {id:400,name:"Ice Bucket",company:"LG",category:"Refrigerator Spare Parts",modelNo:"Refrigerator 290 Ltr",brandCode:"MKK62422505",description:"Ice bucket used in LG refrigerator 290 liter models.",image:"https://m.media-amazon.com/images/I/21-bQgpxIfL._SX300_SY300_QL70_ML2_.jpg"},
  {id:401,name:"Door Basket",company:"LG",category:"Refrigerator Spare Parts",modelNo:"Refrigerator 490 Ltr",brandCode:"MAN64208601",description:"Door basket used in LG refrigerator 490 liter models.",image:"https://www.lg.com/content/dam/channel/wcms/in/accessories_parts/lg-com/accessories/refrigerators/tray-basket/man62329501/gallery/refrigerators-tray-basket-man62329501-gallery-zoom-image-03-desktop.jpg/jcr:content/renditions/thum-1600x1062.jpeg?w=800"},
  {id:402,name:"Door Basket",company:"LG",category:"Refrigerator Spare Parts",modelNo:"Refrigerator 200–220 Ltr",brandCode:"MAN61928302",description:"Door basket used in LG refrigerator 200–220 liter models.",image:"https://www.lg.com/content/dam/channel/wcms/in/accessories_parts/lg-com/accessories/refrigerators/tray-basket/man62329501/gallery/refrigerators-tray-basket-man62329501-gallery-zoom-image-03-desktop.jpg/jcr:content/renditions/thum-1600x1062.jpeg?w=800"},
  {id:403,name:"Door Basket",company:"LG",category:"Refrigerator Spare Parts",modelNo:"Refrigerator 180 Ltr",brandCode:"MAN37087904",description:"Door basket used in LG refrigerator 180 liter models (Alt: MAN37087903).",image:"https://www.lg.com/content/dam/channel/wcms/in/accessories_parts/lg-com/accessories/refrigerators/tray-basket/man62329501/gallery/refrigerators-tray-basket-man62329501-gallery-zoom-image-03-desktop.jpg/jcr:content/renditions/thum-1600x1062.jpeg?w=800"},
  {id:404,name:"Door Basket",company:"LG",category:"Refrigerator Spare Parts",modelNo:"Refrigerator 200–220 Ltr",brandCode:"MAN61928203",description:"Door basket used in LG refrigerator 200–220 liter models (Alt: MAN61928202).",image:"https://www.lg.com/content/dam/channel/wcms/in/accessories_parts/lg-com/accessories/refrigerators/tray-basket/man62329501/gallery/refrigerators-tray-basket-man62329501-gallery-zoom-image-03-desktop.jpg/jcr:content/renditions/thum-1600x1062.jpeg?w=800"},
  {id:405,name:"Door Basket",company:"LG",category:"Refrigerator Spare Parts",modelNo:"Refrigerator 200–220 Ltr",brandCode:"MAN61928202",description:"Door basket used in LG refrigerator 200–220 liter models (Alt: MAN61928203).",image:"https://www.lg.com/content/dam/channel/wcms/in/accessories_parts/lg-com/accessories/refrigerators/tray-basket/man62329501/gallery/refrigerators-tray-basket-man62329501-gallery-zoom-image-03-desktop.jpg/jcr:content/renditions/thum-1600x1062.jpeg?w=800"},
  {id:406,name:"Door Basket",company:"LG",category:"Refrigerator Spare Parts",modelNo:"Refrigerator 200–220 Ltr",brandCode:"MAN61928403",description:"Door basket used in LG refrigerator 200–220 liter models (Alt: MAN61928402).",image:"https://www.lg.com/content/dam/channel/wcms/in/accessories_parts/lg-com/accessories/refrigerators/tray-basket/man62329501/gallery/refrigerators-tray-basket-man62329501-gallery-zoom-image-03-desktop.jpg/jcr:content/renditions/thum-1600x1062.jpeg?w=800"},
  {id:407,name:"Door Basket",company:"LG",category:"Refrigerator Spare Parts",modelNo:"Refrigerator 200–220 Ltr",brandCode:"MAN61928402",description:"Door basket used in LG refrigerator 200–220 liter models (Alt: MAN61928403).",image:"https://www.lg.com/content/dam/channel/wcms/in/accessories_parts/lg-com/accessories/refrigerators/tray-basket/man62329501/gallery/refrigerators-tray-basket-man62329501-gallery-zoom-image-03-desktop.jpg/jcr:content/renditions/thum-1600x1062.jpeg?w=800"},
  {id:408,name:"Door Basket",company:"LG",category:"Refrigerator Spare Parts",modelNo:"Refrigerator 180 Ltr",brandCode:"MAN37087906",description:"Door basket used in LG refrigerator 180 liter models (Alt: MAN37087904).",image:"https://www.lg.com/content/dam/channel/wcms/in/accessories_parts/lg-com/accessories/refrigerators/tray-basket/man62329501/gallery/refrigerators-tray-basket-man62329501-gallery-zoom-image-03-desktop.jpg/jcr:content/renditions/thum-1600x1062.jpeg?w=800"},
  {id:409,name:"Door Basket",company:"LG",category:"Refrigerator Spare Parts",modelNo:"Refrigerator 490 Ltr",brandCode:"MAN64208603",description:"Door basket used in LG refrigerator 490 liter models.",image:"https://www.lg.com/content/dam/channel/wcms/in/accessories_parts/lg-com/accessories/refrigerators/tray-basket/man62329501/gallery/refrigerators-tray-basket-man62329501-gallery-zoom-image-03-desktop.jpg/jcr:content/renditions/thum-1600x1062.jpeg?w=800"},
  {id:410,name:"Door Basket",company:"LG",category:"Refrigerator Spare Parts",modelNo:"Refrigerator 190 Ltr",brandCode:"MAN62268906",description:"Door basket used in LG refrigerator 190 liter models (Alt: MAN62268901).",image:"https://www.lg.com/content/dam/channel/wcms/in/accessories_parts/lg-com/accessories/refrigerators/tray-basket/man62329501/gallery/refrigerators-tray-basket-man62329501-gallery-zoom-image-03-desktop.jpg/jcr:content/renditions/thum-1600x1062.jpeg?w=800"},
  {id:411,name:"Door Basket",company:"LG",category:"Refrigerator Spare Parts",modelNo:"Refrigerator 190 Ltr",brandCode:"MAN62268901",description:"Door basket used in LG refrigerator 190 liter models (Alt: MAN62268906).",image:"https://www.lg.com/content/dam/channel/wcms/in/accessories_parts/lg-com/accessories/refrigerators/tray-basket/man62329501/gallery/refrigerators-tray-basket-man62329501-gallery-zoom-image-03-desktop.jpg/jcr:content/renditions/thum-1600x1062.jpeg?w=800"},
  {id:412,name:"Door Basket",company:"LG",category:"Refrigerator Spare Parts",modelNo:"Refrigerator 190 Ltr",brandCode:"MAN62268908",description:"Door basket used in LG refrigerator 190 liter models (Alt: MAN62268906).",image:"https://www.lg.com/content/dam/channel/wcms/in/accessories_parts/lg-com/accessories/refrigerators/tray-basket/man62329501/gallery/refrigerators-tray-basket-man62329501-gallery-zoom-image-03-desktop.jpg/jcr:content/renditions/thum-1600x1062.jpeg?w=800"},
    {id:413,name:"Door Basket",company:"LG",category:"Refrigerator Spare Parts",modelNo:"Refrigerator 190 Ltr",brandCode:"MAN62250906",description:"Door basket for LG refrigerator 190 liter models (Alternate: MAN62250908).",image:"https://www.lg.com/content/dam/channel/wcms/in/accessories_parts/lg-com/accessories/refrigerators/tray-basket/man62329501/gallery/refrigerators-tray-basket-man62329501-gallery-zoom-image-03-desktop.jpg/jcr:content/renditions/thum-1600x1062.jpeg?w=800"},
    {id:414,name:"Door Basket",company:"LG",category:"Refrigerator Spare Parts",modelNo:"Refrigerator 300 Ltr",brandCode:"MAN62708302",description:"Door basket for LG refrigerator 300 liter models.",image:"https://www.lg.com/content/dam/channel/wcms/in/accessories_parts/lg-com/accessories/refrigerators/tray-basket/man62329501/gallery/refrigerators-tray-basket-man62329501-gallery-zoom-image-03-desktop.jpg/jcr:content/renditions/thum-1600x1062.jpeg?w=800"},
    {id:415,name:"Basket Door",company:"LG",category:"Refrigerator Spare Parts",modelNo:"Refrigerator 290–320 Ltr",brandCode:"MAN62688202",description:"Door basket used in LG refrigerator models with 290–320 liter capacity.",image:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQpStZcWMOe9Xt4XL5V6nz55DUKGk4WTRvMz9TtFTdCAhTr2RyVCfKLNziPSxWs7g50zfHVJofG5l4oEjODOXGvYVIebfio"},
    {id:416,name:"Basket Door",company:"LG",category:"Refrigerator Spare Parts",modelNo:"Refrigerator 290–320 Ltr",brandCode:"MAN62708202",description:"Door basket used in LG refrigerator models with 290–320 liter capacity.",image:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQpStZcWMOe9Xt4XL5V6nz55DUKGk4WTRvMz9TtFTdCAhTr2RyVCfKLNziPSxWs7g50zfHVJofG5l4oEjODOXGvYVIebfio"},
    {id:417,name:"Basket Door",company:"LG",category:"Refrigerator Spare Parts",modelNo:"Refrigerator 290–320 Ltr",brandCode:"MAN62708502",description:"Door basket used in LG refrigerator models with 290–320 liter capacity.",image:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQpStZcWMOe9Xt4XL5V6nz55DUKGk4WTRvMz9TtFTdCAhTr2RyVCfKLNziPSxWs7g50zfHVJofG5l4oEjODOXGvYVIebfio"},
    {id:418,name:"Door Basket",company:"LG",category:"Refrigerator Spare Parts",modelNo:"Refrigerator 190 Ltr",brandCode:"MAN62250908",description:"Door basket for LG refrigerator 190 liter models (Alternate: MAN62250906).",image:"https://www.lg.com/content/dam/channel/wcms/in/accessories_parts/lg-com/accessories/refrigerators/tray-basket/man62329501/gallery/refrigerators-tray-basket-man62329501-gallery-zoom-image-03-desktop.jpg/jcr:content/renditions/thum-1600x1062.jpeg?w=800"},
    {id:419,name:"Basket Door",company:"LG",category:"Refrigerator Spare Parts",modelNo:"Refrigerator Door Compartment",brandCode:"MAN61928502",description:"Door basket component used in LG refrigerator door storage section.",image:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQpStZcWMOe9Xt4XL5V6nz55DUKGk4WTRvMz9TtFTdCAhTr2RyVCfKLNziPSxWs7g50zfHVJofG5l4oEjODOXGvYVIebfio"},
    {id:420,name:"Basket Door",company:"LG",category:"Refrigerator Spare Parts",modelNo:"Refrigerator Door Compartment",brandCode:"MAN61928503",description:"Door basket component used in LG refrigerator door storage section.",image:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQpStZcWMOe9Xt4XL5V6nz55DUKGk4WTRvMz9TtFTdCAhTr2RyVCfKLNziPSxWs7g50zfHVJofG5l4oEjODOXGvYVIebfio"},
      {id:421,name:"Tray Fresh Room",company:"LG",category:"Refrigerator Spare Parts",modelNo:"Refrigerator 260 Ltr",brandCode:"3390JF1009A",description:"Fresh room tray used in LG refrigerator 260 liter models."},
      {id:422,name:"Tray Fresh Room",company:"LG",category:"Refrigerator Spare Parts",modelNo:"Refrigerator 230 Ltr",brandCode:"AJP72911311",description:"Fresh room tray used in LG refrigerator 230 liter models."},
      {id:423,name:"Controller Assembly Bi-Metal",company:"LG",category:"Refrigerator Spare Parts",modelNo:"Refrigerator 250 Ltr",brandCode:"6615JB2003V",description:"Bi-metal controller assembly used for refrigerator temperature control in 250 liter models."},
      {id:424,name:"Handle Refrigerator",company:"LG",category:"Refrigerator Spare Parts",modelNo:"Refrigerator Door Handle",brandCode:"3650JF1024A",description:"Refrigerator door handle used in LG refrigerator models."},
      {id:425,name:"Drier Assembly",company:"LG",category:"Refrigerator Spare Parts",modelNo:"Refrigerator Cooling System",brandCode:"ADH73490201",description:"Drier assembly used in LG refrigerator cooling system."},
      {id:426,name:"Handle Refrigerator",company:"LG",category:"Refrigerator Spare Parts",modelNo:"Refrigerator Door Handle",brandCode:"MEB62697214",description:"Refrigerator door handle used in LG refrigerator models."},
        {id:427,name:"Grille Assembly Fan",company:"LG",category:"Refrigerator Spare Parts",modelNo:"Refrigerator 335 Ltr",brandCode:"AEB75064611",description:"Fan grille assembly used in LG refrigerator 335 liter models."},
        {id:428,name:"Fan Motor AC",company:"LG",category:"Refrigerator Spare Parts",modelNo:"Refrigerator Fan Motor",brandCode:"4680JB1033F",description:"AC fan motor used in LG refrigerator cooling system."},
        {id:429,name:"Condenser Assembly Wire",company:"LG",category:"Refrigerator Spare Parts",modelNo:"Refrigerator 200 Ltr",brandCode:"ACG73804422",description:"Wire condenser assembly used in LG refrigerator 200 liter models."},
        {id:430,name:"Grille Assembly Fan",company:"LG",category:"Refrigerator Spare Parts",modelNo:"Refrigerator 240 Ltr",brandCode:"AEB75004908",description:"Fan grille assembly used in LG refrigerator 240 liter models."},
        {id:431,name:"Condenser Assembly Wire",company:"LG",category:"Refrigerator Spare Parts",modelNo:"Refrigerator 190 Ltr",brandCode:"ACG75884502",description:"Wire condenser assembly used in LG refrigerator 190 liter models."},
            {id:439,name:"Door Freeze Room",company:"LG",category:"Refrigerator Spare Parts",modelNo:"Refrigerator 190 Ltr Star 1",brandCode:"3580JF1005Y",description:"Freeze room door used in LG refrigerator 190 liter star-1 models (alternate 3580JF1005M).",image:"https://m.media-amazon.com/images/I/31pzHlYLpvL._SX300_SY300_QL70_ML2_.jpg"},
            {id:440,name:"Door Assembly Freeze Room",company:"LG",category:"Refrigerator Spare Parts",modelNo:"Refrigerator 220 Ltr",brandCode:"3581JF3006T",description:"Freeze room door assembly used in LG refrigerator 220 liter models (alternate 3581JF3006V).",image:"https://m.media-amazon.com/images/I/51mvB4ag1-L.jpg"},
            {id:441,name:"Door Assembly Freezer",company:"LG",category:"Refrigerator Spare Parts",modelNo:"Refrigerator 190 Ltr",brandCode:"ADC32664005",description:"Freezer door assembly used in LG refrigerator 190 liter models."},
            {id:442,name:"Frame Display",company:"LG",category:"Refrigerator Spare Parts",modelNo:"Refrigerator 240 Ltr",brandCode:"MDQ61868104",description:"Display frame assembly used in LG refrigerator 240 liter models."},
            {id:443,name:"Door Freeze Room",company:"LG",category:"Refrigerator Spare Parts",modelNo:"Refrigerator 190 Ltr Star 1",brandCode:"3580JF1005M",description:"Freeze room door used in LG refrigerator 190 liter star-1 models (alternate 3580JF1005Y).",image:"https://m.media-amazon.com/images/I/31pzHlYLpvL._SX300_SY300_QL70_ML2_.jpg"},
            {id:444,name:"Door Freeze Room",company:"LG",category:"Refrigerator Spare Parts",modelNo:"Refrigerator 190 Ltr Star 1",brandCode:"3580JF1005W",description:"Freeze room door used in LG refrigerator 190 liter star-1 models.",image:"https://m.media-amazon.com/images/I/31pzHlYLpvL._SX300_SY300_QL70_ML2_.jpg"},
            {id:445,name:"Evaporator Assembly",company:"LG",category:"Refrigerator Spare Parts",modelNo:"Refrigerator 360 Ltr",brandCode:"ADL73702907",description:"Evaporator assembly used in LG refrigerator 360 liter models.",image:"https://lgparts.com/cdn/shop/files/PD_0046_795_ADL73901318_Illustration.jpg?v=1717512616"},
            {id:446,name:"Evaporator Assembly",company:"LG",category:"Refrigerator Spare Parts",modelNo:"Refrigerator 360 Ltr",brandCode:"ADL73702909",description:"Evaporator assembly used in LG refrigerator 360 liter models (alternate ADL73702907).",image:"https://lgparts.com/cdn/shop/files/PD_0046_795_ADL73901318_Illustration.jpg?v=1717512616"},
            {id:447,name:"Freezer Frame Assembly",company:"LG",category:"Refrigerator Spare Parts",modelNo:"Refrigerator 188 Ltr",brandCode:"ADV74266041",description:"Freezer frame assembly used in LG refrigerator 188 liter models (alternate ADV74266034).",image:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTAJKYI1PIQg1pT4N0Xt9ONIh10A73XoU8IFCK8RrI8ds1nXCsyfqJdmiElA-tUhc1kwOKjciulqBU0Ie-FX0XOBGR7-RaTuLZF_sNjdw2cBRZvXpmYJ6VvoOE"},
          {id:432,name:"Drier DC",company:"LG",category:"Refrigerator Spare Parts",modelNo:"Refrigerator Cooling System",brandCode:"ADH73450205",description:"DC drier used in LG refrigerator cooling system."},
          {id:433,name:"Drier FF",company:"LG",category:"Refrigerator Spare Parts",modelNo:"Refrigerator Cooling System",brandCode:"ADH73450202",description:"FF type drier used in LG refrigerator cooling system."},
          {id:434,name:"Evaporator Assembly",company:"LG",category:"Refrigerator Spare Parts",modelNo:"Refrigerator 175 Ltr Star 1",brandCode:"5421JF1001D",description:"Evaporator assembly used in LG refrigerator 175 liter star-1 models.",image:"https://lgparts.com/cdn/shop/files/PD_0046_795_ADL73901318_Illustration.jpg?v=1717512616"},
          {id:435,name:"Evaporator Assembly",company:"LG",category:"Refrigerator Spare Parts",modelNo:"Refrigerator 190 Ltr",brandCode:"ADL36382814",description:"Evaporator assembly used in LG refrigerator 190 liter models.",image:"https://lgparts.com/cdn/shop/files/PD_0046_795_ADL73901318_Illustration.jpg?v=1717512616"},
          {id:436,name:"Evaporator Assembly",company:"LG",category:"Refrigerator Spare Parts",modelNo:"Refrigerator 230–270 Ltr Star 2.5",brandCode:"ADL72915401",description:"Evaporator assembly used in LG refrigerator 230–270 liter star-2.5 models.",image:"https://lgparts.com/cdn/shop/files/PD_0046_795_ADL73901318_Illustration.jpg?v=1717512616"},
          {id:437,name:"Evaporator Assembly",company:"LG",category:"Refrigerator Spare Parts",modelNo:"Refrigerator 195 Ltr Star 1.5",brandCode:"ADL36382802",description:"Evaporator assembly used in LG refrigerator 195 liter star-1.5 models.",image:"https://lgparts.com/cdn/shop/files/PD_0046_795_ADL73901318_Illustration.jpg?v=1717512616"},
          {id:438,name:"Evaporator Assembly",company:"LG",category:"Refrigerator Spare Parts",modelNo:"Refrigerator 195 Ltr Star 1.5",brandCode:"ADL36382806",description:"Evaporator assembly used in LG refrigerator 195 liter star-1.5 models (alternate ADL36382802).",image:"https://lgparts.com/cdn/shop/files/PD_0046_795_ADL73901318_Illustration.jpg?v=1717512616"},
  {id:448,name:"Door Assembly Freeze Room",company:"LG",category:"Refrigerator Spare Parts",modelNo:"240–280 Ltr",brandCode:"ADC72913323",description:"Freezer door assembly used in LG refrigerators with 240–280 liter capacity.",image:"https://m.media-amazon.com/images/I/51mvB4ag1-L.jpg"},
  {id:449,name:"Door Assembly Freeze Room",company:"LG",category:"Refrigerator Spare Parts",modelNo:"240–280 Ltr",brandCode:"ADC72913314",description:"Freezer door assembly designed for LG refrigerators with 240–280 liter capacity.",image:"https://m.media-amazon.com/images/I/51mvB4ag1-L.jpg"},
  {id:450,name:"Door Assembly Freeze Room",company:"LG",category:"Refrigerator Spare Parts",modelNo:"240–280 Ltr",brandCode:"ADC72913332",description:"Freezer door assembly compatible with LG refrigerators, alternate part for ADC72913314.",image:"https://m.media-amazon.com/images/I/51mvB4ag1-L.jpg"},
  {id:451,name:"Door Assembly Freezer",company:"LG",category:"Refrigerator Spare Parts",modelNo:"200 Ltr",brandCode:"ADC39243218",description:"Freezer door assembly used in LG refrigerators with 200 liter capacity."},
  {id:452,name:"Door Assembly Freezer",company:"LG",category:"Refrigerator Spare Parts",modelNo:"200 Ltr",brandCode:"ADC39243214",description:"Freezer door assembly designed for LG 200 liter refrigerators, alternate for ADC39243218."},
  {id:453,name:"Door Assembly Freezer",company:"LG",category:"Refrigerator Spare Parts",modelNo:"185 Ltr",brandCode:"ADC39243217",description:"Freezer door assembly suitable for LG refrigerators with 185 liter capacity."},
  {id:454,name:"Door Freeze Room",company:"LG",category:"Refrigerator Spare Parts",modelNo:"200 Ltr",brandCode:"MCV63333507",description:"Freeze room door used in LG refrigerators with 200 liter capacity.",image:"https://m.media-amazon.com/images/I/31pzHlYLpvL._SX300_SY300_QL70_ML2_.jpg"},
  {id:455,name:"Freezer Frame Assembly with Thermostat Holder",company:"LG",category:"Refrigerator Spare Parts",modelNo:"Freezer Frame Unit",brandCode:"6935JB2092T",description:"Freezer frame assembly with thermostat holder used to support freezer door components in LG refrigerators.",image:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTAJKYI1PIQg1pT4N0Xt9ONIh10A73XoU8IFCK8RrI8ds1nXCsyfqJdmiElA-tUhc1kwOKjciulqBU0Ie-FX0XOBGR7-RaTuLZF_sNjdw2cBRZvXpmYJ6VvoOE"},
    {id:456,name:"Thermostat DC Refrigerator",company:"LG",category:"Refrigerator Spare Parts",modelNo:"DC Refrigerator Thermostat",brandCode:"6930JG1002S",description:"Thermostat used for temperature control in LG DC refrigerators."},
    {id:457,name:"Thermostat",company:"LG",category:"Refrigerator Spare Parts",modelNo:"Standard Refrigerator Thermostat",brandCode:"6930JF1001G",description:"Thermostat assembly used for regulating temperature in LG refrigerators."},
    {id:458,name:"Thermostat 188 L",company:"LG",category:"Refrigerator Spare Parts",modelNo:"188 L Refrigerator Unit",brandCode:"EBG60660906",description:"Thermostat designed for LG refrigerators with 188 liter capacity for precise temperature control."},
    {id:459,name:"Frame Display Assembly",company:"LG",category:"Refrigerator Spare Parts",modelNo:"224 L Refrigerator Frame",brandCode:"MDQ61868114",description:"Display frame assembly used in LG 224 liter refrigerators (Alternate: ADL73741139)."},
    {id:460,name:"Controller Assembly",company:"LG",category:"Refrigerator Spare Parts",modelNo:"426 L Refrigerator Control Unit",brandCode:"4781JR2003Y",description:"Controller assembly used to manage electronic operations in LG 426 liter refrigerators."},
    {id:461,name:"Frame Assembly Display",company:"LG",category:"Refrigerator Spare Parts",modelNo:"185 L Refrigerator Frame",brandCode:"ADV74266043",description:"Display frame assembly designed for LG refrigerators with 185 liter capacity."},
      {id:462,name:"Gasket Assembly Door",company:"LG",category:"Refrigerator Spare Parts",modelNo:"200 Ltr Door Gasket",brandCode:"ADX73270901",description:"Door gasket assembly used for sealing LG refrigerator doors with 200 liter capacity."},
      {id:463,name:"Door Gasket",company:"LG",category:"Refrigerator Spare Parts",modelNo:"390 Ltr Refrigerator",brandCode:"4987JF1009G",description:"Door gasket designed for LG refrigerators with 390 liter capacity to maintain proper cooling seal."},
      {id:464,name:"Door Gasket",company:"LG",category:"Refrigerator Spare Parts",modelNo:"270 Ltr Refrigerator",brandCode:"ADX73410803",description:"Refrigerator door gasket used in LG 270 liter models for airtight door sealing."},
      {id:465,name:"Door Gasket",company:"LG",category:"Refrigerator Spare Parts",modelNo:"230 Ltr Refrigerator",brandCode:"4987JF1006G",description:"Door gasket suitable for LG refrigerators with 230 liter capacity."},
      {id:466,name:"Door Gasket",company:"LG",category:"Refrigerator Spare Parts",modelNo:"230 Ltr Refrigerator",brandCode:"ADX73410806",description:"Refrigerator door gasket used in LG 230 liter refrigerators for proper door sealing."},
      {id:467,name:"Gasket Assembly Door",company:"LG",category:"Refrigerator Spare Parts",modelNo:"180 Ltr Star 1",brandCode:"4987JF1008A",description:"Door gasket assembly for LG 180 liter star-1 refrigerators (Alternate: ADX73270902)."},
      {id:468,name:"Gasket Assembly Door",company:"LG",category:"Refrigerator Spare Parts",modelNo:"180 Ltr Star 1",brandCode:"ADX73270902",description:"Door gasket assembly used in LG 180 liter star-1 refrigerators (Alternate: 4987JF1008A)."},
      {id:469,name:"Gasket Assembly Door Omega-3",company:"LG",category:"Refrigerator Spare Parts",modelNo:"320 Ltr Omega-3 R Door",brandCode:"ADX73530407",description:"Door gasket assembly designed for LG Omega-3 refrigerators with 320 liter capacity."},
      {id:470,name:"Gasket Assembly Door Omega-4",company:"LG",category:"Refrigerator Spare Parts",modelNo:"300 Ltr Omega-4 R Door",brandCode:"ADX73530409",description:"Door gasket assembly for LG Omega-4 refrigerators with 300 liter capacity."},
      {id:471,name:"Gasket Assembly Door Omega-5",company:"LG",category:"Refrigerator Spare Parts",modelNo:"290 Ltr Omega-5 R Door",brandCode:"ADX73530410",description:"Door gasket assembly used in LG Omega-5 refrigerators with 290 liter capacity."},
      {id:472,name:"Door Gasket Single Door",company:"LG",category:"Refrigerator Spare Parts",modelNo:"270 Ltr Single Door",brandCode:"4987JF1006H",description:"Single door refrigerator gasket used in LG 270 liter models for proper sealing."},
        {id:473,name:"Tray Drip",company:"LG",category:"Refrigerator Spare Parts",modelNo:"175–200 Ltr Refrigerator",brandCode:"3390JF1028H",description:"Drip tray used in LG refrigerators with 175–200 liter capacity to collect defrost water."},
        {id:474,name:"Tray Drip",company:"LG",category:"Refrigerator Spare Parts",modelNo:"200–230 Ltr Refrigerator",brandCode:"MJS63831703",description:"Drip tray designed for LG refrigerators with 200–230 liter capacity for collecting condensation water."},
        {id:475,name:"Tray Drip",company:"LG",category:"Refrigerator Spare Parts",modelNo:"200 Ltr Refrigerator",brandCode:"MJS64072501",description:"Drip tray used in LG 200 liter refrigerators to collect defrost water."},
        {id:476,name:"Evaporator Assembly",company:"LG",category:"Refrigerator Spare Parts",modelNo:"335 Ltr Refrigerator",brandCode:"ADL73702906",description:"Evaporator assembly used for cooling in LG refrigerators with 335 liter capacity.",image:"https://lgparts.com/cdn/shop/files/PD_0046_795_ADL73901318_Illustration.jpg?v=1717512616"},
        {id:477,name:"Axial Fan Motor DC",company:"LG",category:"Refrigerator Spare Parts",modelNo:"DC Fan Motor Unit",brandCode:"EAU63425011",description:"DC axial fan motor used in LG refrigerators for internal air circulation."},
        {id:478,name:"Axial Fan Motor DC",company:"LG",category:"Refrigerator Spare Parts",modelNo:"DC Fan Motor Unit",brandCode:"EAU63425004",description:"DC axial fan motor designed for air circulation and cooling inside LG refrigerators."},      
    {id:479,name:"Tray Assembly Vegetable",company:"LG",category:"Refrigerator Spare Parts",modelNo:"200 Ltr Refrigerator",brandCode:"MJS63832006",description:"Vegetable tray assembly used in LG refrigerators with 200 liter capacity (Alternate: AJP76195205)."},
  {id:480,name:"Tray Vegetable",company:"LG",category:"Refrigerator Spare Parts",modelNo:"200 Ltr Refrigerator",brandCode:"AJP76195205",description:"Vegetable tray designed for LG refrigerators with 200 liter capacity (Alternate: MJS63832006)."},
  {id:481,name:"Tray Assembly Vegetable",company:"LG",category:"Refrigerator Spare Parts",modelNo:"300 Ltr Refrigerator",brandCode:"MJS63071703",description:"Vegetable tray assembly used for storing vegetables in LG refrigerators with 300 liter capacity."},
  {id:482,name:"Tray Assembly Vegetable",company:"LG",category:"Refrigerator Spare Parts",modelNo:"350 Ltr Refrigerator",brandCode:"3391JF1004B",description:"Vegetable tray assembly suitable for LG refrigerators with 350 liter capacity."},
  {id:483,name:"Tray Assembly Vegetable",company:"LG",category:"Refrigerator Spare Parts",modelNo:"190–200 Ltr Star 1.5",brandCode:"AJP73594801",description:"Vegetable tray assembly used in LG refrigerators with 190–200 liter capacity (Star 1.5 models)."},
  {id:484,name:"Tray Assembly Vegetable",company:"LG",category:"Refrigerator Spare Parts",modelNo:"290 Ltr Refrigerator",brandCode:"AJP74094404",description:"Vegetable tray assembly used in LG refrigerators with 290 liter capacity."},
  {id:485,name:"Tray Assembly Vegetable",company:"LG",category:"Refrigerator Spare Parts",modelNo:"290 Ltr Refrigerator",brandCode:"AJP74094401",description:"Vegetable tray assembly designed for LG refrigerators with 290 liter capacity."},
  {id:486,name:"Tray Assembly Vegetable",company:"LG",category:"Refrigerator Spare Parts",modelNo:"460 Ltr Refrigerator",brandCode:"AJP33094208",description:"Vegetable tray assembly suitable for LG refrigerators with 460 liter capacity."},
   {id:487,name:"Tray Assembly Vegetable",company:"LG",category:"Refrigerator Spare Parts",modelNo:"500 Ltr Refrigerator",brandCode:"AJP35811310",description:"Vegetable tray assembly designed for LG refrigerators with 500 liter capacity."},
    {id:488,name:"Tray Assembly Vegetable",company:"LG",category:"Refrigerator Spare Parts",modelNo:"175 Ltr Refrigerator",brandCode:"MJS63932101",description:"Vegetable tray assembly used in LG refrigerators with 175 liter capacity for vegetable storage."},
    {id:489,name:"Tray Assembly Vegetable",company:"LG",category:"Refrigerator Spare Parts",modelNo:"250 Ltr Refrigerator",brandCode:"AJP73275204",description:"Vegetable tray assembly suitable for LG refrigerators with 250 liter capacity."},
    {id:490,name:"Tray Vegetable",company:"LG",category:"Refrigerator Spare Parts",modelNo:"280 Ltr Refrigerator",brandCode:"MJS64112201",description:"Vegetable tray designed for LG refrigerators with 280 liter capacity."},
    {id:491,name:"Tray Vegetable",company:"LG",category:"Refrigerator Spare Parts",modelNo:"310 Ltr Refrigerator",brandCode:"MJS62711903",description:"Vegetable tray used in LG refrigerators with 310 liter capacity for vegetable storage."},
  {id:492,name:"Cover Assembly TV",company:"LG",category:"Refrigerator Spare Parts",modelNo:"380 Ltr Refrigerator",brandCode:"3551JF1003H",description:"TV cover assembly used in LG refrigerators with 380 liter capacity."},
      {id:493,name:"Cover TV",company:"LG",category:"Refrigerator Spare Parts",modelNo:"190 Ltr Refrigerator",brandCode:"3550JF1005G",description:"Refrigerator TV cover used in LG 190 liter models (Alternate: 3550JF1005E)."},
      {id:494,name:"Cover TV",company:"LG",category:"Refrigerator Spare Parts",modelNo:"190 Ltr Refrigerator",brandCode:"3550JF1005E",description:"TV cover designed for LG 190 liter refrigerators (Alternate: 3550JF1005G)."},
      {id:495,name:"Cover Assembly TV",company:"LG",category:"Refrigerator Spare Parts",modelNo:"290 Ltr Refrigerator",brandCode:"ACQ89947102",description:"TV cover assembly used in LG refrigerators with 290 liter capacity (Alt: ACQ89947101)."},
      {id:496,name:"Cover Assembly TV",company:"LG",category:"Refrigerator Spare Parts",modelNo:"400 Ltr Refrigerator",brandCode:"ACQ86119911",description:"TV cover assembly suitable for LG refrigerators with 400 liter capacity (Alt: ACQ86119903)."},
      {id:497,name:"Cover TV",company:"LG",category:"Refrigerator Spare Parts",modelNo:"230 Ltr Refrigerator",brandCode:"3550JF1003A",description:"Refrigerator TV cover designed for LG 230 liter models."},
      {id:498,name:"Cover Assembly TV",company:"LG",category:"Refrigerator Spare Parts",modelNo:"290 Ltr Refrigerator",brandCode:"ACQ87011503",description:"TV cover assembly used in LG refrigerators with 290 liter capacity."},
         {id:499,name:"Cover Assembly TV",company:"LG",category:"Refrigerator Spare Parts",modelNo:"290 Ltr Refrigerator",brandCode:"ACQ86242504",description:"TV cover assembly compatible with LG 290 liter refrigerators (Alternate: ACQ87011503)"},
  {id:500,name:"Relay PTC 2 Pin",company:"LG",category:"Refrigerator Spare Parts",modelNo:"PTC Relay 2 Pin",brandCode:"6749C-0014A",description:"PTC relay used for compressor starting in LG refrigerators."},
        {id:500,name:"Relay PTC 2 Pin",company:"LG",category:"Refrigerator Spare Parts",modelNo:"PTC Relay 2 Pin",brandCode:"6749C-0014A",description:"PTC relay used for compressor starting in LG refrigerators."},
  {id:502,name:"Heater Plate Cutting AL 220V",company:"LG",category:"Refrigerator Spare Parts",modelNo:"220V Defrost Heater",brandCode:"5300JB1040A",description:"Aluminum heater plate used in LG refrigerators for defrost cycle operations."},
  {id:503,name:"Thermistor Assembly PTC",company:"LG",category:"Refrigerator Spare Parts",modelNo:"PTC Thermistor Unit",brandCode:"EBG62865805",description:"PTC thermistor assembly used for temperature monitoring (Alt: EBG60658606)."},
  {id:504,name:"Thermistor Assembly PTC",company:"LG",category:"Refrigerator Spare Parts",modelNo:"PTC Thermistor Unit",brandCode:"EBG60658606",description:"Thermistor assembly used for temperature sensing in LG refrigerators (Alt: EBG62865805)."},
  {id:505,name:"Thermistor Assembly PTC",company:"LG",category:"Refrigerator Spare Parts",modelNo:"PTC Thermistor Unit",brandCode:"EBG62865804",description:"PTC thermistor assembly used for compressor temperature control (Alt: 6749C-0014C)."},
  {id:506,name:"Thermistor Assembly PTC",company:"LG",category:"Refrigerator Spare Parts",modelNo:"PTC Thermistor Unit",brandCode:"6749C-0014C",description:"Thermistor assembly used for temperature sensing in LG refrigeration systems."},
  {id:507,name:"Thermistor Assembly PTC 1 Pin",company:"LG",category:"Refrigerator Spare Parts",modelNo:"1 Pin PTC Thermistor",brandCode:"EBG62865905",description:"PTC thermistor assembly with 1-pin connector for LG refrigerator systems."},
  {id:508,name:"Motor AC",company:"LG",category:"Refrigerator Spare Parts",modelNo:"AC Motor Unit",brandCode:"4680JB1035G",description:"AC motor used for refrigerator internal fan operation."},
  {id:509,name:"Motor AC",company:"LG",category:"Refrigerator Spare Parts",modelNo:"AC Motor Unit",brandCode:"4680JB1035C",description:"AC motor used for air circulation inside LG refrigerators."},
  {id:510,name:"Overload Protect",company:"LG",category:"Refrigerator Spare Parts",modelNo:"Compressor Overload Protector",brandCode:"6750C-0004B",description:"Overload protector used to prevent compressor overheating."},
  {id:511,name:"Overload Protect",company:"LG",category:"Refrigerator Spare Parts",modelNo:"Compressor Protection Unit",brandCode:"6750CN0005E",description:"Compressor overload protection device for LG refrigerators."},
  {id:512,name:"Overload Protect",company:"LG",category:"Refrigerator Spare Parts",modelNo:"Compressor Safety Unit",brandCode:"6750C-0004S",description:"Safety overload protector used in refrigerator compressors."},
  {id:513,name:"Controller Assembly",company:"LG",category:"Refrigerator Spare Parts",modelNo:"Refrigerator Control Module",brandCode:"6615JB2005C",description:"Electronic controller assembly used to manage refrigerator functions."},
  {id:514,name:"Fan Motor DC",company:"LG",category:"Refrigerator Spare Parts",modelNo:"DC Fan Motor Unit",brandCode:"EAU62963004",description:"DC fan motor used for air circulation in LG refrigerators."},
  {id:515,name:"Axial Fan Motor DC",company:"LG",category:"Refrigerator Spare Parts",modelNo:"DC Axial Fan Motor",brandCode:"EAU63425014",description:"Axial fan motor used for cooling airflow in refrigerator compartments."},
  {id:516,name:"Axial Fan Motor DC",company:"LG",category:"Refrigerator Spare Parts",modelNo:"DC Axial Fan Motor",brandCode:"EAU63425012",description:"Axial DC fan motor used in LG refrigerator cooling systems."},
  {id:517,name:"Drier Assembly",company:"LG",category:"Refrigerator Spare Parts",modelNo:"Refrigerant Drier Unit",brandCode:"ADH73150208",description:"Drier assembly used to remove moisture from refrigeration systems."},
  {id:518,name:"Module Defrost Timer",company:"LG",category:"Refrigerator Spare Parts",modelNo:"Defrost Timer Module",brandCode:"6914JG2001D",description:"Defrost timer module used to control defrost cycles in refrigerators."},
  {id:519,name:"Module Defrost Timer",company:"LG",category:"Refrigerator Spare Parts",modelNo:"Defrost Timer Module",brandCode:"6914JG2001A",description:"Defrost timer module for LG refrigerators (Alternate: 6914JG2001D)."},
  {id:520,name:"Fan Motor DC",company:"LG",category:"Refrigerator Spare Parts",modelNo:"DC Fan Motor Unit",brandCode:"EAU65058314",description:"DC fan motor used for airflow circulation inside LG refrigerators."},
  {id:521,name:"Grille Assembly Fan",company:"LG",category:"Refrigerator Spare Parts",modelNo:"Fan Grille Assembly",brandCode:"AEB75004910",description:"Fan grille assembly used to protect internal refrigerator fan systems."},
  {id:522,name:"Sensor Temperature",company:"LG",category:"Refrigerator Spare Parts",modelNo:"Temperature Sensor Unit",brandCode:"6500JB1008M",description:"Temperature sensor used to monitor cooling conditions inside refrigerators."},
  {id:523,name:"Evaporator Assembly Aluminium",company:"LG",category:"Refrigerator Spare Parts",modelNo:"190 Ltr Evaporator Unit",brandCode:"ADL36382823",description:"Aluminum evaporator assembly used in LG refrigerators with 190 liter capacity."},
  {id:524,name:"Evaporator Assembly",company:"LG",category:"Refrigerator Spare Parts",modelNo:"200 Ltr Star 2",brandCode:"5421JF3006C",description:"Evaporator assembly used for cooling in 200 liter LG refrigerators.",image:"https://lgparts.com/cdn/shop/files/PD_0046_795_ADL73901318_Illustration.jpg?v=1717512616"},
  {id:525,name:"Grille Assembly Fan",company:"LG",category:"Refrigerator Spare Parts",modelNo:"Fan Grille Unit",brandCode:"AEB75425104",description:"Fan grille assembly used in LG refrigerators (Alt: AEB75425107)."},
  {id:526,name:"Grille Assembly Fan",company:"LG",category:"Refrigerator Spare Parts",modelNo:"Fan Grille Unit",brandCode:"AEB75425107",description:"Fan grille assembly compatible with LG refrigerator cooling systems."},
    {id:527,name:"Thermostat DC Single Door",company:"LG",category:"Refrigerator Spare Parts",modelNo:"235 L R600A Thermostat",brandCode:"6930JB1005Z",description:"Thermostat used for temperature control in single door LG refrigerators."},
    {id:528,name:"Thermostat DC Single Door",company:"LG",category:"Refrigerator Spare Parts",modelNo:"190 L R600A Thermostat",brandCode:"EBG62505701",description:"DC thermostat designed for LG refrigerators with R600A refrigerant."},
    {id:529,name:"Switch Push Button",company:"LG",category:"Refrigerator Spare Parts",modelNo:"Push Button Switch Unit",brandCode:"EBF62474701",description:"Push button switch used for controlling refrigerator functions."},
    {id:530,name:"Thermostat R600A",company:"LG",category:"Refrigerator Spare Parts",modelNo:"190 L Thermostat Unit",brandCode:"6930JB1005W",description:"Thermostat used in LG refrigerators using R600A refrigerant."},
      {id:531,name:"Evaporator Assembly Star 1",company:"LG",category:"Refrigerator Spare Parts",modelNo:"190 L Evaporator Unit",brandCode:"ADL36382819",description:"Evaporator assembly used for cooling in LG refrigerators."},
      {id:532,name:"PCB Assembly Sub Knob Dial",company:"LG",category:"Refrigerator Spare Parts",modelNo:"Rotary Switch PCB Unit",brandCode:"EBR77678901",description:"PCB assembly with rotary dial used for refrigerator control systems."},
      {id:533,name:"Sensor Harness Assembly",company:"LG",category:"Refrigerator Spare Parts",modelNo:"Sensor Wiring Harness",brandCode:"EAD62346502",description:"Sensor harness assembly used for connecting refrigerator temperature sensors."},
      {id:534,name:"Sensor Temperature",company:"LG",category:"Refrigerator Spare Parts",modelNo:"Temperature Sensor Unit",brandCode:"6500JB2001L",description:"Temperature sensor used for monitoring refrigerator cooling levels."},
      {id:535,name:"Evaporator Assembly",company:"LG",category:"Refrigerator Spare Parts",modelNo:"188 L Evaporator Unit",brandCode:"5421JF1025J",description:"Evaporator assembly designed for LG refrigerators with 188 liter capacity.",image:"https://lgparts.com/cdn/shop/files/PD_0046_795_ADL73901318_Illustration.jpg?v=1717512616"},
      {id:536,name:"Evaporator Assembly",company:"LG",category:"Refrigerator Spare Parts",modelNo:"190 L Evaporator Unit",brandCode:"ADL36382825",description:"Cooling evaporator assembly for LG refrigerator systems.",image:"https://lgparts.com/cdn/shop/files/PD_0046_795_ADL73901318_Illustration.jpg?v=1717512616"},
      {id:537,name:"Refrigerant Gas R134A",company:"LG",category:"Refrigerator Spare Parts",modelNo:"Refrigerant Can",brandCode:"CLS32183602",description:"R134A refrigerant gas used in refrigerator cooling systems."},
      {id:538,name:"Refrigerator Adjustable Stand",company:"LG",category:"Refrigerator Spare Parts",modelNo:"Adjustable Stand Unit",brandCode:"CLS32170401",description:"Adjustable stand used for leveling and stabilizing LG refrigerators."},
        {id:539,name:"Clutch Assembly",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Clutch Unit",brandCode:"4265EA1016A",description:"Clutch assembly used in LG washing machines for controlling wash and spin transmission."},
        {id:540,name:"Valve Assembly Plunger",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Plunger Valve Unit",brandCode:"AJU72910711",description:"Plunger valve assembly used to regulate water flow in LG washing machines."},
        {id:541,name:"Valve Assembly Plunger",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Plunger Valve Unit",brandCode:"AJU72910710",description:"Water plunger valve assembly used for inlet water control in LG washing machines."},
        {id:542,name:"Valve Assembly Plunger",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Plunger Valve Unit",brandCode:"5221EU1001A",description:"Water valve assembly used to control water intake in LG washing machines."},
        {id:543,name:"Valve Assembly Plunger",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Plunger Valve Unit",brandCode:"AJU75632603",description:"Plunger valve assembly used for regulating water flow in LG washing machine systems."},
        {id:544,name:"Clutch Assembly",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Clutch Unit",brandCode:"4265EA1006J",description:"Clutch assembly used in LG washing machines for wash and spin drive control (Alt: 4265EY1003T)."},
        {id:545,name:"Clutch Assembly",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Clutch Unit",brandCode:"4265EY1003T",description:"Alternate clutch assembly compatible with LG washing machines (Alt: 4265EA1006J)."},
        {id:546,name:"Valve Assembly Plunger",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Plunger Valve Unit",brandCode:"AJU75332404",description:"Plunger valve assembly used to control water flow in LG washing machines."},
          {id:547,name:"Motor Assembly DC Clutch",company:"LG",category:"Washing Machine Spare Parts",modelNo:"DC Clutch Motor Unit",brandCode:"EAU63683502",description:"DC clutch motor assembly used for driving clutch mechanism in LG washing machines."},
          {id:548,name:"Bellows",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Bellows Unit",brandCode:"4378EU2001A",description:"Rubber bellows used in washing machines for sealing and flexible water flow connections."},
          {id:549,name:"Bellows Plunger Valve",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Valve Bellows Unit",brandCode:"MAR61901903",description:"Bellows used in plunger valve assemblies for water flow control in washing machines."},
          {id:550,name:"Motor Assembly AC Drain Top Load",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Drain Motor Unit",brandCode:"4681EU1006B",description:"AC drain motor used in LG top-load washing machines for water drainage."},
          {id:551,name:"Valve Assembly Plunger",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Plunger Valve Unit",brandCode:"AJU75332401",description:"Plunger valve assembly used for regulating inlet water flow in washing machines."},
          {id:552,name:"Valve Assembly Plunger",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Plunger Valve Unit",brandCode:"AJU75632607",description:"Water plunger valve assembly used in LG washing machines for water intake control."},
          {id:553,name:"Gasket Front Load",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Front Load Door Gasket",brandCode:"MDS61952208",description:"Door gasket used in LG front-load washing machines for sealing the drum opening."},
          {id:554,name:"Gasket Front Load",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Front Load Door Gasket",brandCode:"MDS63939301",description:"Front load washer gasket used to prevent water leakage during washing cycles."},
          {id:555,name:"Casing Assembly Gear Box SA Washer",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Gearbox Casing Unit",brandCode:"4275EY1001C",description:"Gearbox casing assembly used in semi-automatic washing machines."},
          {id:556,name:"Gasket",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Washer Gasket Unit",brandCode:"MDS41955009",description:"Gasket used in washing machines for sealing internal components and preventing leaks."},
          {id:557,name:"Gasket",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Washer Gasket Unit",brandCode:"MDS63985703",description:"Washing machine gasket compatible with LG washer models (Alt: MDS63985701)."},
          {id:558,name:"Gasket",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Washer Gasket Unit",brandCode:"MDS63985701",description:"Alternate gasket assembly used in LG washing machines (Alt: MDS63985703)."},
          {id:559,name:"Gasket",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Washer Seal Ring",brandCode:"4036FR4043G",description:"Washer gasket used for sealing washing machine components."},
          {id:560,name:"Cover Anti Rat",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Anti Rat Cover Unit",brandCode:"3550EU1005G",description:"Protective anti-rat cover used at the base of LG washing machines."},
          {id:561,name:"Cover Anti Rat",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Anti Rat Cover Unit",brandCode:"3550EY1031D",description:"Anti-rat base cover designed to protect washing machine internal wiring and components."},
          {id:562,name:"Supporter Holder",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Holder Support Unit",brandCode:"MJH62796101",description:"Support holder used in LG washing machines to secure internal components."},
          {id:563,name:"Damper Assembly Vibration",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Vibration Damper Unit",brandCode:"4901FW3165D",description:"Vibration damper assembly used to reduce washing machine movement during operation."},
          {id:564,name:"Buzzer Magnetic",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Magnetic Buzzer Unit",brandCode:"WI03-00159F",description:"Magnetic buzzer used in washing machines for alert and sound notifications."},
          {id:565,name:"Power Cord Assembly",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Power Cable Unit",brandCode:"EAD63747605",description:"Power cord assembly used for supplying electrical power to LG washing machines."},
            {id:566,name:"Drain Hose Assembly",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Drain Hose Unit",brandCode:"5215EU3001C",description:"Drain hose assembly used in LG washing machines for draining wastewater."},
            {id:567,name:"Sleeve Plunger Valve",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Valve Sleeve Unit",brandCode:"4360FW3175B",description:"Sleeve component used in plunger valve assemblies for water control."},
            {id:568,name:"Safety Cover Upper",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Upper Safety Cover",brandCode:"MCK63774301",description:"Upper safety cover used to protect internal washing machine components."},
            {id:569,name:"Lever Selector SA Washer",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Selector Lever Unit",brandCode:"4988FW1099A",description:"Selector lever used in semi-automatic washing machines for program selection."},
            {id:570,name:"Pulley Pulsator SA Washer",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Pulsator Pulley Unit",brandCode:"MGN37865301",description:"Pulsator pulley used in semi-automatic washers for drum rotation."},
            {id:571,name:"Cover Safety Lower",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Lower Safety Cover",brandCode:"MCK67749704",description:"Lower safety cover used to protect the base area of LG washing machines."},
            {id:572,name:"Switch Assembly Sensor Top Load Washer",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Sensor Switch Unit",brandCode:"6501EA1001C",description:"Sensor switch assembly used in LG top load washing machines."},
            {id:573,name:"Switch Assembly Sensor",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Sensor Switch Unit",brandCode:"EBF62754509",description:"Sensor switch assembly used for detecting machine conditions."},
            {id:574,name:"Pulsator Roller Assembly SA Washer",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Pulsator Roller Unit",brandCode:"AHJ33016306",description:"Pulsator roller assembly used in semi-automatic washing machines."},
            {id:575,name:"Switch Assembly Sensor",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Sensor Switch Unit",brandCode:"EBF62754510",description:"Sensor switch assembly used for operational detection in LG washing machines."},
            {id:576,name:"Basket Assembly Spin Dryer",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Spin Dryer Basket Unit",brandCode:"AAP72910804",description:"Spin dryer basket assembly used in LG washing machines."},
            {id:577,name:"Brake Assembly",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Brake Unit",brandCode:"4421EU2001A",description:"Brake assembly used to control spin drum stopping in washing machines."},
            {id:578,name:"Pulsator Assembly SA Washer",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Pulsator Unit",brandCode:"5845FW1133E",description:"Pulsator assembly used in semi-automatic washing machines."},
            {id:579,name:"Pulsator Assembly FA Washer",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Pulsator Unit",brandCode:"5845EU1002Q",description:"Pulsator assembly used in fully automatic washing machines."},
            {id:580,name:"Pulsator Assembly SA Washer",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Pulsator Unit",brandCode:"5845EU1011D",description:"Pulsator assembly designed for LG semi-automatic washing machines."},
            {id:581,name:"Pulsator Assembly FA Washer",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Pulsator Unit",brandCode:"5845EU1003J",description:"Pulsator assembly used for washing drum rotation."},
            {id:582,name:"Pulsator Assembly SA Washer",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Pulsator Unit",brandCode:"5845EU1005E",description:"Pulsator assembly used in LG semi-automatic washers."},
            {id:583,name:"Pulsator Assembly SA Washer",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Pulsator Unit",brandCode:"AGZ72910401",description:"High-capacity pulsator assembly used in LG washing machines."},
            {id:584,name:"Cover Safety",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Safety Cover Unit",brandCode:"MCK67565201",description:"Safety cover used to protect internal drum components."},
            {id:585,name:"Cover Safety",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Safety Cover Unit",brandCode:"MCK61963102",description:"Protective safety cover used in LG washers."},
            {id:586,name:"Cover Safety",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Safety Cover Unit",brandCode:"MCK62969005",description:"Cover component used for safety protection in washing machines."},
            {id:587,name:"Pulsator Assembly",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Pulsator Unit",brandCode:"AGZ33016409",description:"Pulsator assembly used for rotating clothes during washing."},
            {id:588,name:"Cover Safety",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Safety Cover Unit",brandCode:"MCK69263001",description:"Safety cover used in LG washing machine drum assemblies."},
            {id:589,name:"Pulsator Assembly SA Washer",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Pulsator Unit",brandCode:"AGZ72930604",description:"Pulsator assembly used in LG semi-automatic washing machines (Alt: AGZ72930601)."},
            {id:590,name:"Pulsator Assembly",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Pulsator Unit",brandCode:"AGZ72930601",description:"Alternate pulsator assembly compatible with LG washers (Alt: AGZ72930604)."},
            {id:591,name:"Cover Assembly Spin Dryer",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Spin Dryer Lid Unit",brandCode:"ACQ91491623",description:"Spin dryer cover assembly used in LG semi-automatic washing machines."},
            {id:592,name:"Cover Assembly Spin Dryer",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Spin Dryer Lid Unit",brandCode:"ACQ91491603",description:"Spin dryer cover assembly used for protecting the spin tub."},
            {id:593,name:"Cover Assembly Spin Dryer",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Spin Dryer Lid Unit",brandCode:"ACQ91491604",description:"Spin dryer lid cover compatible with LG washing machines."},
            {id:594,name:"Spin Lid Assembly",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Spin Lid Unit",brandCode:"ACQ91491609",description:"Spin lid assembly used for covering the spin dryer compartment."},
            {id:595,name:"Spin Lid Assembly",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Spin Lid Unit",brandCode:"ACQ91491626",description:"Spin lid assembly used in LG washing machines for spin compartment cover."},
            {id:596,name:"Cover Assembly Spin Dryer",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Spin Dryer Cover Unit",brandCode:"ACQ91491802",description:"Spin dryer cover assembly compatible with LG washers (Alt: ACQ80789335)."},
            {id:597,name:"Spin Lid Assembly",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Spin Lid Unit",brandCode:"ACQ91491812",description:"Spin lid assembly used to secure the spin dryer section."},
            {id:598,name:"Spin Lid Assembly",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Spin Lid Unit",brandCode:"ACQ91491624",description:"Spin lid assembly compatible with LG washing machines (Alt: ACQ91491602)."},
              {id:598,name:"Spin Lid Assembly",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Spin Lid Unit",brandCode:"ACQ91491624",description:"Spin lid assembly compatible with LG washing machines (Alt: ACQ91491602)."},
            {id:599,name:"Spin Lid Assembly",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Spin Lid Unit",brandCode:"ACQ91491625",description:"Spin lid assembly used for covering the spin dryer section in LG washing machines."},
              {id:600,name:"Cover Assembly Spin Dryer",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Spin Dryer Cover Unit",brandCode:"ACQ91491605",description:"Spin dryer cover assembly used to protect the spin tub in LG washing machines."},
              {id:601,name:"Spin Lid Assembly",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Spin Lid Unit",brandCode:"MCK67987406",description:"Spin lid assembly designed for LG washing machines to cover the spin compartment."},
              {id:602,name:"Spin Lid Assembly",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Spin Lid Unit",brandCode:"MCK62258107",description:"Spin lid assembly used in LG washers to secure the spin dryer compartment."},
              {id:603,name:"Spin Lid Assembly",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Spin Lid Unit",brandCode:"ACQ91491602",description:"Spin lid assembly compatible with LG washers (Alt: ACQ91491624)."},
              {id:604,name:"Spin Lid Assembly",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Spin Lid Unit",brandCode:"ACQ91491624",description:"Spin lid assembly used for covering the spin tub of LG washing machines."},
              {id:605,name:"Bellows Assembly",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Bellows Unit",brandCode:"4739EY2001K",description:"Bellows assembly used for flexible water flow and sealing in washing machines."},
              {id:606,name:"Spin Motor SAWM",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Spin Motor Unit",brandCode:"EAU60712816",description:"Spin motor used in semi-automatic washing machines (Alt: 4681EU1004K)."},
              {id:607,name:"Motor AC Washing Machine",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Washing Machine Motor Unit",brandCode:"4681EU1004K",description:"AC motor used in LG washing machines for drum rotation (Alt: EAU60712816)."},
              {id:608,name:"Wash Motor SAWM",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Wash Motor Unit",brandCode:"EAU60712717",description:"Washing motor used in semi-automatic washing machines for agitation."},
              {id:609,name:"Belt V SA 22 No",company:"LG",category:"Washing Machine Spare Parts",modelNo:"V Belt Unit",brandCode:"4400EU2002E",description:"V-belt used for transmitting power between motor and drum."},
              {id:610,name:"Suspension Assembly Blue",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Suspension Unit",brandCode:"4902EU2001B",description:"Suspension assembly used to stabilize washing machine drum during operation."},
              {id:611,name:"Suspension Assembly White",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Suspension Unit",brandCode:"4902EU2001A",description:"Suspension assembly designed to absorb vibration in washing machines."},
              {id:612,name:"Spin Motor SAWM",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Spin Motor Unit",brandCode:"EAU63063303",description:"Spin motor used in LG washers (Alt: 4681EU1003H)."},
              {id:613,name:"Spin Motor SAWM",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Spin Motor Unit",brandCode:"4681EU1003H",description:"Spin motor compatible with LG washing machines (Alt: EAU63063303)."},
              {id:614,name:"Filter Assembly Rotation",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Rotation Filter Unit",brandCode:"5230FW3160G",description:"Rotation filter assembly used to trap lint and debris during washing."},
              {id:615,name:"Filter Assembly Mesh",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Mesh Filter Unit",brandCode:"ADQ36973301",description:"Mesh filter assembly used to collect lint from wash water."},
              {id:616,name:"Filter",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Washer Filter Unit",brandCode:"MDJ61908603",description:"Washing machine filter used to trap lint and small debris."},
              {id:617,name:"Filter Assembly Overflow",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Overflow Filter Unit",brandCode:"ADQ33303302",description:"Overflow filter assembly used to prevent debris from entering drainage system."},
              {id:618,name:"Filter Assembly Overflow",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Overflow Filter Unit",brandCode:"ADQ73493904",description:"Overflow filter used for maintaining clean water circulation."},
              {id:619,name:"Filter",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Washer Filter Unit",brandCode:"MDJ61955204",description:"Washing machine lint filter used in LG washers."},
              {id:620,name:"Filter Assembly Lint",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Lint Filter Unit",brandCode:"5231EU2001E",description:"Lint filter assembly used to trap fibers and debris during washing cycles."},
              {id:621,name:"Capacitor Assembly",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Capacitor Unit",brandCode:"EAE64282012",description:"Capacitor assembly used for motor startup and power regulation."},
              {id:622,name:"Capacitor Assembly",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Capacitor Unit",brandCode:"EAE64282002",description:"Motor capacitor assembly used in washing machines (Alt: EAE62843203)."},
              {id:623,name:"Capacitor Assembly",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Capacitor Unit",brandCode:"EAE62843203",description:"Capacitor assembly compatible with LG washing machines (Alt: EAE64282002)."},
              {id:624,name:"Filter Assembly Rotation SA Washer",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Rotation Filter Unit",brandCode:"ADQ33118102",description:"Rotation filter assembly used in semi-automatic washers."},
              {id:625,name:"Knob Switch",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Switch Knob Unit",brandCode:"AEZ75773701",description:"Switch knob used to operate washing machine control panels."},
              {id:626,name:"Screw Customized",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Customized Screw Unit",brandCode:"FAB30205908",description:"Custom screw used for assembling washing machine components."},
              {id:627,name:"Damper Assembly Friction",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Friction Damper Unit",brandCode:"4901ER2003B",description:"Friction damper assembly used to absorb vibration in washing machines."},
              {id:628,name:"Damper Assembly Friction",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Friction Damper Unit",brandCode:"4901ER2003A",description:"Friction damper assembly used for shock absorption (Alt: 4901ER2003K)."},
              {id:629,name:"Damper Assembly Friction",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Friction Damper Unit",brandCode:"4901ER2003K",description:"Alternate friction damper assembly compatible with LG washers."},
              {id:630,name:"Module Double Wash Timer",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Double Wash Timer Module",brandCode:"EAT35074112",description:"Timer module used for controlling wash cycle duration."},
              {id:631,name:"Wash Timer Double",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Double Wash Timer Unit",brandCode:"6915EU1004N",description:"Wash timer module used for dual wash cycles (Alt: 6915EU1004P)."},
              {id:632,name:"Spin Timer",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Spin Timer Unit",brandCode:"6915EU1007C",description:"Spin timer module used to control spin cycle timing (Alt: 6915EU1007G)."},
              {id:633,name:"Damper Assembly Friction",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Friction Damper Unit",brandCode:"383EER3001K",description:"Friction damper assembly used to reduce vibration during washing machine operation."},
              {id:634,name:"Timer Module Wash",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Wash Timer Unit",brandCode:"6915EU1004P",description:"Wash timer module used to control washing cycle duration in LG washing machines."},
              {id:635,name:"Spin Timer Module",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Spin Timer Unit",brandCode:"6915EU1007G",description:"Spin timer module used for controlling spin cycle timing."},
              {id:636,name:"Water Level Sensor Assembly",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Water Level Sensor Unit",brandCode:"6501EA1002A",description:"Sensor assembly used to detect water level inside washing machine drum."},
              {id:637,name:"Drain Pump Assembly",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Drain Pump Unit",brandCode:"4681EA2001T",description:"Drain pump assembly used to remove wastewater from washing machines."},
              {id:638,name:"Pump Motor Drain",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Drain Motor Unit",brandCode:"4681EA2002B",description:"Drain pump motor used in LG washing machines for water discharge."},
              {id:639,name:"Door Lock Assembly Front Load",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Door Lock Unit",brandCode:"EBF61315802",description:"Door lock assembly used in front load washing machines for safety during operation."},
              {id:640,name:"Door Lock Switch",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Lock Switch Unit",brandCode:"EBF61315803",description:"Door lock switch used to secure washing machine door during wash cycle."},
              {id:641,name:"PCB Control Board Assembly",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Control PCB Unit",brandCode:"EBR76262102",description:"Electronic control board used to manage washing machine operations."},
              {id:642,name:"Control PCB Module",company:"LG",category:"Washing Machine Spare Parts",modelNo:"PCB Module Unit",brandCode:"EBR76262103",description:"PCB module responsible for electronic control functions in LG washers."},
              {id:643,name:"Tub Bearing Assembly",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Drum Bearing Unit",brandCode:"MAP61913701",description:"Bearing assembly used to support washing machine drum rotation."},
              {id:644,name:"Bearing Housing Assembly",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Bearing Housing Unit",brandCode:"MDS62012401",description:"Bearing housing used for stabilizing drum bearing components."},
              {id:645,name:"Seal Oil Assembly",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Oil Seal Unit",brandCode:"4036ER2003A",description:"Oil seal assembly used to prevent water leakage in drum shaft area."},
              {id:646,name:"Drum Shaft Assembly",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Drum Shaft Unit",brandCode:"4434ER0002A",description:"Shaft assembly used for connecting drum to drive motor."},
              {id:647,name:"Heater Assembly",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Heater Unit",brandCode:"AEG33121501",description:"Heating element used in front load washing machines for water heating."},
              {id:648,name:"Temperature Sensor Assembly",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Temperature Sensor Unit",brandCode:"6501KW2002A",description:"Sensor used to detect water temperature during washing cycles."},
              {id:649,name:"Wiring Harness Assembly",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Harness Unit",brandCode:"EAD62346502",description:"Wiring harness used to connect electrical components inside washing machines."},
              {id:650,name:"Power Filter Assembly",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Power Filter Unit",brandCode:"EAM60991301",description:"Power filter assembly used to stabilize electrical input."},
              {id:651,name:"Control Panel Assembly",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Control Panel Unit",brandCode:"ACQ87532102",description:"Control panel assembly used to operate washing machine functions."},
              {id:652,name:"Display Panel Assembly",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Display Panel Unit",brandCode:"ACQ87532103",description:"Display panel assembly used to show wash program and status."},
              {id:653,name:"Knob Control Dial",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Control Dial Unit",brandCode:"AEZ73293801",description:"Control knob used for selecting wash programs."},
              {id:654,name:"Button Switch Assembly",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Button Switch Unit",brandCode:"EBF62474702",description:"Push button switch assembly used in washing machine control panels."},
              {id:655,name:"Cabinet Assembly Semi Automatic",company:"LG",category:"Washing Machine Spare Parts",modelNo:"9 Kg Semi Automatic Washer",brandCode:"ABJ73868019",description:"Cabinet assembly used for LG 9 kg semi-automatic washing machines."},
              {id:656,name:"Cabinet Assembly Fully Automatic",company:"LG",category:"Washing Machine Spare Parts",modelNo:"10 Kg Fully Automatic Washer",brandCode:"ABJ74227443",description:"Cabinet assembly designed for LG 10 kg fully automatic washing machines."},
              {id:657,name:"Cabinet Assembly Fully Automatic Top Load Grey",company:"LG",category:"Washing Machine Spare Parts",modelNo:"7.5 Kg Top Load Washer",brandCode:"ABJ74227453",description:"Cabinet assembly used in LG 7.5 kg fully automatic top load washing machines (Grey)."},
              {id:658,name:"Cabinet Assembly Fully Automatic Top Load White",company:"LG",category:"Washing Machine Spare Parts",modelNo:"7.5 Kg Top Load Washer",brandCode:"ABJ74227406",description:"Cabinet assembly compatible with LG 7.5 kg fully automatic top load washing machines (White)."},
              {id:659,name:"Cabinet Assembly Fully Automatic Top Load Brown",company:"LG",category:"Washing Machine Spare Parts",modelNo:"8 Kg Top Load Washer",brandCode:"ABJ74227442",description:"Cabinet assembly designed for LG 8 kg fully automatic top load washing machines (Brown)."},
              {id:660,name:"Panel Assembly Semi Automatic",company:"LG",category:"Washing Machine Spare Parts",modelNo:"7 Kg Washer Panel",brandCode:"AGL77336406",description:"Control panel assembly used in LG 7 kg semi-automatic washing machines."},
              {id:661,name:"Panel Assembly Semi Automatic",company:"LG",category:"Washing Machine Spare Parts",modelNo:"7.5 Kg Washer Panel",brandCode:"AGL77336404",description:"Control panel assembly designed for LG 7.5 kg semi-automatic washing machines."},
              {id:662,name:"Panel Assembly Semi Automatic",company:"LG",category:"Washing Machine Spare Parts",modelNo:"8 Kg Washer Panel",brandCode:"AGL77336418",description:"Panel assembly used for LG 8 kg semi-automatic washing machines."},
              {id:663,name:"Panel Assembly Semi Automatic",company:"LG",category:"Washing Machine Spare Parts",modelNo:"8 Kg Washer Panel",brandCode:"AGL77336410",description:"Panel assembly compatible with LG 8 kg semi-automatic washing machines."},
              {id:664,name:"Plate Control Inverter Top Load",company:"LG",category:"Washing Machine Spare Parts",modelNo:"6.2 Kg Inverter Top Load Washer",brandCode:"MGJ64602614",description:"Control plate used in LG inverter fully automatic top loading washing machines."},
              {id:665,name:"Plate Control Smart Inverter Top Load",company:"LG",category:"Washing Machine Spare Parts",modelNo:"6.5 Kg Smart Inverter Washer",brandCode:"MGJ64602635",description:"Control plate used in LG 6.5 kg smart inverter fully automatic washing machines."},
              {id:666,name:"Plate Control Smart Inverter Top Load",company:"LG",category:"Washing Machine Spare Parts",modelNo:"6.5 Kg Smart Inverter Washer",brandCode:"MGJ64602637",description:"Control plate assembly designed for LG 6.5 kg turbo drum washing machines."},
              {id:667,name:"Plate Control Inverter Top Load",company:"LG",category:"Washing Machine Spare Parts",modelNo:"7 Kg Inverter Washer",brandCode:"MGJ64602617",description:"Control plate assembly for LG 7 kg inverter fully automatic top loading washing machines."},
              {id:668,name:"Plate Control Inverter Top Load",company:"LG",category:"Washing Machine Spare Parts",modelNo:"8 Kg Inverter Washer",brandCode:"MGJ64602613",description:"Control plate used in LG 8 kg inverter fully automatic washing machines."},
              {id:669,name:"Plate Control TurboDrum",company:"LG",category:"Washing Machine Spare Parts",modelNo:"8 Kg TurboDrum Washer",brandCode:"MGJ65026809",description:"Control plate assembly used in LG 8 kg TurboDrum washing machines."},
              {id:670,name:"Plate Control Inverter WiFi Top Load",company:"LG",category:"Washing Machine Spare Parts",modelNo:"10 Kg WiFi Washer",brandCode:"MGJ67301401",description:"Control plate assembly used in LG 10 kg inverter WiFi fully automatic washers."},
              {id:671,name:"Plate Control Jet Spray Top Load",company:"LG",category:"Washing Machine Spare Parts",modelNo:"6.5 Kg Jet Spray Washer",brandCode:"MGJ64602640",description:"Control plate assembly for LG 6.5 kg fully automatic top load washing machines."},
              {id:672,name:"Plate Control Jet Spray TurboDrum",company:"LG",category:"Washing Machine Spare Parts",modelNo:"7 Kg TurboDrum Washer",brandCode:"MGJ64602639",description:"Control plate assembly used in LG 7 kg Jet Spray TurboDrum washing machines."},
              {id:673,name:"Plate Control Inverter Top Load",company:"LG",category:"Washing Machine Spare Parts",modelNo:"8 Kg Inverter Washer",brandCode:"MGJ64602646",description:"Control plate assembly used in LG 8 kg inverter fully automatic washing machines."},
              {id:674,name:"Plate Control Smart Inverter Top Load",company:"LG",category:"Washing Machine Spare Parts",modelNo:"8 Kg Smart Inverter Washer",brandCode:"MGJ64602644",description:"Control plate assembly compatible with LG 8 kg smart inverter washing machines."},
              {id:675,name:"Tub Assembly Inner Top Load",company:"LG",category:"Washing Machine Spare Parts",modelNo:"7 Kg Top Load Washer",brandCode:"AJQ55957603",description:"Inner tub assembly used in LG 7 kg top load washing machines for washing drum rotation."},
              {id:676,name:"Heater Assembly",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Washer Heating Element Unit",brandCode:"AEG73150301",description:"Heater assembly used in LG washing machines for heating water during wash cycles."},
              {id:677,name:"Heater Assembly",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Washer Heating Element Unit",brandCode:"AEG33121527",description:"Heating element assembly used in LG washers for maintaining required wash temperature."},
              {id:678,name:"Heater Assembly",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Washer Heating Element Unit",brandCode:"AEG73309901",description:"High-capacity heating element used in LG washing machines for water heating."},
              {id:679,name:"Hinge",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Washer Door Hinge Unit",brandCode:"4774EN2001A",description:"Door hinge used in LG washing machines for lid or door attachment."},
              {id:680,name:"Motor Assembly AC",company:"LG",category:"Washing Machine Spare Parts",modelNo:"AC Motor Unit",brandCode:"4681EA1009A",description:"AC motor assembly used to drive the washing machine drum."},
              {id:681,name:"Motor Assembly AC Drain",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Drain Motor Unit",brandCode:"4681EA1004B",description:"AC drain motor used in LG washing machines for water drainage."},
              {id:682,name:"Handle",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Washer Door Handle Unit",brandCode:"3650EN3005A",description:"Door handle used in LG washing machines for opening and closing the lid."},
              {id:683,name:"Nut Common",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Washer Nut Unit",brandCode:"4W50377C",description:"Standard nut used for securing washing machine components."},
              {id:684,name:"Cover Assembly Tub",company:"LG",category:"Washing Machine Spare Parts",modelNo:"5.5 Kg Washer Tub Cover",brandCode:"3551EN0001B",description:"Tub cover assembly designed for LG 5.5 kg washing machines."},
              {id:685,name:"Tub Assembly Outer",company:"LG",category:"Washing Machine Spare Parts",modelNo:"5.5 Kg Outer Tub Unit",brandCode:"AJQ73993801",description:"Outer tub assembly used in LG washing machines for supporting the inner drum."},
              {id:686,name:"Bellows",company:"LG",category:"Washing Machine Spare Parts",modelNo:"5.5 Kg Bellows Unit",brandCode:"4738ER2001A",description:"Bellows component used for sealing and flexible water flow."},
              {id:687,name:"Bellows",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Washer Bellows Unit",brandCode:"MAR62061901",description:"Bellows used in LG washers for sealing and vibration absorption."},
              {id:688,name:"Bellows",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Washer Bellows Unit",brandCode:"4738EN3001A",description:"Bellows used in washing machines to maintain flexible water connections."},
              {id:689,name:"Hub Tub Inner",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Inner Tub Hub Unit",brandCode:"3250EU1001E",description:"Hub assembly used to connect inner tub with drive shaft."},
              {id:690,name:"Belt Poly V",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Poly V Belt Unit",brandCode:"4400EL2001F",description:"Poly V belt used to transmit power from motor to drum."},
              {id:691,name:"Switch Assembly Sensor",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Sensor Switch Unit",brandCode:"6501EA1001B",description:"Sensor switch assembly used in washing machine control systems."},
              {id:692,name:"Switch Assembly Pressure",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Pressure Switch Unit",brandCode:"EBF63534907",description:"Pressure switch used to detect water level inside washing machines."},
              {id:693,name:"Damper Assembly Friction",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Friction Damper Unit",brandCode:"4901ER2003A",description:"Friction damper assembly used to absorb vibration during washing cycles."},
              {id:694,name:"Damper Assembly Friction",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Friction Damper Unit",brandCode:"ACV73730203",description:"Friction damper assembly used to stabilize washing machine drum movement."},
              {id:695,name:"Clamp Assembly",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Clamp Unit",brandCode:"4861EN3004A",description:"Clamp assembly used for securing internal washing machine components."},
              {id:696,name:"Clamp Assembly",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Clamp Unit",brandCode:"4861EN3002A",description:"Clamp assembly used in LG washing machines for secure component mounting."},
              {id:697,name:"Belt V",company:"LG",category:"Washing Machine Spare Parts",modelNo:"V Belt Unit",brandCode:"2W50155G",description:"V-belt used for transferring power from motor to washing drum."},
              {id:698,name:"Leg Assembly",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Washer Support Leg Unit",brandCode:"AFC72909305",description:"Leg assembly used for stabilizing washing machine base."},
              {id:699,name:"Casing Assembly Gear Box SA Washer",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Gearbox Casing Unit",brandCode:"MLH30502801",description:"Gearbox casing used in semi-automatic washing machines."},
              {id:700,name:"Bellows Semi Automatic Washer",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Bellows Unit",brandCode:"4739EU3001F",description:"Bellows component used in semi-automatic washing machines for flexible water sealing."},
              {id:701,name:"Filter Assembly",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Washer Filter Unit",brandCode:"EAM60991301",description:"Filter assembly used to remove lint and debris during washing cycles."},
              {id:702,name:"Filter Assembly Control Panel Top Load",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Panel Filter Unit",brandCode:"6201EC2002V",description:"Filter assembly used in top load washing machine control panels."},
              {id:703,name:"Switch Assembly Locker",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Door Lock Switch Unit",brandCode:"EBF64556602",description:"Locker switch assembly used to secure washing machine doors during operation."},
              {id:704,name:"Switch Assembly Locker",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Door Lock Switch Unit",brandCode:"EBF61215204",description:"Door lock switch assembly compatible with LG washing machines."},
              {id:705,name:"Valve Assembly Inlet",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Inlet Water Valve Unit",brandCode:"AJU72911001",description:"Water inlet valve assembly used for controlling water flow into washing machines."},
              {id:706,name:"Tub Assembly Drum Inner",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Inner Drum Unit",brandCode:"AJQ33587720",description:"Inner drum assembly used in LG washing machines for washing clothes."},
              {id:707,name:"Valve Assembly Inlet",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Inlet Water Valve Unit",brandCode:"5220FR2006A",description:"Water inlet valve used in LG washing machines for regulating water supply."},
              {id:708,name:"Housing Assembly Clutch Coupling",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Clutch Housing Unit",brandCode:"AEN73651401",description:"Clutch coupling housing assembly used in LG washing machines."},
              {id:709,name:"Cabinet Assembly Semi Automatic",company:"LG",category:"Washing Machine Spare Parts",modelNo:"6.8 Kg Semi Automatic Washer",brandCode:"ABJ36448389",description:"Cabinet assembly designed for LG 6.8 kg semi-automatic washing machines."},
              {id:710,name:"Valve Assembly Inlet",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Inlet Valve Unit",brandCode:"5221EN1005M",description:"Water inlet valve assembly compatible with LG washing machines."},
              {id:711,name:"Bearing Ball",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Ball Bearing Unit",brandCode:"4280EN4001C",description:"Ball bearing used for smooth drum rotation in washing machines."},
              {id:712,name:"Bearing Ball",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Ball Bearing Unit",brandCode:"MAP61913707",description:"Ball bearing assembly used in LG washing machine drum systems."},
              {id:713,name:"Bearing Ball",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Ball Bearing Unit",brandCode:"MAP61913715",description:"Ball bearing used to support drum shaft rotation in washing machines."},
              {id:714,name:"Bearing Ball",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Ball Bearing Unit",brandCode:"4280EN4001A",description:"Drum bearing used in LG washers for stable rotation."},
              {id:715,name:"Harness Multi",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Wiring Harness Unit",brandCode:"EAD64868001",description:"Multi wiring harness used for electrical connections in washing machines."},
              {id:716,name:"Switch Assembly Pressure FL Model",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Pressure Switch Unit",brandCode:"6601ER1006G",description:"Pressure switch used to detect water level in front load washing machines."},
              {id:717,name:"Valve Assembly Inlet",company:"LG",category:"Washing Machine Spare Parts",modelNo:"Water Inlet Valve Unit",brandCode:"5221EA1009C",description:"Inlet valve assembly used to control water supply in LG washers."},
              {id:718,name:"Washing Machine Cover Semi Automatic",company:"LG",category:"Washing Machine Accessories",modelNo:"9–11 Kg Washer Cover",brandCode:"CLS32174603",description:"Protective cover designed for LG semi-automatic washing machines (9–11 kg capacity)."},
              {id:719,name:"Washing Machine Cover Top Load",company:"LG",category:"Washing Machine Accessories",modelNo:"Up to 7.5 Kg Washer Cover",brandCode:"CLS32174602",description:"Protective cover for LG top loading washing machines up to 7.5 kg capacity."},
              {id:720,name:"Water Inlet Hose Filter",company:"LG",category:"Washing Machine Accessories",modelNo:"Hose Filter Unit",brandCode:"ADQ72912806",description:"Water inlet hose filter used to prevent debris from entering washing machine water supply."}
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

const PRODUCT_RESPONSE_CACHE_CONTROL = "public, max-age=300, stale-while-revalidate=600";

app.get("/api/products", (req, res) => {
  res.set("Cache-Control", PRODUCT_RESPONSE_CACHE_CONTROL);
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
