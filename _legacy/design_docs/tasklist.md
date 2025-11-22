# Attercop Website Build Task List

**Generated:** 2025-11-22  
**Based on:** Design documents in `_legacy/design_docs` and current codebase analysis

---

## Overview

This task list represents the complete build requirements for the Attercop website, organized by priority and dependencies. The website is a Next.js 14 application using TypeScript and Tailwind CSS.

**Current Status:** Homepage and core services pages are implemented. PE Firms section is partially complete. Businesses, Life Sciences, and About sections need significant work.

---

## Phase 1: Homepage Completion

> **⚠️ KNOWN ISSUE:** The Three.js hero animation (`HeroScene` component) is currently disabled due to React Three Fiber compatibility issues with Next.js 15 + React 18. The component causes SSR errors ("Cannot read properties of undefined (reading 'ReactCurrentOwner')"). Options:
> 1. Implement a CSS-based animation alternative (recommended for now)
> 2. Upgrade to React 19 and @react-three/fiber@9.x (requires testing entire app)
> 3. Use a different 3D library compatible with current stack
>
> The page currently works with gradient mesh background only.

### Missing Homepage Sections
- [ ] **Client Logos Section**
  - [ ] Create `ClientLogos.tsx` component
  - [ ] Implement logo carousel/grid with 8-12 client logos
  - [ ] Add greyscale filter with color on hover
  - [ ] Link to case studies where available
  - [ ] Reference: `2_homepage_reference.md` lines 295-308

- [ ] **Newsletter Section**
  - [ ] Create `Newsletter.tsx` component
  - [ ] Implement email signup form with validation
  - [ ] Add privacy note and link
  - [ ] Style with Pearl background, max 800px width
  - [ ] Reference: `2_homepage_reference.md` lines 373-392

- [ ] **Trust Indicators Bar**
  - [ ] Create `TrustIndicators.tsx` component
  - [ ] Add 4 indicators: Microsoft Gold Partner, ISO 27001, UK Based, GDPR Compliant
  - [ ] Implement responsive layout (4 columns desktop, 2x2 mobile)
  - [ ] Reference: `2_homepage_reference.md` lines 395-408

### Homepage Enhancements
- [ ] **Review Existing Sections**
  - [ ] Verify Hero section matches design spec (Three.js knowledge graph)
  - [ ] Verify ValueProp cards content and styling
  - [ ] Verify Metrics section animation triggers
  - [ ] Verify CaseStudies asymmetric grid layout
  - [ ] Verify ServicesGrid bento box layout
  - [ ] Verify InteractiveDemo React Flow implementation
  - [ ] Verify ThoughtLeadership matches "Resource Preview" requirements
  - [ ] Verify BottomCTA split screen design

---

## Phase 2: Services Section Review & Polish

### Services Landing Page (`/services`)
- [ ] **Review Content**
  - [ ] Verify hero section matches `3_services_reference.md` lines 7-18
  - [ ] Verify service navigation grid (5 cards, asymmetric layout)
  - [ ] Verify bottom CTA section

### Individual Service Pages
- [ ] **AI Strategy & Roadmap** (`/services/ai-strategy-roadmap`)
  - [ ] Review content against `3_services_reference.md` lines 36-126
  - [ ] Add interactive roadmap timeline visual
  - [ ] Add 5-step framework section
  - [ ] Add deliverables list
  - [ ] Add use cases section
  - [ ] Add pricing information
  - [ ] Add FAQ section

- [ ] **AI Governance** (`/services/ai-governance`)
  - [ ] Review content against `3_services_reference.md` lines 129-227
  - [ ] Add governance framework diagram
  - [ ] Add industry-specific compliance section
  - [ ] Add deliverables list
  - [ ] Add "Why It Matters for PE" callout box
  - [ ] Add resources download section

- [ ] **Agentic AI** (`/services/agentic-ai`)
  - [ ] Review content against `3_services_reference.md` lines 230-383
  - [ ] Add animated agent network visualization
  - [ ] Add "Traditional AI vs Agentic AI" comparison
  - [ ] Add agent categories section (3 types)
  - [ ] Add Attercop Agent Architecture diagram
  - [ ] Add implementation process timeline
  - [ ] Add live demo link/embed

- [ ] **Conversational AI** (`/services/conversational-ai`)
  - [ ] Review content against `3_services_reference.md` lines 386-558
  - [ ] Add conversation flow animation
  - [ ] Add solution categories (3 types)
  - [ ] Add technical architecture diagram
  - [ ] Add implementation approach (4 phases)
  - [ ] Add ROI calculator (interactive tool)

- [ ] **Knowledge Engineering** (`/services/knowledge-engineering`)
  - [ ] Review content against `3_services_reference.md` lines 561-781
  - [ ] Add interactive knowledge graph visual
  - [ ] Add "Beyond Traditional Data" comparison
  - [ ] Add core capabilities section (3 types)
  - [ ] Add industry solutions (Life Sciences, Financial Services, Professional Services)
  - [ ] Add Attercop Knowledge Framework (5 phases)
  - [ ] Add interactive demo embed
  - [ ] Add CRDO case study highlight

### Cross-Service Elements
- [ ] **Service Comparison Table**
  - [ ] Create comparison table component
  - [ ] Add to services landing page
  - [ ] Reference: `3_services_reference.md` lines 787-796

---

## Phase 3: For PE Firms Section

### PE Landing Page (`/for-pe-firms`)
- [ ] **Review Content**
  - [ ] Verify hero section matches `4_for_pe_firms_reference.md` lines 28-39
  - [ ] Verify value proposition cards (3 cards)
  - [ ] Verify service offerings grid
  - [ ] Verify success metrics section with animated counters
  - [ ] Verify case study carousel (3 case studies)

### PE Subpages
- [ ] **GP Advisory** (`/for-pe-firms/gp-advisory`)
  - [ ] Review content against `4_for_pe_firms_reference.md` lines 129-250
  - [ ] Add advisory services section (3 types)
  - [ ] Add engagement models section
  - [ ] Add "Why Attercop for GPs" callout
  - [ ] Add resources download section

- [ ] **Due Diligence** (`/for-pe-firms/due-diligence`)
  - [ ] Review content against `4_for_pe_firms_reference.md` lines 253-410
  - [ ] Add service offerings (3 types)
  - [ ] Add deal flow enhancement section
  - [ ] Add pricing structure
  - [ ] Add success stories (2 examples)
  - [ ] Add process timeline

- [ ] **Portfolio Operations** (`/for-pe-firms/portfolio-operations`)
  - [ ] Review content against `4_for_pe_firms_reference.md` lines 413-585
  - [ ] Add portfolio playbook (4 phases)
  - [ ] Add operating models section (3 models)
  - [ ] Add value creation levers
  - [ ] Add portfolio packages (3 tiers)
  - [ ] Add operating partner tools section

- [ ] **Exit Planning** (`/for-pe-firms/exit-planning`)
  - [ ] Review content against `4_for_pe_firms_reference.md` lines 588-795
  - [ ] Add "AI Exit Premium" section
  - [ ] Add 12-month exit roadmap
  - [ ] Add AI story development section
  - [ ] Add exit readiness checklist (3 categories)
  - [ ] Add exit enhancement services
  - [ ] Add pricing information

- [ ] **PE Resources** (`/for-pe-firms/resources`)
  - [ ] Review content against `4_for_pe_firms_reference.md` lines 798+
  - [ ] Add resource library
  - [ ] Add whitepapers section
  - [ ] Add tools and calculators
  - [ ] Add templates

---

## Phase 4: For Businesses Section

### Business Landing Page (`/for-businesses`)
- [ ] **Review Content**
  - [ ] Verify hero section matches `5_for_businesses_reference.md` lines 28-41
  - [ ] Verify value proposition cards (3 cards)
  - [ ] Verify transformation pathways (4 options)
  - [ ] Verify success stories carousel (3 stories)
  - [ ] Verify "100-Day Promise" timeline section

### Create Missing Business Subpages
- [ ] **100-Day Transformation** (`/for-businesses/100-day-transformation`)
  - [ ] Create page file
  - [ ] Implement hero section (lines 154-167)
  - [ ] Add 100-day methodology (4 phases)
  - [ ] Add "What's Included" section
  - [ ] Add pricing tiers (3 tiers)
  - [ ] Add ROI projections by industry
  - [ ] Add success factors section
  - [ ] Add detailed case study
  - [ ] Add FAQ section
  - [ ] Reference: `5_for_businesses_reference.md` lines 154-368

- [ ] **Knowledge Systems** (`/for-businesses/knowledge-systems`)
  - [ ] Create page file
  - [ ] Implement hero section (lines 372-385)
  - [ ] Add "Knowledge Challenge" section (4 problem areas)
  - [ ] Add knowledge solutions (3 types)
  - [ ] Add implementation approach (4 phases)
  - [ ] Add technology stack section
  - [ ] Add investment options (3 tiers)
  - [ ] Add success metrics
  - [ ] Reference: `5_for_businesses_reference.md` lines 372-562

- [ ] **Process Automation** (`/for-businesses/process-automation`)
  - [ ] Create page file
  - [ ] Implement hero section (lines 565-578)
  - [ ] Add automation opportunities (3 categories)
  - [ ] Add Attercop Automation Method (4 steps)
  - [ ] Add automation technologies section
  - [ ] Add case examples (2 examples)
  - [ ] Add pricing structure
  - [ ] Add ROI calculator (interactive)
  - [ ] Reference: `5_for_businesses_reference.md` lines 565-758

- [ ] **Exit Readiness** (`/for-businesses/exit-readiness`)
  - [ ] Create page file
  - [ ] Implement hero section (lines 762-775)
  - [ ] Add "Exit Value Equation" section
  - [ ] Add exit enhancement programme (12-month plan)
  - [ ] Add value drivers section
  - [ ] Add exit preparation checklist
  - [ ] Add pricing information
  - [ ] Reference: `5_for_businesses_reference.md` lines 762-900+

- [ ] **Business Resources** (`/for-businesses/resources`)
  - [ ] Create page file
  - [ ] Add resource library
  - [ ] Add whitepapers and guides
  - [ ] Add tools and calculators
  - [ ] Add templates

---

## Phase 5: For Life Sciences Section

### Life Sciences Landing Page (`/for-life-sciences`)
- [ ] **Review Content**
  - [ ] Verify hero section matches `6_for_life_sciences_reference.md` lines 29-42
  - [ ] Verify "Our Life Sciences Experience" section
  - [ ] Verify value proposition cards (3 cards)
  - [ ] Verify expertise areas (4 areas)
  - [ ] Verify recent engagements (3 case studies)
  - [ ] Verify approach section (4 phases)
  - [ ] Verify regulatory considerations section
  - [ ] Verify technology expertise section

### Create Missing Life Sciences Subpages
- [ ] **Medical Communications** (`/for-life-sciences/medical-communications`)
  - [ ] Create page file
  - [ ] Implement hero section (lines 266-278)
  - [ ] Add experience section (2 strategic engagements)
  - [ ] Add support areas (4 categories)
  - [ ] Add transformation approach (4 weeks)
  - [ ] Add technology considerations
  - [ ] Reference: `6_for_life_sciences_reference.md` lines 266-383

- [ ] **Research Data & Knowledge Engineering** (`/for-life-sciences/research-data`)
  - [ ] Create page file
  - [ ] Implement hero section (lines 386-398)
  - [ ] Add featured project (CRDO case study)
  - [ ] Add knowledge graph solutions (4 components)
  - [ ] Add integration & access section
  - [ ] Reference: `6_for_life_sciences_reference.md` lines 386-444

- [ ] **Digital Health** (`/for-life-sciences/digital-health`)
  - [ ] Create page file
  - [ ] Implement hero section (lines 447-458)
  - [ ] Add recent engagements (3 examples)
  - [ ] Add support areas (4 categories)
  - [ ] Reference: `6_for_life_sciences_reference.md` lines 447-511

- [ ] **Technical Due Diligence** (`/for-life-sciences/due-diligence`)
  - [ ] Create page file
  - [ ] Implement hero section (lines 514-525)
  - [ ] Add recent assessments (2 examples)
  - [ ] Add due diligence approach (4 areas)
  - [ ] Reference: `6_for_life_sciences_reference.md` lines 514-573

- [ ] **Life Sciences Resources** (`/for-life-sciences/resources`)
  - [ ] Create page file
  - [ ] Add case studies section
  - [ ] Add white papers section
  - [ ] Add insights section
  - [ ] Reference: `6_for_life_sciences_reference.md` lines 652-677

---

## Phase 6: About Section

### About Landing Page (`/about`)
- [ ] **Review/Create Content**
  - [ ] Verify/implement hero section
  - [ ] Add "Our Values" section (3 columns)
  - [ ] Add quick stats section
  - [ ] Add navigation cards to subpages
  - [ ] Reference: `7_other_pages_reference.md` lines 23-82

### Create About Subpages
- [ ] **Our Story** (`/about/our-story`)
  - [ ] Create page file
  - [ ] Implement hero section
  - [ ] Add origin story section
  - [ ] Add timeline (2022-2024)
  - [ ] Add "Why Brighton?" section
  - [ ] Add mission statement
  - [ ] Reference: `7_other_pages_reference.md` lines 85-158

- [ ] **Our Team** (`/about/our-team`)
  - [ ] Create page file
  - [ ] Implement hero section
  - [ ] Add leadership team profiles (3+ profiles)
  - [ ] Add team by department section
  - [ ] Add culture & values section
  - [ ] Add "Join Us" section with current openings
  - [ ] Reference: `7_other_pages_reference.md` lines 161-259

- [ ] **Our Approach** (`/about/our-approach`)
  - [ ] Create page file
  - [ ] Implement hero section
  - [ ] Add 100-Day Framework (interactive timeline)
  - [ ] Add core principles (3 principles)
  - [ ] Add technology stack section
  - [ ] Add delivery methodology section
  - [ ] Add quality assurance section
  - [ ] Reference: `7_other_pages_reference.md` lines 262-385

- [ ] **Partnerships** (`/about/partnerships`)
  - [ ] Create page file
  - [ ] Implement hero section
  - [ ] Add strategic technology partners (Microsoft, Neo4j, etc.)
  - [ ] Add industry partners section
  - [ ] Add academic partnerships section
  - [ ] Add "Become a Partner" section
  - [ ] Reference: `7_other_pages_reference.md` lines 388-515

- [ ] **Attercop Labs** (`/about/attercop-labs`)
  - [ ] Create page file
  - [ ] Implement hero section
  - [ ] Add current research areas (3 areas)
  - [ ] Add open source contributions section
  - [ ] Add publications & research section
  - [ ] Add innovation partnerships section
  - [ ] Add lab resources section
  - [ ] Reference: `7_other_pages_reference.md` lines 518-651

---

## Phase 7: Resources & Insights

### Resources Section
- [ ] **Resources Landing** (`/resources`)
  - [ ] Create page file
  - [ ] Implement hero section
  - [ ] Add resource categories grid (6 categories)
  - [ ] Add featured resources carousel
  - [ ] Add resource search/filter functionality
  - [ ] Reference: `7_other_pages_reference.md` lines 654-704

- [ ] **Resource Infrastructure**
  - [ ] Create resource data structure/CMS integration
  - [ ] Implement filtering by industry/topic/format/role
  - [ ] Create downloadable resource templates
  - [ ] Add gated content functionality (email capture)

### Insights/Blog Section
- [ ] **Insights Landing** (`/insights`)
  - [ ] Create page file
  - [ ] Implement hero section
  - [ ] Add featured article section
  - [ ] Add recent articles grid
  - [ ] Add category filter
  - [ ] Add newsletter signup
  - [ ] Reference: `7_other_pages_reference.md` lines 707-756

- [ ] **Blog Infrastructure**
  - [ ] Create article template/dynamic route (`/insights/[slug]`)
  - [ ] Implement MDX or CMS integration
  - [ ] Add article metadata (author, date, category, read time)
  - [ ] Add related articles section
  - [ ] Add social sharing buttons

---

## Phase 8: Contact & Legal Pages

### Contact Page
- [ ] **Contact Page** (`/contact`)
  - [ ] Review/create page file
  - [ ] Implement hero section
  - [ ] Add contact options (3 columns)
  - [ ] Add contact form with validation
  - [ ] Add office locations with map
  - [ ] Add calendar integration for booking
  - [ ] Reference: `7_other_pages_reference.md` lines 759-850+

### Legal Pages
- [ ] **Privacy Policy** (`/privacy`)
  - [ ] Create page file
  - [ ] Add comprehensive privacy policy content
  - [ ] Ensure GDPR compliance

- [ ] **Terms of Service** (`/terms`)
  - [ ] Create page file
  - [ ] Add terms of service content

- [ ] **Cookie Policy** (`/cookies`)
  - [ ] Create page file
  - [ ] Add cookie policy content
  - [ ] Implement cookie consent banner

---

## Phase 9: Navigation & Layout

### Navigation Updates
- [ ] **Navbar Component** (`src/components/layout/Navbar.tsx`)
  - [ ] Verify all menu items match site structure
  - [ ] Verify dropdown menus for Services, PE Firms, Businesses, Life Sciences, About
  - [ ] Add missing links to new subpages
  - [ ] Test mobile navigation
  - [ ] Reference: `1_master_design_reference.md` lines 130-162

- [ ] **Footer Component** (`src/components/layout/Footer.tsx`)
  - [ ] Verify footer structure (4 columns)
  - [ ] Add all service links
  - [ ] Add all PE Firms links
  - [ ] Add all company links
  - [ ] Add resources links
  - [ ] Verify newsletter signup integration
  - [ ] Verify social icons
  - [ ] Reference: `1_master_design_reference.md` lines 165-189

### Sitemap & Search
- [ ] **Sitemap**
  - [ ] Generate XML sitemap
  - [ ] Create HTML sitemap page (`/sitemap`)

- [ ] **Search Functionality**
  - [ ] Implement site-wide search (optional)
  - [ ] Add search to resources section

---

## Phase 10: Design System & Components

### Global Styles
- [ ] **Review globals.css**
  - [ ] Verify color tokens match `1_master_design_reference.md` lines 34-59
  - [ ] Verify typography tokens match lines 62-85
  - [ ] Verify spacing scale matches lines 204-215
  - [ ] Verify animation tokens match lines 225-258

### Reusable Components
- [ ] **UI Components** (`src/components/ui/`)
  - [ ] Review button variants (4 styles)
  - [ ] Review card variants (4 types)
  - [ ] Review form elements
  - [ ] Create missing components as needed
  - [ ] Reference: `1_master_design_reference.md` lines 261-281

### Visual Elements
- [ ] **Graphics & Animations**
  - [ ] 3D Knowledge Graph (Three.js) for hero
  - [ ] Agent Visualization (animated flow diagram)
  - [ ] Data Visualizations (D3.js charts)
  - [ ] Process Diagrams (SVG with animations)
  - [ ] Custom icon set (24px base)
  - [ ] Reference: `1_master_design_reference.md` lines 284-299

---

## Phase 11: SEO & Metadata

### Page-Level SEO
- [ ] **Metadata Implementation**
  - [ ] Add title tags to all pages
  - [ ] Add meta descriptions to all pages
  - [ ] Add OpenGraph tags to all pages
  - [ ] Add Twitter Card tags to all pages
  - [ ] Verify heading hierarchy (single h1 per page)

### Schema Markup
- [ ] **Structured Data**
  - [ ] Add Organization schema
  - [ ] Add LocalBusiness schema (Brighton & London)
  - [ ] Add ProfessionalService schema
  - [ ] Add Article schema for blog posts
  - [ ] Add Service schema for service pages

### Technical SEO
- [ ] **SEO Best Practices**
  - [ ] Verify semantic HTML usage
  - [ ] Add canonical URLs
  - [ ] Create robots.txt
  - [ ] Optimize URL structure
  - [ ] Add breadcrumbs where appropriate

---

## Phase 12: Performance & Optimization

### Image Optimization
- [ ] **Images**
  - [ ] Convert all images to WebP with JPEG fallback
  - [ ] Implement responsive images with srcset
  - [ ] Add lazy loading below fold
  - [ ] Add blur-up placeholders
  - [ ] Optimize image sizes
  - [ ] Reference: `1_master_design_reference.md` lines 293-299

### Performance Targets
- [ ] **Lighthouse Optimization**
  - [ ] Achieve Lighthouse score 95+
  - [ ] First Contentful Paint < 1.5s
  - [ ] Time to Interactive < 3.5s
  - [ ] Cumulative Layout Shift < 0.1
  - [ ] Largest Contentful Paint < 2.5s
  - [ ] Reference: `1_master_design_reference.md` lines 317-323

### Code Optimization
- [ ] **JavaScript & CSS**
  - [ ] Implement code splitting
  - [ ] Use dynamic imports for heavy components
  - [ ] Inline critical CSS
  - [ ] Defer non-critical scripts
  - [ ] Implement service worker for caching

---

## Phase 13: Accessibility

### WCAG 2.1 AA Compliance
- [ ] **Color & Contrast**
  - [ ] Verify 4.5:1 contrast ratio for body text
  - [ ] Verify 3:1 contrast ratio for large text
  - [ ] Test with color blindness simulators

- [ ] **Keyboard Navigation**
  - [ ] Verify all interactive elements are keyboard accessible
  - [ ] Add skip links (jump to main content)
  - [ ] Implement focus trapping for modals
  - [ ] Verify visible focus states

- [ ] **Screen Readers**
  - [ ] Add proper ARIA labels
  - [ ] Verify semantic HTML
  - [ ] Test with screen reader software
  - [ ] Add alt text to all images

- [ ] **Motion & Animation**
  - [ ] Respect prefers-reduced-motion
  - [ ] Provide alternatives to animations
  - [ ] Reference: `1_master_design_reference.md` lines 326-341

---

## Phase 14: Testing & QA

### Browser Testing
- [ ] **Cross-Browser Compatibility**
  - [ ] Test on Chrome 90+
  - [ ] Test on Firefox 88+
  - [ ] Test on Safari 14+
  - [ ] Test on Edge 90+
  - [ ] Test on Mobile Safari iOS 14+
  - [ ] Test on Chrome Android 90+
  - [ ] Reference: `1_master_design_reference.md` lines 378-392

### Device Testing
- [ ] **Responsive Testing**
  - [ ] Test on mobile devices (375px, 414px)
  - [ ] Test on tablets (768px, 1024px)
  - [ ] Test on desktop (1440px, 1920px)
  - [ ] Test on ultra-wide displays (2560px+)

### Functional Testing
- [ ] **Forms & Interactions**
  - [ ] Test all forms (validation, submission)
  - [ ] Test all CTAs and links
  - [ ] Test navigation (desktop & mobile)
  - [ ] Test interactive demos
  - [ ] Test calculators and tools

### Quality Checks
- [ ] **Content & Links**
  - [ ] Proofread all content
  - [ ] Check for broken links
  - [ ] Verify all images load
  - [ ] Test all external links
  - [ ] Verify contact information

---

## Phase 15: Analytics & Monitoring

### Analytics Setup
- [ ] **Google Analytics 4**
  - [ ] Install GA4 tracking code
  - [ ] Set up conversion goals
  - [ ] Configure event tracking
  - [ ] Set up custom dimensions
  - [ ] Reference: `2_homepage_reference.md` lines 455-471

### Event Tracking
- [ ] **Key Events**
  - [ ] Track CTA clicks (primary/secondary)
  - [ ] Track service card interactions
  - [ ] Track interactive demo usage
  - [ ] Track case study views
  - [ ] Track newsletter signups
  - [ ] Track scroll depth
  - [ ] Track form submissions
  - [ ] Track resource downloads

### Monitoring
- [ ] **Performance Monitoring**
  - [ ] Set up Core Web Vitals tracking
  - [ ] Configure error logging (Sentry or similar)
  - [ ] Set up uptime monitoring
  - [ ] Configure performance alerts

---

## Phase 16: Launch Preparation

### Pre-Launch Checklist
- [ ] **Final Review**
  - [ ] Complete content audit
  - [ ] Final design review
  - [ ] Final accessibility audit
  - [ ] Final performance audit
  - [ ] Security review
  - [ ] Legal review (privacy, terms, cookies)

### Deployment
- [ ] **Production Setup**
  - [ ] Configure production environment
  - [ ] Set up CDN
  - [ ] Configure SSL certificate
  - [ ] Set up domain and DNS
  - [ ] Configure redirects (if migrating)
  - [ ] Test production build

### Post-Launch
- [ ] **Monitoring & Support**
  - [ ] Monitor analytics for first week
  - [ ] Monitor error logs
  - [ ] Monitor performance metrics
  - [ ] Collect user feedback
  - [ ] Plan iteration based on data

---

## Notes

- **Priority:** Phases 1-5 are highest priority (core content pages)
- **Dependencies:** Phase 10 (Design System) should be ongoing throughout
- **Iteration:** This is a living document - update as priorities change
- **Testing:** QA should happen continuously, not just in Phase 14

**Total Estimated Tasks:** 250+
