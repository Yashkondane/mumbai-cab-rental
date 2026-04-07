const fs = require('fs');

const keywords = [
  "mumbai pune cab", "pune to mumbai cab", "pune to mumbai airport cab", "mumbai airport to pune cab",
  "pune mumbai cab", "pune to mumbai taxi", "mumbai to pune taxi", "pune mumbai airport drop",
  "mumbai to pune cab service", "one way cab pune to mumbai", "pune to mumbai cab service",
  "best cab service pune to mumbai", "one way cab mumbai to pune", "pune mumbai taxi service",
  "taxi from mumbai airport to pune", "pune to mumbai international airport cab", "pune to mumbai shared cab",
  "mumbai pune cab one way", "pune to mumbai taxi one way", "pune to mumbai cab booking",
  "best cab service mumbai to pune", "pune to mumbai airport taxi", "dadar to pune cab",
  "cab for mumbai to pune", "cab service mumbai to pune", "mumbai international airport to pune cab",
  "cab booking mumbai to pune", "pune to mumbai suv cab", "one way taxi mumbai to pune",
  "mumbai to pune taxi booking", "cab booking for mumbai to pune", "cab booking from mumbai airport to pune",
  "cab from dadar to pune", "cab services pune to mumbai", "cabs for mumbai from pune",
  "dadar pune taxi", "dadar pune taxi fare", "dadar to pune cab fare",
  "cab from mumbai to nasik", "taxi from mumbai to nasik", "nasik to mumbai airport cab",
  "mumbai airport to nasik taxi", "nasik to mumbai taxi service", "nasik to mumbai cab service",
  "taxi fare from mumbai to nasik", "nasik to mumbai airport drop", "nasik to mumbai taxi",
  "cab from nasik to mumbai", "taxi from nasik to mumbai", "mumbai nasik cab",
  "mumbai to nasik cab", "mumbai nashik cab", "mumbai to nasik taxi",
  "mumbai to nasik taxi service", "mumbai airport to nasik cab", "cab service mumbai to nasik",
  
  // Newly Added Nashik Keywords
  "nasik mumbai cab", "nasik to mumbai cab", "nashik to mumbai cab", "nashik to mumbai taxi",
  "nashik to mumbai cab booking", "taxi nashik to mumbai", "mumbai nashik cabs",
  "mumbai nashik cab service", "nashik to mumbai airport cab", "nashik to mumbai airport taxi",
  "nashik to mumbai taxi service", "nashik to mumbai cab service", "nasik mumbai cab service",
  "mumbai airport to nashik cab service", "taxi from mumbai airport to nashik",
  "taxi service from mumbai airport to nashik", "mumbai airport to nashik shared taxi service",
  "one way cab nashik to mumbai",

  // Goa Expansion
  "mumbai goa cab", "mumbai to goa car rental", "goa to mumbai cab", "mumbai to goa taxi fare",
  "mumbai to goa taxi", "goa to mumbai taxi", "mumbai to goa cab fare", "mumbai to goa cab price",
  "mumbai to goa by car fare", "goa to mumbai cab service", "car hire from mumbai to goa",
  "goa to mumbai cab booking", "mumbai goa cab service", "mumbai to goa cab booking",
  "mumbai to goa cab charges", "mumbai to goa cab rates", "mumbai to goa cab service",
  "mumbai to goa car hire", "mumbai to goa taxi price", "mumbai to goa taxi rate",
  "mumbai to goa taxi one way fare", "goa to mumbai taxi cost", "book cab from mumbai to goa",
  "car on rent from mumbai to goa", "goa to mumbai cab fare", "goa to mumbai cab price",
  "goa to mumbai private taxi", "goa to mumbai taxi fare", "goa to mumbai taxi one way fare",
  "mumbai airport to goa cab", "mumbai to goa by road taxi fare", "mumbai to goa cab booking price",
  "mumbai to goa cab hire", "mumbai to goa cab service fare", "mumbai to goa car booking",
  "mumbai to goa car rental with driver", "mumbai to goa car service", "mumbai to goa ola cabs fare",
  "mumbai to goa one way cab", "mumbai to goa one way taxi", "mumbai to goa taxi service",
  "taxi service from mumbai to goa",

  // Lonavala Expansion
  "mumbai lonavala cab", "mumbai to lonavala taxi", "mumbai to lonavala cab booking", "lonavala to mumbai cab", "mumbai lonavala taxi fare", "mumbai to lonavala cab charges", "mumbai to lonavala taxi charges", "cab service from mumbai to lonavala", "mumbai lonavala cab service", "taxi service mumbai to lonavala", "car rental mumbai to lonavala", "mumbai to lonavala cab price", "car from mumbai to lonavala", "lonavala to mumbai taxi", "mumbai to lonavala cab package", "mumbai to lonavala taxi price", "lonavala to mumbai taxi one way", "mumbai to lonavala car rental", "lonavala to mumbai cab one way", "lonavala to mumbai taxi fare", "mumbai lonavala car", "one way cab from mumbai to lonavala", "mumbai to lonavala taxi cost", "mumbai to lonavala cab for 2 days", "lonavala mumbai taxi service", "cab fare from mumbai to lonavala", "lonavala to mumbai cab service", "mumbai airport to lonavala taxi fare", "mumbai to lonavala taxi one way", "taxi from mumbai airport to lonavala", "borivali to lonavala taxi fare", "karjat to lonavala taxi fare", "panvel to lonavala taxi fare", "mumbai to lonavala car rental price", "borivali to lonavala cab", "dadar to lonavala cab", "dadar to lonavala taxi fare", "mumbai airport to lonavala cab", "mumbai to lonavala uber fare", "one way cab mumbai to lonavala", "thane to lonavala cab", "book cab from lonavala to mumbai",  "andheri to lonavala cab", "bhayandar to lonavala taxi fare", "book cab from mumbai to lonavala", "kalyan to lonavala taxi fare",

  // Shirdi Expansion
  "mumbai shirdi cab", "mumbai to shirdi taxi", "mumbai to shirdi taxi fare", "mumbai to shirdi car rental", "mumbai to shirdi taxi service", "shirdi to mumbai taxi fare", "mumbai to shirdi cabs round trip", "mumbai to shirdi taxi innova fare", "mumbai to shirdi cab service", "mumbai airport to shirdi taxi", "mumbai airport to shirdi taxi fare", "car rental mumbai to shirdi", "mumbai to shirdi taxi price", "mumbai to shirdi taxi one way", "shirdi to mumbai taxi one way", "mumbai to shirdi cab fare", "mumbai to shirdi by car", "mumbai to shirdi cab price", "cab for shirdi from mumbai", "taxi from shirdi to mumbai", "book taxi from mumbai to shirdi", "cab charges from mumbai to shirdi", "cab from mumbai airport to shirdi", "cab from shirdi to mumbai", "car hire for shirdi from mumbai", "car hire mumbai to shirdi", "mumbai to shirdi cab booking", "mumbai to shirdi cab booking online", "mumbai to shirdi innova fare", "mumbai to shirdi round trip taxi fare", "mumbai to shirdi taxi charges", "mumbai to shirdi taxi travel time", "shirdi to mumbai cab fare", "shirdi to mumbai cab price", "shirdi to mumbai taxi service",  "taxi for shirdi from mumbai", "taxi from mumbai airport to taxi", "taxi service from mumbai to shirdi",

  // Kolhapur Expansion
  "mumbai kolhapur cab", "kolhapur to mumbai cab", "mumbai kolhapur taxi", "kolhapur mumbai taxi service", "mumbai to kolhapur car rental", "kolhapur to mumbai car rental", "mumbai kolhapur cab booking", "kolhapur mumbai cab service", "mumbai to kolhapur one way cab", "kolhapur to mumbai one way taxi", "mumbai to kolhapur outstation cab", "kolhapur to mumbai outstation taxi", "mumbai airport to kolhapur cab", "kolhapur to mumbai airport taxi", "best cab service mumbai to kolhapur", "online mumbai kolhapur cab booking", "24/7 mumbai kolhapur taxi service", "mumbai kolhapur cab near me", "kolhapur mumbai taxi near me", "kolhapur travel cab to mumbai", "mumbai kolhapur private taxi", "mumbai kolhapur innova cab", "mumbai kolhapur sedan cab", "mumbai kolhapur suv taxi", "mumbai kolhapur luxury cab", "dadar to kolhapur cab", "pune to kolhapur cab", "kolhapur to navi mumbai taxi",

  // Mumbai Airport Expansion
  "cab from pune to mumbai airport", "taxi from pune to mumbai airport", "book taxi from mumbai to pune", "cab booking from pune to mumbai airport", "cab from pune to mumbai international airport", "pune to mumbai international airport taxi", "taxi service for mumbai to pune", "taxi to lonavala from mumbai", "mumbai airport cab", "airport taxi mumbai", "mumbai airport taxi", "car hire mumbai airport", "airport cabs mumbai", "mumbai airport to shirdi taxi", "mumbai airport taxi service", "prepaid taxi mumbai airport", "nasik to mumbai airport cab", "taxi in mumbai airport", "book cab from pune to mumbai airport", "cab from mumbai airport to shirdi", "mumbai airport terminal 2 to terminal 1 taxi fare", "mumbai airport to nasik taxi", "mumbai international airport cab service", "mumbai international airport prepaid taxi", "mumbai international airport taxi service", "pune to mumbai airport cab services", "pune to mumbai airport taxi service", "pune to mumbai international airport drop", "taxi service from pune to mumbai airport", "mumbai airport transfer", "airport transfer mumbai", "mumbai airport taxi booking", "airport drop mumbai", "mumbai airport pickup taxi service", "mumbai airport taxi booking online", "airport transfer mumbai international", "mumbai airport to shirdi taxi fare", "taxi from mumbai airport", "taxi from mumbai airport to vadodara", "airport drop pune to mumbai", "mumbai airport to valsad taxi fare", "one way taxi from mumbai to vadodara", "mumbai to pune airport cab", "mumbai airport taxi fare", "airport cab booking mumbai", "airport cab pune to mumbai", "airport cab service mumbai", "airport mumbai to pune", "airport pickup and drop mumbai", "airport to dadar taxi charges", "andheri to mumbai airport taxi fare", "bandra terminus to airport taxi fare", "bandra terminus to mumbai airport taxi fare", "mumbai airport to goa cab", "mumbai airport to iit bombay taxi fare", "mumbai airport to imagica taxi fare", "mumbai airport to juhu beach taxi price", "mumbai airport to kalamboli taxi fare", "mumbai airport to kalyan cab", "mumbai airport to kalyan taxi fare", "mumbai airport to kharghar taxi fare", "mumbai airport to kolhapur cab", "mumbai airport to kurla taxi fare", "mumbai airport to lokmanya tilak terminus taxi fare", "mumbai airport to lower parel taxi fare", "mumbai airport to mulund west taxi fare", "mumbai airport to mumbai central taxi fare", "mumbai airport to nalasopara taxi fare", "mumbai airport to nasik taxi fare", "mumbai airport to nerul taxi fare", "mumbai airport to panvel prepaid taxi fare", "mumbai airport to panvel taxi fare", "mumbai airport to powai taxi cost", "mumbai airport to shirdi by car", "mumbai airport to sion taxi fare", "mumbai airport to trimbakeshwar cab", "mumbai airport to trimbakeshwar taxi", "mumbai airport to ulhasnagar taxi fare", "mumbai airport to vasai taxi fare", "mumbai airport to vashi taxi fare", "mumbai airport to vikhroli west taxi fare", "mumbai airport to worli taxi fare", "mumbai central to airport taxi fare", "mumbai central to chhatrapati shivaji airport taxi", "mumbai central to international airport taxi fare", "mumbai central to mumbai airport taxi fare", "mumbai domestic airport taxi", "mumbai domestic airport taxi service", "mumbai domestic airport to international airport taxi fare", "mumbai international airport taxi", "mumbai international airport to siddhivinayak temple taxi fare", "mumbai to pune airport taxi", "mumbai to pune airport taxi service", "nasik to mumbai airport drop", "nasik to mumbai international airport", "online taxi booking from mumbai airport", "outstation cabs from mumbai airport", "panvel to mumbai airport cab", "panvel to mumbai airport taxi fare", "pre book taxi mumbai airport", "prepaid taxi in mumbai domestic airport", "prepaid taxi mumbai t2", "pune to mumbai airport car", "pune to mumbai airport car hire",  "pune to mumbai airport drop taxi", "pune to mumbai airport drop taxi service",

  // Mumbai Local Expansion (CLEAN LIST)
  "mumbai cab", "mumbai car rental service", "cab booking mumbai", "cab service mumbai", "mumbai darshan cabs", "mumbai taxi service", "taxi in mumbai", "cabs in mumbai", "taxi fare in mumbai", "mumbai taxi", "taxi booking mumbai", "taxi for mumbai darshan", "bombay cabs", "cab charges in mumbai", "cab companies in mumbai", "cab fare in mumbai", "mumbai cab fare", "mumbai taxi cab", "taxi charges in mumbai", "taxi charges mumbai", "taxi companies in mumbai", "taxi cost in mumbai", "taxi cost mumbai", "taxi fare mumbai", "taxi in bombay", "taxi to mumbai", "cab booking in mumbai", "rent a car in mumbai for outstation", "best cab service in mumbai", "best taxi service in mumbai", "mumbai full day taxi charges", "one way cab mumbai", "online cab booking mumbai", "innova on rent mumbai", "online taxi booking mumbai", "full day taxi in mumbai", "local taxi service in mumbai", "cab rental mumbai", "mumbai sightseeing cab", "mumbai darshan by car", "local cab service in mumbai", "mumbai to matheran cab", "taxi booking in mumbai", "mumbai darshan cab price", "innova car rental mumbai", "mumbai to imagica taxi", "best car hire in mumbai", "cab service for mumbai darshan", "dadar taxi stand", "hire a taxi in mumbai", "imagica to mumbai cab", "innova car hire in mumbai", "local cab in mumbai", "local taxi in mumbai", "mumbai cab rental services", "mumbai cabs for hire", "mumbai car taxi", "mumbai darshan cab charges", "mumbai darshan cab fare", "mumbai darshan taxi booking", "mumbai darshan taxi fare", "mumbai sightseeing taxi", "mumbai taxi car", "mumbai to imagica cab", "mumbai to matheran cab fare", "mumbai to matheran taxi", "mumbai to matheran taxi charges", "mumbai to matheran taxi fare", "private car rental mumbai", "full day car rental mumbai", "taxi rental mumbai", "mumbai darshan taxi price", "private taxi service mumbai", "mumbai darshan car booking", "luxury taxi mumbai", "cabs in mumbai for a day", "ac cab fare mumbai", "ac cabs in mumbai", "ac taxi fare in mumbai", "ac taxi in mumbai", "andheri to bandra taxi fare", "andheri to borivali taxi fare", "andheri to dadar taxi fare", "andheri to goregaon taxi fare", "andheri to mumbai airport taxi fare", "andheri to nariman point taxi fare", "andheri to powai taxi fare", "andheri to worli taxi fare", "bandra terminus to dadar taxi fare", "bandra terminus to lokmanya tilak terminus taxi fare", "bandra terminus to powai taxi fare", "bandra to airport taxi fare", "bandra to chembur taxi fare", "bandra to andheri taxi fare", "bandra to colaba taxi fare", "bandra to cst taxi fare", "bandra to dadar taxi fare", "bandra to lower parel taxi fare", "bandra to ltt taxi fare", "bandra to mulund taxi fare", "bandra to mumbai airport taxi fare", "bandra to nariman point taxi fare", "bandra to siddhivinayak temple taxi fare", "bandra to worli taxi fare", "best cab app in mumbai", "best cabs for mumbai darshan", "best cab in mumbai", "best taxi in mumbai", "best taxi mumbai", "borivali to andheri taxi fare", "borivali to chembur taxi fare", "borivali to dadar taxi fare", "borivali to imagica cab", "borivali to lokmanya tilak terminus taxi fare", "borivali to powai taxi fare", "borivali to siddhivinayak temple taxi fare", "byculla to cst taxi fare", "byculla to haji ali taxi fare", "byculla to worli taxi fare", "cab facility in mumbai", "cab for hire in mumbai",

  // Outstation Expansion
  "mumbai outstation cab", "rent a car in mumbai for outstation", "best outstation cab service in mumbai", "outstation taxi service in mumbai", "car hire for outstation in mumbai", "hire a cab in mumbai", "mumbai outstation taxi", "outstation cab booking mumbai", "outstation cab service in mumbai", "cab booking in mumbai for outstation", "cab service in mumbai for outstation", "car for outstation from mumbai", "car on rent for outstation in mumbai", "intercity cab service mumbai", "intercity cabs mumbai", "mumbai cab service for outstation", "mumbai to outstation cabs", "one side taxi mumbai", "one side taxi mumbai maharashtra", "one way drop taxi mumbai", "outstation cabs from mumbai airport", "outstation car rental rates in mumbai", "outstation cars in mumbai", "taxi service in mumbai for outstation round trip cab", "round trip cab booking", "round trip taxi", "cab round trip", "round trip taxi service", "book cab for round trip", "book round trip cabs", "cab for outstation round trip",
  "corporate taxi services", "corporate cab services", "corporate taxi", "taxi corporate", "cab service for corporate employees", "corporate cab", "corp cabs", "corporate cab booking", "taxi accounts", "corporate cabs prices", "corporate taxi booking", "corporate taxi hire", "corporate cabs phone number"
];

const groups = {
  "mumbai-pune": {
    slug: "mumbai-pune-cab",
    routeTitle: "Mumbai to Pune",
    price: "₹2800",
    distance: "150 km",
    duration: "3 - 3.5 Hours",
    h1Title: "Affordable ",
    h1Highlight: "Mumbai to Pune Cab",
    heroSubtitle: "Looking for a reliable Mumbai to Pune cab? Book our highly rated, comfortable AC cabs with verified drivers and instant booking without hidden charges.",
    metaTitle: "Mumbai to Pune Cab | Affordable Car Rentals & Taxis",
    metaDescription: "Book your Mumbai to Pune cab easily. Enjoy comfortable rides, verified drivers and the best fares starting from just ₹2800!",
    keywords: [],
    content: [
      "When you are searching for Mumbai to Pune cabs, we understand that reliability and comfort are your top priorities. Whether you need daily corporate pickups, quick medical transport between tier-1 hospitals, or reliable outstation rides for university students, our fleet is ready.",
      "Planning a quick weekend getaway? We specialize in stress-free drop-offs for weekend trips—leave Mumbai on Friday evening and return Sunday night without navigating tiring expressway traffic yourself. We even specialize in flight-synced Mumbai airport transfers.",
      "We pride ourselves on transparent pricing. For this route, our fares start at ₹2800, covering a distance of approximately 150 km. The journey typically takes around 3 - 3.5 Hours, traffic permitting. Book with us today via WhatsApp or phone and experience a hassle-free trip!"
    ],
    keyword: "mumbai pune cab",
    keywordList: []
  },
  "pune-mumbai": {
    slug: "pune-mumbai-cab",
    routeTitle: "Pune to Mumbai",
    price: "₹2800",
    distance: "150 km",
    duration: "3 - 3.5 Hours",
    h1Title: "Affordable ",
    h1Highlight: "Pune to Mumbai Cab",
    heroSubtitle: "Looking for a reliable Pune to Mumbai cab? Book our highly rated, comfortable AC cabs with verified drivers and instant booking without hidden charges.",
    metaTitle: "Pune to Mumbai Cab | Affordable Car Rentals & Taxis",
    metaDescription: "Book your Pune to Mumbai cab easily. Enjoy comfortable rides, verified drivers and the best fares starting from just ₹2800!",
    keywords: [],
    content: [
      "When you are searching for Pune to Mumbai cabs, we understand that reliability and comfort are your top priorities. Whether you need daily corporate drops into Mumbai's business hubs, quick medical transport, or reliable rides for university students, our fleet is ready.",
      "Planning a business flight or international trip? We specialize in flight-synced drop-offs directly to Mumbai International Airport (CSMIA). Avoid the hassle of train booking queues and luggage carrying with our direct door-to-door comfort rides.",
      "We pride ourselves on transparent pricing. For this route, our fares start at ₹2800, covering a distance of approximately 150 km. The journey typically takes around 3 - 3.5 Hours, traffic permitting. Book with us today via WhatsApp or phone and experience a hassle-free trip!"
    ],
    keyword: "pune mumbai cab",
    keywordList: []
  },
  "mumbai-nashik": {
    slug: "mumbai-nashik-cab",
    routeTitle: "Mumbai to Nashik",
    price: "₹3000",
    distance: "165 km",
    duration: "3.5 - 4 Hours",
    h1Title: "Affordable ",
    h1Highlight: "Mumbai to Nashik Cab",
    heroSubtitle: "Looking for a reliable Mumbai to Nashik cab? Book our highly rated, comfortable AC cabs with verified drivers and instant booking without hidden charges.",
    metaTitle: "Mumbai to Nashik Cab | Affordable Car Rentals & Taxis",
    metaDescription: "Book your Mumbai to Nashik cab easily. Enjoy comfortable rides, verified drivers and the best fares starting from just ₹3000!",
    keywords: [],
    content: [
      "When you are searching for Mumbai to Nashik cabs, we understand that reliability and comfort are your top priorities. Whether you need reliable corporate travel to industrial hubs, precise medical transport, or comfortable rides for students returning to university, our outstation fleet is ready.",
      "Planning a weekend vineyard tour or a spiritual getaway to Trimbakeshwar? We specialize in stress-free drop-offs for weekend trips—leave Mumbai safely and enjoy the scenic ghats without navigating tiring highway traffic yourself. We also offer direct flight-synced Mumbai airport transfers.",
      "We pride ourselves on transparent pricing. For this route, our fares start at ₹3000, covering a distance of approximately 165 km. The journey typically takes around 3.5 - 4 Hours, traffic permitting. Book with us today via WhatsApp or phone and experience a hassle-free trip!"
    ],
    keyword: "mumbai nashik cab",
    keywordList: []
  },
  "nashik-mumbai": {
    slug: "nashik-mumbai-cab",
    routeTitle: "Nashik to Mumbai",
    price: "₹3000",
    distance: "165 km",
    duration: "3.5 - 4 Hours",
    h1Title: "Affordable ",
    h1Highlight: "Nashik to Mumbai Cab",
    heroSubtitle: "Looking for a reliable Nashik to Mumbai cab? Book our highly rated, comfortable AC cabs with verified drivers and instant booking without hidden charges.",
    metaTitle: "Nashik to Mumbai Cab | Affordable Car Rentals & Taxis",
    metaDescription: "Book your Nashik to Mumbai cab easily. Enjoy comfortable rides, verified drivers and the best fares starting from just ₹3000!",
    keywords: [],
    content: [
      "When you are searching for Nashik to Mumbai cabs, we understand that reliability and comfort are your top priorities. Whether you need early morning corporate drops directly into Mumbai's financial districts, medical transport to leading hospitals, or secure rides for students, our fleet is ready.",
      "Heading out for a flight or international trip? We specialize in time-critical, flight-synced drop-offs right at Mumbai International Airport (CSMIA) exits. Avoid the hassle of train booking queues and heavy lugguge transfers with our seamless door-to-door comfort rides.",
      "We pride ourselves on transparent pricing. For this route, our fares start at ₹3000, covering a distance of approximately 165 km. The journey typically takes around 3.5 - 4 Hours, traffic permitting. Book with us today via WhatsApp or phone and experience a hassle-free trip!"
    ],
    keyword: "nashik mumbai cab",
    keywordList: []
  },
  "mumbai-goa": {
    slug: "mumbai-goa-cab",
    routeTitle: "Mumbai to Goa",
    price: "₹9999",
    distance: "590 km",
    duration: "11 - 12 Hours",
    h1Title: "Affordable ",
    h1Highlight: "Mumbai to Goa Cab",
    heroSubtitle: "Looking for a reliable direct Mumbai to Goa cab? Book our comfortably vetted AC sedans and SUVs perfect for long distance comfortable travel.",
    metaTitle: "Mumbai to Goa Cab | Outstation Travel & Car Rentals",
    metaDescription: "Book a direct Mumbai to Goa cab easily. Enjoy premium long distance outstation travel with verified drivers starting from ₹9999!",
    keywords: [],
    content: [
      "Whether it's an extended beach vacation or an important outstation business trip, moving from Mumbai to Goa should be deeply relaxing. Avoid the massive hassle of sold-out train bookings and expensive flight delays by opting for our dedicated, point-to-point outstation cab service.",
      "Our drivers are highly experienced with the beautiful Konkan coastal route. If you have a corporate retreat, require spacious student group travel, or need secure medical commute assistance for elderly family members, our dedicated SUVs are perfectly suited for the long drive.",
      "With crystal clear pricing, our fares for the Mumbai to Goa run begin at ₹9999 for a comfortable AC vehicle, spanning the 590 km scenic journey. Enjoy total control over your trip, stopping for meals and rest entirely on your schedule."
    ],
    keyword: "mumbai to goa cab",
    keywordList: []
  },
  "goa-mumbai": {
    slug: "goa-mumbai-cab",
    routeTitle: "Goa to Mumbai",
    price: "₹9999",
    distance: "590 km",
    duration: "11 - 12 Hours",
    h1Title: "Affordable ",
    h1Highlight: "Goa to Mumbai Cab",
    heroSubtitle: "Need a return taxi from Goa to Mumbai? Experience premium outstation comfort with verified drivers and instant hassle-free booking.",
    metaTitle: "Goa to Mumbai Cab | Return Outstation Taxis",
    metaDescription: "Heading back to the city? Book your Goa to Mumbai outstation cab easily. Enjoy comfortable luxury rides starting from just ₹9999!",
    keywords: [],
    content: [
      "Whether your coastal vacation has ended or you are returning from heavy corporate fieldwork, getting a secure, comfortable ride from Goa back to Mumbai is simple with our dedicated outstation fleet. We ensure proper rest stops and an incredibly smooth journey directly to your front door.",
      "Need to catch a connecting flight? We guarantee timely, flight-synced drop-offs directly at Mumbai International Airport checkpoints. We also routinely manage return trips for students and bulk-luggage medical transports returning to the metropolis safely.",
      "For the lush 590 km northbound journey, our competitive rates start at just ₹9999. Skip the stressful logistics of public transit and travel in the pure comfort of a private AC vehicle from Goa directly anywhere inside Mumbai."
    ],
    keyword: "goa to mumbai cab",
    keywordList: []
  },
  "mumbai-lonavala": {
    slug: "mumbai-lonavala-cab",
    routeTitle: "Mumbai to Lonavala",
    price: "₹2700",
    distance: "85 km",
    duration: "2 - 2.5 Hours",
    h1Title: "Affordable ",
    h1Highlight: "Mumbai to Lonavala Cab",
    heroSubtitle: "Looking for a reliable Mumbai to Lonavala cab? Book our highly rated, comfortable AC cabs with verified drivers and instant booking without hidden charges.",
    metaTitle: "Mumbai to Lonavala Cab | Affordable Car Rentals & Taxis",
    metaDescription: "Book your Mumbai to Lonavala cab easily. Enjoy comfortable rides, verified drivers and the best fares starting from just ₹2700!",
    keywords: [],
    content: [
      "When you are searching for Mumbai to Lonavala cabs, we understand that reliability and comfort are your top priorities. Whether you need a quick weekend getaway drop, a family vacation ride to Khandala, or a direct transfer from Mumbai's suburbs like Borivali and Thane, our dedicated fleet is ready.",
      "Planning a relaxing trip to the scenic Sahyadri mountains? We specialize in stress-free drop-offs for weekend trips—leave Mumbai gracefully and enjoy the beautiful expressway drive without navigating the heavy Ghat traffic yourself. We also offer direct flight-synced Mumbai airport transfers.",
      "We pride ourselves on transparent pricing. For this route, our fares start at ₹2700, covering a distance of approximately 85 km. The journey typically takes around 2 - 2.5 Hours, traffic permitting. Book with us today via WhatsApp or phone and experience a hassle-free trip!"
    ],
    keyword: "mumbai lonavala cab",
    keywordList: []
  },
  "lonavala-mumbai": {
    slug: "lonavala-mumbai-cab",
    routeTitle: "Lonavala to Mumbai",
    price: "₹2700",
    distance: "85 km",
    duration: "2 - 2.5 Hours",
    h1Title: "Affordable ",
    h1Highlight: "Lonavala to Mumbai Cab",
    heroSubtitle: "Looking for a reliable return taxi from Lonavala to Mumbai? Experience premium outstation comfort with verified drivers and instant hassle-free booking.",
    metaTitle: "Lonavala to Mumbai Cab | Return Outstation Taxis",
    metaDescription: "Heading back to the city? Book your Lonavala to Mumbai outstation cab easily. Enjoy comfortable luxury rides starting from just ₹2700!",
    keywords: [],
    content: [
      "Whether your weekend retreat has ended or you are returning to the city for the work week, getting a secure, comfortable ride from Lonavala back to Mumbai is simple with our dedicated outstation fleet. We ensure an incredibly smooth journey directly from your resort or villa to your front door.",
      "Need to catch a connecting flight? We guarantee timely, flight-synced drop-offs directly at Mumbai International Airport checkpoints. We also routinely manage return trips dropping off across major Mumbai and Navi Mumbai suburbs including Dadar, Andheri, and Panvel.",
      "For the scenic 85 km return journey, our competitive rates start at just ₹2700. Skip the stressful logistics of train bookings and travel in the pure comfort of a private AC vehicle from Lonavala directly to anywhere inside Mumbai."
    ],
    keyword: "lonavala to mumbai cab",
    keywordList: []
  },
  "mumbai-shirdi": {
    slug: "mumbai-shirdi-cab",
    routeTitle: "Mumbai to Shirdi",
    price: "₹4500",
    distance: "240 km",
    duration: "4.5 - 5 Hours",
    h1Title: "Affordable ",
    h1Highlight: "Mumbai to Shirdi Cab",
    heroSubtitle: "Looking for a reliable Mumbai to Shirdi cab? Book our highly rated, comfortable AC cabs with verified drivers and instant booking without hidden charges.",
    metaTitle: "Mumbai to Shirdi Cab | Affordable Car Rentals & Taxis",
    metaDescription: "Book your Mumbai to Shirdi cab easily. Enjoy comfortable rides, verified drivers and the best fares starting from just ₹4500!",
    keywords: [],
    content: [
      "When you are searching for Mumbai to Shirdi cabs, we understand that reliability and spiritual comfort are your top priorities. Whether you need a direct Shirdi Sai Baba Temple drop, a family pilgrimage ride, or a return trip for your darshan, our dedicated fleet is ready.",
      "Planning a spiritual journey? We specialize in stress-free drop-offs for pilgrims—leave Mumbai at your preferred time and reach Shirdi restfully without navigating the heavy highway traffic yourself. We also offer direct flight-synced Mumbai airport transfers for those coming from other cities.",
      "We pride ourselves on transparent pricing. For this route, our fares start at ₹4500, covering a distance of approximately 240 km. The journey typically takes around 4.5 - 5 Hours, traffic permitting. Book with us today via WhatsApp or phone and experience a hassle-free trip!"
    ],
    keyword: "mumbai shirdi cab",
    keywordList: []
  },
  "shirdi-mumbai": {
    slug: "shirdi-mumbai-cab",
    routeTitle: "Shirdi to Mumbai",
    price: "₹4500",
    distance: "240 km",
    duration: "4.5 - 5 Hours",
    h1Title: "Affordable ",
    h1Highlight: "Shirdi to Mumbai Cab",
    heroSubtitle: "Looking for a reliable return taxi from Shirdi to Mumbai? Experience premium outstation comfort with verified drivers and instant hassle-free booking.",
    metaTitle: "Shirdi to Mumbai Cab | Return Outstation Taxis",
    metaDescription: "Heading back to the city? Book your Shirdi to Mumbai outstation cab easily. Enjoy comfortable luxury rides starting from just ₹4500!",
    keywords: [],
    content: [
      "Whether your pilgrimage has ended or you are returning to the city for the work week, getting a secure, comfortable ride from Shirdi back to Mumbai is simple with our dedicated outstation fleet. We ensure an incredibly smooth journey directly from your Shirdi hotel or temple gate to your front door.",
      "Need to catch a connecting flight? We guarantee timely, flight-synced drop-offs directly at Mumbai International Airport checkpoints. We also routinely manage return trips dropping off across major Mumbai and Navi Mumbai locations including Dadar, Andheri, and Panvel.",
      "For the 240 km return journey, our competitive rates start at just ₹4500. Skip the stressful logistics of bus or train timings and travel in the pure comfort of a private AC vehicle from Shirdi directly to anywhere inside Mumbai."
    ],
    keyword: "shirdi to mumbai cab",
    keywordList: []
  },
  "mumbai-kolhapur": {
    slug: "mumbai-kolhapur-cab",
    routeTitle: "Mumbai to Kolhapur",
    price: "₹6000",
    distance: "380 km",
    duration: "7.5 - 8 Hours",
    h1Title: "Affordable ",
    h1Highlight: "Mumbai to Kolhapur Cab",
    heroSubtitle: "Looking for a reliable Mumbai to Kolhapur cab? Book our highly rated, comfortable AC cabs with verified drivers and instant booking without hidden charges.",
    metaTitle: "Mumbai to Kolhapur Cab | Affordable Car Rentals & Taxis",
    metaDescription: "Book your Mumbai to Kolhapur cab easily. Enjoy comfortable rides, verified drivers and the best fares starting from just ₹6000!",
    keywords: [],
    content: [
      "When you are searching for Mumbai to Kolhapur cabs, we understand that reliability and long-distance comfort are your top priorities. Whether you need a direct Mahalaxmi Temple drop, a family vacation ride, or a business trip to the heart of Kolhapur, our dedicated fleet is ready.",
      "Planning a trip to the historic city of Kolhapur? We specialize in stress-free drop-offs—leave Mumbai at your preferred time and reach Kolhapur comfortably without navigating the long highway drive yourself. We also offer direct flight-synced Mumbai airport transfers.",
      "We pride ourselves on transparent pricing. For this route, our fares start at ₹6000, covering a distance of approximately 380 km. The journey typically takes around 7.5 - 8 Hours, traffic permitting. Book with us today via WhatsApp or phone and experience a hassle-free trip!"
    ],
    keyword: "mumbai kolhapur cab",
    keywordList: []
  },
  "kolhapur-mumbai": {
    slug: "kolhapur-mumbai-cab",
    routeTitle: "Kolhapur to Mumbai",
    price: "₹6000",
    distance: "380 km",
    duration: "7.5 - 8 Hours",
    h1Title: "Affordable ",
    h1Highlight: "Kolhapur to Mumbai Cab",
    heroSubtitle: "Looking for a reliable return taxi from Kolhapur to Mumbai? Experience premium outstation comfort with verified drivers and instant hassle-free booking.",
    metaTitle: "Kolhapur to Mumbai Cab | Return Outstation Taxis",
    metaDescription: "Heading back to the city? Book your Kolhapur to Mumbai outstation cab easily. Enjoy comfortable luxury rides starting from just ₹6000!",
    keywords: [],
    content: [
      "Whether your visit to Kolhapur has ended or you are returning to Mumbai for work, getting a secure, comfortable ride from Kolhapur back to Mumbai is simple with our dedicated outstation fleet. We ensure an incredibly smooth journey directly from your Kolhapur location to your front door.",
      "Need to catch a connecting flight? We guarantee timely, flight-synced drop-offs directly at Mumbai International Airport checkpoints. We also routinely manage return trips dropping off across major Mumbai and Navi Mumbai locations including Dadar, Andheri, and Panvel.",
      "For the 380 km return journey, our competitive rates start at just ₹6000. Skip the stressful logistics of long-distance bus or train timings and travel in the pure comfort of a private AC vehicle from Kolhapur directly to anywhere inside Mumbai."
    ],
    keyword: "kolhapur to mumbai cab",
    keywordList: []
  },
  "mumbai-airport": {
    slug: "mumbai-airport-cab",
    routeTitle: "Mumbai Airport Cab",
    price: "On Call",
    distance: "Local / Outstation",
    duration: "24/7 Service",
    h1Title: "Affordable ",
    h1Highlight: "Mumbai Airport Cab Service",
    heroSubtitle: "Book reliable cab transfers to and from Mumbai Airport (T1/T2). Whether you're heading to the airport or arriving, we provide 24/7 service to any city or local destination.",
    metaTitle: "Mumbai Airport Cab | T1 & T2 Taxi Booking | Airport Transfers",
    metaDescription: "Reliable Mumbai Airport cab service for T1 & T2. Book transfers to or from the airport for Pune, Nashik, Shirdi, or local drops. Best rates on call!",
    keywords: [],
    content: [
      "Need a reliable cab to Chhatrapati Shivaji Maharaj International Airport (CSMIA) or a pickup from T1/T2? Our dedicated airport cab service ensures a stress-free journey. We specialize in both airport drops and pickups, providing seamless transfers between the airport and your choice of destination, whether local to Mumbai or outstation to cities like Pune, Nashik, and beyond.",
      "We offer a wide range of vehicles including comfortable sedans and spacious SUVs like the Toyota Innova Crysta, perfect for individuals, families, and corporate travelers. Our professional drivers are punctual and well-versed with airport terminal layouts, ensuring a smooth 'meet and greet' for arrivals and timely drops for your flights.",
      "Whether you're planning an early morning flight or arriving late at night, our 24/7 service is just a call or message away. We offer transparent, on-call pricing tailored to your specific route and vehicle choice. Book your Mumbai Airport taxi online or via WhatsApp for the most dependable airport transfer experience."
    ],
    keyword: "mumbai airport cab",
    keywordList: []
  },
  "mumbai-local": {
    slug: "cab-service-mumbai",
    routeTitle: "Mumbai Local Cab",
    price: "On Call",
    distance: "On Call",
    duration: "On Call",
    h1Title: "Top-Rated ",
    h1Highlight: "Cab Service in Mumbai",
    heroSubtitle: "Explore Mumbai with ease. Whether it's a full-day city tour, Mumbai Darshan, or point-to-point transfers, our local taxi service is available 24/7.",
    metaTitle: "Cab Service Mumbai | Local Taxi Booking | Mumbai Darshan Cabs",
    metaDescription: "Best cab service in Mumbai for local rentals, sightseeing, and city travel. Book Mumbai Darshan cabs, full-day rentals, and AC taxis at affordable rates.",
    keywords: [],
    content: [
      "Looking for a reliable cab service in Mumbai? Whether you're a tourist planning a Mumbai Darshan tour or a local resident needing a dependable ride for shopping and meetings, we offer the best car rental solutions. Our local taxi service covers all major zones including Colaba, Bandra, Andheri, and Borivali, ensuring you reach your destination comfortably and on time.",
      "Our Mumbai Darshan packages are designed to show you the best of the city—from the Gateway of India and Marine Drive to the holy Siddhivinayak Temple and Haji Ali Dargah. We provide a range of air-conditioned vehicles including compact sedans for solo travel and spacious SUVs like the Toyota Innova for group sightseeing tours.",
      "We pride ourselves on transparent pricing and professional service. With 24/7 availability and easy online or WhatsApp booking, hiring a taxi in Mumbai has never been more convenient. Experience the city like a local with our well-maintained cabs and experienced drivers."
    ],
    keyword: "mumbai local cab",
    keywordList: []
  },
  "outstation-cabs": {
    slug: "outstation-cabs",
    routeTitle: "One Way Cab Service",
    price: "On Call",
    distance: "On Call",
    duration: "On Call",
    h1Title: "Premium ",
    h1Highlight: "One Way Cab Service from Mumbai",
    heroSubtitle: "Book reliable one-way cab services from Mumbai. Direct door-to-door drops to Pune, Lonavala, Shirdi, Nashik, Mahabaleshwar & beyond.",
    metaTitle: "Outstation Cab Service Mumbai | One-Way & Round Trips",
    metaDescription: "Best outstation cab service in Mumbai. Book AC taxis for trips to Pune, Nashik, Shirdi, Lonavala, and more. Affordable on-call pricing.",
    keywords: [],
    content: [
      "Looking for a reliable outstation cab service from Mumbai? Whether you're planning a weekend getaway to Lonavala, a pilgrimage to Shirdi, or a business trip to Pune, we provide comfortable and affordable intercity travel solutions. Our fleet of well-maintained AC sedans and SUVs ensures a safe and relaxing journey for you and your family.",
      "We offer flexible booking options including one-way cab services with door to door service provided to all major destinations across Maharashtra and beyond. Our experienced drivers are thoroughly trained in highway driving and familiar with all popular outstation routes, ensuring timely and stress-free arrivals.",
      "We believe in transparent, competitive pricing with no hidden charges. Since outstation travel requirements vary, we offer customizable 'On Call' pricing based on your specific destination, vehicle choice, and trip duration. Contact us 24/7 via phone or WhatsApp to get an instant quote and book your outstation ride today!"
    ],
    keyword: "outstation cabs mumbai",
    keywordList: []
  },
  "mumbai-mahabaleshwar": {
    slug: "mumbai-mahabaleshwar-cab",
    routeTitle: "Mumbai to Mahabaleshwar",
    price: "₹4500",
    distance: "260 km",
    duration: "5.5 - 6 Hours",
    h1Title: "Affordable ",
    h1Highlight: "Mumbai to Mahabaleshwar Cab",
    heroSubtitle: "Book a comfortable Mumbai to Mahabaleshwar cab. Enjoy a scenic journey to the queen of hill stations with our reliable AC taxis and professional drivers.",
    metaTitle: "Mumbai to Mahabaleshwar Cab | Best Fares & Car Rentals",
    metaDescription: "Reliable Mumbai to Mahabaleshwar cab service. Book AC sedans and SUVs at the best rates starting from ₹4500. Door-to-door comfort for your hill station trip.",
    keywords: [],
    content: [
      "Planning a getaway to the strawberry capital? Our Mumbai to Mahabaleshwar cab service offers the perfect blend of comfort and affordability. Whether you're traveling for a family vacation, a romantic honeymoon, or a group outing, our well-maintained fleet of AC vehicles ensures a pleasant climb through the Western Ghats.",
      "We provide flexible pickup options from all over Mumbai, including Mumbai Airport (CSMIA), Thane, Navi Mumbai, and the western suburbs. Our drivers are well-experienced with the hilly terrain and the Mumbai-Pune Expressway routes, ensuring you reach your destination safely and on time while enjoying the scenic views of the Sahyadris.",
      "Benefit from our transparent, starting-from-price of ₹4500 for a one-way trip covering approximately 260 km. Avoid the fatigue of driving or the wait times of public buses—travel in the luxury of a private cab and start your Mahabaleshwar holiday the right way!"
    ],
    keyword: "mumbai mahabaleshwar cab",
    keywordList: []
  },
  "mahabaleshwar-mumbai": {
    slug: "mahabaleshwar-mumbai-cab",
    routeTitle: "Mahabaleshwar to Mumbai",
    price: "₹4500",
    distance: "260 km",
    duration: "5.5 - 6 Hours",
    h1Title: "Affordable ",
    h1Highlight: "Mahabaleshwar to Mumbai Cab",
    heroSubtitle: "Book your return taxi from Mahabaleshwar to Mumbai. Comfortable, air-conditioned rides with door-to-door service and reliable drivers.",
    metaTitle: "Mahabaleshwar to Mumbai Cab | Return Trip Taxi Service",
    metaDescription: "Heading back to the city? Book your Mahabaleshwar to Mumbai cab easily. Affordable return fares starting from ₹4500. Professional drivers & AC comfort.",
    keywords: [],
    content: [
      "Ending your hill station retreat? We provide seamless transportation from Mahabaleshwar back to Mumbai. Skip the struggle of finding a local taxi or depending on erratic bus schedules—our dedicated outstation fleet is available for reliable, punctual pickups directly from your hotel or resort.",
      "Whether you need a drop-off at Mumbai International Airport, a major railway station like Dadar or LTT, or directly to your home anywhere in Mumbai or Navi Mumbai, we've got you covered. Our spacious SUVs and comfortable sedans are perfect for carrying all your shopping and luggage back to the city.",
      "Enjoy the benefit of a fixed, starting fare of ₹4500 for the return journey. Our drivers prioritize your safety and comfort throughout the 5.5 - 6 hour drive back. Book your Mahabaleshwar to Mumbai taxi via WhatsApp and secure a stress-free return trip today!"
    ],
    keyword: "mahabaleshwar to mumbai cab",
    keywordList: []
  },
  "corporate-cab": {
    slug: "corporate-cab",
    routeTitle: "Corporate Cabs",
    price: "On Call",
    distance: "Customized",
    duration: "24/7 Priority",
    h1Title: "Professional ",
    h1Highlight: "Corporate Cab Services in Mumbai",
    heroSubtitle: "Premium employee transportation and executive cab services in Mumbai. Reliable, safe, and cost-effective solutions for your business needs.",
    metaTitle: "Corporate Cab Services Mumbai | Employee Transport & Executive Taxis",
    metaDescription: "Reliable corporate cab services in Mumbai. We offer employee transport, executive car rentals, and monthly basis cab provided for businesses. Dedicated 24/7 priority support.",
    keywords: [],
    content: [
      "Mumbai Cabs Rental provides high-quality corporate cab services tailored to the needs of modern businesses. Whether you require daily employee transportation, airport transfers for visiting executives, or reliable cabs for inter-office meetings, our dedicated corporate fleet is at your service. We understand the importance of punctuality and professionalism in the corporate world.",
      "Our corporate solutions include flexible monthly basis cab provided, dedicated account management, and a variety of well-maintained vehicles ranging from executive sedans like the Maruti Suzuki Dzire to premium SUVs like the Toyota Innova Crysta. All our drivers are professionally trained, background-verified, and strictly adhere to corporate safety standards.",
      "We offer customized packages based on your company's specific travel requirements and volume. With 24/7 priority support and easy booking via WhatsApp or phone, managing your business travel has never been easier. Contact us today to discuss your corporate cab needs and get a customized quote for your organization."
    ],
    keyword: "corporate taxi services",
    keywordList: []
  }
};

keywords.forEach(kw => {
  const k = kw.toLowerCase();
  
  let group = "";
  if (k.includes("goa") && k.includes("mumbai")) {
     if (k.indexOf('mumbai') < k.indexOf('goa')) {
        group = "mumbai-goa";
     } else {
        group = "goa-mumbai";
     }
  } else if (k.includes("lonavala")) {
     const subLocs = ["mumbai", "borivali", "dadar", "thane", "andheri", "bhayandar", "kalyan", "panvel", "karjat"];
     let mIdx = -1;
     for (const loc of subLocs) {
         if (k.includes(loc)) {
             mIdx = k.indexOf(loc);
             break;
         }
     }
     const lIdx = k.indexOf("lonavala");
     if (mIdx !== -1 && mIdx < lIdx) {
         group = "mumbai-lonavala";
     } else {
         group = "lonavala-mumbai";
     }
  } else if (k.includes("pune") && k.includes("mumbai")) {
     if (k.indexOf('mumbai') < k.indexOf('pune')) {
        group = "mumbai-pune";
     } else {
        group = "pune-mumbai";
     }
  } else if (k.includes("dadar") && k.includes("pune")) {
     if (k.indexOf("dadar") < k.indexOf("pune")) {
         group = "mumbai-pune";
     } else {
         group = "pune-mumbai";
     }
  } else if (k.includes("shirdi")) {
     if (k.indexOf('mumbai') !== -1 && k.indexOf('mumbai') < k.indexOf('shirdi')) {
         group = "mumbai-shirdi";
     } else {
         group = "shirdi-mumbai";
     }
  } else if (k.includes("airport")) {
     group = "mumbai-airport";
  } else if (k.includes("kolhapur")) {
     if (k.indexOf('mumbai') !== -1 && k.indexOf('mumbai') < k.indexOf('kolhapur')) {
         group = "mumbai-kolhapur";
     } else {
         group = "kolhapur-mumbai";
     }
  } else if (k.includes("nasik") || k.includes("nashik")) {
     const nIdx = k.indexOf("nasik") !== -1 ? k.indexOf("nasik") : k.indexOf("nashik");
     if (k.indexOf('mumbai') !== -1 && k.indexOf('mumbai') < nIdx) {
         group = "mumbai-nashik";
     } else {
         group = "nashik-mumbai";
     }
  } else if (k.includes("mahabaleshwar")) {
      if (k.indexOf('mumbai') !== -1 && k.indexOf('mumbai') < k.indexOf('mahabaleshwar')) {
          group = "mumbai-mahabaleshwar";
      } else {
          group = "mahabaleshwar-mumbai";
      }
  } else if (
    k.includes("corporate") || 
    k.includes("corp cabs") || 
    k.includes("taxi accounts")
  ) {
    group = "corporate-cab";
  } else if (
     k.includes("outstation") || 
     k.includes("intercity") || 
     k.includes("one side taxi") || 
     k.includes("one way drop") || 
     k.includes("round trip") ||
     k.includes("rent a car") ||
     k.includes("hire a cab")
  ) {
     group = "outstation-cabs";
  } else if (
    (
      k.includes("darshan") || 
      k.includes("sightseeing") || 
      k.includes("local") || 
      k.includes("mumbai") || 
      k.includes("bombay") || 
      k.includes("andheri") || 
      k.includes("bandra") || 
      k.includes("borivali") || 
      k.includes("byculla") || 
      k.includes("dadar") ||
      k.includes("imagica") || 
      k.includes("matheran")
    ) && 
    !k.includes("pune") && 
    !k.includes("goa") && 
    !k.includes("shirdi") && 
    !k.includes("lonavala") && 
    !k.includes("kolhapur") && 
    !k.includes("mahabaleshwar") &&
    !(k.includes("nasik") || k.includes("nashik"))
  ) {
     group = "mumbai-local";
  }

  if (group && groups[group]) {
      groups[group].keywords.push(k);
      groups[group].keywordList.push(k);
  }
});

Object.values(groups).forEach(g => {
    // de-duplicate
    g.keywords = [...new Set(g.keywords)];
    g.keywordList = [...new Set(g.keywordList)];
});

const fileContent = `export interface SeoRouteData {
  slug: string;
  h1Title: string;
  h1Highlight: string;
  heroSubtitle: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  routeTitle: string;
  price: string;
  distance: string;
  duration: string;
  content: string[];
  keyword: string;
  keywordList?: string[];
}

export const seoRoutes: SeoRouteData[] = ${JSON.stringify(Object.values(groups), null, 2)};
`;

fs.writeFileSync('E:/MCR/my-app/src/lib/seoData.ts', fileContent);
console.log("seoData.ts successfully compiled with 16 Core Master groups.");
