export type AtlasCase = {
  id: string;
  name: string;
  sectorRegion: string;
  sector: string;
  lat: number;
  lng: number;
  essence: string;
  challenge?: string;
  truth?: string;
  impact?: string;
};

export type AtlasPoint =
  | (AtlasCase & { status: "active" })
  | {
      id: string;
      status: "inert";
      lat: number;
      lng: number;
    };

export const ACTIVE_ATLAS_CASES: AtlasCase[] = [
  {
    id: "hungary-election-2026",
    name: "The Hungarian Election, 2026",
    sectorRegion: "Public sphere / Europe",
    sector: "Public sphere",
    lat: 47.4979,
    lng: 19.0402,
    essence:
      "A polarised electorate is not divided by what people want. It is divided by two opposing psychological architectures — the Employee, who locates safety inside the system, and the Entrepreneur, who locates it in personal agency. Identity comes first. Politics follows.",
    challenge:
      "Hungary held the most contested election in its post-1989 history. The polling industry had been systematically eroded for over a decade. Independent polls showed the challenger leading by anywhere from 9 to 23 points. Government-aligned institutes forecast the opposite. The country had no shared instrument it could trust.",
    truth:
      "Three weeks before the vote, we analyzed 10,000+ unprompted conversations and surfaced two completely different motivational architectures: outer-directed and inner-directed. The gap in inner-directed expression favoring challenger supporters was 12.4 points. We published the findings before the vote.",
    impact:
      "The election produced a two-thirds opposition supermajority, the highest voter turnout since 1989, and the largest mandate of any Hungarian government in the post-communist era. Independent polls had captured the direction. Most underestimated the scale. The findings were referenced by Bloomberg, Politico, and Der Standard.",
  },
  {
    id: "stella-chewys",
    name: "Stella & Chewy's",
    sectorRegion: "Premium pet food / North America",
    sector: "Pet food",
    lat: 43.0389,
    lng: -87.9065,
    essence:
      "What people call premium pet food is not a category in their minds. It is a stage on which owners perform their love — as trainers, as nurturers, as healers. The product is the script.",
    challenge:
      "Stella & Chewy's was preparing to enter the gently cooked dog food space, a premium category that looked well-defined on paper. The internal brief reflected standard category logic: quantify the segment, identify the target consumer, position against the competitive set.",
    truth:
      "The category did not exist as a category in consumer discourse. Gently cooked disappeared into a broader umbrella consumers called real dog food, benchmarked against home cooking, not against other brands. Inside it lived three different motivational architectures: Perfect Conditioning, Human Grade Gratitude, Prolonged Love. Across all three, the owner was the protagonist.",
    impact:
      "The discovery work was delivered as a category architecture rather than a conventional category report. It reframed the competitive set, the segmentation logic, and the unit of analysis. The internal framing of the launch shifted from a category-entry brief to an owner-role brief, with downstream effects on positioning and language.",
  },
  {
    id: "racial-health-equity",
    name: "Racial Health Equity",
    sectorRegion: "Public health / North America",
    sector: "Public health",
    lat: 38.9072,
    lng: -77.0369,
    essence:
      "The middle of a contested public conversation is not undecided. It accepts the problem exists and rejects the language used to name it. The door is opened by class, not race.",
    challenge:
      "A national health equity advocacy organization wanted to understand the discourse surrounding one of the most contested public health questions in America. Conventional research struggles when the topic is politically loaded and respondent self-presentation distorts the data.",
    truth:
      "We analyzed 3.5 million unprompted mentions across nine platforms and surfaced three distinct narrative architectures, not a spectrum. The swayable middle was not undecided. It was differently decided: a worldview that accepts disparities exist but rejects the racial framing used to explain them.",
    impact:
      "A national survey of 1,850 voters, conducted independently in early 2025, segmented the electorate into three groups whose structure, proportions, and attitudinal architecture closely tracked what the social intelligence had described. Two independent methodologies converged on the same three-part architecture.",
  },
  {
    id: "non-alcoholic-spirits",
    name: "Non-Alcoholic Spirits",
    sectorRegion: "Non-alcoholic spirits / North America",
    sector: "Beverage",
    lat: 40.7128,
    lng: -74.006,
    essence:
      "A new beverage category cannot be sold on what it removes. People do not seek the absence of alcohol — they seek a different way to be present in the moments alcohol used to mark. Until the category offers that, it is a substitute. After, it is a choice.",
  },
  {
    id: "body-care-ssa",
    name: "Body Care, Sub-Saharan Africa",
    sectorRegion: "Body care / Sub-Saharan Africa",
    sector: "Body care",
    lat: -26.2041,
    lng: 28.0473,
    essence:
      "Skin is a social currency before it is a body. In markets where lightness still carries advantage, “celebrate who you are” rings hollow against a culture organised around changing who you are.",
  },
];

export const INERT_ATLAS_POINTS: AtlasPoint[] = [
  { id: "placeholder-canada", status: "inert", lat: 45.4215, lng: -75.6972 },
  { id: "placeholder-mexico", status: "inert", lat: 19.4326, lng: -99.1332 },
  { id: "placeholder-brazil", status: "inert", lat: -23.5505, lng: -46.6333 },
  { id: "placeholder-argentina", status: "inert", lat: -34.6037, lng: -58.3816 },
  { id: "placeholder-uk", status: "inert", lat: 51.5072, lng: -0.1276 },
  { id: "placeholder-france", status: "inert", lat: 48.8566, lng: 2.3522 },
  { id: "placeholder-germany", status: "inert", lat: 52.52, lng: 13.405 },
  { id: "placeholder-spain", status: "inert", lat: 40.4168, lng: -3.7038 },
  { id: "placeholder-italy", status: "inert", lat: 41.9028, lng: 12.4964 },
  { id: "placeholder-kenya", status: "inert", lat: -1.2921, lng: 36.8219 },
  { id: "placeholder-india", status: "inert", lat: 28.6139, lng: 77.209 },
  { id: "placeholder-malaysia", status: "inert", lat: 3.139, lng: 101.6869 },
  { id: "placeholder-japan", status: "inert", lat: 35.6762, lng: 139.6503 },
  { id: "placeholder-australia", status: "inert", lat: -33.8688, lng: 151.2093 },
  { id: "placeholder-indonesia", status: "inert", lat: -6.2088, lng: 106.8456 },
  { id: "placeholder-uae", status: "inert", lat: 25.2048, lng: 55.2708 },
  { id: "placeholder-sweden", status: "inert", lat: 59.3293, lng: 18.0686 },
];

export const ATLAS_POINTS: AtlasPoint[] = [
  ...ACTIVE_ATLAS_CASES.map((atlasCase) => ({ ...atlasCase, status: "active" as const })),
  ...INERT_ATLAS_POINTS,
];
