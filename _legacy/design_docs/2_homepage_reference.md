# Attercop Homepage Reference
## Complete Homepage Design & Content Specification
## Version 2.0

---

## Page Overview

### Purpose
The homepage serves as the primary entry point, establishing Attercop's position as the leading AI consultancy for PE-backed firms whilst demonstrating technical sophistication through visual design.

### Key Objectives
1. Immediate credibility through sophisticated design
2. Clear value proposition for PE firms and portfolio companies
3. Visual demonstration of technical capability
4. Clear pathways to relevant content
5. Trust building through metrics and case studies

---

## Hero Section

### Layout
- **Type**: Full viewport height (100vh)
- **Background**: Animated 3D knowledge graph (Three.js)
- **Overlay**: Gradient overlay for text readability

### Content
```
Headline: Knowledge-Backed, Agentic AI
Subtitle: For PE-Backed Mid-Market Firms
Supporting Text: Transform your portfolio with intelligent systems that deliver 
measurable ROI within 100 days. Not consultants, but builders.
```

### CTAs
- **Primary**: [For PE Firms] - Coral button
- **Secondary**: [For Portfolio Companies] - Teal outline button

### Visual Elements
- **Knowledge Graph Animation**: 
  - 30-50 nodes representing different data types
  - Animated connections showing relationships
  - Interactive on hover (desktop only)
  - Subtle parallax effect on scroll
  - WebGL/Three.js implementation

### Technical Specifications
- Lazy load Three.js after initial paint
- Fallback static image for low-power devices
- Reduce motion for accessibility
- 60fps animation target

---

## Value Proposition Section

### Layout
- Three equal columns on desktop
- Stack on mobile with 32px spacing
- 96px padding top/bottom

### Cards Content

#### Card 1: Knowledge Engineering
```
Icon: Network/Graph icon (animated)
Title: Knowledge Engineering
Tagline: Structure. Connect. Intelligence.
Description: Transform unstructured data into connected 
knowledge that powers intelligent decision-making.
```

#### Card 2: Agentic AI
```
Icon: Robot/Agent icon (animated)
Title: Agentic AI
Tagline: Agents That Act 24/7
Description: Deploy autonomous agents that operate continuously, 
making decisions and taking actions without human intervention.
```

#### Card 3: PE DNA
```
Icon: Growth chart icon (animated)
Title: PE DNA
Tagline: 100-Day Transformations
Description: Built by operators for operators. We understand 
carry, IRR, and the urgency of value creation.
```

### Visual Design
- Cards with subtle gradient borders
- Hover effect: Lift and glow
- Icons: 64px, animated on scroll into view
- Typography: Inter Tight for titles, Source Sans for body

---

## Metrics Section

### Layout
- Four columns on desktop, 2x2 grid tablet, stack mobile
- Dark background (Midnight colour)
- Animated counters triggered on scroll

### Metrics Content

```
50+
Portfolio Companies Transformed

3x
Average ROI Achieved

100
Days to Production

15+
PE Firms Advised
```

### Animation
- Count up animation over 2 seconds
- Stagger start by 0.2s per metric
- Ease-out timing function
- Plus symbol and suffix animate after number

---

## Case Study Showcase

### Layout
- **Desktop**: Asymmetric grid (2 large, 2 medium cards)
- **Mobile**: Single column stack
- **Background**: Pearl colour

### Case Studies

#### Case Study 1 (Large)
```
Logo: [Medical Communications Leader]
Challenge: Manual content creation bottleneck
Impact: 70% faster publication time
Link: Read Full Case Study →
Visual: Animated chart showing time reduction
```

#### Case Study 2 (Large)
```
Logo: [PE Portfolio Company]
Challenge: Operational inefficiency
Impact: 40% efficiency gain
Link: Read Full Case Study →
Visual: Process flow optimisation diagram
```

#### Case Study 3 (Medium)
```
Logo: [CRDO]
Challenge: Decades of locked data
Impact: 20 years of data unlocked
Link: Read Full Case Study →
```

#### Case Study 4 (Medium)
```
Logo: [Life Sciences Firm]
Challenge: Regulatory compliance
Impact: 100% compliance achieved
Link: Read Full Case Study →
```

### Visual Design
- White cards with subtle shadows
- Logo placement: Top left
- Metric highlight in brand colour
- Hover: Slight scale and deeper shadow

---

## Service Grid Section

### Layout
- **Type**: Bento box layout with varied sizes
- **Grid**: 6 columns, auto-flow rows
- **Gap**: 24px

### Card Distribution
```
Large Cards (span 3 cols):
- Knowledge Engineering
- Agentic AI

Medium Cards (span 2 cols):
- Conversational AI
- AI Governance

Small Card (span 2 cols):
- AI Strategy & Roadmap
```

### Card Content

#### Knowledge Engineering (Large)
```
Icon: Knowledge graph visualisation
Title: Knowledge Engineering
Description: Build intelligent knowledge systems that connect 
your enterprise data into actionable insights
Features: RAG systems, Graph databases, Semantic search
CTA: Explore Knowledge Engineering →
```

#### Agentic AI (Large)
```
Icon: Autonomous agent network
Title: Agentic AI
Description: Deploy AI agents that autonomously execute tasks, 
make decisions, and drive operations 24/7
Features: Task automation, Decision systems, Process orchestration
CTA: Discover Agentic AI →
```

#### Conversational AI (Medium)
```
Icon: Chat interface
Title: Conversational AI
Description: Natural language interfaces for customers and employees
CTA: Learn More →
```

#### AI Governance (Medium)
```
Icon: Shield with checkmark
Title: AI Governance
Description: Ensure compliance, ethics, and control
CTA: Learn More →
```

#### AI Strategy & Roadmap (Small)
```
Icon: Roadmap/Timeline
Title: Strategy & Roadmap
Description: Your AI journey mapped
CTA: Get Started →
```

### Visual Design
- Gradient backgrounds using brand colours
- Icons: 48px for large, 32px for medium/small
- Subtle animation on hover
- Glass morphism effect option

---

## Interactive Demo Section

### Layout
- Full width container
- Split view: Description left (40%), Demo right (60%)
- Height: 600px desktop, responsive mobile

### Content
```
Title: Experience Our Knowledge Graph
Description: Interact with a live demonstration of our knowledge 
graph technology. Drag nodes, explore connections, and see how 
disparate data becomes connected intelligence.

Instructions:
• Drag nodes to reorganise
• Click nodes for details
• Search to find connections
• Zoom to explore
```

### Interactive Features
- **Technology**: React Flow or custom D3.js
- **Nodes**: 20-30 sample nodes
- **Interactions**:
  - Drag and drop nodes
  - Click for node details
  - Search functionality
  - Zoom/pan controls
  - Connection highlighting
- **Data**: Sample business entities and relationships

### Fallback
- Static image for mobile devices
- "View on desktop for interactive demo" message

---

## Client Logos Section

### Layout
- **Title**: "Trusted by Leading PE Firms and Their Portfolio Companies"
- **Display**: Logo carousel/grid
- **Logos**: 8-12 client logos, greyscale
- **Animation**: Subtle fade in on scroll

### Logo Specifications
- Height: 48px
- Greyscale by default
- Colour on hover
- Link to case study where available

---

## Resource Preview Section

### Layout
- Three columns: Whitepapers, Tools, Insights
- Cards with preview content
- See all resources link

### Content Cards

#### Featured Whitepaper
```
Title: The PE Guide to AI Value Creation
Description: How to drive 3x ROI from AI investments
CTA: Download Now →
Badge: NEW
```

#### Interactive Tool
```
Title: AI Readiness Calculator
Description: Assess your AI maturity in 5 minutes
CTA: Start Assessment →
Badge: INTERACTIVE
```

#### Latest Insight
```
Title: Why 90% of AI POCs Fail
Description: And how to be in the 10% that succeed
CTA: Read Article →
Date: Nov 2024
```

---

## Bottom CTA Section

### Layout
- **Type**: Split screen with gradient backgrounds
- **Height**: 400px
- **Mobile**: Stack vertically

### Left Side (PE Firms)
```
Background: Gradient (Midnight to Deep Teal)
Headline: Ready to Transform Your Portfolio?
Subtext: Discover how AI can drive returns across your entire fund
CTA Button: Book GP Advisory Session
Visual: Abstract portfolio visualisation
```

### Right Side (Portfolio Companies)
```
Background: Gradient (Deep Teal to Sea Green)
Headline: Start Your 100-Day Journey
Subtext: From strategy to production in 100 days. Guaranteed.
CTA Button: Get Your Roadmap
Visual: Timeline/journey visualisation
```

---

## Newsletter Section

### Layout
- Contained width (max 800px)
- Centred alignment
- Subtle background (Pearl)

### Content
```
Title: Stay Ahead of the AI Curve
Description: Monthly insights on AI in private equity and 
practical guides for portfolio companies
```

### Form Fields
- Email input with validation
- Submit button (Coral colour)
- Privacy note with link
- Success/error messaging

---

## Trust Indicators Bar

### Layout
- Horizontal bar before footer
- Icon + text combinations
- 4 indicators on desktop, 2x2 mobile

### Indicators
```
1. Microsoft Gold Partner (logo)
2. ISO 27001 Certified (badge)
3. 100% UK Based (icon + text)
4. GDPR Compliant (badge)
```

---

## SEO & Meta Information

### Page Title
`Attercop | Knowledge-Backed Agentic AI for PE Firms`

### Meta Description
`Transform your PE portfolio with intelligent AI systems. 100-day transformations, 3x ROI. Knowledge engineering and autonomous agents for mid-market firms.`

### Open Graph
- Title: Knowledge-Backed, Agentic AI for PE-Backed Firms
- Description: As above
- Image: Custom OG image with brand and value prop
- Type: website

### Schema Markup
- Organization schema
- Local business (Brighton/London)
- Professional service schema

---

## Performance Optimisation

### Critical Resources
1. Above-fold CSS inline
2. Hero image preload
3. Font preload (Sora, Inter)
4. Three.js lazy load

### Image Optimisation
- WebP format with JPEG fallback
- Responsive images with srcset
- Lazy loading below fold
- Blur-up placeholders

### JavaScript Loading
- Defer non-critical scripts
- Code split by section
- Progressive enhancement
- Service worker for caching

---

## Analytics Tracking

### Events to Track
- CTA clicks (differentiate primary/secondary)
- Service card interactions
- Interactive demo usage
- Case study views
- Newsletter signups
- Scroll depth

### Conversion Goals
1. Contact form submission
2. Resource downloads
3. Demo interactions >30 seconds
4. Service page visits
5. Newsletter signup

---

## A/B Testing Opportunities

### Test Variants
1. Hero headline variations
2. CTA button text
3. Value prop card order
4. Case study selection
5. Interactive demo vs video

### Success Metrics
- Bounce rate reduction
- Time on page
- CTA click-through rate
- Service page navigation
- Conversion rate

---

*This Homepage Reference provides the complete specification for implementing the Attercop homepage with all content, design, and technical requirements.*

*Last Updated: November 2024*
*Version: 2.0*