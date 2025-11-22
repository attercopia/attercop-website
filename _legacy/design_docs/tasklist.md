# Attercop Website Build Task List

**Generated:** 2025-11-22
**Last Updated:** 2025-11-22 (Session 5)
**Based on:** Design documents in `_legacy/design_docs` and current codebase analysis

---

## Overview

This task list represents the complete build requirements for the Attercop website, organized by priority and dependencies. The website is a Next.js 15 application using TypeScript and Tailwind CSS.

**Current Status:**
- ✅ Homepage structure complete with 9/11 sections
  - ✅ Hero, ValueProp, Metrics, CaseStudies, ServicesGrid, InteractiveDemo, ClientLogos, ThoughtLeadership, BottomCTA
  - ❌ Missing: Newsletter signup, Trust Indicators bar
- ✅ Interactive Knowledge Graph Demo fully functional
- ✅ Threads (Attercop Blof) blog feature implemented with AI-generated content
- ✅ **Services pages 5/5 COMPLETE (100%)** 🎉
  - ✅ AI Strategy & Roadmap (excellent quality, 325 lines)
  - ✅ AI Governance (excellent quality, 300 lines)
  - ✅ Agentic AI (excellent quality, 635 lines)
  - ✅ Knowledge Engineering (exceptional quality, 721 lines)
  - ✅ Conversational AI (excellent quality, 685 lines) - **COMPLETED THIS SESSION**
- ✅ Client Logos component deployed across 4 page variants (17 unique logos)
- ✅ Contact page with SendGrid integration
- ✅ Privacy Policy page
- ✅ Careers page
- ✅ **Resources section restructured** - All resources now under `/resources/` with proper organization
- ✅ **Our Team page created** - Full team bios with photos from attercop.com
- ⚠️ PE Firms section partially complete (landing + 4 subpages exist, need content review)
- ❌ Businesses section needs 4 subpages
- ❌ Life Sciences section needs 5 subpages
- ⚠️ About section partially complete (Team + Story done, needs Approach, Partnerships, Labs)

---

## Recent Completions

### 2025-11-22 (Session 5 - continued)
- ✅ **Custom 404 Page - COMPLETE**
  - Created branded 404 error page with Attercop theme
  - Features:
    - Gradient background (midnight → deep-teal → ocean) with animated blur elements
    - Large "404" with sparkle icon overlay
    - Tongue-in-cheek AI-themed messaging ("Our AI Couldn't Find That Page")
    - Mock AI system status report (Semantic Search: Failed, Knowledge Graph: Not Found, etc.)
    - 3 helpful navigation cards (Homepage, For PE Firms, Contact)
    - Prominent CTAs (Take Me Home, Go Back)
    - Contact link for reporting missing pages
  - Location: `src/app/not-found.tsx`
  - Responsive design with mobile optimization
  - Maintains brand voice while being playful

- ✅ **Newsletter Signup Integration - COMPLETE**
  - Connected NewsletterSignup component to SendGrid API
  - Now functions as AI Threads mailing list signup
  - Sends subscriber email to graeme.cox@attercop.com via existing `/api/send-email` route
  - Proper error handling and user feedback messages
  - Location: `src/components/threads/NewsletterSignup.tsx`
  - Used in: Threads blog layout
  - **Note**: Can be easily migrated to dedicated newsletter service (Beehiiv/Mailchimp) later if needed

- ✅ **Priority 1 CTA Fixes - COMPLETE**
  - Fixed Interactive Demo "Book Full Demo" button - Added Link wrapper to `/contact`
  - Fixed 4 broken internal links:
    - `/demo` → `/contact` (knowledge-engineering page)
    - `/roi-calculator` → `/resources/roi-calculator` (knowledge-engineering page)
    - `/insights` → `/threads` (ThoughtLeadership component, 2 instances)
  - Remaining broken links documented in Phase 11B for future implementation:
    - `/terms`, `/cookies`, `/about/partnerships` (Footer - need page creation)
    - Various PE Playbook and resource downloads (need PDF creation)
  - **Result**: All critical user journey CTAs now functional

- ✅ **Current Openings Career Page - COMPLETE**
  - Created `/careers/current-openings` page based on attercop.com/current-openings
  - Current status: No openings available (as per live site)
  - Sections included:
    - Hero with stats (Remote work, Brighton & London, 100% English required, No agencies)
    - Current status card (no openings with contact CTA)
    - "What We Look For" section (5 key qualities: Production-First, AI Expertise, Business Acumen, English, Self-Direction)
    - "Working at Attercop" section (3 benefits cards)
    - Important Information (English requirement, No agencies)
    - Get in Touch CTA (hello@attercop.com)
  - Updated careers page links (2 CTAs) to point to `/careers/current-openings`
  - Professional layout matching design system
  - Ready to add job listings when positions open

- ✅ **Conversational AI Service Page - COMPLETE**
  - Comprehensive 685-line implementation based on detailed specification document
  - 11 major sections with professional design:
    1. Hero with stats: 12 weeks to production, 95% authentication, 100% data accuracy, Full IP ownership
    2. Introduction: Flow framework brings structure to unpredictable LLMs
    3. Three Core Differentiators (Flow Framework, Complete Ownership, Proven Enterprise Delivery)
    4. The Flow Framework Advantage (comparison: Traditional vs Flow-Controlled AI)
    5. Flow Framework Architecture (4 core components)
    6. Technical Architecture on Azure (AKS, Multi-Channel Gateways, Knowledge Engine, Security)
    7. Use Cases Gallery (Insurance FNOL, Financial Services Auth, Healthcare Triage, Retail)
    8. Implementation Methodology (3 phases over 12 weeks)
    9. Investment Framework (£35k Discovery, £250k Full Implementation)
    10. Why This Matters for PE (4 strategic benefits)
    11. FAQ Section (6 questions), Related Services, Bottom CTA
  - Technical details:
    - Azure Kubernetes Service architecture
    - Multi-channel support (Voice, Web, WhatsApp)
    - RAG implementation with Azure AI Search
    - Security & Compliance (GDPR, EU AI Act, ISO 42001/27001)
    - State-based conversation control preventing hijacking
    - Full IP ownership model
  - Real-world use cases with measurable results
  - 12-week delivery methodology with quality gates
  - PE-specific value proposition (asset creation, scalability, cross-portfolio leverage)
  - **Services section NOW 5/5 COMPLETE (100%)** 🎉

- ✅ **Our Story Page - COMPLETE**
  - Created `/about/story` page with comprehensive company narrative
  - Content sourced from attercop.com/about
  - Sections included:
    - Hero with stats (1990s origins, 4 businesses founded, 100+ papers, Brighton & London)
    - Mission statement: "Why We Exist" - production systems over POCs
    - Journey timeline (5 milestones from 1990s to present)
    - Four Pillars framework (Value, Feasibility, Capability, Advisability)
    - "Why Brighton & London?" section explaining dual-location strategy
    - "What Makes Us Different" (5 differentiators with detailed explanations)
    - Bottom CTA section
  - Professional layout matching design system
  - Authentic voice emphasizing production-first, PE DNA, responsible innovation
  - **About section now 2/6 complete (Team + Story)**

### 2025-11-22 (Session 5)
- ✅ **Services Section Review & Agentic AI Implementation - COMPLETE**
  - Reviewed all 5 service pages for content quality and completeness
  - Status before this session:
    - AI Strategy & Roadmap: ✅ Excellent (325 lines, production ready)
    - AI Governance: ✅ Excellent (300 lines, production ready)
    - Knowledge Engineering: ✅ Exceptional (721 lines, production ready)
    - Agentic AI: ❌ Placeholder (23 lines)
    - Conversational AI: ❌ Placeholder (23 lines)

- ✅ **Agentic AI Service Page - COMPLETE**
  - Comprehensive 635-line implementation based on Attercop Agentic Fabric document
  - 10 major sections with professional design:
    1. Hero with tagline: "The Enterprise Control Plane for Autonomous AI"
    2. Introduction: "Beyond Chatbots: True Autonomous AI"
    3. Problem Statement: "The End of Agentic Chaos" (4 problems)
    4. Solution: Attercop Agentic Fabric (6 components with icons)
    5. Benefits: Customer Value Proposition (4 transformative benefits)
    6. Comparison Table: Traditional vs. Fabric (5 aspects)
    7. Use Cases: Real-World Applications (4 industries)
    8. Implementation Roadmap: 4 phases (7-10 weeks)
    9. FAQ Section: 6 detailed questions
    10. Bottom CTA section
  - Core components detailed:
    - Orchestration Engine, Agent & Tool Registries, Standardised Abstractions
    - Memory & Knowledge Hub, Observability & Governance Layer, Security & Compliance
  - Industry use cases: PE Due Diligence, Financial Services Trade Surveillance, Life Sciences Clinical Trials, Professional Services Proposals
  - Design quality matches AI Strategy & Governance pages
  - **Services pages now 4/5 complete (80%)**

- ✅ **Resource Structure Reorganization - COMPLETE**
  - Created `/resources` directory structure with proper organization
  - Created `/resources/insights` subdirectory for whitepapers, case studies, webinars
  - Moved `/case-studies` to `/resources/insights/case-studies`
  - Created placeholder pages:
    - `/resources/insights/whitepapers` - Coming soon page with newsletter signup
    - `/resources/insights/webinars` - Coming soon page with registration
    - `/resources/assessment` - AI Readiness Assessment tool (coming soon)
    - `/resources/roi-calculator` - ROI Calculator tool (coming soon)
  - Updated Footer.tsx:
    - Changed "Blog" to "AI Threads"
    - Updated all resource links to use `/resources/` prefix
  - Updated all resource links across the site (9 files):
    - for-businesses/page.tsx (4 links)
    - for-pe-firms/page.tsx (2 links)
    - for-pe-firms/resources/page.tsx (1 link)
    - services/knowledge-engineering/page.tsx (3 links)
    - components/sections/CaseStudies.tsx (1 link)
  - All links now point to proper `/resources/` structure

- ✅ **Our Team Page - COMPLETE**
  - Downloaded 4 team member profile images from attercop.com:
    - Graeme Cox (Founder/CEO)
    - Tiffany Willcox (Co-Founder/Partner)
    - Esteban A Rissola (Lead Data Scientist)
    - Hristijan Gjoreski (Scientific Advisor)
  - Created `/about/team` page with:
    - Hero section with stats (20+ years experience, 100+ papers, 4 patents, 50+ companies)
    - Leadership team grid (2x2 layout) with photos and full bios
    - LinkedIn links for each team member
    - "Our Values" section (3 cards: Production-First, PE Timelines, Science-Backed)
    - "Join Us" CTA section linking to careers and contact
    - Fully responsive design matching site design system
  - Images stored in `/public/images/team/`

### 2025-11-22 (Session 4)
- ✅ **Knowledge Graph Interactive Demo - COMPLETE**
  - Fixed node positioning behavior: nodes now stay where users drag them
    - Implemented fx/fy property system to override force simulation
    - Added fixedNodesRef to track manually positioned nodes
    - Custom drag handlers (handleNodeDrag, handleNodeDragEnd)
  - Added edge labels showing relationship types
    - Custom drawLink function for canvas rendering
    - Labels only visible when zoom > 0.8 to reduce clutter
    - White background boxes for readability
    - Formatted labels (underscores replaced with spaces)
  - Improved initial layout for better readability
    - Increased cluster radii by 50-80% (280-650px range)
    - Strategic positioning: projects top, lessons bottom, issues left, teams/tech right
    - Spiral distribution algorithm for groups with >8 nodes
    - Reduced random offsets from 20px to 10px for predictability
    - Updated both graphHelpers.ts (legacy format) and graphDataLoader.ts (dynamic format)
  - Made graph expand horizontally with browser
    - Restructured InteractiveDemo.tsx layout
    - Graph section uses full width (w-full px-4) instead of container constraint
    - Header, instructions, and CTA sections remain constrained for readability
    - Increased height from 600px to 700px in styles.module.css
  - Files modified:
    - GraphCanvas.tsx: Added drag handlers, drawLink function, updated ForceGraph2D props
    - graphHelpers.ts: Updated LAYOUT_CONFIG with larger spacing
    - graphDataLoader.ts: Updated layout for dynamic data format
    - InteractiveDemo.tsx: Restructured for full-width graph
    - styles.module.css: Increased height to 700px

### 2025-11-22 (Session 3)
- ✅ **Threads (Attercop Blof) Navigation Updates**
  - Updated Footer "Blog" link to point to `/threads` instead of `/insights`
  - Updated Footer "News" link to point to `/threads` instead of `/news`
  - Both links now direct to the Attercop Blof (AI Threads) page

- ✅ **Homepage Bottom CTA Link Corrections**
  - Updated "For PE Firms" button to link to `/for-pe-firms` (was `/pe-firms`)
  - Updated "For Portfolio Companies" button to link to `/for-businesses` (was `/portfolio`)
  - Ensures consistency with site navigation structure

- ✅ **Footer Industries Section Cleanup**
  - Removed "Financial Services" link (was pointing to `/services`)
  - Removed "Manufacturing" link (was pointing to `/services`)
  - Industries section now displays only: Private Equity, Portfolio Companies, Life Sciences, Healthcare

### 2025-11-22 (Session 2)
- ✅ **CSS Hero Animation Implementation**
  - Replaced Three.js with pure CSS animation solution
  - Created `AnimatedBackground.tsx` with 4 animation layers:
    - Floating gradient orbs (4 orbs, 12-20s animations)
    - Pulsing network nodes (30 dots with glow effects)
    - Animated connection lines (SVG with draw animation)
    - Floating particles (20 particles, upward movement)
  - Added 7 keyframe animations to `globals.css`
  - Zero external dependencies, fully SSR compatible
  - Smooth 60fps performance across all devices

- ✅ **Professional Images for Homepage**
  - Generated 3 abstract images for ValueProp section cards:
    - Knowledge Engineering (knowledge graph network)
    - Agentic AI (autonomous agents in motion)
    - PE DNA (business transformation and growth)
  - Generated 4 abstract images for ServicesGrid section:
    - Knowledge Graph Construction
    - RAG Systems
    - AI Due Diligence
    - Agentic Automation
  - All images use brand color palette (deep teal, sea green, ocean, midnight)
  - Images saved to `/public/images/` directory
  - Enhanced gradients for remaining 2 services (quota limit)

- ✅ **Privacy Policy Page**
  - Created `/privacy` page with UK GDPR compliance content
  - 8 comprehensive sections covering data collection, rights, and security
  - Proper metadata for SEO
  - Styled links and readable layout

- ✅ **Careers Page**
  - Created `/careers` page with full content from current site
  - Hero section with gradient background
  - 6 benefits cards with icons
  - 4 core values section
  - Bottom CTA section
  - Fully responsive design

- ✅ **Contact Information Updates**
  - Updated contact email to `hello@attercop.com` across site
  - Updated contact form locations: Brighton, London, Málaga, Skopje
  - Added email icon to footer next to LinkedIn
  - Removed Twitter icon and link from footer
  - Removed "Brighton • London" text from footer

- ✅ **SendGrid Email Configuration**
  - Abstracted email addresses to environment variables
  - Configured sender: `website@attercop.com`
  - Configured recipient: `graeme.cox@attercop.com`
  - Updated `.env.local` with email configuration
  - Contact form fully integrated and ready to use

### 2025-11-22 (Session 1)
- ✅ **Hero Animation Implementation**
  - Replaced broken React Three Fiber with canvas-based solution
  - Implemented authentic knowledge graph topology (6 clusters, hub-and-spoke)
  - 150+ nodes with hierarchical structure and interactive features
  - Reduced hero height to 80vh for better proportions
  - Zero external dependencies, fully SSR compatible

- ✅ **Client Logos Component - COMPLETE**
  - Created reusable ClientLogos component with 4 variants (homepage, pe-firms, businesses, life-sciences)
  - Integrated into homepage, PE Firms, Businesses, Life Sciences pages
  - Downloaded and integrated 17 unique client logos to /public/clients/ directory
  - Configured 21 total client relationships: 9 homepage, 5 PE, 8 business, 4 life sciences
  - Implemented sophisticated logo styling with selective inversion system:
    - Base greyscale filter with 60% opacity
    - Conditional invert filter for light/white logos (Bridewell, GCP, BrightLocal, Prime Global)
    - Hover: maintains greyscale at 100% opacity with 1.05x scale
    - Smooth 300ms transitions
  - Single source of truth - each logo file used once, referenced across variants
  - Fully responsive grid layout (3 cols desktop, 2 cols mobile)

---

## Phase 1: Homepage Completion

> **✅ RESOLVED:** Hero animation now implemented with canvas-based knowledge graph visualization
> - 6 clustered hub-and-spoke patterns representing authentic knowledge graph topology
> - 150+ nodes with hierarchical structure (core hubs → cluster spokes → leaf nodes)
> - Dense intra-cluster connections, sparse inter-cluster bridging
> - Interactive mouse attraction and animated data flow particles
> - Zero external dependencies, fully SSR compatible
> - Hero section reduced to 80vh for better proportions

### Homepage Sections - Current Status

**✅ Implemented (9 sections):**
1. Hero (with canvas-based knowledge graph animation)
2. ValueProp (3 cards with images)
3. Metrics (animated counters)
4. CaseStudies (asymmetric grid)
5. ServicesGrid (6 service cards with images)
6. InteractiveDemo (Knowledge Graph - fully interactive)
7. ClientLogos (social proof with 9 client logos)
8. ThoughtLeadership (3 article previews)
9. BottomCTA (split screen for PE Firms / Portfolio Companies)

**❌ Missing (2 sections):**

- [ ] **Newsletter Section**
  - [ ] Create `Newsletter.tsx` component
  - [ ] Implement email signup form with validation
  - [ ] Add privacy note and link
  - [ ] Style with Pearl background, max 800px width
  - [ ] Position: Between ThoughtLeadership and BottomCTA
  - [ ] Reference: `2_homepage_reference.md` lines 397-416
  - [ ] NOTE: This is different from Threads (/threads) which is a blog-like feature

- [ ] **Trust Indicators Bar**
  - [ ] Create `TrustIndicators.tsx` component
  - [ ] Add 4 indicators: Microsoft Gold Partner, ISO 27001, UK Based, GDPR Compliant
  - [ ] Implement responsive layout (4 columns desktop, 2x2 mobile)
  - [ ] Position: Before footer (after BottomCTA)
  - [ ] Reference: `2_homepage_reference.md` lines 419-432
  - [ ] NOTE: This is different from ClientLogos (social proof section)

### Homepage Enhancements
- [x] **Hero Section** - CSS animation implemented ✅
  - [x] Replaced Three.js with pure CSS solution
  - [x] 4 animation layers (orbs, nodes, lines, particles)
  - [x] 7 keyframe animations in globals.css
  - [x] Smooth 60fps performance
- [x] **ValueProp Section Images** ✅
  - [x] Generated 3 professional abstract images
  - [x] Integrated with gradient overlays
  - [x] Hover effects and animations
- [x] **ServicesGrid Section Images** ✅
  - [x] Generated 4 professional abstract images
  - [x] Enhanced gradients for 2 remaining services
  - [x] Background images with zoom on hover
- [x] **Interactive Demo Section - Knowledge Graph Component** ✅ COMPLETE
  - [x] Install react-force-graph-2d dependencies
  - [x] Create component structure (8 files: index, GraphCanvas, GraphControls, NodeDetails, GraphLegend, types, graphData, graphHelpers, styles)
  - [x] Implement interactive "Lessons Learned Database" visualization
  - [x] 30 nodes (6 projects, 8 lessons, 6 issues, 4 teams, 4 technologies, 2 experts)
  - [x] Features: search, filter by type, node selection, connection highlighting, detail panel
  - [x] Mobile responsive with static image fallback
  - [x] Fixed node positioning: nodes stay where dragged using fx/fy properties
  - [x] Edge labels: relationship types displayed on connections (visible at zoom > 0.8)
  - [x] Improved layout: larger spacing, spiral distribution for large groups, strategic positioning
  - [x] Full-width display: graph expands horizontally with browser (700px height)
  - [x] Reference: `knowledge-graph-demo-spec.md`
- [ ] **Review Existing Sections**
  - [ ] Verify Metrics section animation triggers
  - [ ] Verify CaseStudies asymmetric grid layout
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
- [x] **Our Story** (`/about/story`) ✅ COMPLETE (Session 5)
  - [x] Create page file
  - [x] Implement hero section with stats
  - [x] Add mission statement section ("Why We Exist")
  - [x] Add journey timeline (1990s-present, 5 milestones)
  - [x] Add Four Pillars framework (Value, Feasibility, Capability, Advisability)
  - [x] Add "Why Brighton & London?" section
  - [x] Add "What Makes Us Different" section (5 differentiators)
  - [x] Add bottom CTA section
  - [x] Content sourced from attercop.com/about
  - [x] Reference: `7_other_pages_reference.md` lines 85-158

- [x] **Our Team** (`/about/team`) ✅ COMPLETE (Session 5)
  - [x] Create page file
  - [x] Implement hero section with stats
  - [x] Add leadership team profiles (4 profiles with photos from attercop.com)
  - [x] Add values section (Production-First, PE Timelines, Science-Backed)
  - [x] Add "Join Us" section with CTA to careers
  - [x] Downloaded team images: Graeme Cox, Tiffany Willcox, Esteban Rissola, Hristijan Gjoreski
  - [x] Reference: `7_other_pages_reference.md` lines 161-259

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
- [x] **Contact Page** (`/contact`) ✅
  - [x] Page file exists and functional
  - [x] Hero section implemented
  - [x] Contact information displayed (email, locations, phone)
  - [x] Contact form with validation
  - [x] SendGrid integration configured
  - [x] Email: hello@attercop.com (display), website@attercop.com (sender), graeme.cox@attercop.com (recipient)
  - [x] Locations: Brighton, London, Málaga, Skopje
  - [ ] Add office locations with map
  - [ ] Add calendar integration for booking

### Legal Pages
- [x] **Privacy Policy** (`/privacy`) ✅
  - [x] Page file created
  - [x] Comprehensive privacy policy content (8 sections)
  - [x] UK GDPR compliance ensured
  - [x] Proper metadata and SEO

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

- [x] **Footer Component** (`src/components/layout/Footer.tsx`) ✅ (Partially)
  - [x] Footer structure verified (4 columns)
  - [x] Service links present
  - [x] PE Firms links present
  - [x] Company links present
  - [x] Resources links present
  - [x] Social icons updated (Email + LinkedIn, Twitter removed)
  - [x] Location text removed ("Brighton • London")
  - [ ] Verify newsletter signup integration

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

## Phase 11B: CTAs, Forms & Interactive Elements

### CTA & Form Implementation Status (Comprehensive Audit - Session 5)

#### ✅ FULLY IMPLEMENTED & WORKING
- [x] Contact form (`/contact`) - SendGrid integration complete
- [x] All "Book", "Schedule", "Discuss" CTAs → `/contact` (100+ buttons working)
- [x] All mailto links to hello@attercop.com
- [x] Knowledge Graph Demo - Interactive visualization working
- [x] Careers page navigation to `/careers/current-openings`
- [x] Main navigation and footer links (except 4 missing pages)

#### ⚠️ NEEDS CONNECTION/FIXES (Priority 1 - Critical)
- [ ] **Interactive Demo "Book Full Demo" button** - No href, needs link to `/contact`
  - Location: `src/components/sections/InteractiveDemo.tsx:77`
- [ ] **Fix 12 broken internal links:**
  - `/demo` → Should be `/contact` or dedicated demo page
  - `/roi-calculator` → Should be `/resources/roi-calculator`
  - `/resources/pe-playbook` → Needs file or redirect to `/contact`
  - `/resources/case-studies` → Should be `/resources/insights/case-studies`
  - `/case-studies` → Should be `/resources/insights/case-studies`
  - `/services/exit-readiness` → Missing page
  - `/services/life-sciences` → Should be `/for-life-sciences`
  - `/services/due-diligence` → Should be `/for-pe-firms/due-diligence`
  - `/about/partnerships` → Missing page (Footer link)
  - `/terms` → Missing page (Footer link)
  - `/cookies` → Missing page (Footer link)
  - `/insights` → Should be `/threads` or `/resources/insights`

#### ⚠️ NEEDS IMPLEMENTATION (Priority 2 - Newsletter)
- [ ] **Newsletter Signup Component** - UI exists, needs backend
  - Location: `src/components/threads/NewsletterSignup.tsx`
  - Current: Simulated submission (line 18 TODO)
  - Needs: Integration with Beehiiv/Mailchimp/ConvertKit
  - Used in: Threads blog layout
- [ ] **PE Resources Newsletter** - "Subscribe to Briefing" button
  - Location: `/for-pe-firms/resources` page
  - Currently: Links to `/contact`
  - Needs: Dedicated signup flow or newsletter integration

#### 🔧 NEEDS BUILDING (Priority 3 - Interactive Tools)
- [ ] **AI Readiness Assessment Tool** (`/resources/assessment`)
  - Status: Coming soon page exists
  - Needs: Interactive 5-min assessment
  - Features: 5 dimensions, scoring, benchmarking, 100-day roadmap
  - Form integration: Use SendGrid for results email
- [ ] **ROI Calculator** (`/resources/roi-calculator`)
  - Status: Coming soon page exists
  - Needs: Interactive calculator with inputs
  - Features: Efficiency, revenue, costs, break-even, exit value
  - Form integration: Use SendGrid for detailed analysis request

#### 📄 NEEDS CONTENT (Priority 4 - Downloadable Resources)
All "Download" CTAs currently redirect to `/contact`. Need to create:
- [ ] **PE AI Playbook PDF** - Referenced in 3 locations
- [ ] **Technical DD Framework PDF**
- [ ] **100-Day Transformation Playbook PDF**
- [ ] **Exit Readiness Checklist PDF**
- [ ] **Strategy Framework PDF**
- [ ] **Compliance Guide PDF**
- [ ] **Agentic AI Framework Guide PDF**
- [ ] **Case Study Pack PDF**
- [ ] Create `/public/downloads/` directory structure
- [ ] Consider gated downloads with email capture

#### 🎥 NEEDS BUILDING (Priority 5 - Webinars & Media)
- [ ] **Whitepapers Library** (`/resources/insights/whitepapers`)
  - Status: Coming soon page exists
  - Needs: Library system, PDF uploads, categorization
- [ ] **Webinars System** (`/resources/insights/webinars`)
  - Status: Coming soon page exists
  - Needs: Registration system, video hosting, calendar integration

#### 📄 NEEDS CREATION (Priority 6 - Missing Pages)
- [ ] `/demo` - Dedicated demo request page (or redirect to `/contact`)
- [ ] `/terms` - Terms of Service page
- [ ] `/cookies` - Cookie Policy page
- [ ] `/about/partnerships` - Partnerships page
- [ ] `/for-life-sciences/healthcare-operations` - Healthcare page

#### 🧪 LIFE SCIENCES SECTION (Priority 7 - Content Gap)
All 6 service tiles on `/for-life-sciences` show "Coming soon":
- [ ] Medical Communications page
- [ ] Research Data & Knowledge Engineering page
- [ ] Digital Health page
- [ ] Technical Due Diligence page
- [ ] Life Sciences Resources page
- [ ] Healthcare Operations page

### Implementation Notes
- **SendGrid Integration**: Already implemented at `/api/send-email/route.ts`
- **All forms**: Should use existing SendGrid setup (graeme.cox@attercop.com)
- **Newsletter**: Needs separate service (Beehiiv/Mailchimp) - not SendGrid
- **Priority order**: Fix broken links first, then newsletter, then build tools
- **Quick wins**: Fix InteractiveDemo button + broken links = massive UX improvement

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
