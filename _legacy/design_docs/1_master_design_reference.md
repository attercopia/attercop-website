# Attercop Master Design Reference
## Brand, Structure & Visual Guidelines
## Version 2.0

---

## Brand Identity

### Company Overview
- **Company**: Attercop - Specialist AI Consultancy
- **Focus**: PE-backed mid-market firms
- **Location**: Brighton and London, UK
- **Language**: British English throughout

### Brand Positioning
- **Core Value**: Knowledge-backed, agentic AI delivered within PE timelines
- **Target Audience**: Private equity firms and their portfolio companies
- **Unique Differentiator**: 100-day transformations with production-ready systems

---

## Visual Design Philosophy

### Design Approach
**Visual-First, Graphic-Driven Enterprise Design**
- Sophisticated graphic-driven approach similar to PwC
- Emphasis on visual storytelling and data visualisations
- Interactive elements with progressive disclosure
- Bold typography as design element
- Brighton heritage reflected in colour choices

---

## Colour System

### Primary Palette
- **Deep Teal** (#1B4D5C) - Authority, depth
- **Sea Green** (#6DBAA1) - Innovation, Brighton heritage
- **Midnight** (#0A1628) - Premium sections
- **Pearl** (#F8FAFB) - Clean backgrounds

### Accent Colours
- **Coral** (#E97B7A) - CTAs, urgency
- **Amber** (#F4B942) - Highlights, warnings
- **Ocean** (#4A90A4) - Secondary actions
- **Sage** (#87A96B) - Life sciences specific

### Gradient System
- **Primary**: Teal to Sea Green - Main brand gradient
- **Premium**: Midnight to Teal - Premium/enterprise sections
- **Subtle**: Pearl to White - Background gradients
- **Mesh Gradients**: Modern, organic backgrounds for hero sections

### Usage Guidelines
- Primary colours for main navigation and key sections
- Accent colours sparingly for CTAs and highlights
- Gradients for hero sections and feature cards
- Maintain 60-30-10 colour distribution rule

---

## Typography System

### Font Stack
```css
/* Headlines */
--font-hero: 'Sora Display', system-ui, sans-serif;
--font-section: 'Inter Tight', 'Inter', system-ui, sans-serif;
--font-card: 'Inter', system-ui, sans-serif;
--font-body: 'Source Sans Pro', system-ui, sans-serif;
```

### Type Scale
- **Hero Headlines**: 72-120px (mobile: 48-72px)
- **Section Headers**: 48-64px (mobile: 32-48px)
- **Card Titles**: 24-32px (mobile: 20-24px)
- **Body Text**: 16-18px (mobile: 16px)
- **Small Text**: 14px

### Font Weights
- Hero: 700-900 (Bold to Black)
- Headers: 600-700 (Semi-bold to Bold)
- Body: 400 (Regular)
- Emphasis: 500-600 (Medium to Semi-bold)

---

## Site Structure

### Information Architecture
```
Root
├── Home
├── Services
│   ├── AI Strategy & Roadmap
│   ├── AI Governance
│   ├── Agentic AI
│   ├── Conversational AI
│   └── Knowledge Engineering
├── For PE Firms
│   ├── GP Advisory
│   ├── Deal Flow & Due Diligence
│   ├── Portfolio Operations
│   ├── Exit Planning
│   └── PE Resources
├── For Businesses
│   ├── 100-Day Transformation
│   ├── Knowledge Systems
│   ├── Process Automation
│   ├── Exit Readiness
│   └── Business Resources
├── For Life Sciences
│   ├── Medical Communications AI
│   ├── Clinical Data Intelligence
│   ├── Pharmaceutical R&D
│   ├── Healthcare Operations
│   ├── Regulatory Compliance
│   └── Life Sciences Resources
├── About
│   ├── Our Story
│   ├── Our Team
│   ├── Our Approach
│   ├── Partnerships
│   └── Attercop Labs
└── Contact
```

---

## Navigation Design

### Primary Navigation Bar
```
[Attercop Logo] | Services ▼ | For PE Firms ▼ | For Businesses ▼ | For Life Sciences ▼ | About ▼ | [Contact Us Button]
```

### Navigation Specifications
- **Height**: 80px desktop, 64px mobile
- **Background**: White with subtle shadow on scroll
- **Logo**: Left-aligned, 180px width
- **Menu Items**: Inter font, 16px, Deep Teal colour
- **Hover State**: Sea Green with smooth transition (0.3s)
- **Active State**: Underline accent, 3px, Sea Green
- **CTA Button**: Coral background, white text, rounded corners (8px)

### Dropdown Menus
- **Background**: White with subtle shadow
- **Border**: 1px solid #E5E7EB
- **Item Height**: 48px
- **Hover**: Light teal background (#F0F9FF)
- **Typography**: 15px, regular weight
- **Icons**: Optional, 20px, left-aligned
- **Animation**: Fade in with slight slide (0.2s)

### Mobile Navigation
- **Type**: Full-screen overlay
- **Trigger**: Hamburger menu (3 lines → X transition)
- **Background**: White with 95% opacity
- **Menu Items**: Full width, 56px height
- **Submenus**: Accordion-style expansion
- **Close**: Tap outside or X button

---

## Footer Design

### Footer Structure
```
Top Section (Dark Background - Midnight):
[Logo] | Newsletter Signup | Social Icons

Main Section (Four Columns):
Services        For PE Firms      Company         Resources
- Links         - Links           - About         - Whitepapers
                                 - Contact       - Blog
                                 - Careers       - Tools

Bottom Section:
© 2024 Attercop | Privacy | Terms | Cookie Policy | Brighton & London, UK
```

### Footer Specifications
- **Background**: Gradient from Midnight to Deep Teal
- **Text Colour**: White/Pearl for contrast
- **Links**: Pearl, hover state Sea Green
- **Padding**: 80px top/bottom, 40px mobile
- **Social Icons**: 32px, circular, outlined style
- **Newsletter**: Inline form with coral submit button

---

## Layout System

### Grid System
- **Container Max Width**: 1440px
- **Columns**: 12-column grid
- **Gutters**: 32px desktop, 16px mobile
- **Breakpoints**:
  - Mobile: 0-767px
  - Tablet: 768-1023px
  - Desktop: 1024-1439px
  - Wide: 1440px+

### Spacing Scale
```css
--space-xs: 4px;
--space-sm: 8px;
--space-md: 16px;
--space-lg: 24px;
--space-xl: 32px;
--space-2xl: 48px;
--space-3xl: 64px;
--space-4xl: 96px;
--space-5xl: 128px;
```

### Component Patterns
- **Cards**: 16px padding, 8px border radius, subtle shadow
- **Buttons**: 48px height, 24px horizontal padding, 8px radius
- **Forms**: 48px input height, 16px padding, 4px radius
- **Sections**: 96px vertical padding desktop, 64px mobile

---

## Animation & Transitions

### Motion Principles
- **Duration**: 0.2s for micro, 0.3-0.5s for macro interactions
- **Easing**: cubic-bezier(0.4, 0, 0.2, 1) for natural feel
- **Direction**: Consistent left-to-right, top-to-bottom flow
- **Performance**: 60fps target, GPU acceleration where possible

### Standard Animations
```css
/* Hover transitions */
--transition-default: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

/* Page transitions */
--transition-page: opacity 0.5s ease-in-out;

/* Scroll animations */
--animation-fade-up: fadeUp 0.6s ease-out;
--animation-scale-in: scaleIn 0.5s ease-out;
```

### Interactive Elements
- **Buttons**: Scale 0.98 on press, colour transition on hover
- **Cards**: Lift with shadow on hover, 4px translate Y
- **Links**: Colour transition with underline reveal
- **Dropdowns**: Fade + slight slide down
- **Modals**: Fade backdrop + scale content

### Scroll Animations
- **Trigger**: Elements animate when 20% visible
- **Stagger**: 0.1s delay between list items
- **Types**: Fade up, fade in, scale, slide
- **Library**: Framer Motion for complex sequences

---

## Component Library

### Button Styles
1. **Primary**: Coral background, white text
2. **Secondary**: Teal outline, teal text
3. **Ghost**: Transparent, teal text
4. **Disabled**: Grey background, 50% opacity

### Card Variants
1. **Feature Card**: Image top, gradient overlay
2. **Service Card**: Icon, title, description
3. **Metric Card**: Large number, label, trend
4. **Case Study Card**: Logo, quote, metrics

### Form Elements
- **Text Input**: Bottom border focus state
- **Select**: Custom dropdown arrow
- **Checkbox**: Custom teal check
- **Radio**: Custom teal fill
- **Textarea**: Auto-expand option

---

## Visual Elements

### Required Graphics
- **3D Knowledge Graph**: Interactive, WebGL-based
- **Agent Visualisation**: Animated flow diagram
- **Data Visualisations**: D3.js charts and graphs
- **Process Diagrams**: SVG with animations
- **Icon Set**: Custom line icons, 24px base

### Image Guidelines
- **Format**: WebP primary, JPEG fallback
- **Sizes**: Responsive images with srcset
- **Loading**: Lazy loading with blur-up effect
- **Alt Text**: Descriptive for accessibility
- **Aspect Ratios**: 16:9 hero, 4:3 cards, 1:1 avatars

---

## Responsive Design

### Mobile-First Approach
- Start with mobile layout
- Enhance for larger screens
- Touch-friendly targets (44px minimum)
- Simplified navigation
- Optimised images and assets

### Breakpoint Behaviour
- **Mobile**: Single column, stacked content
- **Tablet**: Two columns where appropriate
- **Desktop**: Full layout with sidebars
- **Wide**: Centred with max-width

### Performance Targets
- **Lighthouse Score**: 95+
- **First Contentful Paint**: <1.5s
- **Time to Interactive**: <3.5s
- **Cumulative Layout Shift**: <0.1
- **Largest Contentful Paint**: <2.5s

---

## Accessibility Standards

### WCAG 2.1 AA Compliance
- **Colour Contrast**: 4.5:1 minimum for body text
- **Focus States**: Visible keyboard navigation
- **Screen Readers**: Proper ARIA labels
- **Alt Text**: All images described
- **Semantic HTML**: Proper heading hierarchy

### Interactive Accessibility
- **Keyboard Navigation**: All interactive elements
- **Skip Links**: Jump to main content
- **Focus Trapping**: For modals and overlays
- **Reduced Motion**: Respect prefers-reduced-motion
- **Error Messages**: Clear and helpful

---

## Technical Implementation

### Frontend Stack
```javascript
// Core Technologies
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS

// Animation Libraries
- Framer Motion
- GSAP (scroll animations)
- Lottie (complex animations)

// 3D & Visualisation
- Three.js (3D graphics)
- D3.js (data visualisation)
- React Flow (node graphs)

// Performance
- Next/Image optimisation
- Dynamic imports
- Code splitting
```

### CSS Architecture
- **Methodology**: Utility-first with Tailwind
- **Custom Properties**: For design tokens
- **Scoped Styles**: CSS Modules for components
- **PostCSS**: For optimisation
- **Critical CSS**: Inline above-fold styles

---

## Browser Support

### Minimum Requirements
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile Safari iOS 14+
- Chrome Android 90+

### Progressive Enhancement
- Core functionality without JavaScript
- Enhanced features for modern browsers
- Graceful degradation for older browsers
- Feature detection over browser detection

---

## Quality Assurance

### Testing Requirements
- Cross-browser testing
- Mobile device testing
- Accessibility audits
- Performance monitoring
- SEO validation
- Broken link checking

### Monitoring
- Google Analytics 4
- Core Web Vitals tracking
- Error logging (Sentry)
- Uptime monitoring
- A/B testing framework

---

## Version Control

### Design Tokens
```json
{
  "version": "2.0",
  "updated": "2024-11",
  "tokens": {
    "colours": {},
    "typography": {},
    "spacing": {},
    "animation": {}
  }
}
```

### Change Management
- Semantic versioning for updates
- Documented change log
- Design system in Figma
- Component documentation in Storybook
- Regular design reviews

---

*This Master Design Reference serves as the single source of truth for all visual and structural decisions across the Attercop website.*

*Last Updated: November 2024*
*Version: 2.0*