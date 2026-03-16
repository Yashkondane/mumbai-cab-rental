const keywords = [
  "mumbai cab", "mumbai car rental service", "cab booking mumbai", "cab service mumbai", "mumbai darshan cabs", "mumbai taxi service", "taxi in mumbai", "cabs in mumbai", "taxi fare in mumbai", "mumbai taxi", "taxi booking mumbai", "taxi for mumbai darshan", "bombay cabs", "cab charges in mumbai", "cab companies in mumbai", "cab fare in mumbai", "mumbai cab fare", "mumbai taxi cab", "taxi charges in mumbai", "taxi charges mumbai", "taxi companies in mumbai", "taxi cost in mumbai", "taxi cost mumbai", "taxi fare mumbai", "taxi in bombay", "taxi to mumbai", "cab booking in mumbai", "rent a car in mumbai for outstation", "best cab service in mumbai", "best taxi service in mumbai", "mumbai full day taxi charges", "one way cab mumbai", "online cab booking mumbai", "innova on rent mumbai", "online taxi booking mumbai", "full day taxi in mumbai", "local taxi service in mumbai", "cab rental mumbai", "mumbai sightseeing cab", "mumbai darshan by car", "local cab service in mumbai", "mumbai to matheran cab", "taxi booking in mumbai", "mumbai darshan cab price", "innova car rental mumbai", "mumbai to imagica taxi", "best car hire in mumbai", "cab service for mumbai darshan", "dadar taxi stand", "hire a taxi in mumbai", "imagica to mumbai cab", "innova car hire in mumbai", "local cab in mumbai", "local taxi in mumbai", "mumbai cab rental services", "mumbai cabs for hire", "mumbai car taxi", "mumbai darshan cab charges", "mumbai darshan cab fare", "mumbai darshan taxi booking", "mumbai darshan taxi fare", "mumbai sightseeing taxi", "mumbai taxi car", "mumbai to imagica cab", "mumbai to matheran cab fare", "mumbai to matheran taxi", "mumbai to matheran taxi charges", "mumbai to matheran taxi fare", "private car rental mumbai", "full day car rental mumbai", "taxi rental mumbai", "mumbai darshan taxi price", "private taxi service mumbai", "mumbai darshan car booking", "luxury taxi mumbai", "cabs in mumbai for a day", "ac cab fare mumbai", "ac cabs in mumbai", "ac taxi fare in mumbai", "ac taxi in mumbai", "andheri to bandra taxi fare", "andheri to borivali taxi fare", "andheri to dadar taxi fare", "andheri to goregaon taxi fare", "andheri to mumbai airport taxi fare", "andheri to nariman point taxi fare", "andheri to powai taxi fare", "andheri to worli taxi fare", "bandra terminus to dadar taxi fare", "bandra terminus to lokmanya tilak terminus taxi fare", "bandra terminus to powai taxi fare", "bandra to airport taxi fare", "bandra to chembur taxi fare", "bandra to andheri taxi fare", "bandra to colaba taxi fare", "bandra to cst taxi fare", "bandra to dadar taxi fare", "bandra to lower parel taxi fare", "bandra to ltt taxi fare", "bandra to mulund taxi fare", "bandra to mumbai airport taxi fare", "bandra to nariman point taxi fare", "bandra to siddhivinayak temple taxi fare", "bandra to worli taxi fare", "best cab app in mumbai", "best cabs for mumbai darshan", "best cab in mumbai", "best taxi in mumbai", "best taxi mumbai", "borivali to andheri taxi fare", "borivali to chembur taxi fare", "borivali to dadar taxi fare", "borivali to imagica cab", "borivali to lokmanya tilak terminus taxi fare", "borivali to powai taxi fare", "borivali to siddhivinayak temple taxi fare", "byculla to cst taxi fare", "byculla to haji ali taxi fare", "byculla to worli taxi fare", "cab facility in mumbai", "cab for hire in mumbai"
];

function categorize(kw) {
  const k = kw.toLowerCase();
  let group = "";
  
  if (k.includes("goa") && k.includes("mumbai")) {
      group = k.indexOf('mumbai') < k.indexOf('goa') ? "mumbai-goa" : "goa-mumbai";
  } else if (k.includes("lonavala")) {
      group = "lonavala-route";
  } else if (k.includes("pune") && k.includes("mumbai")) {
      group = k.indexOf('mumbai') < k.indexOf('pune') ? "mumbai-pune" : "pune-mumbai";
  } else if (k.includes("shirdi")) {
      group = "shirdi-route";
  } else if (k.includes("airport")) {
      group = "mumbai-airport";
  } else if (k.includes("kolhapur")) {
      group = "kolhapur-route";
  } else if (k.includes("nasik") || k.includes("nashik")) {
      group = "nashik-route";
  } else if (k.includes("darshan") || k.includes("sightseeing") || k.includes("local") || k.includes("mumbai") || k.includes("bombay") || k.includes("andheri") || k.includes("bandra") || k.includes("borivali") || k.includes("byculla") || k.includes("imagica") || k.includes("matheran")) {
      group = "mumbai-local";
  }
  
  return group;
}

const results = {};
keywords.forEach(kw => {
  const g = categorize(kw);
  results[g] = (results[g] || 0) + 1;
  if (!g) console.log("Uncategorized:", kw);
});

console.log("Categorization Results:", results);
