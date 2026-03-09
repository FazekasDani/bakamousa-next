"""Generate 500 US market research buyer profiles and simulate NPS interviews."""
import json, random, os
from config import *

random.seed(42)

def generate_company_name(industry):
    prefix = random.choice(COMPANY_PREFIXES)
    suffix = random.choice(COMPANY_SUFFIXES.get(industry, ["Group","Corp"]))
    forms = ["", " Inc.", " Corp.", " Group", " LLC", " Co."]
    return f"{prefix} {suffix}{random.choice(forms)}"

def generate_buyers(n=500):
    buyers = []
    used_names = set()
    # Build weighted pools
    industry_pool = []
    for ind, count in INDUSTRIES:
        industry_pool.extend([ind] * count)
    
    role_pool = []
    for seniority, titles, count in ROLES:
        role_pool.extend([(seniority, titles)] * count)
    
    size_pool = []
    for label, lo, hi, count in COMPANY_SIZES:
        size_pool.extend([(label, lo, hi)] * count)

    for i in range(n):
        gender = random.choice(["M", "F"])
        first = random.choice(FIRST_NAMES_M if gender == "M" else FIRST_NAMES_F)
        last = random.choice(LAST_NAMES)
        name = f"{first} {last}"
        while name in used_names:
            first = random.choice(FIRST_NAMES_M if gender == "M" else FIRST_NAMES_F)
            last = random.choice(LAST_NAMES)
            name = f"{first} {last}"
        used_names.add(name)

        industry = random.choice(industry_pool)
        seniority, titles = random.choice(role_pool)
        title = random.choice(titles)
        size_label, emp_lo, emp_hi = random.choice(size_pool)
        employees = random.randint(emp_lo, emp_hi)
        city, state = random.choice(CITIES)
        company = generate_company_name(industry)
        age = random.randint(28, 65)
        years_exp = min(age - 22, random.randint(5, 35))
        
        # Budget based on company size
        if emp_hi >= 5000:
            budget = round(random.uniform(1.5, 25.0), 1)
        elif emp_hi >= 500:
            budget = round(random.uniform(0.3, 5.0), 1)
        else:
            budget = round(random.uniform(0.05, 1.5), 1)

        # Revenue
        if emp_hi >= 5000:
            revenue = f"${random.randint(1, 50)}B"
        elif emp_hi >= 500:
            revenue = f"${random.randint(50, 999)}M"
        else:
            revenue = f"${random.randint(5, 100)}M"

        needs = random.sample(RESEARCH_NEEDS, 3)
        methods = random.sample(METHODOLOGIES, random.randint(2, 4))
        pronoun = "he" if gender == "M" else "she"
        
        bio_template = random.choice(BIO_TEMPLATES)
        bio = bio_template.format(
            name=name, first=first, years_exp=years_exp, industry=industry,
            title=title, company=company, budget=budget,
            need1=needs[0], need2=needs[1], need3=needs[2],
            method1=methods[0], method2=methods[1], pronoun=pronoun,
        )

        buyers.append({
            "id": i + 1,
            "name": name, "age": age, "gender": gender,
            "title": title, "seniority": seniority,
            "company": company, "industry": industry,
            "city": city, "state": state,
            "company_size_category": size_label, "employees": employees,
            "annual_revenue": revenue,
            "annual_research_budget_millions": budget,
            "years_buying_research": years_exp,
            "primary_research_needs": needs,
            "preferred_methodologies": methods,
            "biography": bio,
        })
    return buyers

def simulate_nps(buyers):
    results = []
    for b in buyers:
        # Base probabilities, adjusted by segment
        p_promoter, p_passive, p_detractor = 0.35, 0.30, 0.35
        
        # Enterprise buyers slightly more satisfied
        if "Enterprise" in b["company_size_category"]:
            p_promoter += 0.05; p_detractor -= 0.05
        elif "SMB" in b["company_size_category"]:
            p_promoter -= 0.03; p_detractor += 0.03
        
        # Technology and CPG sectors slightly higher
        if b["industry"] in ["Technology", "Consumer Packaged Goods"]:
            p_promoter += 0.05; p_detractor -= 0.05
        elif b["industry"] in ["Telecommunications", "Energy & Utilities"]:
            p_promoter -= 0.05; p_detractor += 0.05
        
        # Higher budget = slightly more satisfied
        if b["annual_research_budget_millions"] > 5:
            p_promoter += 0.05; p_detractor -= 0.05
        
        # C-suite slightly more critical
        if b["seniority"] == "C-Suite":
            p_promoter -= 0.03; p_detractor += 0.03
        
        # Normalize
        total = p_promoter + p_passive + p_detractor
        p_promoter /= total; p_passive /= total; p_detractor /= total
        
        cat = random.choices(["promoter","passive","detractor"],
                             weights=[p_promoter, p_passive, p_detractor])[0]
        
        if cat == "promoter":
            score = random.choice([9, 9, 9, 10, 10])
            comment = random.choice(PROMOTER_COMMENTS)
            drivers = random.sample(["Research Quality","Innovation & Methodology",
                "Strategic Insight","Customer Service","Data Accuracy","Technology Platform"], 2)
        elif cat == "passive":
            score = random.choice([7, 7, 8, 8])
            comment = random.choice(PASSIVE_COMMENTS)
            drivers = random.sample(["Value for Money","Speed of Delivery","Reporting Quality",
                "Flexibility","Project Management","Innovation & Methodology"], 2)
        else:
            score = random.choices(range(0, 7), weights=[1,1,2,3,4,5,6])[0]
            comment = random.choice(DETRACTOR_COMMENTS)
            drivers = random.sample(["Value for Money","Speed of Delivery","Customer Service",
                "Data Accuracy","Sample Quality","Technology Platform","Flexibility"], 2)

        results.append({
            "buyer_id": b["id"], "buyer_name": b["name"], "company": b["company"],
            "industry": b["industry"], "seniority": b["seniority"],
            "company_size": b["company_size_category"],
            "budget_millions": b["annual_research_budget_millions"],
            "nps_score": score, "category": cat,
            "verbatim_comment": comment, "key_drivers": drivers,
        })
    return results

def main():
    os.makedirs("market_research", exist_ok=True)
    print("Generating 500 buyer profiles...")
    buyers = generate_buyers(500)
    with open("market_research/buyer_universe.json", "w") as f:
        json.dump(buyers, f, indent=2)
    print(f"  ✓ {len(buyers)} buyers written to market_research/buyer_universe.json")

    print("Simulating NPS interviews...")
    nps = simulate_nps(buyers)
    with open("market_research/nps_results.json", "w") as f:
        json.dump(nps, f, indent=2)
    
    # Quick stats
    promoters = sum(1 for r in nps if r["category"] == "promoter")
    passives = sum(1 for r in nps if r["category"] == "passive")
    detractors = sum(1 for r in nps if r["category"] == "detractor")
    nps_score = round((promoters - detractors) / len(nps) * 100)
    
    print(f"  ✓ {len(nps)} NPS interviews written to market_research/nps_results.json")
    print(f"\n{'='*50}")
    print(f"  NPS SCORE: {nps_score:+d}")
    print(f"  Promoters: {promoters} ({promoters/len(nps)*100:.1f}%)")
    print(f"  Passives:  {passives} ({passives/len(nps)*100:.1f}%)")
    print(f"  Detractors: {detractors} ({detractors/len(nps)*100:.1f}%)")
    print(f"{'='*50}")

if __name__ == "__main__":
    main()
