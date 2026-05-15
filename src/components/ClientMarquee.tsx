const CLIENTS = [
  "Adidas",
  "Nivea",
  "Philips",
  "Unilever",
  "Nestlé",
  "L'Oréal",
  "Telenor",
  "Panasonic",
  "Reckitt",
  "De Beers",
  "Tabasco",
  "Tesco",
  "Lily's Kitchen",
  "Argos Pet Insurance",
  "Teva",
  "Merck",
  "Boehringer Ingelheim",
  "TD Bank",
  "Budapest Bank",
  "Allianz",
  "Provident",
  "Wizz Air",
  "Norauto",
  "Dreher (Asahi)",
  "Western Union",
  "Tier Mobility",
  "Borealis",
  "Europacable",
  "Eve Online (CCP Games)",
  "King",
  "Heart",
  "Saatchi & Saatchi",
  "Gruner + Jahr",
  "Rügenwalder Mühle",
  "Shaw Floors",
  "Macy's",
  "BARE Zero Proof",
  "Kantar",
  "2CV",
  "Gallup International",
  "ORB International",
  "Open Society Foundations",
  "Friedrich Ebert Stiftung",
  "Ofcom",
  "McCain Institute / Arizona State University",
  "Pew Research Center",
  "Parliament of Victoria",
  "Political Capital",
  "BIRN — Balkan Investigative Reporting Network",
  "Greenpeace",
  "Energiaklub",
  "re:publica",
  "Erste Foundation",
];

export default function ClientMarquee() {
  return (
    <div
      className="client-marquee mt-20 overflow-hidden border-y border-border-grey py-8"
      aria-label="Selected clients and partners"
    >
      <div className="client-marquee-track flex w-max items-center gap-12 whitespace-nowrap">
        {[...CLIENTS, ...CLIENTS].map((name, index) => (
          <span key={`${name}-${index}`} className="flex items-center gap-12">
            <span className="text-sm font-light uppercase tracking-[0.22em] text-text-secondary">
              {name}
            </span>
            <span aria-hidden="true" className="h-1 w-1 rounded-full bg-accent/60" />
          </span>
        ))}
      </div>
    </div>
  );
}
