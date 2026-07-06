# Virtual Ivy Consultancy — Project Recap

_Last updated: 2026-07-07_

A living status doc for the website + SEO project. Companion docs: action checklist [SEO-PLAYBOOK.md](SEO-PLAYBOOK.md) · blog/authority plan [CONTENT-STRATEGY.md](CONTENT-STRATEGY.md) · verified backlink targets [BACKLINK-PLAN.md](BACKLINK-PLAN.md) · ready-to-send op-ed pitches [GUEST-POST-PITCHES.md](GUEST-POST-PITCHES.md) · **full authority/growth strategy [AUTHORITY-DOMINATION-PLAN.md](AUTHORITY-DOMINATION-PLAN.md)**.

## Latest status (2026-07-03)
- **Full crawl (Screaming-Frog-style, all 53 pages): technically pristine.** 0 broken links · 0 orphans · 0 missing/duplicate titles · 0 missing meta descriptions · 0 missing canonicals · 0 missing OG · exactly 1 H1/page · 266 images all with alt · full sitemap coverage · 234 JSON-LD blocks all valid. **No on-page defect worth fixing remains.**
- **Verdict (stated plainly): the bottleneck is EXTERNAL authority, not the website.** On-page/technical/entity/AEO is at its practical ceiling. Six tools + a manual crawl agree. Further on-page tweaks = vanity work; stopped by design.
- **Semrush Kenya:** Visibility ~16.76% (from 0), ~position 5; still **~0 backlinks** → off-site is THE lever.
- Prior scores retained: Seobility 88/100 (Issues 0), Ooty 86, Schema 100, SSR 100.

---

## TL;DR
The website is **technically excellent, content-rich, visually premium, and now backed by a linkable-asset library** — **53 pages** + 8 downloadable templates. Validated against 6 tools (Semrush, MIA, Seobility, SEO Site Checkup, Ooty, + expert review) and a full manual crawl: **on-page is done.** The site **ranks #1 for the brand term "Virtual Ivy"** (above LinkedIn). Every remaining lever to win *money* terms is **off-site: directories + IHRM registration + Google Business Profile + reviews + editorial backlinks + branded-search demand + indexing time** — see [AUTHORITY-DOMINATION-PLAN.md](AUTHORITY-DOMINATION-PLAN.md). The one on-site upgrade still blocked on real data (case studies / metrics / named testimonials / AggregateRating) will **never be fabricated.**

**Key reframe (2026-07-03):** for commercial queries ("best HR firm Kenya"), Google AND the AI engines rank/cite **directories + "best-of" listicles + consensus sources — not company homepages.** So the next win is getting Virtual Ivy *into* the third-party graph (directories, IHRM register, listicles) with consistent NAP — not more on-page work. Perplexity is the most winnable AI engine (cites brands ~22× more than ChatGPT; rewards schema + listicle formats).

---

## Brand facts (keep consistent everywhere)
- **Canonical name:** Virtual Ivy Consultancy (matches LinkedIn). Short form "Virtual Ivy" is an alternate.
- **NAP:** `Virtual Ivy Consultancy · Nairobi, Kenya · +254 723 828 190 · hello@virtualivy.net · https://virtualivy.co.ke`
- **Positioning:** B2B / client-focused HR consulting, recruitment & outsourcing for startups, SMEs, NGOs, corporates. NOT job-seeker/CV services. NOT a web-design studio. **Never fabricate stats/testimonials/reviews/metrics.**
- **Stack:** static HTML/CSS/JS · GitHub Pages + Cloudflare · clean (extensionless) URLs · **53 pages + 8 downloadable templates**. Future page-builds must use `/slug` internal links + carry the full `#organization` node (already on every page).

---

## DONE — content & SEO (all live & pushed)
- **50 pages:** homepage, 12 service pages, 2 Nairobi location pages, 2 industry pages, **~23 articles + 1 pillar guide + HR glossary** (DefinedTermSet schema), about/services/insights/faq/contact, 2 legal, custom 404.
- **Titles/meta:** unique, keyword-front-loaded, within length limits; homepage exact-match "HR Consulting in Kenya". Service-page metas carry concrete statutory specifics (Employment Act 2007, PAYE/NSSF/SHIF).
- **Schema:** Organization + **LocalBusiness** (ProfessionalService), WebSite, Service, **FAQPage** (homepage + 11 service pages + articles), Article, BreadcrumbList, DefinedTermSet. All JSON validated.
- **Content engine:** timely statutory articles (NSSF 2026, minimum wage 2026, SHIF, Housing Levy) + evergreen guides (leave, OSHA, probation, disability quota, onboarding, handbooks, job descriptions, remote HR, etc.), humanised voice, "related insights" blocks, internal links up to service pages. Full plan in CONTENT-STRATEGY.md (all 12 calendar topics ✅).
- **AEO/GEO:** `llms.txt` (AI-model site summary), FAQ + DefinedTerm schema, AI crawlers allowed in robots.txt, IndexNow submitted (Bing/Yandex).
- **Technical:** sitemap (50 URLs), clean-URL canonicals, async fonts, WebP hero + mobile hero + preload, image alt text, real favicon set, skip-link + `#main` landmark, accessible focus rings, reduced-motion, deferred scripts.
- **Clean internal links (2026-06-25):** all ~1,964 internal links converted to extensionless root-relative (`/services`, not `services.html`) — removes the Cloudflare 307 redirect hop on every link + clears ~557 "links to redirect" warnings. Assets keep `.html`. **Future page-builds must use `/slug` internal links.**
- **E-E-A-T / AEO citations (2026-06-25):** "Official sources" block on 16 statutory articles linking authorities (KRA, NSSF, Social Health Authority, Kenya Law) — addresses "minimal source citation" + boosts AI citability. Homepage FAQ expanded to 7 Q&As (compliance) + schema synced.
- **Service-page depth (2026-06-26):** addressed external critique that service pages were thin (85–230 words). ALL 14 service/location pages now **512–1,007 words** of original, useful, keyword-rich content (HR consultant Nairobi, recruitment agency Nairobi, outsourced HR, talent acquisition, executive search, startup/SME/NGO HR…) with deep internal links. Top 3 written manually; 9 via a verified 2-stage workflow (expand → fact/safety-check, no fabrication). These spoke pages — not the homepage — are what should rank for money terms.

## DONE — entity / AEO / GEO pass (2026-07-03)
- **Homepage Organization entity enriched:** added `numberOfEmployees` (2–10, from LinkedIn), `knowsLanguage` (en/sw), Nairobi as explicit `areaServed` City, and expanded `knowsAbout` 7→18 topics (all page-backed: PAYE, NSSF, SHIF, Housing Levy, Employment Act 2007, OSHA, executive search, etc.) — direct topical-authority signal to the Knowledge Graph + AI retrievers.
- **`foundingDate` deliberately NOT set:** LinkedIn says founded 2021, but 25 pages claim the firm has "10+ years' experience." Asserting a contradicting date would hurt entity trust. **USER TODO: resolve the conflict** — either reword copy to "a team with 10+ years' *combined* experience," or confirm the real founding year and it gets added consistently.
- **Author entity standardized sitewide:** fixed a 13/11 split between "Virtual Ivy" and "Virtual Ivy Consultancy" author names across 24 articles; all now canonical + `@id`-linked to `#organization`.
- **FAQ + FAQPage schema added to 8 uncovered pages** (hr-strategy, employee-relations, organizational-development, hr-for-smes, hr-for-corporates, hr-audit, hr-policies, services) — 32 genuine Kenya-specific Q&As. FAQPage coverage now **28 pages**. (Note: FAQ rich results are gov/health-only since 2023; value here is AEO/LLM extraction + long-tail coverage, not snippets.)
- **Page-level `Service` schema** (provider `@id`, areaServed) added to hr-audit + hr-policies.
- **Honest correction:** an earlier same-session attempt injected a *compact* `#organization` node on 49 pages on the belief that publisher/author `@id` was "dangling." It wasn't — the full `LocalBusiness #organization` node was already on every page (detection regex false-negative on the `LocalBusiness` type). All 49 redundant nodes **removed**; the author `@id`-linking + entity enrichment + FAQs remain.

## DONE — authority assets v1 / linkable-asset library (2026-07-03)
Switched from SEO-implementer to Growth/Digital-PR mode. Built genuine citation magnets (interactive tools + downloadables are the #1 backlink format in HR):
- **`/kenya-paye-calculator`** — interactive Kenya PAYE & Net Pay Calculator (NSSF/SHIF/Housing Levy/PAYE/net + employer cost). **Rates verified accurate against KRA's own worked example** (100K gross → 6,000 NSSF / 2,750 SHIF / 1,500 AHL / taxable 89,750 / PAYE 19,308 / net 70,442). 2026 model: NSSF 6% to KES 108,000 (Tier I 9,000); SHIF max(2.75%,300); AHL 1.5%; taxable = gross − NSSF − SHIF − AHL; PAYE bands 10/25/30/32.5/35% − 2,400 relief. `WebApplication` + `FAQPage` schema.
- **`/kenya-hr-compliance-hub`** — pillar resource: 2026 rate cards, statutory remittance calendar (all due 9th of following month), curated links to every compliance guide/tool. `CollectionPage` + `ItemList` + `FAQPage` schema (Perplexity favours ItemList).
- **`/kenya-hr-templates`** + **8 printable templates** (`assets/templates/`): employment contract, offer letter, job description, leave form, disciplinary warning, termination letter, onboarding checklist, NDA. Each **brand-stamped** ("Free HR template by Virtual Ivy" + link) so shared/re-hosted copies carry a citation. `CollectionPage` + `DigitalDocument` schema; templates are `noindex` (library page is the indexable asset).
- **Wired sitewide:** Resources dropdown + mobile nav on all 50 existing pages now include Hub / PAYE Calculator / HR Templates; sitemap + `llms.txt` updated. Site is now **53 pages + 8 templates**.
- **NEXT (code-buildable authority assets, ROI order):** HR Compliance Report 2026 (citable statutory dataset) · Media/Press Kit · directory+PR submission kit · 12-month LinkedIn content engine. Salary-benchmark data will **not** be fabricated — needs real placement data or a cited source.

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
- **Cloudflare/DNS completed (2026-06-25):** www → apex **301** redirect live (verified, 1 hop, no loop); **SPF** record live (`v=spf1 -all`); HTTP→HTTPS + HSTS already on. URL-canonicalization SEO-checker item cleared.
- **GA4 analytics live (2026-06-25):** `G-L5NT97G31J` base tag on all 50 pages + conversion events in main.js — `generate_lead` (contact + lead-magnet forms), `book_call` (CTA→contact), `contact_phone` (tel:), `contact_whatsapp` (wa.me), `contact_email` (mailto:). Loaded async. USER TODO: GA4 → Admin → Events → mark `generate_lead` + `book_call` as **Key events** (conversions) once they've fired.

---

## PENDING — off-site (USER ONLY — the real remaining levers)
1. **Google Business Profile** (exists, user-managed) — rename to "Virtual Ivy Consultancy"; fix city **Kiambu → Nairobi**; fix hours ("Open 24 hours" → Mon–Fri 08:30–17:00); add services, photos, description (playbook Part 2).
2. **Reviews** — none yet. Use playbook Part 4 messages / pilot offer. Target 10+. (LinkedIn company pages can't host reviews; use GBP + personal-profile recommendations.)
3. **Backlinks** — only ~1 referring domain; **THE remaining lever.** Full verified plan in **BACKLINK-PLAN.md** (56 domains checked). First-10 free wins: GBP, GoodFirms, Clutch, Go Africa Online, Crunchbase, BusinessFinder.co.ke, BrighterMonday/Fuzu employer pages. Highest value = **guest posts** — 3 ready-to-send pitches in **GUEST-POST-PITCHES.md** (Business Daily/NSSF, Nation/disability-quota, Standard/min-wage). Benchmark: "hr consulting kenya" needs ~2 ref domains; "hr compliance kenya" 0; "hr consulting nairobi" ~23. NOTE: corrected earlier errors — BusinessList.co.ke is PAID; cylex.co.ke is the wrong site (use cylex-international.com).
4. **GSC** — Request Indexing on key URLs; resubmit sitemap; add Bing Webmaster Tools.
5. **LinkedIn** — user does NOT control posting access; at minimum ensure Website field = the site.

## ✅ DNS / infra — DONE (was pending)
- www→apex 301, SPF, GA4 all complete (see "infrastructure fixes" above). Only the empty *auto*-404 remains (Cloudflare clean-URL quirk; cosmetic, low priority).

## ✅ Contact forms — LIVE (endpoint fixed 2026-07-07)
- Wired to **Formspree** in `assets/main.js` — both the contact form and the lead-magnet form deliver real submissions (AJAX, reads success/error). GA4 `generate_lead` still fires on submit. (Google Apps Script alternative kept in CONTACT-FORM-SETUP.md.)
- **Endpoint history:** original `mnjkdpdw` was tied to an account the user couldn't access (submissions succeeded — verified `{"ok":true}` — but notifications went to an unreachable inbox → looked "broken"). Swapped to user-owned `xdarjzrj`, then to **current `https://formspree.io/f/mgojqzov`**. Each swap was live-tested (returns `ok:true`) before deploy. Diagnosis method worth reusing: a form-encoded `curl` POST to the endpoint; `ok:true` = site/endpoint fine, so any "not working" is account/notification-side (unconfirmed form, wrong recipient, spam, 50/mo free cap).
- **USER TODO (Formspree dashboard, no code):** (1) click the confirm/activate link Formspree emailed the account owner on first submission; (2) set the form's "Send to" recipient to the inbox actually monitored. Site contact address is **`hello@virtualivy.net`** (322 refs) but the `virtualivy.net` mailbox may not be set up/controlled — if so, either create it (Zoho free tier) or forward it to a Gmail, and point Formspree there. This mailbox also backs all `mailto:` links + schema, so it matters beyond the form.
- NOTE: the previously leaked Postgres password must still be rotated and never used.

## PENDING — needs user-supplied data (then I implement)
- **Real reviews** → `AggregateRating` schema (must not be faked).
- **Real testimonials (named) / client logos / case studies** → premium case-study + metrics + logo-wall sections (scaffolds ready: `.tb-logo`, testimonials section, stats band).
- **Real numbers** (clients served, hires made) → stats band.
- **IHRM membership number / certifications** → real credential badge (E-E-A-T).

---

## Competitor learnings
- **hackhouse.africa** — weak on-page SEO (title just "Hackhouse Africa", no schema, no sitemap). Visibility = real-world authority (US Embassy/Red Bull partners, 400+ events → PR/backlinks) + design. Lesson: copy trust signals & authority-building, not their SEO.
- **mctaba.com** — genuinely strong SEO (concrete keyword-rich title/meta, rich domain-specific schema, `llms.txt`, AI-crawler allows). Lessons applied: built `llms.txt`; concrete metas. We match/beat both on technical SEO + now on design.
- **Premium design refs** (Linear/Vercel/Framer = dark; Stripe/Ramp/Mercury = light): chose **light-premium** for the HR trust audience.

---

## Realistic timeline
- Long-tail terms: ~2–6 weeks after indexing. Local pack ("HR consultant Nairobi"): 1–3 months (GBP + reviews). Head terms ("HR consulting Kenya"): 4–9 months (backlinks + time).
