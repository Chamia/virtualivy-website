# Virtual Ivy Consultancy — Project Recap

_Last updated: 2026-06-24_

A living status doc for the website + SEO project. For the action checklist, see [SEO-PLAYBOOK.md](SEO-PLAYBOOK.md); for the blog/authority plan see [CONTENT-STRATEGY.md](CONTENT-STRATEGY.md).

---

## TL;DR
The website is **technically excellent, content-rich, and now visually premium** — a cohesive Stripe/Ramp-grade light-premium design system across all 50 pages. Validated against 4 SEO tools (Semrush, MIA Optimize, Seobility, SEO Site Checkup) and 3 competitors (hackhouse.africa, mctaba.com). The site **ranks #1 for the brand term "Virtual Ivy"** (above LinkedIn). The remaining work to rank for *money* terms is **off-site: Google Business Profile + reviews + backlinks + indexing time** — none of which can be done in code. The one on-site upgrade left (premium case studies / metrics / logos) is **blocked on real client data**, which we will never fabricate.

---

## Brand facts (keep consistent everywhere)
- **Canonical name:** Virtual Ivy Consultancy (matches LinkedIn). Short form "Virtual Ivy" is an alternate.
- **NAP:** `Virtual Ivy Consultancy · Nairobi, Kenya · +254 723 828 190 · hello@virtualivy.net · https://virtualivy.co.ke`
- **Positioning:** B2B / client-focused HR consulting, recruitment & outsourcing for startups, SMEs, NGOs, corporates. NOT job-seeker/CV services. NOT a web-design studio. **Never fabricate stats/testimonials/reviews/metrics.**
- **Stack:** static HTML/CSS/JS · GitHub Pages + Cloudflare · clean (extensionless) URLs · **50 pages**.

---

## DONE — content & SEO (all live & pushed)
- **50 pages:** homepage, 12 service pages, 2 Nairobi location pages, 2 industry pages, **~23 articles + 1 pillar guide + HR glossary** (DefinedTermSet schema), about/services/insights/faq/contact, 2 legal, custom 404.
- **Titles/meta:** unique, keyword-front-loaded, within length limits; homepage exact-match "HR Consulting in Kenya". Service-page metas carry concrete statutory specifics (Employment Act 2007, PAYE/NSSF/SHIF).
- **Schema:** Organization + **LocalBusiness** (ProfessionalService), WebSite, Service, **FAQPage** (homepage + 11 service pages + articles), Article, BreadcrumbList, DefinedTermSet. All JSON validated.
- **Content engine:** timely statutory articles (NSSF 2026, minimum wage 2026, SHIF, Housing Levy) + evergreen guides (leave, OSHA, probation, disability quota, onboarding, handbooks, job descriptions, remote HR, etc.), humanised voice, "related insights" blocks, internal links up to service pages. Full plan in CONTENT-STRATEGY.md (all 12 calendar topics ✅).
- **AEO/GEO:** `llms.txt` (AI-model site summary), FAQ + DefinedTerm schema, AI crawlers allowed in robots.txt, IndexNow submitted (Bing/Yandex).
- **Technical:** sitemap (50 URLs), clean-URL canonicals, async fonts, WebP hero + mobile hero + preload, image alt text, real favicon set, skip-link + `#main` landmark, accessible focus rings, reduced-motion, deferred scripts.

## DONE — premium design transformation (2026-06-23/24)
Brief was a "web-design studio" template; we applied the **craft** to the real HR business (confirmed via decision: keep HR, light-premium aesthetic, no fabrication). Implemented as a layered append to the shared `assets/styles.css` (lifts all 50 pages via cascade):
- **Typography:** display headings → tight bold Montserrat sans (was Libre Baskerville serif); bigger hero (up to 64px), clear heading/body contrast.
- **Tokens/colour:** deeper near-black (#0B1220), softer section bg, hairline `--border`, refined muted text, layered soft shadows, `--ease` cubic-bezier(.22,1,.36,1).
- **Layout:** containers 1280px, section padding ~116px, consistent vertical rhythm, more whitespace.
- **Components:** calm gradient buttons (rounded-rect, no loud glow), hairline cards w/ 4px lift, translucent **blurred sticky nav** (light mode), premium **page-hero banners**, elevated article typography, premium **dark CTA bands** (homepage + article), refined FAQ accordions.
- **Motion:** scroll-reveals at ~0.7s with staggered sibling cascade; reduced-motion respected.
- **Homepage deepened:** outcome-led service cards, stronger final CTA, "Book a Free Strategy Call" CTAs, outcome-driven hero copy.
- **QA passed:** all page types 200 + stylesheet linked; **dark mode integrity fixed** (`--border` token + card/link/ghost-button overrides); braces balanced; JS valid; mobile breakpoints in place.

## DONE — infrastructure fixes
- **Cloudflare crawl block RESOLVED:** Bot Fight Mode OFF; "Block AI bots" → Do not block; managed robots.txt → Disabled (serves own clean robots.txt). Verified: Googlebot/GPTBot/ClaudeBot/Perplexity/SemrushBot all HTTP 200.
- **SEO Site Checkup fixes:** WebP images, real favicon, custom 404, deferred scripts, OG/Twitter sync.
- **Brand search win:** homepage indexed and ranking #1 for "Virtual Ivy".

---

## PENDING — off-site (USER ONLY — the real remaining levers)
1. **Google Business Profile** (exists, user-managed) — rename to "Virtual Ivy Consultancy"; fix city **Kiambu → Nairobi**; fix hours ("Open 24 hours" → Mon–Fri 08:30–17:00); add services, photos, description (playbook Part 2).
2. **Reviews** — none yet. Use playbook Part 4 messages / pilot offer. Target 10+. (LinkedIn company pages can't host reviews; use GBP + personal-profile recommendations.)
3. **Backlinks** — only ~1 referring domain. Playbook "first 10": GBP, goafricaonline.com, advance-africa.com, BusinessList.co.ke, etc. Benchmark: "hr consulting kenya" needs ~2 ref domains; "hr compliance kenya" 0 (winnable on content); "hr consulting nairobi" ~23 (long game).
4. **GSC** — Request Indexing on key URLs; resubmit sitemap; add Bing Webmaster Tools.
5. **LinkedIn** — user does NOT control posting access; at minimum ensure Website field = the site.

## PENDING — needs your DNS / infra
- **www → non-www redirect** (Cloudflare Redirect Rule) — fixes "URL canonicalization" (www currently returns HTTP 000 / no DNS record). Exact steps given.
- **SPF record** (DNS TXT): no email from @virtualivy.co.ke → `v=spf1 -all`; Google Workspace → `v=spf1 include:_spf.google.com ~all`.
- **GA4** — paste `G-XXXXXXXXXX` → I wire analytics + conversion events (form/call/WhatsApp).

## PENDING — needs user-supplied data (then I implement)
- **Real reviews** → `AggregateRating` schema (must not be faked).
- **Real testimonials (named) / client logos / case studies** → premium case-study + metrics + logo-wall sections (scaffolds ready: `.tb-logo`, testimonials section, stats band).
- **Real numbers** (clients served, hires made) → stats band.
- **IHRM membership number / certifications** → real credential badge (E-E-A-T).
- **Formspree ID or Supabase anon key** → make contact forms actually deliver (currently simulate). NOTE: the leaked Postgres password must be rotated and never used.

---

## Competitor learnings
- **hackhouse.africa** — weak on-page SEO (title just "Hackhouse Africa", no schema, no sitemap). Visibility = real-world authority (US Embassy/Red Bull partners, 400+ events → PR/backlinks) + design. Lesson: copy trust signals & authority-building, not their SEO.
- **mctaba.com** — genuinely strong SEO (concrete keyword-rich title/meta, rich domain-specific schema, `llms.txt`, AI-crawler allows). Lessons applied: built `llms.txt`; concrete metas. We match/beat both on technical SEO + now on design.
- **Premium design refs** (Linear/Vercel/Framer = dark; Stripe/Ramp/Mercury = light): chose **light-premium** for the HR trust audience.

---

## Realistic timeline
- Long-tail terms: ~2–6 weeks after indexing. Local pack ("HR consultant Nairobi"): 1–3 months (GBP + reviews). Head terms ("HR consulting Kenya"): 4–9 months (backlinks + time).
