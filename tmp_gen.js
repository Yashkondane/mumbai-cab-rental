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
  "one way cab nashik to mumbai"
];

function titleCase(str) {
  return str.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

function generateSlug(kw) {
  return kw.toLowerCase().replace(/ /g, '-');
}

// Deduplicate generated slugs
const seen = new Set();

const seoRoutes = keywords.map(kw => {
  const isNasik = kw.includes('nasik') || kw.includes('nashik');
  const isPuneToMumbai = kw.includes('pune to mumbai') || kw.includes('pune mumbai');
  const isNasikToMumbai = kw.includes('nasik to mumbai') || kw.includes('nashik to mumbai');
  const isAirport = kw.includes('airport');
  const isDadar = kw.includes('dadar');
  
  let routeTitle = "Mumbai to Pune";
  if (isPuneToMumbai) routeTitle = "Pune to Mumbai";
  if (isNasik) {
    routeTitle = isNasikToMumbai ? "Nasik to Mumbai" : "Mumbai to Nasik";
  }

  if (isDadar) routeTitle = "Dadar to Pune";
  
  if (isAirport) {
    if (isNasik) {
      routeTitle = isNasikToMumbai ? "Nasik to Mumbai Airport" : "Mumbai Airport to Nasik";
    } else {
      routeTitle = isPuneToMumbai ? "Pune to Mumbai Airport" : "Mumbai Airport to Pune";
    }
  }

  const h1Title = "Affordable ";
  const h1Highlight = titleCase(kw);
  const heroSubtitle = `Looking for ${kw}? Book our highly rated, affordable and comfortable AC cabs. We provide verified drivers and instant booking without hidden charges.`;
  const metaTitle = `${titleCase(kw)} | Affordable Car Rentals & Taxis`;
  
  let price = isDadar ? "₹2700" : "₹2800";
  let distance = isDadar ? "145 km" : "150 km";
  let duration = "3 - 3.5 Hours";
  
  if (isNasik) {
    price = "₹3000";
    distance = "165 km";
    duration = "3.5 - 4 Hours";
  }

  const metaDescription = `Book your ${kw} easily. Enjoy comfortable rides, verified drivers and the best fares starting from just ${price}!`;

  let slug = generateSlug(kw);
  if (seen.has(slug)) return null;
  seen.add(slug);

  return {
    slug,
    routeTitle,
    price,
    distance,
    duration,
    h1Title,
    h1Highlight,
    heroSubtitle,
    metaTitle,
    metaDescription,
    keywords: [kw, `${kw} booking`, `cheap ${kw}`],
    content: [
      `When you are searching for "${kw}", we understand that reliability and comfort are your top priorities. At Mumbai Cabs Rental, we specialize in providing exactly that. Our fleet of modern sedans and SUVs ensures that your journey is as smooth as possible.`,
      `We pride ourselves on transparent pricing. For this route, our fares start at ${price}, covering a distance of approximately ${distance}. The journey typically takes around ${duration}, traffic permitting. Book with us today via WhatsApp or phone and experience a hassle-free trip!`
    ],
    keyword: kw
  };
}).filter(Boolean);

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
}

export const seoRoutes: SeoRouteData[] = ${JSON.stringify(seoRoutes, null, 2)};
`;

fs.writeFileSync('E:/MCR/my-app/src/lib/seoData.ts', fileContent);
console.log("seoData.ts generated with " + seoRoutes.length + " distinct routes.");
