"""Configuration data for buyer universe generation."""
import random

INDUSTRIES = [
    ("Consumer Packaged Goods", 90), ("Technology", 80), ("Financial Services", 70),
    ("Healthcare & Pharma", 60), ("Retail & E-commerce", 50), ("Automotive", 30),
    ("Media & Entertainment", 30), ("Telecommunications", 25), ("B2B / Industrial", 25),
    ("Travel & Hospitality", 20), ("Energy & Utilities", 10), ("Education", 5),
    ("Real Estate", 5),
]

COMPANY_SIZES = [
    ("Enterprise (5000+)", 5000, 150000, 150), ("Mid-Market (500-4999)", 500, 4999, 175),
    ("SMB (50-499)", 50, 499, 175),
]

ROLES = [
    ("C-Suite", ["Chief Marketing Officer", "Chief Insights Officer", "Chief Strategy Officer",
                  "Chief Customer Officer", "Chief Revenue Officer", "CEO"], 75),
    ("VP-Level", ["VP of Marketing", "VP of Consumer Insights", "VP of Brand Strategy",
                   "VP of Market Intelligence", "VP of Product Marketing", "VP of Growth",
                   "SVP of Marketing", "VP of Customer Experience"], 125),
    ("Director-Level", ["Director of Market Research", "Director of Consumer Insights",
                         "Director of Brand Strategy", "Director of Analytics",
                         "Director of Product Marketing", "Director of Customer Intelligence",
                         "Senior Director of Insights", "Director of Competitive Intelligence"], 175),
    ("Manager-Level", ["Market Research Manager", "Brand Manager", "Insights Manager",
                        "Marketing Analytics Manager", "Product Marketing Manager",
                        "Customer Insights Manager", "Senior Brand Manager",
                        "Category Manager"], 125),
]

FIRST_NAMES_M = ["James","Robert","John","Michael","David","William","Richard","Joseph","Thomas","Christopher",
    "Daniel","Matthew","Anthony","Mark","Steven","Andrew","Paul","Joshua","Kenneth","Kevin",
    "Brian","George","Timothy","Ronald","Edward","Jason","Jeffrey","Ryan","Jacob","Gary",
    "Nicholas","Eric","Jonathan","Stephen","Larry","Justin","Scott","Brandon","Benjamin","Samuel",
    "Patrick","Alexander","Jack","Dennis","Jerry","Tyler","Aaron","Jose","Nathan","Henry"]

FIRST_NAMES_F = ["Mary","Patricia","Jennifer","Linda","Barbara","Elizabeth","Susan","Jessica","Sarah","Karen",
    "Lisa","Nancy","Betty","Margaret","Sandra","Ashley","Dorothy","Kimberly","Emily","Donna",
    "Michelle","Carol","Amanda","Melissa","Deborah","Stephanie","Rebecca","Sharon","Laura","Cynthia",
    "Kathleen","Amy","Angela","Shirley","Anna","Brenda","Pamela","Emma","Nicole","Helen",
    "Samantha","Katherine","Christine","Debra","Rachel","Carolyn","Janet","Catherine","Maria","Heather"]

LAST_NAMES = ["Smith","Johnson","Williams","Brown","Jones","Garcia","Miller","Davis","Rodriguez","Martinez",
    "Hernandez","Lopez","Gonzalez","Wilson","Anderson","Thomas","Taylor","Moore","Jackson","Martin",
    "Lee","Perez","Thompson","White","Harris","Sanchez","Clark","Ramirez","Lewis","Robinson",
    "Walker","Young","Allen","King","Wright","Scott","Torres","Nguyen","Hill","Flores",
    "Green","Adams","Nelson","Baker","Hall","Rivera","Campbell","Mitchell","Carter","Roberts",
    "Chen","Kim","Patel","Shah","Cohen","Goldstein","Murphy","O'Brien","Sullivan","Russo",
    "Romano","Weber","Schmidt","Muller","Nakamura","Tanaka","Singh","Gupta","Reddy","Khan"]

CITIES = [
    ("New York", "NY"), ("Los Angeles", "CA"), ("Chicago", "IL"), ("Houston", "TX"),
    ("Phoenix", "AZ"), ("Philadelphia", "PA"), ("San Antonio", "TX"), ("San Diego", "CA"),
    ("Dallas", "TX"), ("San Jose", "CA"), ("Austin", "TX"), ("Jacksonville", "FL"),
    ("San Francisco", "CA"), ("Charlotte", "NC"), ("Indianapolis", "IN"), ("Seattle", "WA"),
    ("Denver", "CO"), ("Nashville", "TN"), ("Portland", "OR"), ("Atlanta", "GA"),
    ("Boston", "MA"), ("Minneapolis", "MN"), ("Miami", "FL"), ("Raleigh", "NC"),
    ("Detroit", "MI"), ("Cincinnati", "OH"), ("Kansas City", "MO"), ("St. Louis", "MO"),
    ("Pittsburgh", "PA"), ("Salt Lake City", "UT"),
]

COMPANY_PREFIXES = [
    "Apex","Pinnacle","Summit","Vanguard","Catalyst","Nexus","Sterling","Meridian","Atlas","Vertex",
    "Beacon","Prism","Crest","Forge","Horizon","Nova","Pulse","Quantum","Radiant","Synergy",
    "Titan","Unity","Vector","Zenith","Onyx","Cobalt","Ember","Lumen","Orion","Slate",
    "Aero","Cipher","Delta","Echo","Falcon","Granite","Harbor","Ivory","Jasper","Keystone",
]

COMPANY_SUFFIXES = {
    "Consumer Packaged Goods": ["Foods","Brands","Consumer","Products","Nutrition","Beverages"],
    "Technology": ["Tech","Systems","Digital","Software","Labs","Solutions","AI","Cloud"],
    "Financial Services": ["Financial","Capital","Investments","Banking","Advisors","Wealth"],
    "Healthcare & Pharma": ["Health","Pharma","Medical","Therapeutics","BioSciences","Life Sciences"],
    "Retail & E-commerce": ["Retail","Commerce","Stores","Market","Direct","Shopping"],
    "Automotive": ["Motors","Auto","Mobility","Vehicles","Drive","Automotive"],
    "Media & Entertainment": ["Media","Entertainment","Studios","Creative","Content","Networks"],
    "Telecommunications": ["Telecom","Communications","Wireless","Connect","Networks","Mobile"],
    "B2B / Industrial": ["Industries","Manufacturing","Industrial","Supply","Engineering","Dynamics"],
    "Travel & Hospitality": ["Travel","Hospitality","Resorts","Hotels","Destinations","Leisure"],
    "Energy & Utilities": ["Energy","Power","Utilities","Renewables","Resources","Grid"],
    "Education": ["Education","Learning","Academy","Institute","EdTech","Scholars"],
    "Real Estate": ["Properties","Realty","Developments","Estates","Homes","Land"],
}

METHODOLOGIES = ["Online Surveys","Focus Groups","In-Depth Interviews","Ethnography","Social Listening",
    "Brand Tracking","Conjoint Analysis","MaxDiff","A/B Testing","UX Research","Concept Testing",
    "Ad Testing","Segmentation Studies","Journey Mapping","Mystery Shopping","Panel Research",
    "Mobile Surveys","Eye Tracking","Neuromarketing","Predictive Analytics"]

RESEARCH_NEEDS = ["Brand Health & Tracking","Customer Satisfaction","New Product Development",
    "Competitive Intelligence","Market Sizing","Consumer Segmentation","Ad Effectiveness",
    "Pricing Research","UX/CX Optimization","Trend Forecasting","Path to Purchase",
    "Concept Validation","Package Testing","Claims Testing","Employee Research"]

BIO_TEMPLATES = [
    "{name} is a {years_exp}-year veteran of {industry}, currently serving as {title} at {company}. With a focus on {need1} and {need2}, {first} has built a reputation for translating data into actionable brand strategy.",
    "As {title} at {company}, {name} oversees a ${budget}M annual research budget spanning {need1}, {need2}, and {need3}. {first} brings {years_exp} years of experience driving evidence-based decision making in {industry}.",
    "{name} leads the insights function at {company} as {title}, specializing in {need1} and {need2}. Over a {years_exp}-year career in {industry}, {first} has championed the integration of behavioral science into market research.",
    "With {years_exp} years in {industry}, {name} serves as {title} at {company}, where {pronoun} manages research programs focused on {need1} and {need2}. {first} is known for pioneering innovative approaches to {need3}.",
    "A {years_exp}-year {industry} professional, {name} currently holds the role of {title} at {company}. {first} is passionate about {need1} and leveraging {method1} and {method2} to uncover growth opportunities.",
]

# NPS Configuration
NPS_DRIVERS = ["Research Quality","Value for Money","Speed of Delivery","Innovation & Methodology",
    "Customer Service","Strategic Insight","Data Accuracy","Reporting Quality","Flexibility",
    "Technology Platform","Sample Quality","Project Management","Thought Leadership","Global Reach"]

PROMOTER_COMMENTS = [
    "The research quality consistently exceeds expectations — we've been able to make faster, more confident decisions.",
    "Our research partners deliver exceptional strategic insight that goes beyond just data tables.",
    "Outstanding methodology and innovative approaches help us stay ahead of the competition.",
    "The speed and accuracy of delivery is remarkable. They truly understand our business needs.",
    "Best-in-class sample quality and data accuracy — we trust the findings completely.",
    "Their customer service is second to none. They're an extension of our team.",
    "The technology platform makes it easy to access and share insights across the organization.",
    "They consistently bring fresh thinking and thought leadership to every project.",
    "Highly flexible and responsive — they adapt quickly to changing project requirements.",
    "The strategic recommendations they provide have directly impacted our bottom line.",
    "Excellent project management and communication throughout every engagement.",
    "Their global reach allows us to run consistent research across all our markets.",
    "The reporting quality is outstanding — clear, visual, and actionable for stakeholders.",
    "Research consistently informs product launches — we wouldn't go to market without it.",
    "They've helped us build a truly insights-driven culture across the organization.",
]

PASSIVE_COMMENTS = [
    "Generally good research quality, but there's room to be more proactive with insights.",
    "Solid methodology, though sometimes the timelines slip. Value is fair for the price.",
    "Decent overall, but the reporting could be more visually engaging and actionable.",
    "They do a competent job, but I haven't seen much innovation in their approach lately.",
    "Good data quality, but the strategic layer could be stronger. We need more 'so what'.",
    "Reliable delivery, but the customer service experience varies by team member.",
    "The platform works, but it's not as intuitive as some newer competitors in the market.",
    "They're okay — consistent quality but nothing that makes them stand out from alternatives.",
    "Fair value, but we've been exploring other vendors who offer more modern methodologies.",
    "The research is technically sound, but I wish they'd push us more on implications.",
    "There's nothing specifically wrong, but I'm not wowed either. They meet the brief.",
    "Good project management, but sometimes it feels like we're just another account to them.",
]

DETRACTOR_COMMENTS = [
    "The research quality has declined noticeably. We've had to redo work multiple times.",
    "Extremely overpriced for what they deliver. We can get better value elsewhere.",
    "Timelines are consistently missed and communication about delays is poor.",
    "Their methodology feels dated and they're slow to adopt new approaches.",
    "Customer service is reactive at best — we have to chase them for updates constantly.",
    "The insights lack depth — we get data dumps rather than strategic recommendations.",
    "Data accuracy issues have eroded our confidence in their work.",
    "The reporting is cluttered and hard to action. Our stakeholders tune out.",
    "They're rigid and resistant to customization. It's their way or the highway.",
    "The platform is clunky and hasn't been updated in years. Frustrating to use.",
    "Sample quality problems have undermined two major studies this year.",
    "Project management is chaotic — different people on every call, no continuity.",
    "Zero thought leadership or innovation. They're resting on their reputation.",
    "We've had significant issues with data quality and had to escalate multiple times.",
    "They don't understand our business. Every project feels like starting from scratch.",
]
