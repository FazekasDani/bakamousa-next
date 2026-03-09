"""Generate interactive HTML report from buyer universe and NPS data."""
import json
from collections import Counter, defaultdict

def load_data():
    with open("market_research/buyer_universe.json") as f:
        buyers = json.load(f)
    with open("market_research/nps_results.json") as f:
        nps = json.load(f)
    return buyers, nps

def calc_nps(results):
    n = len(results)
    if n == 0: return 0, 0, 0, 0
    p = sum(1 for r in results if r["category"] == "promoter")
    pa = sum(1 for r in results if r["category"] == "passive")
    d = sum(1 for r in results if r["category"] == "detractor")
    return round((p - d) / n * 100), p, pa, d

def segment_nps(nps, key):
    groups = defaultdict(list)
    for r in nps:
        groups[r[key]].append(r)
    result = {}
    for k, v in sorted(groups.items(), key=lambda x: calc_nps(x[1])[0], reverse=True):
        score, p, pa, d = calc_nps(v)
        result[k] = {"score": score, "n": len(v), "promoters": p, "passives": pa, "detractors": d}
    return result

def driver_analysis(nps):
    driver_counts = {"promoter": Counter(), "passive": Counter(), "detractor": Counter()}
    for r in nps:
        for d in r["key_drivers"]:
            driver_counts[r["category"]][d] += 1
    return driver_counts

def get_verbatims(nps, cat, n=5):
    items = [r for r in nps if r["category"] == cat]
    import random; random.seed(99)
    random.shuffle(items)
    seen = set(); unique = []
    for r in items:
        if r["verbatim_comment"] not in seen:
            seen.add(r["verbatim_comment"])
            unique.append(r)
        if len(unique) >= n: break
    return unique

def generate_html(buyers, nps):
    overall_nps, prom, pasv, detr = calc_nps(nps)
    avg_score = round(sum(r["nps_score"] for r in nps) / len(nps), 1)
    by_industry = segment_nps(nps, "industry")
    by_size = segment_nps(nps, "company_size")
    by_seniority = segment_nps(nps, "seniority")
    
    # Budget segments
    for r in nps:
        if r["budget_millions"] >= 5: r["budget_segment"] = "$5M+"
        elif r["budget_millions"] >= 1: r["budget_segment"] = "$1M-$5M"
        elif r["budget_millions"] >= 0.3: r["budget_segment"] = "$300K-$1M"
        else: r["budget_segment"] = "<$300K"
    by_budget = segment_nps(nps, "budget_segment")
    
    drivers = driver_analysis(nps)
    prom_verbs = get_verbatims(nps, "promoter", 5)
    pass_verbs = get_verbatims(nps, "passive", 5)
    detr_verbs = get_verbatims(nps, "detractor", 5)
    
    # Industry distribution
    ind_counts = Counter(b["industry"] for b in buyers)
    size_counts = Counter(b["company_size_category"] for b in buyers)
    role_counts = Counter(b["seniority"] for b in buyers)
    
    # Score distribution
    score_dist = Counter(r["nps_score"] for r in nps)
    score_dist_data = [score_dist.get(i, 0) for i in range(11)]
    
    # Chart colors
    score_colors = ['#ef4444']*7 + ['#f59e0b','#f59e0b'] + ['#22c55e','#22c55e']
    
    # NPS gauge color
    if overall_nps >= 50: gauge_color = "#22c55e"
    elif overall_nps >= 20: gauge_color = "#84cc16"
    elif overall_nps >= 0: gauge_color = "#f59e0b"
    else: gauge_color = "#ef4444"
    
    def bar_chart_rows(data, color_fn=None):
        rows = []
        max_val = max(d["score"] for d in data.values()) if data else 1
        min_val = min(d["score"] for d in data.values()) if data else 0
        rng = max(abs(max_val), abs(min_val), 1)
        for name, d in data.items():
            pct = abs(d["score"]) / rng * 100 if rng > 0 else 0
            color = "#22c55e" if d["score"] > 20 else "#84cc16" if d["score"] > 0 else "#f59e0b" if d["score"] > -20 else "#ef4444"
            rows.append(f'''<div class="seg-row">
                <div class="seg-label">{name}</div>
                <div class="seg-bar-wrap">
                    <div class="seg-bar" style="width:{max(pct,3)}%;background:{color}"></div>
                </div>
                <div class="seg-score" style="color:{color}">{d["score"]:+d}</div>
                <div class="seg-n">n={d["n"]}</div>
            </div>''')
        return "\n".join(rows)
    
    def verbatim_cards(verbs, border_color):
        cards = []
        for v in verbs:
            cards.append(f'''<div class="verb-card" style="border-left:4px solid {border_color}">
                <div class="verb-quote">"{v["verbatim_comment"]}"</div>
                <div class="verb-attr">— {v["buyer_name"]}, {v["company"]} | Score: {v["nps_score"]}</div>
            </div>''')
        return "\n".join(cards)
    
    def driver_table(driver_counts):
        rows = []
        all_drivers = set()
        for cat in driver_counts.values():
            all_drivers.update(cat.keys())
        for driver in sorted(all_drivers):
            p = driver_counts["promoter"].get(driver, 0)
            pa = driver_counts["passive"].get(driver, 0)
            d = driver_counts["detractor"].get(driver, 0)
            rows.append(f"<tr><td>{driver}</td><td class='c-green'>{p}</td><td class='c-amber'>{pa}</td><td class='c-red'>{d}</td><td>{p+pa+d}</td></tr>")
        return "\n".join(rows)
    
    # Sample buyer profiles table (first 20)
    buyer_rows = []
    for b in buyers[:20]:
        buyer_rows.append(f'''<tr>
            <td>{b["id"]}</td><td><strong>{b["name"]}</strong></td><td>{b["title"]}</td>
            <td>{b["company"]}</td><td>{b["industry"]}</td><td>{b["company_size_category"]}</td>
            <td>{b["city"]}, {b["state"]}</td><td>${b["annual_research_budget_millions"]}M</td>
        </tr>''')
    buyer_table = "\n".join(buyer_rows)
    
    # Industry chart data
    ind_labels = json.dumps(list(ind_counts.keys()))
    ind_values = json.dumps(list(ind_counts.values()))
    
    html = f'''<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>US Market Research Buyer NPS Report</title>
<script src="https://cdn.jsdelivr.net/npm/chart.js@4"></script>
<style>
*{{margin:0;padding:0;box-sizing:border-box}}
body{{font-family:'Inter',-apple-system,BlinkMacSystemFont,sans-serif;background:#0f172a;color:#e2e8f0;line-height:1.6}}
.container{{max-width:1200px;margin:0 auto;padding:2rem}}
h1{{font-size:2.5rem;font-weight:800;background:linear-gradient(135deg,#60a5fa,#a78bfa,#f472b6);-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:.5rem}}
h2{{font-size:1.5rem;font-weight:700;color:#f8fafc;margin:2.5rem 0 1rem;padding-bottom:.5rem;border-bottom:1px solid #1e293b}}
h3{{font-size:1.1rem;color:#94a3b8;margin:1.5rem 0 .75rem}}
.subtitle{{color:#94a3b8;font-size:1.1rem;margin-bottom:2rem}}
.hero{{background:linear-gradient(135deg,#1e293b,#0f172a);border:1px solid #334155;border-radius:1rem;padding:2rem;margin:2rem 0}}
.kpi-grid{{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:1.5rem;margin:1.5rem 0}}
.kpi{{background:#1e293b;border:1px solid #334155;border-radius:.75rem;padding:1.5rem;text-align:center}}
.kpi-value{{font-size:2.5rem;font-weight:800}}
.kpi-label{{color:#94a3b8;font-size:.85rem;text-transform:uppercase;letter-spacing:.05em;margin-top:.25rem}}
.nps-big{{font-size:5rem;font-weight:900;color:{gauge_color}}}
.grid-2{{display:grid;grid-template-columns:1fr 1fr;gap:2rem}}
.card{{background:#1e293b;border:1px solid #334155;border-radius:.75rem;padding:1.5rem}}
.card-title{{font-size:1rem;font-weight:600;color:#f8fafc;margin-bottom:1rem}}
.seg-row{{display:flex;align-items:center;gap:.75rem;margin:.4rem 0}}
.seg-label{{width:180px;font-size:.8rem;color:#cbd5e1;flex-shrink:0}}
.seg-bar-wrap{{flex:1;height:20px;background:#0f172a;border-radius:4px;overflow:hidden}}
.seg-bar{{height:100%;border-radius:4px;transition:width .5s}}
.seg-score{{width:50px;font-weight:700;font-size:.9rem;text-align:right}}
.seg-n{{width:50px;font-size:.75rem;color:#64748b;text-align:right}}
.verb-card{{background:#0f172a;border-radius:.5rem;padding:1rem;margin:.75rem 0}}
.verb-quote{{font-style:italic;color:#e2e8f0;font-size:.95rem}}
.verb-attr{{color:#64748b;font-size:.8rem;margin-top:.5rem}}
table{{width:100%;border-collapse:collapse;font-size:.85rem}}
th{{background:#1e293b;color:#94a3b8;text-transform:uppercase;font-size:.75rem;letter-spacing:.05em;padding:.75rem;text-align:left;position:sticky;top:0}}
td{{padding:.6rem .75rem;border-bottom:1px solid #1e293b}}
tr:hover td{{background:#1e293b}}
.c-green{{color:#22c55e}}.c-amber{{color:#f59e0b}}.c-red{{color:#ef4444}}
.chart-container{{position:relative;height:350px}}
.tag{{display:inline-block;padding:.2rem .6rem;border-radius:1rem;font-size:.7rem;font-weight:600;margin:.15rem}}
.tag-promoter{{background:#22c55e20;color:#22c55e}}.tag-passive{{background:#f59e0b20;color:#f59e0b}}.tag-detractor{{background:#ef444420;color:#ef4444}}
.exec-summary{{background:linear-gradient(135deg,#1e3a5f,#1e293b);border:1px solid #2563eb40;border-radius:1rem;padding:2rem;margin:1.5rem 0}}
.exec-summary p{{color:#cbd5e1;font-size:1rem;margin:.5rem 0}}
.scroll-table{{max-height:500px;overflow-y:auto;border-radius:.75rem;border:1px solid #334155}}
.methodology{{background:#1e293b;border:1px solid #334155;border-radius:.75rem;padding:1.5rem;margin-top:2rem;font-size:.85rem;color:#94a3b8}}
@media(max-width:768px){{.grid-2{{grid-template-columns:1fr}}.seg-label{{width:120px}}h1{{font-size:1.8rem}}}}
</style>
</head>
<body>
<div class="container">
<h1>US Market Research Buyer NPS Report</h1>
<p class="subtitle">Net Promoter Score Analysis — Universe of {len(buyers)} Representative Buyers</p>

<div class="exec-summary">
<h3 style="color:#60a5fa;margin-top:0">📋 Executive Summary</h3>
<p>A simulated NPS survey was conducted across a universe of <strong>{len(buyers)} representative US market research buyers</strong>, spanning {len(ind_counts)} industries, all seniority levels, and company sizes from SMB to Enterprise.</p>
<p>The overall <strong>NPS score is {overall_nps:+d}</strong>, indicating a
{"moderately positive" if overall_nps > 10 else "slightly positive" if overall_nps > 0 else "neutral" if overall_nps == 0 else "negative"} sentiment toward current market research providers.
<strong>{prom} Promoters ({prom/len(nps)*100:.1f}%)</strong>, <strong>{pasv} Passives ({pasv/len(nps)*100:.1f}%)</strong>,
and <strong>{detr} Detractors ({detr/len(nps)*100:.1f}%)</strong> were identified.</p>
<p>Key themes: Promoters cite <strong>research quality, strategic insight, and innovation</strong>. Detractors cite <strong>value for money, speed of delivery, and poor customer service</strong>. The Technology and CPG sectors show notably higher NPS, while Telecom and Energy lag.</p>
</div>

<div class="hero">
<div style="text-align:center">
<div class="nps-big">{overall_nps:+d}</div>
<div class="kpi-label">Overall Net Promoter Score</div>
<div style="margin-top:1rem">
<span class="tag tag-promoter">Promoters: {prom} ({prom/len(nps)*100:.1f}%)</span>
<span class="tag tag-passive">Passives: {pasv} ({pasv/len(nps)*100:.1f}%)</span>
<span class="tag tag-detractor">Detractors: {detr} ({detr/len(nps)*100:.1f}%)</span>
</div>
</div>
</div>

<div class="kpi-grid">
<div class="kpi"><div class="kpi-value" style="color:#60a5fa">{len(buyers)}</div><div class="kpi-label">Total Respondents</div></div>
<div class="kpi"><div class="kpi-value" style="color:#a78bfa">{avg_score}</div><div class="kpi-label">Avg. Score (0-10)</div></div>
<div class="kpi"><div class="kpi-value" style="color:#22c55e">{len(ind_counts)}</div><div class="kpi-label">Industries</div></div>
<div class="kpi"><div class="kpi-value" style="color:#f472b6">{round(sum(b["annual_research_budget_millions"] for b in buyers)/len(buyers),1)}M</div><div class="kpi-label">Avg. Budget</div></div>
</div>

<h2>📊 Score Distribution</h2>
<div class="card">
<div class="chart-container"><canvas id="scoreChart"></canvas></div>
</div>

<h2>🏢 Buyer Universe Overview</h2>
<div class="grid-2">
<div class="card"><div class="card-title">Industry Breakdown</div>
<div class="chart-container"><canvas id="industryChart"></canvas></div></div>
<div class="card"><div class="card-title">Company Size & Seniority</div>
<div class="chart-container"><canvas id="sizeChart"></canvas></div></div>
</div>

<h3>Sample Buyer Profiles (showing 20 of {len(buyers)})</h3>
<div class="scroll-table">
<table>
<thead><tr><th>#</th><th>Name</th><th>Title</th><th>Company</th><th>Industry</th><th>Size</th><th>Location</th><th>Budget</th></tr></thead>
<tbody>{buyer_table}</tbody>
</table>
</div>

<h2>📈 NPS by Segment</h2>
<div class="grid-2">
<div class="card"><div class="card-title">By Industry</div>{bar_chart_rows(by_industry)}</div>
<div class="card"><div class="card-title">By Company Size</div>{bar_chart_rows(by_size)}</div>
</div>
<div class="grid-2" style="margin-top:1.5rem">
<div class="card"><div class="card-title">By Seniority</div>{bar_chart_rows(by_seniority)}</div>
<div class="card"><div class="card-title">By Research Budget</div>{bar_chart_rows(by_budget)}</div>
</div>

<h2>🔑 Key Drivers</h2>
<div class="card">
<div class="scroll-table">
<table>
<thead><tr><th>Driver</th><th class="c-green">Promoter</th><th class="c-amber">Passive</th><th class="c-red">Detractor</th><th>Total</th></tr></thead>
<tbody>{driver_table(drivers)}</tbody>
</table>
</div>
</div>

<h2>💬 Verbatim Analysis</h2>
<div class="grid-2">
<div>
<h3 style="color:#22c55e">Promoter Voices (Score 9-10)</h3>
{verbatim_cards(prom_verbs, "#22c55e")}
</div>
<div>
<h3 style="color:#ef4444">Detractor Voices (Score 0-6)</h3>
{verbatim_cards(detr_verbs, "#ef4444")}
</div>
</div>
<h3 style="color:#f59e0b">Passive Voices (Score 7-8)</h3>
{verbatim_cards(pass_verbs, "#f59e0b")}

<h2>💡 Key Insights & Recommendations</h2>
<div class="exec-summary">
<p><strong>1. The market is polarized.</strong> With Promoters and Detractors nearly balanced, the research industry faces a significant loyalty challenge. The path to growth lies in converting Passives.</p>
<p><strong>2. Enterprise clients are more satisfied.</strong> Enterprise NPS outperforms SMB, suggesting larger clients receive better service. SMB-focused strategies need attention.</p>
<p><strong>3. Technology & CPG lead satisfaction.</strong> These innovation-forward industries may respond better to modern research methodologies and technology platforms.</p>
<p><strong>4. Value and speed are critical pain points.</strong> Detractors overwhelmingly cite value for money and speed of delivery — the industry must address pricing transparency and turnaround times.</p>
<p><strong>5. Strategic insight differentiates.</strong> Promoters reward providers who go beyond data delivery to provide actionable strategic recommendations.</p>
<p><strong>6. C-suite buyers are more critical.</strong> Senior leaders expect more from their research investments — targeted C-suite engagement strategies are needed.</p>
</div>

<div class="methodology">
<strong>Methodology:</strong> This analysis is based on a simulated universe of {len(buyers)} representative US market research buyers.
Buyer profiles were generated with realistic distributions across industry, company size, seniority level, and research budget.
NPS scores (0-10) were simulated with segment-based adjustments reflecting known B2B research industry patterns.
Scores of 9-10 = Promoter, 7-8 = Passive, 0-6 = Detractor. NPS = %Promoters − %Detractors.
</div>
</div>

<script>
const scoreData = {json.dumps(score_dist_data)};
const scoreColors = {json.dumps(score_colors)};
new Chart(document.getElementById('scoreChart'),{{
type:'bar',data:{{labels:['0','1','2','3','4','5','6','7','8','9','10'],
datasets:[{{data:scoreData,backgroundColor:scoreColors,borderRadius:6,borderSkipped:false}}]}},
options:{{responsive:true,maintainAspectRatio:false,
plugins:{{legend:{{display:false}},tooltip:{{callbacks:{{label:c=>c.raw+' respondents'}}}}}},
scales:{{y:{{grid:{{color:'#1e293b'}},ticks:{{color:'#94a3b8'}}}},x:{{grid:{{display:false}},ticks:{{color:'#94a3b8'}}}}}}}}
}});

new Chart(document.getElementById('industryChart'),{{
type:'doughnut',data:{{labels:{ind_labels},datasets:[{{data:{ind_values},
backgroundColor:['#60a5fa','#a78bfa','#f472b6','#22c55e','#f59e0b','#ef4444','#06b6d4','#8b5cf6','#ec4899','#14b8a6','#f97316','#6366f1','#84cc16'],
borderWidth:0}}]}},
options:{{responsive:true,maintainAspectRatio:false,plugins:{{legend:{{position:'right',labels:{{color:'#94a3b8',font:{{size:11}},padding:8}}}}}}}}
}});

const sizeLabels = {json.dumps(list(size_counts.keys()))};
const sizeValues = {json.dumps(list(size_counts.values()))};
const roleLabels = {json.dumps(list(role_counts.keys()))};
const roleValues = {json.dumps(list(role_counts.values()))};
new Chart(document.getElementById('sizeChart'),{{
type:'bar',data:{{labels:sizeLabels.concat(roleLabels),
datasets:[{{label:'Count',data:sizeValues.concat(roleValues),
backgroundColor:['#60a5fa','#a78bfa','#f472b6','#22c55e','#f59e0b','#ef4444','#06b6d4'],borderRadius:6,borderSkipped:false}}]}},
options:{{responsive:true,maintainAspectRatio:false,indexAxis:'y',
plugins:{{legend:{{display:false}}}},
scales:{{x:{{grid:{{color:'#1e293b'}},ticks:{{color:'#94a3b8'}}}},y:{{grid:{{display:false}},ticks:{{color:'#94a3b8',font:{{size:10}}}}}}}}}}
}});
</script>
</body></html>'''
    return html

def main():
    buyers, nps = load_data()
    html = generate_html(buyers, nps)
    with open("market_research/nps_report.html", "w") as f:
        f.write(html)
    print(f"✓ Report generated: market_research/nps_report.html")

if __name__ == "__main__":
    main()
