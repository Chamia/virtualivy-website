# Virtual Ivy — Content & Blog Strategy (Authority Engine)

_Last updated: 2026-06-22 · Companion to [SEO-PLAYBOOK.md](SEO-PLAYBOOK.md) and [RECAP.md](RECAP.md)_

## Why blogs push visibility (the rationale you found)
Authority blogs work on three levers at once:
1. **Topical authority / E-E-A-T** — depth + accuracy across one subject (Kenyan HR & labour law) tells Google you are an expert, lifting *all* your pages, including the money/service pages.
2. **Long-tail capture** — each article ranks for specific questions ("NSSF rates 2026", "probation period Kenya") that are easier to win than head terms, and pull in qualified visitors.
3. **Internal-link equity** — every article links *up* to the relevant service page, passing authority to the pages that convert. Articles also earn external links and feed LinkedIn posts.

**The edge:** competitors (Corporate Staffing, Bridge Talent, Eagle HR, Thrive HR, etc.) mostly publish generic "company culture / future of work" fluff. The gap — and our wedge — is **timely, specific, statutory Kenyan compliance content** (NSSF/SHIF/Housing-Levy updates, quotas, leave rules) that demonstrates *current* expertise and matches real search demand.

## Content clusters (pillar → supporting)
- **Compliance & payroll** (pillar: HR Compliance) → NSSF 2026, SHIF, Housing Levy, payroll guide, minimum wage, statutory deductions, HR audit.
- **Hiring & talent** (pillar: Recruitment) → cost of a bad hire, talent acquisition, onboarding, job descriptions, interview process.
- **Employment law** (pillar: Labour Law Compliance) → contracts, probation, termination, redundancy, casual vs permanent, maternity/paternity, disability quota, leave entitlements.
- **People ops & strategy** (pillar: People Operations / HR Strategy) → policies, performance management, employee engagement, remote work, HR for startups/NGOs.

## Content gaps found (research-validated, June 2026)
| Topic | Why (demand / gap) | Status |
|---|---|---|
| NSSF rates 2026 | Limits rose Feb 2026; high search; competitors slow to update | ✅ published |
| Probation periods | Common employer question; under-covered well | ✅ published |
| Disability employment quota (5%) | New (2025); almost no HR-firm content; authority play | ✅ published |
| Minimum wage in Kenya 2026 | High search; new wage order May 2026 | ☐ next |
| SHIF for employers (deep dive) | Replaced NHIF; ongoing confusion | ☐ |
| Affordable Housing Levy guide | 1.5%+1.5%, penalties; high search | ☐ |
| Annual & sick leave entitlements | Common question; we only cover maternity/paternity | ☐ |
| Workplace health & safety (OSHA) for SMEs | Legal duty; little SME-friendly content | ☐ |
| Performance management in Kenya | Service-aligned; mid funnel | ☐ |
| Onboarding process that works | Already teased "coming soon" on Insights | ☐ |
| Employee handbook template guide | High intent; links to policies service | ☐ |
| HR for remote/hybrid teams in Kenya | Growing; differentiator | ☐ |

## Prioritized calendar (1 article/week = compounding authority)
1. Minimum Wage in Kenya 2026 → kw "minimum wage Kenya 2026" → links to HR Compliance / Labour Law
2. Affordable Housing Levy: Employer Guide → kw "housing levy Kenya employers" → HR Compliance / Payroll
3. SHIF Explained for Employers → kw "SHIF deduction Kenya" → HR Compliance / Outsourcing
4. Annual & Sick Leave in Kenya → kw "annual leave Kenya Employment Act" → Labour Law
5. Workplace Health & Safety (OSHA) for SMEs → kw "OSHA compliance Kenya" → HR Compliance
6. Performance Management in Kenya → kw "performance management Kenya" → HR Strategy
7. Building an Onboarding Process That Works → kw "employee onboarding Kenya" → People Operations
8. HR Policies / Employee Handbook Guide → kw "employee handbook Kenya" → HR Policies
9. Job Descriptions That Attract the Right People → kw "job description template Kenya" → Recruitment
10. HR for Remote & Hybrid Teams in Kenya → kw "remote work policy Kenya" → People Operations
(…then refresh the timely ones each year: NSSF/SHIF/levy/min-wage = annual updates.)

## The repeatable workflow (how each article is built)
1. **Pick a topic** from the calendar (timely > evergreen when a law changes).
2. **Verify facts** against authoritative/current sources (KRA, NSSF, FKE, kenyalaw, recent reputable guides). Never publish a statutory number you haven't checked this year.
3. **Write answer-first**: define the term in the opening (AEO), use clear H2 questions, short paragraphs, lists, concrete numbers.
4. **Internal links**: link up to the matching service page(s) + 1–2 related articles.
5. **Schema + chrome**: Article + BreadcrumbList JSON-LD, visible breadcrumb, firm author box, disclaimer, CTA (built by the article template / build script).
6. **Wire it in**: add to `sitemap.xml`, add an Insights card, update `llms.txt`.
7. **Distribute**: post the article link on LinkedIn (referral + discovery), and pitch a timely one as a guest post (see Playbook Part 3).
8. **Keep accurate**: revisit dated/statutory articles when rates change; bump `dateModified`.

## Guardrails
- **Accuracy over volume.** A wrong statutory figure destroys the E-E-A-T this strategy is built on. Cite "as of 2026", keep the disclaimer, verify yearly.
- **No fabricated stats, reviews, or client claims.** Authority comes from correct, current, specific *law* — that's our honest "proof".
