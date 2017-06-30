// Retrieve
var MongoClient = require('mongodb').MongoClient;
var MongoClient2 = require('mongodb').MongoClient;

var dbName = 'Holland';
var dbHost = '10.12.70.170';
var dbPort = '27017';

var db_username = 'appUser';
var db_password = 'tm4MB5JESwmsmIozpAe1';

// mongodb://[username:password@]host1[:port1][,host2[:port2],...[,hostN[:portN]]][/[database][?options]]


// if local and no user name and pass
// var mongoConnect = 'mongodb://'+ dbHost +':'+ dbPort + '/'+ dbName;

//userName and pass
var mongoConnect = 'mongodb://'+ db_username + ':' + db_password + '@' +dbHost +':'+ dbPort + '/'+ dbName;
// Connect to the db

var aemItin =[{
    "brand": "HAL",
    "days": "7",
    "id": "A6E70S",
    "name": "7-DAY ROUNDTRIP SEATTLE",
    "ports": ["SEA", "***", "JNU", "GB1", "SIT", "KTN", "YYJ", "SEA"]
}, {
    "brand": "HAL",
    "days": "7",
    "id": "A6G07S",
    "name": "7-DAY ROUNDTRIP VANCOUVER",
    "ports": ["YVR", "270", "TAC", "JNU", "SGY", "GB1", "KTN", "270", "YVR"]
}, {
    "brand": "HAL",
    "days": "14",
    "id": "A7L14Y",
    "name": "14-DAY GREAT ALASKAN EXPLORER",
    "ports": ["SEA", "273", "KTN", "TA1", "JNU", "IS1", "***", "ANC", "HOM", "ADQ", "HUB", "SIT", "***", "YYJ", "SEA"]
}, {
    "brand": "HAL",
    "days": "7",
    "id": "A7N07A",
    "name": "7-DAY GLACIER DISCOVERY NORTHBOUND",
    "ports": ["YVR", "270", "KTN", "JNU", "SGY", "GB1", "***", "SEW"]
}, {
    "brand": "HAL",
    "days": "7",
    "id": "A7S07A",
    "name": "7-DAY GLACIER DISCOVERY SOUTHBOUND",
    "ports": ["SEW", "***", "GB1", "HNS", "JNU", "KTN", "270", "YVR"]
}, {
    "brand": "HAL",
    "days": "7",
    "id": "B6R07S",
    "name": "7-DAY BERMUDA",
    "ports": ["BOS", "***", "BDA", "BDA", "BDA", "BDA", "***", "BOS"]
}, {
    "brand": "HAL",
    "days": "14",
    "id": "B7C14S",
    "name": "14-DAY BERMUDA & CANADA\/NEW ENGLAND COLLECTORS'",
    "ports": ["YUL", "209", "YQB", "210", "YCH", "YQY", "YHZ", "BHB", "BOS", "***", "BDA", "BDA", "BDA", "BDA", "***", "BOS"]
}, {
    "brand": "HAL",
    "days": "7",
    "id": "E707NS",
    "name": "7-DAY NORSE LEGENDS",
    "ports": ["AMS", "***", "EI1", "356", "AL2", "GE1", "232", "BGO", "***", "AMS"]
}, {
    "brand": "HAL",
    "days": "12",
    "id": "E7A12S",
    "name": "12-DAY ADRIATIC DREAM",
    "ports": ["ROM", "240", "ME1", "MLA", "MLA", "GZM", "***", "CFU", "DBV", "ZKQ", "KO1", "SPU", "KO2", "VCE", "VCE"]
}, {
    "brand": "HAL",
    "days": "14",
    "id": "E7AN14",
    "name": "14-DAY VOYAGE OF THE MIDNIGHT SUN",
    "ports": ["AMS", "***", "FL1", "226", "BGO", "GE1", "232", "TRD", "230", "***", "HVG", "289", "***", "***", "AL2", "EI1", "356", "SVG", "***", "AMS"]
}, {
    "brand": "HAL",
    "days": "12",
    "id": "E7B12S",
    "name": "12-DAY MEDITERRANEAN DREAM",
    "ports": ["VCE", "***", "SRA", "AR1", "KA1", "NAV", "ATH", "ATH", "JMK", "JTR", "***", "NAP", "ROM"]
}, {
    "brand": "HAL",
    "days": "12",
    "id": "E7D12S",
    "name": "12-DAY MEDITERRANEAN RIVIERAS",
    "ports": ["BCN", "***", "CA1", "GIB", "AGP", "ALC", "PMI", "***", "TLN", "CAI", "MCM", "LI1", "ROM"]
}, {
    "brand": "HAL",
    "days": "12",
    "id": "E7M12A",
    "name": "12-DAY MEDITERRANEAN EXPLORER",
    "ports": ["ROM", "LI1", "MCM", "SR3", "AJA", "***", "LEI", "CT2", "***", "MRS", "SE2", "BCN", "BCN"]
}, {
    "brand": "HAL",
    "days": "24",
    "id": "E7M24B",
    "name": "24-DAY MEDITERRANEAN & ADRIATIC EXPLORER",
    "ports": ["BCN", "***", "CA1", "GIB", "AGP", "ALC", "PMI", "***", "TLN", "CAI", "MCM", "LI1", "ROM", "240", "ME1", "MLA", "MLA", "GZM", "***", "CFU", "DBV", "ZKQ", "KO1", "SPU", "KO2", "VCE", "VCE"]
}, {
    "brand": "HAL",
    "days": "24",
    "id": "E7M24C",
    "name": "24-DAY ADRIATIC & MEDITERRANEAN DREAM",
    "ports": ["ROM", "240", "ME1", "MLA", "MLA", "GZM", "***", "CFU", "DBV", "ZKQ", "KO1", "SPU", "KO2", "VCE", "VCE", "***", "SRA", "AR1", "KA1", "NAV", "ATH", "ATH", "JMK", "JTR", "***", "NAP", "ROM"]
}, {
    "brand": "HAL",
    "days": "24",
    "id": "E7M24D",
    "name": "24-DAY DREAM OF THE MEDITERRANEAN",
    "ports": ["VCE", "***", "SRA", "AR1", "KA1", "NAV", "ATH", "ATH", "JMK", "JTR", "***", "NAP", "ROM", "LI1", "MCM", "SR3", "AJA", "***", "LEI", "CT2", "***", "MRS", "SE2", "BCN", "BCN"]
}, {
    "brand": "HAL",
    "days": "24",
    "id": "E7M24E",
    "name": "24-DAY WESTERN MEDITERRANEAN ADVENTURE",
    "ports": ["ROM", "LI1", "MCM", "SR3", "AJA", "***", "LEI", "CT2", "***", "MRS", "SE2", "BCN", "BCN", "***", "CA1", "GIB", "AGP", "ALC", "PMI", "***", "TLN", "CAI", "MCM", "LI1", "ROM"]
}, {
    "brand": "HAL",
    "days": "7",
    "id": "E7N07S",
    "name": "7-DAY VIKING SAGAS",
    "ports": ["AMS", "***", "FL1", "226", "SVG", "KRS", "218", "OSL", "***", "AMS"]
}, {
    "brand": "HAL",
    "days": "12",
    "id": "E7N12S",
    "name": "12-DAY BALTIC ADVENTURE",
    "ports": ["CPH", "KEL", "***", "TLL", "LED", "LED", "HEL", "STO", "STO", "***", "ZWD", "CPH", "CPH"]
}, {
    "brand": "HAL",
    "days": "14",
    "id": "E7N14A",
    "name": "14-DAY NORTH CAPE",
    "ports": ["RTM", "***", "SVG", "FL1", "226", "AL2", "TRD", "230", "***", "HFT", "HVG", "289", "***", "***", "GE1", "232", "BGO", "***", "RTM"]
}, {
    "brand": "HAL",
    "days": "14",
    "id": "E7N14B",
    "name": "14-DAY NORTHERN ISLES",
    "ports": ["RTM", "***", "SQ1", "IN1", "KOI", "***", "REK", "REK", "IFJ", "213", "AEY", "214", "DJU", "***", "BGO", "***", "RTM"]
}, {
    "brand": "HAL",
    "days": "14",
    "id": "E7N14C",
    "name": "14-DAY VIKING SAGAS & NORSE LEGENDS",
    "ports": ["AMS", "***", "FL1", "226", "SVG", "KRS", "218", "OSL", "***", "AMS", "***", "EI1", "356", "AL2", "GE1", "232", "BGO", "***", "AMS"]
}, {
    "brand": "HAL",
    "days": "14",
    "id": "E7N1S4",
    "name": "14-DAY NORTH CAPE EXPLORER",
    "ports": ["AMS", "***", "AL2", "***", "HVG", "289", "***", "TRD", "GE1", "232", "BGO", "***", "HE1", "CPH", "CPH", "QJV", "***", "AMS"]
}, {
    "brand": "HAL",
    "days": "20",
    "id": "E7N20S",
    "name": "20-DAY NORTH CAPE, SPITSBERGEN & ICELANDIC EXPLORER",
    "ports": ["AMS", "***", "EI1", "356", "BGO", "AL2", "***", "***", "LYR", "SCL", "288", "NA5", "SCI", "LOP", "***", "318", "AEY", "214", "IFJ", "213", "REK", "REK", "***", "***", "RO1", "RO1", "AMS"]
}, {
    "brand": "HAL",
    "days": "21",
    "id": "E7N21B",
    "name": "21-DAY NORSE LEGENDS & VOYAGE OF THE MIDNIGHT SUN",
    "ports": ["AMS", "***", "EI1", "356", "AL2", "GE1", "232", "BGO", "***", "AMS", "***", "FL1", "226", "BGO", "GE1", "232", "TRD", "230", "***", "HVG", "289", "***", "***", "AL2", "EI1", "356", "SVG", "***", "AMS"]
}, {
    "brand": "HAL",
    "days": "21",
    "id": "E7N21C",
    "name": "21-DAY MIDNIGHT SUN & VIKING SAGAS",
    "ports": ["AMS", "***", "FL1", "226", "BGO", "GE1", "232", "TRD", "230", "***", "HVG", "289", "***", "***", "AL2", "EI1", "356", "SVG", "***", "AMS", "***", "FL1", "226", "SVG", "KRS", "218", "OSL", "***", "AMS"]
}, {
    "brand": "HAL",
    "days": "21",
    "id": "E7N21K",
    "name": "21-DAY NORTHERN ISLES & NORSE LEGENDS",
    "ports": ["RTM", "***", "SQ1", "IN1", "KOI", "***", "REK", "REK", "IFJ", "213", "AEY", "214", "DJU", "***", "BGO", "***", "RTM", "***", "EI1", "356", "AL2", "GE1", "232", "BGO", "***", "RTM"]
}, {
    "brand": "HAL",
    "days": "24",
    "id": "E7N24A",
    "name": "24-DAY FJORDS & HIGHLANDS AND BALTIC ADVENTURE",
    "ports": ["CPH", "218", "OSL", "KRS", "SVG", "FL1", "226", "BGO", "LWK", "PTR", "IN1", "SQ1", "NCL", "***", "CPH", "KEL", "***", "TLL", "LED", "LED", "HEL", "STO", "STO", "***", "ZWD", "CPH", "CPH"]
}, {
    "brand": "HAL",
    "days": "26",
    "id": "E7N26A",
    "name": "26-DAY BALTIC & NORTHERN ISLES ENCHANTMENT",
    "ports": ["CPH", "KEL", "***", "TLL", "LED", "LED", "HEL", "STO", "STO", "***", "ZWD", "CPH", "CPH", "***", "BGO", "AL2", "***", "AEY", "IFJ", "213", "REK", "REK", "DJU", "***", "IN1", "SQ1", "***", "CPH"]
}, {
    "brand": "HAL",
    "days": "34",
    "id": "E7N34N",
    "name": "34-DAY NORTH CAPE, IRISH & SCOTTISH EXPLORER",
    "ports": ["AMS", "***", "EI1", "356", "BGO", "AL2", "***", "***", "LYR", "SCL", "288", "NA5", "SCI", "LOP", "***", "318", "AEY", "214", "IFJ", "213", "REK", "REK", "***", "***", "RO1", "RO1", "AMS", "***", "RO1", "IN1", "SCR", "***", "DUB", "LPL", "BFS", "MHW", "ISC", "PTL", "GCI", "***", "AMS"]
}, {
    "brand": "HAL",
    "days": "34",
    "id": "E7N34S",
    "name": "34-DAY BALTIC, KIEL CANAL & NORTH CAPE EXPLORER",
    "ports": ["AMS", "***", "CPH", "RNN", "KLJ", "***", "TLL", "LED", "LED", "HEL", "STO", "233", "***", "ZWD", "131", "278", "132", "AMS", "***", "EI1", "356", "BGO", "AL2", "***", "***", "LYR", "SCL", "288", "NA5", "SCI", "LOP", "***", "318", "AEY", "214", "IFJ", "213", "REK", "REK", "***", "***", "RO1", "RO1", "AMS"]
}, {
    "brand": "HAL",
    "days": "14",
    "id": "E7NS14",
    "name": "14-DAY CELTIC EXPLORER",
    "ports": ["AMS", "***", "GCI", "MHW", "LPL", "DUB", "***", "KBL", "GWY", "BYT", "WAT", "***", "VLS", "351", "ANR", "ANR", "AMS"]
}, {
    "brand": "HAL",
    "days": "28",
    "id": "E7NS28",
    "name": "28-DAY CELTIC & NORTH CAPE EXPLORER",
    "ports": ["AMS", "***", "GCI", "MHW", "LPL", "DUB", "***", "KBL", "GWY", "BYT", "WAT", "***", "VLS", "351", "ANR", "ANR", "AMS", "***", "AL2", "***", "HVG", "289", "***", "TRD", "GE1", "232", "BGO", "***", "HE1", "CPH", "CPH", "QJV", "***", "AMS"]
}, {
    "brand": "HAL",
    "days": "12",
    "id": "E7S12S",
    "name": "12-DAY FJORDS & HIGHLANDS",
    "ports": ["CPH", "218", "OSL", "KRS", "SVG", "FL1", "226", "BGO", "LWK", "PTR", "IN1", "SQ1", "NCL", "***", "CPH"]
}, {
    "brand": "HAL",
    "days": "14",
    "id": "E7S14N",
    "name": "14-DAY BALTIC & KIEL CANAL EXPLORER",
    "ports": ["AMS", "***", "CPH", "RNN", "KLJ", "***", "TLL", "LED", "LED", "HEL", "STO", "233", "***", "ZWD", "131", "278", "132", "AMS"]
}, {
    "brand": "HAL",
    "days": "28",
    "id": "E7S28S",
    "name": "28-DAY NORTH CAPE, BALTIC & KIEL CANAL EXPLORER",
    "ports": ["AMS", "***", "AL2", "***", "HVG", "289", "***", "TRD", "GE1", "232", "BGO", "***", "HE1", "CPH", "CPH", "QJV", "***", "AMS", "***", "CPH", "RNN", "KLJ", "***", "TLL", "LED", "LED", "HEL", "STO", "233", "***", "ZWD", "131", "278", "132", "AMS"]
}, {
    "brand": "HAL",
    "days": "18",
    "id": "E7T18A",
    "name": "18-DAY VIKING PASSAGE",
    "ports": ["RTM", "***", "BGO", "LWK", "***", "214", "AEY", "IFJ", "213", "REK", "REK", "***", "241", "JJU", "NA2", "***", "YYT", "***", "YHZ", "***", "BOS"]
}, {
    "brand": "HAL",
    "days": "25",
    "id": "E7T25S",
    "name": "25-DAY NORSE LEGENDS & VIKING PASSAGE",
    "ports": ["RTM", "***", "EI1", "356", "AL2", "GE1", "232", "BGO", "***", "RTM", "***", "BGO", "LWK", "***", "214", "AEY", "IFJ", "213", "REK", "REK", "***", "241", "JJU", "NA2", "***", "YYT", "***", "YHZ", "***", "BOS"]
}, {
    "brand": "HAL",
    "days": "14",
    "id": "N714NS",
    "name": "14-DAY CANADA & NE DISCOVERY",
    "ports": ["YUL", "209", "YQB", "210", "YCH", "YQY", "YHZ", "BHB", "BOS", "BHB", "YHZ", "YQY", "YCH", "210", "YQB", "209", "YUL"]
}, {
    "brand": "HAL",
    "days": "7",
    "id": "N7N07A",
    "name": "7-DAY CANADA & NE DISCOVERY",
    "ports": ["BOS", "BHB", "YHZ", "YQY", "YCH", "210", "YQB", "209", "YUL"]
}];
var aemPorts = [{
	"code": "SEA",
	"coordinates": {
		"lat": "47.6062095",
		"lng": "-122.3320708"
	},
	"label": {
		"de": "Seattle, Washington, US",
		"en": "Seattle",
		"es": "Seattle, Washington, US",
		"nl": "Seattle, Washington, US"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "ATSEA",
	"coordinates": {
		"lat": "0",
		"lng": "0"
	},
	"label": {
		"de": "AT SEA",
		"en": "AT SEA",
		"es": "AT SEA",
		"nl": "AT SEA"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "JNU",
	"coordinates": {
		"lat": "58.3019444",
		"lng": "-134.4197222"
	},
	"label": {
		"de": "Juneau, Alaska, US",
		"en": "Juneau",
		"es": "Juneau, Alaska, US",
		"nl": "Juneau, Alaska, US"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "GB1",
	"coordinates": {
		"lat": "58.6658073",
		"lng": "-136.9002147"
	},
	"label": {
		"de": "Glacier Bay",
		"en": "Glacier Bay",
		"es": "Glacier Bay",
		"nl": "Glacier Bay"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "SIT",
	"coordinates": {
		"lat": "57.0530556",
		"lng": "-135.33"
	},
	"label": {
		"de": "Sitka, Alaska, US",
		"en": "Sitka",
		"es": "Sitka, Alaska, US",
		"nl": "Sitka, Alaska, US"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "KTN",
	"coordinates": {
		"lat": "55.3422222",
		"lng": "-131.6461111"
	},
	"label": {
		"de": "Ketchikan, Alaska, US",
		"en": "Ketchikan",
		"es": "Ketchikan, Alaska, US",
		"nl": "Ketchikan, Alaska, US"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "YYJ",
	"coordinates": {
		"lat": "48.4284207",
		"lng": "-123.3656444"
	},
	"label": {
		"de": "Victoria, British Columbia, Canada",
		"en": "Victoria",
		"es": "Victoria, British Columbia, Canada",
		"nl": "Victoria, British Columbia, Canada"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "YVR",
	"coordinates": {
		"lat": "49.2827291",
		"lng": "-123.1207375"
	},
	"label": {
		"de": "Vancouver, B.C., CA",
		"en": "Vancouver",
		"es": "Vancouver, B.C., CA",
		"nl": "Vancouver, B.C., CA"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "270",
	"coordinates": {
		"lat": "54.800685",
		"lng": "-131.44043"
	},
	"label": {
		"de": "Scenic Cruising The Inside    Passage",
		"en": "Scenic Cruising The Inside    Passage",
		"es": "Scenic Cruising The Inside    Passage",
		"nl": "Scenic Cruising The Inside    Passage"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "TAC",
	"coordinates": {
		"lat": "57.8569213",
		"lng": "-133.5894598"
	},
	"label": {
		"de": "Tracy Arm Inlet, Alaska, US",
		"en": "Tracy Arm Inlet",
		"es": "Tracy Arm Inlet, Alaska, US",
		"nl": "Tracy Arm Inlet, Alaska, US"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "SGY",
	"coordinates": {
		"lat": "59.4583333",
		"lng": "-135.3138889"
	},
	"label": {
		"de": "Skagway, Alaska, US",
		"en": "Skagway",
		"es": "Skagway, Alaska, US",
		"nl": "Skagway, Alaska, US"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "271",
	"coordinates": {
		"lat": "47.7236535",
		"lng": "-122.4713352"
	},
	"label": {
		"de": "Puget Sound",
		"en": "Puget Sound",
		"es": "Puget Sound",
		"nl": "Puget Sound"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "272",
	"coordinates": {
		"lat": "54.800685",
		"lng": "-131.44043"
	},
	"label": {
		"de": "Scenic cruising Stephens Passage",
		"en": "Scenic cruising Stephens Passage",
		"es": "Scenic cruising Stephens Passage",
		"nl": "Scenic cruising Stephens Passage"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "HUB",
	"coordinates": {
		"lat": "60.313889",
		"lng": "-139.370833"
	},
	"label": {
		"de": "Hubbard Glacier",
		"en": "Hubbard Glacier",
		"es": "Hubbard Glacier",
		"nl": "Hubbard Glacier"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "273",
	"coordinates": {
		"lat": "48.6483837",
		"lng": "-123.3994094"
	},
	"label": {
		"de": "Vancouver Island - Cruising",
		"en": "Vancouver Island - Cruising",
		"es": "Vancouver Island - Cruising",
		"nl": "Vancouver Island - Cruising"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "TA1",
	"coordinates": {
		"lat": "57.8569213",
		"lng": "-133.5894598"
	},
	"label": {
		"de": "Scenic Cruising Tracy Arm",
		"en": "Scenic Cruising Tracy Arm",
		"es": "Scenic Cruising Tracy Arm",
		"nl": "Scenic Cruising Tracy Arm"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "IS1",
	"coordinates": {
		"lat": "58.1292446",
		"lng": "-135.4628176"
	},
	"label": {
		"de": "Icy Strait Point, Alaska, US",
		"en": "Icy Strait Point",
		"es": "Icy Strait Point, Alaska, US",
		"nl": "Icy Strait Point, Alaska, US"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "ANC",
	"coordinates": {
		"lat": "61.2180556",
		"lng": "-149.9002778"
	},
	"label": {
		"de": "Anchorage, Alaska, US",
		"en": "Anchorage",
		"es": "Anchorage, Alaska, US",
		"nl": "Anchorage, Alaska, US"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "HOM",
	"coordinates": {
		"lat": "59.6425",
		"lng": "-151.5483333"
	},
	"label": {
		"de": "Homer, Alaska, US",
		"en": "Homer",
		"es": "Homer, Alaska, US",
		"nl": "Homer, Alaska, US"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "ADQ",
	"coordinates": {
		"lat": "57.79",
		"lng": "-152.4072222"
	},
	"label": {
		"de": "Kodiak, Alaska, US",
		"en": "Kodiak",
		"es": "Kodiak, Alaska, US",
		"nl": "Kodiak, Alaska, US"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "SEW",
	"coordinates": {
		"lat": "60.6639195",
		"lng": "-149.4814409"
	},
	"label": {
		"de": "Seward (Anchorage), Alaska, US",
		"en": "Seward (Anchorage)",
		"es": "Seward (Anchorage), Alaska, US",
		"nl": "Seward (Anchorage), Alaska, US"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "HNS",
	"coordinates": {
		"lat": "59.2358333",
		"lng": "-135.445"
	},
	"label": {
		"de": "Haines, Alaska, US",
		"en": "Haines",
		"es": "Haines, Alaska, US",
		"nl": "Haines, Alaska, US"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "BOS",
	"coordinates": {
		"lat": "42.3600825",
		"lng": "-71.0588801"
	},
	"label": {
		"de": "Boston, Massachusetts, US",
		"en": "Boston",
		"es": "Boston, Massachusetts, US",
		"nl": "Boston, Massachusetts, US"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "BDA",
	"coordinates": {
		"lat": "32.2945837",
		"lng": "-64.7858887"
	},
	"label": {
		"de": "Hamilton, Bermuda",
		"en": "Hamilton",
		"es": "Hamilton, Bermuda",
		"nl": "Hamilton, Bermuda"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "YUL",
	"coordinates": {
		"lat": "45.5016889",
		"lng": "-73.567256"
	},
	"label": {
		"de": "Montreal, Quebec, Canada",
		"en": "Montreal",
		"es": "Montreal, Quebec, Canada",
		"nl": "Montreal, Quebec, Canada"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "209",
	"coordinates": {
		"lat": "45.6291905",
		"lng": "-122.6681267"
	},
	"label": {
		"de": "Saint Lawrence River Cruising",
		"en": "Saint Lawrence River Cruising",
		"es": "Saint Lawrence River Cruising",
		"nl": "Saint Lawrence River Cruising"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "YQB",
	"coordinates": {
		"lat": "46.8138783",
		"lng": "-71.2079809"
	},
	"label": {
		"de": "Quebec City, Quebec, Canada",
		"en": "Quebec City",
		"es": "Quebec City, Quebec, Canada",
		"nl": "Quebec City, Quebec, Canada"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "210",
	"coordinates": {
		"lat": "48.9223503",
		"lng": "-59.661452"
	},
	"label": {
		"de": "Cruising Gulf of St. Lawrence",
		"en": "Cruising Gulf of St. Lawrence",
		"es": "Cruising Gulf of St. Lawrence",
		"nl": "Cruising Gulf of St. Lawrence"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "YCH",
	"coordinates": {
		"lat": "46.23824",
		"lng": "-63.1310704"
	},
	"label": {
		"de": "Charlottetown, Prince Edward Island, Canada",
		"en": "Charlottetown",
		"es": "Charlottetown, Prince Edward Island, Canada",
		"nl": "Charlottetown, Prince Edward Island, Canada"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "YQY",
	"coordinates": {
		"lat": "46.1367899",
		"lng": "-60.194224"
	},
	"label": {
		"de": "Sydney, Nova Scotia, Canada",
		"en": "Sydney",
		"es": "Sydney, Nova Scotia, Canada",
		"nl": "Sydney, Nova Scotia, Canada"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "YHZ",
	"coordinates": {
		"lat": "44.6487635",
		"lng": "-63.5752387"
	},
	"label": {
		"de": "Halifax, Nova Scotia, Canada",
		"en": "Halifax",
		"es": "Halifax, Nova Scotia, Canada",
		"nl": "Halifax, Nova Scotia, Canada"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "BHB",
	"coordinates": {
		"lat": "44.3876119",
		"lng": "-68.2039123"
	},
	"label": {
		"de": "Bar Harbor, Maine, US",
		"en": "Bar Harbor",
		"es": "Bar Harbor, Maine, US",
		"nl": "Bar Harbor, Maine, US"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "AMS",
	"coordinates": {
		"lat": "52.3702157",
		"lng": "4.8951679"
	},
	"label": {
		"de": "Amsterdam, The Netherlands",
		"en": "Amsterdam",
		"es": "Amsterdam, The Netherlands",
		"nl": "Amsterdam, The Netherlands"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "EI1",
	"coordinates": {
		"lat": "60.4605514",
		"lng": "7.073578"
	},
	"label": {
		"de": "Eidfjord, Norway",
		"en": "Eidfjord",
		"es": "Eidfjord, Norway",
		"nl": "Eidfjord, Norway"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "356",
	"coordinates": {
		"lat": "60.1903365",
		"lng": "6.0220788"
	},
	"label": {
		"de": "Scenic cruising Hardangerfjord",
		"en": "Scenic cruising Hardangerfjord",
		"es": "Scenic cruising Hardangerfjord",
		"nl": "Scenic cruising Hardangerfjord"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "AL2",
	"coordinates": {
		"lat": "62.4722284",
		"lng": "6.149482"
	},
	"label": {
		"de": "Alesund, Norway",
		"en": "Alesund",
		"es": "Alesund, Norway",
		"nl": "Alesund, Norway"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "GE1",
	"coordinates": {
		"lat": "62.1008441",
		"lng": "7.2058941"
	},
	"label": {
		"de": "Geiranger, Norway",
		"en": "Geiranger",
		"es": "Geiranger, Norway",
		"nl": "Geiranger, Norway"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "232",
	"coordinates": {
		"lat": "62.102095",
		"lng": "7.2063716"
	},
	"label": {
		"de": "Cruising Geirangerfjord",
		"en": "Cruising Geirangerfjord",
		"es": "Cruising Geirangerfjord",
		"nl": "Cruising Geirangerfjord"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "BGO",
	"coordinates": {
		"lat": "60.3912628",
		"lng": "5.3220544"
	},
	"label": {
		"de": "Bergen, Norway",
		"en": "Bergen",
		"es": "Bergen, Norway",
		"nl": "Bergen, Norway"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "RTM",
	"coordinates": {
		"lat": "51.9244201",
		"lng": "4.4777325"
	},
	"label": {
		"de": "Rotterdam, The Netherlands",
		"en": "Rotterdam",
		"es": "Rotterdam, The Netherlands",
		"nl": "Rotterdam, The Netherlands"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "ROM",
	"coordinates": {
		"lat": "42.0924239",
		"lng": "11.7954132"
	},
	"label": {
		"de": "Civitavecchia (Rome), Italy",
		"en": "Civitavecchia (Rome)",
		"es": "Civitavecchia (Rome), Italy",
		"nl": "Civitavecchia (Rome), Italy"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "240",
	"coordinates": {
		"lat": "38.2493888",
		"lng": "15.6441157"
	},
	"label": {
		"de": "Cruising Strait of Messina",
		"en": "Cruising Strait of Messina",
		"es": "Cruising Strait of Messina",
		"nl": "Cruising Strait of Messina"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "ME1",
	"coordinates": {
		"lat": "38.1938137",
		"lng": "15.5540152"
	},
	"label": {
		"de": "Messina, Italy",
		"en": "Messina",
		"es": "Messina, Italy",
		"nl": "Messina, Italy"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "MLA",
	"coordinates": {
		"lat": "35.8989085",
		"lng": "14.5145528"
	},
	"label": {
		"de": "Valletta, Malta",
		"en": "Valletta",
		"es": "Valletta, Malta",
		"nl": "Valletta, Malta"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "GZM",
	"coordinates": {
		"lat": "36.0266386",
		"lng": "14.2959648"
	},
	"label": {
		"de": "Mgarr (Victoria), Gozo, Malta",
		"en": "Mgarr (Victoria)",
		"es": "Mgarr (Victoria), Gozo, Malta",
		"nl": "Mgarr (Victoria), Gozo, Malta"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "CFU",
	"coordinates": {
		"lat": "39.6242621",
		"lng": "19.9216777"
	},
	"label": {
		"de": "Kerkira, Nisos Kerkira (Corfu), Greece",
		"en": "Kerkira",
		"es": "Kerkira, Nisos Kerkira (Corfu), Greece",
		"nl": "Kerkira, Nisos Kerkira (Corfu), Greece"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "DBV",
	"coordinates": {
		"lat": "42.6506606",
		"lng": "18.0944238"
	},
	"label": {
		"de": "Dubrovnik, Croatia",
		"en": "Dubrovnik",
		"es": "Dubrovnik, Croatia",
		"nl": "Dubrovnik, Croatia"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "ZKQ",
	"coordinates": {
		"lat": "42.424662",
		"lng": "18.771234"
	},
	"label": {
		"de": "Kotor, Montenegro",
		"en": "Kotor",
		"es": "Kotor, Montenegro",
		"nl": "Kotor, Montenegro"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "KO1",
	"coordinates": {
		"lat": "42.9297182",
		"lng": "16.888644"
	},
	"label": {
		"de": "Korcula, Croatia",
		"en": "Korcula",
		"es": "Korcula, Croatia",
		"nl": "Korcula, Croatia"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "SPU",
	"coordinates": {
		"lat": "43.5081323",
		"lng": "16.4401935"
	},
	"label": {
		"de": "Split, Croatia",
		"en": "Split",
		"es": "Split, Croatia",
		"nl": "Split, Croatia"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "KO2",
	"coordinates": {
		"lat": "45.548059",
		"lng": "13.7301877"
	},
	"label": {
		"de": "Koper, Slovenia",
		"en": "Koper",
		"es": "Koper, Slovenia",
		"nl": "Koper, Slovenia"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "VCE",
	"coordinates": {
		"lat": "45.4408474",
		"lng": "12.3155151"
	},
	"label": {
		"de": "Venice, Italy",
		"en": "Venice",
		"es": "Venice, Italy",
		"nl": "Venice, Italy"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "FL1",
	"coordinates": {
		"lat": "60.8607716",
		"lng": "7.1117849"
	},
	"label": {
		"de": "Flam, Norway",
		"en": "Flam",
		"es": "Flam, Norway",
		"nl": "Flam, Norway"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "226",
	"coordinates": {
		"lat": "61.1554244",
		"lng": "6.5806337"
	},
	"label": {
		"de": "Scenic cruising Sognefjord",
		"en": "Scenic cruising Sognefjord",
		"es": "Scenic cruising Sognefjord",
		"nl": "Scenic cruising Sognefjord"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "TRD",
	"coordinates": {
		"lat": "63.4305149",
		"lng": "10.3950528"
	},
	"label": {
		"de": "Trondheim, Norway",
		"en": "Trondheim",
		"es": "Trondheim, Norway",
		"nl": "Trondheim, Norway"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "230",
	"coordinates": {
		"lat": "63.5193789",
		"lng": "10.2808242"
	},
	"label": {
		"de": "Scenic Cruising Trondheimsfjord",
		"en": "Scenic Cruising Trondheimsfjord",
		"es": "Scenic Cruising Trondheimsfjord",
		"nl": "Scenic Cruising Trondheimsfjord"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "HVG",
	"coordinates": {
		"lat": "70.9822909",
		"lng": "25.9702074"
	},
	"label": {
		"de": "Honningsvag, Norway",
		"en": "Honningsvag",
		"es": "Honningsvag, Norway",
		"nl": "Honningsvag, Norway"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "289",
	"coordinates": {
		"lat": "71.1709533",
		"lng": "25.7836598"
	},
	"label": {
		"de": "Scenic Cruising North Cape",
		"en": "Scenic Cruising North Cape",
		"es": "Scenic Cruising North Cape",
		"nl": "Scenic Cruising North Cape"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "SVG",
	"coordinates": {
		"lat": "58.9699756",
		"lng": "5.7331073"
	},
	"label": {
		"de": "Stavanger, Norway",
		"en": "Stavanger",
		"es": "Stavanger, Norway",
		"nl": "Stavanger, Norway"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "SRA",
	"coordinates": {
		"lat": "39.8592119",
		"lng": "20.0271001"
	},
	"label": {
		"de": "Sarande, Albania",
		"en": "Sarande",
		"es": "Sarande, Albania",
		"nl": "Sarande, Albania"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "AR1",
	"coordinates": {
		"lat": "38.1731682",
		"lng": "20.4899734"
	},
	"label": {
		"de": "Argostoli, Cephalonia, Greece",
		"en": "Argostoli",
		"es": "Argostoli, Cephalonia, Greece",
		"nl": "Argostoli, Cephalonia, Greece"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "KA1",
	"coordinates": {
		"lat": "37.6463089",
		"lng": "21.3171307"
	},
	"label": {
		"de": "Katakolon (Olympia), Greece",
		"en": "Katakolon (Olympia)",
		"es": "Katakolon (Olympia), Greece",
		"nl": "Katakolon (Olympia), Greece"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "NAV",
	"coordinates": {
		"lat": "37.5673173",
		"lng": "22.8015531"
	},
	"label": {
		"de": "Nafplion, Greece",
		"en": "Nafplion",
		"es": "Nafplion, Greece",
		"nl": "Nafplion, Greece"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "ATH",
	"coordinates": {
		"lat": "37.9429857",
		"lng": "23.6469832"
	},
	"label": {
		"de": "Piraeus (Athens), Greece",
		"en": "Piraeus (Athens)",
		"es": "Piraeus (Athens), Greece",
		"nl": "Piraeus (Athens), Greece"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "JMK",
	"coordinates": {
		"lat": "37.4467354",
		"lng": "25.3288845"
	},
	"label": {
		"de": "Mykonos, Greece",
		"en": "Mykonos",
		"es": "Mykonos, Greece",
		"nl": "Mykonos, Greece"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "JTR",
	"coordinates": {
		"lat": "36.3931562",
		"lng": "25.4615092"
	},
	"label": {
		"de": "Thira (Santorini), Greece",
		"en": "Thira (Santorini)",
		"es": "Thira (Santorini), Greece",
		"nl": "Thira (Santorini), Greece"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "NAP",
	"coordinates": {
		"lat": "40.7461572",
		"lng": "14.4989344"
	},
	"label": {
		"de": "Naples (Pompeii), Italy",
		"en": "Naples (Pompeii)",
		"es": "Naples (Pompeii), Italy",
		"nl": "Naples (Pompeii), Italy"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "BCN",
	"coordinates": {
		"lat": "41.3850639",
		"lng": "2.1734035"
	},
	"label": {
		"de": "Barcelona, Spain",
		"en": "Barcelona",
		"es": "Barcelona, Spain",
		"nl": "Barcelona, Spain"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "CA1",
	"coordinates": {
		"lat": "37.9487714",
		"lng": "-6.1588601"
	},
	"label": {
		"de": "Cadiz (Seville), Spain",
		"en": "Cadiz (Seville)",
		"es": "Cadiz (Seville), Spain",
		"nl": "Cadiz (Seville), Spain"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "GIB",
	"coordinates": {
		"lat": "36.140751",
		"lng": "-5.353585"
	},
	"label": {
		"de": "Gibraltar, British Territory",
		"en": "Gibraltar",
		"es": "Gibraltar, British Territory",
		"nl": "Gibraltar, British Territory"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "AGP",
	"coordinates": {
		"lat": "36.7212737",
		"lng": "-4.4213988"
	},
	"label": {
		"de": "Malaga, Spain",
		"en": "Malaga",
		"es": "Malaga, Spain",
		"nl": "Malaga, Spain"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "ALC",
	"coordinates": {
		"lat": "38.3459963",
		"lng": "-0.4906855"
	},
	"label": {
		"de": "Alicante, Spain",
		"en": "Alicante",
		"es": "Alicante, Spain",
		"nl": "Alicante, Spain"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "PMI",
	"coordinates": {
		"lat": "39.5696005",
		"lng": "2.6501603"
	},
	"label": {
		"de": "Palma de Mallorca, Spain",
		"en": "Palma de Mallorca",
		"es": "Palma de Mallorca, Spain",
		"nl": "Palma de Mallorca, Spain"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "TLN",
	"coordinates": {
		"lat": "43.124228",
		"lng": "5.928"
	},
	"label": {
		"de": "Toulon, France",
		"en": "Toulon",
		"es": "Toulon, France",
		"nl": "Toulon, France"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "CAI",
	"coordinates": {
		"lat": "42.567651",
		"lng": "8.757222"
	},
	"label": {
		"de": "Calvi, Corsica, France",
		"en": "Calvi",
		"es": "Calvi, Corsica, France",
		"nl": "Calvi, Corsica, France"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "MCM",
	"coordinates": {
		"lat": "43.7400718",
		"lng": "7.4266436"
	},
	"label": {
		"de": "Monte Carlo, Monaco",
		"en": "Monte Carlo",
		"es": "Monte Carlo, Monaco",
		"nl": "Monte Carlo, Monaco"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "LI1",
	"coordinates": {
		"lat": "43.7000164",
		"lng": "10.3977994"
	},
	"label": {
		"de": "Livorno (Florence\/Pisa), Italy",
		"en": "Livorno (Florence\/Pisa)",
		"es": "Livorno (Florence\/Pisa), Italy",
		"nl": "Livorno (Florence\/Pisa), Italy"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "SR3",
	"coordinates": {
		"lat": "43.42519",
		"lng": "6.76837"
	},
	"label": {
		"de": "Saint Raphael, France",
		"en": "Saint Raphael",
		"es": "Saint Raphael, France",
		"nl": "Saint Raphael, France"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "AJA",
	"coordinates": {
		"lat": "41.919229",
		"lng": "8.738635"
	},
	"label": {
		"de": "Ajaccio, Corsica, France",
		"en": "Ajaccio",
		"es": "Ajaccio, Corsica, France",
		"nl": "Ajaccio, Corsica, France"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "LEI",
	"coordinates": {
		"lat": "36.834047",
		"lng": "-2.4637136"
	},
	"label": {
		"de": "Almeria, Spain",
		"en": "Almeria",
		"es": "Almeria, Spain",
		"nl": "Almeria, Spain"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "CT2",
	"coordinates": {
		"lat": "35.8893874",
		"lng": "-5.3213455"
	},
	"label": {
		"de": "Ceuta, Spanish Morocco, Spain",
		"en": "Ceuta",
		"es": "Ceuta, Spanish Morocco, Spain",
		"nl": "Ceuta, Spanish Morocco, Spain"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "MRS",
	"coordinates": {
		"lat": "43.296482",
		"lng": "5.36978"
	},
	"label": {
		"de": "Marseille (Provence), France",
		"en": "Marseille (Provence)",
		"es": "Marseille (Provence), France",
		"nl": "Marseille (Provence), France"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "SE2",
	"coordinates": {
		"lat": "43.4078758",
		"lng": "3.7008219"
	},
	"label": {
		"de": "Sete, France",
		"en": "Sete",
		"es": "Sete, France",
		"nl": "Sete, France"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "KRS",
	"coordinates": {
		"lat": "58.1599119",
		"lng": "8.0182064"
	},
	"label": {
		"de": "Kristiansand, Norway",
		"en": "Kristiansand",
		"es": "Kristiansand, Norway",
		"nl": "Kristiansand, Norway"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "218",
	"coordinates": {
		"lat": "59.2969901",
		"lng": "10.5694033"
	},
	"label": {
		"de": "Scenic cruising Oslo Fjord",
		"en": "Scenic cruising Oslo Fjord",
		"es": "Scenic cruising Oslo Fjord",
		"nl": "Scenic cruising Oslo Fjord"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "OSL",
	"coordinates": {
		"lat": "59.9138688",
		"lng": "10.7522454"
	},
	"label": {
		"de": "Oslo, Norway",
		"en": "Oslo",
		"es": "Oslo, Norway",
		"nl": "Oslo, Norway"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "CPH",
	"coordinates": {
		"lat": "55.6760968",
		"lng": "12.5683371"
	},
	"label": {
		"de": "Copenhagen, Denmark",
		"en": "Copenhagen",
		"es": "Copenhagen, Denmark",
		"nl": "Copenhagen, Denmark"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "KEL",
	"coordinates": {
		"lat": "54.3384297",
		"lng": "10.1559294"
	},
	"label": {
		"de": "Kiel (Hamburg), Germany",
		"en": "Kiel (Hamburg)",
		"es": "Kiel (Hamburg), Germany",
		"nl": "Kiel (Hamburg), Germany"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "TLL",
	"coordinates": {
		"lat": "59.4369608",
		"lng": "24.7535746"
	},
	"label": {
		"de": "Tallinn, Estonia",
		"en": "Tallinn",
		"es": "Tallinn, Estonia",
		"nl": "Tallinn, Estonia"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "LED",
	"coordinates": {
		"lat": "59.9342802",
		"lng": "30.3350986"
	},
	"label": {
		"de": "St. Petersburg, Russia",
		"en": "St. Petersburg",
		"es": "St. Petersburg, Russia",
		"nl": "St. Petersburg, Russia"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "HEL",
	"coordinates": {
		"lat": "60.1698557",
		"lng": "24.938379"
	},
	"label": {
		"de": "Helsinki, Finland",
		"en": "Helsinki",
		"es": "Helsinki, Finland",
		"nl": "Helsinki, Finland"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "STO",
	"coordinates": {
		"lat": "59.3293235",
		"lng": "18.0685808"
	},
	"label": {
		"de": "Stockholm, Sweden",
		"en": "Stockholm",
		"es": "Stockholm, Sweden",
		"nl": "Stockholm, Sweden"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "ZWD",
	"coordinates": {
		"lat": "54.1774508",
		"lng": "12.0904908"
	},
	"label": {
		"de": "Warnemunde (Berlin), Germany",
		"en": "Warnemunde (Berlin)",
		"es": "Warnemunde (Berlin), Germany",
		"nl": "Warnemunde (Berlin), Germany"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "HFT",
	"coordinates": {
		"lat": "70.6632359",
		"lng": "23.6817267"
	},
	"label": {
		"de": "Hammerfest, Norway",
		"en": "Hammerfest",
		"es": "Hammerfest, Norway",
		"nl": "Hammerfest, Norway"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "SQ1",
	"coordinates": {
		"lat": "55.990003",
		"lng": "-3.399045"
	},
	"label": {
		"de": "South Queensferry (Edinburgh), Scotland, United Kingdom",
		"en": "South Queensferry (Edinburgh)",
		"es": "South Queensferry (Edinburgh), Scotland, United Kingdom",
		"nl": "South Queensferry (Edinburgh), Scotland, United Kingdom"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "IN1",
	"coordinates": {
		"lat": "57.687967",
		"lng": "-4.162895"
	},
	"label": {
		"de": "Invergordon (Inverness), Scotland, United Kingdom",
		"en": "Invergordon (Inverness)",
		"es": "Invergordon (Inverness), Scotland, United Kingdom",
		"nl": "Invergordon (Inverness), Scotland, United Kingdom"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "KOI",
	"coordinates": {
		"lat": "58.984674",
		"lng": "-2.962249"
	},
	"label": {
		"de": "Kirkwall, Scotland, United Kingdom",
		"en": "Kirkwall",
		"es": "Kirkwall, Scotland, United Kingdom",
		"nl": "Kirkwall, Scotland, United Kingdom"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "REK",
	"coordinates": {
		"lat": "64.1265206",
		"lng": "-21.8174393"
	},
	"label": {
		"de": "Reykjavik, Iceland",
		"en": "Reykjavik",
		"es": "Reykjavik, Iceland",
		"nl": "Reykjavik, Iceland"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "IFJ",
	"coordinates": {
		"lat": "66.0611061",
		"lng": "-23.1888599"
	},
	"label": {
		"de": "Isafjordur, Iceland",
		"en": "Isafjordur",
		"es": "Isafjordur, Iceland",
		"nl": "Isafjordur, Iceland"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "213",
	"coordinates": {
		"lat": "66.0611061",
		"lng": "-23.1888599"
	},
	"label": {
		"de": "Scenic Cruising Isafjardurdjur",
		"en": "Scenic Cruising Isafjardurdjur",
		"es": "Scenic Cruising Isafjardurdjur",
		"nl": "Scenic Cruising Isafjardurdjur"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "AEY",
	"coordinates": {
		"lat": "65.6884921",
		"lng": "-18.1261693"
	},
	"label": {
		"de": "Akureyri, Iceland",
		"en": "Akureyri",
		"es": "Akureyri, Iceland",
		"nl": "Akureyri, Iceland"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "214",
	"coordinates": {
		"lat": "66.0685282",
		"lng": "-18.4163704"
	},
	"label": {
		"de": "Scenic cruising Eyjafjordur",
		"en": "Scenic cruising Eyjafjordur",
		"es": "Scenic cruising Eyjafjordur",
		"nl": "Scenic cruising Eyjafjordur"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "DJU",
	"coordinates": {
		"lat": "64.656888",
		"lng": "-14.2900509"
	},
	"label": {
		"de": "Djupivogur, Iceland",
		"en": "Djupivogur",
		"es": "Djupivogur, Iceland",
		"nl": "Djupivogur, Iceland"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "HE1",
	"coordinates": {
		"lat": "56.030787",
		"lng": "12.592127"
	},
	"label": {
		"de": "Helsingor, Denmark",
		"en": "Helsingor",
		"es": "Helsingor, Denmark",
		"nl": "Helsingor, Denmark"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "QJV",
	"coordinates": {
		"lat": "57.725004",
		"lng": "10.579186"
	},
	"label": {
		"de": "Skagen, Denmark",
		"en": "Skagen",
		"es": "Skagen, Denmark",
		"nl": "Skagen, Denmark"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "LYR",
	"coordinates": {
		"lat": "78.2231722",
		"lng": "15.626723"
	},
	"label": {
		"de": "Longyearbyen, Norway",
		"en": "Longyearbyen",
		"es": "Longyearbyen, Norway",
		"nl": "Longyearbyen, Norway"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "SCL",
	"coordinates": {
		"lat": "79.36",
		"lng": "12.52"
	},
	"label": {
		"de": "Scenic cruising Liefdefd Fjord",
		"en": "Scenic cruising Liefdefd Fjord",
		"es": "Scenic cruising Liefdefd Fjord",
		"nl": "Scenic cruising Liefdefd Fjord"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "288",
	"coordinates": {
		"lat": "77",
		"lng": "166"
	},
	"label": {
		"de": "Scenic Cruising Polar Icecap",
		"en": "Scenic Cruising Polar Icecap",
		"es": "Scenic Cruising Polar Icecap",
		"nl": "Scenic Cruising Polar Icecap"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "NA5",
	"coordinates": {
		"lat": "78.9235381",
		"lng": "11.9098951"
	},
	"label": {
		"de": "Ny Alesund, Spitsbergen, Norway",
		"en": "Ny Alesund",
		"es": "Ny Alesund, Spitsbergen, Norway",
		"nl": "Ny Alesund, Spitsbergen, Norway"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "SCI",
	"coordinates": {
		"lat": "56.41528444",
		"lng": "-5.481944"
	},
	"label": {
		"de": "Scenic cruising Lilliehook Fjord",
		"en": "Scenic cruising Lilliehook Fjord",
		"es": "Scenic cruising Lilliehook Fjord",
		"nl": "Scenic cruising Lilliehook Fjord"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "LOP",
	"coordinates": {
		"lat": "78.2231722",
		"lng": "15.626723"
	},
	"label": {
		"de": "Longyearbyen Outer P\/S",
		"en": "Longyearbyen Outer P\/S",
		"es": "Longyearbyen Outer P\/S",
		"nl": "Longyearbyen Outer P\/S"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "318",
	"coordinates": {
		"lat": "71.031818",
		"lng": "-8.2920347"
	},
	"label": {
		"de": "Cruising Jan Mayen Island",
		"en": "Cruising Jan Mayen Island",
		"es": "Cruising Jan Mayen Island",
		"nl": "Cruising Jan Mayen Island"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "RO1",
	"coordinates": {
		"lat": "56.03647",
		"lng": "-3.423064"
	},
	"label": {
		"de": "Rosyth (Edinburgh), Scotland, United Kingdom",
		"en": "Rosyth (Edinburgh)",
		"es": "Rosyth (Edinburgh), Scotland, United Kingdom",
		"nl": "Rosyth (Edinburgh), Scotland, United Kingdom"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "LWK",
	"coordinates": {
		"lat": "60.1529871",
		"lng": "-1.1492932"
	},
	"label": {
		"de": "Lerwick, Shetland Islands, United Kingdom",
		"en": "Lerwick",
		"es": "Lerwick, Shetland Islands, United Kingdom",
		"nl": "Lerwick, Shetland Islands, United Kingdom"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "PTR",
	"coordinates": {
		"lat": "57.412474",
		"lng": "-6.196023"
	},
	"label": {
		"de": "Portree (Isle of Skye), Scotland, United Kingdom",
		"en": "Portree (Isle of Skye)",
		"es": "Portree (Isle of Skye), Scotland, United Kingdom",
		"nl": "Portree (Isle of Skye), Scotland, United Kingdom"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "NCL",
	"coordinates": {
		"lat": "54.978252",
		"lng": "-1.61778"
	},
	"label": {
		"de": "Newcastle upon Tyne, England, United Kingdom",
		"en": "Newcastle upon Tyne",
		"es": "Newcastle upon Tyne, England, United Kingdom",
		"nl": "Newcastle upon Tyne, England, United Kingdom"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "SCR",
	"coordinates": {
		"lat": "58.611026",
		"lng": "-3.552627"
	},
	"label": {
		"de": "Scrabster, Scotland, United Kingdom",
		"en": "Scrabster",
		"es": "Scrabster, Scotland, United Kingdom",
		"nl": "Scrabster, Scotland, United Kingdom"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "DUB",
	"coordinates": {
		"lat": "53.3498053",
		"lng": "-6.2603097"
	},
	"label": {
		"de": "Dublin, Ireland",
		"en": "Dublin",
		"es": "Dublin, Ireland",
		"nl": "Dublin, Ireland"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "LPL",
	"coordinates": {
		"lat": "53.4083714",
		"lng": "-2.9915726"
	},
	"label": {
		"de": "Liverpool, England, United Kingdom",
		"en": "Liverpool",
		"es": "Liverpool, England, United Kingdom",
		"nl": "Liverpool, England, United Kingdom"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "BFS",
	"coordinates": {
		"lat": "54.597285",
		"lng": "-5.93012"
	},
	"label": {
		"de": "Belfast, Northern Ireland, United Kingdom",
		"en": "Belfast",
		"es": "Belfast, Northern Ireland, United Kingdom",
		"nl": "Belfast, Northern Ireland, United Kingdom"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "MHW",
	"coordinates": {
		"lat": "51.714306",
		"lng": "-5.042697"
	},
	"label": {
		"de": "Milford Haven, Wales, United Kingdom",
		"en": "Milford Haven",
		"es": "Milford Haven, Wales, United Kingdom",
		"nl": "Milford Haven, Wales, United Kingdom"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "ISC",
	"coordinates": {
		"lat": "49.925002",
		"lng": "-6.298672"
	},
	"label": {
		"de": "St Marys, Isles of Scilly, United Kingdom",
		"en": "St Marys",
		"es": "St Marys, Isles of Scilly, United Kingdom",
		"nl": "St Marys, Isles of Scilly, United Kingdom"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "PTL",
	"coordinates": {
		"lat": "50.5475363",
		"lng": "-2.4343209"
	},
	"label": {
		"de": "Portland (Weymouth), England, United Kingdom",
		"en": "Portland (Weymouth)",
		"es": "Portland (Weymouth), England, United Kingdom",
		"nl": "Portland (Weymouth), England, United Kingdom"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "GCI",
	"coordinates": {
		"lat": "49.4541677",
		"lng": "-2.5497069"
	},
	"label": {
		"de": "St Peter Port, Guernsey",
		"en": "St Peter Port",
		"es": "St Peter Port, Guernsey",
		"nl": "St Peter Port, Guernsey"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "RNN",
	"coordinates": {
		"lat": "55.101017",
		"lng": "14.708329"
	},
	"label": {
		"de": "Ronne (Bornholm), Denmark",
		"en": "Ronne (Bornholm)",
		"es": "Ronne (Bornholm), Denmark",
		"nl": "Ronne (Bornholm), Denmark"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "KLJ",
	"coordinates": {
		"lat": "55.7032948",
		"lng": "21.1442794"
	},
	"label": {
		"de": "Klaipeda, Lithuania",
		"en": "Klaipeda",
		"es": "Klaipeda, Lithuania",
		"nl": "Klaipeda, Lithuania"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "233",
	"coordinates": {
		"lat": "59.38778",
		"lng": "18.73581"
	},
	"label": {
		"de": "Cruising Stockholm Archipelago",
		"en": "Cruising Stockholm Archipelago",
		"es": "Cruising Stockholm Archipelago",
		"nl": "Cruising Stockholm Archipelago"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "131",
	"coordinates": {
		"lat": "54.3750839",
		"lng": "10.1469849"
	},
	"label": {
		"de": "Enter Kiel Canal Holtenau",
		"en": "Enter Kiel Canal Holtenau",
		"es": "Enter Kiel Canal Holtenau",
		"nl": "Enter Kiel Canal Holtenau"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "278",
	"coordinates": {
		"lat": "54.130117",
		"lng": "9.6397837"
	},
	"label": {
		"de": "Daylight transit Kiel Canal",
		"en": "Daylight transit Kiel Canal",
		"es": "Daylight transit Kiel Canal",
		"nl": "Daylight transit Kiel Canal"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "132",
	"coordinates": {
		"lat": "53.8988902",
		"lng": "9.1338853"
	},
	"label": {
		"de": "Exit Kiel Canal Brunsbuttel",
		"en": "Exit Kiel Canal Brunsbuttel",
		"es": "Exit Kiel Canal Brunsbuttel",
		"nl": "Exit Kiel Canal Brunsbuttel"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "KBL",
	"coordinates": {
		"lat": "54.6347625",
		"lng": "-8.4547084"
	},
	"label": {
		"de": "Killybegs, Donegal, Ireland",
		"en": "Killybegs",
		"es": "Killybegs, Donegal, Ireland",
		"nl": "Killybegs, Donegal, Ireland"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "GWY",
	"coordinates": {
		"lat": "53.270668",
		"lng": "-9.0567905"
	},
	"label": {
		"de": "Galway, Ireland",
		"en": "Galway",
		"es": "Galway, Ireland",
		"nl": "Galway, Ireland"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "BYT",
	"coordinates": {
		"lat": "51.6800803",
		"lng": "-9.4525763"
	},
	"label": {
		"de": "Bantry, Ireland",
		"en": "Bantry",
		"es": "Bantry, Ireland",
		"nl": "Bantry, Ireland"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "WAT",
	"coordinates": {
		"lat": "52.2593197",
		"lng": "-7.1100703"
	},
	"label": {
		"de": "Waterford, Ireland",
		"en": "Waterford",
		"es": "Waterford, Ireland",
		"nl": "Waterford, Ireland"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "VLS",
	"coordinates": {
		"lat": "51.4536672",
		"lng": "3.5709125"
	},
	"label": {
		"de": "Vlissingen (Flushing), Netherlands",
		"en": "Vlissingen (Flushing)",
		"es": "Vlissingen (Flushing), Netherlands",
		"nl": "Vlissingen (Flushing), Netherlands"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "351",
	"coordinates": {
		"lat": "50.6842083",
		"lng": "3.793011"
	},
	"label": {
		"de": "Scenic Cruising Scheldt River",
		"en": "Scenic Cruising Scheldt River",
		"es": "Scenic Cruising Scheldt River",
		"nl": "Scenic Cruising Scheldt River"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "ANR",
	"coordinates": {
		"lat": "51.2185339",
		"lng": "4.4207745"
	},
	"label": {
		"de": "Brussels (Antwerp), Belgium",
		"en": "Brussels (Antwerp)",
		"es": "Brussels (Antwerp), Belgium",
		"nl": "Brussels (Antwerp), Belgium"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "241",
	"coordinates": {
		"lat": "60.15",
		"lng": "-43.883333"
	},
	"label": {
		"de": "Cruising Prince Christian Sund",
		"en": "Cruising Prince Christian Sund",
		"es": "Cruising Prince Christian Sund",
		"nl": "Cruising Prince Christian Sund"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "JJU",
	"coordinates": {
		"lat": "60.7189864",
		"lng": "-46.0353458"
	},
	"label": {
		"de": "Qaqortoq, Greenland",
		"en": "Qaqortoq",
		"es": "Qaqortoq, Greenland",
		"nl": "Qaqortoq, Greenland"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "NA2",
	"coordinates": {
		"lat": "60.1424955",
		"lng": "-45.239495"
	},
	"label": {
		"de": "Nanortalik, Greenland",
		"en": "Nanortalik",
		"es": "Nanortalik, Greenland",
		"nl": "Nanortalik, Greenland"
	},
	"type": "seaType",
	"weight": "3"
}, {
	"code": "YYT",
	"coordinates": {
		"lat": "47.5615096",
		"lng": "-52.7125768"
	},
	"label": {
		"de": "St Johns, Newfoundland, Canada",
		"en": "St Johns",
		"es": "St Johns, Newfoundland, Canada",
		"nl": "St Johns, Newfoundland, Canada"
	},
	"type": "seaType",
	"weight": "3"
}];
// var fetch = require('node-fetch');
//Calling json files from gateway.js
// fetch('http://localhost:8081/getItineraries')
//     .then(function(res) {
//         return res.json();
//     }).then(function(json) {
//         aemItin = json;
//     });
    // console.log(aemItin);
//
// fetch('http://localhost:8081/getPorts')
//     .then(function(res) {
//         return res.json();
//     }).then(function(json) {
//         aemPorts = json;
//     });
    // console.log(aemPorts);




// Updating ports from local test.points.json in public folder for testing. Replace for API call o data feed.


        var data = aemPorts;
        thePorts = data;


        MongoClient.connect(mongoConnect, function(err, db) {
            if(err) throw err;
          var collection = db.collection("points");

          pendingItems = data.length;
          // Loop each elements
          data.forEach(function (item) {
            var portLng = item.coordinates.lng;
            var portLat = item.coordinates.lat;
            //vars have 4 places after . for coordinates
            var roundPortLng = parseFloat(portLng).toFixed(4);
            var roundPortLat = parseFloat(portLat).toFixed(4);

              collection.update(
                  { "code": item.code},
                  {
                      "code": item.code,
                      "type":item.type,
                      "icon":{},
                      "position":"east",  //East is the position by default that will be defined later in the tool
                      "state": true,//True is the show label by default later can change in the tool for export
                      "coordinates": {
                        "lat": roundPortLat,
                        "lng": roundPortLng
                      },
                      "label": item.label
                  },
                  { "upsert": true },
                  function (err, object) {
                      if(err) {
                          db.close();
                          throw err;
                      }
                      if (typeof(object.result.upserted) !== 'undefined') {
                          // console.log("Inserted item:", item.id);
                      } else {
                          // console.log("Updated item:", item.id);
                      }

                      // Check if any pending item
                      // in order to close DB connection
                      pendingItems -= 1;
                      if (!pendingItems) {
                          // close connection
                          db.close();
                      }
                  }
              );
          });


});

// as a separated task checking itineraries.( should run separated of the points updates and after because will build relations based on the ports )


            var dataItineraries = aemItin;
          // Connect to DB
            MongoClient2.connect(mongoConnect, function(err, db) {
              if(err) throw err;
              var collectionItineraries = db.collection("itineraries");
              var collectionRelation = db.collection("relations");
              pendingItems2 = dataItineraries.length;
              // Keep track of all relations in every itinerary
              var allItineraryRelations = [];
              // Loop each elements

              dataItineraries.forEach(function (item) {
                var ports = item.ports;

                var portsAmmount = ports.length;
                var allPortsRelation = [];
                var allDaysRelation = [];
                var allSeaDaysRelation =[];
                var seaDay = 0;

                var firstPortDays = 1;
                var secondPortDays = 1;

              // If a relation exists in the DB I can't modify it.
              //If a relation doesn't exist in the DB I need to create it with geometry pulled form the db.
                for( var i=0; i< portsAmmount - 1; i++){

                  if(ports[i] === ports[i+1] ){
                      firstPortDays = firstPortDays + 1;
                      seaDay = 0;
                  }  if(ports[i-1] === ports[i]){
                    // console.log("i-1");
                  } if (ports[i] != ports[i+1] ) {

                    if(ports[i] === "***"){
                      ports[i]= ports[i+1];
                      seaDay = seaDay +1 ;
                      ports[i+1] = ports[i+2];
                    }
                    if(ports[i+1] === "***"){
                        ports[i+1]= ports[i+2];
                        seaDay = seaDay +1 ;
                    }
                    if(ports[i+1] != "***" && ports[i] != "***" && ports[i] != ports[i+1]){
                      allPortsRelation.push(ports[i], ports[i+1]);
                      firstPortDays = 1;
                      seaDay = 0;
                    }

                    // allSeaDaysRelation.push(seaDay);
                    allDaysRelation.push(firstPortDays);
                    allSeaDaysRelation.push(seaDay);
                  }
                }


                //for each itinerary all possible relations in allPortsRelation [i]&[i+1]
                // Creating the relation arrays
                    function chunk(arr, n) {
                        return arr.reduce(function(p, cur, i) {
                            (p[i/n|0] = p[i/n|0] || []).push(cur);
                            return p;
                        },[]);
                    }
                    allPortsRelation = chunk(allPortsRelation, 2);
                    // console.log("allPortsRelation", allPortsRelation);
                      var firstPort, secondPort ={};
                      var firstPortName, secondPortName ={};
                    //For each relation check DB and insert if isn't there.
                    for (var value of allPortsRelation) {

                          //LATER GENERATE DAYS FROM HERE
                          // console.log();
                          var relationCode = String(value);
                          if(value[0] == value[1]){

                          }


                          var isNewRelation = (allItineraryRelations.indexOf(relationCode) < 0);
                          if (isNewRelation) {

                            allItineraryRelations.push(relationCode);

                               //need access to each port coordinates.
                               Object.keys(thePorts).map(function(id){
                                       if(thePorts[id].code === value[0]){
                                          firstPort = thePorts[id];
                                          firstPortName = thePorts[id].label;
                                        }
                                        if(thePorts[id].code === value[1]){
                                           secondPort = thePorts[id];
                                           secondPortName = thePorts[id].label;
                                         }
                                 });
                              //DECLARING NEW RELATION,

                              var firstCoor =[ firstPort.coordinates.lng, firstPort.coordinates.lat];
                              var secondCoor = [ secondPort.coordinates.lng, secondPort.coordinates.lat];

                                var newRelation = {
                                  "relationCode" : relationCode,
                                  "ports" : value,
                                  "type" : "Feature",
                                  "firstPortName": firstPortName,
                                  "secondPortName": secondPortName,
                                  "firstPortDays": firstPortDays,
                                  "secondPortDays": secondPortDays,
                                  "baseCoordinates":[firstCoor, secondCoor],
                                  "onSeaDays": allSeaDaysRelation[allPortsRelation.indexOf(value)],
                                  "properties" : "default",
                                  "modifiedRelation": false,
                                  "geometry" : {
                                      "basic" : {
                                          "svgPath" : "M21,365 C92,359 307,341 450,329 593,317 807,298 879,292",
                                          "type" : "LineString",
                                          "icons":{},
                                          "brand": item.brand,
                                          "default": true,
                                          "coordinates" : [firstCoor, secondCoor],
                                          "relType" : "seaType"
                                        }
                                  }
                                };

                              // Insert new Relation if it doesn't exist in DB
                               var relationExists = collectionRelation.findOne(
                                { "relationCode":  newRelation.relationCode }, //Based on the ID do the search
                                function(err, document) {
                                  // console.log("relation exists", err, document);
                                  // console.log("relation exists");
                                  if (!document) {
                                    // insert new relation
                                    // console.log("inserting relation");
                                    var updateRelation = true;
                                    collectionRelation.insert(
                                      { // Mapping external json vs my app local DB fields
                                        "relationCode":  newRelation.relationCode,
                                        "ports" : newRelation.ports,
                                        "type" : "Feature",
                                        "firstPortName": newRelation.firstPortName,
                                        "secondPortName": newRelation.secondPortName,
                                        "firstPortDays": newRelation.firstPortDays,
                                        "secondPortDays": newRelation.secondPortDays,
                                        "baseCoordinates":[firstCoor, secondCoor],
                                        "onSeaDays": allSeaDaysRelation[allPortsRelation.indexOf(value)],
                                        "properties" : "default",
                                        "modifiedRelation": false,
                                        "geometry" : {
                                                basic: {
                                                  "svgPath" : "M21,365 C92,359 307,341 450,329 593,317 807,298 879,292",
                                                  "type" : "LineString",
                                                  "icons":{},
                                                  "brand": item.brand,
                                                  "default":true,
                                                  "coordinates" :[firstCoor, secondCoor],
                                                  "relType" : "seaType"
                                                }
                                        }
                                      }, function (err2, document2) {
                                        if (document2) {
                                          // console.log("inserted relation", document2);
                                        }
                                      }
                                    );
                                  }
                                }
                              );
                          }
                        }

    // Itinnerary update
                  collectionItineraries.update(
                      { "id": item.id },//Based on the ID do the search
                      { // Mapping external json vs my app local DB fields
                          "id": item.id,
                          "itineraryName": item.name,
                          "days":item.days,
                          "brand": item.brand,
                          "ports": item.ports,
                          "finalItinerary": null
                      },
                      { "upsert": true },
                      function (err, object) {
                          if(err) {
                              db.close();
                              throw err;
                          }
                          //console.dir(object);
                          if (typeof(object.result.upserted) !== 'undefined') {

                          }
                          // Check if any pending item
                          // in order to close DB connection
                          pendingItems2 -= 1;
                          if (!pendingItems2) {
                              // close connection
                              db.close();
                          }
                      }
                  );
              });
  });
