# Virtual Ivy Consultancy — Project Recap

_Last updated: 2026-06-22_

A living status doc for the website + SEO project. For the action checklist, see [SEO-PLAYBOOK.md](SEO-PLAYBOOK.md); for the blog/authority plan see [CONTENT-STRATEGY.md](CONTENT-STRATEGY.md).

---

## TL;DR
The website is **technically excellent and competitive** — validated against 4 SEO tools (Semrush, MIA Optimize, Seobility, GSC) and 2 competitors (hackhouse.africa, mctaba.com). The site now **ranks #1 for the brand term "Virtual Ivy"** (above LinkedIn). The remaining work to actually rank for money terms is **off-site: Google Business Profile + reviews + backlinks + indexing time** — none of which can be done in code.

---

## Brand facts (keep consistent everywhere)
- **Canonical name:** Virtual Ivy Consultancy (matches LinkedIn). Short form "Virtual Ivy" is an alternate.
- **NAP:** `Virtual Ivy Consultancy · Nairobi, Kenya · +254 723 828 190 · hello@virtualivy.net · https://virtualivy.co.ke`
- **Positioning:** B2B / client-focused HR consulting, recruitment & outsourcing for startups, SMEs, NGOs, corporates. NOT job-seeker/CV services. Never fabricate stats/testimonials/reviews.
- **Stack:** static HTML/CSS/JS · GitHub Pages + Cloudflare · clean (extensionless) URLs · 38 pages.

---

## DONE — on-site (all live & pushed)
- **38 pages:** homepage, 12 service pages, 2 Nairobi location pages, 2 industry pages, 10 articles + 1 pillar guide, about/services/insights/faq/contact, legal.
- **Titles/meta:** unique, keyword-front-loaded, within length limits; homepage exact-match "HR Consulting in Kenya". Service-page metas carry concrete statutory specifics (Employment Act 2007, PAYE/NSSF/SHIF).
- **Schema:** Organization + **LocalBusiness** (ProfessionalService), WebSite, Service, **FAQPage** (homepage + 11 service pages), Article, BreadcrumbList. All JSON validated.
- **Content depth:** compliance & Nairobi pages expanded to ~competitive length; semantic terms added per Semrush; internal links + visible breadcrumbs sitewide.
- **AEO/GEO:** `llms.txt` (AI-model site summary), FAQ schema, AI crawlers allowed in robots.txt, IndexNow submitted (Bing/Yandex).
- **Technical:** sitemap (36 URLs), clean-URL canonicals, async fonts, hero preload, image alt text, apple-touch-icon, skip-link + `#main` landmark, accessible focus rings, reduced-motion.
- **UX/design:** full-bleed hero, dark mode, animated stat count-up, scroll-reveal, **trusted-by strip** (sector chips now; ready to swap real client logos via `.tb-logo`), honest stats band, testimonials section (representative, with permission disclaimer), author boxes on articles.

## DONE — infrastructure fixes
- **Cloudflare crawl block RESOLVED:** Bot Fight Mode OFF; "Block AI bots" → Do not block; managed robots.txt → Disabled (serves own clean robots.txt). Verified: Googlebot/GPTBot/ClaudeBot/Perplexity/SemrushBot all HTTP 200.
- **Brand search win:** homepage indexed and ranking #1 for "Virtual Ivy".

---

## PENDING — off-site (USER ONLY — the real remaining levers)
1. **Google Business Profile** (exists, user-managed) — needs: rename to "Virtual Ivy Consultancy"; fix city **Kiambu → Nairobi**; fix hours (currently "Open 24 hours" → Mon–Fri 08:30–17:00); add services, photos, description (in playbook Part 2).
2. **Reviews** — none yet. Use playbook Part 4 messages / pilot offer. Target 10+. (LinkedIn company pages can't host reviews; use GBP + LinkedIn personal-profile recommendations.)
3. **Backlinks** — only ~1 referring domain. Do playbook "first 10" list: GBP, goafricaonline.com, advance-africa.com, BusinessList.co.ke, etc. Benchmark: "hr consulting kenya" needs only ~2 ref domains; "hr compliance kenya" needs 0 (winnable on content alone); "hr consulting nairobi" ~23 (long game).
4. **GSC** — Request Indexing on key URLs; resubmit sitemap; add Bing Webmaster Tools.
5. **LinkedIn** — set Website field to the site; post links to articles; rename page to "Virtual Ivy Consultancy" for NAP consistency.

## PENDING — needs user-supplied data (then I implement)
- **Real reviews** → I add `AggregateRating` schema (flagged by Semrush/MIA; must not be faked).
- **Real testimonials (named) / client logos / case studies** → drop into the trusted-by strip + testimonials section (scaffolds ready).
- **Real numbers** (clients served, hires made) → stats band.
- **GA4 Measurement ID** → I wire analytics + conversion tracking (form/call/WhatsApp).
- **IHRM membership number / certifications** → real credential badge (E-E-A-T).
- **Formspree ID or Supabase anon key** → make contact forms actually deliver (currently simulate). NOTE: the leaked Postgres password must be rotated and never used.

## OPTIONAL / minor
- Cloudflare www → non-www redirect (www doesn't resolve; no duplicate content, but clears Seobility's last "critical" + UX).

---

## Competitor learnings
- **hackhouse.africa** — weak on-page SEO (title just "Hackhouse Africa", no schema, no sitemap). Visibility = real-world authority (US Embassy/Red Bull partners, 400+ events → PR/backlinks) + design + trust stats. Lesson: copy their trust signals & authority-building, not their SEO.
- **mctaba.com** — genuinely strong SEO: concrete keyword-rich title/meta, rich domain-specific schema (Course/EducationalOrganization), `llms.txt`, AI-crawler allows. Lessons applied: built `llms.txt`; made metas more concrete. We match/beat both on technical SEO.

---

## Realistic timeline
- Long-tail terms: ~2–6 weeks after indexing. Local pack ("HR consultant Nairobi"): 1–3 months (GBP + reviews). Head terms ("HR consulting Kenya"): 4–9 months (backlinks + time).
